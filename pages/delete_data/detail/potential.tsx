import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css"
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import Table_Potential from "@/components/table_delete/table-potential-delete";
import { ColumPotential } from "../../../components/delete_data/colums_field/potential";
import { dataPotential } from "../../../components/delete_data/colums_field/data"

export default function Potential_List_Delete() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("Dữ liệu đã xoá / Tiềm năng");
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
  
    <Table_Potential
        ColumPotential={ColumPotential}
        dataPotential={dataPotential}
        name="Tiềm năng"
      /> 
    </div>
  );
}
