export default function DisplaySanitizedSection({
  bgColor = "bg-blue-900",
  sectionData,
}) {
  if (!sectionData) {
    return <p>No Section Data has been passed to this component</p>;
  }
  return (
    <section className={`${bgColor} p-4 rounded-md my-8`}>
      <h2 className="text-2xl font-semibold">{sectionData.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: sectionData.content }}></div>
    </section>
  );
}
