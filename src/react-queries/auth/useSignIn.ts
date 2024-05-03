import { useNavigate } from "react-router-dom";

import { useCustomMutation } from "@/hooks";

import { api, removeJWTToken, setJWTToken } from "@/helpers";

import { ROUTES } from "@/constants";

import { IAuthResponse, ISignIn, TMutationsOptions } from "@/types";

const { INDEX } = ROUTES;

const fetcher = async (body: ISignIn) => {
  removeJWTToken();

  const res: IAuthResponse = await api.post("/host/auth/login", body);

  const { jwtToken } = res;

  jwtToken && setJWTToken(jwtToken);

  return res;
};

export const useSignIn = (options?: TMutationsOptions<IAuthResponse, ISignIn>) => {
  const navigate = useNavigate();

  const { mutate, ...rest } = useCustomMutation<IAuthResponse, ISignIn>(fetcher, {
    ...options,
    onSuccess: (data, ...args) => {
      options?.onSuccess?.(data, ...args);

      const redirectPath = INDEX;
      navigate(redirectPath, { replace: true });
    }
  });

  const handleMutate = (data: ISignIn) => {
    mutate(data);
  };

  return { mutate: handleMutate, ...rest };
};
