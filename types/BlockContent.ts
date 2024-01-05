export type blockContent = {
  _id: string;
  _createdAt: Date;
  _type: string; // Assuming '_type' is a string, as it's typically a string identifier in Sanity.io
  // Other fields specific to ContentBlock
  // Add or modify as needed
  text?: string; // For text content within the block
  // Add other properties specific to the block content
  // For example, if it includes an image, you might have:
  imageUrl?: string;
  altText?: string;
};
