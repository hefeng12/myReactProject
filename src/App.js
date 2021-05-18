import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Slider from './components/Slider/Slider'


class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Router>
        <Switch>
         <Route path="/" exact component={Slider} />
       </Switch>
      </Router>
    )
  }
}

export default App;
