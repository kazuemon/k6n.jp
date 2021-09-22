import { ReactNode, VFC } from "react";
import styles from '../styles/hoge.module.scss';

interface Props {
  text: string,
  children?: ReactNode
}

const Hoge: VFC<Props> = (props) => {
  return (
    <div className={styles.hoge}>
      <p className={styles.hogeText}>{props.text}</p>
      {props.children}
    </div>
  );
}

export default Hoge