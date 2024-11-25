"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "../../company-table-component/data/schema";
// import { DataTableColumnHeader } from "../../company-table-component/components/data-table-column-header";
import React from "react";
import Image from "next/image";
import { DataTableColumnHeader } from "./data-table-column-header";

export const companyColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "logo",
    cell: ({ row }) => {
      if (!row.getValue("logo")) {
        return <span>Logo</span>;
      }
      return (
        <div className="flex w-[30px] items-center cursor-default">
          <Image width={20} height={20} src={row.getValue("logo")} alt="logo" />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "companyName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="companyName" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("companyName")) {
        return <span>Company Name</span>;
      }
      return (
        <div className="flex w-[170px] items-center cursor-default">
          <span>{row.getValue("companyName")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("email")) {
        return <span>Email</span>;
      }
      return (
        <div className="flex w-[220px] items-center cursor-default">
          <span>{row.getValue("email")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "mobileNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mobile Number" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("mobileNumber")) {
        return <span>Number</span>;
      }
      return (
        <div className="flex w-[150px] items-center cursor-default">
          <span>{row.getValue("mobileNumber")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
