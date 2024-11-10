import { Character } from "../../entities";
import { Card } from "./Card";

type Props = {
  results: Character[] | null;
  pageRoute: string;
};

export const CardsList = ({ results, pageRoute }: Props) => {
  return results && results.length ? (
    <div className="col-lg-9 col-12">
      <div className="row">
        {results.map(({ id, image, name, status, location }) => (
          <Card
            pageRoute={pageRoute}
            id={id}
            image={image}
            name={name}
            status={status}
            location={location}
          />
        ))}
      </div>
    </div>
  ) : (
    <div>No characters found</div>
  );
};
