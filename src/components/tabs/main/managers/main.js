import bilgates from "../../../images/bilgates.jpg";
import React, { useState } from "react";
import styles from "./list.module.css";
import Modal from "../modal/Modal";

const names = [
  {
    name: "محمد",
    lastName: "زارعی",
    desceiption:
      "هرگونه مشکل در هنگام مسولیت داخلی بود با این شماره تماس بگیرید",
    title: "مدیر خصوصی",
    src: bilgates,
  },
  {
    name: "خشایار",
    lastName: "خلیلی",
    desceiption: "هرگونه مشکل در هنگام مسولیت  بود با این شماره تماس بگیرید",
    title: "مدیر ارتباطات",
    src: bilgates,
  },
  {
    name: "حسین",
    lastName: "شهابی",
    desceiption: " تین دصث صثتخی دهصث صتثی هثی هید مدیر کل",
    title: "مهندس عالی",
    src: bilgates,
  },
  {
    name: "شادمان",
    lastName: "جدیکار",
    desceiption: " نصثید صثی ص صثی  صخی مهندس تاکسی رانی",
    title: "مهندس فنی",
    src: bilgates,
  },
  {
    name: "محمد",
    lastName: "زارعی",
    desceiption: "مدیر داخلی خهثید ثخهدحص حصد صخه",
    title: "مهندسی بخش",
    src: bilgates,
  },
  {
    name: "خشایار",
    lastName: "خلیلی",
    desceiption: "مدیر فتی صحخیتخی خه2 ی43ی4",
    title: "مهندس اجرا",
    src: bilgates,
  },
  {
    name: "حسین",
    lastName: "شهابی",
    desceiption: "مدیر کلخ43هی43 ی3ح4هی3 ی3ح4خی",
    title: "مهندس داخلی",
    src: bilgates,
  },
  {
    name: "شادمان",
    lastName: "جدیکار",
    desceiption: "مهندس تاکسی رانی",
    title: "مهندس  خصوصی",
    src: bilgates,
  },
];
const List = () => {
  const [productList, setProductList] = useState(names);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(names);

  const handleShow = (item) => {
    setShow(true);
    setProductList(names);
    setDetails(item);
  };
  const handleClose = () => {
    setShow(false);
  };

  const closeBody = () => {
    setShow(false);
  };
  return (
    <div>
      <>
        <h3 className={styles.text_head}>
          {/* {eng.product} */}اسامی و مشخصات مسولین
        </h3>
        <ul className={styles.cards}>
          {productList.map((item , index) => {
            return (
              <li key={index} className={styles.itemcards}>
                <div className={styles.pd}>
                  {item.name} {item.lastName}
                </div>
                <img src={item.src} alt={item.title} />
                <div className={styles.bottomCards}>
                  <div className={styles.cardsPrice}> {item.title}</div>
                  <button
                    type="button"
                    className={styles.cardsBtn}
                    onClick={() => handleShow(item)}
                  >
                    بیشتر بدانید...
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <Modal show={show} details={details} onClose={handleClose}>
          {closeBody}
        </Modal>
      </>
    </div>
  );
};

export default List;
