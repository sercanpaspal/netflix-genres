import cn from "classnames";
import { forwardRef } from "react";
import styles from "./index.module.css";

const Button = forwardRef(({ children, active = false, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(styles.button, {
      [styles.active]: active,
    })}
    {...props}
  >
    {children}
  </button>
));

export default Button;
