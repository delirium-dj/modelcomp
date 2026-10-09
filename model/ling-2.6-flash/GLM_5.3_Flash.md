# Ling-2.6-flash — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** InclusionAI's (Ant Group's AGI lab) open-source instruct model optimized for inference efficiency, token efficiency, and agent performance — built for high-frequency, everyday agent workloads rather than long-reasoning score-chasing. Superseded by Ling 3.0 Flash (AA now benchmarks only historical 10K-input workloads).
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-2.6-flash`) and ModelScope; self-hosted via SGLang (MTP/NEXTN, BF16/FP8) or vLLM; online playground at `https://ling.tbox.cn/chat`; runs Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw. No first-party hosted API pricing verified as of 2026-10-09.
- **Release / knowledge:** 2026-04-21 release (AA; official open-source announcement); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-2.6-flash` (self-host); no Free ID on OpenCode Zen verified.
- **Context window:** 262,144 total (131,072 native extended to 262K via YaRN factor 2.0 per the official SGLang config; AA lists 262K) — verified against both sources; max output not stated.
- **Modalities:** text in, text out; reasoning no (instruct model, direct responses per AA — token-efficiency optimized); tool calls yes (`qwen25` tool-call parser); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-09):** no verified public hosted-API pricing found; open weights under MIT (commercial use permitted, self-host).
- **Architecture:** 104B total (HF card; 107B per AA/safetensors) / 7.4B active MoE; hybrid linear attention (1:7 MLA + Lightning Linear, upgraded from GQA via incremental training); up to ~4× prefill/decode throughput vs size-class peers; MIT license.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **61.2%** (official HF eval results — also claimed SOTA-level vs larger active-param models on the model card)
- BFCL-V4 / TAU2-Bench / Claw-Eval / PinchBench: claimed **SOTA-level against larger-active-param models** (official HF card — no exact numbers published, provisional)
- Artificial Analysis Intelligence Index: **10 (estimated) / #3 of 39 in class** (AA model page — above the non-reasoning open-weight median of 7; only 15M tokens used across the full AA suite)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- AIME 2026: **73.85%** (official HF eval results, MathArena)
- HMMT Feb 2026: **49.29%** (official HF eval results, MathArena)
- GPQA Diamond / HLE / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Verified: **61.2%** (official HF eval results)
- SWE-bench Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- "strong long-context understanding" claimed (no MRCR/RULER/AA-LCR number reported; 262K is YaRN-extended from a 131K native window)

Speed: up to 340 tokens/s on 4× H20 (official HF card); ~4× prefill/decode throughput vs size-class peers at long outputs. Known limitations (vendor-stated): tool hallucinations from limited reasoning depth; Chinese↔English bilingual switching offsets; complex-instruction compliance.

### Normalized scores (1–100)

- **Tool use: 62/100.** Provisional — vendor claims SOTA-level BFCL-V4/TAU2/PinchBench performance against larger models but publishes no numbers; the one verified anchor is SWE-bench Verified 61.2% (a code-agent harness), mid-band, and vendor-stated tool hallucinations cap it.
- **Reasoning: 52/100.** AA's estimated Index 10 sits below the 20–35 mid-band, AIME 2026 73.85% and HMMT 49.29% are mid-tier math results, and no GPQA/HLE numbers are public — this is an efficiency-tuned instruct model, not a deep reasoner.
- **Context window: 72/100.** 262K total (131K native + YaRN 2.0) sits inside the 200K–500K band; no measured long-context retrieval benchmark is published to climb higher.
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA — no image/audio/video support.
- **Coding: 62/100.** SWE-bench Verified 61.2% is mid-band (below the DeepSWE 74%+ frontier reference); missing SWE-bench Pro, LiveCodeBench, and SciCode numbers cap the score.
- **Cost efficiency: 88/100.** Provisional — no verified public hosted-API pricing found; scored on open-weights self-host economics (7.4B active, up to 340 tokens/s on 4× H20, only 15M tokens across the full AA suite) and MIT commercial-use licensing. Not counted toward Overall.
- **Overall Score: 53/100.** Mean of the five quality dims (62 + 52 + 72 + 15 + 62) / 5 = 52.6 → 53. Best-fit recommendation: a fast, lean high-frequency agent workhorse for cost-sensitive production loops; escalate for deep reasoning, complex instructions, or multimodal tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (official Hugging Face model card and eval results, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
