import {Reveal} from "./Reveal.tsx";

export default function ArticleThree() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="up"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kādi uml elementi tiek izmantoti?</h2>
                <p className="text-xl text-white/90">
                    komponents, interfeiss, savienojums(bultinas), nodošanas mezgls(3d kaste), artefakti(speciāli faili, piemēram, .exe .php),
                </p>
            </Reveal>
        </article>
    )
}