"use client";
import DetailInformation from "@/components/customer/detail/detail";
import CustomerHeaderTab from "@/components/customer/header_customer_info_btn";
import { useHeader } from "@/components/hooks/useHeader";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DetailCustomer() {
  const pathname = usePathname();
  const router = useRouter();
  const { setHeaderTitle, setShowBackButton, setCurrentPath }: any =
    useHeader();

  console.log(pathname);

  useEffect(() => {
    const path = pathname?.split("/")[pathname?.split("/").length - 1];
    setHeaderTitle(`${pathname} / Thông tin khách hàng`);
    setShowBackButton(true);
    setCurrentPath("/customer/list");
  }, [setHeaderTitle, setShowBackButton, setCurrentPath]);
  return (
    <div>
      <CustomerHeaderTab activeName={"Thông tin khách hàng"} />
      <DetailInformation />
    </div>
  );
}
