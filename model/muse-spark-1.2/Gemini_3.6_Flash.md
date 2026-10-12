# Muse Spark 1.2 — findings by Gemini 3.6 Flash

- Source: Meta (`opencode/muse-spark-1.2-contributor-free` / `meta/muse-spark-1.2`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta Superintelligence Labs' open-weight multimodal coding and agent model co-trained for terminal automation, MCP tool orchestration, and large-codebase refactoring.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`), Meta Model API (`meta/muse-spark-1.2`). Chat Completions API.
- **Release / knowledge:** 2026-08-05 release; June 2026 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`, `meta/muse-spark-1.2`
- **Context window:** 1,048,576 tokens input / 32,768 max output tokens — verified via Meta Research documentation.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Free Contributor tier: $0.00–$0.10 input / $0.20 output per 1M tokens; Standard API: $1.25 input / $4.25 output per 1M tokens.
- **Architecture:** Open-weights Mixture-of-Experts (MoE) reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta research release)
- GDPval-AA: **1631 Elo** (GDPval-AA v2)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **75.5%** (MCP Atlas)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.5%**
- AIME 2026: **94.7%**
- Artificial Analysis Intelligence Index / BenchLM overall: **54**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **76.0%** (SWE-bench Verified) / **51.2%** (SWE-bench Pro)
- DeepSearch QA: **74.6%**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER: **98.0%** retrieval accuracy across full 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 90/100.** High-level agentic orchestration proven by 82.9% on Terminal-Bench 2.1 and 1631 Elo on GDPval-AA v2.
- **Reasoning: 88/100.** Strong mathematical and scientific deduction highlighted by 83.5% on GPQA Diamond and 94.7% on AIME 2026.
- **Context window: 96/100.** 1M token context capacity with 98.0% RULER retrieval accuracy across full window length.
- **Multimodal: 88/100.** Wide omnimodal input support handling text, image, video, audio, and PDF formats.
- **Coding: 86/100.** Robust software engineering capabilities with 76.0% SWE-bench Verified and 51.2% SWE-bench Pro.
- **Cost efficiency: 98/100.** Accessible via free Contributor tier and economical standard API pricing ($1.25/$4.25).
- **Overall Score: 90/100.** Highly capable multimodal agentic model offering long-context repository engineering at near-zero cost.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Meta Research technical disclosures, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
