/* eslint-disable no-useless-escape */
import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import GlobalContext from "@contexts/global-context";
import { useSignUpMutation, SignUpType } from "@apis/auth/use-signup";
import { useForm } from "react-hook-form";
const ModalStyled = styled(Modal)`
    /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = (props) => {
    const [showPassFirst, setShowPassFirst] = useState(true);
    const [showPassSecond, setShowPassSecond] = useState(true);
    const { mutate: login, isLoading } = useSignUpMutation();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpType>({
        mode: "all",
    });
    const newPassword = useRef({});
    newPassword.current = watch("password", "");
    const gContext = useContext(GlobalContext);
    const handleClose = () => {
        gContext.toggleSignUpModal();
    };
    const handleSignIn = () => {
        handleClose();
        gContext.toggleSignInModal();
    };

    const togglePasswordFirst = () => {
        setShowPassFirst(!showPassFirst);
    };

    const togglePasswordSecond = () => {
        setShowPassSecond(!showPassSecond);
    };
    function onSubmit({
        name,
        email,
        password,
        password_confirmation,
        agree,
    }: SignUpType) {
        login({
            name,
            email,
            password,
            password_confirmation,
            agree,
        });
    }
    return (
        <ModalStyled
            {...props}
            size="lg"
            centered
            show={gContext.signUpModalVisible}
            onHide={gContext.toggleSignUpModal}
        >
            <Modal.Body className="p-0">
                <button
                    type="button"
                    className="circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10"
                    onClick={handleClose}
                >
                    <i className="fas fa-times"></i>
                </button>
                <div className="login-modal-main bg-white rounded-8 overflow-hidden">
                    <div className="row no-gutters">
                        <div className="col-lg-5 col-md-6">
                            <div className="pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts">
                                <div className="pb-9">
                                    <h3 className="font-size-8 text-white line-height-reset pb-4 line-height-1p4">
                                        Create a free account today
                                    </h3>
                                    <p className="mb-0 font-size-4 text-white">
                                        Create your account to continue and
                                        explore new jobs.
                                    </p>
                                </div>
                                <div className="border-top border-default-color-2 mt-auto">
                                    <div className="d-flex mx-n9 pt-6 flex-xs-row flex-column">
                                        <div className="pt-5 px-9">
                                            <h3 className="font-size-7 text-white">
                                                295
                                            </h3>
                                            <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                                                New jobs posted today
                                            </p>
                                        </div>
                                        <div className="pt-5 px-9">
                                            <h3 className="font-size-7 text-white">
                                                14
                                            </h3>
                                            <p className="font-size-3 text-white gr-opacity-5 line-height-1p4">
                                                New companies registered
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="bg-white-2 h-100 px-11 pt-11 pb-7">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    noValidate
                                >
                                    <div className="form-group">
                                        <label
                                            htmlFor="name"
                                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                                        >
                                            Name
                                        </label>
                                        <input
                                            {...register("name", {
                                                required: "Yêu cầu nhập tên",
                                            })}
                                            type="text"
                                            className="form-control"
                                            placeholder="Nguyễn Văn A"
                                            id="name"
                                        />
                                        {errors.name?.message && (
                                            <p className="my-2 text-xs text-red-500">
                                                {errors.name?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="email"
                                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Yêu cầu nhập email",
                                                pattern: {
                                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Format email sai",
                                                },
                                            })}
                                            type="email"
                                            className="form-control"
                                            placeholder="example@gmail.com"
                                            id="email"
                                        />
                                        {errors.email?.message && (
                                            <p className="my-2 text-xs text-red-500">
                                                {errors.email?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="password"
                                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                                        >
                                            Password
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                type={
                                                    showPassFirst
                                                        ? "password"
                                                        : "text"
                                                }
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter password"
                                                {...register("password", {
                                                    required:
                                                        "Thông tin bắt buộc",
                                                    minLength: {
                                                        value: 4,
                                                        message:
                                                            "Mật khẩu phải có ít nhất 4 kí tự",
                                                    },
                                                })}
                                            />
                                            <a
                                                href="/#"
                                                className="show-password pos-abs-cr fas mr-6 text-black-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    togglePasswordFirst();
                                                }}
                                            >
                                                <span className="d-none">
                                                    none
                                                </span>
                                            </a>
                                        </div>
                                        {errors.password?.message && (
                                            <p className="my-2 text-xs text-red-500">
                                                {errors.password?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="font-size-4 text-black-2 font-weight-semibold line-height-reset"
                                        >
                                            Confirm Password
                                        </label>
                                        <div className="position-relative">
                                            <input
                                                type={
                                                    showPassSecond
                                                        ? "password"
                                                        : "text"
                                                }
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Enter password"
                                                {...register(
                                                    "password_confirmation",
                                                    {
                                                        required:
                                                            "Thông tin bắt buộc",
                                                        validate: (value) =>
                                                            value ===
                                                                newPassword.current ||
                                                            "Mật khẩu xác nhận chưa giống",
                                                    },
                                                )}
                                            />
                                            {errors.password_confirmation
                                                ?.message && (
                                                <p className="my-2 text-xs text-red-500">
                                                    {
                                                        errors
                                                            .password_confirmation
                                                            ?.message
                                                    }
                                                </p>
                                            )}
                                            <a
                                                href="/#"
                                                className="show-password pos-abs-cr fas mr-6 text-black-2"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    togglePasswordSecond();
                                                }}
                                            >
                                                <span className="d-none">
                                                    none
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex flex-wrap justify-content-between mb-1">
                                        <label
                                            htmlFor="terms-check2"
                                            className="gr-check-input d-flex  mr-3"
                                        >
                                            <input
                                                className="d-none"
                                                type="checkbox"
                                                id="terms-check2"
                                                {...register("agree", {
                                                    required:
                                                        "Thông tin bắt buộc",
                                                })}
                                            />
                                            <span className="checkbox mr-5"></span>
                                            <span className="font-size-3 mb-0 line-height-reset d-block">
                                                Agree to the{" "}
                                                <a
                                                    href="/#"
                                                    className="text-primary"
                                                >
                                                    Terms &amp; Conditions
                                                </a>
                                            </span>
                                        </label>
                                        <a
                                            href="/#"
                                            className="font-size-3 text-dodger line-height-reset"
                                        >
                                            Forget Password
                                        </a>
                                        {errors.agree?.message && (
                                            <p className="text-xs text-red-500">
                                                {errors.agree?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group mb-8">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="btn btn-primary btn-medium w-100 rounded-5 text-uppercase"
                                        >
                                            Sign Up{" "}
                                        </button>
                                    </div>
                                    <p className="font-size-4 text-center heading-default-color">
                                        Already have an account?{" "}
                                        <a
                                            onClick={handleSignIn}
                                            className="text-primary cursor-pointer"
                                        >
                                            Sign In
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </ModalStyled>
    );
};

export default ModalSignUp;
