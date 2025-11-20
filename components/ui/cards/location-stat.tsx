import React from "react";
import { Card } from "../card";
import { Row } from "@/components/resuables/layout-resuable";

const LocationStat = () => {
  const data = [
    {
      title: "TOTAL ACTIVE LCOATIONS",
      amount: "66",
    },
    {
      title: "TOTAL DEACTIVATED LOCATIONS",
      amount: "10",
    },
    {
      title: "LOCATIONS WITH CASH",
      amount: "10",
    },
    {
      title: "LOCATIONS WITHOUT CASH",
      amount: "10",
    },
  ];

  return (
    <section className="w-full">
      <Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <Card key={index} className="p-4">
            <h3 className="text-sm text-muted-foreground">{item.title}</h3>
            <p className="text-xl font-semibold text-primary leading-0 mb-2">
              {item.amount}
            </p>
          </Card>
        ))}
      </Row>
    </section>
  );
};

export default LocationStat;
