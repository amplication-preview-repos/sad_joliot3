import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  author?: SortOrder;
  categories?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
