export type Book = {
  name: string;
  fileURL: string;
  mainImage: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
      _key?: string;
      url: string;
    };
    alt: string;
  };
  categories: Category[];
  body: Array<{
    _type: 'block';
    style: string;
    children: Array<{
      _type: 'span';
      text: string;
      marks: Array<string>;
    }>;
    markDefs?: Array<{
      _type: 'link';
      _key?: string;
      href: string;
    }>;
  }>;
};
  