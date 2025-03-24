"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ logo, imagePath }) => {
  const [hostName, setHostName] = useState("");
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostName(window.location.hostname);
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!logo || !logo.value) return null;

  const {
    logoType,
    logoText,
    logoHeight,
    logoWidth,
    fontSize,
    isBold,
    isItalic,
  } = logo.value;

  const imageSrc = `${imagePath}/${logo.file_name}`;

  // Dynamic logo size calculations
  const getDynamicSize = useCallback(() => {
    const height =
      windowWidth < 768
        ? Math.min(40, logoHeight)
        : windowWidth < 1200
        ? Math.min(Math.floor(logoHeight * 0.85), logoHeight)
        : logoHeight;

    const width = Math.floor(height * (logoWidth / logoHeight));

    return { height, width };
  }, [windowWidth, logoHeight, logoWidth]);

  const { height: dynamicLogoHeight, width: dynamicLogoWidth } = getDynamicSize();

  return (
    <Link
      title={`Logo - ${hostName}`}
      href="/"
      className="flex items-center justify-center mr-10"
    >
      {logoType === "image" ? (
        <Image
          height={dynamicLogoHeight}
          width={dynamicLogoWidth}
          src={imageSrc}
          title={`Logo - ${hostName}`}
          alt={`${logoText || "logo"} - ${hostName}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain max-w-[120%]"
        />
      ) : logoType === "text" ? (
        <h2
          className="text-4xl font-extrabold py-1 whitespace-nowrap"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
          }}
        >
          {logoText}
        </h2>
      ) : null}
    </Link>
  );
};

export default Logo;
