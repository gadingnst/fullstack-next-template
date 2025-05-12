'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="base-container min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0b0e14] dark:via-[#0f131a] dark:to-[#11151d] text-foreground">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-8 pt-24 pb-12 gap-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={42}
          className="dark:invert"
          priority
        />
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Fullstack&nbsp;Next&nbsp;Template
        </h1>
        <p className="max-w-xl text-base sm:text-lg opacity-80">
          Boilerplate Next.js + TypeScript + TailwindCSS dengan module alias,
          SVGR, ESLint, Husky, dan workflow Vercel siap pakai.
        </p>

        {/* Credit */}
        <p className="text-xs sm:text-sm opacity-60">
          by{' '}
          <Link
            href="https://gading.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Gading&nbsp;Nasution
          </Link>
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            href="https://github.com/gadingnst/fullstack-next-template"
            target="_blank"
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            ⭐ Star on GitHub
          </Link>
          <Link
            href="https://vercel.com/new/git/external?repository-url=https://github.com/gadingnst/fullstack-next-template"
            target="_blank"
            className="rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            🚀 Deploy
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 sm:px-20 py-16 bg-white dark:bg-[#181c23]">
        <h2 className="text-2xl font-semibold text-center mb-10">Key Features</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-sm leading-relaxed">
          <li className="p-4 rounded-lg bg-black/5 dark:bg-white/5">
            ⚛️ Next.js App Dir + TypeScript
          </li>
          <li className="p-4 rounded-lg bg-black/5 dark:bg-white/5">
            🎨 TailwindCSS pre-setup
          </li>
          <li className="p-4 rounded-lg bg-black/5 dark:bg-white/5">
            🛠️ SVGR for SVG → React
          </li>
          <li className="p-4 rounded-lg bg-black/5 dark:bg-white/5">
            🚦 ESLint preset & rules
          </li>
          <li className="p-4 rounded-lg bg-black/5 dark:bg-white/5">
            🔗 @/ Path Alias
          </li>
        </ul>
      </section>

      {/* Getting Started */}
      <section className="px-8 sm:px-20 py-16">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Getting Started
        </h2>
        <pre className="bg-black text-white text-sm rounded-lg p-6 overflow-auto whitespace-pre-line">
          git clone https://github.com/gadingnst/fullstack-next-template.git<br />
          cd fullstack-next-template<br />
          npm install<br />
          npm run dev
        </pre>
      </section>

      {/* Footer */}
      <footer className="py-8 flex flex-wrap justify-center gap-6 text-sm opacity-70">
        <Link href="https://nextjs.org/docs" target="_blank">
          📚 Next.js Docs
        </Link>
      </footer>
    </div>
  );
}
