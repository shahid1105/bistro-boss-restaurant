import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/UseMenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories = ["salads", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <div>
        <Cover img={orderCover} title={"Our Shop"}></Cover>

        <div className="my-16">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}>
            <TabList>
              <Tab>Salads</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <div className="mt-12">
              <TabPanel>
                <OrderTab items={salad}></OrderTab>
              </TabPanel>

              <TabPanel>
                <OrderTab items={pizza}></OrderTab>
              </TabPanel>

              <TabPanel>
                <OrderTab items={soup}></OrderTab>
              </TabPanel>

              <TabPanel>
                <OrderTab items={desserts}></OrderTab>
              </TabPanel>

              <TabPanel>
                <OrderTab items={drinks}></OrderTab>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
