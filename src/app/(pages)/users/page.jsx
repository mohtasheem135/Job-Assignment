"use client";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserTableComponent from "@/components/Table Component/user-table-component/user-table-page";

const Page = () => {
  const usersList = useSelector((state) => state.user)?.users;

  return (
    <div className="overflow-hidden">
      <UserTableComponent name="user" data={usersList} />
    </div>
  );
};

export default Page;
