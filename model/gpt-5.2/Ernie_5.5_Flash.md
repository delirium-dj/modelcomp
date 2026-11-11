# GPT-5.2 — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.2 (`gpt-5.2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's reliable GPT generation (released 2025-12-11) for broad coding, writing and tool-assisted product work — a 400K-context workhorse now three GPT generations old.
- **Provider / access:** OpenAI API/Responses (`gpt-5.2`), Azure OpenAI, plus ~30 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, LowRouter, Unorouter).
- **Release / knowledge:** 2025-12-11; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.2`, `openai/gpt-5.2`, `azure/gpt-5.2`, `opencode/gpt-5.2`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.75 / $14.00 per 1M input/output; cache read $0.175.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **65.8%**; OSWorld-Verified: **47.3%**; JobBench: **34.3%**; LifeVal: **49.3%**
- Gert Labs composite: **46.54**
- Terminal-Bench / Toolathlon / MCP-Atlas: no verified public rows published for 5.2
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- ARC-AGI-1 (semi-private): **86.17%**; ARC-AGI-2: **52.9%**
- BioBasicsBench: **31.2%**; HLE / GPQA Diamond / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **80%**; SWE-bench Pro: **55.6%**; Vibe Code Bench v1.1: **53.50%**
- DeepSWE / LiveCodeBench / FrontierCode: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** BrowseComp 65.8% is mid and OSWorld-Verified 47.3% is below the current agent baseline; with no TB/Toolathlon publication the score is a low-confidence floor.
- **Reasoning: 72/100.** ARC-AGI-1 86.17% is respectable for a 2025 model, ARC-AGI-2 52.9% and BioBasics 31.2% show the generational gap.
- **Context window: 85/100.** 400,000 tokens with 272,000 input — smaller than every 2026 flagship.
- **Multimodal: 82/100.** Text and image in, with the strongest verified row set in this report: MMMU 86.7%, Video-MME 86.0% (with subtitles), OmniDocBench 1.5 85.7%, RealWorldQA 83.3%, MathVision 83.0%.
- **Coding: 75/100.** SWE-bench Verified 80% is decent, Vibe Code Bench 53.5% mid, SWE-bench Pro 55.6% weak for a "broad coding" model.
- **Cost efficiency: 80/100.** $1.75/$14 per 1M — mid, but well above GPT-5.6 Terra's $2/$12 for less capability.
- **Overall Score: 75.8/100.** Best fit for multimodal document/video understanding on a budget; obsolete for coding and agent work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2 — OpenAI](https://openai.com/index/gpt-5-2/)
  - [GPT-5.2 benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-2)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.2_v2.md`, using the same headings.