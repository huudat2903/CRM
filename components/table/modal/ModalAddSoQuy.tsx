import React, { useState } from "react";
import { Button, Input, InputNumber, Modal, Result } from "antd";
import styles from "./modal.module.css";
import PotentialSelectBoxStep from "@/components/potential/potential_steps/select_box_step";
const ModalAddSoQuy = (props: any) => {
  const { isShowModalAdd, onClose, handleDeleteDB, name } = props;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setLoading(true);
    // setTimeout(() => {
    //     setLoading(false);
    //     setOpen(false);
    // }, 3000);
    console.log("first");
  };

  return (
    <div>
      <Modal
        width={550}
        open={isShowModalAdd}
        title={
          <div
            style={{ background: "blue", width: "111%", margin: "-20px -24px" }}
          >
            <div
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Thêm mới sổ quỹ
            </div>
          </div>
        }
        onOk={handleOk}
        onCancel={onClose}
        closable={true}
        footer={[
          <div
            key={"1"}
            style={{ display: "flex", justifyContent: "center", gap: 20 }}
          >
            <Button
              style={{
                width: 140,
                height: 36,
                border: "1px solid blue",
                color: "blue",
                fontSize: 16,
                fontWeight: 1000,
              }}
              key="back"
              onClick={onClose}
            >
              Hủy
            </Button>
            <Button
              key={"2"}
              style={{
                width: 140,
                height: 36,
                background: "blue",
                fontSize: 16,
                fontWeight: 1000,
              }}
              type="primary"
              loading={loading}
            >
              Thêm mới
            </Button>
            ,
          </div>,
        ]}
      >
        <div
          style={{ width: "100%", alignItems: "center", paddingTop: "20px" }}
        >
          <div>
            <div style={{ fontSize: 19, fontWeight: 500 }}> Tên sổ quỹ</div>
            <Input placeholder="Nhập tên sổ quỹ"></Input>
          </div>

          <div>
            <div style={{ fontSize: 19, fontWeight: 500 }}> Mô tả</div>
            <textarea
              style={{ width: "100%", height: 100, fontSize: 20, padding: 5 }}
            >
              {/* <option value="" style={{fontSize:12}}>Tiền mặt</option>
                        <option value="">Chuyển khoản</option> */}
            </textarea>
          </div>

          <div>
            <div style={{ fontSize: 19, fontWeight: 500 }}>
              {" "}
              Chọn người quản lý
            </div>
            <div style={{ height: 40 }}>
              <PotentialSelectBoxStep
                value="Chọn người quản lý"
                placeholder="Chọn người quản lý"
              />
            </div>
          </div>
          <div>
            <div style={{ fontSize: 19, fontWeight: 500 }}>Trạng thái</div>
            <div style={{ height: 40 }}>
              <PotentialSelectBoxStep
                value="Hoạt động"
                placeholder="Chọn trạng thái"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalAddSoQuy;
