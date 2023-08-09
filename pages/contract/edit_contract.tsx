import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/contract/contract_action.module.css";
import EditContract from "@/components/contract/contract_actionn/editContract";
import { SidebarContext } from "@/components/context/resizeContext";
import { useHeader } from "@/components/hooks/useHeader";

const AddContractCoponent: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [checkFile, setCheckFile] = useState(false);
  const { isOpen } = useContext<any>(SidebarContext);
  const {
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();

  useEffect(() => {
    setHeaderTitle("Danh sách hợp đồng / Chỉnh sửa");
    setShowBackButton(true);
    setCurrentPath("/contract/list");
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div ref={mainRef} className={styleHome.main}>
      <div className={styles.main_addContract}>
        <div className={styles.formAddContract}>
          <EditContract setCheckFile={setCheckFile} />
        </div>
      </div>
    </div>
  );
};

export default AddContractCoponent;
