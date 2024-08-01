import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Row,
  Col,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";


const CreateProduct = () => {



  const onFinish = (values) => {
    console.log("Form values:", values);
  };


  const handleUploadChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Form
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
        <Col span={12}>
          <Form.Item
            label="Thumbnail"
            name="thumbnail"
            rules={[{ required: true, message: "Please upload a thumbnail!" }]}
          >
            <Upload
              name="thumbnail"
              listType="picture"
              className="upload-list-inline"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => {
              
                setTimeout(() => {
                  onSuccess("ok");
                }, 1000);
              }}
              onChange={handleUploadChange}
            >
              <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
            </Upload>
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
