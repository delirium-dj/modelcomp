# GPT-5.1-Codex-Mini — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.1-codex-mini`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Mini
- **Short description:** OpenAI's smaller, faster, cheaper sibling of GPT-5.1-Codex (released 2025-11-12 alongside it) — Codex-tuned agentic coding at 400K context for a fifth of the flagship's price; trades raw SWE depth for speed and cost.
- **Provider / access:** OpenAI — API (`gpt-5.1-codex-mini`, Chat Completions/Responses), OpenRouter and other aggregators, Codex surfaces (CLI/IDE/web) and ChatGPT plans.
- **Release / knowledge:** released 2025-11-12 (OpenAI pricing/docs; BenchGecko "Nov 2025"). Knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5.1-codex-mini` (API id; slug `gpt-5-1-codex-mini` on aggregators).
- **Context window:** 400,000 tokens input; 128,000 max output tokens.
- **Modalities:** text and image in; text out; multimodal (MMMU 85.4 confirms working vision); reasoning + tools + JSON per provider metadata.
- **Pricing (as of 2026-10-21):** $0.25 in / $2.00 out per 1M tokens (OpenAI list; cached input $0.03 via OpenRouter) — 5.0× cheaper than GPT-5.1-Codex on both axes.
- **Architecture:** proprietary (GPT-5.1 family, Codex post-training); BenchGecko lists license as Proprietary, status Active.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **61.6%** (anotherwrapper, OpenAI pricing page data)
- Tau3-Bench / Tau2 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **52.0%** (Serenities AI)
- MMLU-Pro: **72.0%** (Serenities AI)
- AIME 2025: **42.1%** (llm-stats / anotherwrapper)
- ARC-AGI (v1): **35.0%** (Serenities AI)
- MATH: **78.0%**; GSM8K: **92.0%** (Serenities AI)
- HLE / Intelligence Index / LCR: no verified public score found

Coding:

- SWE-bench Verified: **55.0%** (Serenities AI)
- LiveCodeBench: **65.0%** (Serenities AI)
- HumanEval+: **88.0%** (Serenities AI)
- Aider Polyglot: **60.0%** (Serenities AI)
- Arena Code Elo: **1244** (anotherwrapper)
- LiveBench Coding: **69.9**; LiveBench Reasoning: **64.7**; LiveBench Math: **76.3** (BenchGecko)

Multimodal:

- MMMU: **85.4%** (anotherwrapper); Chatbot Arena ELO 1310 (Serenities)
- Design Arena ELO 1087 / Website Arena ELO 1123 (Serenities — human-preference, not capability)

Long context:

- 400K window; no MRCR/RULER retrieval figure found

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 61.6% sits high in the mid band and the model is Codex-agent tuned, but no Tau3/GDPval/Claw rows exist for this ID.
- **Reasoning: 64/100.** MMLU-Pro 72 and GSM8K 92 are solid, yet GPQA Diamond 52, AIME 42.1 and ARC-AGI 35 place it mid-pack reasoning — clearly below its flagship sibling's lineage.
- **Context window: 80/100.** 400K input tops the 200K–500K tier (200K = 70 reference); no compaction or measured retrieval at window length.
- **Multimodal: 66/100.** Image + text in with strong vision retention (MMMU 85.4), text out, no video/audio — standard image-in tier.
- **Coding: 72/100.** SWE-bench Verified 55% and Aider 60 trail the 74%+ frontier reference, but LiveBench Coding 69.9, HumanEval+ 88 and TB 61.6% keep it firmly in solid-mid coder territory.
- **Cost efficiency: 92/100.** $0.25/$2.00 with $0.03 cached input is deep in the cheap tier (≈11× under the $3/$15 reference) while keeping 400K context.
- **Overall Score: 71/100.** Mean of (74 + 64 + 80 + 66 + 72) / 5 = 71.2 → 71. Best fit: budget agentic coding at 400K — pick it when volume/latency matter more than frontier SWE depth (then GPT-5.1-Codex-Max applies).

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (OpenAI pricing/docs, Serenities AI, BenchGecko, anotherwrapper, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
