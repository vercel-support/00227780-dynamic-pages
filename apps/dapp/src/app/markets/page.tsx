export const dynamic = 'force-dynamic';

export default async function MarketsPage() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    next: {
      revalidate: 2000,
    }
  }).then(
    (response) => response.json()
  );

  return (
    <div>
      <h1>Markets</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
