import { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	priority?: boolean;
	className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
	src,
	alt,
	width,
	height,
	priority = false,
	className = "",
	...props
}) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading={priority ? "eager" : "lazy"}
			decoding="async"
			className={className}
			{...props}
		/>
	);
};

export default OptimizedImage;
