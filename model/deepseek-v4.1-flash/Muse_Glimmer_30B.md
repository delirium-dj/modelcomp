# DeepSeek V4.1 Flash — findings by Muse Glimmer 30B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`. Signed log: `../../model-findings.md`.

- Source: DeepSeek/deepseek-v4.1-flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek API `deepseek/deepseek-v4.1-flash`; OpenAI/Anthropic compatible endpoints. Reasoning on/off.
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4.1-flash` (no Zen Free ID)
- **Context window:** 1M total tokens; up to 384K output. Verified via Artificial Analysis and DeepSeek docs.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** Peak $0.30 / 1M input, $1.20 / 1M output; off-peak $0.15 / $0.60. Cache-hit input $0.006 peak / $0.003 off-peak. Paid.
- **Architecture:** 552B total parameters MoE, ~16B active per token during decode; Causal Encoder-Decoder, MIT license, open weights on Hugging Face.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.1: **90.6%** (DeepSeek official model card cited by BuildFastWithAI, 2026-09-10) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]
- AutomationBench: **54.8** (DeepSeek official model card cited by Flowtivity, 2026-09-10) [flowtivity.ai/blog/deepseek-v4-1-flash-benchmarks/]
- CyberGym: **88.1** (DeepSeek official model card cited by Flowtivity) [flowtivity.ai/blog/deepseek-v4-1-flash-benchmarks/]
- Terminal-Bench 4.0: **31.2** (DeepSeek reported, BuildFastWithAI) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]
- Terminal-Bench 3.0: **30.0** (DeepSeek reported, BuildFastWithAI) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **90.9% Pass@1** (DeepSeek reported, BuildFastWithAI) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **39** (Artificial Analysis, updated 2026-09-10) [artificialanalysis.ai/models/deepseek-v4-1-flash]
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE v1.1: **74.2** resolved (DeepSeek official model card cited by Flowtivity) [flowtivity.ai/blog/deepseek-v4-1-flash-benchmarks/]
- Codeforces rating: **3471** (DeepSeek reported, BuildFastWithAI) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]
- NL2Repo-Bench: **65.4** (DeepSeek reported, BuildFastWithAI) [blog.buildfastwithai.com/deepseek-v4-1-flash-review]

Long context:
- No long-context retrieval reported publicly; context window 1M per vendor and Artificial Analysis.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 88/100.** Terminal-Bench 2.1 90.6% is frontier-class; AutomationBench 54.8 caps agentic workflow breadth; no Tau3/GDPval numbers.
- **Reasoning: 88/100.** GPQA Diamond 90.9% is frontier; Artificial Analysis Intelligence Index 39 is well above median; HLE/LCR missing caps.
- **Context window: 95/100.** 1M input / 384K output tier per methodology; retrieval quality not independently verified.
- **Multimodal: 65/100.** Native image in + text out; no video/audio input reported.
- **Coding: 90/100.** DeepSWE v1.1 74.2 and Terminal-Bench 2.1 90.6 indicate strong agentic coding; LiveCodeBench/SciCode missing caps top-end.
- **Cost efficiency: 92/100.** $0.30/$1.20 peak pricing is competitive for this capability class; off-peak halves cost.
- **Overall Score: 85/100.** Mean of Tool 88 + Reasoning 88 + Context 95 + Multimodal 65 + Coding 90 = 85.2 → 85. Best-fit for high-volume agentic coding with image input.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25 UTC
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
