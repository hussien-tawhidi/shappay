"use client";

import Image from "next/image";
import Link from "next/link";

const AdBanner = () => {
  return (
    <Link href="/brows">
      <Image src='/images/ad.jpg' alt='ad banner' width={10000} height={50} />
    </Link>
  );
};

export default AdBanner;
