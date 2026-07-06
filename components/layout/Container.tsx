import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  variant?: "narrow" | "standard" | "wide" | "full";
};

export default function Container({
  children,
  variant = "standard",
}: ContainerProps) {
  return <div className={`container container--${variant}`}>{children}</div>;
}
