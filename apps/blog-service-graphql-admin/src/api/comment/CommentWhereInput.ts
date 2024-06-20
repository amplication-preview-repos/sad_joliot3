import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  commenter?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
