import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../components/home/home.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import TableDataProductReturn from "@/components/table/table-product-return";
import ProductReturnInputGroup from "@/components/product_return/product_return_input_group";

export default function ProductReturnList() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const {
    headerTitle,
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();

  useEffect(() => {
    setHeaderTitle("Trả lại hàng bán");
    setShowBackButton(false);
    setCurrentPath("/product");
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
      <ProductReturnInputGroup />
      <TableDataProductReturn />
    </div>
  );
}
