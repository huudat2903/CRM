import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "../home/home.module.css";
import styles from "./customer.module.css";
import { SidebarContext } from "@/components/context/resizeContext";
import Link from "next/link";
import { useRouter } from "next/router";

interface MyProps {
  activeName: string;
}

const CustomerHeaderTab: React.FC<MyProps> = ({ activeName }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const listTab = [
    {
      name: "Thông tin khách hàng",
      link: `${router.query.id} / Thông tin khách hàng`,
    },
    { name: "Liên hệ" },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Cơ hội",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Chiến dịch",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Báo giá",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Lịch sử đơn hàng",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Hợp đồng bán",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Hàng hóa đã mua",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Hóa đơn",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Lịch hẹn",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Cuộc gọi",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Lịch sử chăm sóc",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Email",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "SMS",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Tài liệu đính kèm",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Ghi chú",
    },
    {
      link: `${router.query.id} / Thông tin khách hàng`,
      name: "Danh sách chia sẻ",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div style={{ paddingBottom: 0 }} className={styleHome.main} ref={mainRef}>
      <div className={styles.main__control_tab}>
        {listTab?.map((item, index) => (
          <Link
            className={`${styles.main__control__btn} ${
              activeName === item.name ? "active_btn" : ""
            }`}
            key={index}
            href={`${item.link}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomerHeaderTab;
