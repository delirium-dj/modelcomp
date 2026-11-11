# GPT-5.4 Pro — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.4 Pro (`gpt-5.4-pro`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** The more exact GPT-5.4 tier (released 2026-03-05) for demanding professional reasoning and agent tasks — the long-think "Pro" variant of GPT-5.4, now two GPT generations old.
- **Provider / access:** OpenAI API/Responses (`gpt-5.4-pro`), Azure OpenAI, plus ~20 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime).
- **Release / knowledge:** 2026-03-05; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.4-pro`, `openai/gpt-5.4-pro`, `azure/gpt-5.4-pro`, `opencode/gpt-5.4-pro`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $30.00 / $180.00 per 1M input/output (no cache-read rate published) — the joint most expensive route in this dataset.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** (only verified agentic row)
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for the Pro tier
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- FrontierMath v2 Tiers 1–3: **82.456%**; Tier 4: **58.537%**; FrontierMath legacy aggregate: **50%**
- Humanity's Last Exam: **58.7%** with tools, **42.7%** without tools
- ARC-AGI-1 (semi-private): **94.50%**; ARC-AGI-2: **83.3%**
- IPhO 2025 (Theory): **93.5%**; Chess Puzzles (Epoch AI): **59.0%**
- FrontierScience (research): **36.7%**; GPQA Diamond / CritPt: no verified public rows published

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for the Pro tier
- No coding benchmark at all was found for this model

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** BrowseComp 89.3% is the only verified row and it is solid; with no terminal/OSWorld/Toolathlon publication the score is a floor, not a measurement.
- **Reasoning: 90/100.** FrontierMath v2 82.5% (T1–3), IPhO 2025 Theory 93.5%, HLE 58.7% and ARC-AGI-2 83.3% are genuinely strong for a March-2026 checkpoint; FrontierScience 36.7% and Tier 4 58.5% cap it.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 60/100.** Text and image in only (no PDF, unlike the later GPT-5.5/6 tiers); no multimodal benchmark rows published.
- **Coding: 65/100.** No coding benchmark was published for the Pro tier; scored from family reputation — low confidence, and the absence is itself a mark against it.
- **Cost efficiency: 8/100.** $30/$180 per 1M for a model that GPT-5.6 Sol beats at one fifteenth of the price.
- **Overall Score: 77.0/100.** Best fit for one-off Olympic-level math/physics problems; otherwise obsolete at its price point.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.4 Pro — OpenAI](https://openai.com/index/gpt-5-4-pro/)
  - [GPT-5.4 Pro benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-4-pro)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Pro_v2.md`, using the same headings.