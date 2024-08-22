"use server";

export const filterAction = async (formData: FormData) => {
  const status = formData.get("status");
  const gender = formData.get("gender");

  const statusQuery = status ? `status=${status}` : "";
  const genderQuery = gender ? `gender=${gender}` : "";

  const query = [statusQuery, genderQuery].filter(Boolean).join("&");
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/character?${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results) {
      throw new Error("No results found");
    }

    return data.results;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
