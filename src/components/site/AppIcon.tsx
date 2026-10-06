import type { App } from '@/data/apps'

export default function AppIcon({ app, size, className = '' }: { app: App; size: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={app.iconPath}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: size * 0.225 }}
      className={`shrink-0 shadow-[0_0_0_1px_rgba(23,22,20,0.08)] ${app.soon ? 'opacity-60 grayscale' : ''} ${className}`}
    />
  )
}
