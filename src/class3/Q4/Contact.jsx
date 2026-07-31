import React from "react";

const Contact = () => {
  return (
    <div className="h-[calc(100vh-144px)] bg-cyan-400 flex justify-center items-center flex flex-col gap-6">
      <div className="bg-cyan-800 text-cyan-400 text-8xl py-4 px-12 rounded-full">
        This is Contact Us Page
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-6">
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full w-31/100">
            Name🙎🏽:-
          </div>
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full w-68/100">
            Arghyadip Maiti
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full">
            Email💌:-
          </div>
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full">
            arghyadipmaiti44@gmail.com
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full w-38/100">
            Phone No📱:-
          </div>
          <div className="bg-cyan-800 text-cyan-400 text-4xl py-4 px-12 rounded-full w-60/100">
            9382946292
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
