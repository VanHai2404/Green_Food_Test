
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { pulicRoutes } from "./routes/routes";
import defaultLayout from "./Components/Layout/DefaultLayout";



function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          {
            pulicRoutes.map((route,index)=>{
              const Layout =route.Layout || defaultLayout;
              const Page =route.component;
              return <Route key={index} path={route.path} 
              element ={
              <Layout>
                <Page/>
              </Layout>
              } 
              />
            })
          }
        </Routes>

      </div>


    </Router>

  );
}

export default App;
