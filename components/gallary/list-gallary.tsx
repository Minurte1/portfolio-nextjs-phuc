"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchImagesService } from "@/services/gallery-services";

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
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm ảnh..."
          style={{
            padding: "8px",
            width: "250px",
            border: "1px solid #e7ccde",
          }}
        />
      </div>
      {selectedImage ? (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              marginBottom: "15px",
              padding: "8px 12px",
              cursor: "pointer",
            }}
          >
            ← Back to Gallery
          </button>
          <div>
            <img
              src={selectedImage.largeImageURL}
              alt={selectedImage.tags}
              style={{
                maxWidth: "90%",
                maxHeight: "70vh",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <p>
              <b>Tags:</b> {selectedImage.tags}
            </p>
            <a href={selectedImage.largeImageURL} download>
              Download ảnh
            </a>
          </div>
        </div>
      ) : (
        // Gallery
        <>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "15px",
              }}
            >
              {images.map((img) => (
                <Link
                  key={img.id}
                  href={`/details/${img.id}?url=${encodeURIComponent(
                    img.largeImageURL
                  )}&tags=${encodeURIComponent(img.tags)}`}
                  style={{ cursor: "pointer" }}
                  // onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.webformatURL}
                    alt={img.tags}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
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
