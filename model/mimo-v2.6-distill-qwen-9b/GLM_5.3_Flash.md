# MiMo-V2.6-Distill-Qwen-9B — findings by GLM 5.3 Flash

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, open-weights SFT checkpoint)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** A 9B agentic model from Xiaomi MiMo — supervised fine-tuning of Alibaba's Qwen3.5-9B on MiMo-generated data (77.4B total SFT tokens / 27.2B loss-bearing). Covers coding, general-purpose agent tasks, visual coding, and cybersecurity; released as an open SFT starting point for agentic RL research. Smaller local-hardware sibling of the hosted MiMo-V2.6-Pro/Flash frontier models.
- **Provider / access:** self-host only (Hugging Face weights, Transformers/vLLM/SGLang/llama.cpp GGUF); not deployed by any HF Inference Provider as of 2026-10-01; no hosted API found.
- **Release / knowledge:** SFT checkpoint released September 2026 (GGUF conversion by ggml-org on 2026-09-21); Xiaomi followed up with -Flash-MOPD / -Pro-MOPD checkpoints on 2026-09-27; knowledge cutoff not disclosed.
- **IDs:** `xiaomimimo/mimo-v2.6-distill-qwen-9b` (state explicitly: no Free ID exists on Zen — self-host or community GGUF only).
- **Context window:** native context window not verified in the model card or coverage; local GGUF guides start at an 8,192-token context for first tests (bartowski 5.84 GB Q4_K_M), which is a local default, not the native limit. Unverified.
- **Modalities:** text + image input (image-text-to-text pipeline), text output; thinking toggle (`enable_thinking`) with MiMo v2.6 chat template; tool calls yes (tool-use tag, agentic training); JSON mode not verified.
- **Pricing (as of 2026-10-01):** open weights under MIT license — $0 self-hosted (community quantizations: 55 GGUFs; bartowski Q4_K_M 5.84 GB). No hosted API pricing found.
- **Architecture:** 9B params (BF16), base model Qwen/Qwen3.5-9B; SFT (distillation) on MiMo-generated data; open weights MIT; 22 finetunes / 11 merges downstream.

### Raw benchmarks found

> MiMo-V2.6 technical report numbers as published on the Hugging Face model card (fetched 2026-10-01). † marks internal evaluation sets. Base model (Qwen3.5-9B) reference in parentheses.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (base 27.0) (source: HF model card / MiMo-V2.6 tech report)
- Toolathlon-Verified: **35.2%** avg@1 (base 25.9) (HF model card)
- AutomationBench v1.0.6: **30.3%** avg@1 (base 5.0) (HF model card)
- OfficeQA: **19.5%** avg@1 (base 9.0) (HF model card)
- JobBench: **18.3%** avg@1 (base 2.6) (HF model card)
- MiMo General (mini)†: **62.2%** avg@1 (base 28.5) (HF model card — internal set)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- MiMo Cyber (mini)†: **31.3%** avg@3 (base 5.7) (HF model card — internal set; cybersecurity reasoning proxy)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **61.1%** avg@3 (base 60.0) (source: HF model card + SWE-bench leaderboard eval result)
- SWE Pro: **44.6%** avg@3 (base 32.0) (HF model card / ScaleAI SWE-bench Pro eval)
- MiMo Code (mini)†: **51.6%** avg@3 (base 19.5) (HF model card — internal set)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- MiMo Visual Coding (mini)†: **64.0%** avg@1 (base 61.7) (HF model card — internal set)

Long context:

- No long-context retrieval reported (no MRCR/RULER measurement; native window unverified).

Speed / cost / other verified measurements:

- Local community runs: **64 tok/s peak** across 2 runs on 1 GPU (source: llm-bench.io, MiMo-V2.6-Distill-Qwen-9B-Q6_K).
- GGUF first-test setup: 5.84 GB Q4_K_M with 8,192-token context (source: atomic.chat local guide).

### Normalized scores (1–100)

- **Tool use: 40/100.** TB2.1 37.1%, Toolathlon 35.2%, AutomationBench 30.3% — below the methodology mid band (TB2.1 45–60% → 50–70); strong gains over its Qwen3.5-9B base but still a 9B-class executor. Capped by small-model agentic capacity.
- **Reasoning: 48/100.** No public GPQA/HLE/Index; internal MiMo General (mini) 62.2% and Cyber 31.3% suggest mid-low general reasoning — marked provisional (internal sets only). Capped by no public third-party reasoning benchmarks.
- **Context window: 35/100.** Native context window unverified; local GGUF guides default to 8,192 tokens for first tests — provisional low-mid score, capped by the unverified native limit and no measured long-context retrieval.
- **Multimodal: 65/100.** Image + text input with text output (image-text-to-text) and MiMo Visual Coding 64.0% → +image-in band (60–70); no audio/video input verified.
- **Coding: 62/100.** SWE-bench Verified 61.1% (barely above its base's 60.0), SWE Pro 44.6%, MiMo Code (mini) 51.6% → mid band; SWE-V gain over base is marginal, capping the score.
- **Cost efficiency: 100/100.** MIT open weights, self-hosted at $0 (Q4_K_M runs on a single GPU; 64 tok/s peak). No hosted API found — scored on self-host economics. Excluded from Overall.
- **Overall Score: 50/100.** (40 + 48 + 35 + 65 + 62) / 5 = 50.0 → 50. Best-fit recommendation: a free, single-GPU local agent for visual/cyber/coding experiments and an RL research starting point — not a production planner; use the bigger MiMo-V2.6-Pro/Flash for hosted frontier work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Hugging Face model card, ModelScope/coverage pages, llm-bench.io, atomic.chat, fetched 2026-10-01); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
