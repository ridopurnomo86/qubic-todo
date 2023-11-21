import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="absolute inset-0 top-20 left-0 -z-10 h-[70%] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <main className="mx-auto container min-h-screen relative w-full">
        <div className="text-center">
          <h1 className="text-neutral-900 whitespace-normal text-center font-bold antialiased text-2xl md:text-6xl mb-4 flex items-center justify-center flex-wrap">
            Track your&nbsp;<span className="text-cyan-600">productivity</span>
            &nbsp;and&nbsp;
            <span className="text-cyan-600">research</span>
            &nbsp;online.
          </h1>
          <p className="text-neutral-600 font-medium antialiased text-md">
            Solving problems with drowsiness, apathy, lack of motivation and
            other factors that do not allow you to grow.
          </p>
        </div>
      </main>
    </>
  );
}
