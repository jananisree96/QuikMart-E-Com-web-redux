import React, { useState } from 'react';
import { Table, Layout, Typography, Spin, Alert, Button, Modal, Form, Input, InputNumber } from 'antd';
import { useGetDataQuery, useUpdateProductMutation } from '../service/api';

const { Header, Content } = Layout;
const { Title } = Typography;

const UpdateProduct = () => {
  const { data: products, error, isLoading, refetch  } = useGetDataQuery();
  const [updateProduct] = useUpdateProductMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [form] = Form.useForm(); 

  const handleUpdate = (product) => {
    setCurrentProduct(product);
    form.setFieldsValue(product); 
    setIsModalVisible(true);
  };

  const handleOk = async (values) => {
    try {
      await updateProduct({ id: currentProduct.id, ...values }).unwrap();
      await refetch();
      setIsModalVisible(false);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => `$${total.toFixed(2)}`,
    },
    {
      title: 'Discount Percentage',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
      render: (discountPercentage) => `${discountPercentage}%`,
    },
    {
      title: 'Discounted Total',
      dataIndex: 'discountedTotal',
      key: 'discountedTotal',
      render: (discountedTotal) => `$${discountedTotal.toFixed(2)}`,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleUpdate(record)}>
          Update
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ padding: '20px' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Title level={2}>Product List</Title>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        {isLoading ? (
          <Spin size="large" />
        ) : error ? (
          <Alert message="Error" description={error.message} type="error" showIcon />
        ) : (
          <Table dataSource={products} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
        )}
        <Modal
          title="Update Product"
          visible={isModalVisible}
          onOk={() => form.submit()} 
          onCancel={handleCancel}
          okText="Update"
          cancelText="Cancel"
        >
          <Form
            form={form} 
            layout="vertical"
            onFinish={handleOk} 
          >
            <Form.Item name="title" label="Title">
              <Input />
            </Form.Item>
            <Form.Item name="price" label="Price">
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item name="quantity" label="Quantity">
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item name="discountPercentage" label="Discount Percentage">
              <InputNumber min={0} max={100} />
            </Form.Item>
            <Form.Item name="discountedTotal" label="Discounted Total">
              <InputNumber min={0} />
            </Form.Item>
            <Form.Item name="stock" label="Stock">
              <InputNumber min={0} />
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default UpdateProduct;
