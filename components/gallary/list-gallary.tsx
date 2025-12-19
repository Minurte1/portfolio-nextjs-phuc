"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchImagesService } from "@/services/gallery-services";
import "../../scss/component/list-gallery.scss";
interface Image {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

const ListGallery = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const fetchImages = async (q: string) => {
    try {
      setLoading(true);
      const data = await fetchImagesService(q);
      setImages(data);
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm ảnh..."
        />
      </div>

      {selectedImage ? (
        <div className="detail-view">
          <button
            onClick={() => setSelectedImage(null)}
            className="back-button"
          >
            ← Back to Gallery
          </button>
          <div className="image-detail">
            <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
            <p>
              <b>Tags:</b> {selectedImage.tags}
            </p>
            <a href={selectedImage.largeImageURL} download>
              Download ảnh
            </a>
          </div>
        </div>
      ) : (
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="masonry-grid">
              {images.map((img) => (
                <Link
                  key={img.id}
                  href={`/details/${img.id}?url=${encodeURIComponent(
                    img.largeImageURL
                  )}&tags=${encodeURIComponent(img.tags)}`}
                  className="masonry-item"
                >
                  <img src={img.largeImageURL} alt={img.tags} loading="lazy" />
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListGallery;
