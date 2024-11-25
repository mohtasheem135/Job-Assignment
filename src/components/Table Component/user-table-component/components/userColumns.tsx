"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const userColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "avatar",
    cell: ({ row }) => {
      if (!row.getValue("avatar")) {
        return <span>Avatar</span>;
      }
      return (
        <div className="flex w-[30px] items-center cursor-default">
          <Image
            width={20}
            height={20}
            src={row.getValue("avatar")}
            alt="avatar"
          />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("name")) {
        return <span>User Name</span>;
      }
      return (
        <div className="flex w-[170px] items-center cursor-default">
          <span>{row.getValue("name")}</span>
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
  {
    accessorKey: "currency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Currency" />
    ),
    cell: ({ row }) => {
      if (!row.getValue("currency")) {
        return <span>INR</span>;
      }
      return (
        <div className="flex w-[150px] items-center cursor-default">
          <span>{row.getValue("currency")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Active" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[150px] items-center">
          <Badge className="cursor-default w-[85px] flex justify-center">
            <span>{row.getValue("isActive") ? "Active" : "Not Active"}</span>
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
