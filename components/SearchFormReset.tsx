"use client";

import Link from "next/link";
import { X } from "lucide-react";

export default function SearchFormReset() {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link
        href="/"
        className="search-btn text-white"
        aria-label="Search reset"
      >
        <X className="size-5" />
      </Link>
    </button>
  );
}
