interface Props {
	src: string;
	size: "sm" | "md" | "lg";
	alt: string;
}
export default function Image({ src, size, alt }: Props) {
	const dimensions =
		size === "sm"
			? { width: 25, height: 25 }
			: size === "md"
			? { width: 50, height: 50 }
			: { width: 100, height: 100 };
	return <img src={src} alt={alt} {...dimensions} />;
}
