import React from "react";
import { Card } from "../card";
import { Row } from "@/components/resuables/layout-resuable";

const HeroCards = () => {
  const data = [
    {
      title: "BALANCE ACROSS STORES",
      amount: "N50,000,000",
    },
    {
      title: "TODAY'S TRANSACTIONS",
      amount: "200",
    },
    {
      title: "TOTAL LOCATIONS",
      amount: "78",
    },
    {
      title: "TOTAL MANAGERS",
      amount: "78",
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

export default HeroCards;
