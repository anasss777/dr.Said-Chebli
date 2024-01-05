export type Post = {
  _id: string;
  _type: 'post';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  author: {
    _type: 'reference';
    _ref: string;
    _key?: string;
  };
  mainImage: {
    _type: 'image';
    asset: {
      _type: 'reference';
      _ref: string;
      _key?: string;
    };
    alt: string;
  };
  categories: Array<{
    _type: 'reference';
    _ref: string;
    _key?: string;
  }>;
  publishedAt: string; // Change to Date if 'datetime' type is represented as a string
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
