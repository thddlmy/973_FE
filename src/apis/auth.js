import axios from 'axios';
import { POST } from './axios';

export const postSignin = async ({ email, password }) => {
  const response = await POST({
    url: '/user/login',
    data: {
      email,
      password,
    },
  });
  return response;
};

export const postSignup = async ({
  email,
  confirmPassword,
  nickname,
  password,
}) => {
  const response = await POST({
    url: 'user/join',
    data: {
      email,
      password,
      confirmPassword,
      nickname,
    },
  });
  return response;
};
