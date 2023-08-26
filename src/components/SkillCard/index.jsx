import { Card } from "./styled";

/* eslint-disable react/prop-types */
export default function SkillCard(props) {
  return (
    <Card>{props.children}</Card>
  )
}