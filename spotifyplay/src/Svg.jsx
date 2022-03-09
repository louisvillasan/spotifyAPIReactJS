import React from 'react';

const Svg = ({icon, width, height, stroke}) => {
    
    const music = (
        <svg
        viewBox="0 0 512 512"
          width={width}
          height={height}
          stroke={stroke}
          strokeWidth="2"
          fill="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M511.1 367.1c0 44.18-42.98 80-95.1 80s-95.1-35.82-95.1-79.1c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32.01 4.898V148.1L192 224l-.0023 208.1C191.1 476.2 149 512 95.1 512S0 476.2 0 432c0-44.18 42.98-79.1 95.1-79.1c11.28 0 21.95 1.92 32 4.898V126.5c0-12.97 10.06-26.63 22.41-30.52l319.1-94.49C472.1 .6615 477.3 0 480 0c17.66 0 31.97 14.34 32 31.99L511.1 367.1z"/>
        </svg>
      );

      const lock = (
        <svg
          viewBox="0 0 24 24"
          width={width}
          height={height}
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      );


      const playlist = (
        <svg
        viewBox="0 0 24 24"
          width={width}
          height={height}
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          
            <path
            d="M6,9 L16,9 C16.55,9 17,9.45 17,10 C17,10.55 16.55,11 16,11 L6,11 C5.45,11 5,10.55 5,10 C5,9.45 5.45,9 6,9 Z M6,5 L16,5 C16.55,5 17,5.45 17,6 C17,6.55 16.55,7 16,7 L6,7 C5.45,7 5,6.55 5,6 C5,5.45 5.45,5 6,5 Z M6,13 L12,13 C12.55,13 13,13.45 13,14 C13,14.55 12.55,15 12,15 L6,15 C5.45,15 5,14.55 5,14 C5,13.45 5.45,13 6,13 Z M15,13.88 L15,18.11 C15,18.5 15.42,18.74 15.76,18.54 L19.29,16.42 C19.61,16.23 19.61,15.76 19.29,15.56 L15.76,13.44 C15.42,13.25 15,13.49 15,13.88 Z"
                    id="🔹Icon-Color"
                    fill="#1D1D1D"
            ></path>
              
        </svg>
      );

      switch (icon) {
        case "music":
          return music;
        case "lock":
          return lock;
        case "playlist":
            return playlist
        default:
          return null;
      }
    }
    
    //default look of our icons
    //pass width, height and stroke props to override these
    Svg.defaultProps = {
      width: "24",
      height: "24",
      stroke: "#FFF"
    }

export default Svg;
