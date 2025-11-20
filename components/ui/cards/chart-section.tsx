import { DownloadIcon } from "lucide-react";
import { Card, CardContent } from "../card";
import { Button } from "../button";
import Image from "next/image";

const timeRanges = [
  { label: "12 Months", value: "12m", active: true },
  { label: "6 Months", value: "6m", active: false },
  { label: "30 Days", value: "30d", active: false },
  { label: "7 Days", value: "7d", active: false },
];

const months = [
  { label: "Feb", left: "left-px" },
  { label: "Mar", left: "left-[55px]" },
  { label: "Apr", left: "left-[109px]" },
  { label: "May", left: "left-[161px]" },
  { label: "Jun", left: "left-[217px]" },
  { label: "Jul", left: "left-[266px]" },
  { label: "Aug", left: "left-[314px]" },
  { label: "Sep", left: "left-[369px]" },
  { label: "Oct", left: "left-[424px]" },
  { label: "Nov", left: "left-[479px]" },
  { label: "Dec", left: "left-[534px]" },
  { label: "Jan", left: "left-[589px]" },
];

const gridLines = [
  { src: "/images/line-45.svg" },
  { src: "/images/line-44.svg" },
  { src: "/images/line-44.svg" },
  { src: "/images/line-44.svg" },
  { src: "/images/line-44.svg" },
];

export const ChartSection = () => {
  return (
    <Card className="w-full border-zinc-200 border-[0.71px] overflow-x-scroll hide-scrollbar">
      <CardContent className="p-0 relative h-[268px] font-sans">
        <div className="absolute top-4 left-5 w-[119px] font-bold text-zinc-900 text-[11.4px] leading-[17.0px] font-sans tracking-[0]">
          Total Cash Pickup
          <br />
          (Across Stores)
        </div>

        <div className="absolute top-[15px] left-[190px] flex gap-[7.4px]">
          {timeRanges.map((range, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-[24.48px] px-[11.36px] py-0 rounded-[3.55px] ${
                range.active ? "border-black border-[0.71px]" : "border-0"
              }`}
            >
              <span
                className={`font-bold text-[7.8px] leading-[12.8px] ${
                  range.active ? "text-zinc-900" : "text-zinc-500"
                }`}
              >
                {range.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="absolute top-[15px] left-[544px] w-[82px] h-6">
          <Button
            variant="outline"
            className="w-20 h-6 bg-white rounded-[3.55px] border-[0.71px] border-zinc-300 px-0 py-0"
          >
            <div className="flex items-center gap-1 px-[5px]">
              <DownloadIcon className="w-[13px] h-3" />
              <span className="font-bold text-zinc-900 text-[7.8px] leading-[12.8px]">
                Export Report
              </span>
            </div>
          </Button>
        </div>

        <div className="absolute top-[88px] left-5 w-[611px] h-[131px] flex flex-col gap-[31.6px]">
          {gridLines.map((line, index) => (
            <Image
              key={`line-${index}`}
              className="w-[611.32px] h-px"
              alt="Line"
              src={line.src}
              fill
            />
          ))}
        </div>

        <div className="absolute top-16 left-5 w-[635px] h-[187px]">
          <Image
            className="absolute top-0 left-0 w-[611px] h-[154px]"
            alt="Bg"
            src="/images/bg.png"
            fill
          />

          {months.map((month, index) => (
            <div
              key={`month-${index}`}
              className={`absolute top-[170px] ${month.left} font-medium text-zinc-600 text-[9.2px] text-center tracking-[0] leading-[14.9px] whitespace-nowrap`}
            >
              {month.label}
            </div>
          ))}
        </div>

        <Image
          className="absolute top-[159px] left-[244px] w-px h-[59px]"
          alt="Line"
          src="/images/line-46.svg"
          fill
        />

        <div className="absolute top-[150px] left-[238px] w-[11px] h-[11px] bg-black rounded-[5.51px] border-[1.42px] border-solid border-white" />

        <div className="absolute top-[92px] left-[204px] w-[82px] h-[51px]">
          <Image
            className="absolute top-0 left-[-26px] w-[131px] h-[109px]"
            alt="Union"
            src="/images/union.svg"
            fill
          />

          <div className="absolute top-[21px] left-[21px] w-[37px]  font-bold text-zinc-900 text-[9.2px] text-center tracking-[0] leading-[15.6px] whitespace-nowrap">
            ₦50BN
          </div>

          <div className="absolute top-[7px] left-[17px] w-11 text-zinc-500 text-[8.5px] leading-[14.2px] font-medium text-center tracking-[0]">
            May 2025
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
