import {Reveal} from "./Reveal.tsx";

export default function ArticleFour() {
    return (
        <article className="snap-start h-screen text-black flex items-center">
                    <Reveal
                        className="max-w-4xl mx-auto"
                        direction="left"
                    >
                        <h2 className="text-6xl font-extrabold mb-6 ">UML diagramma</h2>
                        <img src="/images/UML.png"></img>
                    </Reveal>
                </article>
    )
}