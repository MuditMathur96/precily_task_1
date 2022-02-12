import Menu from './components/Menu';
import Profile from './components/Profile';
import ServerError from './components/ServerError';
import Window from "./components/Window";

function App() {
  return (
    <div className="p-2 animated  ">
    
      <div className="flex justify-center flex-wrap  ">
      
        <Window defaultSize={{
          height:"400px",
          width:"10%"
        }} title="Menu"><Menu/></Window>
       
       
        <Window
        defaultSize={{
          height:"400px",
          width:"80%"
          
        }}
        title="Window 2"><Profile/></Window>
       
        
        
      </div>
      <div className=" flex justify-center  w-auto ">
      <Window
        defaultSize={{
          height:"150px",
          width:"100%"
        }}
        title="Dashboard">
          <ServerError/> </Window>
      </div>
     
    </div>
  );
}

export default App;
