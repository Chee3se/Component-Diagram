import {Reveal} from "./Reveal.tsx";

export default function ArticleFive() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kā šī diagramma izskatītos <span className="italic">Blog</span> projektā?</h2>
                <img
                    src="/images/DiagramBlog.png"
                    alt="Diagram Blog"
                    className="w-full h-[calc(100vh-12rem)] object-contain bg-white rounded-xl shadow-xl"
                />
            </Reveal>
        </article>
    )
}