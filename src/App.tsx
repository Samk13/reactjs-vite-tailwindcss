import React from 'react'
import Avatar from './components/Avatar'

function App() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Welcome to
          </h2>
          <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
            reactjs-vite-tailwindcss-boilerplate
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
          <p className="mt-5">
            <Avatar
              size="large"
              src="https://avatars.githubusercontent.com/u/36583694?s=400&u=acd6d4609d44919072a0a2c15c53806f9d543ff4&v=4"
            />

            <p className="mt-10 font-[600] text-[250px] font-bold bg-[#1da1f1] rounded-[100px]">
              test
            </p>
            <div>
              <samp className="bg-green-200">asasdd</samp>
              <details>
                asdasd
                <summary className="text-green-700">jdadflsshad</summary>
              </details>
              <abbr className="cursor-help" title="asdasdh">
                test
              </abbr>
              <kbd className="bg-blue-200">test</kbd>
              <samp>
                test asd Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vitae dolorem sunt asperiores praesentium ratione laborum?
                Voluptatibus adipisci quis, corrupti maiores reprehenderit atque
                incidunt quae? Distinctio facilis officiis dicta quidem ipsa?
              </samp>
            </div>
            <p className="mt-10 font-[600] text-[250px] font-bold bg-[#1da1f1] rounded-[100px]">
              test
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
