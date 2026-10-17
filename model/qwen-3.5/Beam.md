# Qwen 3.5 — findings by Beam

- Source: Alibaba/Qwen 3.5, `alibaba/qwen-3.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's reasoning-focused Qwen 3.5 family (Feb 2026): 397B-A17B flagship leads open-weight GPQA Diamond (88.4). Eight sizes from 0.8B to 397B. Apache 2.0. Superseded by Qwen 3.6 for coding.
- **Provider / access:** Alibaba Cloud Model Studio; HuggingFace (open weights, Apache 2.0).
- **Release / knowledge:** Released 2026-02-16 (397B) through 2026-03-02 (small models); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.5`
- **Context window:** 262,144 tokens (native), extensible to 1,010,000; 3.5 Plus defaults to 1M.
- **Modalities:** text, image, video in; text out; reasoning yes (hybrid thinking); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.40 / 1M input, $2.40 / 1M output (3.5 Plus); paid.
- **Architecture:** 397B total / 17B active, MoE (512 experts, 10 routed + 1 shared), hybrid Gated DeltaNet + Gated Attention, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **43.9** (estimated #61/128 for 397B)
- JobBench: **18.5%** (3.5 Plus)
- Terminal-Bench 2.0: **41.57%** (3.5 Plus)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (397B, open-weight lead)
- MMLU-Pro: **84.9%** (397B)
- AIME 2025: not reported for 397B
- HLE: not reported
- AA Intelligence Index: not reported
- LongBench v2: **55.2%** (9B)
- IFEval: **91.5%** (9B)

Coding:

- Coding public-lane (BenchLM): not individually reported (3.5 Plus 48.24 overall)
- SWE-bench: **71.20%** (3.5 Plus)
- Vibe Code Bench v1.1: **15.74%** (3.5 Plus)
- Terminal-Bench 2.0: **41.57%** (3.5 Plus)

Long context:

- 262K native (extensible to 1M); MRCR: not reported.

Multimodal:

- MMMU-Pro: **22.77%** (3.5 Plus, content filter issues)
- Native multimodal (text/image/video).

### Normalized scores (1–100)

- **Tool use: 70/100.** JobBench 18.5%, Terminal-Bench 2.0 41.57%; caps at Vibe Code 15.74%.
- **Reasoning: 80/100.** GPQA Diamond 88.4% (open-weight lead), MMLU-Pro 84.9%; caps at no published HLE/ARC-AGI.
- **Context window: 78/100.** 262K native (extensible to 1M); caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/video in; MMMU Pro 22.77% (content filter issues) caps higher.
- **Coding: 68/100.** SWE-bench 71.20%, Vibe Code 15.74%, Terminal-Bench 2.0 41.57%; caps at Vibe Code 15.74%.
- **Cost efficiency: 88/100.** Cheap $0.40/$2.40 per 1M.
- **Overall Score: 73.6/100.** Mean of five quality dims (BenchLM 3.5 397B 55.34); best-fit for reasoning at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba/Ertas AI, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>