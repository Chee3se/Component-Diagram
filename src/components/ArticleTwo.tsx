import {Reveal} from "./Reveal.tsx";

export default function ArticleTwo() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kad to izmanto?</h2>
                <p className="text-xl text-white/90">
                    Kad tu vēlies attēlot savu sistēmu kā komponentes un vēlies parādīt to savstarpējās attiecības.
                </p>
            </Reveal>
        </article>
    )
}