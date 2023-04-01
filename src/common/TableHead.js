import React from "react";

const TableHead = (props) => {
  return (
    <>
      <thead>
        <tr>
          {props?.tableHeading?.map((item, index) => {
            return <th key={index}>{item.label}</th>;
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
