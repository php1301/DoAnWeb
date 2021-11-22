import React from "react";
import Link from "next/link";
import PageWrapper from "@components/page-wrapper/page-wrapper";

import imgF1 from "@public/assets/image/l2/png/featured-job-logo-1.png";
import iconD from "@public/assets/image/svg/icon-dolor.svg";
import iconB from "@public/assets/image/svg/icon-briefcase.svg";
import iconL from "@public/assets/image/svg/icon-location.svg";
import { fetchViecLam, useViecLamQuery } from "@apis/ViecLam/get-vieclam";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@apis/utils/api-endpoints";
import { GetServerSideProps } from "next";
import { QueryClient } from "react-query";
import { useRouter } from "next/router";
import { HTML5Backend } from "react-dnd-html5-backend";

const JobDetails = () => {
    const { query } = useRouter();
    const { data, isLoading } = useViecLamQuery(query?.id as unknown as string);
    const { chiTietViecLam } = data.chiTietViecLam ?? {};

    return (
        <>
            <PageWrapper headerConfig={{ button: "profile" }}>
                <div className="jobDetails-section bg-default-1 pt-28 pt-lg-27 pb-xl-25 pb-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* <!-- back Button --> */}
                            <div className="col-xl-10 col-lg-11 mt-4 ml-xxl-32 ml-xl-15 dark-mode-texts">
                                <div className="mb-9">
                                    <Link href="/">
                                        <a className="d-flex align-items-center ml-4">
                                            <i className="icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8"></i>
                                            <span className="text-uppercase font-size-3 font-weight-bold text-gray">
                                                Back to job board
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            {/* <!-- back Button End --> */}
                            <div className="col-xl-9 col-lg-11 mb-8 px-xxl-15 px-xl-0">
                                <div className="bg-white rounded-4 border border-mercury shadow-9">
                                    {/* <!-- Single Featured Job --> */}
                                    <div className="pt-9 pl-sm-9 pl-5 pr-sm-9 pr-5 pb-8 border-bottom border-width-1 border-default-color light-mode-texts">
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/* <!-- media start --> */}
                                                <div className="media align-items-center">
                                                    {/* <!-- media logo start --> */}
                                                    <div className="square-72 d-block mr-8">
                                                        <img
                                                            src={imgF1.src}
                                                            alt=""
                                                        />
                                                    </div>
                                                    {/* <!-- media logo end --> */}
                                                    {/* <!-- media texts start --> */}
                                                    <div>
                                                        <h3 className="font-size-6 mb-0">
                                                            {
                                                                chiTietViecLam?.tenVIecLam
                                                            }
                                                        </h3>
                                                        <span className="font-size-3 text-gray line-height-2">
                                                            AirBnb
                                                        </span>
                                                    </div>
                                                    {/* <!-- media texts end --> */}
                                                </div>
                                                {/* <!-- media end --> */}
                                            </div>
                                            <div className="col-md-6 text-right pt-7 pt-md-0 mt-md-n1">
                                                {/* <!-- media date start --> */}
                                                <div className="media justify-content-md-end">
                                                    <p className="font-size-4 text-gray mb-0">
                                                        19 June 2020
                                                    </p>
                                                </div>
                                                {/* <!-- media date end --> */}
                                            </div>
                                        </div>
                                        <div className="row pt-9">
                                            <div className="col-12">
                                                {/* <!-- card-btn-group start --> */}
                                                <div className="card-btn-group">
                                                    <Link href="/#">
                                                        <a className="btn btn-green text-uppercase btn-medium rounded-3 w-180 mr-4 mb-5">
                                                            Apply to this job
                                                        </a>
                                                    </Link>
                                                    <Link href="/#">
                                                        <a className="btn btn-outline-mercury text-black-2 text-uppercase h-px-48 rounded-3 mb-5 px-5">
                                                            <i className="icon icon-bookmark-2 font-weight-bold mr-4 font-size-4"></i>{" "}
                                                            Save job
                                                        </a>
                                                    </Link>
                                                </div>
                                                {/* <!-- card-btn-group end --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Featured Job --> */}
                                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 border-bottom border-width-1 border-default-color light-mode-texts">
                                        <div className="row mb-7">
                                            <div className="col-md-4 mb-md-0 mb-6">
                                                <div className="media justify-content-md-start">
                                                    <div className="image mr-5">
                                                        <img
                                                            src={iconD}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                                                        {chiTietViecLam?.tuoi}{" "}
                                                        tuổi
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pr-lg-0 pl-lg-10 mb-md-0 mb-6">
                                                <div className="media justify-content-md-start">
                                                    <div className="image mr-5">
                                                        <img
                                                            src={iconB}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="font-weight-semibold font-size-5 text-black-2 mb-0">
                                                        {
                                                            chiTietViecLam?.tinhChat
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-lg-0">
                                                <div className="media justify-content-md-start">
                                                    <div className="image mr-5">
                                                        <img
                                                            src={iconL}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p className="font-size-5 text-gray mb-0">
                                                        {chiTietViecLam?.diaChi}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 mb-lg-0 mb-10">
                                                <div className="">
                                                    <span className="font-size-4 d-block mb-4 text-gray">
                                                        Chức vụ
                                                    </span>
                                                    <h6 className="font-size-5 text-black-2 font-weight-semibold mb-9">
                                                        {chiTietViecLam?.chucVu}
                                                    </h6>
                                                </div>
                                                <div className="tags">
                                                    <p className="font-size-4 text-gray mb-0">
                                                        Trình độ tối thiểu
                                                    </p>
                                                    <ul className="list-unstyled mr-n3 mb-0">
                                                        <li className="d-block font-size-4 text-black-2 mt-2">
                                                            {
                                                                chiTietViecLam?.bangCap
                                                            }
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pr-lg-0 pl-lg-10 mb-lg-0 mb-8">
                                                <div className="">
                                                    <span className="font-size-4 d-block mb-4 text-gray">
                                                        Thời hạn đăng ký
                                                    </span>
                                                    <h6 className="font-size-3 text-black-2 font-weight-semibold mb-9">
                                                        {chiTietViecLam?.ngaydang.slice(
                                                            0,
                                                            10,
                                                        )}{" "}
                                                        đến{" "}
                                                        {chiTietViecLam?.ngayhethang.slice(
                                                            0,
                                                            10,
                                                        )}
                                                    </h6>
                                                </div>
                                                <div className="tags">
                                                    <p className="font-size-4 text-gray mb-3">
                                                        Technical Skill
                                                    </p>
                                                    <ul className="d-flex list-unstyled flex-wrap pr-sm-25 pr-md-0">
                                                        <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                            Editing
                                                        </li>
                                                        <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                            Wire-framing
                                                        </li>
                                                        <li className="bg-regent-opacity-15 mr-md-0 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                            XD
                                                        </li>
                                                        <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                            User Persona
                                                        </li>
                                                        <li className="bg-regent-opacity-15 mr-3 h-px-33 text-center flex-all-center rounded-3 px-5 font-size-3 text-black-2 mt-2">
                                                            Sketch
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-lg-0">
                                                <div className="">
                                                    <span className="font-size-4 d-block mb-4 text-gray">
                                                        Số lượng tuyển
                                                    </span>
                                                    <h6 className="font-size-5 ml-12 text-black-2 font-weight-semibold mb-0">
                                                        {
                                                            chiTietViecLam?.soLuong
                                                        }{" "}
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-10 light-mode-texts">
                                        <div className="row">
                                            <div className="col-xl-11 col-md-12 pr-xxl-9 pr-xl-10 pr-lg-20">
                                                <div className="">
                                                    <p className="mb-4 font-size-4 text-gray">
                                                        CHI TIẾT CÔNG VIỆC
                                                    </p>
                                                    <span className="font-size-4 font-weight-semibold text-black-2 mb-7">
                                                        Yêu Cầu:
                                                    </span>
                                                    <p className="font-size-4 text-black-2 mb-7">
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: chiTietViecLam?.yeuCau,
                                                            }}
                                                        />
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <div className="">
                                                        <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                                                            Vị Trí:
                                                        </span>
                                                        <span className="font-size-4 ml-2 text-black-2 mb-4">
                                                            {
                                                                chiTietViecLam?.viTri
                                                            }
                                                        </span>
                                                    </div>

                                                    <div className="">
                                                        <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                                                            Giới tính:
                                                        </span>
                                                        <span className="font-size-4 ml-2 text-black-2 mb-4">
                                                            {
                                                                chiTietViecLam?.gioiTinh
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="">
                                                        <span className="font-size-4 font-weight-semibold text-black-2 mb-4">
                                                            Kinh nghiệm:
                                                        </span>
                                                        <span className="font-size-4 ml-2 text-black-2 mb-4">
                                                            {
                                                                chiTietViecLam?.kinhNghiem
                                                            }{" "}
                                                            năm
                                                        </span>
                                                    </div>
                                                    <p className="font-size-4 font-weight-semibold text-black-2 mb-7">
                                                        Mô tả công việc:
                                                    </p>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: chiTietViecLam?.moTa,
                                                        }}
                                                    />
                                                    <Link href="/#">
                                                        <a className="btn btn-green text-uppercase btn-medium w-180 h-px-48 rounded-3 mr-4 mt-6">
                                                            Apply to this job
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};
export default JobDetails;
export const getServerSideProps: GetServerSideProps = async ({
    locale,
    query,
}) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(
        [query?.id as unknown as string],
        async () => fetchViecLam(query?.id as unknown as string),
    );
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
