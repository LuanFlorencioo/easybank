import { Text } from "@/components";
import Link from "next/link";

const Foo = () => {
  return (
    <main className="w-full min-h-screen px-5 py-10 bg-neutral-300 flex justify-center items-start">
      <div className="w-full max-w-[400px] p-5 bg-dark rounded-xl">
        <Text>
          As this application was for the purpose of learning and studying on Next.js, then this page was not developed. 
          <Link href="/" className="font-bold text-green">Click here</Link> to return to home.
        </Text>
      </div>
    </main>
  )
}

export default Foo;
