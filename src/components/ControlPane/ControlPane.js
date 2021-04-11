import React from "react";

import ToggleButton from "../ToggleButton";
import ButtonRow from "../ButtonRow";

import styles from "./ControlPane.module.css";

const ControlPane = ({
  title,
  type,
  options,
  currentOption,
  handleSelectOption,
}) => {
  return (
    <div className={styles.controlPane}>
      <h2 className={styles.title}>
        {title}

        <span className={styles.metadata}>{options.length} options</span>
      </h2>
      <ButtonRow>
        <div className={styles.buttonRowWrapper}>
          {options.map(({ id, label, color, children }) => (
            <ToggleButton
              key={id}
              isSelected={currentOption === id}
              onClick={() => handleSelectOption(id)}
              label={label}
              color={color}
            >
              {children}
            </ToggleButton>
          ))}
        </div>
      </ButtonRow>
    </div>
  );
};

export default ControlPane;
