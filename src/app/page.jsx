"use client";

import { useUser } from "@/api/hooks/users/useUser";
import { useCompany } from "@/api/hooks/company/useCompany";
import { useDispatch } from "react-redux";
import { setUsers } from "@/app/redux/slices/UserSlice";
import { setCompanys } from "@/app/redux/slices/CompanySlice";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CircleUserRound } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";

export default function Home() {
  const dispatch = useDispatch();
  const { users } = useUser();
  const { companys } = useCompany();

  dispatch(setUsers(users));
  dispatch(setCompanys(companys));

  // console.log("XXXXXXXX users ", users)
  // console.log("XXXXXXXX company ", companys)

  return (
    <div className="flex justify-center items-center">
      <Card className="w-[250px] mt-[200px]">
        <CardHeader>
          <CardTitle>
            <span className="flex items-center cursor-default">
              <CircleUserRound size={35} className="pr-2" />
              Users
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div></div>
            <div>
              <p className="text-[75px] font-extrabold cursor-default">
              <NumberTicker className="text-cz-red" value={users.length} />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[250px] ml-[100px] mt-[200px]">
        <CardHeader>
          <CardTitle>
            <span className="flex items-center cursor-default">
              <Building2 size={35} className="pr-2" />
              Company
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div></div>
            <div>
              <p className="text-[75px] font-extrabold cursor-default">
                <NumberTicker className="text-cz-red" value={companys.length} />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
