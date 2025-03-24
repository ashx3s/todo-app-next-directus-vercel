export default function PageHeader({ title, description }) {
  return (
    <header className="my-4">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p>{description}</p>
    </header>
  );
}
