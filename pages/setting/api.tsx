import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/potential/potential.module.css";
import stylesCustomerList from "../../components/customer/customer.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import { useHeader } from "@/components/hooks/useHeader";
import Link from "next/link";
import Image from "next/image";
import ApiSetting from "@/components/setting/api";
import ModalCompleteCustomerList from "@/components/customer/customer_modal/customer_mdal_success";
import CancelModalCustomApi from "@/components/customer/customer_modal/customer_mdal_cancel";

const ApiSettingConnect: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [isOpenMdalInform, setIsOpenMdalInform] = useState(false);
  const [valueAppId, setValueAppId] = useState("crm.timviec365.vn");
  const [valueAddressWebHooh, setValueAddressWebHook] = useState(
    "https://crm.timviec365.vn/export_json.php"
  );
  const { isOpen } = useContext<any>(SidebarContext);
  const textRef = useRef<any>(null);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  const security_code =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InRpbWUiOjE2OTA1MTA1OTksImlkIjoiMTY2NCJ9fQ.RF-w2X09m9eVbNch734uSipz269s123cpM1TaGuWNJQ";

  const handleClickConnect = () => {
    setIsConnected(true);
    setOpenModalSuccess(true);
  };

  const handleClickEdit = () => {
    setIsEdit(true);
  };

  const handleDisconnect = () => {
    setIsOpenMdalInform(true);
  };

  const handleCLickSave = () => {
    setOpenModalSuccess(true);
  };

  const handleClickCancel = () => {
    setIsEdit(false);
  };

  const handleCoppyClipBoard = () => {
    textRef.current?.select();
    textRef.current?.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textRef.current?.innerHTML);

    alert("Đã lưu vào bộ nhớ tạm");
  };

  useEffect(() => {
    setHeaderTitle("");
    setShowBackButton(false);
    // setCurrentPath("/product_return/list");
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);

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
            <div className={styles.main__title}>Kết nối API</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>
                <div className={stylesCustomerList.api_row}>
                  <h1>API</h1>
                  <h2>
                    Cổng kết nối API - CRM 365 để tích hợp các hệ thống website
                    khác
                  </h2>
                  <div className={stylesCustomerList.document_api}>
                    <span>Thiết lập kết nối API</span>
                    <Link
                      target="_blank"
                      href={"https://crm.timviec365.vn/documentation/#/"}
                    >
                      <Image
                        width={16}
                        height={16}
                        alt="?"
                        src={
                          "https://crm.timviec365.vn/assets/icons/setting/question_mini.svg"
                        }
                      />
                      Tài liệu hướng dẫn
                    </Link>
                  </div>

                  <div>
                    <ApiSetting
                      disabled={isEdit}
                      label="AppID"
                      value={valueAppId}
                      setValue={setValueAppId}
                    />
                    <ApiSetting
                      disabled={isEdit}
                      label="Địa chỉ Webhook"
                      value={valueAddressWebHooh}
                      setValue={setValueAddressWebHook}
                    />

                    <div
                      className={`${stylesCustomerList.form_group} ${stylesCustomerList.infor_security}`}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: ".5rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <label>Mã bảo mật</label>
                          <button
                            className={stylesCustomerList.create_new_code}
                          >
                            Tạo mã mới
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleCoppyClipBoard}
                            className={stylesCustomerList.coppy_el}
                          >
                            <Image
                              width={16}
                              height={16}
                              alt="?"
                              src={
                                "https://crm.timviec365.vn/assets/icons/customer/copy.svg"
                              }
                            />
                            Sao chép
                          </button>
                        </div>
                      </div>

                      <input
                        ref={textRef}
                        disabled
                        style={{ border: 0, width: "100%" }}
                        value={security_code}
                        className={stylesCustomerList.coppy_el}
                      />
                    </div>

                    {!isEdit && (
                      <div
                        className={`${stylesCustomerList.form_group} ${stylesCustomerList.infor_security}`}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: ".5rem",
                            justifyContent: "space-between",
                          }}
                        >
                          <label>Người sửa cuối</label>
                        </div>

                        <p
                          style={{ textAlign: "right" }}
                          className={stylesCustomerList.coppy_el}
                        >
                          08:00:55 - 28/07/2023
                        </p>
                      </div>
                    )}

                    {!isConnected ? (
                      <button
                        type="button"
                        onClick={handleClickConnect}
                        className={stylesCustomerList.btn_primary_connect}
                      >
                        Kết nối
                      </button>
                    ) : (
                      <div>
                        {!isEdit ? (
                          <>
                            <button
                              type="button"
                              onClick={handleClickEdit}
                              className={stylesCustomerList.btn_primary_connect}
                            >
                              Cập nhật thông tin
                            </button>

                            <button
                              type="button"
                              onClick={handleDisconnect}
                              className={`${stylesCustomerList.btn_primary_connect} ${stylesCustomerList.stop}`}
                            >
                              Ngừng kết nối
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              onClick={handleCLickSave}
                              className={stylesCustomerList.btn_primary_connect}
                            >
                              Lưu
                            </button>

                            <button
                              type="button"
                              onClick={handleClickCancel}
                              className={`${stylesCustomerList.btn_primary_connect} ${stylesCustomerList.stop} ${stylesCustomerList.cancel_btn}`}
                            >
                              Hủy
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalCompleteCustomerList
          modal1Open={openModalSuccess}
          setModal1Open={setOpenModalSuccess}
          title={"Cập nhật API thành công"}
          link={"/setting/api"}
          handleClose={() => {
            setIsEdit(false);
          }}
        />

        <CancelModalCustomApi
          isModalCancel={isOpenMdalInform}
          setIsModalCancel={setIsOpenMdalInform}
          content={"Bạn có chắc chắn muốn ngừng kết nối API với CRM 365?"}
          title={"Ngừng kết nối API"}
          handleCloseMdal={() => {
            setIsConnected(false);
          }}
          link="/setting/api"
        />
      </div>
    </div>
  );
};

export default ApiSettingConnect;
