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

export interface Datum {
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
}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export interface ChiTietViecLam {
    current_page: number;
    data: Datum[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

export interface CountVieclam {
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
}

export interface ToanBoKhuVuc {
    id_kv: number;
    tenKhuVuc: string;
    created_at: Date;
    updated_at: Date;
}

export interface Datum2 {
    id_kv: number;
    tenKhuVuc: string;
    created_at: Date;
    updated_at: Date;
}

export interface Link2 {
    url: string;
    label: string;
    active: boolean;
}

export interface KhuVucPaginationCount {
    current_page: number;
    data: Datum2[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link2[];
    next_page_url?: any;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

export interface Datum3 {
    id_nn: number;
    tenNganhNghe: string;
    created_at: Date;
    updated_at: Date;
}

export interface Link3 {
    url: string;
    label: string;
    active: boolean;
}

export interface NganhNghePaginationCount {
    current_page: number;
    data: Datum3[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link3[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

export interface Datum4 {
    id_kv: number;
    tenKhuVuc: string;
    created_at: Date;
    updated_at: Date;
}

export interface Link4 {
    url: string;
    label: string;
    active: boolean;
}

export interface KhuVucPagination {
    current_page: number;
    data: Datum4[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link4[];
    next_page_url?: any;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

export interface NganhNghe {
    id_nn: number;
    tenNganhNghe: string;
    created_at: Date;
    updated_at: Date;
}

export interface CongTy {
    id: number;
    tenCongTy: string;
    logo: string;
    banner: string;
    email: string;
    sdt: number;
    diaChi: string;
    id_kv: number;
    id_nn: number;
    mota_cty: string;
    created_at: Date;
    updated_at: Date;
}

export interface Datum5 {
    id: number;
    tenCongTy: string;
    logo: string;
    banner: string;
    email: string;
    sdt: number;
    diaChi: string;
    id_kv: number;
    id_nn: number;
    mota_cty: string;
    created_at: Date;
    updated_at: Date;
}

export interface Link5 {
    url: string;
    label: string;
    active: boolean;
}

export interface CongTyPagination {
    current_page: number;
    data: Datum5[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Link5[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: any;
    to: number;
    total: number;
}

export interface ToanThoiGian {
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
}

export interface LamTheoGio {
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
}

export interface CountToanThoiGian {
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
}

export interface CountLamTheoGio {
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
}

export interface SearchViecLamResponseType {
    loc: any[];
    chiTietViecLam: ChiTietViecLam;
    count_vieclam: CountVieclam[];
    toanBoKhuVuc: ToanBoKhuVuc[];
    khuVucPaginationCount: KhuVucPaginationCount;
    nganhNghePaginationCount: NganhNghePaginationCount;
    khuVucPagination: KhuVucPagination;
    nganhNghe: NganhNghe[];
    congTy: CongTy[];
    congTyPagination: CongTyPagination;
    ngayHienTai: any[];
    homQua: any[];
    toanThoiGian: ToanThoiGian[];
    banThoiGian: any[];
    lamTheoGio: LamTheoGio[];
    thucTapSinh: any[];
    count_ngayHienTai: any[];
    count_homQua: any[];
    count_toanThoiGian: CountToanThoiGian[];
    count_banThoiGian: any[];
    count_lamTheoGio: CountLamTheoGio[];
    count_thucTapSinh: any[];
}
