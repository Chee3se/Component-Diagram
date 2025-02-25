import ArticleOne from "./components/ArticleOne.tsx";
import ArticleTwo from "./components/ArticleTwo.tsx";
import ArticleThree from "./components/ArticleThree.tsx";

function App() {
  return (
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
          <ArticleOne />
          <ArticleTwo />
          <ArticleThree />
      </main>
  );
}

export default App;
