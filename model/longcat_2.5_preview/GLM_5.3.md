# LongCat 2.5 Preview — findings by GLM 5.3

- Source: Meituan / LongCat (`meituan/longcat-2.5-preview`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview (Free Zen tier: "LongCat 2.5 Preview Free")
- **Short description:** Meituan's natively multimodal preview model for long-horizon agent work — **architecture now confirmed: a ~1.6T-total / ~48B-active MoE with 1M context and image understanding** (explainx/benchmarklist, resolving the first pass's "presumed trillion-scale but unverified"), introduced per the official changelog on **2026-09-25** (tokrace; CloudPrice listed 09-26 — one-day discrepancy flagged) and live on Meituan's API since 09-27. Second pass confirms the standing caveat — **still zero formal harness rows (no AA/BenchLM/BenchLeader page)** — adds a second community signal (**59/61 on Mikel's executable-code battery**, vs Fledge Alpha's 61/61), and verifies the **Zen free tier is still live** (freetokens' tracked list includes LongCat 2.5 Preview). Top use case: free-tier long-context coding with image input while the Zen preview lasts; still preview quality, expect churn.
- **Provider / access:** OpenCode Zen free tier `opencode/longcat-2.5-preview-free` (**still free** per freetokens' tracked Zen list; Chat Completions; `thinking.type = enabled|disabled` toggle, interleaved `reasoning_content`); **Meituan LongCat API live since 2026-09-27** (explainx update); paid host `meituan/longcat-2.5-preview` on Vercel AI Gateway at $0.30/$1.20; Blackbox and nano-gpt relists ($0.75/$2.95).
- **Release / knowledge:** **2026-09-25** (official changelog per tokrace) / 09-26 (CloudPrice listing — flagged); knowledge cutoff not stated publicly.
- **IDs:** `opencode/longcat-2.5-preview-free` (Free, $0) / `meituan/longcat-2.5-preview` (paid).
- **Context window:** **1,048,576 tokens / 131,072 max output** (confirmed across Vercel/CloudPrice/BenchmarkList).
- **Modalities:** text + image in; text out; optional thinking; function calling; prompt caching; structured outputs not listed.
- **Pricing (as of 2026-10-13):** **Zen free tier still live** ($0/$0/$0, limited-time, zero-retention provider per Zen docs); paid $0.30 in / $1.20 out per 1M ($0.006 cached read — Vercel/CloudPrice confirmed); relists $0.75/$2.95.
- **Architecture:** **~1.6T total / ~48B active MoE** (confirmed — same scale as LongCat-2.0, whose MIT-licensed 1.6T/48B design this extends); 1M context; image understanding native.

### Raw benchmarks found

> Second-pass status unchanged: **no formal harness (AA/Epoch/Vals/LiveBench/BenchLeader) has published a row for this ID** — the two verified signals remain community/harness-lite measurements with per-row provenance.

Agent / tool use:

- Community executable-code battery: **59/61** (@MikelEcheve — the same battery where Fledge Alpha scored 61/61 and Nemotron timed out; from this cycle's Fledge pass; a second decent community datum)
- AI Coding Daily agentic projects (OpenCode harness, 2026-09-28, retained): CSV Import (PHP) 3/5, Offline Sync (PHP) 2.7/5, Bank Feed (Dart) 4/5, Shipping Quotes (Go) 0.9/5 — usable but weak agentic completion
- Terminal-Bench 2.1 / τ³ / τ² / GDPval / Claw-Eval / Toolathlon / MCP-Atlas: still no verified public score (unchanged — the gaps persist 12 days post-launch)

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / AA Index / Omniscience: still no verified public score for this ID (unchanged); tokrace's thinking-mode review confirms the enabled/disabled toggle behavior but publishes no scores

Coding:

- AI Coding Daily LLM Coding Leaderboard (OpenCode harness, 2026-09-28, retained): **44.25/60 total (#34)** — Laravel 16.98/20, React-TS 16.67/20 (strong code quality), avg time 16:50/prompt
- Community battery 59/61 (see agents); SWE-bench Verified / LiveCodeBench / SciCode / Vibe: still no verified public score; the LongCat-2.0 predecessor rows (SWE-Pro 59.5, TB 2.1 70.8) remain a different checkpoint — not usable

Long context:

- 1.05M window confirmed (unchanged); still no RULER/MRCR/GraphWalks retrieval score.

Multimodal:

- Image input confirmed across all listings (unchanged); still no MMMU/MMMU-Pro vision row.

### Normalized scores (1–100)

- **Tool use: 56/100.** Raised from 55: Mikel's 59/61 adds a second community signal of solid routine agent competence — but the formal harnesses (TB/τ/GDPval/OSWorld) remain entirely absent, keeping the score provisional.
- **Reasoning: 55/100.** Held: the thinking toggle is verified behavior, the capability remains publicly unmeasured — no GPQA/HLE/LCR/Index rows exist 12 days post-launch.
- **Context window: 95/100.** Held: 1,048,576/131,072 confirmed across all listings; no measured retrieval.
- **Multimodal: 62/100.** Held: verified text+image input with cross-modal Q&A claims; zero published vision benchmarks.
- **Coding: 70/100.** Held: the two verified signals (AI Coding Daily 44.25/60 with strong code-quality subscores; Mikel 59/61) point at a genuinely capable coder — capped by the missing SWE-bench Verified/LiveCodeBench rows and the slow 16:50/prompt pace.
- **Cost efficiency: 100/100.** Held: the Zen free tier is confirmed still live (freetokens' tracked list), zero-retention, $0 — with the $0.30/$1.20 paid route as a verified fallback.
- **Overall Score: 68/100.** (56 + 55 + 95 + 62 + 70) / 5 = 67.6 → 68, up from 67. Best-fit: still the free-tier long-context coding pick — a confirmed 1.6T/48B-scale multimodal preview whose two community measurements (44.25/60, 59/61) show real coding competence at $0 with image input and 1M context — but with zero formal benchmarks two weeks after launch, preview churn risk stands; verify per-task, and watch for Meituan's official model card before production routing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (DDG-lite searches surfacing explainx's 1.6T/48B confirmation and 09-27 API-live update, benchmarklist's spec profile, tokrace's thinking-mode review with the official-changelog 09-25 date, CloudPrice's paid-pricing confirmation, and ahmetbalaman's comparison; the freetokens Zen free-list verification from this cycle's earlier passes; Mikel's 59/61 battery result as surfaced during this cycle's Fledge pass; the first-pass AI Coding Daily rows retained unchanged with provenance; no BenchLeader/AA/BenchLM page exists — confirmed unchanged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
