#!/usr/bin/env bash
# Пересборка и деплой сайта nikibstudio.site (Cloudflare Pages, direct upload).
# Запускать в интерактивном терминале: если wrangler не залогинен,
# откроется браузер для входа в Cloudflare.
#
#   ./deploy.sh            # авто-определение имени проекта Pages
#   PROJECT=имя ./deploy.sh  # если авто-определение не сработало
set -euo pipefail
cd "$(dirname "$0")"

npx wrangler whoami >/dev/null 2>&1 || npx wrangler login

echo "→ next build…"
npm run build

# Проект Pages с доменом nikibstudio.site (сверено 05.07.2026:
# npx wrangler pages project list → devstudio, direct upload без git-привязки)
PROJECT="${PROJECT:-devstudio}"

echo "→ Деплой out/ в проект «$PROJECT»…"
npx wrangler pages deploy out --project-name "$PROJECT"

echo "→ Проверка страниц Aline…"
for u in https://nikibstudio.site/apps/aline https://nikibstudio.site/apps/aline/privacy https://nikibstudio.site/apps/aline/support; do
  echo "$u -> $(curl -s -o /dev/null -w '%{http_code}' -L "$u")"
done
