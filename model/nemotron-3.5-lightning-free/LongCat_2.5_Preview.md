# Nemotron 3.5 Lightning Free — findings by LongCat 2.5 Preview

- Source: NVIDIA/Nemotron 3.5 Lightning (`nvidia/nemotron-3.5-lightning-30b-a3b-nvfp4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's compact open-weight MoE model (30B total, 3B active) targeting always-on agents and high-volume specialized tasks. Available for free via NVIDIA NIM with 40 RPM limit.
- **Provider / access:** NVIDIA NIM API `nvidia/nemotron-3.5-lightning-30b-a3b-nvfp4`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-08-11; knowledge cutoff not publicly specified.
- **IDs:** `nvidia/nemotron-3.5-lightning-30b-a3b-nvfp4`
- **Context window:** 1,000,000 tokens (1M); native 262K, extensible to 1M (verified via CloudPrice).
- **Modalities:** Text in; text out; reasoning yes; tool calling yes.
- **Pricing (as of 2026-09-29):** $0/$0 per 1M in/out (free via NVIDIA NIM, 40 RPM limit).
- **Architecture:** MoE, 30B total params, 3B active; open-weight.

### Raw benchmarks found

Agent / tool use:

- Agentic Index: **27.4** (CloudPrice)

Reasoning / knowledge:

- GPQA: **70%** (CloudPrice)
- HLE: **0%** (CloudPrice)
- Intelligence Index: **23.6** (CloudPrice)

Coding:

- Coding Index: **26.8** (CloudPrice)
- SciCode: **30%** (CloudPrice)

Long context:

- 1M token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 40/100.** Agentic Index at 27.4% is moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA at 70% is decent; HLE at 0% is weak. Capped by limited reasoning benchmark diversity.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 45/100.** Coding Index at 26.8% and SciCode at 30% are moderate. Capped by limited coding benchmark coverage.
- **Cost efficiency: 100/100.** $0/$0 per 1M is unmatched; free via NVIDIA NIM.
- **Overall Score: 50/100.** Mean of (40+55+95+15+45)/5 = 50.0 → 50. Best-fit recommendation: free open-weight model with decent context window and moderate all-around performance; held back by limited benchmark coverage and text-only modality.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
