import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

const loader = async () => {
  const data = await getHomePage()
  console.log(data);
  if (!data) notFound()
  return {...data.data}    
}

export default async function HomeRoute() {
  const data = await loader()
  const blocks = data?.blocks || []

  
  return <BlockRenderer blocks={blocks} />;
}
