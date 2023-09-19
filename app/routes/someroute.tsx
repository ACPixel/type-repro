import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export default function Index() {
  const { badge } = useLoaderData<typeof loader>();
  if (badge) {
    console.log(badge.ID);
    //                ^?
  }
  return <div className="text-black">{typeof badge.ID}</div>;
}

type Badge = {
  ID: number;
  Url: string;
  Artist: string;
  unlocked_after: number;
};

export async function loader() {
  let badge: Badge = {
    ID: 1,
    Url: "a",
    Artist: "a",
    unlocked_after: 2,
  };

  return json({ badge });
}
