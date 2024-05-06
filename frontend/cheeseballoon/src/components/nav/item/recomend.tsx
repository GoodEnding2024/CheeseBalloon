"use client";

import styles from "src/components/nav/item/recomend.module.scss";
import RecomendCard from "src/components/nav/item/recomendCard";
import Image from "next/image";
import arrow from "public/svgs/down_arrow.png";
import { useState, useEffect } from "react";
import useToggleState from "src/stores/store";

export default function Recomend() {
  const { value } = useToggleState();
  const [data, setData] = useState([]);
  const [toggle2, setToggle] = useState(false);
  const switchToggle = () => {
    setToggle(!toggle2);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LIVE_API}?offset=1&limit=15`
      );
      const responseData = await response.json();
      setData(responseData.data);
    };

    fetchData();
  }, []);

  const visibleData = data.slice(0, 5);
  const hiddenData = data.slice(5, 15);

  return (
    <div className={styles.container}>
      <div className={value ? styles.description : styles.closed_description}>
        추천
      </div>
      {visibleData.map((item, index) => (
        <div key={index}>
          <RecomendCard data={item} />
        </div>
      ))}
      {toggle2 && (
        <>
          {hiddenData.map((item, index1) => (
            <div key={index1}>
              <RecomendCard data={item} />
            </div>
          ))}
        </>
      )}
      {!toggle2 && (
        <div
          className={value ? styles.morecontent : styles.closed_morecontent}
          onClick={switchToggle}
          onKeyDown={switchToggle}
          role="presentation"
        >
          {value && "더보기"}
          <Image src={arrow} alt="" />
        </div>
      )}
      {toggle2 && (
        <div
          className={value ? styles.morecontent : styles.closed_morecontent}
          onClick={switchToggle}
          onKeyDown={switchToggle}
          role="presentation"
        >
          {value && "접기"}
          <div className={styles.image_rotate}>
            <Image src={arrow} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
