import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useLoaderData } from "react-router";
import { auth } from "~/utils/auth";

export async function loader({ params, request }: Route.LoaderArgs) {
  const sess = await auth.api.getSession({ headers: request.headers });
  return "hellop";
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const data = useLoaderData();
  console.log(data);
  return <Welcome />;
}
