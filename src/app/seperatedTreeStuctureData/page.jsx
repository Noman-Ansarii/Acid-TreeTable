"use client";
import React from "react";
import { Table, Watermark } from "antd";

// Sample data
const data = [
  {
    _id: "652a7aa6aecce9b3c86c41a7",
    team_name: "Main Team",
    type: "team",
    children: [
      {
        staffId: "662f680e5ffe28bed93145ab",
        name: "Hamza Qureshi1",
        designation: "Chief Executive Officer",
        type: "staff",
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
      {
        staffId: "662f680e5ffe28bed93432145ab",
        name: "Hamza Qureshi2",
        designation: "Chief Executive Officer",
        type: "staff",
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
      {
        staffId: "662f680e5ffe28be243d93145ab",
        name: "Hamza Qureshi3",
        designation: "Chief Executive Officer",
        type: "staff",
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
      {
        staffId: "662f680e545ffe28bed93145ab",
        name: "Hamza Qureshi4",
        designation: "Chief Executive Officer",
        type: "staff",
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
      {
        staffId: "662f680e5ffe23548bed93145ab",
        name: "Hamza Qureshi5",
        designation: "Chief Executive Officer",
        type: "staff",
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
      {
        _id: "66682f9f33d605f7152490a0",
        team_name: "Team 2",
        type: "team",
        children: [
          {
            staffId: "662f6a23dc6feaf03380fba6",
            name: "Noman",
            designation: "Director",
            type: "staff",
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
            name: "Team 2 Player 2",
            designation: "Associate Director",
            type: "staff",
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
            staffId: "662f6a23dc6324342feaf03380fba6",
            name: "Noman2",
            designation: "Director",
            type: "staff",
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
            staffId: "662f6efa2340d5e424e8ef3f38e",
            name: "Team 2 Player 3",
            designation: "Associate Director",
            type: "staff",
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
            staffId: "662f6a23dc6344feaf03380fba6",
            name: "Noman3",
            designation: "Director",
            type: "staff",
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
            staffId: "662f6efa04324d5e424e8ef3f38e",
            name: "Team 2 Player 4",
            designation: "Associate Director",
            type: "staff",
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
            staffId: "662f6a23dc6344feaf03380fba6",
            name: "Noman5",
            designation: "Director",
            type: "staff",
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
            staffId: "662f6efa0d324435e424e8ef3f38e",
            name: "Team 2 Player 5",
            designation: "Associate Director",
            type: "staff",
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
            staffId: "662f6a23453dc6feaf03380fba6",
            name: "Noman6",
            designation: "Director",
            type: "staff",
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
            staffId: "662f6efa0d5e424546e8ef3f38e",
            name: "Team 2 Player 6",
            designation: "Associate Director",
            type: "staff",
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
            _id: "66682ff433d605f7152490b8",
            team_name: "Team 3",
            type: "team",
            children: [
              {
                staffId: "662f6e860d5e424e8ef3f29a",
                name: "Team 3 Player1",
                designation: "Regional Sales Manager",
                type: "staff",
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
                staffId: "662f6e860d5e424e8ef3f29a",
                name: "Team 3 Player2",
                designation: "Regional Sales Manager",
                type: "staff",
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
                staffId: "662f6e860d5e424e8ef3f29a",
                name: "Team 3 Player3",
                designation: "Regional Sales Manager",
                type: "staff",
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
                _id: "347928342479490b8",
                team_name: "Team 4",
                type: "team",
                children: [
                  {
                    staffId: "28239dsda832440982",
                    name: "Team 4 Player ",
                    designation: "Web Developer",
                    type: "staff",
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
                    staffId: "34223424ccdfs5",
                    name: "Team 4 Player 2",
                    designation: "Web Developer",
                    type: "staff",
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
                    _id: "34792834455532479490b8",
                    team_name: "Team 5",
                    type: "team",
                    children: [
                      {
                        staffId: "28239dsda832440982",
                        name: "Team 5 Player ",
                        designation: "Not Avail",
                        type: "staff",
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
                        affiliatesRelated: {
                          assigned: 0,
                          active: 0,
                          worked: 0,
                        },
                      },
                      {
                        staffId: "34223424ccdfs5",
                        name: "Team 5 Player 2",
                        designation: "NoT Avail",
                        type: "staff",
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
                        affiliatesRelated: {
                          assigned: 0,
                          active: 0,
                          worked: 0,
                        },
                      },
                      {
                        _id: "34792834243455379490b8",
                        team_name: "Team 6",
                        type: "team",
                        children: [
                          {
                            staffId: "662f6a23dc6feaf03380fba6",
                            name: "Noman",
                            designation: "Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6efa0d5e424e8ef3f38e",
                            name: "Team 2 Player 2",
                            designation: "Associate Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6a23dc6324342feaf03380fba6",
                            name: "Noman2",
                            designation: "Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6efa2340d5e424e8ef3f38e",
                            name: "Team 2 Player 3",
                            designation: "Associate Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6a23dc6344feaf03380fba6",
                            name: "Noman3",
                            designation: "Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6efa04324d5e424e8ef3f38e",
                            name: "Team 2 Player 4",
                            designation: "Associate Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6a23dc6344feaf03380fba6",
                            name: "Noman5",
                            designation: "Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6efa0d324435e424e8ef3f38e",
                            name: "Team 2 Player 5",
                            designation: "Associate Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6a23453dc6feaf03380fba6",
                            name: "Noman6",
                            designation: "Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                          {
                            staffId: "662f6efa0d5e424546e8ef3f38e",
                            name: "Team 2 Player 6",
                            designation: "Associate Director",
                            type: "staff",
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
                            affiliatesRelated: {
                              assigned: 0,
                              active: 0,
                              worked: 0,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Flatten data for teams and users
const flattenData = (data) => {
  let teams = [];
  let users = [];

  const recurse = (item, parentKey) => {
    if (item.type === "team") {
      teams.push({
        key: item._id,
        team_name: item.team_name,
        parentKey: parentKey,
      });
    }

    if (item.type === "staff") {
      users.push({
        key: item.staffId,
        name: item.name,
        designation: item.designation,
        ...item.leadsRelated,
        ...item.meetingsRelated,
        ...item.unitsRelated,
        ...item.affiliatesRelated,
        parentKey: parentKey,
      });
    }

    if (item.children) {
      item.children.forEach((child) => recurse(child, item._id));
    }
  };

  data.forEach((item) => recurse(item, null));

  return { teams, users };
};

const { teams, users } = flattenData(data);

// Define table columns for teams
const teamColumns = [
  {
    title: "Team Name",
    dataIndex: "team_name",
    key: "team_name",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
  },
  {
    title: "Name",
    width: 100,
    ellipsis: {
      showTitle: true,
    },
  },
  {
    title: "Designation",
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
        dataIndex: "al",
        key: "al",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Added",
        dataIndex: "added",
        key: "added",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "SHL Sale",
        dataIndex: "shl_sale",
        key: "shl_sale",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "SHL Support",
        dataIndex: "shl_support",
        key: "shl_support",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "TWL",
        dataIndex: "twl",
        key: "twl",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
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
        dataIndex: "met_done",
        key: "met_done",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Met Confirm",
        dataIndex: "met_confirm",
        key: "met_confirm",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Met Push",
        dataIndex: "met_pushed",
        key: "met_pushed",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Avg Met",
        dataIndex: "avg_met",
        key: "avg_met",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
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
        dataIndex: "token",
        key: "token",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "PDP",
        dataIndex: "pdp",
        key: "pdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "CDP",
        dataIndex: "cdp",
        key: "cdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
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
        dataIndex: "assigned",
        key: "assigned",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Active",
        dataIndex: "active",
        key: "active",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Worked",
        dataIndex: "worked",
        key: "worked",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
    ],
  },
];

// Define table columns for users
const userColumns = [
  {
    title: "",
    width: 147,
    dataIndex: "",
    key: "name",
    ellipsis: {
      showTitle: true,
    },
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
        dataIndex: "al",
        key: "al",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Added",
        dataIndex: "added",
        key: "added",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "SHL Sale",
        dataIndex: "shl_sale",
        key: "shl_sale",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "SHL Support",
        dataIndex: "shl_support",
        key: "shl_support",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "TWL",
        dataIndex: "twl",
        key: "twl",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
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
        dataIndex: "met_done",
        key: "met_done",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Met Confirm",
        dataIndex: "met_confirm",
        key: "met_confirm",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Met Push",
        dataIndex: "met_pushed",
        key: "met_pushed",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Avg Met",
        dataIndex: "avg_met",
        key: "avg_met",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
    ],
  },
  {
    title: "Units Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Token",
        dataIndex: "token",
        key: "token",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "PDP",
        dataIndex: "pdp",
        key: "pdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "CDP",
        dataIndex: "cdp",
        key: "cdp",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
    ],
  },
  {
    title: "Affiliates Related",
    ellipsis: {
      showTitle: true,
    },
    children: [
      {
        title: "Assigned",
        dataIndex: "assigned",
        key: "assigned",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Active",
        dataIndex: "active",
        key: "active",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
      {
        title: "Worked",
        dataIndex: "worked",
        key: "worked",
        ellipsis: {
          showTitle: true,
        },
        width: 65,
      },
    ],
  },
];

// Team Table Component
const TeamTable = () => {
  const expandedRowRender = (record) => {
    // Check if it's a team or staff
    const nestedTeams = teams.filter((team) => team.parentKey === record.key);
    const nestedUsers = users.filter((user) => user.parentKey === record.key);

    return (
      <div>
        {nestedUsers.length > 0 && (
          <Table
            columns={userColumns}
            dataSource={nestedUsers}
            pagination={false}
            showHeader={false}
            bordered
            // style={{ marginBottom: 8 }}
          />
        )}
        {nestedTeams.length > 0 && (
          <Table
            columns={teamColumns}
            dataSource={nestedTeams}
            expandable={{
              expandedRowRender: expandedRowRender,
              rowExpandable: (nestedRecord) =>
                users.some((user) => user.parentKey === nestedRecord.key) ||
                teams.some((team) => team.parentKey === nestedRecord.key),
            }}
            pagination={false}
            showHeader={false}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <Watermark content="Noman Ansari">
        <Table
          columns={teamColumns}
          dataSource={teams.filter((team) => !team.parentKey)} // Only top-level teams
          expandable={{
            expandedRowRender: expandedRowRender,
            rowExpandable: (record) =>
              users.some((user) => user.parentKey === record.key) ||
              teams.some((team) => team.parentKey === record.key),
          }}
        />
      </Watermark>
    </>
  );
};

// Main App component
const App = () => {
  return <TeamTable />;
};

export default App;
