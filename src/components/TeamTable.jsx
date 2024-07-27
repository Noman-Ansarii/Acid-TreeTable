import React from "react";
import { Table } from "antd";
import { flattenData } from "@/utils/flattenData.jsx"; // Import your flattenData function from a utils file

const TeamTable = ({ data }) => {
  const { teams, users } = flattenData(data);

  const expandedRowRender = (record) => {
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
  );
};

export default TeamTable;