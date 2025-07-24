import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

export const metadata = {
  title: '前端学习指南',
  description: '从零基础到专家的完整前端开发学习路径，涵盖HTML、CSS、JavaScript、React、Vue等前端技术栈',
  keywords: '前端开发,学习指南,HTML,CSS,JavaScript,React,Vue,前端教程',
  authors: [{ name: '前端学习指南' }],
  openGraph: {
    title: '前端学习指南 - 完整的前端开发学习路径',
    description: '从零基础到专家的完整前端开发学习路径，涵盖HTML、CSS、JavaScript、React、Vue等前端技术栈',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '前端学习指南',
    description: '从零基础到专家的完整前端开发学习路径',
  }
}

const banner = (
  <Banner storageKey="frontend-learning-guide-v1">
    🚀 欢迎来到前端学习指南！这是一份从零基础到专家的完整学习路径
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}>🚀</span>
        <b>前端学习指南</b>
      </div>
    }
  />
)

const footer = (
  <Footer>
    <div>
      MIT {new Date().getFullYear()} © 前端学习指南
    </div>
    <div>
      <a href="https://github.com/hongfaqiu/frontend-learning-guide" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </Footer>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-CN"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#007bff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/hongfaqiu/frontend-learning-guide/tree/main/frontend-learning-docs"
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true
          }}
          toc={{
            title: '目录',
            backToTop: true
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
