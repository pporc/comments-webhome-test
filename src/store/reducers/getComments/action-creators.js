import axios from "axios";

export const GetCommentsActionCreators = {
  setData: (data) => ({ type: "SET_DATA", payload: data }),
  setUpdateData: (data) => ({ type: "UPDATE_DATA", payload: data }),
  setCurrentPage: (page) => ({ type: "SET_CURRENT_PAGE", payload: page }),
  setLastPage: (page) => ({ type: "SET_LAST_PAGE", payload: page }),
  setTotalItems: (value) => ({ type: "SET_TOTAL_ITEMS", payload: value }),

  getData:
    (page = 1, rewrite = false) =>
    async (dispatch) => {
      const { data } = await axios.get(
        `https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`
      );
      dispatch(GetCommentsActionCreators.setCurrentPage(data.current_page));
      dispatch(GetCommentsActionCreators.setTotalItems(data.total));
      dispatch(GetCommentsActionCreators.setLastPage(data.last_page));

      rewrite
        ? dispatch(GetCommentsActionCreators.setUpdateData(data.data))
        : dispatch(GetCommentsActionCreators.setData(data.data));
    },
};
