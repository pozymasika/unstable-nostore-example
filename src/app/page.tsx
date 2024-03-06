import RandomNumber from "@/components/RandomNumber";
import RandomNumberApi from "@/components/RandomNumberApi";

export default function Home() {
  return (
    <main>
      <RandomNumber />
      <hr />
      <RandomNumberApi />
    </main>
  );
}
