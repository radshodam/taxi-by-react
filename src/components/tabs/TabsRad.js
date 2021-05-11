import React from "react";
import styles from "./tabsrad.module.css";
import Managers from "./main/managers/main";
import Support from "./main/support/Support24";
import WhyTaxi from "./main/why/WhyTaxi";
import Office from "./main/offices/Offices";

class tab extends React.Component {
  render() {
    return (
      <div className={styles.tabs}>
        <Tabs>
          <Tab label="امکانات تاکسی">
            <div>
              <WhyTaxi />
            </div>
          </Tab>
          <Tab label="پشتیبانی ۲۴ ساعته">
            <div>
              <Support />
            </div>
          </Tab>
          <Tab label="دفاتر آژانس ما">
            <div>
              <Office />
            </div>
          </Tab>

          <Tab label="مسولین و مدیران">
            <div>
              {/* <img src="https://iconcept.com.my/wp-content/uploads/2018/10/iStock-956508212-600x600.jpg"/> */}
              <Managers />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className={styles.tabbuttons}>
      {buttons.map((button) => {
        return (
          <button className={styles.button} onClick={() => changeTab(button)}>
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default tab;
