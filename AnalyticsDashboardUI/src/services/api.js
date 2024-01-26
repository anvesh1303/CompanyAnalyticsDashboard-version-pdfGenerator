export const fetchData = async (section) => {
    try {
      const url = process.env.PUBLIC_URL + `/${section}.json`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  