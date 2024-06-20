export type Comment = {
  commenter: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  replies?: Array<"Option1">;
  updatedAt: Date;
};
