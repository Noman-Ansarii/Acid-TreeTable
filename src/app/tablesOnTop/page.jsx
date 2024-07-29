"use client";
import React from "react";
import { Table } from "antd";

const mainData = [
  {
    _id: "652a7aa6aecce9b3c86c41a7",
    is_admin: "662f680e5ffe28bed93145ab",
    team_name: "Sample Team 1",
    team_staff: [
      {
        staffId: "662f680e5ffe28bed93145ab",
        name: "Hamza Qureshi",
        team: "652a7aa6aecce9b3c86c41a7",
        designation: "Cheif Exective officer",
        parentTeam: "Null",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
      {
        staffId: "662f680e5ffe28b324ed93145ab",
        name: "Team 1 Staff 1",
        team: "652a7aa6aecce9b3c86c41a7",
        designation: "Employe",
        parentTeam: "Null",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
      {
        staffId: "662f680e5ffe28b324ed93145ab",
        name: "Team 1 Staff",
        team: "652a7aa6aecce9b3c86c41a7",
        designation: "Employe",
        parentTeam: "Null",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
    ],
    parentTeamId: "Null",
  },
  {
    _id: "66682f9f33d605f7152490a0",
    is_admin: "662f6a23dc6feaf03380fba6",
    team_name: "Team ET Phase 2",
    team_staff: [
      {
        staffId: "662f6a23dc6feaf03380fba6",
        name: "noman",
        team: "66682f9f33d605f7152490a0",
        designation: "Director",
        parentTeam: "652a7aa6aecce9b3c86c41a7",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
      {
        staffId: "662f6efa0d5e424e8ef3f38e",
        name: "testing2",
        team: "66682f9f33d605f7152490a0",
        designation: "Associate Director",
        parentTeam: "652a7aa6aecce9b3c86c41a7",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
    ],
    parentTeamId: "652a7aa6aecce9b3c86c41a7",
  },
  {
    _id: "66682ff433d605f7152490b8",
    is_admin: "662f6e860d5e424e8ef3f29a",
    team_name: "Dream Housing Site Office",
    team_staff: [
      {
        staffId: "662f6e860d5e424e8ef3f29a",
        name: "testing",
        team: "66682ff433d605f7152490b8",
        designation: "Regional Sales Manager",
        parentTeam: "66682f9f33d605f7152490a0",
        leadsRelated: {
          al: 0,
          added: 0,
          shl_sale: 0,
          shl_support: 0,
          twl: 0,
        },
        meetingsRelated: {
          met_done: 0,
          met_confirm: 0,
          met_pushed: 0,
          avg_met: "0.00",
        },
        unitsRelated: { token: 0, pdp: 0, cdp: 0 },
        affiliatesRelated: { assigned: 0, active: 0, worked: 0 },
      },
    ],
    parentTeamId: "66682f9f33d605f7152490a0",
  },
];

const mainColumns = [
  {
    title: "Team Name",
    dataIndex: "team_name",
    key: "team_name",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    align: "left",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    align: "left",
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
    width: 120,
    ellipsis: {
      showTitle: true,
    },
    align: "left",
  },
  {
    title: "Leads Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "AL",
        dataIndex: ["leadsRelated", "al"],
        key: "al",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Added",
        dataIndex: ["leadsRelated", "added"],
        key: "added",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "SHL Sale",
        dataIndex: ["leadsRelated", "shl_sale"],
        key: "shl_sale",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "SHL Support",
        dataIndex: ["leadsRelated", "shl_support"],
        key: "shl_support",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "TWL",
        dataIndex: ["leadsRelated", "twl"],
        key: "twl",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Meetings Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Met Done",
        dataIndex: ["meetingsRelated", "met_done"],
        key: "met_done",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Met Confirm",
        dataIndex: ["meetingsRelated", "met_confirm"],
        key: "met_confirm",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Met Push",
        dataIndex: ["meetingsRelated", "met_pushed"],
        key: "met_pushed",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Avg Met",
        dataIndex: ["meetingsRelated", "avg_met"],
        key: "avg_met",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Units Related",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Token",
        dataIndex: ["unitsRelated", "token"],
        key: "token",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "PDP",
        dataIndex: ["unitsRelated", "pdp"],
        key: "pdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "CDP",
        dataIndex: ["unitsRelated", "cdp"],
        key: "cdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Affiliates Related",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Assigned",
        dataIndex: ["affiliatesRelated", "assigned"],
        key: "assigned",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Active",
        dataIndex: ["affiliatesRelated", "active"],
        key: "active",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Worked",
        dataIndex: ["affiliatesRelated", "worked"],
        key: "worked",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
];

// Define table columns for users
const userColumns = [
  {
    title: "",
    width: 46.5,
  },
  {
    title: "",
    width: 100,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
    width: 120,
    ellipsis: {
      showTitle: true,
    },
  },
  {
    title: "Leads Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "AL",
        dataIndex: ["leadsRelated", "al"],
        key: "al",
        ellipsis: {
          showTitle: true,
        },
        width: 64,
        align: "left",
      },
      {
        title: "Added",
        dataIndex: ["leadsRelated", "added"],
        key: "added",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "SHL Sale",
        dataIndex: ["leadsRelated", "shl_sale"],
        key: "shl_sale",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "SHL Support",
        dataIndex: ["leadsRelated", "shl_support"],
        key: "shl_support",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "TWL",
        dataIndex: ["leadsRelated", "twl"],
        key: "twl",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Meetings Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Met Done",
        dataIndex: ["meetingsRelated", "met_done"],
        key: "met_done",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Met Confirm",
        dataIndex: ["meetingsRelated", "met_confirm"],
        key: "met_confirm",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "Met Push",
        dataIndex: ["meetingsRelated", "met_pushed"],
        key: "met_pushed",
        ellipsis: {
          showTitle: true,
        },
        width: 64,
        align: "left",
      },
      {
        title: "Avg Met",
        dataIndex: ["meetingsRelated", "avg_met"],
        key: "avg_met",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Units Related",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Token",
        dataIndex: ["unitsRelated", "token"],
        key: "token",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "PDP",
        dataIndex: ["unitsRelated", "pdp"],
        key: "pdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
      {
        title: "CDP",
        dataIndex: ["unitsRelated", "cdp"],
        key: "cdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
        align: "left",
      },
    ],
  },
  {
    title: "Affiliates Related",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Assigned",
        dataIndex: ["affiliatesRelated", "assigned"],
        key: "assigned",
        ellipsis: {
          showTitle: true,
        },
        width: 66,
        align: "left",
      },
      {
        title: "Active",
        dataIndex: ["affiliatesRelated", "active"],
        key: "active",
        ellipsis: {
          showTitle: true,
        },
        width: 68,
        align: "left",
      },
      {
        title: "Worked",
        dataIndex: ["affiliatesRelated", "worked"],
        key: "worked",
        ellipsis: {
          showTitle: true,
        },
        width: 67,
        align: "left",
      },
    ],
  },
];

const Page = () => {
  // Process data to add key and team_name for staff
  const processDataSource = (data) => {
    return data.map((team) => {
      const adminStaff = team.team_staff.find(
        (staff) => staff.staffId.toString() === team.is_admin.toString()
      );

      return {
        key: team._id.toString(),
        team_name: team.team_name,
        name: adminStaff?.name || "",
        designation: adminStaff?.designation || "",
        leadsRelated: adminStaff?.leadsRelated || {},
        meetingsRelated: adminStaff?.meetingsRelated || {},
        unitsRelated: adminStaff?.unitsRelated || {},
        affiliatesRelated: adminStaff?.affiliatesRelated || {},
        team_staff: team.team_staff
          .filter(
            (staff) => staff.staffId.toString() !== team.is_admin.toString()
          )
          .map((staff) => ({
            ...staff,
            key: staff.staffId.toString(),
          })),
      };
    });
  };

  const dataSource = processDataSource(mainData);

  return (
    <>
    <div className="w-[99%]">
    <Table
      columns={mainColumns}
      dataSource={dataSource}
      expandable={{
        expandedRowRender: (record) => (
          <Table
            columns={userColumns}
            dataSource={record.team_staff}
            pagination={false}
            showHeader={false}
          />
        ),
      }}
      size="large"
    />
    </div>
    </>
  );
};

export default Page;
