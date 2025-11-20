import { ChevronDownIcon } from "lucide-react";
import type { JSX } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../table";
import { Badge } from "../badge";
import { Checkbox } from "../checkbox";

export const tableData = [
  {
    id: 1,
    locationName: "Bokku - Lekki",
    region: "Bokku - Region 1",
    manager: "Cynthia Ofori",
    openingBalance: "₦8,570,000",
    remainingBalance: "₦570,000",
    amountMopped: "₦8,000,000",
    feeStatus: "Daily Fee",
    feeStatusColor: "bg-[#ebfdf2]",
  },
  {
    id: 2,
    locationName: "Bokku - Egbeda",
    region: "Bokku - Region 2",
    manager: "Adetola Makinde",
    openingBalance: "₦3,900,000",
    remainingBalance: "₦1,000,000",
    amountMopped: "₦2,900,000",
    feeStatus: "Weekend Fee",
    feeStatusColor: "bg-[#f7ecfc]",
  },
  {
    id: 3,
    locationName: "Bokku - Victoria Island",
    region: "Bokku - Region 3",
    manager: "Ahmed Hassan",
    openingBalance: "₦5,200,000",
    remainingBalance: "₦800,000",
    amountMopped: "₦4,400,000",
    feeStatus: "Daily Fee",
    feeStatusColor: "bg-[#ebfdf2]",
  },
  {
    id: 4,
    locationName: "Bokku - Victoria Island",
    region: "Bokku - Region 3",
    manager: "Ahmed Hassan",
    openingBalance: "₦5,200,000",
    remainingBalance: "₦800,000",
    amountMopped: "₦4,400,000",
    feeStatus: "Daily Fee",
    feeStatusColor: "bg-[#ebfdf2]",
  },
  {
    id: 5,
    locationName: "Bokku - Victoria Island",
    region: "Bokku - Region 3",
    manager: "Ahmed Hassan",
    openingBalance: "₦5,200,000",
    remainingBalance: "₦800,000",
    amountMopped: "₦4,400,000",
    feeStatus: "Daily Fee",
    feeStatusColor: "bg-[#ebfdf2]",
  },
  {
    id: 6,
    locationName: "Bokku - Victoria Island",
    region: "Bokku - Region 3",
    manager: "Ahmed Hassan",
    openingBalance: "₦5,200,000",
    remainingBalance: "₦800,000",
    amountMopped: "₦4,400,000",
    feeStatus: "Daily Fee",
    feeStatusColor: "bg-[#ebfdf2]",
  },
];

export const LocationTable = (): JSX.Element => {
  return (
    <div className="w-full mx-auto bg-white border max-w-lg lg:max-w-2xl scrollbar-hide xl:max-w-full overflow-x-auto">
      <Table>
        <TableHeader className="rounded-t-2xl">
          <TableRow className="bg-[#242440] border-b hover:bg-[#242440] scrollbar-hide">
            <TableHead className="h-11 px-6 py-3">
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5 bg-[#f2f9f4] rounded-md border-[#222822] data-[state=checked]:bg-[#f2f9f4] data-[state=checked]:text-[#222822]" />
                <div className="flex items-center gap-1">
                  <span className="text-white text-xs font-medium">
                    Location Name
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">Region</span>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">Manager</span>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">
                Opening Balance
              </span>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">
                Remaining Balance
              </span>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">
                Amount Mopped
              </span>
            </TableHead>
            <TableHead className="h-11 px-6 py-3">
              <span className="text-white text-xs font-medium">Fee Status</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              className="h-[72px] border-b border-[#eaecf0]"
            >
              <TableCell className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    defaultChecked
                    className="w-5 h-5 bg-[#f2f9f4] rounded-md border-[#222822] data-[state=checked]:bg-[#f2f9f4] data-[state=checked]:text-[#222822]"
                  />
                  <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                    {row.locationName}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-6 py-4">
                <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                  {row.region}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4">
                <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                  {row.manager}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4">
                <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                  {row.openingBalance}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4">
                <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                  {row.remainingBalance}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4">
                <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                  {row.amountMopped}
                </span>
              </TableCell>
              <TableCell className="px-6 py-4">
                <Badge
                  className={`${row.feeStatusColor} text-[#222822] font-medium text-xs leading-[18px] tracking-[0] hover:${row.feeStatusColor}`}
                >
                  {row.feeStatus}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
