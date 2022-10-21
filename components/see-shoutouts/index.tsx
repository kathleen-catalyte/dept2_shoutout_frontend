import { ArrowRightIcon } from "@heroicons/react/24/solid/";

import styles from "./SeeShoutouts.module.css";

const SeeShoutouts = (props: { employeeId: string }, key: number) => {
    const { employeeId } = props;
  return (
    <div>
      <a className={styles.seeShoutoutBtn} href={`/user/${(employeeId)}`}>
        See shoutouts <ArrowRightIcon className={styles.arrowIcon} />
      </a>
    </div>
  );
};

export default SeeShoutouts;
