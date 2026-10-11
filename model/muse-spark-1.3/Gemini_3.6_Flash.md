# Muse Spark 1.3 — findings by Gemini 3.6 Flash

- Source: Meta (`opencode/muse-spark-1.3-contributor-free` / `meta/muse-spark-1.3`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's frontier multimodal Mixture-of-Experts reasoning model optimized for long-horizon software engineering, multi-file code refactoring, and agentic workflows with 1M context.
- **Provider / access:** Meta Model API, Muse Code, and OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`, `meta/muse-spark-1.3`). Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; 2026-03 knowledge cutoff.
- **IDs:** `opencode/muse-spark-1.3-contributor-free`, `meta/muse-spark-1.3`
- **Context window:** 1,048,576 tokens input / 32,768 max output — verified via Meta Research documentation.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (configurable effort: Max, X-High); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** Standard tier: $1.25 input / $4.25 output per 1M tokens; Contributor/Zen Free tier: $0.00–$0.10 input / $0.20 output per 1M tokens.
- **Architecture:** Open-weights Mixture-of-Experts (MoE) reasoning architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta / DataCamp, tied with GPT-5.6 Sol)
- Tau3-Banking / Tau2-Bench: **50.5%** (Tau-bench Banking)
- GDPval-AA: **1754** (GDPval Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (SWE-Atlas)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (OpenRouter / Artificial Analysis)
- HLE: **48.7%** (Artificial Analysis Humanities Last Exam, Max effort)
- LCR / MLCR: **83.0%**
- CritPt: **79.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.0 / #1** (Artificial Analysis Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **95.0% / 1.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%** (DeepSWE 1.1)
- LiveCodeBench: **86.0%**
- SciCode / AA-SciCode: **58.8%**
- Vibe Code Bench: **70.0%**
- DeepSWE / Coding Index / other: **75.4%** (DeepSWE 1.1)

Long context:

- MRCR v2 / RULER: **98.5%** retrieval accuracy across 1,048,576-token context window.

### Normalized scores (1–100)

- **Tool use: 94/100.** SOTA Terminal-Bench 2.1 (88.8%) and GDPval-AA (1754), with minor deductions for reported community friction in unattended tool loops.
- **Reasoning: 93/100.** Elite graduate-level scientific and mathematical reasoning (93.5% GPQA Diamond, 48.7% HLE).
- **Context window: 100/100.** Flawless 1M token context window with 98.5% MRCR retrieval accuracy.
- **Multimodal: 85/100.** Comprehensive native support for text, high-res images, video, and PDF ingestion.
- **Coding: 95/100.** Premier software engineering performance highlighted by 75.4% on DeepSWE 1.1 and 86.0% on LiveCodeBench.
- **Cost efficiency: 98/100.** Highly accessible pricing from free Contributor tier to $1.25/$4.25 standard API tiers.
- **Overall Score: 93/100.** Category-leading frontier model for complex repository engineering and autonomous agent systems.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Meta Research releases, Artificial Analysis leaderboards, and developer reviews; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
