# Xing4.0-29B-A4B — findings by MiMo 2.6 Flash

- Source: China Telecom AI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom AI's lightweight agentic MoE (29B total / 4B active) from the Xing (星辰, formerly TeleChat) series — open weights, single-consumer-GPU deployable (~15 GB), built for multi-step tool-calling agents and complex engineering tasks; first model of its scale trained entirely on Ascend NPU with MindSpore.
- **Provider / access:** Open weights on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`, plus `-FP8` and `-GGUF` variants) and ModelScope; self-host via vLLM, SGLang, KTransformers, MindFormers; OpenAI-compatible API when self-hosted; adapted for OpenCode, Claude Code, OpenClaw and Hermes agent frameworks; ported to multiple AI chips via Zhipu FlagOS.
- **Release / knowledge:** open-sourced 2026-09-17 (GitHub news), officially released 2026-09-24 (GlobeNewswire/TechCrunch); knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF), ModelScope twin, GGUF repo `XingChen-AGI/Xing4.0-29B-A4B-GGUF`. No hosted $ API route found in sources; license not restated in the sources reviewed.
- **Context window:** 256K tokens native, extensible to 512K (HF/ModelScope model card); evaluations ran at 210K (SWE) / 256K (Claw-Eval).
- **Modalities:** text in/out (no vision/audio claimed); tool calling and long reasoning chains native (mHC + MLA + MTP agent-oriented architecture).
- **Pricing (as of 2026-10-21):** open weights — self-host cost only; GGUF ~19–20 GB (IQ4_NL), runs on a single consumer GPU with ~15 GB VRAM (vendor). No hosted API price verified.
- **Architecture:** MoE — 29B total / 4B active; 40 layers, hidden 3584, MLA attention, 64 routed experts (4 active) + 1 shared expert, dense FFN 9216; trained on Ascend NPU / MindSpore.

### Raw benchmarks found

> All figures are the vendor's own card (GitHub/HF/ModelScope, 2026-09-17); no independent replication found in this pass.

Agent / tool use:

- Tau3-Bench: **64.63** (vendor card; beats Qwen3.6-35B-A3B 67.20? — vendor table lists Qwen3.6 at 67.20, Xing at 64.63)
- Claw-Eval: **76.55** (official harness, 256K ctx — vendor beats both listed peers)
- Terminal-Bench 2.1: **57.50%** (terminus-2, avg of 3 runs — vendor table: ahead of Qwen3.6-35B-A3B 51.5 and Gemma4-26B-A4B 30.0)
- DeepresearchBII: **60.80** (vendor)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- AIME2026: **90.00** (vendor card)
- AA-LCR: **61.00** (vendor card)
- IFBench: **69.67** (vendor card)
- GPQA Diamond / HLE / Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **75.00** (SWE-agent harness, 210K ctx, temp 1.0 — vendor)
- SWE-bench Multilingual: **66.00** (vendor)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- Native 256K (512K extensible); no MRCR/RULER figure; SWE evals ran at 210K window (vendor notes)

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau3-Bench 64.63 and Claw-Eval 76.55 both clear the Tau3 ~50%+ frontier reference, Terminal-Bench 2.1 57.5% is strong mid-high — exceptional agent suite for a 4B-active model (vendor-measured; no independent replication yet).
- **Reasoning: 82/100.** AIME2026 90 and AA-LCR 61 are outstanding for the size class; missing GPQA/HLE/Index rows keep it out of the high 80s.
- **Context window: 73/100.** 256K native (512K ext) sits mid 200K–500K tier (262K-class peers score 72); no long-context retrieval measurement.
- **Multimodal: 15/100.** Text-only — no image/audio/video input or non-text output claimed.
- **Coding: 86/100.** SWE-bench Verified 75.0 clears the DeepSWE frontier reference (74%+) and SWE-Multilingual 66.0 is strong; missing LiveCodeBench/DeepSWE rows and vendor-only measurement cap it below 90.
- **Cost efficiency: 95/100.** Open weights, ~19 GB GGUF, single consumer GPU (~15 GB VRAM) — near-zero marginal cost; no hosted price found to score against.
- **Overall Score: 69/100.** Mean of (88 + 82 + 73 + 15 + 86) / 5 = 68.8 → 69. Best fit: cheapest single-GPU agentic coder with frontier-class Tau3/Claw/SWE numbers (vendor-measured); text-only and awaits independent replication.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (China Telecom AI press release, GitHub/HF/ModelScope vendor card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
