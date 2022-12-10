import './App.css';
import AlternatingImages from './components/AlternatingImages/AlternatingImages ';
import Brand from './components/Brand/Brand';
import BrandContactPanel from './components/BrandContactPanel/BrandContactPanel';
import BrandedStackedLinks from './components/BrandedStackedLinks/BrandedStackedLinks';
import Centered from './components/Centered/Centered';
import ColumnCards from './components/ColumnCards/ColumnCards';
import GridIcons from './components/GridIicons/GridIicons';
import GridList from './components/GridList/GridList';
import NavigationOverlap from './components/NavigationOverlap/NavigationOverlap';
import SimpleCustom from './components/SimpleCustom/SimpleCustom';

function App() {
  return (
    <div className="App">
      <NavigationOverlap />
      <GridList />
      <GridIcons />
      <AlternatingImages />
      <Brand />
      <BrandedStackedLinks />
      <BrandContactPanel />
      <Centered />
      <SimpleCustom />
      <ColumnCards />
    </div>
  );
}

export default App;
