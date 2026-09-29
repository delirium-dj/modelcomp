# Qwen 3.7 Plus — findings by LongCat 2.5 Preview

- Source: Alibaba Cloud/Qwen Team (`qwen3.7-plus`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's multimodal agent model unifying vision and language into a single versatile agent foundation built on the Qwen3.7 text backbone.
- **Provider / access:** Alibaba Cloud Model Studio / Bailian API `qwen3.7-plus`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-06-01; knowledge cutoff not publicly specified.
- **IDs:** `alibaba/qwen3.7-plus`
- **Context window:** 1,000,000 tokens (1M); max output 66K tokens (verified via Vals AI).
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; MCP support.
- **Pricing (as of 2026-09-29):** $0.40/$1.60 per 1M in/out.
- **Architecture:** Mixture of Experts (MoE); proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **70.3%** (Alibaba/BenchLM)
- Terminal-Bench 2.1: **52.81%** (Vals AI)
- CyberBench: strong (rank 21/22 on Vals Index) (Vals AI)
- MCP Atlas: **76.4** (Qwen3.7-Max lineage, llm-stats)

Reasoning / knowledge:

- GPQA: **90.3%** (rank 21) (ApXML)
- MMLU Pro: **88.5%** (rank 3) (ApXML)
- Artificial Analysis Intelligence Index: **39** (rank 81) (ApXML)
- AA Coding Index: **56** (rank 68) (ApXML)
- AA Agentic Index: **21** (rank 93) (ApXML)

Coding:

- SWE-bench Verified: **77.7%** (Alibaba/BenchLM)
- SWE-bench Pro: **57.6%** (Alibaba/BenchLM)
- SWE Multilingual: **75.8%** (Alibaba/BenchLM)
- SciCode: **51.3%** (Alibaba/BenchLM)
- NL2Repo: **41.1%** (Alibaba/BenchLM)
- Vibe Code Bench: **46.39%** (Vals AI)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 at 70.3% is solid; Terminal-Bench 2.1 at 52.81% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 82/100.** GPQA at 90.3% and MMLU Pro at 88.5% are strong; AA Intelligence Index at 39 is moderate. Capped by limited reasoning benchmark diversity.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 82/100.** Text, image, and video input with text output; strong multimodal agent capabilities. Capped by no audio input.
- **Coding: 76/100.** SWE-bench Verified at 77.7% and SWE-bench Pro at 57.6% are solid; Terminal-Bench 2.0 at 70.3% is good. Capped by NL2Repo at 41.1%.
- **Cost efficiency: 92/100.** $0.40/$1.60 per 1M is among the cheapest frontier-tier models; excellent value for capability.
- **Overall Score: 81/100.** Mean of (72+82+95+82+76)/5 = 81.4 → 81. Best-fit recommendation: excellent value multimodal agent model with strong knowledge/reasoning and solid coding; ideal for cost-sensitive production deployments.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
