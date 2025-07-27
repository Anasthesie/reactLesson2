import { Article } from "./article";

export function BlogPosts() {
  return (
    <section className="blog">
      <h2>Latest Articles</h2>
      <Article
        title={"Mastering React Components"}
        description={
          "Components are the heart of React apps. Learn how to structure, style, and optimize them."
        }
        author={"Sarah Dev"}
      />

      <Article
        title={"Using Props Like a Pro"}
        description={
          "Make your React components reusable and dynamic with props and destructuring."
        }
        author={"John Code"}
      />

      <Article
        title={"Understanding State and Effects"}
        description={
          "Learn the fundamentals of useState and useEffect with real-lifeexamples."
        }
        author={"Lina Hooks"}
      />
    </section>
  );
}
