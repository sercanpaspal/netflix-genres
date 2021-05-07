import cn from "classnames";
import styles from "./index.module.css";

const Button = ({ children, active = false, ...props }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.active]: active,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
