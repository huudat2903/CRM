import { SidebarContext } from "@/components/context/resizeContext";
import styleHome from "../../../components/home/home.module.css";
import { SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { useHeader } from "@/components/hooks/useHeader";
import { useRouter } from "next/router";
import DLKhaoSat from "@/components/cskh/dulieukhaosat";
import URLKhaoSat from "@/components/cskh/urlkhaosat/urlkhaosat";

export default function KhaoSatPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { isOpen } = useContext<any>(SidebarContext);
  const {
    headerTitle,
    setHeaderTitle,
    setShowBackButton,
    setCurrentPath,
  }: any = useHeader();
  const router = useRouter();
  const path = router.query.id;
  console.log(path);
  useEffect(() => {
    setHeaderTitle("");
    setShowBackButton(false);
    setCurrentPath(`/khao-sat`);
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
      <URLKhaoSat />
    </div>
  );
}
