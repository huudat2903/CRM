import styles from "./promotion.module.css";
import styleHome from "@/components/home/home.module.css";
import Link from "next/link";

export default function PromotionMenu() {
  return (
    <>
        <ul className={styles.list_category}>
          <li>
            <Link href={"status0"}>Đang chạy (0)</Link>
          </li>
          <li>
            <Link href={"status1"}>Sắp tới (0)</Link>
          </li>
          <li>
            <Link href={"status2"}>Chưa chạy (0)</Link>
          </li>
          <li>
            <Link href={"status3"}>Dừng kích hoạt (0)</Link>
          </li>
        </ul>
    </>
  );
}
