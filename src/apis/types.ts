export type ViecLam = {
    id: number;
    tenVIecLam: string;
    id_cty: number;
    id_nn: number;
    id_kv: number;
    ngaydang: string;
    ngayhethang: string;
    mucLuong: number;
    tinhChat: string;
    moTa: string;
    yeuCau: string;
    soLuong: number;
    diaChi: string;
    bangCap: string;
    kinhNghiem: string;
    viTri: string;
    chucVu: string;
    gioiTinh: string;
    tuoi: string;
    trangthai: number;
    created_at: Date;
    updated_at: Date;
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
