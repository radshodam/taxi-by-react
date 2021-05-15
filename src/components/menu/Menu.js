import React, { useState, useContext } from "react";
import styles from "./menu.module.css";
import ListTop from "./ListTop";
import Modal from "../modal/Modal";
import { ThemeContext } from "../context/ThemeContext";
import sun from '../images/sun.png';
import moon from "../images/moon.png"
const lists = [
  { name: "تاکسی در یک نگاه", href: "#home" },
  { name: "دانلود اپلیکیشن", href: "#app" },
  { name: "حامیان ما", href: "#advorcate" },
  { name: "تماس با ما", href: "#contact" },
  { name: "درباره ی ما", href: "#about" },
];
const Menu = () => {
  //  const [lists, setLists] = useState(lists)
  const [modal, setModal] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className={styles.header_menu}>
      <div className={styles.title_log}>
        ۰۵۲۴-۱۱۲
        <button onClick={handleTheme} className={theme?styles.btnLightNight:styles.btnLightlight}>{theme ?<img src={sun} alt="khorshid"/>:<img src={moon} alt="khorshid"/>}</button>
      </div>
      <ul className={styles.menu}>
        {lists.map((n, index) => {
          return (
            <>
              <ListTop key={index} {...n} />
            </>
          );
        })}
      </ul>
      <div className={styles.search}></div>
      <button
        type="button"
        className={styles.threeline}
        onClick={handleModal}
      ></button>
      <Modal modal={modal} menu={lists} />
    </div>
  );
};

export default Menu;
