"use client"
import { useSelector } from 'react-redux';

const Page = () => {
  const usersList = useSelector((state) => state.user)?.users;
  console.log("XXXXXXXXXXXUUUUUUUUUUUUSSSSSSSSSS ", usersList)

  return (
    <div>
      This is USER page - {usersList.length}
    </div>
  )
}

export default Page
