const usePostData = (data: {
  login: string;
  password: string;
  email: string;
  telephoneNumber: number;
  star_wars_data: (string | string[])[];
}) => {
  const url = "https://example/";
  const postDataHandler = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Request failed!')
      }
    } catch (error) {
      alert(error);
    }
  };
  return postDataHandler;
};

export default usePostData;
