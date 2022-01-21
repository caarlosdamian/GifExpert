import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFecthGifs } from "./hooks/useFecthGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="card-grid">
          <ol>
            {data?.map((value) => (
              <GifGridItem key={value?.id} {...value} />
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
