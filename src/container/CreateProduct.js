import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Row,
  Col,
  message,
} from "antd";

import { useAddProductMutation } from "../service/api";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const [addProduct] = useAddProductMutation();

  const onFinish = async (values) => {
    try {
      await addProduct(values).unwrap();
      message.success("Product added successfully!");
      form.resetFields(); 
    } catch (error) {
      message.error("Failed to add product.");
    }
  };



  return (
    <Form
      form={form} 
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 800, margin: "0 auto" }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter the title!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please enter the quantity!" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Total"
            name="total"
            rules={[{ required: true, message: "Please enter the total!" }]}
          >
            <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Discount Percentage"
            name="discountPercentage"
            rules={[
              {
                required: true,
                message: "Please enter the discount percentage!",
              },
            ]}
          >
            <InputNumber
              min={0}
              max={100}
              step={0.01}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Discounted Total"
            name="discountedTotal"
            rules={[
              { required: true, message: "Please enter the discounted total!" },
            ]}
          >
            <InputNumber min={0} step={0.01} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Stock"
            name="stock"
            rules={[{ required: true, message: "Please enter the stock!" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProduct;
