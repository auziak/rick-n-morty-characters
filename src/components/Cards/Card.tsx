import { FC } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../Badge";
// css
import styles from "./Cards.module.scss";

type Props = {
  pageRoute: string;
  id: number;
  image: string;
  name: string;
  status: "Dead" | "Alive" | "unknown" | "info";
  location: { name: string };
};

export const Card: FC<Props> = ({ pageRoute, id, image, name, status, location }) => {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`${pageRoute}${id}`}
      key={id}
      className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
    >
      <div className={`${styles.card}`}>
        <img className={`${styles.img} img-fluid`} src={image} alt={name} />
        <div className={`${styles.content}`}>
          <div className="fs-5 fw-bold mb-4">{name}</div>
          <div className="">
            <div className="fs-6 fw-normal">Last location</div>
            <div className="fs-5">{location?.name}</div>
          </div>
        </div>
      </div>
      <Badge
        styles={styles.badge}
        status={status}
        text={status}
        additionalClass="position-absolute"
      />
    </Link>
  );
};
