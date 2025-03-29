"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <Head>
                <title>is ship bad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <h1 className='text-3xl text-center mb-4'>is ship bad?</h1>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">

                    <div>
                        <input
                            type="text"
                            placeholder="enter ship name..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        {inputValue === "bad ship" ? (
                            <div>
                                Bad👎 <br />
                                Go to Southampton
                                <Image
                                    src="/thumb-down.webp"
                                    alt="Bad Ship"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        ) : inputValue === "good ship" ? (
                            <div>
                                Good👍 <br />
                                Go to Portsmouth
                                <Image
                                    src="/good-ship.jpeg"
                                    alt="Good Ship"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        ) : (
                            <div>
                                {/*<Image*/}
                                {/*    src="/ship.webp"*/}
                                {/*    alt="Ship"*/}
                                {/*    width={500}*/}
                                {/*    height={300}*/}
                                {/*/>*/}
                            </div>
                        )}
                    </div>
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                    Created by{"..."}
                </footer>
            </div>
        </>
    );
}