import { json } from "@remix-run/cloudflare"; //types
import { useLoaderData } from "@remix-run/react"; //types

export default function Index() {
  const { badge } = useLoaderData<typeof loader>();
  if (badge) {
    // ^?
    console.log(badge.ID);
    //                ^?
  }
  return <div className="text-black">{typeof badge.ID}</div>;
}

export async function loader() {
  let badge = {
    ID: 1,
    Url: "a",
    Artist: "a",
    unlocked_after: 2,
  };

  return json({ badge });
}
