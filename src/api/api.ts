import Axios from "axios";

const instance = Axios.create({
  baseURL: `http://apilayer.net/api/`,
  withCredentials: false,
});

export const validateApi = {
  async validate(number: string) {
    return await instance
      .get(
        `validate?access_key=a06eac25b3bbb9dda6619ed7a26fa81e&number=${number}`
      )
      .then((response) => response.data);
  },
};
