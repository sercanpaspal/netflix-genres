import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import LanguageMenuItem from "../language-menu-item";
import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";

const LanguageMenu = () => {
  const { locale, locales } = useRouter();
  const { t } = useTranslation("common");

  return (
    <div>
      <Menu as="div" className={styles.content}>
        <div>
          <Menu.Button className={styles.button}>{t(locale)}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className={styles.items}>
            <div className={styles.itemsInner}>
              {locales.map((localeItem, _i) => (
                <LanguageMenuItem
                  active={localeItem === locale}
                  locale={localeItem}
                  key={_i}
                />
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageMenu;
