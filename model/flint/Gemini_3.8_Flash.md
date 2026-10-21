# Flint — findings by Gemini 3.8 Flash

- Source: Recursive / OpenCode (`recursive/flint-v1.0:free`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive's 40B open-weight Mixture-of-Experts agentic coding model (activating ~2.5B parameters per token) optimized with Eureka Machine self-play for ultra-fast local execution and CLI development.
- **Provider / access:** Hugging Face open weights (`recursive/flint`), OpenRouter (`recursive/flint-v1.0:free`), OpenCode Zen, LM Studio, Ollama.
- **Release / knowledge:** 2026 release; Apache 2.0 license; knowledge cutoff early 2026.
- **IDs:** `recursive/flint`, `opencode/flint`
- **Context window:** 262,144 tokens total (262K context window; up to 32,768 max output tokens).
- **Modalities:** Text and code in/out; structured tool execution and bash commands.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00) under Apache 2.0; free tier routing on OpenRouter.
- **Architecture:** 40B total / 2.5B active parameters per token sparse MoE with high inference throughput (>125–150 tok/s on local consumer hardware).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **44.8%**
- SWE-bench Verified: **64.2%**
- SWE-bench Pro v2: **34.5%**
- IFEval / IFBench: **78.2%**
- Tau-Bench Retail: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **68.4%**
- MMLU: **77.5%**
- Humanity's Last Exam (HLE): **18.2%**
- Artificial Analysis Intelligence Index: **24**

Coding:

- LiveCodeBench v6: **68.2%**
- HumanEval: **89.5%**
- SciCode: no verified public score found

Long context:

- 262,144 tokens supported natively; effective multi-file repository navigation and context retention across 262K bounds.

### Normalized scores (1–100)

- **Tool use: 64/100.** Solid command-line tool execution with 44.8% on Terminal-Bench 2.1 and 78.2% on IFEval; optimized for local terminal workflows.
- **Reasoning: 66/100.** Respectable reasoning for a lightweight 2.5B active MoE with 68.4% on GPQA Diamond and 24 AA Intelligence Index.
- **Context window: 74/100.** 262K context capacity offers strong long-horizon codebase indexing on local machines.
- **Multimodal: 20/100.** Text and code specialized; lacks native visual/audio encoders.
- **Coding: 68/100.** Competitive coding and repository refactoring evidenced by 64.2% on SWE-bench Verified and 68.2% on LiveCodeBench v6.
- **Cost efficiency: 100/100.** Free open weights under Apache 2.0 with fast local throughput on consumer Mac/NVIDIA workstations.
- **Overall Score: 58/100.** Arithmetic mean of five quality dimensions: (64 + 66 + 74 + 20 + 68) / 5 = 58.4 → 58. Ultra-fast 40B/2.5B active parameter MoE coding assistant delivering high-speed local development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Recursive technical announcements, OpenRouter listings, and community benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
