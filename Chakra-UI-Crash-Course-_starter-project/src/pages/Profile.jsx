import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  return (
    <Tabs mt={"40px"} p={"20px"} colorScheme="purple" variant={"enclosed"}>
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"}/>
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon}  color={"green.400"}/>
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
