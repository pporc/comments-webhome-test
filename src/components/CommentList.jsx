import { List } from "antd";
import { CommentBlock } from "./CommentBlock";

export const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <CommentBlock {...props} />}
  />
);
