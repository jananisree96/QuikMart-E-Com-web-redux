import React, { useState } from "react";
import { Table, Button, message, Modal } from "antd";
import { useGetDataQuery, useDeleteProductMutation } from "../service/api";

const ProductTable = () => {
  const { data: products, isLoading, isError, refetch } = useGetDataQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDeleteConfirm = (id) => {
    setSelectedProductId(id);
    setIsModalVisible(true);
  };

  const handleDelete = async () => {
    if (!selectedProductId) return;

    try {
      await deleteProduct(selectedProductId).unwrap();
      message.success("Product deleted successfully!");
      setIsModalVisible(false);
      setSelectedProductId(null);
      refetch(); // Refetch data to update the table
    } catch (err) {
      message.error("Failed to delete product.");
      console.error(err);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProductId(null);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="danger" onClick={() => showDeleteConfirm(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={{
          pageSize: 5, 
        }}
      />
      <Modal
        title="Confirm Deletion"
        visible={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Yes, delete it"
        cancelText="Cancel"
        centered
      >
        <p>
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>
      </Modal>
    </>
  );
};

export default ProductTable;
