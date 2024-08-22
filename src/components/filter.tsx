"use client";

import { useRickAndMorty } from "@/context/filter";

function FilterComponent() {
  const { setCharacters } = useRickAndMorty();

  const handleFilter = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const status = formData.get("status") as string;
    const gender = formData.get("gender") as string;

    const statusQuery = status ? `status=${status}` : "";
    const genderQuery = gender ? `gender=${gender}` : "";

    const query = [statusQuery, genderQuery].filter(Boolean).join("&");

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/character?${query}`;

    const response = await fetch(url);
    const data = await response.json();

    setCharacters(data.results);
  };

  return (
    <form onSubmit={handleFilter} className="flex items-center gap-5">
      <div className="flex gap-2">
        <label htmlFor="status">Status:</label>
        <select name="status" id="status">
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <button type="submit" className="bg-sky-400/30 p-2 rounded-md">
        Apply Filters
      </button>
    </form>
  );
}

export default FilterComponent;
