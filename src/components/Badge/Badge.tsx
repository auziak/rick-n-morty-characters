import { FC } from "react"

const badgeClass = {
  Dead: "danger",
  Alive: "success",
  unknown: "secondary",
  info: "warning"
}

type Props = {
  text: string
  status: keyof typeof badgeClass
  styles: Record<string, unknown> | string
  additionalClass: string
}

const Badge: FC<Props> = ({ text, status, styles = "", additionalClass }) => (
  <div className={`${styles} badge  bg-${badgeClass[status]} ${additionalClass}`}>{text}</div>
)

export default Badge
