"use client";

/* eslint-disable camelcase */

import logo from "public/svgs/logo.png";
import styles from "src/app/(login)/login2/page.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <video className={styles.video} muted autoPlay loop>
          <source src="/videos/login.mp4" type="video/mp4" />
        </video>
        <div className={styles.video_descript}>Welcome to CheeseBalloon</div>
      </div>
      <div className={styles.right}>
        <div className={styles.right_title}>
          <img src={logo.src} alt="asfd" />
        </div>
        <div className={styles.social_login}>
          <div className={styles.sub}>소셜 로그인</div>
          <div className={styles.login_button}>
          </div>
        </div>
      </div>
    </div>
  );
}
