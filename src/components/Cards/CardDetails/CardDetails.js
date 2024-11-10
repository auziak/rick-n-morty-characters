import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../../Badge/Badge";
import CardLine from "./CardLine/CardLine";

const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, updateFetchedData] = useState([]);
  const { name, location, origin, gender, image, status, species } = fetchedData;

  const characterCharacteristic = [
    { title: "Gender", value: gender },
    { title: "Location", value: location?.name },
    { title: "Origin", value: origin?.name },
    { title: "Species", value: species },
  ];

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async () => {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        {/* TODO: add image alt attribute */}
        <img className="img-fluid" src={image} alt="" />
        <Badge text={status} status={status} additionalClass="fs5" />

        <div className="content">
          {characterCharacteristic.map(props => (
            <CardLine {...props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
