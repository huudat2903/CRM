import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "../order.module.css";
import { useRouter } from "next/router";
import OrderSelectBox from "../order_selectt";
// import TabOrderList from './tab_order_list';
import TableDataOrderPromotion from "@/components/table/table-order-promotion";

interface MyComponentProps {
  isModalCancel: boolean;
  setIsModalCancel: (value: boolean) => void;
  // content: string;
  title: string;
}
const CancelModal: React.FC<MyComponentProps> = ({
  isModalCancel,
  setIsModalCancel,
  // content = "Bạn có chắc chắn muốn hủy thêm mới đơn hàng thông tin bạn nhập sẽ không được lưu lại?",
  title = "Áp dụng cho hàng hoá",
}) => {
  const router = useRouter();
  const handleOK = () => {
    setIsModalCancel(false);
    // router.push("/order/list");
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        title={title}
        centered
        open={isModalCancel}
        onOk={() => handleOK()}
        onCancel={() => setIsModalCancel(false)}
        className={"mdal_cancel campign_mdal"}
        okText="Tiếp theo"
        cancelText="Huỷ"
      >
        {/* <TabOrderList /> */}
        <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} `}
          >
            <div className={styles.apply_promotion}>
              <div className={styles.main__control_search_campaign}>
                <form onSubmit={() => false}>
                  
                  <input
                    type="text"
                    className={styles.input__search}
                    name="search"
                    defaultValue=""
                    placeholder="Nhập mã khuyến mãi"
                  />
                  <button className={styles.kinh_lup}>
                    <img
                      className={styles.img__search}
                      src="https://crm.timviec365.vn/assets/icons/search.svg"
                      alt=""
                    />
                  </button>
                </form>
              </div>
          </div>
          <TableDataOrderPromotion />
          <TableDataOrderPromotion />
          </div>
        
      </Modal>
    </>
  );
};

export default CancelModal;
