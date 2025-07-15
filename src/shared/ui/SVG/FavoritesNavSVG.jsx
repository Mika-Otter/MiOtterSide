import * as React from "react";
const FavoritesNavSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={10}
    style={{
      position: "absolute",
      widht: "100%",
      height: "100%",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
    }}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M9.126 5.372 10.322.744h1.976L9.594 10H7.748L6.331 3.682 4.901 10H3.029L.325.744h2.041l1.196 4.628.442 1.859.377-1.859L5.395.744h1.898l1.014 4.628.377 1.859.442-1.859ZM14.376 10h-2.145V8.05h2.145V10Z"
    />
  </svg>
);
export default FavoritesNavSVG;
