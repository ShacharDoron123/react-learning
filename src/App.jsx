import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  return (
    <>
      <Header />
      <Food/>
      <Card/>
      <Button/>
      <Student name="shachar" age={17} isStudent = {true}/>
      <Student name="a" age={10} isStudent = {false}/>
      <Student name="b" age={19} isStudent = {true}/>
      <Student/>
      <UserGreeting isLoggedIn={true} name="abc"/>
      <UserGreeting isLoggedIn={false}/>
      <List/>
      <Footer/>
    </>
  );
}

export default App;
