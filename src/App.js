import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyChildComponent from './MyChildComponent';
import Project from './Project';
import Car from './Car';

function App() {


  const projectList = [{"title":"ML Project","desc":"some desc1"},
  {"title":"NLP Project","desc":"some desc2"}]


  const carList=[{"make":"Honda","model":"Accord","year":2022},
                 {"make":"tesla","model":"M4","year":2022}
];
 /*  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>

      <MyChildComponent name="Aayushi" profession="Student" />
    <Project title="Image" desc="ML model can say that" />
    <hr />
    <Project title="NLP model" desc="QA chat bot" /> */
    return(    // remove this and below line when uncomment block comment
    <div className="App"> 
    {
      projectList.map((projectObj)=> {return <Project title={projectObj.title} desc={projectObj.desc} />})
    } 
    {(params) => {}}

    <br />
    <br />
    {
      carList.map((carObj) => {
         return <Car make={carObj.make} model={carObj.model} year={carObj.year}/>
      })
    }
    </div>
  );
}

export default App;
