"use client";

import { useState } from "react";

export default function API({ title, url, desc, method, paramNeeded }) {
  const [data, setData] = new useState("Hit the Request to see it in action");
  const [body, setBody] = new useState({
    title: "",
    description: ""
  });
  const [path, setPath] = new useState('')

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  const handlePath = (e) => {
    setPath(e.target.value)
}

  const inputNeed = method == "POST" || method == "PUT" ? true : false;


  async function handleClick() {
    try {
        const fullUrl = url+path
        console.log(fullUrl)
      const result = await fetch(fullUrl, {
        method: method,
        ...(method === 'POST' || method === 'PUT' ? { body: JSON.stringify(body) } : {}),
      });

      const parsed = await result.json();
      console.log(result)
      setData(parsed);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="relative flex flex-col justify-center bg-slate-600 p-4 m-4 rounded-md">
        <div></div>
        <p className="font-bold text-2xl">{title}</p>

        <p className="font-mono text-1xl text-red-500">{url}{path}</p>

        <p className="font-light text-1xl">{desc}</p>

        <button
          className="bg-red-500 text-white font-bold absolute top-2 right-2 rounded-full px-4 py-2"
          onClick={handleClick}
        >
          {method}
        </button>

        {inputNeed ? (
          <div className="mt-2" id="body">
            <div className="mb-4">
              <label className="block text-lg font-medium text-white mb-2">
                Your Note Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-slate-800 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Hello World"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-white mb-2">
                Your Note
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="w-full bg-slate-800 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Just wanted to say Hello World, its been a long time "
                onChange={handleChange}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        { paramNeeded ? (
            <div className="mt-2">
                <div className="mb-4">
              <label className="block text-lg font-medium text-white mb-2">
                Enter Note Id
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-slate-800 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="241820410290192"
                onChange={handlePath}
              />
            </div>
            </div>
        ) : (<></>)}

        <div className="bg-slate-800 rounded p-4 mt-2">
          <pre className="font-mono overflow-auto max-h-52">
            {data ? JSON.stringify(data, null, 2) : "No data available"}
          </pre>
        </div>
      </div>
    </>
  );
}
