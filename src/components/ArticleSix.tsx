import {Reveal} from "./Reveal.tsx";

export default function ArticleSix() {
    return (
        <article className="snap-start h-screen bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white flex items-center">
            <Reveal
                className="max-w-4xl mx-auto"
                direction="right"
            >
                <h2 className="text-6xl font-extrabold mb-6">Uzdevums:</h2>
                <p className="text-xl text-white/90 font-medium">uztaisīt komponenšu diagrammu, kurā eksistē šādas komponentes: App, Todo, AddTodo, TodoController, Database</p>

            </Reveal>
        </article>
    )
}