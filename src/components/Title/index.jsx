import { TitleStyle } from "./styled";

/* eslint-disable react/prop-types */
export default function Title(props) {
  return (
    <TitleStyle>{props.children}</TitleStyle>
  )
}