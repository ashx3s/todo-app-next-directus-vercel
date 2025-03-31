export default async function fetcher(...args) {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error(`HTTP Error: ${res.status}`);
  }
  return await res.json();
}
