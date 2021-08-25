import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { col, Inventor } from "./Inventors";
import ReactTooltip from "react-tooltip";
import Select from "react-select";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface P {
  readonly ic: "ALCH" | "CMPD" | "COOK" | "CRFT" | "ENG" | "SMTH" | "WRIT";
  readonly inventors: Inventor[];
  readonly boost:
    | "Alchemist's Stone"
    | "Multi-Flask"
    | "Keen Kitchen Knife"
    | "Cherubic Bust"
    | "NC Program Disk"
    | "Smithy Hammer"
    | "Enchanted Pen";
}

interface S {
  selectedInventors: Inventor[];
  selectedCount: number;
  selectedItem: Item | null;
  totalSkill: number;
  timeMod: number;
  costMod: number;
  hasBoost: boolean;
  allItems: Item[];
  targetPrices: Map<number, string[]>;
}

interface Item {
  name: string;
  cost: number;
  rating: number;
  inventors: string[];
  value: string;
  label: string;
}

interface DbItem {
  item: string;
  cost: number;
  rating: number;
  inventors: string[];
}

export default class Table extends Component<P, S> {
  constructor(props: P) {
    super(props);

    const prvSelectedInventors = JSON.parse(
      sessionStorage.getItem(props.ic) || "[]"
    );

    const prvSelectedItem = JSON.parse(
      sessionStorage.getItem(props.ic + "item") || "[]"
    );

    const prvBoostSelected = JSON.parse(
      sessionStorage.getItem(props.ic + "boost") || "true"
    );

    this.state = {
      selectedInventors: prvSelectedInventors,
      selectedCount: prvSelectedInventors.length,
      selectedItem: prvSelectedItem.length === 0 ? null : prvSelectedItem,
      totalSkill: 20,
      timeMod: 0,
      costMod: 0,
      hasBoost: prvBoostSelected,
      allItems: [],
      targetPrices: new Map<number, string[]>(),
    };
  }

  async componentDidMount() {
    if (localStorage.getItem(this.props.ic) === null) {
      await this.loadDB();
    }
    this.setState({ allItems: this.getAllItems() });
  }

  StatsComponent = () => {
    if (
      this.state.selectedItem !== null &&
      this.canMakeItem(this.state.selectedItem)
    ) {
      const probSuccess =
        this.state.totalSkill - this.state.selectedItem.rating;
      const color = () => {
        if (probSuccess > 66) return "green";
        else if (probSuccess < 33) return "red";
        else return "yellow";
      };
      return (
        <div>
          <p>
            <span
              data-tip={"Probability decreases per iteration"}
              data-delay-show={250}
              className="dotted-underline"
            >
              Initial probability
            </span>{" "}
            of success:
          </p>
          <ReactTooltip />
          <CircularProgressbar
            value={probSuccess}
            text={`${probSuccess}%`}
            styles={{ path: { stroke: color() } }}
          />
        </div>
      );
    } else {
      return <></>;
    }
  };

  PricesComponent = (props: { map: Map<number, string[]> }) => {
    let out: JSX.Element[] = [];
    if (
      this.state.selectedItem !== null &&
      this.canMakeItem(this.state.selectedItem)
    ) {
      out.push(
        <p className="left-align" key={-1}>
          <span className="bold">Exact price(s) to create this item</span>
          {": "}
          <span className="italics">Other items that can also be made</span>
        </p>
      );
      props.map.forEach((v, k) => {
        out.push(
          <div className="left-align" key={k}>
            <span className="bold">{k}</span>
            {": "}
            <span className="italics">{v.join(", ")}</span>
          </div>
        );
      });
    } else {
      if (this.state.selectedItem !== null)
        out.push(
          <div key={-1}>
            <div>Selected inventors cannot make this item!</div>
            <div>Please include at lest one of the following inventors:</div>
            <div className="bold">{this.state.selectedItem.inventors}</div>
          </div>
        );
    }
    return <React.Fragment>{out}</React.Fragment>;
  };

  loadDB = async () => {
    try {
      var tableId = -1;
      switch (this.props.ic) {
        case "ALCH":
          tableId = 0;
          break;
        case "CMPD":
          tableId = 1;
          break;
        case "COOK":
          tableId = 2;
          break;
        case "CRFT":
          tableId = 3;
          break;
        case "ENG":
          tableId = 4;
          break;
        case "SMTH":
          tableId = 5;
          break;
        case "WRIT":
          tableId = 6;
          break;
        default:
          break;
      }
      const res = await fetch(`/get_ic_items/${tableId}`);
      const json = await res.json();
      localStorage.setItem(this.props.ic, JSON.stringify(json));
    } catch (error) {
      console.error(error.message);
    }
  };

