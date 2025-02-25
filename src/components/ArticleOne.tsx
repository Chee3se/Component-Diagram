import {Reveal} from "./Reveal.tsx";

export default function ArticleOne() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="left"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kas tā ir?</h2>
                <p className="text-xl text-white/90">
                    Komponenšu diagramma vizualizē programmatūras sistēmas arhitektūru, parādot, kā dažādas sastāvdaļas (komponenti) mijiedarbojas, kā tās ir savienotas un kā tās izmanto interfeisus vai atkarības.
                </p>
            </Reveal>
        </article>
    )
}