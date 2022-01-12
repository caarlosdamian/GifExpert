import React, { useEffect } from "react";

export const GifGrid = ({ category }) => {
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=";
    const response = await fetch(url);
    const { data } = await response.json();

    const gifts = data.map(img =>{
        return {
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium?.url
        }
    })
    console.log(gifts);
  };
  useEffect(() => {
    getGifs();
  }, []);
  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};