  getAllItems = () => {
    let allItems: Item[] = [];
    JSON.parse(localStorage.getItem(this.props.ic) || "[]").forEach(
      (item: DbItem) => {
        allItems.push({
          name: item.item,
          cost: item.cost,
          rating: item.rating,
          inventors: item.inventors,
          value: item.item,
          label: item.item,
        });
      }
    );
    return allItems;
  };

  toggleBoost = () => {
    this.setState(
      {
        hasBoost: !this.state.hasBoost,
        totalSkill: this.state.hasBoost
          ? this.state.totalSkill - 20
          : this.state.totalSkill + 20,
      },
      () => {
        sessionStorage.setItem(
          this.props.ic + "boost",
          JSON.stringify(this.state.hasBoost)
        );
      }
    );
  };

  // check if current team can make a given item
  canMakeItem = (item: Item) => {
    let canMake = false;
    this.state.selectedInventors.forEach((i: Inventor) => {
      if (item.inventors[0].indexOf(i.inventor) > -1) {
        canMake = canMake || true;
      }
    });
    return canMake;
  };

  calcCosts = () => {
    const possibleCosts = (baseCost: number) => {
      // costs = (1 + costMod% + random) x baseCost
      const allCostMods = [
        100 + this.state.costMod - 5,
        100 + this.state.costMod - 4,
        100 + this.state.costMod - 3,
        100 + this.state.costMod - 2,
        100 + this.state.costMod - 1,
        100 + this.state.costMod,
        100 + this.state.costMod + 1,
        100 + this.state.costMod + 2,
        100 + this.state.costMod + 3,
        100 + this.state.costMod + 4,
        100 + this.state.costMod + 5,
      ];

      const allPossibleCosts = allCostMods.map((mod) =>
        Math.round((mod * baseCost) / 100)
      );

      return allPossibleCosts.filter((v, i, a) => a.indexOf(v) === i);
    };

    const maxCost = (baseCost: number) => {
      return Math.round(((100 + this.state.costMod + 5) * baseCost) / 100);
    };

    const minCost = (baseCost: number) => {
      return Math.round(((100 + this.state.costMod - 5) * baseCost) / 100);
    };

    const getConflictingItems = (baseCost: number) => {
      const possibleConflictingItems: Item[] = [];
      this.state.allItems.forEach((i: Item) => {
        const itemCost = i.cost;
        if (itemCost < baseCost && maxCost(itemCost) >= minCost(baseCost)) {
          possibleConflictingItems.push(i);
        } else if (
          itemCost === baseCost &&
          this.state.selectedItem !== null &&
          i.name !== this.state.selectedItem.name
        ) {
          possibleConflictingItems.push(i);
        } else if (
          itemCost > baseCost &&
          minCost(itemCost) <= maxCost(baseCost)
        ) {
          possibleConflictingItems.push(i);
        }
      });

      const ConflictingItems = possibleConflictingItems.filter((i: Item) =>
        this.canMakeItem(i)
      );
      return ConflictingItems;
    };

    const getConflictingCosts = (baseCost: number) => {
      const conflictingCosts = [];

      if (this.state.selectedItem !== null) {
        const selectedCosts = possibleCosts(this.state.selectedItem.cost);
        const possibleConflictingCost = possibleCosts(baseCost);
        let i = 0;
        let j = 0;

        while (i < selectedCosts.length) {
          if (j >= possibleConflictingCost.length) {
            break;
          } else if (selectedCosts[i] < possibleConflictingCost[j]) {
            i++;
          } else if (selectedCosts[i] === possibleConflictingCost[j]) {
            conflictingCosts.push(selectedCosts[i]);
            i++;
            j++;
          } else if (selectedCosts[i] > possibleConflictingCost[j]) {
            j++;
          }
        }
      }
      return conflictingCosts;
    };

    const updateTargetPrices = () => {
      if (this.state.selectedItem !== null) {
        // a map of costs => duplicate items
        const costMap = new Map<number, string[]>();
        const selectedItemCosts = possibleCosts(this.state.selectedItem.cost);
        selectedItemCosts.forEach((cost) => {
          costMap.set(cost, []);
        });

        const conflictingItems = getConflictingItems(
          this.state.selectedItem.cost
        );

        // update map if cost matches
        conflictingItems.forEach((conflictingItem) => {
          const conflictingCosts = getConflictingCosts(conflictingItem.cost);
          conflictingCosts.forEach((conflictingCost) => {
            costMap.forEach((value, key) => {
              if (key === conflictingCost) value.push(conflictingItem.name);
            });
          });
        });

        // none when no duplicates exist
        costMap.forEach((value, key) => {
          if (value.length === 0) value.push("None");
        });
        this.setState({ targetPrices: costMap });
      }
    };
    sessionStorage.setItem(
      this.props.ic + "item",
      JSON.stringify(this.state.selectedItem)
    );
    updateTargetPrices();
  };

