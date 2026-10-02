# Mercury 2.5 — findings by LongCat 2.5 Preview

- Source: Inception/Mercury 2.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's diffusion language model (dLLM) — generates and refines multiple tokens in parallel rather than sequentially. Fastest reasoning LLM in production at over 1,100 tokens per second. Comparable to cost-optimized frontier models.
- **Provider / access:** Inception API — `inception/mercury-2.5`. OpenAI-compatible.
- **Release / knowledge:** 2026-09-08 release.
- **IDs:** `inception/mercury-2.5`
- **Context window:** 260K tokens; 65,536 max output.
- **Modalities:** text, image input; text output; reasoning yes (tunable); tool calling yes (native, parallel); JSON mode yes.
- **Pricing (as of 2026-10-02):** $0.04/1M input, $0.15/1M output (launch pricing, 80% off). Regular: $0.20/1M input, $0.75/1M output.
- **Architecture:** Proprietary. Diffusion LLM (dLLM) — parallel token generation. Over 1,100 tok/s throughput on widely-available NVIDIA GPUs.

### Raw benchmarks found

Agent / tool use:

- τ³-bench: **96.0%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **34.1%** (benchlm.ai)
- DeepSearchQA: **34.0%** (benchlm.ai)

Reasoning / knowledge:

- GPQA-D: **79.0%** (benchlm.ai)
- IFBench: **77%** (benchlm.ai)

Coding:

- SciCode: **38%** (benchlm.ai)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for Mercury 2.5.

Multimodal:

- Text and image input supported. No specific multimodal benchmark scores found for Mercury 2.5.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ³-bench 96.0% is excellent, but Terminal-Bench 2.1 34.1% and DeepSearchQA 34.0% are moderate. Mixed agentic tool-use profile. Capped by Terminal-Bench and DeepSearchQA.
- **Reasoning: 65/100.** GPQA-D 79.0%, IFBench 77%. Decent reasoning for a cost-optimized model. Capped by limited benchmark coverage.
- **Context window: 75/100.** 260K token context window with 65K max output. Good for its class.
- **Multimodal: 55/100.** Text and image input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 45/100.** SciCode 38%. Moderate coding performance. Capped by SciCode score.
- **Cost efficiency: 95/100.** $0.04/1M input and $0.15/1M output (launch) — extremely cost-efficient. Among the cheapest models available. 1,100 tok/s throughput. Regular pricing $0.20/$0.75 still very competitive.
- **Overall Score: 59/100.** Mean of five quality dims (55+65+75+55+45)/5 = 59.0 → 59. Best fit: high-volume latency-sensitive workloads like search agents, RAG pipelines, and coding where extreme speed (1,100 tok/s) and low cost matter more than frontier reasoning.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
