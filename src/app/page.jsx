"use client"

import { useUser } from "@/api/hooks/users/useUser";
import { useCompany } from "@/api/hooks/company/useCompany";
import { useDispatch } from "react-redux";
import { setUsers } from "@/app/redux/slices/UserSlice";
import { setCompanys } from "@/app/redux/slices/CompanySlice";

export default function Home() {

  const dispatch = useDispatch();
  const { users } = useUser();
  const { companys } = useCompany();

  dispatch(setUsers(users))
  dispatch(setCompanys(companys))

  // console.log("XXXXXXXX users ", users)
  // console.log("XXXXXXXX company ", companys)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Mohtasheem is here!!!!</h1>
    </div>
  );
}
