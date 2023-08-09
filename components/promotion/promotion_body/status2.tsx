import React from "react";
import styles from "../promotion.module.css";
import Link from "next/link";
import Image from "next/image";
import styleHome from "@/components/home/home.module.css";
import PromotionMenu from "../promotion_menu";

const Status2 = () => {
  return (
    <>
      <div className={styleHome.main}>
        <PromotionMenu />

        </div>
   
        <div >
          <div  className={styles.main__control}>
            <div className={styles.main}>
              <p style={{ width: 'max-content', fontSize: '24px' }}>
                Thiết lập các chương trình khuyến mại để thu hút khách hàng của bạn ngay nhé!{" "}
              </p>
              <img
                src="https://crm.timviec365.vn/assets/img/rafiki.png"
                alt=""
                style={{ marginLeft: '120px'}}
              />

              <Link href="add">
                <button
                  type="button"
                  className={`${styles.dropbtn_add} flex_align_center`}
                  style={{ marginLeft: '250px'}}
                >
                  <Image
                    height={14}
                    width={14}
                    alt="..."
                    src="https://crm.timviec365.vn/assets/icons/add.svg"
                  />
                  Thêm mới
                </button>
              </Link>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Status2;
