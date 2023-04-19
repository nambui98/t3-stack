import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";

const Poll: NextPage = () => {
    const router = useRouter();
    const { pollId } = router.query;
    const { data, isLoading } = api.poll.getPoll.useQuery({ pollId: pollId as string }, { enabled: !!pollId });
    const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>()

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-white flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                {
                    isLoading ? (
                        <>Loading...</>
                    ) : (
                        <>
                            <h1 className="text-4xl">
                                {
                                    data?.question
                                }
                            </h1>
                            <form>
                                {
                                    data?.answers.map((answer) => {
                                        const inputId = `input-${answer.id}`;
                                        return <fieldset key={answer.id}>
                                            <input type="radio" id={inputId}
                                                checked={selectedAnswer === answer.id}
                                                onChange={e => setSelectedAnswer(e.target.value)}
                                                value={answer.id} />
                                            <label htmlFor={inputId}>{answer.text}</label>
                                        </fieldset>
                                    })
                                }
                            </form>

                        </>

                    )
                }
                {
                }
            </main>
        </>
    );
};

export default Poll;

