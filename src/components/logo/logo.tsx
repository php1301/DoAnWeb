import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import imgL1Logo from "@public/assets/image/logo-main-black.png";
import imgL1LogoWhite from "@public/assets/image/logo-main-white.png";

const Logo: FC<{
    white?: boolean;
    height?: number;
    className?: string;
    onClick?: any;
}> = ({ white, height, className = "", ...rest }) => {
    return (
        <Link href="/">
            <a className={`d-block ${className}`} {...rest}>
                {white ? (
                    <Image src={imgL1LogoWhite} alt="" />
                ) : (
                    <Image src={imgL1Logo} alt="" />
                )}
            </a>
        </Link>
    );
};

export default Logo;
