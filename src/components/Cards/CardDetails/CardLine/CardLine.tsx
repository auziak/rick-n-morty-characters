type Props = { title: string; value: string };

export const CardLine = ({ title, value }: Props) => (
  <div className="">
    <span className="fw-bold">{`${title} : `}</span>
    {value}
  </div>
);
