import {
  SET_FORM_UPDATE_PAGE_FORM_DATA,
  SET_FORM_UPDATE_PAGE_CITY_LIST,
  SET_FORM_UPDATE_PAGE_CHECKBOX_GROUP_LIST,
} from '../constants';

const defaultState = {
  formData: {},
  cityList: {},
  checkboxGroupList: [],
};

const formUpdatePage = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FORM_UPDATE_PAGE_FORM_DATA:
      return {
        ...state,
        formData: action.param,
      };
    case SET_FORM_UPDATE_PAGE_CITY_LIST:
      return {
        ...state,
        cityList: action.param,
      };
    case SET_FORM_UPDATE_PAGE_CHECKBOX_GROUP_LIST:
      return {
        ...state,
        checkboxGroupList: action.param,
      };
    default:
      return state;
  }
};

export default formUpdatePage;
