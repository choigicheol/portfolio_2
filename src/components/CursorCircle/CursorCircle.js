import React from "react";
import { Pointer, PointerSmall } from "./CursorCircle.style";

function CursorCircle({ x, y }) {
  return (
    <div>
      <Pointer x={x} y={y} />
      <PointerSmall x={x} y={y} />
    </div>
  );
}

export default CursorCircle;
