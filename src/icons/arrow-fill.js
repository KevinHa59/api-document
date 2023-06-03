export const ArrowRight = ({ fill = "currentColor", filled, size, height, width, label, ...props }) => {
  if (filled) {
    return (
      <svg width={size || width || 16} height={size || height || 16} viewBox="0 0 16 16" {...props}>
        <path
          d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 16} height={size || height || 16} viewBox="0 0 16 16" {...props}>
      <path
        fill={fill}
        d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
      ></path>
    </svg>
  );
};

export const ArrowDown = ({ fill = "currentColor", filled, size, height, width, label, ...props }) => {
  if (filled) {
    return (
      <svg width={size || width || 16} height={size || height || 16} viewBox="0 0 16 16" {...props}>
        <path
          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
      ></path>
    </svg>
  );
};

export const ArrowLeft = ({ fill = "currentColor", filled, size, height, width, label, ...props }) => {
  if (filled) {
    return (
      <svg width={size || width || 16} height={size || height || 16} viewBox="0 0 16 16" {...props}>
        <path
          d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"
      ></path>
    </svg>
  );
};

export const ArrowUp = ({ fill = "currentColor", filled, size, height, width, label, ...props }) => {
  if (filled) {
    return (
      <svg width={size || width || 16} height={size || height || 16} viewBox="0 0 16 16" {...props}>
        <path
          d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
          fill={fill}
        />
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || width || 24} height={size || height || 24} viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"
      ></path>
    </svg>
  );
};
