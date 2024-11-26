import { DataTable } from "./components/data-table";
import { userColumns } from "./components/userColumns";
import { companyColumns } from "./components/companyColumns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserTableComponent = ({ data, name }) => {
  return (
    <div className="pr-2">
      <Card className="border-t-4 border-green-400">
        <CardHeader>
          <CardTitle className="ml-[20px]">{name === "company" ? "Company List" : "User List"}</CardTitle>
        </CardHeader>
        <CardContent>
          {name === "company" ? (
            <DataTable data={data} columns={companyColumns} name="company" />
          ) : (
            <DataTable data={data} columns={userColumns} name="users" />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserTableComponent;
