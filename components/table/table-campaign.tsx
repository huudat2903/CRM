import React from "react";
import { Table, Tooltip } from "antd";
import styles from "../campaign/campaign.module.css";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
// import { TableRowSelection } from "antd/es/table/interface";

interface DataType {
  key: React.Key;
  name: string;
  status: string;
  type: string;
  date_start: string;
  date_end: string;
  sale: number;
  budget: number;
  person: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "STT",
    width: 50,
    dataIndex: "key",
    key: "key",
  },
  {
    title: "Tên chiến dịch",
    width: 180,
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tình trạng",
    width: 150,
    dataIndex: "status",
    key: "status",
    // render: (data) => (
    //   <Tooltip title={data}>
    //     <span>{data}</span>
    //   </Tooltip>
    // ),
  },
  {
    title: "Loại",
    dataIndex: "type",
    key: "type",
    width: 70,
  },
  {
    title: "Ngày bắt đầu",
    dataIndex: "date_start",
    key: "date_start",
    width: 150,
  },
  {
    title: "Ngày kết thúc",
    dataIndex: "date_end",
    key: "date_end",
    width: 150,
  },
  {
    title: "Doanh số kỳ vọng (VNĐ)",
    dataIndex: "sale",
    key: "sale",
    width: 250,
  },
  {
    title: "Ngân sách (VNĐ)",
    dataIndex: "budget",
    key: "budget",
    width: 150,
  },
  {
    title: "Người phụ trách",
    dataIndex: "person",
    key: "person",
    width: 150,
  },
  {
    title: "Chức năng",
    dataIndex: "operation",
    key: "11",
    width: 150,
    fixed:"right",
    render: () => (
      <>
        <Link href={"#"}>
          <button>
            <img
              className={styles.icon_edit}
              src="https://crm.timviec365.vn/assets/img/h_edit_cus.svg"
            />
            Sửa 
          </button>
        </Link>
        <Link href={"#"}>
          <button>
            <img
              className={styles.icon_delete}
              src="https://crm.timviec365.vn/assets/img/h_delete_cus.svg"
            />
            Xóa
          </button>
        </Link>
      </>
    ),
  },
];

export const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Campaign ${i}`,
    status: 'Đang diễn ra',
    type: 'abc',
    date_start: '29/07/2023',
    date_end: `30/07/2023`,
    sale: 10000000,
    budget: 10000000,
    person: `Nguyen Van Hung`,
  });
}

interface TableDataCampaignProps {}

const TableDataCampaign: React.FC<TableDataCampaignProps> = () => {
  return (
    <div className="custom_table campaign_tble">
      <Table
        columns={columns}
        dataSource={data}
        // rowSelection={{ ...rowSelection }}
        bordered
        scroll={{ x: 1500, y: 320 }}
      />
      <div className="main__footer flex_between" id="">
        <div className="show_number_item">
          <b>Hiển thị:</b>
          <select className="show_item">
            <option value={10}>10 bản ghi trên trang</option>
            <option value={20}>20 bản ghi trên trang</option>
            <option value={30}>30 bản ghi trên trang</option>
            <option value={40}>40 bản ghi trên trang</option>
            <option value={50}>50 bản ghi trên trang</option>
          </select>
        </div>
        <div className="total">
          Tổng số: <b>{data.length}</b> Chiến dịch
        </div>
      </div>
    </div>
  );
};

export default TableDataCampaign;
