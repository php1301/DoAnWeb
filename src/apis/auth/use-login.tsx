import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import http from "@apis/utils/http";
import { useContext } from "react";
import { useUI } from "@contexts/ui.context";
import GlobalContext from "@contexts/global-context"; // import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";

export interface LoginInputType {
    email: string;
    password: string;
    remember_me: boolean;
}
export interface LoginResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function login(input: LoginInputType): Promise<LoginResponseType> {
    const {
        data: { access_token },
    } = await http.post(`${API_ENDPOINTS.LOGIN}`, input);
    return {
        // token: `${input.email}.${input.remember_me}`
        //     .split("")
        //     .reverse()
        //     .join(""),
        // accessToken: "",
        // refreshToken: "",
        accessToken: access_token,
    };
}
export const useLoginMutation = () => {
    const { authorize } = useUI();
    const queryClient = useQueryClient();
    const gContext = useContext(GlobalContext);
    // return useMutation<any, Error, LoginInputType>(
    return useMutation<LoginResponseType, Error, LoginInputType>(
        async (input: LoginInputType) => login(input),
        {
            onSuccess: async (data: LoginResponseType) => {
                toast("Đăng nhập thành công", {
                    type: "success",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                Cookies.set("access_token", data?.accessToken);
                await queryClient.resetQueries({
                    active: true,
                });
                authorize();
                gContext.toggleSignInModal();
            },
            onError: (error: Error) => {
                console.log(error.message, "Sign In error");
                toast("Có lỗi đăng nhập", {
                    type: "error",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            },
        },
    );
};
