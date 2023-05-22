import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="w-full">Home</div>
      <div className="w-full flex justify-between font-mono">
        <Link href={'/posts/1'}>POST 1</Link>
        <Link href={'/posts/2'}>POST 2</Link>
        <Link href={'/posts/3'}>POST 3</Link>
        <Link href={'/posts/4'}>POST 4</Link>
        <Link href={'/posts/5'}>POST 5</Link>
      </div>
      <div className="w-full flex font-mono">
        <Link href={'/about'}>ABOUT</Link>
      </div>
    </>
  )
}
