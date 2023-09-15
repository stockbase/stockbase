import { log } from "logger";

export const metadata = {
  title: "Stockbase",
};

export default function Home(): JSX.Element {
  log("Hey! This is the Stockbase homepage.");

  return (
    <div className="container">
      {/* <h1 className="title">
        Stockbase <br />
        <span>Kitchen Sink</span>
      </h1> */}
      {/* <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p> */}
    </div>
  );
}
