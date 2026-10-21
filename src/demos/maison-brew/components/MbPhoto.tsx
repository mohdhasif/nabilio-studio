import Image from "next/image";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "../content";

type Props = {
  photo: PhotoSlot;
  className?: string;
  /** Rendered width hints so next/image serves an appropriately sized file. */
  sizes?: string;
  /** Above-the-fold image: load eagerly with high fetch priority. */
  priority?: boolean;
};

/** Cropped photo frame; the wrapper's aspect ratio sets the shape and the image covers it. */
export function MbPhoto({ photo, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority = false }: Props) {
  return (
    <div className={cn("relative overflow-hidden bg-mb-beige", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        placeholder="blur"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="object-cover"
      />
    </div>
  );
}
