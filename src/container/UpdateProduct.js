import React from 'react';
import { Table, Layout, Typography, Spin, Alert,Button } from 'antd';
import { useGetDataQuery } from '../service/api';

const { Header, Content } = Layout;
const { Title } = Typography;

const UpdateProduct = () => {
  const { data: products, error, isLoading } = useGetDataQuery();

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
          <Button type="primary" onClick={() => handleUpdate(record.id)}>
            Update
          </Button>
        ),
      },
    ];
  
    const handleUpdate = (id) => {
      console.log(`Update product with id: ${id}`);
      
    };
  

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
          <Table dataSource={products} columns={columns} rowKey="id" pagination={{
            pageSize: 5,
          }} />
        )}
      </Content>
    </Layout>
  );
};

export default UpdateProduct;
