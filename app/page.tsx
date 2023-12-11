import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl font-bold text-center mb-4">Sappy Tees</h1>
      <p className="text-sm text-center">
        <Link href="https://twitter.com/search?q=oversized%20dropped%20shoulder%20280%20gsm%208.2oz%20vintage%20retro%20inspired%20heavyweight%20luxury%20limited%20edition%2024%20hour%20exclusive%20sappy%20seal%20t-shirt" target="_blank">
          oversized dropped shoulder 280 gsm 8.2oz vintage retro inspired heavyweight luxury limited edition 24 hour exclusive sappy seal t-shirt
        </Link>
      </p>
    </main>
  )
}
