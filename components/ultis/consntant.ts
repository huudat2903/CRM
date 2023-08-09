export const HOST = "http://localhost:3001/"

export const sidebar_button_group = [
  {
    img_link: "https://crm.timviec365.vn/assets/icons/home.svg",
    link: `/`,
    children: [],
    content: "Trang chủ",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_potential.svg",
    link: `/potential/list`,
    children: [],
    content: "Tiềm năng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/chance.svg",
    link: "/campaign/list",
    children: [],
    content: "Cơ hội",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/contract.svg",
    link: "/contract/list",
    children: [],
    content: "Hợp đồng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/chiendich.svg",
    link: "/",
    children: [],
    content: "Chiến dịch",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/baogia.svg",
    link: "/",
    children: [],
    content: "Báo giá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/nav-price-promotion.svg",
    link: "/promotion/list",
    content: "Quản lý khuyến mại",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/cart.svg",
    link: "/order/list",
    children: [],
    content: "Quản lý đơn hàng",
  },
  {
    img_link: "	https://crm.timviec365.vn/assets/icons/bill.svg",
    link: "/",
    children: [],
    content: "Quản lý hoá đơn",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_price_policy.svg",
    link: "/price_policy/list",
    children: [],
    content: "Chính sách giá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_product_return.svg",
    link: "/product_return/list",
    children: [],
    content: "Trả lại hàng bán",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_bin.svg",
    link: "/delete_data/list",
    children: [],
    content: "Dữ liệu đã xoá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_setting.svg",
    link: "/",
    children: [],
    content: "Cài đặt",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/i_cds365.svg",
    link: "https://quanlychung.timviec365.vn/quan-ly-ung-dung-nhan-vien.html",
    children: [],
    content: "Chuyển đổi số",
  },
];

export const sidebar_button_group_company = [
  {
    img_link: "https://crm.timviec365.vn/assets/icons/home.svg",
    link: `/`,
    children: [],
    content: "Trang chủ",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/role.svg",
    link: `/`,
    content: "Phân quyền",
    children: [{
      blank: "",
      label: "Thiết lập quyền",
      link: "/thiet-lap-quyen"
    },
    {
      blank: "_blank",
      label: "Bổ nhiệm, quy hoạch",
      link: "https://phanmemnhansu.timviec365.vn/bien-dong-nhan-su.html?tab=1"
    }]
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_potential.svg",
    link: `/potential/list`,
    children: [],
    content: "Tiềm năng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/customer.svg",
    link: "",
    children: [{
      blank: "",
      label: "Danh sách khách hàng",
      link: "/customer/list"
    },
    {
      blank: "",
      label: "Nhóm khách hàng",
      link: "/"
    },
    {
      blank: "",
      label: "Tình trạng khách hàng",
      link: "/"
    },
    {
      blank: "",
      label: "Nhập liệu",
      link: "/"
    }
    ],
    content: "Khách hàng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/chance.svg",
    link: "/",
    children: [],
    content: "Cơ hội",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/hotline.svg",
    link: "/",
    children: [{
      blank: "",
      label: "Khảo sát",
      link: "/khao-sat"
    },
    {
      blank: "",
      label: "Lịch chăm sóc khách hàng",
      link: "/lich-cham-soc-khach-hang"
    },
    {
      blank: "",
      label: "Lịch hẹn",
      link: "/lich-hen"
    },
    {
      blank: "",
      label: "Tổng đài",
      link: "/tong-dai"
    }
    ],
    content: "Chăm sóc khách hàng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/contract.svg",
    link: "/contract/list",
    children: [],
    content: "Hợp đồng",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/form.svg",
    link: "",
    children: [],
    content: "Báo cáo",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/chiendich.svg",
    link: "/campaign/list",
    children: [],
    content: "Chiến dịch",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/baogia.svg",
    link: "",
    children: [],
    content: "Báo giá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/img/nav-price-promotion.svg",
    link: "",
    children: [],
    content: "Quản lý khuyến mãi",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/marketing.svg",
    link: "/",
    children: [{
      blank: "",
      label: "Email",
      link: "/"
    },
    {
      blank: "",
      label: "SMS",
      link: "/"
    }],
    content: "Marketing",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/cart.svg",
    link: "/order/list",
    children: [],
    content: "Quản lý đơn hàng",
  },
  {
    img_link: "	https://crm.timviec365.vn/assets/icons/bill.svg",
    link: "",
    children: [],
    content: "Quản lý hoá đơn",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/supplier.svg",
    link: "/price_policy/list",
    children: [{
      blank: "",
      label: "Danh sách nhà cung cấp",
      link: "/"
    },
    {
      blank: "",
      label: "Nhóm nhà cung cấp",
      link: "/"
    }],
    content: "Nhà cung cấp",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_price_policy.svg",
    link: "/price_policy/list",
    children: [],
    content: "Chính sách giá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_product_return.svg",
    link: "/product_return/list",
    children: [],
    content: "Trả lại hàng bán",
  },
  {
    img_link: "	https://crm.timviec365.vn/assets/icons/re-expen.svg",
    link: "/",
    children: [{
      blank: "",
      label: "Theo dõi thu chi",
      link: "/theo-doi-thu-chi"
    },
    {
      blank: "",
      label: "Phiếu thu",
      link: "/phieu-thu"
    },
    {
      blank: "",
      label: "Phiếu chi",
      link: "/phieu-chi"
    },
    {
      blank: "",
      label: "Sổ quỹ",
      link: "/so-quy"
    },
    {
      blank: "",
      label: "Công nợ",
      link: "/cong-no-nha-cung-cap"
    },
    {
      blank: "",
      label: "Sản phẩm",
      link: "/san-pham"
    },],
    content: "Quản lý thu chi",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_bin.svg",
    link: "/delete_data/list",
    children: [],
    content: "Dữ liệu đã xoá",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/nav_setting.svg",
    link: "/setting/main",
    children: [],
    content: "Cài đặt",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/i_cds365.svg",
    link: "https://quanlychung.timviec365.vn/quan-ly-ung-dung-cong-ty.html",
    children: [],
    content: "Chuyển đổi số",
  },
  {
    img_link: "https://crm.timviec365.vn/assets/icons/i_cds365.svg",
    link: "https://quanlychung.timviec365.vn/quan-ly-ung-dung-nhan-vien.html",
    children: [],
    content: "",
  },
];

