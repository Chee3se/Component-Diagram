import ArticleOne from "./components/ArticleOne.tsx";
import ArticleTwo from "./components/ArticleTwo.tsx";
import ArticleThree from "./components/ArticleThree.tsx";
import ArticleFour from "./components/ArticleFour.tsx";

function App() {
  return (
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
          <ArticleOne />
          <ArticleTwo />
          <ArticleThree />
          <ArticleFour />
      </main>
  );
}

export default App;
