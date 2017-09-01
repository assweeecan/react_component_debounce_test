import makeActionCreator from '../utils/make-action-creator';
import sleep from '../utils/sleep-promise';

import cityList from '../mock/city-list';
import checkboxGroupList from '../mock/checkbox-group-list';

import {
  SET_FORM_UPDATE_PAGE_FORM_DATA,
  SET_FORM_UPDATE_PAGE_CITY_LIST,
  SET_FORM_UPDATE_PAGE_CHECKBOX_GROUP_LIST,
} from '../constants';

export const setFormData = makeActionCreator(SET_FORM_UPDATE_PAGE_FORM_DATA, 'param');
export const setCityList = makeActionCreator(SET_FORM_UPDATE_PAGE_CITY_LIST, 'param');
export const setCheckboxGroupList = makeActionCreator(SET_FORM_UPDATE_PAGE_CHECKBOX_GROUP_LIST, 'param');


export function fetchGetCityList() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(300);
    dispatch(setCityList(cityList));
  };
}

export function fetchGetCheckboxGroupList() {
  return async (dispatch) => {
    // 模拟ajax延迟
    await sleep(300);
    dispatch(setCheckboxGroupList(checkboxGroupList));
  };
}


export function init() {
  return async (dispatch) => {
    dispatch(fetchGetCityList());
    dispatch(fetchGetCheckboxGroupList());
  };
}