export const boxDesPrimaryCustomer = {
  title: "Tổng khách hàng: ",
  amount: 453203,
};

export const boxDesWarningCustomer = {
  title: "Tổng nhóm khách hàng: ",
  amount: 41,
};

export const boxDesPrimaryOrder = {
  title: "Tổng đơn hàng:  ",
  amount: 5605,
};

export const boxDesSucessOrder = {
  title: "Đơn hàng thành công: ",
  amount: 32,
};

export const boxDesWarningOrder = {
  title: "Đơn hàng chưa thanh toán ",
  amount: 41,
};

export const boxDesPrimaryMarketing = {
  title: "Tổng chiến dịch: ",
  amount: 0,
};

export const boxDesWarningMarketing = {
  title: "Email đã gửi: ",
  amount: 0,
};

export const messages_data_box = [
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Minh Anh",
    message: "Test",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Duc Long",
    message: "Xin chao",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-mess.svg",
    name: "Nguyễn Đào Lực",
    message: "Hihihi",
    timestamp: "10:07 AM",
  },
];

export const warning_header_box = [
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-help.svg",
    children: [],
    content: "Mọi người đi làm nền đeo khẩu trang để phòng ngừa Virus Corona",
    timestamp: "3 giờ trước",
    name: "Chấm công 365",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-help.svg",
    children: [],
    content: "Mọi người đi làm nền đeo khẩu trang để phòng ngừa Virus Corona",
    timestamp: "3 giờ trước",
    name: "Chấm công 365",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-help.svg",
    children: [],
    content: "Mọi người đi làm nền đeo khẩu trang để phòng ngừa Virus Corona",
    timestamp: "3 giờ trước",
    name: "Chấm công 365",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-help.svg",
    children: [],
    content: "Mọi người đi làm nền đeo khẩu trang để phòng ngừa Virus Corona",
    timestamp: "3 giờ trước",
    name: "Chấm công 365",
  },
  {
    img: "https://crm.timviec365.vn/assets/icons/icon-avatar-help.svg",
    children: [],
    content: "Mọi người đi làm nền đeo khẩu trang để phòng ngừa Virus Corona",
    timestamp: "3 giờ trước",
    name: "Chấm công 365",
  },
];

