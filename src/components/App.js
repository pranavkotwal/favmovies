import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
class App extends React.Component{

  componentDidMount(){
    //make api call 
    //dispatch action
    const {store} = this.props
    store.subscribe(()=>{
      console.log('UPDATED')
      this.forceUpdate()
    })
    store.dispatch({
      type:'ADD_MOVIES',
      movies:data

    })
    console.log('state',this.props.store.getState())
  }

  render(){
  const movies = this.props.store.getState()
  console.log('render')
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>

        <div className="list">
          {movies.map((movie,index) =>(
            <MovieCard movie={movie} key={`movie-${index}`}/>
          ))}
        </div>

      </div>

    </div>
  );
          }
}

export default App;
