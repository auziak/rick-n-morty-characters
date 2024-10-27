import { Link } from "react-router-dom"
import Badge from "../Badge/Badge"
// css
import styles from "./Cards.module.scss"

const Cards = ({ results, page }) => {
  if (results && results.length) {
    return results.map(({ id, image, name, status, location }) => (
      <Link
        style={{ textDecoration: "none" }}
        to={`${page}${id}`}
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
    ))
  } else return <div>No characters found</div>
}
export default Cards
