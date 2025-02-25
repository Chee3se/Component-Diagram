import {Reveal} from "./Reveal.tsx";

export default function ArticleFive() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kā šī diagramma izskatītos <span className="italic">Blog</span> projektā?</h2>
            </Reveal>
        </article>
    )
}