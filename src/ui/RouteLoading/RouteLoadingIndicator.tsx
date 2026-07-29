"use client";

import { useLinkStatus } from "next/link";
import "./route-loading.css";

export function RouteLoadingIndicator() {
  const { pending } = useLinkStatus();

  return (
    <span
      className={[
        "route-loading",
        pending ? "is-pending" : ""
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <span className="route-loading__bar" />
    </span>
  );
}
