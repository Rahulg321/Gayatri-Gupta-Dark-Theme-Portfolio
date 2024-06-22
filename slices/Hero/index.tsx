import { Button } from "@/components/ui/button";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Mail } from "lucide-react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space narrow-container min-h-[90vh] flex items-center justify-center"
    >
      <div className="space-y-4 content-center">
        <h3 className="text-muted-foreground">Hi I am Gayatri ✋</h3>
        <h3>
          I am an Indian attorney and remote paralegal <br /> my mission is to
          streamline operations for law firms.
        </h3>
        <p className="text-muted-foreground">
          Advocate Gayatri Gupta: Delivering Expert Paralegal Assistance and
          Contract Management Solutions to US and Canadian Clients. Specializing
          in Legal Research, Documentation, and Compliance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
