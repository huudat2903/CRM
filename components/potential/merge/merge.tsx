import TableDataPotentialMerge from "components/table/table-potential-merge";
import styleHome from "components/home/home.module.css";
import { SidebarContext } from "components/context/resizeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "components/hooks/useHeader";

export default function Merge() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const {
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();
  useEffect(() => {
    setHeaderTitle("Tiềm năng / Gộp trùng");
    setShowBackButton(true);
    setCurrentPath("/potential/list");
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
      {/* <PotentialMergeInputGroup isSelectedRow={isSelectedRow} /> */}
      <TableDataPotentialMerge />
    </div>
  );
}
