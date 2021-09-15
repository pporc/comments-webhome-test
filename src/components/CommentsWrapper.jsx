import React, { useEffect, useState } from "react";
import { Comment, Layout, Empty, Card } from "antd";
import { CommentList } from "./CommentList";
import { Editor } from "./Editor";
import { useDispatch } from "react-redux";
import { GetCommentsActionCreators } from "../store/reducers/getComments/action-creators";
import { useSelector } from "react-redux";
import { Navigation } from "./Navigation";
import axios from "axios";

export const CommentsWrapper = () => {
  const dispatch = useDispatch();
  const { data, lastPage } = useSelector((state) => state.getComments);

  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    dispatch(GetCommentsActionCreators.getData());
  }, []);

  useEffect(() => {
    setComments(data);
  }, [data]);

  const handleSubmit = () => {
    setSubmitting(true);

    axios
      .post("https://jordan.ashton.fashion/api/goods/30/comments", {
        name,
        text: value,
      })
      .then(function (response) {
        setSubmitting(false);
        dispatch(GetCommentsActionCreators.getData(lastPage));
      })
      .catch(function (error) {
        setSubmitting(false);
        console.log(error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name === "name") return setName(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Layout.Content style={{ padding: "0 50px" }}>
      {comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}

      <Navigation />

      <Card title="New Comment">
        <Comment
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
              name={name}
            />
          }
        />
      </Card>
    </Layout.Content>
  );
};
