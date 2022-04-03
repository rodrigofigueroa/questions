import styled from 'styled-components'


const Nav = styled.nav`
  width:100%;
  padding:20px;
  background:#fff;
  border-radius:0 0 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  a {
    padding:5px 15px;
    border:2px solid #61A4BC;
    border-radius:5px;
    color:#61A4BC;
    transition:all 249.625ms ease 0ms;
    margin-right:20px;
    text-decoration: none;
    &:hover {
      background:#61A4BC;
      color:#fff;
    }
  }
  @media screen and (max-width:480px){
    flex-direction: column;
    a{
      margin-right: 0;
    }
  }
`

export default Nav
