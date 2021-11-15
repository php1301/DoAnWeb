import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import http from "@apis/utils/http";
import { useMutation, useQueryClient } from "react-query";

export interface SearchViecLamInputType {
    tenViecLam: string;
    id_kv: number;
}
async function searchViecLam(input: SearchViecLamInputType): Promise<any> {
    const { data } = await http.post(`${API_ENDPOINTS.VIECLAM_SEARCH}`, input);
    return {
        data,
    };
}
export const useSearchViecLamMutation = () => {
    // return useMutation<any, Error, LoginInputType>(
    const queryClient = useQueryClient();
    return useMutation<any, Error, SearchViecLamInputType>(
        async (input: SearchViecLamInputType) => searchViecLam(input),
        {
            onSuccess: async (data: any) => {
                queryClient.invalidateQueries("searchResponse");
            },
            onError: (error: Error) => {
                console.log(error);
            },
        },
    );
};
