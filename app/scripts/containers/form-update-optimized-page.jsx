import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Checkbox, Form, Input as _input, Button } from 'antd';
import reactComponentDebounce from 'react-component-debounce';

import * as actions from '../actions/form-update-optimized-page';
import CityCheckboxGroup from '../components/form-update-optimized-page/city-checkbox-group';
import showLifeStyle from '../components/commons/show-react-lifecycle';

const Input = showLifeStyle()(reactComponentDebounce(500)(_input));
const CheckboxGroup = showLifeStyle()(reactComponentDebounce(500)(Checkbox.Group));

const FormItem = Form.Item;

// @connect(
//   state => state.FormUpdateOptimizedPage,
//   dispatch => bindActionCreators(actions, dispatch),
// )
// @Form.create()
class FormUpdateOptimizedPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  formItemStyle = {
    labelCol: { md: { span: 6 }, sm: { span: 8 } },
    wrapperCol: { md: { span: 12 }, sm: { span: 14 } },
  }

  formItemNoLabelStyle = {
    wrapperCol: {
      md: { span: 12, offset: 6 },
      sm: { span: 14, offset: 8 },
    },
  }

  render() {
    const {
      formItemStyle,
      formItemNoLabelStyle,
    } = this;

    const {
      formData,
      cityList,
      checkboxGroupList,

      fetchGetCityList,
      setCityList,
    } = this.props;

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal">

        <FormItem
          label="外部改变表单"
          {...formItemStyle}
        >
          <Button type="primary" onClick={fetchGetCityList}>重新加载城市</Button>
          <Button onClick={() => setCityList({})}>清除城市</Button>
        </FormItem>

        <FormItem
          label="输入框"
          {...formItemStyle}
        >
          {getFieldDecorator('theInput', {})(
            <Input />,
          )}
        </FormItem>

        <FormItem
          label="选择框"
          {...formItemStyle}
        >
          <div style={{ maxHeight: 500, overflowY: 'auto' }}>
            {getFieldDecorator('checkboxgroup', {
              initialValue: [],
            })(
              <CheckboxGroup options={checkboxGroupList} />,
            )}
          </div>
        </FormItem>

        <FormItem
          label="城市"
          {...formItemStyle}
        >
          {getFieldDecorator('city', {
            initialValue: [],
          })(
            <CityCheckboxGroup
              size="large"
              options={cityList}
            />,
          )}
        </FormItem>

        <FormItem
          {...formItemNoLabelStyle}
        >
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

FormUpdateOptimizedPage.defaultProps = {
  form: {},
  formData: {},

  init: () => undefined,
};

FormUpdateOptimizedPage.propTypes = {
  form: PropTypes.objectOf(PropTypes.func),
  formData: PropTypes.objectOf(PropTypes.any),

  init: PropTypes.func,
};

export default connect(
  state => state.formUpdateOptimizedPage,
  dispatch => bindActionCreators(actions, dispatch),
)(Form.create()(FormUpdateOptimizedPage));
// export default FormUpdateOptimizedPage;
