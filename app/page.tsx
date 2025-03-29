"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Head from "next/head";

async function getShipData(shipName: string) {
    try {
        const response = await fetch(`/get_ship_info?ship_name=${shipName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data); // Handle the response data as needed
        // return data;

        if(data.Banned){
            if(data.Type == "FERRY"){
                return {
                    status: "Bad👎",
                    destination: "Brexit means Brexit try a small boat",
                    imageUrl: "/thumb-down.webp",
                    altText: "Bad Ship"
                };
            }
            return {
                status: "Bad👎",
                destination: "Go to Southampton",
                imageUrl: "/thumb-down.webp",
                altText: "Bad Ship"
            };
        }
        if(data.Banned == false){
            return {
                status: "Good👍",
                destination: "Go to Portsmouth",
                imageUrl: "/good-ship.jpeg",
                altText: "Good Ship"
            };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            status: "",
            destination: "",
            imageUrl: "",
            altText: ""
        };
    }
    return {
        status: "",
        destination: "",
        imageUrl: "",
        altText: ""
    };
}

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [shipData, setShipData] = useState({status: "", destination: "", imageUrl: "", altText: ""});

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        const data = await getShipData(newValue);
        setShipData(data);
    };

    return (
        <>
            <Head>
                <title>is ship bad</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="favicon" href="/favicon.ico"/>
            </Head>

            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen items-center justify-items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <header className="row-start-1 w-full">
                    <h1 className='text-3xl text-center mb-4'>is ship bad?</h1>
                </header>

                <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full justify-start">
                    <div className="outerDiv flex flex-col items-center justify-center w-full">
                        <input
                            type="text"
                            placeholder="enter ship name..."
                            value={inputValue}
                            onChange={handleInputChange}
                        />

                        <div>
                            {shipData.status && (
                                <div>
                                    {shipData.status} <br/>
                                    {shipData.destination}
                                    <Image
                                        src={shipData.imageUrl}
                                        alt={shipData.altText}
                                        width={500}
                                        height={300}
                                    />
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