export const dataOptions = [
  {
    type: "status",
    data: ["Khách hàng XYZ", "Khách hàng thượng lưu", "Khách hàng tốt bụng", "Khách hàng phổ thông", "Khách hàng VIP"]
  },
  {
    type: "source",
    data: ["Facebook", "Zalo", "SMS", "Chăm sóc khách hàng", "Website"]
  },
  {
    type: "parrent",
    data: ["XYZ", "ABC",]
  },
  {
    type: "child",
    data: ["XYZ", "ABC",]
  }
]

export const dataActionPotential = [
  {
    link: "",
    name: "Gọi điện",
    img: "bi bi-telephone",
    type: "call",
  },
  {
    link: "#",
    name: "Chọn vào chiến dịch",
    img: 'bi bi-check-square',
    type: "campaign",
  },
  {
    link: "#",
    name: "Email marketing",
    img: `bi bi-envelope`,
    type: "email",
  },
  {
    link: "",
    name: "Gửi sms",
    img: `bi bi-chat-left-dots`,
    type: "",
  },
  {
    link: "#",
    name: "Chia sẻ",
    img: `bi bi-reply-fill`,
    type: "share",
  },
  {
    link: "#",
    name: "Bàn giao công việc",
    img: `bi bi-bag`,
    type: "hand_over",
  },
  {
    link: "potential/list",
    name: "Nhân bản",
    img: `bi bi-back`,
    type: "blank",
  },
  {
    link: "/potential/check_merge",
    name: "Kiểm tra trùng",
    img: `bi bi-search`,
    type: "",
  },
  {
    link: "/potential/merge",
    name: "Gộp trùng",
    img: `bi bi-share`,
    type: "",
  },
  {
    link: "#",
    name: "Chuyển đổi",
    img: `bi bi-arrow-left-right`,
    type: "convert",
  },
  {
    link: "/potential/edit_file",
    name: "Chỉnh Sửa",
    img: `bi bi-pencil-square`,
    type: "",
  },
  {
    link: "#",
    name: "Xóa",
    img: `bi bi-trash3`,
    type: "delete",
  },
]

export const dataActionOrder = [
  {
    link: "#",
    name: "Duyệt",
    img: "bi bi-check2-circle",
    type: "order_browsing",
  },
  {
    link: "#",
    name: "Từ chối",
    img: 'bi bi-x-circle',
    type: "deny",
  },
  {
    link: "#",
    name: "Hủy",
    img: 'bi bi-x',
    type: "cancel",
  },
  {
    link: "#",
    name: "Chia sẻ",
    img: `bi bi-reply-fill`,
    type: "share",
  },
  {
    link: "#",
    name: "Bàn giao công việc",
    img: `bi bi-bag`,
    type: "hand_over",
  },
  {
    link: "/order/edit",
    name: "Chỉnh Sửa",
    img: `bi bi-pencil-square`,
    type: "edit",
  },
  {
    link: "#",
    name: "Xóa",
    img: `bi bi-trash3`,
    type: "delete",
  },
]


export const dataCustomerListAction = [
  {
    link: "",
    name: "Gọi điện",
    img: "bi bi-telephone",
    type: "call",
  },
  {
    link: "#",
    name: "Chia sẻ",
    img: `bi bi-reply-fill`,
    type: "share",
  },
  {
    link: "#",
    name: "Bàn giao công việc",
    img: `bi bi-bag`,
    type: "hand_over",
  },
  {
    link: "/customer/check_merge",
    name: "Kiểm tra trùng",
    img: `bi bi-search`,
    type: "",
  },
  {
    link: "/customer/same_filter",
    name: "Gộp trùng",
    img: `bi bi-share`,
    type: "",
  },
  {
    link: "/customer/edit_file",
    name: "Chỉnh Sửa",
    img: `bi bi-pencil-square`,
    type: "",
  },
  {
    link: "#",
    name: "Xóa",
    img: `bi bi-trash3`,
    type: "delete",
  },
]

export const dataActionPricePolicy = [
  {
    link: "/price_policy/update",
    name: "Chỉnh Sửa",
    img: `bi bi-pencil-square`,
    type: "",
  },
  {
    link: "#",
    name: "Xóa",
    img: `bi bi-trash3`,
    type: "delete",
  },
]
