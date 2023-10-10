export function EditIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_726_11)">
        <path
          d="M366.666 66.6665H300C133.333 66.6665 66.6665 133.333 66.6665 300V500C66.6665 666.666 133.333 733.333 300 733.333H500C666.666 733.333 733.333 666.666 733.333 500V433.333"
          stroke={color}
          stroke-width="50"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.667 100.667L272 363.333C262 373.333 252 393 250 407.333L235.667 507.666C230.333 544 256 569.333 292.333 564.333L392.667 550C406.667 548 426.333 538 436.667 528L699.333 265.333C744.667 220 766 167.333 699.333 100.667C632.667 34.0001 580 55.3335 534.667 100.667Z"
          stroke={color}
          stroke-width="50"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M497 138.33C519.333 217.997 581.667 280.33 661.667 302.997"
          stroke={color}
          stroke-width="50"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_726_11"
          x="-4"
          y="0"
          width="808"
          height="808"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_726_11"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_726_11"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
