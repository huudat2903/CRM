import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../components/home/home.module.css";
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";

import Table_Cong_NoCC from "@/components/table/table-cong-no-cc";
import Table_Cong_Nokh from "@/components/table/table-cong-no-kh";


export default function CongNo() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);

  const {
    headerTitle,
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();

  useEffect(() => {
    setHeaderTitle("Danh sách công nợ khách hàng");
    setShowBackButton(false);
    setCurrentPath("phieu-chi");

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
      <Table_Cong_Nokh />
    </div>
  );
}
