# GPT-5.1 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-5.1-codex`; evaluated route OpenCode Zen `opencode/gpt-5.1-codex`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex (vendor style GPT-5.1-Codex)
- **Short description:** OpenAI's GPT-5.1 specialization for agentic coding in Codex-like environments — more steerable than base GPT-5.1, tuned for long independent runs, structured code reviews, and instruction adherence. Distinct from GPT-5.1-Codex-Max (Nov 19, 2025, higher-effort sibling) and from the later GPT-6 Codex/Sol line. **Status note: OpenAI's model page now marks GPT-5.1-Codex "Deprecated"** (verified 2026-10-16).
- **Provider / access:** OpenAI — Responses API only (per OpenAI docs; underlying snapshot regularly updated); also served via Azure and OpenRouter providers; evaluation route OpenCode Zen `opencode/gpt-5.1-codex` (Chat Completions).
- **Release / knowledge:** Released 2025-11-12/13 (ModelBeat: Nov 12; OpenRouter: Nov 13, 2025); knowledge cutoff Sep 30, 2024 (OpenAI docs). HLE re-scored upward Aug 2026 (23.4% → 25.7%).
- **IDs:** `openai/gpt-5.1-codex` (OpenAI API / OpenRouter); `opencode/gpt-5.1-codex` (Zen). No Free ID found.
- **Context window:** 400,000 tokens total; 128,000 max output tokens (OpenAI docs).
- **Modalities:** text + image in (UI screenshots, images) → text out; reasoning tokens with adjustable `reasoning.effort` (adapts dynamically — fast for small tasks, extended runs for large projects); function calling, structured outputs, streaming. No audio/video.
- **Pricing (as of 2026-10-16):** $1.25 in / $10.00 out per 1M tokens; cached input $0.125 (90% cache discount); AA blended cost-per-1M $1.34. No free tier.
- **Architecture:** proprietary (closed weights, GPT-5.1 family; snapshot regularly updated).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **83.0%** (Artificial Analysis, GPT-5.1 Codex High)
- Terminal-Bench: **57.8%** (ModelBeat / Epoch AI; version not specified on source — consistent with launch-era TB 2.x reporting)
- GDPval-AA v2.1: **826 Elo** (Artificial Analysis — below the 900–1200 mid band)
- APEX (multi-step agentic): **20.7%** (ModelBeat / Epoch AI)
- Tau3-Banking / OSWorld / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis / Epoch AI — both sources agree)
- HLE: **25.7%** (Artificial Analysis / Epoch AI; improved from 23.4% per Aug 2026 changelog)
- AA-LCR v1.1: **69.3%** (comparison page rounds to 69%)
- CritPt: **6%** (Artificial Analysis comparison)
- AA-Omniscience: **−7** (Artificial Analysis comparison — net hallucination-prone on unverifiable claims)
- AA Intelligence Index: **23.7 → ~24** (estimated, High effort; mid band)
- AA Math Index / AIME 2024/2025: **95.7%**; MMLU-Pro: **86.0%** (Epoch AI)
- Epoch AI composite percentiles: Intelligence 46th, Coding 36th, Agentic 31st (of tracked models)

Coding:

- LiveCodeBench: **84.9%** (Epoch AI)
- SciCode: **40.2%** (Epoch AI)
- WebDev Arena: **1336** (human-rated)
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / DeepSWE: no verified public score found for this exact ID in this pass's sources

Long context:

- 400K window / 128K output — no MRCR / RULER / GraphWalks retrieval-at-length published.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 83.0% is genuinely strong (above the ~50%+ Tau frontier reference), but Terminal-Bench 57.8% sits in the mid band (TB 45–60 → 50–70), GDPval-AA 826 is below even the 900–1200 mid band, and APEX 20.7% is weak — a mixed agentic profile that caps the score in the 60s despite excellent tool-reliability on τ².
- **Reasoning: 68/100.** GPQA Diamond 86.0% and HLE 25.7% are solid, AA-LCR 69.3% is genuinely good, and math is elite (AIME 95.7); capped hard by the low AA Intelligence Index (~24, mid band), CritPt 6%, and AA-Omniscience −7 (frequent hallucination on unknowable claims) — reasoning depth is real but far below the 2026 frontier.
- **Context window: 80/100.** Verified 400K total / 128K out sits in the upper half of the 200K–500K tier (65–84, 200K = 70); no retrieval-at-length measurement to justify the top of the band, and it trails every 1M-context 2026 flagship.
- **Multimodal: 62/100.** Text + image in → text out fills the +image-in band (60–70); no video/PDF/audio input, text-only output, and no multimodal benchmark row for this ID — image support exists for UI/screenshot debugging rather than measured vision quality.
- **Coding: 74/100.** LiveCodeBench 84.9% is strong and the model is purpose-built for agentic coding (structured reviews, multi-hour runs), but SciCode 40.2% is below the 55%+ frontier reference, Terminal-Bench 57.8% is mid-band, Epoch's Coding Index sits at the 36th percentile, and no SWE-bench Verified row was verified this pass — a strong specialist short of the 2026 coding frontier.
- **Cost efficiency: 78/100.** $1.25/$10 with a 90%-off cache tier ($0.125) is well below flagship pricing — between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors, pulled down by the $10 output price and up by cheap cached reads and 127 tok/s; the practical argument down is that OpenAI itself deprecated the model in favor of stronger Codex/Sol successors at comparable rates.
- **Overall Score: 69/100.** Mean of the five non-cost dims (62 + 68 + 80 + 62 + 74) / 5 = 69.2 → 69. Best-fit: budget long-session coding agent for instruction-following refactors and code review where τ²-level tool reliability and 400K context matter more than frontier reasoning — now a deprecated endpoint, so prefer GPT-5.1-Codex-Max or the GPT-6 Sol line for anything new.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research across 4 independent sources (OpenAI developer model page, OpenRouter model page with Artificial Analysis benchmark block, Artificial Analysis GPT-5.1 vs GPT-5.1-Codex comparison, ModelBeat/Epoch AI specs page); conflicts compared (release date Nov 12 vs Nov 13 noted; AA index rounding 23.7 vs ~24 flagged). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

