import { unstable_noStore } from "next/cache";

async function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

export default async function RandomNumber() {
  const number = await getRandomNumber();
  unstable_noStore();
  return (
    <h1 className="my-5 text-9xl">
      {number}
    </h1>
  );
}
