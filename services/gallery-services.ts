import axios from "axios";

export const fetchImagesService = async (q: string) => {
  const res = await axios.get("https://pixabay.com/api/", {
    params: {
      key: process.env.NEXT_PUBLIC_PIXABAY_KEY_1,
      q,
      image_type: "photo",
      per_page: 50,
    },
  });

  return res.data.hits || [];
};
