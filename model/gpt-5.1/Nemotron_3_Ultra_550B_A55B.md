# GPT-5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (High effort tier)
- **Short description:** OpenAI's early GPT-5 series reasoning model with 400K context, good speed (121 tok/s), at competitive $1.25/$10 pricing.
- **Provider / access:** OpenAI API (`gpt-5.1` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.1` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 2 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2025-11-13 release; knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5.1` (OpenAI API), `opencode/gpt-5.1` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 400,000 tokens total (400K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.25/M in, $10.00/M out (OpenAI API & OpenCode Zen). 90% cache discount (AA). Blended 7:2:1 ≈ $1.34/M (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **81.9%** (Artificial Analysis)
- Gert Labs: **41.24%** (Gert Labs rankings)
- GDPval-AA v2: **930 Elo** (Artificial Analysis) / **16.3%** normalized (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (Artificial Analysis)
- HLE: **28.5%** (Artificial Analysis)
- AA Intelligence Index: **25** (estimated) (Artificial Analysis)
- AA LCR: **80.0%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- ARC-AGI-1: **72.83%** (ARC Prize verified)
- AA HLE: **28.5%** (Artificial Analysis)
- AA Omniscience Index: **5.4%** (Artificial Analysis)
- AA Omniscience Accuracy: **37.7%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **51.9%** (Artificial Analysis)
- AA IFBench: **72.9%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **24.61%** (Vals AI)
- AA Coding Index: **49.4%** (Artificial Analysis)

Multimodal:

- AA MMMU-Pro: **75.5%** (Artificial Analysis)
- Design Arena Website: **1188** (OpenRouter)

Long context:

- AA LCR: **80.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** Tau2 81.9% (strong structured tool use), Gert Labs 41.2%. No TB 2.0/2.1/4.0, GDPval (930 Elo well below 1750+ frontier), OSWorld, MCP Atlas, Toolathlon, Tau3, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA Diamond 87.3% (near 90%+ frontier), ARC-AGI-1 72.83%, AA LCR 80.0%, AA IFBench 72.9%. Capped by HLE 28.5% (below 40%+ frontier), AA Intelligence Index 25 (est., <60 frontier), CritPt 4.9%, AA Omniscience Index 5.4%, Hallucination 51.9%.
- **Context window: 65/100.** 400K native context; AA LCR 80.0%. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 60/100.** Text + image input only; MMMU-Pro 75.5%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 50/100.** Vibe Code 24.61%, AA Coding Index 49.4% (below 70%+). No SWE-bench/LiveCodeBench/DeepSWE/FrontierCode/CursorBench data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M, blended ~$1.34/M, 90% cache discount. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.25/$10 interpolates to ~80.
- **Overall Score: 56/100.** Half-up mean of (50 + 55 + 65 + 60 + 50) / 5 = 56.0 → 56. Best-fit: early GPT-5 series with good speed and Tau2 tool use; limited context (400K), weak HLE, and minimal coding/agentic benchmarks limit general use; succeeded by GPT-5.2/5.4.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Artificial Analysis), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.