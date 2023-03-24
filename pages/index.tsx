/* eslint-disable */

import bayanplus from "bayanplus-js";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ExampleImage from "../public/example.png";
import { minScript } from "../src/utils/min_script";
export default function Home() {
  const [input, setInput] = useState<string>();
  const [crns, setCrns] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string>();

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gradient-to-r from-indigo-500">
        <div className="flex flex-col mt-4 sm:w-5/12">
          <h1 className="text-6xl font-bold text-black text-center">
            KFUPM auto register
          </h1>
          <div className="text-center mt-2">
            <span>مفروض ماياخذ منك دقيقتين 🐝 </span>
            <p className="mt-4 text-xl text-black">
              <a
                href="https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao?hl=en"
                className="ml-2 text-blue-500 underline"
                onClick={() => {
                  bayanplus.event("Click extension link");
                }}
              >
                Run JavaScript{" "}
              </a>
              <strong>اول شي</strong> حمل الاضافه هذه في المتصفح حقك
            </p>
            <p className="mt-4 text-xl text-black">
              <strong>ثانيا</strong> ادخل ارقام المواد الي تبي تسجلهم
              <strong className="block">
                <code className="text-base">`CRNs`</code>
              </strong>
              <span>وحط بينهم فاصله</span>
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
                      setCrns(input.split(","));
                      setCopiedCode(minScript(input.split(",")));
                      bayanplus.event("Click Add CRNs Button");
                    }
                  }}
                >
                  اوكي
                </button>
                <button
                  className="bg-black text-white px-8 py-2 rounded-lg"
                  onClick={() => {
                    setCrns([]);
                    setInput("");
                    setCopiedCode("");
                  }}
                >
                  امسح
                </button>
              </div>
            </div>
            <p className="mt-4 text-xl text-black">
              <strong>ثالثا </strong>
              <span>انسخ الكود هذه وحطه في الاضافه</span>
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
                  copiedCode && navigator.clipboard.writeText(copiedCode);
                  bayanplus.event("Copied Code");
                }}
              >
                انسخ!
              </button>
            </div>
            <p className="mt-4 text-xl text-black">
              <strong>اخيرا</strong> روح صفحه التسجيل وضغط على الايقونه حقت
              الاضافه وحط الكود الي نسخته
            </p>
            <i>
              <strong>ملاحظه:</strong>
              ترا لازم تدخل صفحه التسجيل عشان يسجلك المواد، يعني لاتنتظر هو
              بنفسه يدخلك، انت اضغط الزر حق الصفحه اذا بدا التسجيل وبيسجلك
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
  );
}
