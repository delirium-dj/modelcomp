# Mistral Medium 3.5 — findings by Space Bunny Alpha

- Source: Mistral AI (`mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5 128B
- **Short description:** Mistral's first flagship merged open-weight model, combining instruction following, configurable reasoning, coding, vision, and agentic tool use in one dense 128B checkpoint.
- **Provider / access:** Mistral API `mistral-medium-3-5` (Chat Completions, Conversations, agents, built-in tools, structured outputs); Hugging Face `mistralai/Mistral-Medium-3.5-128B`; local vLLM/SGLang deployment. Available through 2 API providers per Artificial Analysis.
- **Release / knowledge:** Official model docs list April 28, 2026; BenchLM and Artificial Analysis both list **April 29, 2026**. No reliable knowledge cutoff was shown.
- **IDs:** `mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** **256K tokens** (official model card and docs; Artificial Analysis technical spec also says 256k, while its FAQ text rounds to 260k). Maximum output was not shown.
- **Modalities:** Text and image input; text output; reasoning effort `none` or `high`; function calls, JSON output, agents, built-in tools, batching, and document Q&A supported.
- **Pricing (as of 2026-09-29):** Unchanged — $1.50 per 1M input and $7.50 per 1M output tokens, 90% cache discount, blended $1.16 per 1M on a 7:2:1 cache-hit/input/output ratio. Artificial Analysis reports a **$0.50 cost per task** on its evaluation (changed from $0.44 on 2026-09-24; Cost rank #4/65).
- **Speed / latency (newly documented):** Artificial Analysis measures **164.7 output tokens/second** with a **2.28 s TTFT** on Mistral's API (Speed rank #9/65, above the open-weights median of 129.1 t/s and 2.19 s).
- **Architecture:** Dense 128B open-weight model (30–150B size class); Modified MIT License with commercial-use restrictions for large-revenue companies.

### Raw benchmarks found

> No benchmark row changed since 2026-09-24. The AA Intelligence Index value of 14 and rank #6/65 are unchanged on the model's own Artificial Analysis page under Intelligence Index **v4.3.2** (accessed 2026-09-29).

Agent / tool use:

- τ³-Telecom / τ³-bench Tool-Agent-User: **91.4%** (official Mistral model card; BenchLM provider-exact Mistral Vibe source)
- Terminal-Bench 2.1 (Vals AI): **39.0%** (BenchLM, Vals AI leaderboard)
- Gert Labs Composite Game Benchmark: **39.10%** (BenchLM, exact benchmark source)
- Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- MMLU-Pro (Vals AI): **75.3%** (BenchLM, Vals AI leaderboard)
- GPQA Diamond (Vals AI): **34.8%** (BenchLM, Vals AI leaderboard)
- Artificial Analysis Intelligence Index: **14**, rank **#6/65** (Artificial Analysis v4.3.2, accessed 2026-09-29; unchanged)
- HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **77.6%** (official Mistral model card; BenchLM provider-exact Mistral Vibe source)
- SWE-bench (Vals AI): **66.4%** (BenchLM, Vals AI leaderboard)
- SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Context capacity: **256K** (official Mistral model card and docs; Artificial Analysis technical spec)
- No exact-model long-context retrieval benchmark was found.

Sources consulted: [Mistral Medium 3.5 model documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04), [official Hugging Face model card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/README.md), [Artificial Analysis Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5), and [BenchLM Mistral Medium 3.5 128B](https://benchlm.ai/models/mistral-medium-3-5-128b), accessed 2026-09-29. Official and Vals AI values are kept distinct. The v4.3.2 value was read from the model's own Artificial Analysis page, not from a comparison page.

### Normalized scores (1–100)

- **Tool use: 82/100.** Unchanged. τ³-Telecom 91.4% is excellent, while Terminal-Bench Vals 39.0% and Composite Game 39.10% show harness/task sensitivity; missing GDPval, Toolathlon, and MCP values cap the score.
- **Reasoning: 66/100.** Unchanged. MMLU-Pro 75.3% and the AA Index 14 support moderate capability, but GPQA Vals 34.8% and missing HLE/LCR/CritPt values limit confidence.
- **Context window: 76/100.** Unchanged. The official 256K context is verified and falls in the 200K–500K tier; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Unchanged. Text and image input with text output are officially documented; audio/video are not listed.
- **Coding: 83/100.** Unchanged. SWE-bench Verified 77.6% and Vals SWE 66.4% support strong coding, with no exact LiveCodeBench, SciCode, or SWE-Pro value found.
- **Cost efficiency: 55/100.** Unchanged. The $1.50/$7.50 official rate and a rising $0.50 per task remain relatively expensive for the open-weight cohort; self-hosting can reduce provider cost but adds infrastructure expense.
- **Overall Score: 74.4/100.** (82 + 66 + 76 + 65 + 83) / 5 = 74.4. Unchanged. Best fit: self-hosted or API coding agents needing configurable reasoning, image input, and a broad Mistral tool stack.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of official Mistral documentation/model card, Artificial Analysis (Intelligence Index v4.3.2, read from the model's own page), and BenchLM. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
