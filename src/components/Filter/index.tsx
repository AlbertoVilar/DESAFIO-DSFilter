import { useState } from "react";
import "./style.css";
import { FormData } from "../../model/types";



type Props = {
  onFilter: (data: FormData) => void;
}

export default function Filter({ onFilter }: Props) {
  
  const [formData, setFormData] = useState<FormData>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onFilter(formData); // Pass the formData object to onFilter
  }

  return (
    <form onSubmit={handleSubmit} className="nav-container search-filter">
      <input
        type="number"
        name="minPrice"
        value={formData.minPrice || ""}
        onChange={handleChange}
        placeholder="Min Price"
      />
      <input
        type="number"
        name="maxPrice"
        value={formData.maxPrice || ""}
        onChange={handleChange}
        placeholder="Max Price"
      />
      <button type="submit">Filtrar</button>
    </form>
  );
}
