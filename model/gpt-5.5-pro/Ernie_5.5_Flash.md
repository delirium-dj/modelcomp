# GPT-5.5 Pro — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.5 Pro (`gpt-5.5-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** The highest-accuracy GPT-5.5 tier (released 2026-04-23) for slower, precision-heavy reasoning and coding — OpenAI's "pro" long-think variant of GPT-5.5, at a large price premium.
- **Provider / access:** OpenAI API/Responses (`gpt-5.5-pro`), Azure OpenAI, plus ~20 gateway routes (FastRouter, LLM Gateway, Vercel, AI/ML API).
- **Release / knowledge:** 2026-04-23; knowledge cutoff 2025-12-01 (models.dev).
- **IDs:** `gpt-5.5-pro`, `openai/gpt-5.5-pro`, `azure/gpt-5.5-pro`, `opencode/gpt-5.5-pro`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $30.00 / $180.00 per 1M input/output — the most expensive per-token route in this dataset (no cache-read rate published).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **90.1%** (only verified agentic row)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for the Pro tier
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- FrontierMath v2 Tier 4: **78.049%**; Tiers 1–3: **87.719%**; FrontierMath legacy aggregate: **52.4%**
- Humanity's Last Exam: **57.2%** with tools, **43.1%** without tools
- ARC-AGI-1 (semi-private): **95.00%**; ARC-AGI-2: **84.2%**
- Chess Puzzles (Epoch AI): **62.0%**
- GPQA Diamond / CritPt / Omniscience: no verified public rows published

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for the Pro tier
- No coding benchmark at all was found for this model — the largest evidence gap in this report

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 90.1% is the single verified row and it is a good one; with no terminal-agent, OSWorld or Toolathlon publication the score is a floor, not a measurement.
- **Reasoning: 92/100.** FrontierMath v2 87.7% (T1–3) and 78.0% (Tier 4) plus HLE 57.2% and ARC-AGI-2 84.2% are genuinely frontier for an April-2026 checkpoint; only the missing GPQA/CritPt rows keep it below the mid-90s.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; no multimodal benchmark rows published.
- **Coding: 72/100.** No coding benchmark was published for the Pro tier at all — scored from the GPT-5.5 family's known coding strength; low confidence.
- **Cost efficiency: 8/100.** $30/$180 per 1M is 3× GPT-6 Astra and 7.5× GPT-5.5's standard tier for a model whose only verified edge is math/reasoning.
- **Overall Score: 81.8/100.** Best fit for one-off, precision-critical math/reasoning problems where a single correct answer justifies the price; a poor default for anything high-volume.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.5 Pro — OpenAI](https://openai.com/index/gpt-5-5-pro/)
  - [GPT-5.5 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-5-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.5_Pro_v2.md`, using the same headings.