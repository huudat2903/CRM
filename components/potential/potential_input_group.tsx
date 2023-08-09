import React from "react";
import styles from "./potential.module.css";
import PotentialAction from "./potential_action";
import PotentialSelectBox from "./potential_selectt";
import Link from "next/link";
import exportToExcel from "../ultis/export_xlxs";
import { data } from "../table/table-potential";
export default function PotentialInputGroups({ isSelectedRow }: any) {
  const handleClickSelectoption = () => {};

  const datas = [
    {
      "Mã tiềm năng": "TN001",
      "Xưng hô": "Mr.",
      "Họ tên": "John Doe",
      "Chức danh": "Manager",
      "Điện thoại cá nhân": "123-456-7890",
      "Email cá nhân": "john.doe@example.com",
      "Điện thoại cơ quan": "098-765-4321",
      "Email cơ quan": "john.doe@company.com",
      "Địa chỉ": "123 Main St",
      "Tỉnh/Thành phố": "New York",
      "Quận/Huyện": "Manhattan",
      "Phường xã": "Central Park",
      "Nguồn gốc": "Website",
      "Loại hình": "B2B",
      "Lĩnh vực": "Technology",
      "Mô tả": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Mô tả loại hình": "Lorem ipsum dolor sit amet.",
      "Người tạo": "Admin",
    },
    // Add more sample data objects here if needed
  ];
  const handleExportToExcel = () => {
    const filename = "Danh sách tiềm năng.xlsx";
    const sheetName = "Danh sách tiềm năng";
    const columnHeaders = [
      "Mã tiềm năng",
      "Xưng hô",
      "Họ tên",
      "Chức danh",
      "Điện thoại cá nhân",
      "Email cá nhân",
      "Điện thoại cơ quan",
      "Email cơ quan",
      "Địa chỉ",
      "Tỉnh/Thành phố",
      "Quận/Huyện",
      "Phường xã",
      "Nguồn gốc",
      "Loại hình",
      "Lĩnh vực",
      "Mô tả",
      "Mô tả loại hình",
      "Người tạo",
    ];
    console.log(data);
    exportToExcel(datas, filename, sheetName, columnHeaders);
  };
  return (
    <div className={styles.main__control}>
      <div className={`${styles.main__control_select} flex_align_center`}>
        <div
          className={`${styles.select_item} flex_align_center_item ${styles.select_item_time}`}
        >
          <label htmlFor="" className="">
            Thời gian tạo:{" "}
          </label>
          <div className={`${styles.input_item_time} flex_between`}>
            <input type="date" name="" id="start_time" /> -
            <input type="date" name="" id="end_time" />
          </div>
        </div>
        <PotentialSelectBox title="Loại hình:" value="Tất cả" />
        <PotentialSelectBox title="Lĩnh vực:" value="Tất cả" />
        <PotentialSelectBox title="Nguồn gốc:" value="Tất cả" />
        <PotentialSelectBox title="Người tạo:" value="Tất cả" />
      </div>

      <div className={`${styles.main__control_btn} flex_between`}>
        <div className={styles.main__control_search}>
          <form onSubmit={() => false}>
            <input
              type="text"
              className={styles.input__search}
              name="search"
              defaultValue=""
              placeholder="Tìm kiếm theo tên tiềm năng"
            />
            <button className={styles.kinh_lup}>
              <img
                className={styles.img__search}
                src="https://crm.timviec365.vn/assets/icons/search.svg"
                alt=""
              />
            </button>
          </form>
        </div>
        <div className={`${styles.main__control_add} flex_end`}>
          <Link href="/potential/add_file">
            <button
              type="button"
              className={`${styles.dropbtn_add} flex_align_center`}
            >
              <img src="https://crm.timviec365.vn/assets/icons/add.svg" />
              Thêm mới
            </button>
          </Link>
          <Link href="/potential/import_file">
            <button
              type="button"
              className={`${styles.dropbtn_add} flex_align_center ${styles.btn_file}`}
            >
              <img src="https://crm.timviec365.vn/assets/img/h_import_cus.svg" />
              Nhập từ file
            </button>
          </Link>
          <button
            type="button"
            onClick={handleExportToExcel}
            className={`${styles.dropbtn_add} flex_align_center ${styles.btn_excel}`}
          >
            <img src="https://crm.timviec365.vn/assets/icons/price_policy/icon_excel.svg" />
            Xuất excel
          </button>
        </div>
      </div>

      <PotentialAction isSelectedRow={isSelectedRow} />
    </div>
  );
}
