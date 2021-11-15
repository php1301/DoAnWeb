import http from "@apis/utils/http";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { useQuery } from "react-query";
import { ViecLam } from "@apis/types";

type NewestVieclams = {
    viecLams: ViecLam[];
    count: number;
};

export const fetchViecLamMoi = async () => {
    const { data } = await http.get(`${API_ENDPOINTS.VIECLAM_NEWEST}`);
    console.log(data);
    return {
        viecLams: data.viecLamList.data as unknown as ViecLam[],
        count: data.viecLamList.total,
    };
};

export const useFetchViecLamMoi = () => {
    return useQuery<NewestVieclams, Error>(
        [API_ENDPOINTS.VIECLAM_NEWEST],
        () => fetchViecLamMoi(),
        { keepPreviousData: true },
    );
};
