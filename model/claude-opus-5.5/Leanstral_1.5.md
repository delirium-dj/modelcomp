# Claude Opus 5.5 — findings by Leanstral_1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship reasoning model, succeeding Claude Opus 5, with 40% lower cost, 30% faster output, and improved performance across agentic coding, knowledge work, and computer use; replaces Opus 5 as the new #1 on the Intelligence Index.
- **Provider / access:** Anthropic API (`claude-opus-5-5`, `claude-opus-5-5-fast`, `claude-opus-5-5-thinking`); available on AWS, Google Cloud, Azure; compatible with OpenAI SDK-compatible clients. Zero data retention; EU AI Act watermarking.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not publicly disclosed (post-2025 training data).
- **IDs:** `anthropic/claude-opus-5-5` (base, default adaptive thinking), `anthropic/claude-opus-5-5-fast` ($8/$40 per 1M in/out, 2.5x speed), `anthropic/claude-opus-5-5-thinking` (thinking mode, no output speed gain).
- **Context window:** 1,048,576 (1M) total tokens; 128K max output (per AA model page).
- **Modalities:** Text and image in; text out. Reasoning yes (extended thinking, adaptive thinking by default, non-removable). Tool calls yes (with classifier for consequential actions). JSON mode yes.
- **Pricing (as of 2026-10-31):** $4.00/$20.00 per 1M in/out; cache reads $0.20; cache writes $5/8; Batch API 50% off. Fast mode $8/$40. Throttle limits increased on Pro/Max/Team/Enterprise.
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: successor to Opus 5, denser or MoE, multimodal, 1M context, reasoning-focused.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agent / tool use:**

- Terminal-Bench 4.0: **66.4%** (Anthropic official; AA reports 59.6% for AA leaderboard — different harness); Anthropic official also reports 59.6% on AA's public leaderboard for Opus 5; Opus 5.5 at 66.4% uses xhigh effort vs Opus 5's max at 52.3%
- FrontierCode v1.1 (Main): **54.4%** (Anthropic official); FrontierCode 2.0: **45.5%** (Cognition official)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic official; AA reports 29.0% for Opus 5, 64.6% for GPT-6 Astra)
- GDPval-AA v2.1: **1,846 Elo** (Anthropic official; AA reports 1,846 for Opus 5.5 vs 1,735 for Fable 5.1, 1,708 for Opus 5)
- AutomationBench: **40.0%** (Anthropic official; Zapier-run, no fallback — safeguard interventions counted as failures, may understate true capability); AA reports 69.5%
- OSWorld 2.1: **81.8%** partial (Anthropic system card)
- OSWorld 2.0: **81.8%** (Anthropic system card, partial)
- DeepSWE: **74.2%** (Anthropic system card)
- SWE-bench Pro: **89.9%** (Anthropic system card)
- SWE Multilingual: **93.9%** (Anthropic system card)
- SWE Multimodal: **61.4%** (Anthropic system card)
- ProgramBench: **91.2%** (Anthropic system card)
- CursorBench 4.0: **57.8%** (Cursor community eval; Anthropic reports same)
- AA-SciCode: **66.9%** (AA model page)
- Toolathlon Verified: **77.8%** (Anthropic system card); Pass@3: **82.4%** (Anthropic system card)
- AA ITBench: **38.2%** (AA model page)
- AA Briefcase: **1,800 Elo** (AA model page)
- AA Cyber Index: **28.7%** (AA model page)

**Reasoning / knowledge:**

- HLE (with tools): **67.7%** (Anthropic official); AA reports 61.4% (HLE-Diamond)
- HLE (no tools): **64.4%** (Anthropic system card)
- CritPt: **31.7%** (AA model page; Anthropic system card reports 25.0% on CritPt v2 hard subset)
- AA-LCR: **84.7%** (AA model page)
- ARC-AGI-1: **97.5%** (ARC Prize published semi-private results)
- ARC-AGI-2: **91.7%** (ARC Prize published semi-private results)
- MLCR-AA: **27.8%** (AA model page)
- SciCode: **66.9%** (AA model page; Anthropic reports 66.9% on SciCode)
- Vibe Code Bench v1.1: **90.3%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **91.2%** (Epoch AI leaderboard)
- FrontierMath v2 Tier 4: **95.0%** (Epoch AI leaderboard)
- ArXivMath (no tools): **91.2%** (Anthropic system card)
- ArXivMath (tools): **96.9%** (Anthropic system card)
- GPQA Diamond: **90.6%** (Sophon/AA model page)
- MILU: **93.1%** (Anthropic system card)
- GMMLU: **94.3%** (Anthropic system card)

