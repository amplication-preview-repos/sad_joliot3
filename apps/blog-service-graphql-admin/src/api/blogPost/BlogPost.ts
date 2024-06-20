export type BlogPost = {
  author: string | null;
  categories?: Array<"Option1">;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
};
