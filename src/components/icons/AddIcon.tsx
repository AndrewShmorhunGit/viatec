export function AddIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M500 400H400M400 400H300M400 400V300M400 400V500"
        stroke={color}
        stroke-width="50"
        stroke-linecap="round"
      />
      <path
        d="M233.333 111.261C282.362 82.8988 339.287 66.6665 400 66.6665C584.093 66.6665 733.333 215.905 733.333 400C733.333 584.093 584.093 733.333 400 733.333C215.905 733.333 66.6667 584.093 66.6667 400C66.6667 339.286 82.8991 282.362 111.261 233.333"
        stroke={color}
        stroke-width="50"
        stroke-linecap="round"
      />
    </svg>
  );
}
