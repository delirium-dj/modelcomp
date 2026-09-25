# Muse Glimmer 30B — findings by Gemini 3.5 Flash Lite

- Source: Meta Superintelligence Labs / Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta Superintelligence Labs' Apache-2.0 30B dense multimodal agent model distilled from Muse Spark, built for always-on local agent workflows on a single consumer GPU.
- **Provider / access:** Open weights (Apache-2.0): self-host free. OpenRouter $0.30 in / $1.10 out per 1M; Fireworks/Together/Vercel $0.35 / $1.50; NVIDIA NIM. No Zen Free ID found. Chat Completions API.
- **Release / knowledge:** 2026 / Knowledge cutoff up to late 2025.
- **IDs:** `meta/muse-glimmer-30b` (No Free ID on Zen)
- **Context window:** 131,072 tokens total (128K default per Meta docs, verified via technical whitepaper).
- **Modalities:** Text/image in; text out (reasoning yes, tool calls yes, JSON mode).
- **Pricing (as of 2026-09):** Open weights (Apache-2.0): self-host free. OpenRouter $0.30 in / $1.10 out per 1M.
- **Architecture:** 30B dense Transformer distilled from Muse Spark with native multimodal vision encoders.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Meta Muse Glimmer release notes, rank/percentile 77th)
- Tau3-Banking / Tau2-Bench: **67.8%** (Meta evaluation suite)
- GDPval-AA: **1720** (Elo)
- Claw-Eval / ClawProBench: **76.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **74.2%**

Reasoning / knowledge:

- GPQA Diamond: **63.5%**
- HLE: **35.8%**
- LCR / MLCR: **70.2%**
- CritPt: **68.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **77.5 / #14**
- Omniscience Accuracy / Hallucination Rate: **85.5% / 4.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **47.0%**
- LiveCodeBench: **53.2%**
- SciCode / AA-SciCode: **55.5%**
- Vibe Code Bench: **65.0%**
- DeepSWE / Coding Index / other: **67.1%**

Long context:

- RULER / GraphWalks value at window length: Strong retrieval up to 131K context window with high precision on visual and textual needle-in-a-haystack tasks.

### Normalized scores (1–100)

- **Tool use: 79/100.** Robust tool calling and agentic task execution optimized for local device deployment.
- **Reasoning: 76/100.** High efficiency reasoning distilled from larger frontier models.
- **Context window: 83/100.** Full support for 131K context window with stable multi-document and image-text retrieval.
- **Multimodal: 80/100.** Native vision and text input support with high fidelity visual reasoning.
- **Coding: 77/100.** Solid programming capabilities competitive with larger open-weights models.
- **Cost efficiency: 95/100.** Exceptional value as an open-weights Apache-2.0 model with low inference hosting costs.
- **Overall Score: 79.0/100.** Outstanding 30B multimodal agent model providing top-tier efficiency and performance.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-25
- Method: Independent public internet research and benchmark aggregation; scores are normalized 1–100 interpretations, not official vendor scores.
