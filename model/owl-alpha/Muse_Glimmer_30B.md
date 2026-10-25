# Owl Alpha — findings by Muse Glimmer 30B

- Source: OpenRouter / Stealth `openrouter/owl-alpha` (later identified as Meituan LongCat-2.0 preview)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Owl Alpha
- **Short description:** Anonymous stealth foundation model offered free on OpenRouter April 2026 for agentic workloads with native tool use and 1M context. Identified June 2026 as Meituan’s LongCat-2.0 preview; full LongCat-2.0 released June 30 2026, open weights MIT July 12 2026.
- **Provider / access:** OpenRouter `openrouter/owl-alpha` via Stealth provider, OpenAI-compatible Chat Completions API. Post-reveal access as `meituan/longcat-2.0`.
- **Release / knowledge:** 2026-04-28 stealth release; official LongCat-2.0 2026-06-30. Knowledge cutoff not publicly disclosed.
- **IDs:** `openrouter/owl-alpha`
- **Context window:** 1,048,576 tokens total, ~262,144 max output. Verified by OpenRouter listing, Benchable, stealthmodels, designforonline.
- **Modalities:** Input text; Output text. Reasoning yes, native tool calls yes, structured outputs supported. No verified image/audio/video support; multimodal listings are text-only.
- **Pricing (as of 2026-10-25):** Preview free $0 / 1M input, $0 / 1M output via OpenRouter Stealth with prompt logging for model improvement. Post-reveal LongCat-2.0 listed $0.30 / 1M input, $1.20 / 1M output per Artificial Analysis 2026-09-28.
- **Architecture:** Meituan LongCat-2.0: 1.6T MoE total, ~48B active per token average, native 1M context. Open weights MIT released 2026-07-12.

### Raw benchmarks found

> Sources: Benchable model page for openrouter/owl-alpha; stealthmodels.com Owl Alpha profile with Artificial Analysis 2026-09-28; RoboRhythms review 2026-05-15; designforonline.com model page.

Agent / tool use:

- Benchable reliability: **99% success rate** across eight benchmarks — Benchable
- Tool-call error rate: **4.73%**; structured-output error rate **0.39%**; throughput **12 tps**, latency **4.91s** — RoboRhythms review
- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Science: **78.0%** — Artificial Analysis via stealthmodels, LongCat-2.0 June release
- HLE Hard knowledge: **33.7%** — Artificial Analysis via stealthmodels, 7-model comparison, #3/7
- LCR / MLCR: **AA-LCR 65.0%** — Artificial Analysis via stealthmodels
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: Benchable Hallucinations Baseline **100% accuracy**; General Knowledge **52.0%** accuracy 16th percentile — Benchable

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **36.3%** — Artificial Analysis via stealthmodels, LongCat-2.0
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Benchable Coding **90.9% accuracy**, 65th percentile — Benchable; Mathematics **95.0% accuracy**, 89th percentile — Benchable

Long context:

- AA-LCR v1.1 **65.0%** at 1M window reported by Artificial Analysis; native 1M context verified. No public RULER/GraphWalks score found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Native tool calling with 99% reliability and 0.39% structured-output error, but 4.73% tool-call error rate and ~12 tps speed tax cap agentic effectiveness. No independent Terminal-Bench/Tau scores.
- **Reasoning: 70/100.** GPQA Science 78.0% and Benchable Reasoning 79.6% 57th percentile support solid general reasoning; HLE 33.7% and General Knowledge 52.0% 16th percentile limit high-end knowledge depth.
- **Context window: 95/100.** 1,048,576-token native context verified across multiple sources; competitive long-context tier. Lacks public RULER/GraphWalks retrieval metrics.
- **Multimodal: 15/100.** Text-in/text-out only per OpenRouter and designforonline; no verified image/audio/video support.
- **Coding: 65/100.** Benchable Coding 90.9% and Mathematics 95.0% indicate strong structured problem solving; SciCode 36.3% from Artificial Analysis shows more modest scientific coding performance. Conflict suggests domain variance.
- **Cost efficiency: 100/100.** $0 input/output during stealth preview. Logged prompts for training and slow throughput are non-price costs.
- **Overall Score: 63/100.** Mean of five quality dims (68+70+95+15+65)/5 = 62.6 → 63. Best-fit: free, large-context agentic prototype with usable tool use and reasoning but limited multimodal evidence and modest scientific coding and knowledge benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
