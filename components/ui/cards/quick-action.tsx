import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Column } from "@/components/resuables/layout-resuable";
import { Button } from "../button";
import { Loader } from "lucide-react";

const QuickAction = () => {
  return (
    <section className="w-full">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Column>
            <Button
              variant="outline"
              className="w-full flex gap-2 items-center justify-start border-primary"
              size="lg"
            >
              <Loader className="w-6 h-6" /> Create a New Location
            </Button>
            <Button
              variant="outline"
              className="w-full flex gap-2 items-center justify-start border-primary"
              size="lg"
            >
              <Loader className="w-6 h-6" /> Create a New Manager
            </Button>
            <Button
              variant="outline"
              className="w-full flex gap-2 items-center justify-start border-primary"
              size="lg"
            >
              <Loader className="w-6 h-6" /> Create a New Region
            </Button>
          </Column>
        </CardContent>
      </Card>
    </section>
  );
};

export default QuickAction;
