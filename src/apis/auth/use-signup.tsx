import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import http from "@apis/utils/http";
import { useContext } from "react";
import { useUI } from "@contexts/ui.context";
import GlobalContext from "@contexts/global-context";
// import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";

export interface SignUpType {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    agree: boolean;
    level?: number;
}
export interface SignUpResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function signUp(input: SignUpType): Promise<SignUpResponseType> {
    input.level = 1;
    const {
        data: { access_token },
    } = await http.post(`${API_ENDPOINTS.SIGNUP}`, input);
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
export const useSignUpMutation = () => {
    const { authorize } = useUI();
    const queryClient = useQueryClient();
    const gContext = useContext(GlobalContext);
    // return useMutation<any, Error, SignUpType>(
    return useMutation<SignUpResponseType, Error, SignUpType>(
        async (input: SignUpType) => signUp(input),
        {
            onSuccess: async (data: SignUpResponseType) => {
                toast("Đăng ký thành công", {
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
                gContext.toggleSignUpModal();
            },
            onError: (error: Error) => {
                console.log(error.message, "Sign up error");
                toast("Có lỗi đăng ký", {
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
