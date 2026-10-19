# Hy3 Preview — findings by Nemotron 3 Ultra 550B A55B

- Source: Tencent (`hy3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview (instruct)
- **Short description:** Tencent's cost-efficient open-weights reasoning MoE model (299B total / 21B active) with 256K context, strong GPQA Diamond 89.7%, and ultra-low $0.14/$0.55 pricing under Apache 2.0 license.
- **Provider / access:** Tencent Platform, OpenCode Zen (`opencode/hy3` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`tencent/Hy3`), 4 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-07-06 release; knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/Hy3` (Hugging Face), `opencode/hy3` (OpenCode Zen). Open weights available for self-hosting (Apache 2.0 license).
- **Context window:** 260,000 tokens total (256K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.136/M in, $0.555/M out (Tencent API / AA). 75% cache discount (AA). Blended 7:2:1 ≈ $0.11/M (AA). Cost per Intelligence Index task: $0.07 (AA).
- **Architecture:** MoE (Mixture of Experts), 299 billion total parameters, 21 billion active parameters per token; open weights (Apache 2.0 license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- GDPval-AA v2: **1136 Elo** (Artificial Analysis) / **28.3%** normalized (Artificial Analysis)
- AA Agentic Index: **25.6%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (Artificial Analysis)
- HLE: **33.5%** (Artificial Analysis)
- AA Intelligence Index: **25** (rank #31/121 open weights) (Artificial Analysis)
- AA LCR: **79.0%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- AA HLE: **33.5%** (Artificial Analysis)
- AA Omniscience Index: **-18.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **32.0%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **74.1%** (Artificial Analysis)

Coding:

- AA Coding Index: **58.8%** (Artificial Analysis)
- AA-SciCode: **48.6%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1183** (OpenRouter)

Long context:

- AA LCR: **79.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 45/100.** GDPval 1136 Elo (well below 1750+ frontier), AA Agentic Index 25.6%. No TB 2.1/4.0, OSWorld, MCP Atlas, Toolathlon, Tau2, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA Diamond 89.7% (near 90%+ frontier), AA LCR 79.0%. Capped by AA Intelligence Index 25 (<60 frontier), HLE 33.5% (below 40%+ frontier), CritPt 4.9%, AA Omniscience Index -18.5% (negative), Hallucination 74.1%.
- **Context window: 55/100.** 256K native context; AA LCR 79.0%. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 60/100.** AA Coding Index 58.8% (near 70%+), AA-SciCode 48.6% (near 55%+). No SWE-bench/LiveCodeBench/DeepSWE/FrontierCode/CursorBench data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 95/100.** $0.136/$0.555 per 1M, blended ~$0.11/M, 75% cache discount, cost/task $0.07. Methodology: ~$0.10/$0.20 = 97-99; ultra-low open-weights pricing → 95.
- **Overall Score: 46/100.** Half-up mean of (45 + 55 + 55 + 15 + 60) / 5 = 46.0 → 46. Best-fit: ultra-cost-efficient open-weights reasoning model for text tasks; GPQA 89.7% and LCR 79% at $0.14/$0.55 are standout; weak HLE, high hallucination, and text-only limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Artificial Analysis, BenchLM), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.