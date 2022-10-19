import { ArrowRightIcon } from "@heroicons/react/24/solid/";

import styles from "./SeeShoutouts.module.css";

const SeeShoutouts = () => {
  return (
    <div>
      <a className={styles.seeShoutoutContainer} href="">
        See shoutouts <ArrowRightIcon className={styles.arrowIcon} />
      </a>
    </div>
  );
};

export default SeeShoutouts;
