# Ling 2.6.1t — findings by Fledge Alpha

- Source: inclusionAI / Ant Group (`inclusionai/Ling-2.6-1T`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6.1t (Ling-2.6-1T)
- **Short description:** Ant Group's trillion-parameter open flagship — 1T total / ~63B active sparse MoE with "fast thinking" (compressed CoT) that cuts token cost to ~1/4 of comparable models while holding open-source SOTA on execution-heavy benchmarks. Folder slug is the normalized form of `Ling-2.6-1T`.
- **Provider / access:** OpenRouter `inclusionai/ling-2.6-1t` (incl. a free route via Kilo), Hugging Face weights (MIT), SGLang/vLLM; integrates with Claude Code, OpenClaw, OpenCode, CodeBuddy. Chat Completions.
- **Release / knowledge:** 2026-04-23 (AA listing) / weights open-sourced 2026-04-29.
- **IDs:** `inclusionai/ling-2.6-1t` (also `opencode/ling-2.6.1t`)
- **Context window:** 262K tokens; max output ~33K (Opper).
- **Modalities:** text in; text out; tool calling; structured output; fast-thinking mode. No vision.
- **Pricing (as of 2026-10-08):** $0.30 input / $2.50 output per 1M; cache read $0.06 (Ant Ling developer pricing); MIT open weights free.
- **Architecture:** 1T total / ~63B active hybrid linear-attention MoE (MLA + Lightning Linear); MIT license; arXiv 2606.15079.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **89.8%** (BenchSift/AA); **90%** (Opper)
- Terminal-Bench Hard: **31.1%** (BenchSift)
- BFCL-V4, PinchBench, Claw-Eval: open-source SOTA / top-tier claimed (HF model card; no exact values)
- AA Agentic Index: **48.2** (BenchSift)

Reasoning / knowledge:

- GPQA Diamond: **75.2%** (BenchSift/AA)
- HLE: **8.2%** (BenchSift)
- AA Intelligence Index: **33.6–34** with ~16M output tokens (BenchSift; HF model card)
- IFBench: **56.9%** (BenchSift)
- AIME26: open-source SOTA claimed (HF model card; no exact value)

Coding:

- SWE-bench Verified: **72.2%** (HF model card community eval)
- SciCode: **37.0%** (BenchSift)
- AA Coding Index: **33.1** (BenchSift)

Long context:

- AA-LCR: **34.7%** (BenchSift); 262K window.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Bench ~90% with open-source-SOTA BFCL-V4/PinchBench claims and production agent-framework support; TB Hard 31.1% caps it.
- **Reasoning: 58/100.** GPQA 75.2% at AA index 33.6 with extreme token efficiency; HLE 8.2% caps it.
- **Context window: 56/100.** 262K window; AA-LCR 34.7% is mediocre.
- **Multimodal: 15/100.** Text-only.
- **Coding: 72/100.** SWE-bench Verified 72.2% is strong open-weight coding; SciCode 37% caps it.
- **Cost efficiency: 72/100.** $0.30/$2.50 with fast-thinking token compression (~4x leaner) and free MIT weights; output price is not trivial.
- **Overall Score: 55/100.** Mean of (74, 58, 56, 15, 72) = 55.0 → 55. Best fit: self-hosted trillion-class agent execution (coding agents, tool workflows) where MIT licensing and token efficiency matter.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Hugging Face model card, BenchSift/Artificial Analysis, Opper, OpenRouter, Ant Ling developer docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
