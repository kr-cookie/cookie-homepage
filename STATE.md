# Cookie Homepage State

Project status: active
Goal: Build a standalone static Cookie homepage / long-term learning library with a memory-aware Korean worklog and capability pages.
Owner/approval: 쌀떡 approved autonomous local creation and preview on 2026-06-10; approved moving Cookie homepage toward free GitHub/GitHub Pages use on 2026-06-11.
Boundaries: Keep all homepage files under this folder. Public GitHub/GitHub Pages deployment is allowed only after public-safety checks. No raw private data, tokens, IDs, credentials, or sensitive internal dumps.

## Homepage operating rules

- Basic structure should follow the clean Coni blog-style skeleton: introduction, worklog, judgment criteria / operating principles, handoff notes / technical notes.
- Coni, Ellie, DevTeam, and Friday may be used as private references for structure, but public Cookie pages should present the result as Cookie's own record rather than explicitly saying it copied a role model.
- All menu labels and internal content should be Korean whenever possible. Keep English only for necessary proper nouns, file names, commands, product/tool names, or technical identifiers.
- Worklog entries should preserve when and what happened from memory, but avoid sensitive raw logs.
- Private reference sites were used only as structural inspiration; public pages should present Cookie's own record.
- Preserve the 2026-06-11 Claude Coworks-updated `assets/site.css` visual direction as the baseline design. Future menus, sections, and content additions should keep the same warm dark/editorial tone, header behavior, card language, and timeline styling unless 쌀떡 explicitly approves a redesign.

## Processes

| process | status | current task | next action | blocker | latest artifact |
| --- | --- | --- | --- | --- | --- |
| standalone-site | done | local static version created and previewed | iterate design/content after 쌀떡 review | - | index.html |
| korean-docs-format | done | converted menu/body to Korean docs-style structure | review tone and fill deeper pages | - | index.html |
| project-dashboard | in-progress | renamed homepage project/process taxonomy into official Slack-aligned names | automate generation from STATE.md files and show dependency/linked-process relationships visually | - | projects/index.html |
| dated-worklog | done | converted day-style mapping into dated "big mountains" worklog | keep adding entries from memory when major work completes | - | worklog/index.html |
| memory-integration | done | showed curated long-term memory model | connect future generated summaries | - | memory/index.html |
| family-agent-foundation | in-progress | added Kane/family-agent placeholders | design Kane initialization checklist next | - | capabilities/index.html |
| github-pages-publication | in-progress | local Git/GitHub Pages preparation started | create/connect public GitHub repo, push safe site files, enable Pages | GitHub repo creation/authentication pending | .gitignore |

## Official project taxonomy

Use these Korean homepage names as the shared naming source for Slack thread titles and future project/process reporting. English should remain only for necessary proper nouns, technical identifiers, or external product names.

| project | role | primary processes |
| --- | --- | --- |
| 쿠키 인프라 유지보수 | 쿠키의 정체성, 신뢰 원칙, 기억, 학습, 홈페이지, 실행 안정성, 업데이트 승격 | 정체성과 신뢰 원칙; 꿈 기억 관리; 학습과 스킬화; 지식 대시보드; 업데이트 승격 전략; 실행 환경 안정화 |
| 촬영 업무 지원 | 쌀떡의 촬영·일정·데이터 정리 업무 지원 | SSP B컷 판별 개선; 기술 위험 검수; 촬영 일정 수집; 캘린더 일정 관리; 촬영 데이터 작업공간 |
| 에이전트 운영 관리 | 서브에이전트 설계, 초기화, 권한, 운영 멘토링 | 케인 초기화; 에이전트 권한 관리; 전문 에이전트 준비 |
| 홈 인텔리전스 설계 | HAOS, 집 IoT 설계, 자비스 운영, 자동화 권한 관리 | 자비스 운영 설계; HAOS 복구; IoT 상태 관제; 자동화 권한 관리 |

Slack continuation title convention: `*[ 프로젝트명 / 프로세스명 2 ]*`, incrementing the number for later continuation threads.

## Current execution pointer

- Active process: github-pages-publication
- Active task: prepare local repository and safe public upload path
- Next safe action: initialize local git history, verify ignored files, then create/connect a public GitHub repo when authentication is available.

## Checkpoints

