import { type NextPage } from "next";
import Head from "next/head";
import { Layout } from "../features/Layout";

const Landing: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Voting</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="container flex flex-col w-full items-center justify-center gap-12 px-4 py-16 ">
                    <form className="w-full">
                        <label className="label w-1/2">
                            <span className="label-text w-1/2">Titel</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Titel"
                            className="input input-bordered">
                        </input>
                    </form>
                </div>

            </Layout>
        </>
    );
};

export default Landing;