  render() {
    return (
      <div>
        <DataTable
          columns={col}
          data={this.props.inventors}
          keyField="inventor"
          noHeader
          dense
          selectableRows
          selectableRowsNoSelectAll
          selectableRowsHighlight
          style={{
            paddingBottom: "1rem",
          }}
          onSelectedRowsChange={this.selectedInventorsChange}
          selectableRowSelected={this.loadPrvSelectedInventors}
          selectableRowDisabled={this.disableInventors}
        />
        <Select
          options={this.state.allItems}
          onChange={(item: Item | null) => {
            this.setState({ selectedItem: item }, () => {
              if (
                this.state.selectedItem !== null &&
                this.canMakeItem(this.state.selectedItem)
              )
                this.calcCosts();
            });
          }}
          defaultValue={this.state.selectedItem}
        />
        <this.PricesComponent map={this.state.targetPrices} />
        <div>
          <div className="team-stats">
            <div className="team-mods">
              <p>
                Item Rating:{" "}
                <span className="bold">{this.state.selectedItem?.rating}</span>
              </p>
              <p>
                Team Skill:{" "}
                <span className="bold">{this.state.totalSkill}</span>
              </p>
              <p>
                Time Modifier:{" "}
                <span
                  className={
                    this.state.timeMod > 0 ? "red-text bold" : "green-text bold"
                  }
                >
                  {this.state.timeMod}%
                </span>
              </p>
              <p>
                Cost Modifier:{" "}
                <span
                  className={
                    this.state.costMod > 0 ? "red-text bold" : "green-text bold"
                  }
                >
                  {this.state.costMod}%
                </span>
              </p>
              <>
                <p>
                  <span
                    data-tip={"+20% to " + this.props.ic + " skill"}
                    data-delay-show={250}
                    className="dotted-underline"
                  >
                    {this.props.boost}
                  </span>{" "}
                  in bag?
                  <input
                    type="checkbox"
                    defaultChecked={this.state.hasBoost}
                    onChange={this.toggleBoost}
                  />
                </p>
                <ReactTooltip />
              </>
            </div>
            <div className="chance">
              <this.StatsComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }

  selectedInventorsChange = (selectedRowState: {
    allSelected: boolean;
    selectedCount: number;
    selectedRows: Inventor[];
  }) => {
    sessionStorage.setItem(
      this.props.ic,
      JSON.stringify(selectedRowState.selectedRows)
    );

    let skillSum = this.state.hasBoost ? 20 : 0;
    let timeSum = 0;
    let costSum = 0;

    selectedRowState.selectedRows.forEach((i: Inventor) => {
      skillSum += i.skill;
      timeSum += i.time;
      costSum += i.cost;
    });

    this.setState(
      {
        selectedInventors: selectedRowState.selectedRows,
        selectedCount: selectedRowState.selectedCount,
        totalSkill: skillSum,
        timeMod: timeSum,
        costMod: costSum,
      },
      () => {
        if (
          this.state.selectedItem !== null &&
          this.canMakeItem(this.state.selectedItem)
        )
          this.calcCosts();
      }
    );
  };

  loadPrvSelectedInventors = (row: Inventor) => {
    let res = false;
    this.state.selectedInventors.forEach((i: Inventor) => {
      if (i.inventor === row.inventor) {
        res = res || true;
      }
    });
    return res;
  };

  disableInventors = (row: Inventor) => {
    let res = false;
    this.state.selectedInventors.forEach((i: Inventor) => {
      if (i.inventor === row.inventor) {
        res = res || true;
      }
    });
    return !res && this.state.selectedCount > 2;
  };
}
