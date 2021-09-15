const initialState = {
  data: [],
  currentPage: 1,
  lastPage: 1,
  perPage: 10,
  totalItems: 0,
};

export default function getCommentsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_DATA":
      return { ...state, data: [...state.data, ...action.payload] };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_TOTAL_ITEMS":
      return { ...state, totalItems: action.payload };
    case "SET_LAST_PAGE":
      return { ...state, lastPage: action.payload };
    default:
      return state;
  }
}
