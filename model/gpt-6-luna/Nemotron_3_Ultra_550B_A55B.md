# GPT-6 Luna — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Max effort tier)
- **Short description:** OpenAI's most cost-efficient GPT-6 variant with 1M context, ultra-low $0.10/$0.50 pricing, and fast 124 tok/s output, scoring 38 on AA Intelligence Index.
- **Provider / access:** OpenAI API (`gpt-6-luna` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-6-luna` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 8 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-luna` (OpenAI API), `opencode/gpt-6-luna` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $0.10/M in, $0.01/M cache read, $0.125/M cache write, $0.50/M out. >272K tokens: $0.20/M in, $0.02/M cache read, $0.25/M cache write, $0.75/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $0.08/M (AA). Cost per Intelligence Index task: $0.07 (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- ExploitGym: **11.6%** (OpenAI GPT-6 Astra system card)
- GDPval-AA v2: **1432 Elo** (Artificial Analysis) / **46.6%** normalized (Artificial Analysis)
- GDP.pdf: **22.8%** (Artificial Analysis)
- AA Briefcase Elo: **1335** (Artificial Analysis)
- AA AutomationBench: **53.2%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **12.6%** (Artificial Analysis)
- AA AnalystAgent: **43.8%** (Artificial Analysis)
- Hermes Index: **33.9%** / Hermes Bench: **70.5%** (Nous Research)
- MazeBench: **0%** (ASCII mode, no tools)
- GDPval-AA v2: **1432 Elo** (Artificial Analysis)

Reasoning / knowledge:

- ARC-AGI-1: **86.67%** (ARC Prize semi-private)
- ARC-AGI-2: **59.3%** (ARC Prize semi-private)
- ARC-AGI-3: **0.1%** (ARC Prize semi-private)
- ARC-AGI-3 Provider Adapter: **0.59%** (ARC Prize)
- AA Intelligence Index: **38** (rank #10/173 in price tier) (Artificial Analysis)
- AA HLE: **38.5%** (Artificial Analysis)
- AA LCR: **83.3%** (Artificial Analysis)
- CritPt: **19.4%** (Artificial Analysis)
- MLCR-AA: **16.1%** (Artificial Analysis)
- AA Omniscience Index: **0.7%** (Artificial Analysis)
- AA Omniscience Accuracy: **43.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **76.7%** (Artificial Analysis)
- HealthBench raw: **50.0%** / length-adjusted **54.5%** / Professional **60.8%** / Professional raw **61.2%** / Hard **31.4%** (OpenAI GPT-6 Astra system card)
- FrontierMath v2 Tiers 1-3: **78.947%** (Epoch AI)
- FrontierMath v2 Tier 4: **56.098%** (Epoch AI)

Coding:

- DeepSWE: **66.6%** (OpenAI GPT-6 Sol/Luna blog)
- AA-SciCode: **54.6%** (Artificial Analysis)
- Bug Hunt Bench: **18.3 fixes** (public data)

Multimodal:

- AA MMMU-Pro: **79.7%** (Artificial Analysis)

Long context:

- AA LCR: **83.3%** (Artificial Analysis)
- MLCR-AA: **16.1%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** GDPval 1432 Elo (below 1750+ frontier), AA AutomationBench 53.2%, AA Briefcase 1335 Elo, ExploitGym 11.6%. No TB 2.1/4.0, BrowseComp, OSWorld, MCP Atlas, Toolathlon, Tau2 data. Capped by minimal agentic benchmark coverage and TB 4.0 12.6%.
- **Reasoning: 65/100.** ARC-AGI-1 86.67% / ARC-AGI-2 59.3%, FrontierMath Tiers 1-3 78.9% / Tier 4 56.1%, AA LCR 83.3%. Capped by AA Intelligence Index 38 (<60 frontier), CritPt 19.4%, ARC-AGI-3 0.1%, AA Omniscience Index 0.7%, Hallucination 76.7%.
- **Context window: 95/100.** 1.05M native context; AA LCR 83.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 79.7%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 70/100.** DeepSWE 66.6% (near 74%+ frontier), AA-SciCode 54.6% (near 55%+). No SWE-bench/LiveCodeBench/DeepSWE/FrontierCode/CursorBench data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M, blended ~$0.08/M, 90% cache discount, cost/task $0.07. Methodology: ~$0.10/$0.20 = 97-99; ultra-low pricing → 98.
- **Overall Score: 73/100.** Half-up mean of (65 + 65 + 95 + 70 + 70) / 5 = 73.0 → 73. Best-fit: cheapest GPT-6 variant with 1M context and reasoning; ultra-low cost ($0.10/$0.50) enables high-volume use; reasoning depth (CritPt, Omniscience) and agentic breadth lag Sol/Astra variants.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-6 Luna page, GPT-6 Astra System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.