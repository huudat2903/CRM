import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css"
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";

import { ColumFormSms } from "../../../components/delete_data/colums_field/form_sms";
import { dataPotential } from "../../../components/delete_data/colums_field/data"
import Table_Form_Sms from "@/components/table_delete/table-form_sms-delete";
export default function Form_Sms_List_Delete() {
    const mainRef = useRef<HTMLDivElement>(null);
    const { isOpen } = useContext<any>(SidebarContext);
    const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
        useHeader();

    useEffect(() => {
        setHeaderTitle("Dữ liệu đã xoá / Mẫu SMS");
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

            <Table_Form_Sms
                ColumFormSms={ColumFormSms}
                dataPotential={dataPotential}
                name="Mẫu SMS"
            />
        </div>
    );
}
