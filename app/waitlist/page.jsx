import {  columns } from "./columns";
import DataTable from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      status: "Lead",
      email: "theodore@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "Theodore T.C. Calvin", 
      payerphone: "123-456-7890", 
      services: "Private Language Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "April Curtis", 
      payerphone: "123-456-7890", 
      services: "Fitness Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "Mike Torello", 
      payerphone: "123-456-7890", 
      services: "Appointment Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "April Curtis", 
      payerphone: "123-456-7890", 
      services: "Fitness Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "Mike Torello", 
      payerphone: "123-456-7890", 
      services: "Appointment Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "April Curtis", 
      payerphone: "123-456-7890", 
      services: "Fitness Session", 
      scheduled: "2024-01-10", 
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", 
      payer: "Mike Torello", 
      payerphone: "123-456-7890", 
      services: "Appointment Session", 
      scheduled: "2024-01-10", 
    },
  ];
  
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div>
      
      <DataTable columns={columns} data={data} />
    </div>
  );
}
