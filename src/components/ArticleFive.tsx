import {Reveal} from "./Reveal.tsx";

export default function ArticleFive() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kā šī diagramma izskatītos <span className="italic">Blog</span> projektā?</h2>
                <div className="relative w-full h-[calc(100vh-12rem)]">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-white rounded-full" />
                    <img
                        src="/images/DiagramBlog.png"
                        alt="Diagram Blog"
                        className="relative w-full h-full object-contain z-10"
                    />
                </div>
            </Reveal>
        </article>
    )
}