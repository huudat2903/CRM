import Link from "next/link"
import styles from "../table.module.css"
export const ColumContract = [{
    width: 520,
    title: 'Tên hợp đồng',
    dataIndex: 'name',
    render: (text: any) => <div style={{ color: "blue" }}><Link href="">{text}</Link></div>
},
{
    width: 147,
    title: 'Ngày tạo',
    dataIndex: 'day',
    render: (text: any) => <div>{text}</div>
},
{
    width: 265,
    title: 'Người tạo',
    dataIndex: 'name',
    render: (text: any) => <div style={{ display: "flex", justifyContent: 'center' }}> <div><img src="https://crm.timviec365.vn/assets/img/user_kh.png" alt="" /></div>&nbsp;{text}</div>
},
{
    width: 265,
    title: 'Người xóa',
    dataIndex: 'name',
    render: (text: any) => <div style={{ display: "flex", justifyContent: 'center' }}> <div><img src="https://crm.timviec365.vn/assets/img/user_kh.png" alt="" /></div>&nbsp;{text}</div>
},
{
    width: 225,
    title: 'Thời gian xóa',
    dataIndex: 'timeDelete',
},]