import React from "react";
import { Field } from "./Field";

export const Results = props => {
  return (
    <div className="field">
      <h2>Mushers (from 2012)</h2>
      <div className="myCards">
      {!!props.data &&
         (
           <Field
            data={props.data}
          />
        )
      }
      </div>
    </div>
  );
};
