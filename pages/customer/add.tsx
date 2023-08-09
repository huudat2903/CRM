import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/potential/potential.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import PotentialFooterAddFiles from "@/components/potential/potential_add_files/potential_footer_add_files";
import AddDesriptionAndSystemInfo from "@/components/potential/potential_add_files/description_system_add_files";
import AddAddressInfo from "@/components/potential/potential_add_files/address_info";
import { useHeader } from "@/components/hooks/useHeader";
import AddPersonalCustomerInfor from "@/components/customer/add_edit/personal_infor";
import AddCustomerBankInfo from "@/components/customer/add_edit/bank_infor";
import TextEditor from "@/components/text-editor/text_editor";
import GeneralCustomerInfor from "@/components/customer/add_edit/general_customer_info";

const AddFilesCustomerList: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("Khách hàng / Thêm mới");
    setShowBackButton(true);
    setCurrentPath("/customer/list");
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
            <div className={styles.main__title}>Thêm mới khách hàng</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>
                <div className={styles["main__body_item"]}>
                  {/* Type Customer */}
                  <p className={styles["main__body__type"]}>Loại hình</p>
                  <div className="d_flex">
                    <label className="lbl_container">
                      <input
                        type="radio"
                        defaultChecked
                        defaultValue={2}
                        className="get_data"
                        name="type"
                      />
                      Khách hàng doanh nghiệp
                      <span className="checkmark" />
                    </label>
                    <label className="lbl_container">
                      <input
                        type="radio"
                        name="type"
                        defaultValue={1}
                        className="get_data"
                      />
                      Khách hàng cá nhân
                      <span className="checkmark" />
                    </label>
                  </div>

                  {/* Image */}
                  <p className={styles["main__body__type"]}>Ảnh</p>
                  <div id="upload">
                    <img
                      src="/assets/img/customer/upload_logo.png"
                      alt=""
                      className={styles["show_avatar"]}
                      onClick={handleClickImg}
                    />
                    <input
                      ref={imgRef}
                      type="file"
                      name="logo"
                      className=""
                      id="logo"
                      hidden
                      accept="image/png,image/gif,image/jpeg"
                    />
                  </div>
                </div>

                <AddPersonalCustomerInfor />
                <AddAddressInfo title="Thông tin viết hóa đơn" />
                <AddAddressInfo title="Thông tin giao hàng" />
                <AddCustomerBankInfo />

                {/* Text Editor */}
                <div
                  style={{ marginBottom: -10 }}
                  className={styles["main__body__type"]}
                >
                  Thông tin mô tả
                </div>
                <TextEditor />
                <GeneralCustomerInfor />
              </div>
              <PotentialFooterAddFiles
                link="/customer/list"
                titleCancel="Xác nhận hủy thêm mới khách hàng"
                title="Thêm mới khách hàng qwe thành công!"
                contentCancel="Bạn có chắc chắn muốn hủy thêm mới khách hàng Nguyễn Trần Kim Phượng không ?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFilesCustomerList;
