import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commenter";

export const CommentTitle = (record: TComment): string => {
  return record.commenter?.toString() || String(record.id);
};
