import { tableData } from "./location-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../table";
import { Badge } from "../badge";
import { ChevronDownIcon } from "lucide-react";
import { Checkbox } from "../checkbox";

export const TrendingLocations = () => {
  const topLocations = tableData.slice(0, 2);

  return (
    <div className="w-full mx-auto bg-white rounded-lg border max-w-lg sm:max-w-full md:max-w-lg lg:max-w-2xl scrollbar-hide xl:max-w-full overflow-x-auto">
      <Table>
        <TableHeader className="rounded-t-2xl">
          <TableRow className="bg-[#242440] border-b border-[#eaecf0] hover:bg-[#242440]">
            <TableHead className="h-10 px-4 py-2">
              <div className="flex items-center gap-3">
                <Checkbox className="w-5 h-5 bg-[#f2f9f4] rounded-sm border-[#222822] data-[state=checked]:bg-[#f2f9f4] data-[state=checked]:text-[#222822]" />
                <div className="flex items-center gap-1">
                  <span className="text-white text-xs font-medium">
                    Location Name
                  </span>
                  <ChevronDownIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">Region</span>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">Manager</span>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">
                Opening Balance
              </span>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">
                Remaining Balance
              </span>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">
                Amount Mopped
              </span>
            </TableHead>
            <TableHead className="h-10 px-4 py-2">
              <span className="text-white text-xs font-medium">Fee Status</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topLocations.map((row) => (
            <TableRow
              key={row.id}
              className="h-12 border-b border-[#eaecf0] hover:bg-gray-50"
            >
              <TableCell className="px-4 py-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    defaultChecked
                    className="w-5 h-5 bg-[#f2f9f4] rounded-sm border-[#222822] data-[state=checked]:bg-[#f2f9f4] data-[state=checked]:text-[#222822] border-2"
                  />
                  <span className="font-medium text-[#333333] text-xs leading-5 tracking-[0]">
                    {row.locationName}
                  </span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span className="font-medium text-[#333333] text-xs leading-5">
                  {row.region}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span className="font-medium text-[#333333] text-xs leading-5">
                  {row.manager}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span className="font-medium text-[#333333] text-xs leading-5">
                  {row.openingBalance}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span className="font-medium text-[#333333] text-xs leading-5">
                  {row.remainingBalance}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <span className="font-medium text-[#333333] text-xs leading-5">
                  {row.amountMopped}
                </span>
              </TableCell>
              <TableCell className="px-4 py-2">
                <Badge
                  className={`${row.feeStatusColor} text-[#222822] font-medium text-xs hover:${row.feeStatusColor}`}
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
