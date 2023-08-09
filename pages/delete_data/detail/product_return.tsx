import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css"
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import { ColumProductReturn } from "../../../components/delete_data/colums_field/product_return";
import { dataPotential } from "../../../components/delete_data/colums_field/data"
import Table_Product_Return from "@/components/table_delete/table-product_return-delete";

export default function Product_Return_List_Delete() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("Dữ liệu đã xoá / Trả lại hàng bán");
    setShowBackButton(true);
    setCurrentPath("/delete_data/list");
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
  
    <Table_Product_Return
        ColumProductReturn={ColumProductReturn}
        dataPotential={dataPotential}
        name="Trả lại hàng bán"
      /> 
    </div>
  );
}
