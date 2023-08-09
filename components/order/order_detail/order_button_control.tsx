// import OrderSelectBoxStep from "../order_steps/select_box_step";
import styles from "./order_detail.module.css";
import { Switch } from 'antd';
import Link from "next/link";
// import InputText from "./input_text";
import { Input, Tooltip } from 'antd';

export default function AddButtonControl() {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div>
            <div className={`${styles.main}`}>
                <div className={styles.row_input}>
                    <div className={`${styles.main__control_btn} ${styles.flex_end} `}>
                        <div className={`${styles.flex_1}`}>
                            <Switch defaultChecked onChange={onChange} />&nbsp;Ẩn dữ liệu trống

                        </div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        
                        {/* <div className={styles.main__control_add}>
                            
                        </div> */}
                        <Link href="/customer/add">
                            <button
                                type="button"
                                className={`${styles.btn_deny} flex_align_center`}
                            >
                                &nbsp;
                                <i className="bi bi-x-circle"></i>
                                Từ chối
                            </button>
                        </Link>
                        <Link href="/customer/add">
                            <button
                                type="button"
                                className={`${styles.btn_browse} flex_align_center`}
                            >
                                &nbsp;&nbsp;
                                <i className="bi bi-check2-circle"></i>
                                Duyệt
                            </button>
                        </Link>
                        <Link href="/order/edit">
                            <button
                                type="button"
                                className={`${styles.btn_edit} flex_align_center`}
                            >
                                <i className="bi bi-pencil-square"></i>
                                Chỉnh sửa
                            </button>
                        </Link>
                        <Link href="/customer/add">
                            <button
                                type="button"
                                className={`${styles.btn_delete} flex_align_center`}
                            >
                                &nbsp;&nbsp;&nbsp;
                                <i className="bi bi-trash3"></i>
                                Xóa
                            </button>
                        </Link>
                        <Link href="/customer/add">
                            <button
                                type="button"
                                className={`${styles.btn_execute} flex_align_center`}
                            >
                                <img src="https://crm.timviec365.vn/assets/icons/bacham_xanh.svg" />
                                Thao tác
                            </button>
                        </Link>
                        

                    </div>
                </div>

            </div>



        </div>
    );
}
