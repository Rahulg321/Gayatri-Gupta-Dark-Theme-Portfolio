// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Blogpost → Categories*
 */
export interface BlogpostDocumentDataCategoriesItem {
  /**
   * Category field in *Blogpost → Categories*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.categories[].category
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  category: prismic.ContentRelationshipField<"category">;
}

type BlogpostDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Blogpost documents
 */
interface BlogpostDocumentData {
  /**
   * Title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Featured Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.featured_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featured_image: prismic.ImageField<never>;

  /**
   * Publication Date field in *Blogpost*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.publication_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publication_date: prismic.DateField;

  /**
   * Categories field in *Blogpost*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.categories[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<Simplify<BlogpostDocumentDataCategoriesItem>>;

  /**
   * Slice Zone field in *Blogpost*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpostDocumentDataSlicesSlice> /**
   * Meta Title field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpost.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blogpost*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpost.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blogpost*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpost.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blogpost document from Prismic
 *
 * - **API ID**: `blogpost`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpostDocumentData>,
    "blogpost",
    Lang
  >;

/**
 * Content for Book documents
 */
interface BookDocumentData {
  /**
   * Title field in *Book*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Book Image field in *Book*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: book.book_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  book_image: prismic.ImageField<never>;

  /**
   * Author field in *Book*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: book.author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  author: prismic.KeyTextField;

  /**
   * Finishing Date field in *Book*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: book.finishing_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  finishing_date: prismic.DateField;

  /**
   * Rating field in *Book*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: book.rating
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  rating: prismic.NumberField;
}

/**
 * Book document from Prismic
 *
 * - **API ID**: `book`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BookDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BookDocumentData>, "book", Lang>;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Name field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Item in *GalleryImages → Images*
 */
export interface GalleryimagesDocumentDataImagesItem {
  /**
   * GalleryImage field in *GalleryImages → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: galleryimages.images[].galleryimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  galleryimage: prismic.ImageField<never>;
}

/**
 * Content for GalleryImages documents
 */
interface GalleryimagesDocumentData {
  /**
   * Images field in *GalleryImages*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: galleryimages.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<GalleryimagesDocumentDataImagesItem>>;
}

/**
 * GalleryImages document from Prismic
 *
 * - **API ID**: `galleryimages`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GalleryimagesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<GalleryimagesDocumentData>,
    "galleryimages",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | MutedInfoCardsSlice
  | StickyColumnSlice
  | HeadingContentButtonSlice
  | ColumnHeadingButtonSlice
  | TextBlockSlice
  | HeroSlice
  | GallerySliceSlice
  | AboutMainPageSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | AboutMainPageSlice
  | TextBlockSlice
  | HeroSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectDocumentDataSlicesSlice = TextBlockSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Date Published field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.date_published
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_published: prismic.DateField;

  /**
   * Timeline field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.timeline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  timeline: prismic.KeyTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

export type AllDocumentTypes =
  | BlogpostDocument
  | BookDocument
  | CategoryDocument
  | GalleryimagesDocument
  | HomepageDocument
  | PageDocument
  | ProjectDocument;

/**
 * Primary content in *AboutMainPage → Default → Primary*
 */
export interface AboutMainPageSliceDefaultPrimary {
  /**
   * Heading field in *AboutMainPage → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_main_page.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Content field in *AboutMainPage → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_main_page.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for AboutMainPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMainPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutMainPageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutMainPage*
 */
type AboutMainPageSliceVariation = AboutMainPageSliceDefault;

/**
 * AboutMainPage Shared Slice
 *
 * - **API ID**: `about_main_page`
 * - **Description**: AboutMainPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMainPageSlice = prismic.SharedSlice<
  "about_main_page",
  AboutMainPageSliceVariation
>;

/**
 * Primary content in *ColumnHeadingButton → Default → Primary*
 */
export interface ColumnHeadingButtonSliceDefaultPrimary {
  /**
   * Heading field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Tagline field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * IconButtonLabel field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.iconbuttonlabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  iconbuttonlabel: prismic.KeyTextField;

  /**
   * IconButtonLink field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.iconbuttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  iconbuttonlink: prismic.LinkField;

  /**
   * Button Label field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button Link field in *ColumnHeadingButton → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: column_heading_button.default.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for ColumnHeadingButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColumnHeadingButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ColumnHeadingButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ColumnHeadingButton*
 */
type ColumnHeadingButtonSliceVariation = ColumnHeadingButtonSliceDefault;

/**
 * ColumnHeadingButton Shared Slice
 *
 * - **API ID**: `column_heading_button`
 * - **Description**: ColumnHeadingButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ColumnHeadingButtonSlice = prismic.SharedSlice<
  "column_heading_button",
  ColumnHeadingButtonSliceVariation
>;

/**
 * Default variation for GallerySlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *GallerySlice*
 */
type GallerySliceSliceVariation = GallerySliceSliceDefault;

/**
 * GallerySlice Shared Slice
 *
 * - **API ID**: `gallery_slice`
 * - **Description**: GallerySlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceSlice = prismic.SharedSlice<
  "gallery_slice",
  GallerySliceSliceVariation
>;

/**
 * Primary content in *HeadingContentButton → Default → Primary*
 */
export interface HeadingContentButtonSliceDefaultPrimary {
  /**
   * heading field in *HeadingContentButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_content_button.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * tagline field in *HeadingContentButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_content_button.default.primary.tagline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tagline: prismic.KeyTextField;

  /**
   * button label field in *HeadingContentButton → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: heading_content_button.default.primary.button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Default variation for HeadingContentButton Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingContentButtonSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeadingContentButtonSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HeadingContentButton*
 */
type HeadingContentButtonSliceVariation = HeadingContentButtonSliceDefault;

/**
 * HeadingContentButton Shared Slice
 *
 * - **API ID**: `heading_content_button`
 * - **Description**: HeadingContentButton
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeadingContentButtonSlice = prismic.SharedSlice<
  "heading_content_button",
  HeadingContentButtonSliceVariation
>;

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Default variation for MutedInfoCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MutedInfoCardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *MutedInfoCards*
 */
type MutedInfoCardsSliceVariation = MutedInfoCardsSliceDefault;

/**
 * MutedInfoCards Shared Slice
 *
 * - **API ID**: `muted_info_cards`
 * - **Description**: MutedInfoCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MutedInfoCardsSlice = prismic.SharedSlice<
  "muted_info_cards",
  MutedInfoCardsSliceVariation
>;

/**
 * Default variation for StickyColumn Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StickyColumnSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *StickyColumn*
 */
type StickyColumnSliceVariation = StickyColumnSliceDefault;

/**
 * StickyColumn Shared Slice
 *
 * - **API ID**: `sticky_column`
 * - **Description**: StickyColumn
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StickyColumnSlice = prismic.SharedSlice<
  "sticky_column",
  StickyColumnSliceVariation
>;

/**
 * Primary content in *TextBlock → Default → Primary*
 */
export interface TextBlockSliceDefaultPrimary {
  /**
   * Content field in *TextBlock → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text_block.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for TextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TextBlock*
 */
type TextBlockSliceVariation = TextBlockSliceDefault;

/**
 * TextBlock Shared Slice
 *
 * - **API ID**: `text_block`
 * - **Description**: TextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockSlice = prismic.SharedSlice<
  "text_block",
  TextBlockSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpostDocument,
      BlogpostDocumentData,
      BlogpostDocumentDataCategoriesItem,
      BlogpostDocumentDataSlicesSlice,
      BookDocument,
      BookDocumentData,
      CategoryDocument,
      CategoryDocumentData,
      GalleryimagesDocument,
      GalleryimagesDocumentData,
      GalleryimagesDocumentDataImagesItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      AllDocumentTypes,
      AboutMainPageSlice,
      AboutMainPageSliceDefaultPrimary,
      AboutMainPageSliceVariation,
      AboutMainPageSliceDefault,
      ColumnHeadingButtonSlice,
      ColumnHeadingButtonSliceDefaultPrimary,
      ColumnHeadingButtonSliceVariation,
      ColumnHeadingButtonSliceDefault,
      GallerySliceSlice,
      GallerySliceSliceVariation,
      GallerySliceSliceDefault,
      HeadingContentButtonSlice,
      HeadingContentButtonSliceDefaultPrimary,
      HeadingContentButtonSliceVariation,
      HeadingContentButtonSliceDefault,
      HeroSlice,
      HeroSliceVariation,
      HeroSliceDefault,
      MutedInfoCardsSlice,
      MutedInfoCardsSliceVariation,
      MutedInfoCardsSliceDefault,
      StickyColumnSlice,
      StickyColumnSliceVariation,
      StickyColumnSliceDefault,
      TextBlockSlice,
      TextBlockSliceDefaultPrimary,
      TextBlockSliceVariation,
      TextBlockSliceDefault,
    };
  }
}
