import styles from "styles/modules/dashboard.module.scss";
import { ReactNode } from "react";
export function BoardsContainer({ children }: { children: ReactNode }) {
  return (
    <div
      // className="row gap-4" // responsive boards styles
      className={styles.container_boards}
    >
      {children}
    </div>
  );
}
