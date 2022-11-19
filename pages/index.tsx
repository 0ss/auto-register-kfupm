/* eslint-disable */

import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { CodeSnippet } from "../src/components/CodeSnippet"
import { minScript } from "../src/utils/min_script"
import ExampleImage from "../public/example.png"
import splitbee from "@splitbee/web"
export default function Home() {
  const [input, setInput] = useState<string>()
  const [crns, setCrns] = useState<string[]>([])
  const [copiedCode, setCopiedCode] = useState<string>()
  return (
    <>
      <div className="flex justify-center min-h-screen bg-gradient-to-r from-indigo-500">
        <div className="flex flex-col mt-4 sm:w-5/12">
          <h1 className="text-6xl font-bold text-black text-center">
            KFUPM auto register
          </h1>
          <div className="text-center mt-2">
            <span>The proccess will not take 2 minutes 🐝 </span>
            <p className="mt-4 text-xl text-black">
              <strong>First</strong> you need to install this extension in your
              browser
              <a
                href="https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao?hl=en"
                className="ml-2 text-blue-500 underline"
                onClick={() => {
                  splitbee.track("Click extension link")
                }}
              >
                Run JavaScript
              </a>
            </p>
            <p className="mt-4 text-xl text-black">
              <strong>Second</strong> you need to enter the courses
              <strong>
                <code className="text-base">`CRNs`</code>
              </strong>
              you wish to register seperated by comma
            </p>
            <div>
              <textarea
                id="crns-input"
                rows={4}
                className="p-2.5 w-full bg-gray-50 rounded-lg border"
                placeholder="24006,24007,24008,24009,24006,22670"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>
              <div className="flex flex-row space-x-3 ">
                <button
                  className="bg-black text-white px-8 py-2 rounded-lg"
                  onClick={(e) => {
                    if (input) {
                      setCrns(input.split(","))
                      setCopiedCode(minScript(input.split(",")))
                      splitbee.track("Click Add CRNs Button")
                    }
                  }}
                >
                  Ok
                </button>
                <button
                  className="bg-black text-white px-8 py-2 rounded-lg"
                  onClick={() => {
                    setCrns([])
                    setInput("")
                    setCopiedCode("")
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
            <p className="mt-4 text-xl text-black">
              <strong>Third</strong> you need to copy this code and paste it in
              the extension
            </p>
            <textarea
              rows={4}
              className="p-2.5 w-full bg-gray-50 rounded-lg border"
              value={copiedCode}
            ></textarea>
            <div className="flex flex-row">
              <button
                className="bg-black text-white px-8 py-2 rounded-lg"
                onClick={() => {
                  copiedCode && navigator.clipboard.writeText(copiedCode)
                  splitbee.track("Copied Code")
                }}
              >
                Copy!
              </button>
            </div>
            <p className="mt-4 text-xl text-black">
              <strong>Finally</strong> go to the registration page and click on
              the extension icon and paste the code,click aaand you're done!
            </p>
            <i>
              <strong>Note:</strong> If you want to remove the code just delete
              it from the extension and click save again
            </i>
            <div>
              <Image
                width={Infinity}
                height={Infinity}
                alt="example image"
                src={ExampleImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
