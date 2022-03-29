import styled from 'styled-components'

const BtnBig = styled.button`
    width: 300px;
    height: 300px;
    border-radius:100%;
    background-color: #DA1212;
    outline: none;
    border-width: 0;
    box-shadow: 0 20px #630606, 0 10px #1f1f2c;
    transition: .3s all ease;
    &:active{
      transform: translateY(20px);
      box-shadow: 0 0px #630606, 0 10px #1f1f2c;
    }
    i {
      font-size: 12.5rem;
      color: #fff;
    }
  `

export default BtnBig