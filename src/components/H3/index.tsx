import styled       from "styled-components";
import { dataCssI } from "../../interfaces";

const H3 = styled.h2<dataCssI>`
  color: #fff;
  font-size: 3.75rem;
  text-align: center;
  ${props => props.dataCss ? props.dataCss : ''}
  @media screen and ( max-width: 480px){
    font-size: 1.875rem;
  }
`
export default H3