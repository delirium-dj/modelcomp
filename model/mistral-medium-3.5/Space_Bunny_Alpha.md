# Mistral Medium 3.5 — findings by Space Bunny Alpha

- Source: Mistral AI (`mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 128B
- **Short description:** Mistral's first flagship merged open-weight model, combining instruction following, configurable reasoning, coding, vision, and agentic tool use in one dense 128B checkpoint.
- **Provider / access:** Mistral API `mistral-medium-3-5` (Chat Completions, Conversations, agents, built-in tools, structured outputs); Hugging Face `mistralai/Mistral-Medium-3.5-128B`; local vLLM/SGLang deployment.
- **Release / knowledge:** Official model docs list April 28, 2026; BenchLM lists April 29, 2026. No reliable knowledge cutoff was shown.
- **IDs:** `mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** 256K tokens (official model card and docs); maximum output was not shown.
- **Modalities:** Text and image input; text output; reasoning effort `none` or `high`; function calls, JSON output, agents, built-in tools, batching, and document Q&A supported.
- **Pricing (as of 2026-09-24):** Official Mistral docs list $1.50 per 1M input and $7.50 per 1M output tokens; Artificial Analysis reports a 90% cache discount and $0.44 per task on its evaluation.
- **Architecture:** Dense 128B open-weight model; Modified MIT License with commercial-use restrictions for large-revenue companies.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom / τ³-bench Tool-Agent-User: **91.4%** (official Mistral model card; BenchLM provider-exact Mistral Vibe source)
- Terminal-Bench 2.1 (Vals AI): **39.0%** (BenchLM, Vals AI leaderboard)
- Gert Labs Composite Game Benchmark: **39.10%** (BenchLM, exact benchmark source)
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **75.3%** (BenchLM, Vals AI leaderboard)
- GPQA Diamond (Vals AI): **34.8%** (BenchLM, Vals AI leaderboard)
- HLE, LCR/MLCR, CritPt, hallucination metrics, and exact additional Mistral reasoning values: **no verified public exact value found**
- Artificial Analysis Intelligence Index: **14/100**, rank **#6/65** (Artificial Analysis, accessed 2026-09-24)

Coding:

- SWE-bench Verified: **77.6%** (official Mistral model card; BenchLM provider-exact Mistral Vibe source)
- SWE-bench (Vals AI): **66.4%** (BenchLM, Vals AI leaderboard)
- SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Context capacity: **256K** (official Mistral model card and docs)
- No exact-model long-context retrieval benchmark was found.

Sources consulted: [Mistral Medium 3.5 model documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04), [official Hugging Face model card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/README.md), [Artificial Analysis Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5), and [BenchLM Mistral Medium 3.5 128B](https://benchlm.ai/models/mistral-medium-3-5-128b), accessed 2026-09-24. Official and Vals AI values are kept distinct.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ³-Telecom 91.4% is excellent, while Terminal-Bench Vals 39.0% and Composite Game 39.10% show harness/task sensitivity; missing GDPval, Toolathlon, and MCP values cap the score.
- **Reasoning: 66/100.** MMLU-Pro 75.3% and the AA Index 14 support moderate capability, but GPQA Vals 34.8% and missing HLE/LCR/CritPt values limit confidence.
- **Context window: 76/100.** The official 256K context is verified and falls in the 200K–500K tier; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are officially documented; audio/video are not listed.
- **Coding: 83/100.** SWE-bench Verified 77.6% and Vals SWE 66.4% support strong coding, with no exact LiveCodeBench, SciCode, or SWE-Pro value found.
- **Cost efficiency: 55/100.** The $1.50/$7.50 official rate is relatively expensive for the open-weight cohort; self-hosting can reduce provider cost but adds infrastructure expense.
- **Overall Score: 74.4/100.** (82 + 66 + 76 + 65 + 83) / 5 = 74.4. Best fit: self-hosted or API coding agents needing configurable reasoning, image input, and a broad Mistral tool stack.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of official Mistral documentation/model card, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
