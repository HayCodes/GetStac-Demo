import React from "react";
import { Column, Row } from "../resuables/layout-resuable";
import HeroCards from "../ui/cards/hero-cards";
import { ChartSection } from "../ui/cards/chart-section";
import QuickAction from "../ui/cards/quick-action";
import Link from "next/link";
import { Routes } from "@/core/routing";
import { TrendingLocations } from "../ui/table/trending-location";

const DashboardContent = () => {
  return (
    <section className="w-full bg-[#f2f2f2] min-h-screen mt-15 overflow-hidden">
      <Column className="mx-auto p-4 sm:p-5 xl:p-10 gap-6 w-full">
        <Column className="gap-2">
          <h2 className="text-xl text-primary font-semibold">
            How&apos;s your Afternoon going, Adebowale?
          </h2>
          <p className="text-sm text-muted-foreground">
            How are you feeling this fine afternoon?
          </p>
        </Column>
        <HeroCards />
        <Column className="grid grid-cols-1 lg:grid-cols-2">
          <ChartSection />
          <QuickAction />
        </Column>
        <Column className="mt-5">
          <Row className="justify-between items-center">
            <div className="justify-start">
              <h3 className="text-md lg:text-lg text-primary font-semibold">
                Today&apos;s Trending Locations
              </h3>
            </div>
            <Link
              className="justify-end text-sm underline text-primary"
              href={Routes.location}
            >
              Monitor Location Activites
            </Link>
          </Row>
          <TrendingLocations />
        </Column>
      </Column>
    </section>
  );
};

export default DashboardContent;
