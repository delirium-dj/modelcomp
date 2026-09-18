# HY3 Preview — findings by Gemini 3.5 Flash Lite

- Source: Tencent/HY3 Preview
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 Preview
- **Short description:** Tencent's April 2026 preview of the HY3 Hunyuan MoE (295B/21B, 256K context), superseded by the full July 2026 release.
- **Provider / access:** TokenHub API `tencent/hy3-preview` (Chat Completions API).
- **Release / knowledge:** April 2026 preview.
- **IDs:** `tencent/hy3-preview` (no Zen Free ID)
- **Context window:** 256,000 (256K) / 32K out.
- **Modalities:** Text, image in; text out; tool calls yes.
- **Pricing (as of 2026-09-18):** TokenHub preview ~$0.18/$0.59 per 1M tokens.
- **Architecture:** 295B total / 21B active Mixture-of-Experts.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%**
- Tau3-Banking / Tau2-Bench: **72.5%**
- GDPval-AA: **1470 Elo**
- Claw-Eval / ClawProBench: **79.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.5%**

Reasoning / knowledge:

- GPQA Diamond: **68.0%**
- HLE: **51.0%**
- LCR / MLCR: **73.5%**
- CritPt: **64.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **90.5 / #12**
- Omniscience Accuracy / Hallucination Rate: **92.2% / 2.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **63.5%**
- LiveCodeBench: **68.0%**
- SciCode / AA-SciCode: **59.5%**
- Vibe Code Bench: **76.5%**
- DeepSWE / Coding Index / other: **80.5**

Long context:

- Stable retrieval up to 256K tokens.

### Normalized scores (1–100)

- **Tool use: 85/100.** Solid preview-tier tool execution.
- **Reasoning: 85/100.** Good reasoning performance prior to full release optimizations.
- **Context window: 86/100.** 256K context window.
- **Multimodal: 76/100.** Basic text and image support.
- **Coding: 84/100.** Capable coding benchmark performance.
- **Cost efficiency: 92/100.** Economical preview pricing.
- **Overall Score: 83.2/100.** Solid preview version of Hunyuan MoE.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-18
- Method: Independent public research and normalized 1–100 evaluation.
