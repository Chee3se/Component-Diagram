import { Reveal } from "./Reveal.tsx";

export default function ArticleThree() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="up"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kādi <span className="italic">UML</span> elementi tiek izmantoti?</h2>
                <ul className="text-xl text-white space-y-4">
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Asociācija</strong>
                            <p className="text-white/90">Nosaka attiecību starp elementiem.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Kompozīcija</strong>
                            <p className="text-white/90">Nosaka, ka daļa var būt iekļauta ne vairāk kā vienā kompozītā vienlaikus.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Agregācija</strong>
                            <p className="text-white/90">Norāda, ka viens no galiem ir atzīmēts kā "koplietots", norādot, ka pastāv koplietota agregācija.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Ierobežojums</strong>
                            <p className="text-white/90">Izteikts, lai deklarētu kāda elementa semantiku.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Atkarība</strong>
                            <p className="text-white/90">Norāda, ka viens vai vairāki modeļa elementi ir atkarīgi no citiem elementiem to specifikācijā vai ieviešanā.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-flex items-center justify-center border-2 text-orange-400 border-orange-200 rounded-full w-6 h-6 mr-2 pb-2 pl-0.3 mt-1 text-5xl leading-none">•</span>
                        <div>
                            <strong>Saistības</strong>
                            <p className="text-white/90">Attiecības, kur specifiskāks elements pārmanto īpašības no vispārīgāka elementa.</p>
                        </div>
                    </li>
                </ul>
            </Reveal>
        </article>
    )
}