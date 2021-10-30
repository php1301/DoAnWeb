export type ViecLam = {
    id: number;
};
export interface Filter {
    categories: { value: string; name: string }[];
    brands: string[];
    colors: string[];
    conditions: string[];
    promotions: string[];
    specials: string[];
    genders: string[];
    statuses: string[];
    sizes: string[];
    materials: string[];
    prices: string[];
    subCategories: {
        subCateFilterName: string;
        subCateData: [
            {
                id: number;
                value: string;
            },
        ];
    };
}

export type ViecLamsQueryOptionsType = {
    type?: string;
    page?: number;
    text?: string;
    category?: string;
    status?: string;
    limit?: number;
    categories?: string;
    brands?: string;
    colors?: string;
    conditions?: string;
    genders?: string;
    statuses?: string;
    sizes?: string;
    materials?: string;
    prices?: string;
    search?: string;
};
