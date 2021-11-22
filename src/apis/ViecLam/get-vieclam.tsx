import { ChiTietViecLamResponse } from "@apis/types";
import http from "@apis/utils/http";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { useQuery } from "react-query";
interface IViecLamDetails {
    chiTietViecLam: ChiTietViecLamResponse;
}
export const fetchViecLam = async (id: string) => {
    // const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}`);
    const { data } = await http.get(`${API_ENDPOINTS.VIECLAM_CHITIET}/${id}`);
    return {
        chiTietViecLam: data,
    };
};

export const useViecLamQuery = (slug: string) => {
    return useQuery<IViecLamDetails, Error>([slug], () => fetchViecLam(slug), {
        keepPreviousData: true,
        // staleTime: 1000,
        // refetchOnMount: "always",
    });
};
