"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { josephinNormal } from "./fonts";

const FloatingInstallButton = ({ className }: { className?: string }) => {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null;
  }

  return (
    <Link
      href="/install"
      className={`font ${josephinNormal.className} ${className}`}
    >
      Install App
    </Link>
  );
};

export default FloatingInstallButton;
