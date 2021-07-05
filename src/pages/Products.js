import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import style from "../styles/mainContent.module.css";
import { Modal } from "antd";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/action/products";

export default function Products() {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editProduct, setEditProduct] = useState();
  const products = useSelector((state) => state.p_data.products);
  const dispatch = useDispatch();
  return (
    <>
      <button className={style.AddBtn} onClick={() => setAddModalVisible(true)}>
        <PlusOutlined />
        Add Product
      </button>
      <table className={style.dataTable}>
        <colgroup>
          <col width="5%" />
          <col width="20%" />
          <col width="15%" />
          <col width="40%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Products Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length == 0
            ? ""
            : products.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.p_name}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-danger mr-3" onClick={() => dispatch(removeProduct(item.id))}>
                      <DeleteOutlined />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setEditModalVisible(true);
                        setEditProduct(item);
                      }}
                    >
                      <FormOutlined />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Modal title="Add Product" visible={addModalVisible} footer={null} onCancel={() => setAddModalVisible(false)}>
        <AddProduct onCancel={setAddModalVisible} />
      </Modal>
      <Modal title="Edit Product" visible={editModalVisible} footer={null} onCancel={() => setEditModalVisible(false)}>
        <EditProduct productdata={editProduct} onCancel={setEditModalVisible} />
      </Modal>
    </>
  );
}
