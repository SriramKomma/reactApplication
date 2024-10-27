import Header from "../Header";
import Scroller from "../Scroller";
import MainContent from "../MainContent";
import Demo from "../Demo";
import Services from "../Services";

const Home = () => {
  return (
    <div className="complete-bg-container">
      <Header />
      <MainContent />
      <Scroller />
      <Demo />
      <Services />
    </div>
  );
};

export default Home;
