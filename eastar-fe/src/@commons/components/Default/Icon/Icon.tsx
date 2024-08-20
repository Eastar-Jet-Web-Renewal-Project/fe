export type IconProps = {
  src: string;
  alt: string;
};

export default function Icon({ src, alt }: IconProps) {
  return (
    <svg role="img" aria-label={alt}>
      <use href={src} />
    </svg>
  );
}
