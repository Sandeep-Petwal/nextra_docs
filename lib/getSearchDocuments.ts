import { promises as fs } from 'fs'
import path from 'path'

export interface SearchDocument {
  title: string
  url: string
  description?: string
  parent?: string
  content: string
}

const CONTENT_ROOT = path.join(process.cwd(), 'content')
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

export async function getSearchDocuments(): Promise<SearchDocument[]> {
  const files = await collectContentFiles(CONTENT_ROOT)
  const documents = await Promise.all(files.map(buildSearchDocument))
  return documents.filter((doc): doc is SearchDocument => doc !== null)
}

async function collectContentFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async entry => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return collectContentFiles(fullPath)
      }

      if (!entry.isFile()) {
        return []
      }

      if (!/\.mdx?$/.test(entry.name) || /^_meta\./.test(entry.name)) {
        return []
      }

      return [fullPath]
    })
  )

  return files.flat()
}

async function buildSearchDocument(filePath: string): Promise<SearchDocument | null> {
  const raw = await fs.readFile(filePath, 'utf8')
  const { frontmatter, body } = parseFrontmatter(raw)
  const relativePath = path.relative(CONTENT_ROOT, filePath)
  const url = toUrl(relativePath)

  if (!url) {
    return null
  }

  const segments = relativePath.split(path.sep)
  const title =
    frontmatter.title ||
    humanize(path.basename(relativePath, path.extname(relativePath)))

  const parent =
    segments.length > 2
      ? humanize(segments[segments.length - 2])
      : segments.length === 2 && path.basename(relativePath).startsWith('index.')
        ? humanize(segments[0])
        : undefined

  return {
    title,
    url,
    description: frontmatter.description,
    parent,
    content: stripMarkdown(body)
  }
}

function parseFrontmatter(source: string) {
  const match = source.match(FRONTMATTER_PATTERN)

  if (!match) {
    return {
      frontmatter: {} as Record<string, string>,
      body: source
    }
  }

  const frontmatterLines = match[1].split(/\r?\n/)
  const frontmatter: Record<string, string> = {}

  for (const line of frontmatterLines) {
    const keyValueMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!keyValueMatch) continue

    const [, key, value] = keyValueMatch
    frontmatter[key] = value.replace(/^['"]|['"]$/g, '').trim()
  }

  return {
    frontmatter,
    body: source.slice(match[0].length)
  }
}

function toUrl(relativePath: string) {
  const withoutExtension = relativePath.replace(/\\/g, '/').replace(/\.mdx?$/, '')

  if (withoutExtension === 'index') {
    return '/'
  }

  if (withoutExtension.endsWith('/index')) {
    const base = withoutExtension.slice(0, -'/index'.length)
    return `/${base}`
  }

  return `/${withoutExtension}`
}

function stripMarkdown(value: string) {
  return value
    .replace(FRONTMATTER_PATTERN, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[.*?\]\(.*?\)/g, ' ')
    .replace(/\[([^\]]+)\]\((.*?)\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_~-]/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function humanize(value: string) {
  return value
    .replace(/^\d+[.\-_]?/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim()
}
