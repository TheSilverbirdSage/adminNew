import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <p>admin dash</p>
             <Link href="/admin">
        <button className="p-2 bg-blue-500 text-white rounded mt-4">
          Go to Admin Page
        </button>
      </Link>

    </div>
  );
}
