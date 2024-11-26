"use client";

import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  FileDigit,
  History,
  Mail,
  MapPin,
  NotebookTabs,
  Phone,
  User,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { convertToIST, formatCurrency } from "@/utils/utility";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Page = () => {
  const companyList = useSelector((state) => state.company)?.companys;
  const { id } = useParams();

  function extractId(str) {
    return str.split("_")[0];
  }

  const companyData = companyList[extractId(id)];

  const handleImageError = () => {
    setImageSrc("/profile.jpg");
  };

  return (
    <div className="sm:pr-2 px-2 py-2">
      <Card className="border-t-4 border-green-400">
        <CardHeader>
          <CardTitle>{companyData?.companyName}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="sm:flex">
              <div className="sm:w-1/2">
                <div className="flex items-center">
                  <Image
                    src="/company.jpg"
                    // src={companyData?.logo}
                    onError={handleImageError}
                    width={100}
                    height={100}
                    alt="profile-image"
                    className=""
                  />
                  <div className="ml-5">
                    <p className="p-1 flex w-[220px] items-center overflow-y-scroll text-ellipsis whitespace-nowrap">
                      <Mail className="pr-2" size={34} />
                      {companyData?.email}
                    </p>
                    <p className="p-1 flex items-center">
                      <Phone className="pr-2 " size={34} />
                      {companyData?.mobileNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center">
                <span className="flex items-center">
                  <History size={30} className="text-gray-500" />
                  <span className="ml-2">
                    <p>
                      <b>Status</b>
                    </p>
                    {companyData?.isActive ? (
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
              <div className="w-1/2">
                <span className="">
                  <p className="flex items-center">
                    <CalendarDays className="pr-2 " size={34} />
                    <b>Created At:</b>
                  </p>
                  <p className="pt-2">{convertToIST(companyData?.createdAt)}</p>
                </span>
              </div>
              <div className="w-1/2">
                <span className="">
                  <p className="flex items-center">
                    <MapPin className="pr-2 " size={34} />
                    <b>Address:</b>
                  </p>
                  <p className="pt-2">{companyData?.address}</p>
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
              <div className="w-1/2">
                <span className="">
                  <p className="flex items-center">
                    <FileDigit className="pr-2 " size={34} />
                    <b>GST Number:</b>
                  </p>
                  <p className="pt-2">
                    {companyData?.gst_num ? companyData?.gst_num : "N/A"}
                  </p>
                </span>
              </div>
              <div className="w-1/2">
                <span className="">
                  <p className="flex items-center">
                    <NotebookTabs className="pr-2 " size={34} />
                    <b>Total Unpaid Booking:</b>
                  </p>
                  <p className="pt-2">
                    {companyData?.totalUnpaidBooking
                      ? companyData?.totalUnpaidBooking
                      : "N/A"}
                  </p>
                </span>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="w-1/2">
                <span className="">
                  <p className="flex items-center">
                    <Wallet className="pr-2 " size={34} />
                    <b>Credit Limit:</b>
                  </p>
                  <p className="pt-2">
                    {companyData?.availableCreditLimit
                      ? formatCurrency(companyData?.availableCreditLimit)
                      : "N/A"}
                  </p>
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {companyData?.name && (
        <Card className="border-t-4 border-green-400 mt-2">
          <CardContent>
            <div>
              <div className="flex mt-5">
                <div className="w-1/2">
                  <span className="">
                    <p className="flex items-center">
                      <User className="pr-2 " size={34} />
                      <b>User:</b>
                    </p>
                    {companyData?.name &&
                    companyData?.currency &&
                    companyData?.isActive ? (
                      <HoverCard>
                        <HoverCardTrigger>
                          <p className="pt-2 cursor-pointer underline underline-offset-4">
                            {companyData?.name}
                          </p>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-full">
                          <div className="flex">
                            <div>
                              <Image
                                width={70}
                                height={70}
                                src="/profile.jpg"
                                alt="profile"
                              />
                            </div>
                            <div>
                              <p>
                                <b>Name: </b>
                                {companyData?.name}
                              </p>
                              <p>
                                <b>currency: </b>
                                {companyData?.currency}
                              </p>
                              <p>
                                <b>Available Limit: </b>
                                {formatCurrency(
                                  Number(companyData?.availableLimit)
                                )}
                              </p>
                              <p>
                                <b>Status: </b>
                                {companyData?.isActive ? (
                                  <Badge className="bg-green-300 text-black font-normal opacity-80">
                                    Active
                                  </Badge>
                                ) : (
                                  <Badge className="bg-red-300 text-black font-normal opacity-80">
                                    Inactive
                                  </Badge>
                                )}
                              </p>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <p className="pt-2 cursor-pointer">{companyData?.name}</p>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Page;
