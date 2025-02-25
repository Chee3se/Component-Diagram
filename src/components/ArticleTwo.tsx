import {Reveal} from "./Reveal.tsx";

export default function ArticleTwo() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kad to izmanto?</h2>
                <p className="text-xl font-medium text-white/80 mb-4">
                    Kad tu vēlies attēlot savu sistēmu kā komponentes un vēlies parādīt to savstarpējās attiecības.
                </p>
                <ul className="text-xl text-white space-y-2">
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-teal-400 border-teal-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-0.5 text-5xl leading-none">•</span>
                        <span className="text-white/90">Lai būtu skaidra ideja par sistēmas fizisko uzbūvi un kā visas komponentes sader kopā.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-teal-400 border-teal-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-0.5 text-5xl leading-none">•</span>
                        <span className="text-white/90">Iespēja visualizēt kā katra komponente saistās ar citu un sadarbojas iekš konkrētas sistēmas.</span>
                    </li>
                </ul>
            </Reveal>
        </article>
    )
}