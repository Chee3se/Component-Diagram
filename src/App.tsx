import { Reveal } from './components/Reveal';

function App() {
  return (
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
        <article className="snap-start h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center">
          <Reveal
              title="Kas tā ir?"
              className="max-w-4xl mx-auto"
              direction="left"
          >
            <p className="text-xl text-white/90">
              Komponenšu diagramma vizualizē programmatūras sistēmas arhitektūru, parādot, kā dažādas sastāvdaļas (komponenti) mijiedarbojas, kā tās ir savienotas un kā tās izmanto interfeisus vai atkarības.
            </p>
          </Reveal>
        </article>

        <article className="snap-start h-screen bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center">
          <Reveal
              title="Kad to izmanto?"
              className="max-w-4xl mx-auto"
              direction="right"
          >
            <p className="text-xl text-white/90">
              Kad tu vēlies attēlot savu sistēmu kā komponentes un vēlies parādīt to savstarpējās attiecības.
            </p>
          </Reveal>
        </article>

        <article className="snap-start h-screen bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center">
          <Reveal
              title="Kādi uml elementi?"
              className="max-w-4xl mx-auto"
              direction="up"
          >
            <p className="text-xl text-white/90">
              komponents, interfeiss, savienojums(bultinas), nodošanas mezgls(3d kaste), artefakti(speciāli faili, piemēram, .exe .php),
            </p>
          </Reveal>
        </article>
      </main>
  );
}

export default App;