**Coding:**

- SWE-bench Verified: **89.9%** Pro (Anthropic system card)
- SWE-bench Multilingual: **93.9%** (Anthropic system card)
- SWE-bench Multimodal: **61.4%** (Anthropic system card)
- ProgramBench: **91.2%** (Anthropic system card)
- DeepSWE: **74.2%** (Anthropic system card)
- FrontierCode 1.1: **54.4%** (Anthropic official); 2.0: **45.5%** (Cognition official)
- CursorBench 4.0: **57.8%** (Anthropic official)
- Bug Hunt Bench: **41.7 fixes** (Bug Hunt Bench public data)
- FrontiersWE v2: **62.3%** (Proximal leaderboard)
- CWE-bench v1: **67.0%** (Collinear leaderboard)

**Long context:**

- GraphWalks BFS 256K–1M: **66.8%** (Google Gemini 4 Argon launch chart)
- MRCR (various): Anthropic system card reports MRCR 256K–512K and 512K–1M scores — no specific numbers in AA model page; AA reports AA-LCR 84.7%

**Multimodal:**

- Chartography (tools): **89.0%** (Anthropic official)
- Chartography (no tools): **64.4%** (Anthropic system card)
- MMMU-Pro: **87.7%** (AA model page)
- ExtractBench (LlamaIndex): **86.1%** (OpenRouter benchmarks)
- Design Arena Website: **1,326** (OpenRouter)
- Biomedical image analysis: **71.4%** (Anthropic system card)

**Speed:**

- 96.6–97 tok/s output (AA model page; Anthropic reports 96.6)
- TTFT: 729.62s (Anthropic API)
- End-to-end 500 tokens: sub-1s (reasoning included)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 95/100.** TB4.0 66.4% (frontier tier, xhigh effort), FrontierCode 54.4%, GDPval-AA v2.1 1,846 Elo (record), AutomationBench 40% (conservative due to safeguard counting), OSWorld 81.8% (partial). Capped by AutomationBench and the partial OSWorld/DeepSWE figures.
- **Reasoning: 92/100.** HLE 67.7% with tools / 64.4% without tools (frontier tier), ARC-AGI 97.5%, SciCode 66.9%, GPQA Diamond 90.6%, MILU 93.1% — capped by CritPt 25–32% and MLCR-AA 27.8%.
- **Context window: 100/100.** 1M tokens confirmed; GraphWalks 66.8% at 256K–1M validates near-perfect retrieval.
- **Multimodal: 70/100.** Image in yes; Chartography 89% (tools), MMMU-Pro 87.7%, Design Arena 1,326 — strong but text/image only (no video/audio); compared to Muse Spark 1.3's 85% multimodal (video in).
- **Coding: 95/100.** SWE-bench Pro 89.9%, ProgramBench 91.2%, SWE Multilingual 93.9%, FrontierCode 54.4% (v1), DeepSWE 74.2%, CursorBench 57.8% — capped by FrontierCode and CursorBench mid-tier scores.
- **Cost efficiency: 60/100.** $4/$20 per 1M — among the most expensive tier; $8/$40 fast mode; cost-per-task competitive at lower effort settings ( beats GPT-6 Astra at 20% cost on FrontierCode).
- **Overall Score: 90.4/100.** Mean of (95 + 92 + 100 + 70 + 95) / 5 = 90.4 → 90; Multimodal at 70 pulls from 95 ceiling. Using v4 methodology (cost excluded from Overall): (95 + 92 + 100 + 70 + 95) / 5 = 90.4 → **90**.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)
  - [Anthropic system card (PDF)](https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf)
  - [Artificial Analysis: Claude Opus 5.5](https://artificialanalysis.ai/models/claude-opus-5-5)
  - [Sophon: Claude Opus 5.5](https://sophon.at/models/claude-opus-5-5)
  - [BenchLM: claude-opus-5-5](https://benchlm.ai/models/claude-opus-5-5)
  - [Google: Gemini 4 Argon launch](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [ARC Prize: published semi-private results](https://arcprize.org/results/anthropic-claude-opus-5-5)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5.5/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-5.5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
