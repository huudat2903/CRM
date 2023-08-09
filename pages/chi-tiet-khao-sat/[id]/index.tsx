import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css";
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import ChiTietKhaoSat from "@/components/cskh/chitietkhaosat/chitietkhaosat";


export default function ChinhSuaPhieuThu() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const {
    headerTitle,
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();
  useEffect(() => {
    setHeaderTitle("Khảo sát / Chi tiết khảo sát");
    setShowBackButton(true);
    setCurrentPath("/khao-sat");

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
      <ChiTietKhaoSat />
    </div>
  );
}
