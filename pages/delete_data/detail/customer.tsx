import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css"
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import { ColumCustomer } from "../../../components/delete_data/colums_field/customer";
import { dataPotential } from "../../../components/delete_data/colums_field/data"
import Table_Customer from "@/components/table_delete/table-custumer-delete";
export default function Customer_List_Delete() {
    const mainRef = useRef<HTMLDivElement>(null);
    const { isOpen } = useContext<any>(SidebarContext);
    const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
        useHeader();
    useEffect(() => {
        setHeaderTitle("Dữ liệu đã xoá / Khách hàng");
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

            <Table_Customer
                ColumCustomer={ColumCustomer}
                dataPotential={dataPotential}
                name="Khách hàng"
            />
        </div>
    );
}
