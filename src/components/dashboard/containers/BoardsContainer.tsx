import styles from "styles/modules/dashboard.module.scss";
import { ReactNode } from "react";
export function BoardsContainer({ children }: { children: ReactNode }) {
  return <div className={styles.container_boards}>{children}</div>;
}
