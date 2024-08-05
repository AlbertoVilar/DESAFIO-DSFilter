import { useState } from "react";
import "./style.css";

type Props = {
  onFilter: Function;
}

type FormData = {
  minPrice?: number;
  maxPrice?: number;
}
export default function Filter({ onFilter }: Props) {

  const [formData, setFormData] = useState<FormData>({});

  function handleChangFormData(event: any) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value })
  }

  function handleOnSubmit(event: any) {
    event.preventDefault();
    setFormData(formData)
    //console.log(formData.minPrice || Number.MIN_VALUE)
    //console.log(formData.maxPrice || Number.MAX_VALUE)
  }

  return (
    <form onSubmit={handleOnSubmit} className="nav-container search-filter" >


      <input
        type="text"
        name="minPrice"
        value={formData.minPrice || ""}
        onChange={handleChangFormData}
      />

      <input
        type="text"
        name="maxPrice"
        value={formData.maxPrice || ""}
        onChange={handleChangFormData}
      />
      <button type="submit">Filtrar</button>

    </form>
  );
}
