import React, { useContext, useEffect, useRef, useState } from "react";
import styleHome from "@/components/home/home.module.css"
import { SidebarContext } from "@/components/context/resizeContext";
import { useHeader } from "@/components/hooks/useHeader";
import ThemMoiSanPham from "@/components/sanpham/themmoisanpham";
import SuaSanPham from "@/components/sanpham/chinhsuasanpham";

 const ChinhSuaSP: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const imgRef = useRef<HTMLInputElement>(null);
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  useEffect(() => {
    setHeaderTitle("Sản phẩm / Chỉnh sửa sản phẩm");
    setShowBackButton(true);
    setCurrentPath("/san-pham");
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
      <SuaSanPham/>
    </div>
  );
};

export default ChinhSuaSP;
