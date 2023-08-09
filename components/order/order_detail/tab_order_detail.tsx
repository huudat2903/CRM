import React, { useState } from 'react';
import { Tabs } from 'antd';
import styles from "../order.module.css";
const { TabPane } = Tabs;
// import TableDataOrderList from "@/components/table/table-order-list";
// import TableDataOrderQuote from "@/components/table/table-order-quote";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (key : any) => {
    setActiveTab(key);
  };

  return (
    <div>
      <Tabs activeKey={activeTab} onChange={handleTabChange}>
        <TabPane tab="Thông tin chi tiết" key="tab1" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
             
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Liên hệ" key="tab2" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Hóa đơn" key="tab3" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Lịch hẹn" key="tab4" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Trả lại hàng bán" key="tab5" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Tài liệu đính kèm" key="tab6" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        <TabPane tab="Danh sách chia sẻ" key="tab7" className={ styles.tablink}>
            <div>

          <div
            style={{ marginTop: "5px" }}
            className={`${styles.main__control_btn} flex_between`}
          >
            
            <div className={styles.main__control_search_campaign}>
              
            </div>
            <div className={`${styles.main__control_add} flex_end`}>
              
            </div>
          </div>
          {/* <TableDataOrderList /> */}
            </div>
        </TabPane>
        
      </Tabs>
    </div>
  );
};

export default TabComponent;