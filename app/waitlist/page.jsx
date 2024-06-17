import {  columns } from "./columns";
import DataTable from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      status: "Lead",
      email: "theodore@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "Theodore T.C. Calvin", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Private Language Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "April Curtis", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Fitness Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "Mike Torello", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Appointment Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "April Curtis", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Fitness Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "Mike Torello", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Appointment Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "828ed52f",
      status: "Inactive",
      email: "aprilcurtis@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "April Curtis", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Fitness Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
    {
      id: "528ed52f",
      status: "Active",
      email: "hannibalsmith@example.com",
      createdOn: "2024-01-07 14:42", // Add the createdOn property
      payer: "Mike Torello", // Add the payer property
      payerphone: "123-456-7890", // Add the payerphone property
      services: "Appointment Session", // Add the services property
      scheduled: "2024-01-10", // Add the scheduled property
    },
  ];
  
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
