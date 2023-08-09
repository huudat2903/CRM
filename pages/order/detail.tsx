import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/order/order.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import OrderFooterAddFiles from "@/components/order/order_edit_files/order_footer_add_files";
import AddOrderInfo from "@/components/order/order_detail/order_info";
import AddOrderDetailInfo from "@/components/order/order_detail/order_detail_info";
import AddOrderDetailStatus from "@/components/order/order_detail/order_detail_status";
import AddOrderDetailDiary from "@/components/order/order_detail/order_detail_diary";
import AddOrderDetailTable from "@/components/order/order_detail/order_detail_table";
import AddButtonControl from "@/components/order/order_detail/order_button_control";
import TabOrderList from '@/components/order/order_detail/tab_order_detail';
import AddTable from "@/components/order/order_edit_files/table";

import AddInvoiceInfo from "@/components/order/order_edit_files/invoice_info";
import AddDeliveryInfo from "@/components/order/order_edit_files/delivery_info";
import AddDescriptionInfo from "@/components/order/order_edit_files/description_info";
import { useHeader } from "@/components/hooks/useHeader";

const AddFilesPotential: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [checkFile, setCheckFile] = useState(false);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const {
    headerTitle,
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();

  useEffect(() => {
    setHeaderTitle("Quản lý đơn hàng/ Chi tiết");
    setShowBackButton(true);
    setCurrentPath("/order/list");
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);

  const handleClickImg = () => {
    imgRef?.current?.click();
  };

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div className={styleHome.main} ref={mainRef}>
      <div className={styles.main_importfile}>
        <div className={styles.formInfoStep}>
          <div className={styles.info_step}>
          <div className={styles.form_add_potential}>
            <AddButtonControl />
          </div>
            
            <div className={styles.main__title}>Thông tin đơn hàng</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>

              <AddOrderInfo />
              {/* <AddTable />
              <AddStatusOrderInfo/>
              <AddInvoiceInfo />
              <AddDeliveryInfo />
              <AddDescriptionInfo /> */}
           
              </div>
              {/* <OrderFooterAddFiles title="Chỉnh sửa đơn hàng thành công" /> */}
            </div>
            <TabOrderList />
            <div className={styles.main__title}>Thông tin đơn hàng</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>

              <AddOrderDetailInfo />
              <AddOrderDetailTable />
              <AddOrderDetailStatus />
       
              {/* <AddTable />
              <AddStatusOrderInfo/>
              <AddInvoiceInfo />
              <AddDeliveryInfo />
              <AddDescriptionInfo /> */}
           
              </div>
              {/* <OrderFooterAddFiles title="Chỉnh sửa đơn hàng thành công" /> */}
            </div>
            <div>&nbsp;</div>
            <div className={styles.main__title}>Nhật ký</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>

              <AddOrderDetailDiary />
           
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFilesPotential;
