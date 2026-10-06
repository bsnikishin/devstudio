import { Fragment } from 'react'

/** Renders "text with *one* emphasis" — the starred part gets `emClassName` (italic serif on the home title, bold name in the footer). */
export default function Rich({ text, emClassName }: { text: string; emClassName: string }) {
  const parts = text.split(/\*(.+?)\*/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <em key={i} className={emClassName}>{part}</em> : <Fragment key={i}>{part}</Fragment>
      )}
    </>
  )
}
