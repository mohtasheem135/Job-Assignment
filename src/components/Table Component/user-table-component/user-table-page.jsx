import { DataTable } from "./components/data-table";
import { userColumns } from "./components/userColumns";
import { companyColumns } from "./components/companyColumns";

const UserTableComponent = ({ data, name }) => {
  return (
    <div>
      {name === "company" ? (
        <DataTable data={data} columns={companyColumns} name="company" />
      ) : (
        <DataTable data={data} columns={userColumns} name="users" />
      )}
    </div>
  );
};

export default UserTableComponent;
