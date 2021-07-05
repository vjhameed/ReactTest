import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { editCategories } from "../redux/action/categories";
import { editProduct } from "../redux/action/products";
import { useLocation } from "react-router-dom";

export default function EditCategory(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(editCategories({ ...values, id: props.categorydata.id }));

    props.onCancel(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const data = props.data;
    if (props.categorydata) {
      form.setFieldsValue({
        c_name: data.c_name,
        type: data.type,
        description: data.description,
      });
    }
  });
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="row">
        <div className="col-md-6">
          <Form.Item
            label=""
            name="c_name"
            rules={[
              {
                required: true,
                message: "Please input category name!",
              },
            ]}
          >
            <Input className="form-control" placeholder="Category Name" />
          </Form.Item>
        </div>
        <div className="col-md-6">
          <Form.Item
            label=""
            name="type"
            rules={[
              {
                required: true,
                message: "Please input type!",
              },
            ]}
          >
            <Input className="form-control" placeholder="Type" />
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Form.Item
            label=""
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input className="form-control" placeholder="Description" />
          </Form.Item>
        </div>
      </div>
      <Button className="mr-2" onClick={() => props.onCancel(false)}>
        Discard
      </Button>
      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  );
}
