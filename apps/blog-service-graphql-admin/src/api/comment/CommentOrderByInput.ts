import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commenter?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  replies?: SortOrder;
  updatedAt?: SortOrder;
};
