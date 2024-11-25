"use client";

import { Table } from "@tanstack/react-table";
import React from "react";
import { DataTableViewOptions } from "./data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  // const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between pr-2">
      <div className="flex flex-1 items-center space-x-4">
        {/* <Button variant="ghost" className="h-8 px-2 lg:px-3 hover:bg-cz-black">
          <Filter className="ml-0 h-4 w-4" />
        </Button> */}
        {/* <div className="flex"> */}
          {/* <Button variant="ghost" className="h-8 px-2 lg:px-3 rounded-s-lg hover:bg-cz-black">
          <Filter className="ml-0 h-4 w-4" />
        </Button> */}
          {/* <div className="h-8 px-2 lg:px-3 rounded-s-lg flex items-center bg-cz-black text-cz-red">
            <Search className="ml-0 h-4 w-4" />
          </div>
          <Input
            placeholder="Filter Location Type..."
            value={
              (table.getColumn("locationType")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("locationType")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px] rounded-e-lg bg-cz-black border-0 focus:outline-none"
          /> */}
        {/* </div> */}
        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )} */}
        {/* {table.getColumn("state") && (
          <DataTableFacetedFilter
            column={table.getColumn("state")}
            title="State"
            options={getStates()}
          />
        )} */}
        {/* {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {/* {table.getColumn("city") && (
          <DataTableFacetedFilter
            column={table.getColumn("city")}
            title="City"
            options={getCities()}
          />
        )} */}
        {/* {table.getColumn("locationType") && (
          <DataTableFacetedFilter
            column={table.getColumn("locationType")}
            title="Type of Location"
            options={locationType}
          />
        )} */}
        {/* {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
