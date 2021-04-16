const GET_MENU_LIST = 'mypage/GET_MENU_LIST';
// const DELETE_MENU_LIST = 'mypage/DELETE_MENU_LIST';
// const ADD_NEW_MENU_LIST = 'mypage/ADD_NEW_MENU_LIST';
const ADD_WATER_DOSE = 'mypage/ADD_WATER_DOSE';
const RESET_WATER_DOSE = 'mypage/RESET_WATER_DOSE';
const ADD_DAILY_REVIEW = 'mypage/ADD_DAILY_REVIEW';
const DELETE_DAILY_REVIEW = 'mypage/DELETE_DAILY_REVIEW';

export const getMenuListAction = data => ({
  type: GET_MENU_LIST,
  payload: {
    data
  }
});

// export const deleteMenuListAction = data => ({
//   type: DELETE_MENU_LIST,
//   payload: {
//     data
//   }
// });

// export const addNewMenuListAction = ({ data, date }) => ({
//   type: ADD_NEW_MENU_LIST,
//   payload: {
//     data,
//     date
//   }
// });

export const addWaterDoseAction = (date, waterDose) => ({
  type: ADD_WATER_DOSE,
  payload: {
    date,
    waterDose
  }
});

export const resetWaterDoseAction = date => ({
  type: RESET_WATER_DOSE,
  payload: {
    date
  }
});

export const addDailyReviewAction = (date, review) => ({
  type: ADD_DAILY_REVIEW,
  payload: {
    date,
    review
  }
});

export const DeleteDailyReviewAction = date => ({
  type: DELETE_DAILY_REVIEW,
  payload: {
    date
  }
});

const initialState = {};

export default function menuList(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_LIST:
      return {
        ...action.payload.data
      };
    // case DELETE_MENU_LIST:
    //   return state;
    // case ADD_NEW_MENU_LIST:
    //   if (state[action.payload.date]) return state;

    //   return {
    //     ...state,
    //     ...action.payload.data,
    //     dailyReview: ''
    //   };
    case ADD_WATER_DOSE:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          waterDose: action.payload.waterDose
        }
      };
    case RESET_WATER_DOSE:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          waterDose: 0
        }
      };
    case ADD_DAILY_REVIEW:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          dailyReview: action.payload.review
        }
      };
    case DELETE_DAILY_REVIEW:
      return {
        ...state,
        [action.payload.date]: {
          ...state[action.payload.date],
          dailyReview: ''
        }
      };
    default:
      return state;
  }
}