- 2026-06-10 00:20 KST: Standalone static homepage created in the local homepage workspace; link/safety check and HTTP smoke test passed.
- 2026-06-10 04:03 KST: 쌀떡 asked to remove explicit role-model/day-by-day framing from public site wording and instead keep a memory-backed dated 업무일지 of the large milestones Cookie has passed. Updated home/worklog/library/capabilities/changes/data/STATE accordingly.
- 2026-06-10 04:21 KST: 쌀떡 provided homepage operation rules: use Coni blog as the cleanest structural reference; also reference Ellie, DevTeam, Friday; write menus and internal content in Korean except necessary technical names. Updated homepage structure, Korean labels, about page, README, state, and validation requirements.
- 2026-06-10 04:29 KST: 쌀떡 clarified project dashboard should account for processes that span multiple projects, e.g. Calendar links into CIK and direct shooting schedule/folder-backup support. Added `projects/index.html` with project cards, process cards, and a linked-process layer for cross-project flows.
- 2026-06-10 04:38 KST: 쌀떡 reframed Cookie's work since birth into four strategic project axes: (1) making/maintaining a trustworthy smart Cookie, including dreams, skillization, homepage, and OpenClaw update resilience; (2) direct/indirect shooting support, including SSP, Kakao/CIK, calendar write/schedule management, and folder creation; (3) subagent management as 쌀떡's secretary/supervising agent, starting with Kane for 모찌 and later HA subagent; (4) future Home Assistant / HAOS + IoT management. Reorganized dashboard around these axes.
- 2026-06-10 04:49 KST: Fixed homepage menu/header mojibake where Korean labels appeared as `????` by rewriting nav/header text safely as UTF-8 and replacing corrupted brand/title fragments. Converted project dashboard from anchor/scroll navigation into click-to-open `<details>` panels so each strategic axis opens in place. Validation: `npm run check` passed (`Checked 9 HTML files: OK`).
- 2026-06-10 04:50 KST: 쌀떡 clarified a large learning scope should be narrowed into step-by-step batches. For Coni worklog 1-12 learning, Cookie should learn one batch at a time, optionally using clones/subagents when useful, and report progress without requiring 쌀떡 to repeatedly check.
- 2026-06-10 05:00 KST: Completed step-by-step Coni worklog 01-12 internal learning in four batches, translating lessons into Cookie-native operating rules instead of public role-model framing. Added/updated internal note `projects/cookie-learning/CONI_WORKLOG_LESSONS.md` and reflected concise public-safe principles on `principles/index.html`; validation passed.
- 2026-06-10 10:18 KST: 쌀떡 asked that homepage project/process names become the shared source for Slack thread titles, but with a more polished tone than the previous friendly/childlike labels. First attempt overused English; 쌀떡 clarified he does not like English. Corrected the dashboard taxonomy to Korean-first names: 쿠키 인프라 유지보수, 촬영 업무 지원, 에이전트 운영 관리, 홈 인텔리전스 설계, with formal Korean process names and Slack title examples.
- 2026-06-10 10:34 KST: 쌀떡 renamed the Home Assistant direct-control subagent to 자비스 and clarified Cookie should be an operating mentor/manager rather than a punitive watcher. Added 자비스 운영 설계 as a Home Intelligence process and replaced cold watcher wording with 관리 감독, 운영 지원, and 멘토 framing.

- 2026-06-10 11:13 KST: 쌀떡 approved registering the hybrid OpenClaw + Hermes update strategy as a core Cookie infrastructure process. Added `업데이트 승격 전략` under 쿠키 인프라 유지보수 and recorded a homepage requirement for an update-status hub showing OpenClaw updates, Hermes feature intake, staging Cookie validation, production promotion, backup, rollback, and Windows Scheduler boot-path readiness.

- 2026-06-10 11:30 KST: Implemented homepage v2 structure: Korean-first menu, search/theme controls, blog-style worklog with lesson-run template, 업무현황 collapsed dashboard, skills page, 운영 문서 integration, process detail pages, and update-status hub.

- 2026-06-10 11:40 KST: Revised homepage v2 after feedback: default dark mode, Material/MkDocs-like top bar, worklog index changed to Coni-style clickable post list with individual detail pages, pre-2026-05-27 entries added, change-log toggle wording cleaned, and 운영 문서 content expanded instead of over-summarized.
- 2026-06-10 11:50 KST: Added Worklog 00 prologue post (`worklog/2025-10-cookie-birth-attempts-prologue/`) so the 업무일지 starts from Cookie’s pre-durable-memory birth/retry context rather than Hermes-first.
- 2026-06-11 09:55 KST: 쌀떡 approved attaching GitHub to Cookie and using free GitHub Pages for the homepage. Started local publication prep with a public-safety gate and `.gitignore`.
- 2026-06-11 10:04 KST: 쌀떡 clarified that the D-drive homepage design had been revised through Claude Coworks before Cookie noticed it. Confirmed `assets/site.css` v5 was already included in the initial Git history and recorded it as the baseline design to preserve across future menus/design additions.
