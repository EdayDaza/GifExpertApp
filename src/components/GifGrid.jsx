// import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { useFetchGifs } from "../hokks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
