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
            <span className="text-muted-foreground mb-2">
              <Pen className="inline-block h-4 w-4 mr-1 mb-2" /> Words of
              Appreciation
            </span>
            <h3>Testimonials</h3>
            <p className="text-muted-foreground">
              Hear from those who have experienced my dedication firsthand.
              Their stories reflect my commitment to excellence. Discover how
              I've helped clients achieve their legal goals.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Quote />
            <div className="mt-4 space-y-2 ">
              <p className="text-muted-foreground text-pretty">
                I highly recommend Gayatri for her exceptional work at my law
                firm. She has managed our blog with impressive skills, ensuring
                informative, accurate, and engaging content. Her administrative
                support has been invaluable, demonstrating remarkable
                organizational skills and efficiency. She also drafts engagement
                letters with precision, contributing to clear client
                communication. Reliable, dependable, and always willing to go
                the extra mile, Gayatri is a proactive and adaptable
                professional who consistently delivers high-quality work. She
                would be an asset to any organization.
              </p>
              <span className="block text-right">Destiny Aigbe</span>
              <span className="block text-right">
                Aigbe Law Firm, Dark Alpha Capital
              </span>
            </div>
          </div>
          <div>
            <Quote />
            <div className="mt-4 space-y-2">
              <p className="text-muted-foreground text-pretty">
                Gayatri has provided exceptional assistance with a domestic
                violence case at my law firm. She was instrumental in creating a
                detailed evidence grid for the victim, showcasing her meticulous
                attention to detail and strong analytical skills. Gayatri
                consistently adhered to deadlines and was always available when
                needed, demonstrating exceptional reliability and commitment.
                Her ability to manage sensitive information with care and her
                unwavering support throughout the case were invaluable. She is a
                dedicated and dependable professional who would be a tremendous
                asset to any team.
              </p>
              <span className="block text-right">Mary Mock</span>
              <span className="block text-right">Mock Law, ABC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyColumn;
