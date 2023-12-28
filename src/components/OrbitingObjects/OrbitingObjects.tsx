import React from "react";
import FormDataModel from "../models/DataModel";
import "./OrbitingObjects.css";
import Table from "./Table";

interface OrbitingObjectsProps {
  selectedData: { info?: object[] };
  data: FormDataModel;
  onObjectClick: (entry: object) => void;
}

const OrbitingObjects: React.FC<OrbitingObjectsProps> = ({
  selectedData,
  data,
  onObjectClick,
}) => {
  const numberOfObjects = selectedData.info?.[0];
  return (
    <div className="relative w-72 h-72 mx-auto animate-spin">
      <center>
        <div
          className="absolute w-16 h-16 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            //   backgroundColor: "pink",
            //   height: "80px",
            //   width: "80px",
            //   borderRadius: "50%",
            position: "relative",
            top: "80px",
          }}
        >
          <div className="earth"></div>
        </div>

        {data.personalInformation.map((entry, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit${
              index + 1
            } cursor-pointer`}
            onClick={() => onObjectClick(entry)}
            style={{
              backgroundColor: "gray",
              height: "25px",
              width: "25px",
              borderRadius: "50%",
            }}
          >
            {index + 1}
          </div>
        ))}
        <div style={{ marginTop: "200px" }}>
          <Table data={selectedData.info || []} />

          {JSON.stringify(numberOfObjects)}
        </div>
      </center>
    </div>
  );
};

export default OrbitingObjects;
