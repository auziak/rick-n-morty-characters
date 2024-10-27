const CardLine = ({ title, value }) => (
  <div className="">
    <span className="fw-bold">{`${title} : `}</span>
    {value}
  </div>
)
export default CardLine
