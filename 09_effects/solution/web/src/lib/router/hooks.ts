import { useContext } from "react";
import { NavigationContext, RouteContext } from "./context.ts";
import { Params } from "./types.ts";

export function useParams(): Params {
    return useContext(RouteContext);
}

export function useNavigate(): (to: string) => void {
    const { setPathname } = useContext(NavigationContext);
    return (to) => {
        setPathname(to);
        history.pushState({}, "", to);
    };
}
