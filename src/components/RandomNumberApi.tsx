async function getRandomNumber() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  const response = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/random?min=0&max=100&count=1",
    {
      cache: "force-cache",
    }
  );

  const arr = await response.json();
  const number = arr[0];
  return number;
}

export default async function RandomNumberApi() {
  const number = await getRandomNumber();

  console.log("RandomNumberApi", number);

  return (
    <h1 className="my-5 text-9xl text-green-500">
      {number}
    </h1>
  );
}
