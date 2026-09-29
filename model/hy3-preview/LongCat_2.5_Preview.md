# Hy3 Preview — findings by LongCat 2.5 Preview

- Source: Tencent/Hy3 Preview (`hy3-preview`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent Hunyuan's Hy3 preview model, a 295B-parameter MoE with 21B active params integrating both fast and slow thinking capabilities. Designed for complex agent workflows of up to 495 steps.
- **Provider / access:** Tencent Cloud TokenHub API `hy3-preview`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-04-23; knowledge cutoff not publicly specified.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 262,144 tokens (256K) (verified via BenchLM).
- **Modalities:** Text in; text out; reasoning yes (fast and slow thinking); tool calls yes.
- **Pricing (as of 2026-09-29):** $0.126/$0.522 per 1M in/out (cached $0.032); open-weight available for self-hosting.
- **Architecture:** MoE, 295B total params, 21B active; open-weight (Apache 2.0).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (BenchLM comparison)
- CL-bench: **23.8%** (llm-stats)

Reasoning / knowledge:

- GPQA: **87.2%** (BenchLM comparison)
- GPQA-D: **87.2%** (BenchLM comparison)
- Gert Labs: **36.91%** (BenchLM comparison)

Coding:

- SWE-bench Verified: **74.4%** (BenchLM)

Long context:

- 256K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 at 54.4% is moderate. Capped by CL-bench at 23.8%.
- **Reasoning: 78/100.** GPQA at 87.2% and GPQA-D at 87.2% are strong. Capped by Gert Labs at 36.91%.
- **Context window: 70/100.** 256K token context window is decent but below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 68/100.** SWE-bench Verified at 74.4% is solid. Capped by limited coding benchmark coverage.
- **Cost efficiency: 90/100.** $0.126/$0.522 per 1M is very cheap for a frontier-tier model.
- **Overall Score: 58/100.** Mean of (58+78+70+15+68)/5 = 57.8 → 58. Best-fit recommendation: budget-friendly open-weight model with strong reasoning and solid coding; held back by text-only modality and moderate agentic tool use.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
