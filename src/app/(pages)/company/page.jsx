"use client"
// import CompanyTableComponent from '@/components/Table Component/company-table-component/company-table-page';
import UserTableComponent from '@/components/Table Component/user-table-component/user-table-page';
import { useSelector } from 'react-redux';


const Page = () => {

    const companyList = useSelector((state) => state.company)?.companys;


  return (
    <div className="overflow-hidden ">
      <UserTableComponent name="company" data={companyList} />
    </div>
  )
}

export default Page
