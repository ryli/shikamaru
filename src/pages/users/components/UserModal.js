import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

class UserEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  showModelHandler = e => {
    if (e) e.stopPropagation()
    this.setState({
      visible: true,
    })
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    })
  };

  okHandler = () => {
    const { form, onOk } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        onOk(values)
        this.hideModelHandler()
      }
    })
  };

  render() {
    const { visible } = this.state
    const { children, form, record } = this.props
    const { getFieldDecorator } = form
    const { name, email, website } = record
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }

    return (
      <span>
        <span onClick={this.showModelHandler} role="button" tabIndex={0}>
          { children }
        </span>
        <Modal
          title="Edit User"
          visible={visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="Name"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Email"
            >
              {
                getFieldDecorator('email', {
                  initialValue: email,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Website"
            >
              {
                getFieldDecorator('website', {
                  initialValue: website,
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    )
  }
}

export default Form.create()(UserEditModal)
