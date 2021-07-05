import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { editProduct } from "../redux/action/products";

export default function EditProduct(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(editProduct({ ...values, id: props.productdata.id }));
    props.onCancel(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const data = props.data;
    if (props.productdata) {
      form.setFieldsValue({
        p_name: data.p_name,
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
            name="p_name"
            rules={[
              {
                required: true,
                message: "Please input product name!",
              },
            ]}
          >
            <Input className="form-control" placeholder="Product Name" />
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
