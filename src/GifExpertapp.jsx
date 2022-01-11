import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertapp = () => {
  const [categorias, setcategorias] = useState(["One Punch"]);
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setcategorias={setcategorias} />
      <hr />
      <ol>
        {categorias.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </div>
  );
};
