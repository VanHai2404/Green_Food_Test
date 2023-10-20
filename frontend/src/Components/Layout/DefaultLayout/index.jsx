import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";





function defaultLayout({ children }){
    return(
        <div>
       <Header />
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>

    );
    
}
export default defaultLayout;