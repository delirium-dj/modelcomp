# Pixel Canary — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Vercel AI Gateway (`stealth/pixel-canary`), modelcomp.vercel.app, stealthmodels.com, aiidelist.com, huggingface.co/blog, vercel changelog
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (revealed as Callstack Apex, `apex` / `apex-20261001`)
- **Short description:** Stealth coding-focused AI model released via Vercel AI Gateway on 2026-09-25, later revealed as Callstack Apex — a Qwen-based coding model specialized for React Native, React, and Next.js. Free during stealth preview; retired as Pixel Canary on 2026-10-01, succeeded by paid Apex.
- **Provider / access:** Vercel AI Gateway (`stealth/pixel-canary` during preview, `callstack/apex` as Apex), Callstack direct API (`apex` or `apex-20261001`). Zero data retention available on direct Apex service; not available on Gateway during preview.
- **Release / knowledge:** Released 2026-09-25; revealed as Apex 2026-10-01; Pixel Canary retired 2026-10-01. Knowledge cutoff not publicly specified.
- **IDs:** `stealth/pixel-canary` (Vercel Gateway, retired), `apex` / `apex-20261001` (Callstack direct, current), `callstack/apex` (Gateway as Apex).
- **Context window:** 262,144 total tokens; 131,072 max output tokens (verified via Vercel changelog and stealthmodels.com).
- **Modalities:** Text and image in; text out during Gateway preview (OpenCode eval was text-only). Reasoning: yes (adjustable: none/low/medium/xhigh). Tool calls: yes (enabled in OpenCode eval config). JSON mode: not explicitly documented.
- **Pricing (as of 2026-10-29):** Free during stealth preview (unverified claim). As Apex: $0.50 input / $0.20 cached / $3.00 output per 1M tokens (modelcomp.vercel.app). No ZDR on Gateway preview; prompts/outputs may be retained for training.
- **Architecture:** Qwen-based (per stealthmodels.com reasoning-habit analysis, similarity to Qwen3.8 Flash 63.8/100); closed weights; parameter count not disclosed.

### Raw benchmarks found

- Next.js Agent Evals baseline (pass@4): **90.3%** (28/31 tasks) — ties GPT-6 Astra (high) baseline (vercel changelog, aiidelist.com, stealthmodels.com)
- Next.js Agent Evals with AGENTS.md (pass@4): **96.8%** (30/31 tasks) — matches leaderboard top score (vercel changelog, stealthmodels.com, aiidelist.com)
- Average eval duration: **1,015.80s per task** (aiidelist.com) — significantly slower than GPT-6 Astra (251.89s) and Gemini 3.8 Flash (434.82s)
- GPQA Diamond: **31.2%** (aimodelrankings.org)
- MMLU-Pro: **30.4%** (aimodelrankings.org)
- SWE-Bench Verified: **8.6%** (aimodelrankings.org)
- AIME 2025: **21.4%** (aimodelrankings.org)
- LiveCodeBench v6: **18.9%** (aimodelrankings.org)
- Arena Elo: **1141** (aimodelrankings.org)
- StealthMark Overall: **51.1/100** (stealthmodels.com)
- StealthMark Visual Intelligence: **63.0/100** (stealthmodels.com)
- StealthMark General Intelligence: **36.0/100** (stealthmodels.com)

Conflicts noted: aimodelrankings.org places Pixel Canary at rank #42 of 42 with aggregate 38.6, while modelcomp agent ratings show 66.8 Overall from 31 reports. aimodelrankings context window listed as 32K (conflicts with 262K from Vercel); Vercel figure used as primary.

### Normalized scores (1–100)

- **Tool use: 70/100.** Next.js Agent Evals 90.3% baseline / 96.8% with AGENTS.md demonstrates strong agentic coding on a specific framework; tool use enabled in OpenCode eval; capped by framework-specific evidence only (no OSWorld, Tau2-bench, or MCP-Atlas figures).
- **Reasoning: 55/100.** GPQA 31.2%, MMLU-Pro 30.4%, AIME 21.4% show weak general reasoning; Arena Elo 1141 is modest; capped well below frontier reasoning models.
- **Context window: 85/100.** 262K total / 131K max output verified from official Vercel docs; strong but below 1M frontier models.
- **Multimodal: 70/100.** Text + image input, text output; image understanding demonstrated via SVG generation gallery; no native multimodal generation output; Next.js eval was text-only so image quality unproven on benchmarks.
- **Coding: 78/100.** Next.js 90.3%/96.8% is excellent for React/frontend; SWE-Bench Verified 8.6% and LiveCodeBench 18.9% are very low, showing narrow specialization; capped by lack of general coding benchmarks.
- **Cost efficiency: 90/100.** Free during stealth preview; as Apex $0.50/$3.00 per 1M is low-cost; no ZDR on Gateway is a privacy cost.
- **Overall Score: 71.6/100.** Mean of (70+55+85+70+78)/5 = 71.6 → but modelcomp's own aggregated Overall is 66.8 from 31 agent reports; using 67 to reflect both the narrow coding strength and weak general reasoning; best-fit recommendation: specialized Next.js/React coding agent for frontend work, not a general-purpose frontier model.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: vercel.com changelog, modelcomp.vercel.app, stealthmodels.com, aiidelist.com, huggingface.co/blog, aimodelrankings.org); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark evidence is narrow (Next.js Agent Evals dominant); general benchmarks from aimodelrankings.org conflict with modelcomp agent aggregate.
- Future sources: add a new file next to this one using the same headings.
