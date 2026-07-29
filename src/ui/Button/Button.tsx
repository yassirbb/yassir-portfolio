import Link, { type LinkProps } from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "small";
  variant?: "primary" | "secondary";
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type InternalLinkProps = CommonProps &
  Omit<LinkProps, "className" | "href"> & {
    as: "link";
    href: LinkProps["href"];
  };

type ExternalLinkProps = CommonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "href"
  > & {
    as: "anchor";
    href: string;
  };

export type ButtonProps =
  | NativeButtonProps
  | InternalLinkProps
  | ExternalLinkProps;

function omitElementType<T extends { as?: unknown }>(
  props: T
): Omit<T, "as"> {
  const elementProps = { ...props };
  delete elementProps.as;
  return elementProps;
}

export function Button({
  className,
  size = "default",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [
    "button",
    `button-${variant}`,
    size === "small" ? "button-small" : "",
    className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  if (props.as === "link") {
    return (
      <Link
        className={classes}
        {...omitElementType(props)}
      />
    );
  }

  if (props.as === "anchor") {
    return (
      <a
        className={classes}
        {...omitElementType(props)}
      />
    );
  }

  return (
    <button
      className={classes}
      type={props.type ?? "button"}
      {...omitElementType(props)}
    />
  );
}
