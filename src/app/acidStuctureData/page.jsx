"use client";
import React from "react";
import { Table } from "antd";

// Sample data
const data = [
  {
    _id: "652a7aa6aecce9b3c86c41a7",
    is_admin: "662f680e5ffe28bed93145ab",
    team_name: "Sample Team 1",
    team_staff: [
      {
        staffId: "662f680e5ffe28bed93145ab",
        name: "Hamza Qureshi",
        team: "652a7aa6aecce9b3c86c41a7",
        designation: "Chief Executive Officer",
        parentTeam: "Null",
        leadsRelated: { al: 0, added: 0, shl_sale: 0, shl_support: 0, twl: 0 },
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
    children_teams: [
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
        children_teams: [
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
        ],
      },
    ],
    parentTeamId: "Null",
  },
];

// Component to render staff in a team
// Component to render staff in a team
const StaffTable = ({ team }) => {
  const columns = [
    {
      title: "",
      dataIndex: "123",
      key: "123",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Leads Related",
      children: [
        {
          title: "AL",
          dataIndex: ["leadsRelated", "al"],
          key: "al",
        },
        {
          title: "Added",
          dataIndex: ["leadsRelated", "added"],
          key: "added",
        },
        {
          title: "SHL Sale",
          dataIndex: ["leadsRelated", "shl_sale"],
          key: "shl_sale",
        },
        {
          title: "SHL Support",
          dataIndex: ["leadsRelated", "shl_support"],
          key: "shl_support",
        },
        {
          title: "TWL",
          dataIndex: ["leadsRelated", "twl"],
          key: "twl",
        },
      ],
    },
    {
      title: "Meetings Related",
      children: [
        {
          title: "Met Done",
          dataIndex: ["meetingsRelated", "met_done"],
          key: "met_done",
        },
        {
          title: "Met Confirm",
          dataIndex: ["meetingsRelated", "met_confirm"],
          key: "met_confirm",
        },
        {
          title: "Met Push",
          dataIndex: ["meetingsRelated", "met_push"],
          key: "met_push",
        },
        {
          title: "Avg Met",
          dataIndex: ["meetingsRelated", "avg_met"],
          key: "avg_met",
        },
      ],
    },
    {
      title: "Units Related",
      children: [
        {
          title: "Token",
          dataIndex: ["unitsRelated", "token"],
          key: "token",
        },
        {
          title: "PDP",
          dataIndex: ["unitsRelated", "pdp"],
          key: "pdp",
        },
        {
          title: "CDP",
          dataIndex: ["unitsRelated", "cdp"],
          key: "cdp",
        },
      ],
    },
    {
      title: "Affiliates Related",
      children: [
        {
          title: "Assigned",
          dataIndex: ["affiliatesRelated", "assigned"],
          key: "assigned",
        },
        {
          title: "Active",
          dataIndex: ["affiliatesRelated", "active"],
          key: "active",
        },
        {
          title: "Worked",
          dataIndex: ["affiliatesRelated", "worked"],
          key: "worked",
        },
      ],
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={team.team_staff.map((item) => ({
        ...item,
        key: item.staffId,
      }))}
      pagination={false}
      showHeader={false}
    />
  );
};

// Component to render child teams
const ChildTeamTable = ({ childrenTeams }) => {
  const columns = [
    {
      dataIndex: "team_name",
      key: "team_name",
    },
  ];

  return (
    <Table
      className="-ms-3.5"
      columns={columns}
      dataSource={childrenTeams.map((item) => ({ ...item, key: item._id }))}
      expandable={{
        expandedRowRender: (record) => (
          <div style={{ margin: 0 }}>
            <StaffTable team={record} />
            {record.children_teams && record.children_teams.length > 0 && (
              <ChildTeamTable childrenTeams={record.children_teams} />
            )}
          </div>
        ),
      }}
      pagination={false}
      showHeader={false}
    />
  );
};

// Main component to render the top-level team table
const TeamTable = () => {
  const columns = [
    {
      title: "Team Name",
      dataIndex: "team_name",
      key: "team_name",
    },
    {
      title: "Name",
    },
    {
      title: "Designation",
    },
    {
      title: "LeadsRelated",
      children: [
        {
          title: "Al",
          dataIndex: "leadsRelated.al",
        },
        {
          title: "Added",
          dataIndex: "leadsRelated.added",
        },
        {
          title: "shl_sale",
          dataIndex: "leadsRelated.shl_sale",
        },
        {
          title: "shl_support",
          dataIndex: "leadsRelated.shl_support",
        },
        {
          title: "twl",
          dataIndex: "leadsRelated.twl",
        },
      ],
    },
    {
      title: "MeetingsRelated",
      children: [
        {
          title: "met_done",
          dataIndex: "meetingsRelated.met_done",
        },
        {
          title: "met_confirm",
          dataIndex: "meetingsRelated.met_confirm",
        },
        {
          title: "met_push",
          dataIndex: "meetingsRelated.met_push",
        },
        {
          title: "avg_met",
          dataIndex: "meetingsRelated.avg_met",
        },
      ],
    },
    {
      title: "UnitsRelated",
      children: [
        {
          title: "Token",
          dataIndex: "unitsRelated.token",
        },
        {
          title: "PDP",
          dataIndex: "unitsRelated.pdp",
        },
        {
          title: "CDP",
          dataIndex: "unitsRelated.cdp",
        },
      ],
    },
    {
      title: "AffiliatesRelated",
      children: [
        {
          title: "Assigned",
          dataIndex: "affiliatesRelated.assigned",
        },
        {
          title: "Active",
          dataIndex: "affiliatesRelated.active",
        },
        {
          title: "Worked",
          dataIndex: "affiliatesRelated.worked",
        },
      ],
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data.map((item) => ({ ...item, key: item._id }))}
      bordered
      expandable={{
        expandedRowRender: (record) => (
          <div style={{ margin: 0 }}>
            <StaffTable team={record} />
            {record.children_teams && record.children_teams.length > 0 && (
              <ChildTeamTable childrenTeams={record.children_teams} />
            )}
          </div>
        ),
      }}
    />
  );
};

// Main App component
const App = () => {
  return <TeamTable />;
};

export default App;
