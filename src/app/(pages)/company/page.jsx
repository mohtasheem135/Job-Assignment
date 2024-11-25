"use client"
import { useSelector } from 'react-redux';


const Page = () => {

    const companyList = useSelector((state) => state.company)?.companys;
  console.log("XXXXXXXXXXX- COMPANYYYYYYYYYYYYYYYYY ", companyList)


  return (
    <div>
      This is Company Page - {companyList.length}
    </div>
  )
}

export default Page
