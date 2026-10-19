# Solar Pro 4 — findings by Nemotron 3 Ultra 550B A55B

- Source: Upstage (`solar-pro-4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary reasoning model with 512K context, strong coding (SWE-bench Verified 70.6%, LiveCodeBench 87.8%), math (AIME 95.3%), and GPQA Diamond 89.0%.
- **Provider / access:** Upstage Platform, OpenCode Zen (`opencode/solar-pro-4` via `https://opencode.ai/inference/openai/v1/chat/completions`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `upstage/solar-pro-4` (Upstage), `opencode/solar-pro-4` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 512,000 tokens total (512K per BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Not publicly disclosed; OpenCode Zen pricing not listed.
- **Architecture:** Proprietary (Upstage); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (Upstage Solar Pro 4 launch post)
- BrowseComp: **49.2%** (Upstage Solar Pro 4 launch post)
- MCP Atlas: **61.4%** (Upstage Solar Pro 4 launch post)
- APEX-Agents: **18.7%** (Upstage Solar Pro 4 launch post)
- GDPval-AA normalized: **30.3%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Upstage Solar Pro 4 launch post) / **89.1%** (Artificial Analysis)
- MMLU-Pro: **86.3%** (Upstage Solar Pro 4 launch post)
- HLE without tools: **29.8%** (Artificial Analysis)
- AA LCR: **71.0%** (Upstage Solar Pro 4 launch post)
- CritPt: **6.3%** (Artificial Analysis)
- AA Intelligence Index: **26.6%** (Artificial Analysis)
- AA GPQA Diamond: **89.1%** (Artificial Analysis)
- AA HLE: **29.8%** (Artificial Analysis)
- AA Omniscience Index: **0.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **19.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **23.8%** (Artificial Analysis)
- KMMLU-Pro: **79.2%** (Upstage Solar Pro 4 launch post)
- AIME 2026: **95.3%** (Upstage Solar Pro 4 launch post)

Coding:

- Terminal-Bench 2.1: **57.0%** (Upstage Solar Pro 4 launch post)
- SWE-bench Verified: **70.6%** (Upstage Solar Pro 4 launch post)
- LiveCodeBench: **87.8%** (Upstage Solar Pro 4 launch post)
- AA-SciCode: **48.0%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1177** (OpenRouter)

Long context:

- AA LCR: **71.0%** (Upstage Solar Pro 4 launch post)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** TB 2.1 57.0%, BrowseComp 49.2%, MCP Atlas 61.4%, APEX 18.7%, GDPval 30.3% normalized. No TB 2.0/4.0, OSWorld, Toolathlon, Tau2 data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 75/100.** GPQA Diamond 89.0% (near 90%+ frontier), MMLU-Pro 86.3%, AA LCR 71.0%, AIME 95.3%. Capped by HLE 29.8% (below 40%+ frontier), AA Intelligence Index 26.6% (<60 frontier), CritPt 6.3%, AA Omniscience Index 0.3%.
- **Context window: 85/100.** 512K native context; AA LCR 71.0%. Methodology: 500K-1M = 85-94.
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 75/100.** LiveCodeBench 87.8% (strong), SWE-bench Verified 70.6% (near 80%+ frontier), TB 2.1 57.0%. Capped by AA-SciCode 48.0% (below 55%+), no DeepSWE/FrontierCode/CursorBench.
- **Cost efficiency: 50/100.** Pricing not publicly disclosed. Default midpoint.
- **Overall Score: 62/100.** Half-up mean of (60 + 75 + 85 + 15 + 75) / 5 = 62.0 → 62. Best-fit: strong proprietary reasoning model for coding and math; LiveCodeBench 87.8% and GPQA 89% are standout; limited agentic benchmarks and unknown pricing limit evaluation.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official launch post (Upstage blog), independent benchmark aggregators (Artificial Analysis, BenchLM), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.