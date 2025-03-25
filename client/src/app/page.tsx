

const loader = async () => {
  const path = "api/home-page"
  const BASE_URL = "http://localhost:1337"
  const url = new URL(path, BASE_URL);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return {...data.data}
  
}

export default async function HomeRoute() {
  const data = await loader()

  
  return <div>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
  </div>;
}
