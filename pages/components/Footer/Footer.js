import Head from "next/head";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer({tasks}) {
  return (
    <footer className={styles.footer}>
        <div>
            <div className={styles.scale}>
                <div className={styles.plus}>
                    <Image src="/add.svg" width={25} height={25}></Image>
                </div>
                <div className={styles.value}>110%</div>
                <div className={styles.minus}>
                    <Image src="/remove.svg" width={25} height={25}></Image>
                </div>
            </div>
        </div>

        <div className={styles.undoRedo}>
            <div id="undo" className={styles.undo}>
                <Image src={"/undo.svg"} width="25" height={25}></Image>
            </div>
            <div className={styles.redo}>
                <Image src={"/redo.svg"} width="25" height={25}></Image>
            </div>
        </div>
    </footer>
  )
}
