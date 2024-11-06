
import './App.css';
import Ex1 from './components/Ex1';
import Ex10 from './components/Ex10';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';

function App() {
  return (
   <>
   <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="bg-success p-3 text-center text-white rounded">
          THIS IS APP COMPONENT....! (PARENT COMPONENT)
        </h1>
      </div>
    </div>
   </div>

   <Ex1/>
   <Ex2/>
   <Ex3/>
   <Ex4/>
    <Ex5
        img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInmyaYQYsV8-BzUX0q38U8mTcDg0GSlsh1g&s"
        name =  " Globe in HAND "
        lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Ex6
        img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInmyaYQYsV8-BzUX0q38U8mTcDg0GSlsh1g&s"
        name =  " Globe in HAND "
        lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Ex7/>
      <Ex8
         img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInmyaYQYsV8-BzUX0q38U8mTcDg0GSlsh1g&s"
         name =  " Globe in HAND "
         lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Ex9
         img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRInmyaYQYsV8-BzUX0q38U8mTcDg0GSlsh1g&s"
         name =  " Globe in HAND "
         lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Ex10/>



   </>
    
  )
}

export default App;
