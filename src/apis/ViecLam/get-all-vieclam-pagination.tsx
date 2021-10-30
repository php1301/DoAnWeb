import { ViecLamsQueryOptionsType, Filter, ViecLam } from "@apis/types";
import http from "@apis/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";
import _ from "lodash";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
type PaginatedViecLam = {
    viecLams: ViecLam[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    filter: Filter;
    favorites?: string[];
};

const fetchViecLams = async (options: ViecLamsQueryOptionsType) => {
    const allParams = _.omitBy(options, _.isNil);
    const {
        data: { products, pagination, favorites },
    } = await http.get(
        `https://joolux-demo.site/client/products/get-overview`,
        {
            params: {
                page: options?.page || "1",
                ...allParams,
            },
        },
    );
    const { data: filter } = await http.get(
        `https://joolux-demo.site/client/products/get-new-filter`,
        {
            params: allParams,
        },
    );
    return {
        viecLams: products || [],
        pagination: pagination || [],
        filter: filter || [],
        favorites: favorites || [],
    };
};

const useViecLamPaginationQuery = (
    options: ViecLamsQueryOptionsType,
    key: string,
) => {
    return useQuery<PaginatedViecLam, Error>(
        [API_ENDPOINTS.PRODUCTS, key],
        () => fetchViecLams(options),
        { keepPreviousData: true },
    );
};

export { useViecLamPaginationQuery, fetchViecLams };
