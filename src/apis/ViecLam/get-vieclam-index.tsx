import { Blog } from "@framework/types";
import http from "@apis/utils/http";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { useQuery } from "react-query";

type NewestBlogs = {
    viecLams: Blog[];
};

export const fetchViecLamIndex = async () => {
    const { data } = await http.get(`${API_ENDPOINTS.VIECLAM_INDEX}`);
    return { viecLams: data as unknown as Blog[] };
};
export const useFetchViecLamIndex = () => {
    return useQuery<NewestBlogs, Error>(
        [API_ENDPOINTS.VIECLAM_INDEX],
        () => fetchViecLamIndex(),
        { keepPreviousData: true },
    );
};
