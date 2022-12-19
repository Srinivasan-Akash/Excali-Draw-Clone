import Image from "next/image";
import styles from "./Navbar.module.css";
// homeLogo (2).png
export default function Home() {
  return (
    <nav className={styles.nav}>
      <div className={styles.tools}>
        <Image
          className={styles.hamburger}
          alt={"img"}
          src={"/hamburger.svg"}
          width="30"
          height={"30"}
        ></Image>
      </div>

      <div className={styles.tools}>
        <div className={styles.tool}>
          <Image
            src={"/arrow.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span className={styles.span}>0</span>
        </div>

        <div className={styles.tool}>
          <Image
            src={"/square.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span className={styles.span}>1</span>
        </div>

        <div className={styles.tool}>
          <Image
            src={"/circle.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span className={styles.span}>2</span>
        </div>

        <div className={styles.tool}>
          <Image
            src={"/arrow-right.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span className={styles.span}>3</span>
        </div>

        <div className={styles.tool}>
          <Image src={"/line.svg"} alt={"img"} width="30" height={"30"}></Image>
          <span className={styles.span}>4</span>
        </div>

        <div className={styles.tool}>
          <Image src={"/edit.svg"} alt={"img"} width="30" height={"30"}></Image>
          <span className={styles.span}>5</span>
        </div>

        <div className={styles.tool}>
          <Image src={"/text.svg"} alt={"img"} width="30" height={"30"}></Image>
          <span className={styles.span}>6</span>
        </div>

        <div className={styles.tool}>
          <Image
            src={"/image.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span className={styles.span}>7</span>
        </div>
      </div>

      <div className={styles.tools}>
        <div className={styles.community}>
          <svg
            width={"25"}
            aria-hidden="true"
            focusable="false"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g strokeWidth="1.5">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
            </g>
          </svg>
        </div>
        <div className={styles.library}>
          <Image
            src={"/library.svg"}
            alt={"img"}
            width="30"
            height={"30"}
          ></Image>
          <span>Library</span>
        </div>
      </div>
      <Image className={styles.arrow} src="/export.png" width="300" height="300"></Image>  
    </nav>
  );
}
