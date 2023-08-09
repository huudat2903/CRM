import styles from "./potential.module.css";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";
import Link from "next/link";
import { dataActionPotential } from "../ultis/consntant";
import { useState } from "react";
import CanmpaignModal from "./potential_action_modal/potential_mdal_campain";
import EmailModal from "./potential_action_modal/potential_mdal_email";
import DelActionModal from "./potential_action_modal/deltete_action_mdal";
import ConvertModal from "./potential_action_modal/convert_modal";
import ShareActionModal from "./potential_action_modal/potential_share_action_mdal";
import HandeOverModal from "./potential_action_modal/hand_over_mdal";

export default function PotentialAction({ isSelectedRow }: any) {
  const [isOpenCampaign, setIsOpenCampaign] = useState(false);
  const [isOpenEmail, setIsOpenIsEmail] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isOpenCovert, setIsOpenConvert] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [isHandOverOpen, setIsHandOverOpen] = useState(false);

  const handleClickAction = (e: any, type: string | undefined) => {
    if (type === "campaign") {
      setIsOpenCampaign(true);
    }
    if (type === "email") {
      setIsOpenIsEmail(true);
    }
    if (type === "delete") {
      setIsDelOpen(true);
    }
    if (type === "convert") {
      setIsOpenConvert(true);
    }
    if (type === "share") {
      setIsOpenShare(true);
    }
    if (type === "hand_over") {
      setIsHandOverOpen(true);
    }
  };
  const items: MenuProps["items"] = [];
  for (let i = 0; i < dataActionPotential.length; i++) {
    items.push({
      key: i,
      label: (
        <>
          {dataActionPotential[i].link !== "#" ? (
            <Link href={dataActionPotential[i].link} className="flex-start-btn">
              <i className={dataActionPotential[i].img}></i>
              {dataActionPotential[i].name}
            </Link>
          ) : (
            <button
              className="flex-start-btn"
              onClick={(e) => handleClickAction(e, dataActionPotential[i].type)}
            >
              <i className={dataActionPotential[i].img}></i>
              {dataActionPotential[i].name}
            </button>
          )}
        </>
      ),
    });
  }
  return (
    <div className={styles.div__thaotac}>
      <div>
        <label>Đã chọn:</label>
        <b className={styles.checked_count}>0</b>
      </div>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        disabled={false}
        className={!isSelectedRow ? "opacity" : ""}
        trigger={[isSelectedRow ? "hover" : "contextMenu"]}
      >
        <button className={styles.button_thaotac}>
          <img src="https://crm.timviec365.vn/assets/icons/bacham_xanh.svg" />
          Thao tác
        </button>
      </Dropdown>

      <CanmpaignModal
        isModalCancel={isOpenCampaign}
        setIsModalCancel={setIsOpenCampaign}
      />
      <EmailModal
        isModalCancel={isOpenEmail}
        setIsModalCancel={setIsOpenIsEmail}
      />

      <DelActionModal
        isModalCancel={isDelOpen}
        setIsModalCancel={setIsDelOpen}
      />

      <ConvertModal
        isModalCancel={isOpenCovert}
        setIsModalCancel={setIsOpenConvert}
      />

      <ShareActionModal
        isModalCancel={isOpenShare}
        setIsModalCancel={setIsOpenShare}
      />

      <HandeOverModal
        isModalCancel={isHandOverOpen}
        setIsModalCancel={setIsHandOverOpen}
      />
    </div>
  );
}
