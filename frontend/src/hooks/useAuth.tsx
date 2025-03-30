import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserFormData } from '../types/userFormData';
import { UserAPIResponse } from '../types/userAPIResponse';

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      values: UserFormData
    ): Promise<AxiosResponse<UserAPIResponse>> => {
      try {
        const res: AxiosResponse<UserAPIResponse> = await axios.post(
          'http://localhost:3000/auth/login',
          values
        );
        return res;
      } catch (error) {
        const axiosEroor = error as AxiosError;
        throw new Error(axiosEroor.response?.data as string);
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data);
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (
      values: UserFormData
    ): Promise<AxiosResponse<UserAPIResponse>> => {
      try {
        const res: AxiosResponse<UserAPIResponse> = await axios.post(
          'http://localhost:3000/auth/signup',
          values
        );
        return res;
      } catch (error) {
        const axiosEroor = error as AxiosError;
        throw new Error(axiosEroor.response?.data as string);
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.data);
    },
  });
};
