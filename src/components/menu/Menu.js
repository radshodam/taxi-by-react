import React from "react";
import styles from "./menu.module.css";
import ListTop from "./ListTop";
import Modal from "../modal/Modal";
class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [
        { name: "تاکسی در یک نگاه", href: "/home" },
        { name: "دانلود اپلیکیشن", href: "#app" },
        { name: "حامیان ما", href: "#advorcate" },
        { name: "تماس با ما", href: "#contact" },
        { name: "درباره ی ما", href: "#about" },
      ],
      modal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = () => {
    this.setState((state) => ({
      modal: !state.modal,
    }));
  };

  render() {
    return (
      <div className={styles.header_menu}>
        <h3 className={styles.title_log}>۰۵۲۴-۱۱۲</h3>
        <ul className={styles.menu}>
          {this.state.lists.map((n, index) => {
            return (
              <>
                <ListTop key={index} {...n} />
              </>
            );
          })}
        </ul>
        <h3 className={styles.search}>لوگوی شرکت</h3>
        <button
          type="button"
          className={styles.threeline}
          onClick={this.handleModal}
        ></button>
        <Modal modal={this.state.modal} menu={this.state.lists} />
      </div>
    );
  }
}

export default Menu;
