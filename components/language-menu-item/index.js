import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";

const LanguageMenuItem = ({ locale, active }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <Menu.Item>
      <button
        onClick={() => router.push("/", "/", { locale })}
        className={cn([styles.button, { [styles.active]: active }])}
      >
        {t(locale)}
      </button>
    </Menu.Item>
  );
};

export default LanguageMenuItem;
