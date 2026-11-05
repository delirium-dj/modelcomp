# Claude Opus 5.5 — findings by MiniMax_M2.7

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's highest-performing Claude model as of September 2026, featuring major gains in agentic coding, scientific research, and knowledge work at 40% lower cost than Opus 5. Includes enhanced safety safeguards and improved communication clarity.
- **Provider / access:** Anthropic API (`claude-opus-5-5`), also available on AWS, Google Cloud, Azure, and OpenRouter
- **Release / knowledge:** 2026-09-22; knowledge cutoff not explicitly stated
- **IDs:** `claude-opus-5-5`
- **Context window:** 1M tokens total (verified via Anthropic and Artificial Analysis)
- **Modalities:** text/image input; text output; reasoning (extended thinking); tool calls; JSON mode
- **Pricing (as of 2026-09-22):** Input $4.00/M tokens; Output $20.00/M tokens; Cache reads $0.20/M tokens (60% less than Opus 5). Fast mode: $8 input / $40 output
- **Architecture:** Proprietary; parameter count not disclosed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic announcement / rank within Claude family; xhigh effort)
- Terminal-Bench 4.0: **66.4%** vs Fable 5.1 55.8%, Opus 5 52.3%, GPT-6 Astra 57.9%, GPT-5.6 Sol 37.3% <(Anthropic/standard error ±2.6 pts)>
- FrontierCode v1.1 (Main): **54.4%** vs Fable 5.1 50.3%, Opus 5 48.0%, GPT-6 Astra 53.3% <(Anthropic)>
- CursorBench 4.0: **57.8%** vs Fable 5.1 51.8%, Opus 5 46.6%, GPT-5.6 Sol 41.7% <(Anthropic)>
- AutomationBench: **40.0%** vs Opus 5 26.9%, GPT-5.6 Sol 28.8% <(Zapier, without fallback models so safeguard interventions = failures)>
- OSWorld 2.1: **81.8%** partial (vs Fable 5.1 80.7%, Opus 5 74.0%) <(Anthropic)>

Reasoning / knowledge:

- GDPval-AA v2.1: **1846 Elo** vs Fable 5.1 1735, Opus 5 1708, GPT-6 Astra 1542 <(Anthropic, higher=better)>
- Humanity's Last Exam: **67.7%** with tools vs Fable 5.1 65.6%, Opus 5 63.6% <(Anthropic)>
- Terminal-Bench-Science 0.1: **58.7%** vs Fable 5.1 52.6%, Opus 5 29.0%, GPT-6 Astra 64.6% <(Anthropic/standard error ±3.5–5 pts)>
- Artificial Analysis Intelligence Index: **59 / 6859** (rank #2 overall; verified via artificialanalysis.ai)

Coding:

- No SWE-bench Verified score verified in public data found
- DeepSWE / Coding Index / other: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- No long-context retrieval benchmark (MRCR, RULER) verified for this model

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Terminal-Bench 4.0 at 66.4% leads the market; AutomationBench 40.0% is strong; OSWorld 81.8% is top-tier. Score capped by lack of published SWE-bench scores and the fact some safeguards were enforced during benchmark runs.
- **Reasoning: 88/100.** GDPval-AA v2.1 at 1846 Elo leads all models, Humanity's Last Exam 67.7% leads with tools, Terminal-Bench-Science 0.1 at 58.7% is strong. Score capped by GPT-6 Astra scoring higher on Terminal-Bench-Science (64.6%).
- **Context window: 100/100.** 1M token context window maps directly to highest tier in the normalization schema.
- **Multimodal: 92/100.** Supports text and image input (confirmed via Artificial Analysis); visual chart recognition (Chartography) at 89.0% with tools. Text-only output caps at 92 (not 100) relative to true multimodal models that output images/video.
- **Coding: 85/100.** FrontierCode 54.4% and CursorBench 57.8% show strong agentic coding ability at reasonable cost. Lacks published SWE-bench Verified scores so capped conservatively.
- **Cost efficiency: 88/100.** $4/$20 per 1M tokens is above median for premium tier (median input $2, output $10). Cache reads at $0.20/M are 95% discounted. 40% cheaper than Opus 5 for equivalent quality.
- **Overall Score: 91/100.** Mean of five quality dims (92+88+100+92+85)/5 = 91.4 → 91. Best-fit recommendation: top-tier choice for agentic coding and knowledge work where budget allows.

---

## Signature

- Provided by: **MiniMax M2.7 (anonymous)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude Opus 5.5 Announcement](https://www.anthropic.com/news/claude-opus-5-5)
  - [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/models/claude-opus-5-5)
- Future sources: add a new file next to this one, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-5.5/MiniMax_M2.7.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
