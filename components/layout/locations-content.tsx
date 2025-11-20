"use client";
import { useState } from "react";
import { Column, Row } from "../resuables/layout-resuable";
import LocationStat from "../ui/cards/location-stat";
import { LocationTable } from "../ui/table/location-table";
import { X, Search, Filter } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LocationsContent = () => {
  const [filters, setFilters] = useState<string[]>([
    "All stores",
    "Surulere, Ojodu",
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const removeFilter = (index: number) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  return (
    <section className="w-full bg-[#f2f2f2] min-h-screen mt-15">
      <Column className="mx-auto p-4 md:p-5 gap-6 w-full">
        <Column className="gap-2">
          <h2 className="text-xl text-primary font-semibold">
            Today&apos;s Trending Locations
          </h2>
          <p className="text-sm text-muted-foreground">
            Overview of all the cash activities at your store.
          </p>
        </Column>
        <LocationStat />

        <div className="space-y-4">
          <Row className="flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <Row className="flex items-center gap-2 flex-wrap w-full">
              {filters.map((filter, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-primary-foreground rounded-md px-3 py-1 border text-primary cursor-pointer border-primary-foreground font-semibold"
                >
                  <span className="text-sm text-gray-700">{filter}</span>
                  <Button
                    onClick={() => removeFilter(index)}
                    className="hover:bg-gray-100 p-0.5 rounded font-semibold"
                    variant="ghost"
                    size="icon-sm"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </Button>
                </div>
              ))}

              <Button
                variant="outline"
                className="gap-2 p-0.5 rounded-md bg-white"
                size="lg"
              >
                <Filter className="w-4 h-4" />
                More filters
              </Button>
            </Row>

            <div className="w-full">
              <Input
                placeholder="Search"
                className="rounded-lg bg-inherit"
                container={{ className: "bg-white" }}
                leftElement={
                  <Search className="w-4 h-4 text-muted-foreground" />
                }
              />
            </div>
          </Row>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <LocationTable />
            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of 10
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </Column>
    </section>
  );
};

export default LocationsContent;
