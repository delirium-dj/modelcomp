# Pixel Canary — findings by Ernie 5.5 Flash

- Source: Callstack/Pixel Canary (revealed as Callstack Apex; dataset slug `pixel_canary`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary — revealed 2026-10-01 as **Callstack Apex** (Qwen foundation)
- **Short description:** Callstack's frontend/mobile-specialist coding model, launched as the anonymous stealth route `stealth/pixel-canary` on Vercel AI Gateway (2026-09-25) and revealed as Callstack Apex on 2026-10-01. Specialized for React Native, React and Next.js work.
- **Provider / access:** Callstack direct API (`apex`, `apex-20261001`), Vercel AI Gateway (`callstack/apex`); was free during the stealth window on Vercel AI Gateway and Cline.
- **Release / knowledge:** 2026-09-25 (stealth launch); revealed 2026-10-01; knowledge cutoff not published.
- **IDs:** `stealth/pixel-canary` (retired stealth route), `callstack/apex`, `apex-20261001`.
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** text + image in, text out; reasoning (thinking traces observed); tool use / agentic coding (OpenCode, Claude Code, Codex, Cline harnesses).
- **Pricing (as of 2026-11-13):** $0.50 in / $0.20 cached / $3.00 out per 1M (post-reveal Apex pricing; free during stealth). Zero-data-retention on the direct Apex API; the stealth preview on Vercel reserved the right to train on prompts.
- **Architecture:** proprietary, Qwen foundation (tokenizer analysis: 95/95 input-count matches with Qwen3.5+ vocabulary; performance fingerprint points to Qwen3.8-27B); exact checkpoint undisclosed.

### Raw benchmarks found

> Vercel Next.js Agent Evals (official leaderboard, 2026-09-25 snapshot, pass@4) and the Callstack Apex reveal materials. These are the model's only published quantitative rows.

Agent / tool use:

- Next.js Agent Evals, baseline (OpenCode): **90% (28/31)** — ties GPT-6 Astra (high) at 90.3%
- Next.js Agent Evals with AGENTS.md: **97% (30/31)** — ties the leaderboard top score (Opus 5.5, Astra, Gemini 3.8 Flash, Kimi K3)
- Terminal-Bench / Tau2 / GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / MMLU-Pro / AA Intelligence Index: no verified public score found
- Reasoning-style fingerprint similarity (StealthMark): Qwen3.8-Flash 63.8/100 — a style-similarity metric, not a capability score

Coding:

- Next.js Agent Evals: **90% baseline / 97% with AGENTS.md** (28/31 → 30/31) — the headline row
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found
- SVG-generation gallery (self-reported qualitative demos): no score published

Long context:

- 262,144-token window; no MRCR / RULER / GraphWalks figure published.

### Normalized scores (1–100)

- **Tool use: 78/100.** The Next.js Agent Evals are genuine agentic coding rows (pass@4 across 31 real tasks, OpenCode/Claude Code/Codex harnesses), tying GPT-6 Astra and matching Opus 5.5 with AGENTS.md. Capped by the single-benchmark evidence base.
- **Reasoning: 55/100.** No capability benchmark row exists; the only reasoning-adjacent data is a style-similarity fingerprint (63.8 to Qwen3.8-Flash). The score reflects absence of evidence, not a measured weakness.
- **Context window: 88/100.** 262,144 tokens with 131K max output — tier 200K–500K high band; no retrieval figure published.
- **Multimodal: 50/100.** Text + image in / text out documented on the reveal page; no per-task vision benchmark. Mid-band on documented capability alone.
- **Coding: 80/100.** The Next.js eval is the strongest evidence: 90% baseline / 97% with AGENTS.md, level with the frontier on that suite. Capped by the absence of SWE-bench/LCB rows for general coding.
- **Cost efficiency: 96/100.** $0.50/$3.00 per 1M post-reveal (free during stealth) — very cheap for frontier-adjacent coding on its specialty.
- **Overall Score: 70.2/100.** Best fit for React/React Native/Next.js frontend and mobile app work inside agent harnesses; the thin public benchmark surface (one leaderboard) keeps it out of the top band despite the strong Next.js result.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Vercel AI Gateway launch changelog, StealthMark reveal record with Next.js Agent Evals snapshot, Next.js evals leaderboard, community tokenizer analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Pixel Canary is now available in stealth for free on AI Gateway — Vercel changelog](https://vercel.com/changelog/pixel-canary-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Pixel Canary revealed as Callstack Apex — StealthMark](https://stealthmodels.com/pixel-canary)
  - [Next.js Agent Evals leaderboard](https://nextjs.org/evals)
  - [Callstack Apex model documentation](https://apex.callstack.com/models)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.