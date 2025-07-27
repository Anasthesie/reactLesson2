export function Article({ title, description, author }) {
  return (
    <article className="post">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </article>
  );
}
