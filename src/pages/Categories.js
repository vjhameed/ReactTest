import React, { useState } from "react";
import { PlusOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import style from "../styles/mainContent.module.css";
import { Modal } from "antd";
import AddCategory from "../components/AddCategory";
import EditCategory from "../components/EditCategory";
import { useSelector, useDispatch } from "react-redux";
import { removeCategories } from "../redux/action/categories";

export default function Categories() {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editCategory, setEditCategory] = useState();
  const categories = useSelector((state) => state.c_data.categories);
  console.log(editCategory);
  const dispatch = useDispatch();
  return (
    <>
      <button className={style.AddBtn} onClick={() => setAddModalVisible(true)}>
        <PlusOutlined />
        Add Category
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
            <th>Categories Name</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length == 0
            ? ""
            : categories.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.c_name}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn btn-danger mr-3" onClick={() => dispatch(removeCategories(item.id))}>
                      <DeleteOutlined />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        setEditModalVisible(true);
                        setEditCategory(item);
                      }}
                    >
                      <FormOutlined />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <Modal title="Add Category" visible={addModalVisible} footer={null} onCancel={() => setAddModalVisible(false)}>
        <AddCategory onCancel={setAddModalVisible} />
      </Modal>
      <Modal title="Edit Category" visible={editModalVisible} footer={null} onCancel={() => setEditModalVisible(false)}>
        <EditCategory categorydata={editCategory} onCancel={setEditModalVisible} />
      </Modal>
    </>
  );
}
