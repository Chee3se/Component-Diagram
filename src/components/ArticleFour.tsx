import {Reveal} from "./Reveal.tsx";

export default function ArticleFour() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-rose-600 to-pink-600 text-white flex items-center">
            <Reveal
                className="max-w-6xl mx-auto px-4"
                direction="left"
            >
                <h2 className="text-6xl font-extrabold mb-6">Piemēri ar skaidrojumiem</h2>
                <div className="flex gap-6">
                    <img
                        src="/images/UML.png"
                        alt="UML diagram example"
                        className="w-1/2 h-[calc(100vh-12rem)] object-contain rounded-xl shadow-xl"
                    />
                    <img
                        src="/images/DiagramExample.png"
                        alt="Diagram example"
                        className="w-1/2 h-[calc(100vh-12rem)] object-contain bg-white rounded-xl shadow-xl"
                    />
                </div>
            </Reveal>
        </article>
    )
}