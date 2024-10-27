const badgeClass = {
  Dead: "danger",
  Alive: "success",
  unknown: "secondary",
  info: "warning"
}

const Badge = ({ text, status, styles = "", additionalClass }) => (
  <div className={`${styles} badge  bg-${badgeClass[status]} ${additionalClass}`}>{text}</div>
)

export default Badge
