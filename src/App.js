import Pages from "./pages/Pages";
import Category from "./components/.Category";
import Search from "./components/Search";
import Styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';
function App() {
  return (
    <div className="App">
      <Nav>
        <GiKnifeFork></GiKnifeFork>
        <Logo to='/'>deliciousss</Logo>
      </Nav>
      <Search></Search>
      <Category/>
      <Pages></Pages>
    </div>
  );
}

const Logo=Styled(Link)`
   text-decoration:none;
   font-size:1.5rem;
   font-weight:400;
   font-family:'Lobster Tow',cursive;
`;

const Nav=Styled.div`
padding:4rem 0rem;
display:flex;
justifay-content:flex-start;
align-items:center;

svg{
  font-size:2rem;
}

`;


export default App;
