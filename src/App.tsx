import ArticleOne from "./components/ArticleOne.tsx";
import ArticleTwo from "./components/ArticleTwo.tsx";
import ArticleThree from "./components/ArticleThree.tsx";
import ArticleFour from "./components/ArticleFour.tsx";
import ArticleFive from "./components/ArticleFive.tsx";

function App() {
  return (
      <main className="snap-y snap-mandatory h-screen overflow-scroll">
          <ArticleOne />
          <ArticleTwo />
          <ArticleThree />
          <ArticleFour />
          <ArticleFive />
      </main>
  );
}

export default App;
