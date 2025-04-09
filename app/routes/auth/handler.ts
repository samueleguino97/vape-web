import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { auth } from "~/utils/auth";

export async function loader({ request }: LoaderFunctionArgs) {
  return auth.handler(request);
}
export function action({ request }: ActionFunctionArgs) {
  return auth.handler(request);
}
