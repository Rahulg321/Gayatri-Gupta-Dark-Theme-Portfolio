import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GallerySlice`.
 */
export type GallerySliceProps = SliceComponentProps<Content.GallerySliceSlice>;

/**
 * Component for "GallerySlice" Slices.
 */
const GallerySlice = ({ slice }: GallerySliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for gallery_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GallerySlice;
