import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../../constants";
import { Character } from "../../../entities";
import { Badge } from "../../Badge";
import { CardLine } from "./CardLine";

export const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState<Character | null>(null);
  const { name, location, origin, gender, image, status, species } = fetchedData ?? {};

  const characterCharacteristic = [
    { title: "Gender", value: gender },
    { title: "Location", value: location?.name },
    { title: "Origin", value: origin?.name },
    { title: "Species", value: species },
  ];

  const api = `${apiUrl}character/${id}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    fetchedData && (
      <div className="container d-flex justify-content-center mb-5">
        <div className="d-flex flex-column gap-3">
          <h1 className="text-center">{name}</h1>
          {/* TODO: add image alt attribute */}
          <img className="img-fluid" src={image} alt="" />
          <Badge text={status!} status={status!} additionalClass="fs5" />
          <div className="content">
            {characterCharacteristic.map(({ title, value }) => (
              <CardLine title={title} value={value!} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
