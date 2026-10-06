import type { App } from '@/data/apps'

/** `dim`: greyed out, for an app that is not released yet in the catalogue. */
export default function AppIcon({ app, size, className = '', dim = false }: { app: App; size: number; className?: string; dim?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={app.iconPath}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: size * 0.225 }}
      className={`shrink-0 shadow-[0_0_0_1px_rgba(23,22,20,0.08)] ${dim ? 'opacity-60 grayscale' : ''} ${className}`}
    />
  )
}
