import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../components/home/home.module.css";
import styles from "../components/potential/potential.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import stylesContract from "../components/contract/contract_action.module.css";
import { useHeader } from "@/components/hooks/useHeader";
import StaffData from "@/components/setup_role/staff_data";
import OptionRole from "@/components/setup_role/options_role";
import { useRouter } from "next/router";

const SetUpRole: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const router = useRouter()
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  const handleSave = () => {
    alert("set quyền thành công")
    // router.push()
  };

  useEffect(() => {
    setHeaderTitle("Thiết lập quyền");
    setShowBackButton(false);
    setCurrentPath("/");
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
            <div className={styles.main__title}>Thông tin quyền</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>
                <StaffData />
              </div>
              <OptionRole />
              <div className={stylesContract.btn_submit}>
                <button className={stylesContract.sub1}>Hủy</button>
                <button className={stylesContract.sub2} onClick={handleSave}>
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpRole;
