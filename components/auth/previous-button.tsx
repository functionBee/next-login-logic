"use client";

import Link from "next/link";

interface PreviousButtonProps {
  href: string;
  label: string;
  className?: string;
}

export const PreviousButton = ({
  href,
  label,
  className,
}: PreviousButtonProps) => {
  return (
    <>
      <Link href={href} className={className}>
        {label}
      </Link>
    </>
  );
};
