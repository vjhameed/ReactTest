import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addCategories } from "../redux/action/categories";
import { addProduct } from "../redux/action/products";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

export default function AddCategory(props) {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(addCategories({ ...values, id: uuidv4() }));

    props.onCancel(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
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
