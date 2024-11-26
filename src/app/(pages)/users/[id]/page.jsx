"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  CalendarDays,
  History,
  Mail,
  MapPin,
  Phone,
  ReceiptIndianRupee,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { convertToIST } from "@/utils/utility";

const Page = () => {
  const usersList = useSelector((state) => state.user)?.users;
  const { id } = useParams();

  function extractId(str) {
    return str.split("_")[0];
  }

  const userData = usersList[extractId(id)];

  const handleImageError = () => {
    setImageSrc("/profile.jpg");
  };

  return (
    <div className="sm:pr-2 px-2 py-2">
      <Card className="border-t-4 border-green-400">
        <CardHeader>
          <CardTitle className="mt-[10px]">{userData?.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="sm:flex">
              <div className="sm:w-1/2">
                <div className="flex items-center">
                  <Image
                    src="/profile.jpg"
                    // src={userData?.avatar}
                    onError={handleImageError}
                    width={100}
                    height={100}
                    alt="profile-image"
                    className="border-2 border-gray-400 rounded-full shadow-md"
                  />
                  <div className="ml-5">
                    <p className="p-1 flex items-center">
                      <Mail className="pr-2 " size={34} /> {userData?.email}
                    </p>
                    <p className="p-1 flex items-center">
                      <Phone className="pr-2 " size={34} />
                      {userData?.mobileNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] sm:mt-0 sm:w-1/2 flex items-center">
                <span className="flex items-center">
                  <History size={30} className="text-gray-500" />
                  <span className="ml-2">
                    <p>
                      <b>Status</b>
                    </p>
                    {userData?.isActive ? (
                      <Badge className="bg-green-300 text-black font-normal opacity-80 w-[80px] flex justify-center">
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-red-300 text-black font-normal">
                        Inactive
                      </Badge>
                    )}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-10 flex">
              <div className="w-1/2 border-r-2">
                <span className="">
                  <p className="flex items-center">
                    <CalendarDays className="pr-2 " size={34} />
                    <b>Created At:</b>
                  </p>
                  <p className="pt-2">{convertToIST(userData?.createdAt)}</p>
                </span>
              </div>
              <div className="w-1/2 pl-[20px]">
                <span className="">
                  <p className="flex items-center">
                    <ReceiptIndianRupee className="pr-2 " size={34} />
                    <b>Currency:</b>
                  </p>
                  <p className="pt-2">{userData?.currency}</p>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-t-4 border-green-400 mt-2">
        <CardContent>
          <div>
            <div className="flex mt-5">
              <div className="w-1/2 border-r-2">
                <span className="">
                  <p className="flex items-center">
                    <Building2 className="pr-2 " size={34} />
                    <b>Company:</b>
                  </p>
                  <p className="pt-2">
                    {userData?.companyName ? userData?.companyName : "N/A"}
                  </p>
                </span>
              </div>
              <div className="w-1/2 pl-[20px]">
                <span className="">
                  <p className="flex items-center">
                    <MapPin className="pr-2 " size={34} />
                    <b>Address:</b>
                  </p>
                  <p className="pt-2">
                    {userData?.address ? userData?.address : "N/A"}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
