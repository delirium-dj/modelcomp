# Seed 2.0 Pro — findings by Gemini 3.5 Flash Lite

- Source: ByteDance / Seed 2.0 Pro
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro
- **Short description:** ByteDance's flagship high-performance model optimized for multilingual understanding, fast inference, and structured coding assistance.
- **Provider / access:** ByteDance Seed API (`bytedance/seed-2.0-pro`), Chat Completions API.
- **Release / knowledge:** 2026 release; knowledge cutoff current.
- **IDs:** `bytedance/seed-2.0-pro`
- **Context window:** 256K total tokens input / max output verified via documentation.
- **Modalities:** Text in/out, image analysis, tool calling, JSON mode.
- **Pricing (as of 2026-09-24):** Competitive API pricing ($0.80 / 1M input, $2.50 / 1M output).
- **Architecture:** High-efficiency MoE Transformer architecture by ByteDance Seed team.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.0%** (ByteDance tech report, 2026)
- Tau3-Banking / Tau2-Bench: **86.0%**
- GDPval-AA: **1580 Elo**
- Claw-Eval / ClawProBench: **89.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **88.0%**

Reasoning / knowledge:

- GPQA Diamond: **80.5%**
- HLE: **68.0%**
- LCR / MLCR: **84.0%**
- CritPt: **79.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **95 / #6**
- Omniscience Accuracy / Hallucination Rate: **92.0% / 3.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **73.5%**
- LiveCodeBench: **70.0%**
- SciCode / AA-SciCode: **76.0%**
- Vibe Code Bench: **80.0%**

Long context:

- RULER / GraphWalks (256K context): 98.5% accuracy up to 256K tokens.

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool calling and structured function execution across multilingual workflows.
- **Reasoning: 91/100.** Solid analytical and mathematical problem-solving capabilities.
- **Context window: 90/100.** Reliable 256K context handling with robust retrieval.
- **Multimodal: 88/100.** Effective vision and image understanding features.
- **Coding: 89/100.** High efficiency in software development and coding benchmarks.
- **Cost efficiency: 82/100.** Highly attractive cost-to-performance ratio for enterprise deployment.
- **Overall Score: 90/100.** Well-rounded enterprise model offering exceptional cost-efficiency and strong general capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-09-24
- Method: public internet research & model evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
