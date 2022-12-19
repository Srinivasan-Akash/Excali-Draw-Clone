import Head from "next/head";
import Image from "next/image";
import styles from "./Canvas.module.css";
import { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import Footer from "../Footer/Footer";

const generator = rough.generator();
const createElement = (x1, y1, x2, y2) => {
  const roughElement = generator.line(x1, y1, x2, y2);
  return { x1, y1, x2, y2, roughElement };
};

export default function Canvas() {
  const [elements, setElements] = useState([]);
  const [drawing, setDrawing] = useState(false);

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const roughCanvas = rough.canvas(canvas);
    elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
  }, [elements]);

  const handleMouseMove = (event) => {
    if (!drawing) return;
    const { clientX, clientY } = event;
    const index = elements.length - 1;
    const { x1, y1 } = elements[index];
    const updateElement = createElement(x1, y1, clientX, clientY);

    const elementsCopy = [...elements];
    elementsCopy[index] = updateElement;
    setElements(elementsCopy);

    console.log(clientX, clientY);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const handleMouseDown = (e) => {
    setDrawing(true);
    const { clientX, clientY } = e;

    const element = createElement(clientX, clientY, clientX, clientY);
    setElements((prevState) => [...prevState, element]);
  };

  return (
    <>
      <canvas
        className={styles.canvas}
        id="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></canvas>
      <Footer></Footer>
    </>
  );
}