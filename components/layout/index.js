import useTranslation from "next-translate/useTranslation";
import GithubCorner from "../github-corner";
import LanguageMenu from "../language-menu";
import styles from "./index.module.css";

const Layout = ({ children }) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <GithubCorner />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t("title")}</h1>
          <div>
            <LanguageMenu />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
