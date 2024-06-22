import { ArrowButton } from "@/components/ArrowButton";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `MutedInfoCards`.
 */
export type MutedInfoCardsProps =
  SliceComponentProps<Content.MutedInfoCardsSlice>;

/**
 * Component for "MutedInfoCards" Slices.
 */
const MutedInfoCards = ({ slice }: MutedInfoCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space-xl xl-narrow-container "
    >
      <div className="bg-muted rounded-lg border-2">
        <div className="px-6 py-8 border-b-2 dark:border-zinc-700">
          <h2>Make infra your competitive advantage.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <SectionCard
            heading="Seamless Iteration"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, perferendis dolorum officia neque praesentium, inventore earum."
            link="lorem"
          />
          <SectionCard
            heading="Global Performance"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, perferendis dolorum officia neque praesentium,."
            link=""
          />
          <SectionCard
            heading="Infinite Scale"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, perferendis dolorum officia neque praesentium"
            link=""
          />
        </div>
      </div>
    </section>
  );
};

export default MutedInfoCards;

function SectionCard({
  heading,
  description,
  link,
}: {
  heading: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="hover:bg-zinc-200 transition duration-150 ease-in-out dark:hover:bg-zinc-700 py-8 px-4 border-r-2 dark:border-zinc-700 last:border-none flex flex-col justify-between"
    >
      <h4>{heading}</h4>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ArrowButton />
    </Link>
  );
}
