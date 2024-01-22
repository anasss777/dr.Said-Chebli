export type Video = {
    name: string;
    videoLink: string;
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
    