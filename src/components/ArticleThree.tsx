import { Reveal } from "./Reveal.tsx";

export default function ArticleThree() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="up"
            >
                <h2 className="text-6xl font-extrabold mb-6">Kādi uml elementi tiek izmantoti?</h2>
                <ul className="text-xl text-white/90 list-disc list-inside">
                    <li>
                        <strong>Asociācija</strong>
                        <p>Nosaka attiecību starp elementiem.</p>
                        <br />
                    </li>
                    <li>
                        <strong>Kompozīcija</strong>
                        <p>Nosaka, ka daļa var būt iekļauta ne vairāk kā vienā kompozītā vienlaikus.</p>
                        <br />
                    </li>
                    <li>
                        <strong>Agregācija</strong>
                        <p>Norāda, ka viens no galiem ir atzīmēts kā "koplietots", norādot, ka pastāv koplietota agregācija.</p>
                        <br />
                    </li>
                    <li>
                        <strong>Ierobežojums</strong>
                        <p>Izteikts, lai deklarētu kāda elementa semantiku.</p>
                        <br />
                    </li>   
                    <li>
                        <strong>Atkarība</strong>
                        <p>Norāda, ka viens vai vairāki modeļa elementi ir atkarīgi no citiem elementiem to specifikācijā vai ieviešanā.</p>
                        <br />
                    </li>
                    <li>
                        <strong>Saistības</strong>
                        <p>Attiecības, kur specifiskāks elements pārmanto īpašības no vispārīgāka elementa.</p>
                        <br />
                    </li>
                </ul>
            </Reveal>
        </article>
    )
}