import {Reveal} from "./Reveal.tsx";

export default function ArticleFour() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-rose-600 to-pink-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="left"
            >
                <h2 className="text-6xl font-extrabold mb-6">Piemēri ar skaidrojumiem</h2>
            </Reveal>
        </article>
    )
}