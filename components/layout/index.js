import styles from "./index.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Netflix Listeleri</h1>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
