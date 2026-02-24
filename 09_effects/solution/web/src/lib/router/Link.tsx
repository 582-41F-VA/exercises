import { MouseEvent, ReactNode } from "react";
import { useNavigate } from "./hooks.ts";

type LinkProps = {
    to: string;
    children: ReactNode;
};

/**
 * When clicked, navigate `to` the given pathname.
 */
export function Link({ to, children }: LinkProps) {
    const navigate = useNavigate();
    function handleClick(e: MouseEvent): void {
        e.preventDefault();
        navigate(to);
    }
    return <a href={to} onClick={handleClick}>{children}</a>;
}
