import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


    function Home({ snacks, drinks }) {
      return (
        <div>
          <h2>Current Snacks Count: {snacks.length}</h2>
          <h2>Current Drinks Count: {drinks.length}</h2>
          <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
        </div>
      );
    }
export default Home;
