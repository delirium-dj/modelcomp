# Ling-2.6-flash — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-2.6-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** InclusionAI's (Ant Group's AGI lab) open-source instruct model optimized for inference efficiency, token efficiency, and agent performance — built for high-frequency, everyday agent workloads rather than long-reasoning score-chasing. Superseded by Ling 3.0 Flash and far surpassed by Ling 3.1 Flash (62.06 BenchLM). BenchLM ranks it #167 of 889 (32.73).
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-2.6-flash`) and ModelScope; self-hosted via SGLang (MTP/NEXTN, BF16/FP8) or vLLM; online playground at `https://ling.tbox.cn/chat`; runs Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw.
- **Release / knowledge:** 2026-04-21 release (AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-flash` (self-host); no Free ID on OpenCode Zen verified.
- **Context window:** 262,144 total (BenchLM concurs; 131,072 native extended to 262K via YaRN factor 2.0); max output not stated.
- **Modalities:** text in, text out; reasoning no (instruct model, direct responses per AA); tool calls yes (`qwen25` tool-call parser); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-11):** no verified public hosted-API pricing found; open weights under MIT.
- **Architecture:** 104B total (HF card; 107B per AA/safetensors) / 7.4B active MoE; hybrid linear attention (1:7 MLA + Lightning Linear); up to ~4× prefill/decode throughput vs size-class peers; MIT license.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10, now computing 32.73 #167) fills every prior gap with AA-sourced rows — most are floor-class, with τ²-bench 86% a striking outlier. Scores move down materially on the measured evidence.

Agent / tool use:

- τ²-bench: **86%** (AA — fills the gap; strong, a striking outlier vs the rest of the board)
- GDPval-AA: **550** (AA — normalized **0.0%**, floor)
- SciCode: **27%** (AA — fills the gap; very weak); AA Coding Index: **25.3%** (AA — new; very weak)
- BFCL-V4 / TAU2 (vendor claims) / Claw-Eval / PinchBench: claimed SOTA-level, no exact numbers published (prior pass)
- Terminal-Bench / GDPval (vendor) / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (AA — fills the gap; low); AA-GPQA Diamond: **59.3%** (corroborated)
- HLE: **6.3%** (AA — fills the gap; floor); Artificial Analysis Intelligence Index: **14.1** (AA current board — recomposed from the prior 10 reading; still low)
- AA-LCR v1.1: **31.3%** (AA — fills the long-context gap; very weak); CritPt: **0.0%** (AA — floor)
- AA-Omniscience: **15.6% accuracy / 96.7% non-hallucination row / −66.1 index** (AA — repo worst by a wide margin)
- IFBench: **57% / 57.4%** (AA — corroborated)
- AIME 2026: **73.85%**; HMMT Feb 2026: **49.29%** (prior pass, HF eval results)

Coding:

- SWE-bench Verified: **61.2%** (official HF eval results — prior pass)
- SWE-bench Pro / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR 31.3% is the first measured long-context number (very weak); 262K YaRN-extended

Speed: up to 340 tokens/s on 4× H20; ~4× prefill/decode throughput vs size-class peers. Known limitations (vendor-stated): tool hallucinations from limited reasoning depth; bilingual switching offsets; complex-instruction compliance.

### Normalized scores (1–100)

- **Tool use: 56/100.** (Was 62 on the prior pass.) The τ²-bench 86% is a striking outlier that alone supports strong tool use, but GDPval 0.0% (floor), SciCode 27%, AA Coding 25.3% and the vendor-stated tool hallucinations document a weak standardized profile — one band down on the balanced evidence.
- **Reasoning: 48/100.** (Was 52 on the prior pass.) The AA board fills every gap at floor-to-low levels: GPQA 59.3%, HLE 6.3%, Index 14.1, CritPt 0.0%, and the −66.1 Omniscience index (repo worst by a wide margin) — one band down.
- **Context window: 66/100.** (Was 72 on the prior pass.) 262K total (BenchLM concurs) sits in the 200K–500K band; AA-LCR 31.3% is the first measured long-context evidence and it is very weak.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA.
- **Coding: 52/100.** (Was 62 on the prior pass.) SWE-bench Verified 61.2% (HF) stands, but the newly measured SciCode 27%, AA Coding Index 25.3% and GDPval 0.0% document significantly weaker standardized coding than the vendor-only framing implied — two bands down.
- **Cost efficiency: 88/100.** Provisional — no verified public hosted-API pricing; scored on open-weights self-host economics (7.4B active, up to 340 tokens/s on 4× H20) and MIT licensing. Not counted toward Overall.
- **Overall Score: 47.4/100.** (Was 53 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (56 + 48 + 66 + 15 + 52) / 5 = 237/5 = 47.4 — lowered materially on the 2026-10-11 second pass as the AA board replaces the vendor-claims-only framing with floor-class measured evidence. Best-fit recommendation: a fast, lean high-frequency agent workhorse for cost-sensitive loops where the τ² 86% tool-call strength is the one validated bright spot; the Ling 3.1 generation (59.4 Overall) supersedes it on every dimension.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Ling 2.6 Flash page with AA board citations (now computing 32.73 #167), the prior 2026-10-09 pass on the HF model card + AA; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
