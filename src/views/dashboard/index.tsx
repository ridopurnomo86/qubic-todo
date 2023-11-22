import React from "react";

const Dashboard = () => {
  return (
    <main className="mx-auto container">
      <aside>sidebar</aside>
      <div>
        <h1 className="text-xl font-medium text-neutral-900 antialiased pb-4 border-b-2 mb-4">
          Todo
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-white bg-cyan-600 hover:opacity-80 transition-all focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-md w-full sm:w-auto px-4 py-1 text-center">
            <span className="material-icons">add</span>
            New Task
          </button>
          <button className="flex items-center gap-2 text-black border bg-white hover:opacity-80 transition-all focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-md w-full sm:w-auto px-4 py-1 text-center">
            <span className="material-icons">filter_alt</span>
            Filter
          </button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
