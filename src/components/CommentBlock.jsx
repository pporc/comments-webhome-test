import { Card, Comment, Tooltip } from "antd";
import moment from "moment";

export const CommentBlock = (props) => (
  <Card bodyStyle={{ padding: "0 20px" }}>
    <Comment
      author={props.name}
      content={<p>{props.text}</p>}
      datetime={
        <Tooltip title={moment(props.created_at).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(props.created_at).fromNow()}</span>
        </Tooltip>
      }
    />
  </Card>
);
