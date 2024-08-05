import { useState } from "react";
import "./style.css";

type FormData = {
  price: number;
}


export default function Filter() {

  const [formData, setFormData] = useState<FormData>({
    price: 0
  });

  function handleChangFormData(event: any) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value })
  }

  return (
    <form className="nav-container search-filter" >


      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChangFormData}
      />

      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChangFormData}
      />
      <button>Filtrar</button>

    </form>
  );
}
