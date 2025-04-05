export const fetchHabits = async (token:string)=>{
    const response = await fetch("https://backend-sepia-nine-79.vercel.app/habit", {
      headers: {Authorization: 'Bearer '+token}
     });
    if(!response.ok) {
        throw new Error("Failed to fetch habits");
  }
  return response;
};

export const fetchAddHabit = async (token:string, title:string, description:string) => {
  const response = await fetch("https://backend-sepia-nine-79.vercel.app/habit", {
      method: 'POST',
      headers: {Authorization: 'Bearer '+token ,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "title": title,
        "description": description
      })
    });
  if (!response.ok) {
      throw new Error("Failed to fetch habits");
  }
  return response;
};