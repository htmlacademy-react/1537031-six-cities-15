import MainScreen from '../../pages/main-screen/main-screen';
import {Setting} from '../../const.ts';

function App(): JSX.Element {
  return (
    <MainScreen placesCount={Setting.PlacesCount}/>
  );
}

export default App;
