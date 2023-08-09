import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "@/components/home/home.module.css"
import { SidebarContext } from "@/components/context/resizeContext";
import { useHeader } from "@/components/hooks/useHeader";
import ThemPhieuCC from "@/components/theo-doi-thu-chi/them-phieu-cc";

 const ThemPhieus: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("Phiếu thu / Thêm phiếu thu nhà cung cấp");
    setShowBackButton(true);
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);

  const handleClickImg = () => {
    imgRef?.current?.click();
  };

  useEffect(() => {
    if (isOpen) {
      mainRef.current?.classList.add("content_resize");
    } else {
      mainRef.current?.classList.remove("content_resize");
    }
  }, [isOpen]);

  return (
    <div className={styleHome.main} ref={mainRef}>
      <ThemPhieuCC/>
    </div>
  );
};

export default ThemPhieus;
