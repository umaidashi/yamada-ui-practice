import { Container } from '@yamada-ui/react'
import Head from 'next/head'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
	children: React.ReactNode
	title?: string
	description?: string
}

export default function Layout(props: LayoutProps) {
	return (
		<>
			<Head>
				<title>{props.title ?? 'Yamada-ui practice'}</title>
				<meta
					name='description'
					content={
						props.description ?? "oidon's yamada-ui practice with nextjs"
					}
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={inter.className}>
				<Container>{props.children}</Container>
			</main>
		</>
	)
}
