import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  alchInventors,
  cmpdInventors,
  cookInventors,
  crftInventors,
  engInventors,
  smthInventors,
  writInventors,
} from "./components/Inventors";
import Table from "./components/Table";
import Extras from "./components/Extras";

function App() {
  return (
    <div className="App">
      <h1>Star Ocean 3 - Item Creation Calculator</h1>
      <Tabs>
        <TabList>
          <Tab>ALCH</Tab>
          <Tab>CMPD</Tab>
          <Tab>COOK</Tab>
          <Tab>CRFT</Tab>
          <Tab>ENG</Tab>
          <Tab>SMTH</Tab>
          <Tab>WRIT</Tab>
          <Tab style={{ color: "#3e98c7", fontStyle: "italic" }}>Extras</Tab>
        </TabList>

        <TabPanel>
          <Table
            ic="ALCH"
            inventors={alchInventors}
            boost="Alchemist's Stone"
          />
        </TabPanel>
        <TabPanel>
          <Table ic="CMPD" inventors={cmpdInventors} boost="Multi-Flask" />
        </TabPanel>
        <TabPanel>
          <Table
            ic="COOK"
            inventors={cookInventors}
            boost="Keen Kitchen Knife"
          />
        </TabPanel>
        <TabPanel>
          <Table ic="CRFT" inventors={crftInventors} boost="Cherubic Bust" />
        </TabPanel>
        <TabPanel>
          <Table ic="ENG" inventors={engInventors} boost="NC Program Disk" />
        </TabPanel>
        <TabPanel>
          <Table ic="SMTH" inventors={smthInventors} boost="Smithy Hammer" />
        </TabPanel>
        <TabPanel>
          <Table ic="WRIT" inventors={writInventors} boost="Enchanted Pen" />
        </TabPanel>
        <TabPanel>
          <Extras />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
