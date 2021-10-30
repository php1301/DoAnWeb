import { Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { useQuery } from "react-query";
interface IProductDetails {
    viecLam: Product;
    isFavorite: boolean;
}
export const fetchViecLam = async (id: string) => {
    // const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}`);
    const {
        data: { product, isFavorite },
    } = await http.get(`${API_ENDPOINTS.VIECLAM_CHITIET}/${id}`);
    return {
        viecLam: product,
        isFavorite,
    };
};

export const useViecLamQuery = (slug: string) => {
    return useQuery<IProductDetails, Error>([slug], () => fetchViecLam(slug), {
        keepPreviousData: true,
        // staleTime: 1000,
        // refetchOnMount: "always",
    });
};
