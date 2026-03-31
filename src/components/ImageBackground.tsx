interface ImageBackgroundProps {
  src: string;
  alt: string;
  className?: string;
  opacity?: number;
}

const ImageBackground = ({ src, alt, className = '', opacity = 0.3 }: ImageBackgroundProps) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ opacity }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

export default ImageBackground;
