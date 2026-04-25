import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { NotFoundPage } from '../../components/not-found-page'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
    try {
        const params = await props.params
        const { metadata } = await importPage(params.mdxPath)
        return metadata
    } catch (error) {
        // Return empty metadata for non-existent pages
        return {}
    }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
    try {
        const params = await props.params
        const result = await importPage(params.mdxPath)
        const { default: MDXContent, toc, metadata } = result
        return (
            <Wrapper toc={toc} metadata={metadata}>
                <MDXContent params={params} />
            </Wrapper>
        )
    } catch (error) {
        // Return a fallback for non-existent pages
        return (
            <Wrapper toc={[]} metadata={{}}>
                <NotFoundPage />
            </Wrapper>
        )
    }
}