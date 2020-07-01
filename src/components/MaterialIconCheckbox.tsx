import React from "react";
import { Checkbox, CheckboxProps } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
interface Props extends CheckboxProps {
  materialUiIcon: string;
  checkedColor?: string;
}

export const MaterialIconCheckbox = (props: Props) => {
  const { materialUiIcon, checkedColor, ...checkboxProps } = props;
  return (
    <Checkbox
      {...checkboxProps}
      icon={<Icon>{materialUiIcon}</Icon>}
      checkedIcon={
        <Icon style={{ color: checkedColor ? checkedColor : "primary" }}>
          {materialUiIcon}
        </Icon>
      }
    />
  );
};
