"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Head from "next/head";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <Head>
                <title>is ship bad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="favicon" href="/favicon.ico"/>
            </Head>

            <div
                className="grid grid-rows-[auto_1fr_auto] min-h-screen items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <header className="row-start-1 w-full">
                    <h1 className='text-3xl text-center mb-4'>is ship bad?</h1>
                </header>


                <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full justify-start">
                    <div className="outerDiv flex flex-col items-center justify-center w-full">

                        <input
                            type="text"
                            placeholder="enter ship name..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />

                        <div>
                            {inputValue === "bad ship" ? (
                                <div>
                                    Bad👎 <br/>
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
                                    Good👍 <br/>
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
                    </div>
                </main>
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full">
                    Created by{"..."}
                </footer>
            </div>
        </>
    );
}