import styled       from "styled-components";
import { dataCssI } from "../../interfaces";

const H2 = styled.h2<dataCssI>`
  color: #fff;
  ${props => props.dataCss ? props.dataCss : ''}
`
export default H2