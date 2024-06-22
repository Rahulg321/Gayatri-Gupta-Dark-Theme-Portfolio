import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Pen, Quote } from "lucide-react";

/**
 * Props for `StickyColumn`.
 */
export type StickyColumnProps = SliceComponentProps<Content.StickyColumnSlice>;

/**
 * Component for "StickyColumn" Slices.
 */
const StickyColumn = ({ slice }: StickyColumnProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space xl-narrow-container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="sticky top-6">
            <span className="text-muted-foreground">
              <Pen className="inline-block mr-1 mb-2" /> Composable
            </span>
            <h3>Total Control over your content</h3>
            <p className="text-muted-foreground">
              The power of your favorite commerce backends, with the freedom of
              open-source frontend frameworks. From content management to URL
              pathnames, Vercel gives you total Frontend control.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Quote />
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground">
                With our previous managed service, we were restricted to their
                platform, so we were restricted in what we were able to build.
                Going headless allowed us to keep the power of that commerce
                backend, and bring in the UI flexibility of Next.js.
              </p>
              <span className="block text-right">Destiny Aigbe</span>
              <span className="block text-right">CEO - Aigbe Law Firm</span>
            </div>
          </div>
          <div>
            <Quote />
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground">
                With our previous managed service, we were restricted to their
                platform, so we were restricted in what we were able to build.
                Going headless allowed us to keep the power of that commerce
                backend, and bring in the UI flexibility of Next.js.
              </p>
              <span className="block text-right">Mary Mock</span>
              <span className="block text-right">Vinasha Publicals</span>
            </div>
          </div>
          <div>
            <Quote />
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                rem! Ea cum ab nostrum fugiat voluptas at atque, inventore
                libero sequi laudantium, esse eos vitae cumque quos earum,
                voluptatum unde!
              </p>
              <span className="block text-right">Joanna Robinson</span>
              <span className="block text-right">CEO - Aigbe Law Firm</span>
            </div>
          </div>
          <div>
            <Quote />
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground">
                With our previous managed service, we were restricted to their
                platform, so we were restricted in what we were able to build.
                Going headless allowed us to keep the power of that commerce
                backend, and bring in the UI flexibility of Next.js.
              </p>
              <span className="block text-right">Destiny Aigbe</span>
              <span className="block text-right">CEO - Aigbe Law Firm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyColumn;
