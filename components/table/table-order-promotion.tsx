import React from "react";
import { Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TableRowSelection } from "antd/es/table/interface";

interface DataType {
    key: React.Key;
    tenCTKM: string;
    detail: string;
    
}

const columns: ColumnsType<DataType> = [
    {
        title: "Tên CTKM",
        width: 100,
        dataIndex: "tenCTKM",
        key: "tenCTKM",
    },
    {
        title: "Chi tiết",
        width: 100,
        dataIndex: "detail",
        key: "detail",
        // render: (data) => (
        //   <Tooltip title={data}>
        //     <span>{data}</span>
        //   </Tooltip>
        // ),
    },
   
    

];

export const data: DataType[] = [];
for (let i = 0; i < 2; i++) {
    data.push({
        key: i,
        tenCTKM: `Chương trình khuyến mại 1`,
        detail: `Giảm 20.000 VNĐ`,
       
        
    });
}

interface TableDataOrderPromotionProps { }

const TableDataOrderPromotion: React.FC<TableDataOrderPromotionProps> = () => {
    const rowSelection: TableRowSelection<DataType> = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ");
            if (selectedRows?.length > 0) {
            } else {
            }
        },
        onSelect: (record, selected, selectedRows) => { },
        onSelectAll: (selected, selectedRows, changeRows) => { },
        fixed: "left",
    };
    return (
        <div className="custom_table campaign_tble">
            <Table
                columns={columns}
                dataSource={data}
                rowSelection={{ ...rowSelection }}
                bordered
                scroll={{ x: 500, y: 300 }}
            />
        </div>
    );
};

export default TableDataOrderPromotion;
