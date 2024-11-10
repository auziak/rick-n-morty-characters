import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  headerTitle: string;
  headerText?: string;
  descriptionTitle: string;
  descriptionText?: string;
  infoTitle: string;
  infoText?: string;
}>;

export const Layout: FC<Props> = ({
  headerTitle,
  headerText,
  descriptionTitle,
  descriptionText,
  infoTitle,
  infoText,
  children,
}) => {
  return (
    <>
      <h1 className="text-center mb-3">
        {headerTitle} <span className="text-primary">{headerText || "Unknown"}</span>
      </h1>
      <div className="container">
        <div className="row mb-3">
          <h5 className="text-center">
            {descriptionTitle} {descriptionText || "Unknown"}
          </h5>
          <h6 className="text-center">
            {infoTitle} {infoText || "Unknown"}
          </h6>
          <div className="row">{children}</div>
        </div>
      </div>
    </>
  );
};
