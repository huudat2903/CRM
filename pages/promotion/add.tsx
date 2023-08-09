import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../../components/home/home.module.css";
import styles from "../../components/promotion/promotion.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import AddGeneralInfo from "@/components/promotion/promotion_add/general_infor";
import AddDesriptionAndSystemInfo from "@/components/promotion/promotion_add/description_system_add";
import { useHeader } from "@/components/hooks/useHeader";
import PromotionFooterAddFiles from "@/components/promotion/promotion_add/price_policy_footer_add_files";

const AddPromotion: React.FC = () => {
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
    setHeaderTitle("Quản lý khuyến mại/ Thêm mới");
    setShowBackButton(true);
    setCurrentPath("/promotion/list");
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
            <div className={styles.main__title}>Thêm mới Chính sách giá</div>
            <div className={styles.form_add_potential}>
              <div className={styles.main__body}>
                <AddGeneralInfo />
                <AddDesriptionAndSystemInfo />
              </div>
              <PromotionFooterAddFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPromotion;
