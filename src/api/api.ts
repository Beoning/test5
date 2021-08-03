import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://api.veriphone.io/v2/`,
  withCredentials: false,
});

export const validateApi = {
  async validate(number: string) {
    return await instance
      .get(`verify?phone=%2B7-${number}&key=90E216DCBD5044F9972EF6ACB12BEC76`)
      .then((response) => response.data);
  },
};
