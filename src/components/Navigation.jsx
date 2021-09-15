import { Row, Pagination, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { GetCommentsActionCreators } from "../store/reducers/getComments/action-creators";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { currentPage, totalItems, lastPage } = useSelector(
    (state) => state.getComments
  );

  const paginationHandler = (value) => {
    dispatch(GetCommentsActionCreators.getData(value));
  };

  const buttonHandler = () => {
    dispatch(GetCommentsActionCreators.getData(currentPage + 1, true));
  };

  return (
    <>
      <Row justify="center" style={{ marginTop: "10px" }}>
        <Button onClick={buttonHandler} disabled={currentPage === lastPage}>
          Show more
        </Button>
      </Row>
      <Row justify="center" style={{ margin: "10px" }}>
        <Pagination
          defaultCurrent={1}
          current={currentPage}
          total={totalItems}
          showSizeChanger={false}
          onChange={paginationHandler}
        />
      </Row>
    </>
  );
};
