import { useContext } from "react";
import "./style.css";
import { ContextProductCount } from "../../utils/contex-products";


export default function HeaderClient() {
  const { contextProductCount } = useContext(ContextProductCount);


  return (
    <header className="dsc-header-client">
      <nav className="nav-container">
        
        <div className="container-logo-menu">
          <h1>DSFilter</h1>

          <div className="dsc-menu-item">
            <span>{contextProductCount} produto(s)</span>
          </div>
        </div>

      </nav>
    </header >
  );
}
