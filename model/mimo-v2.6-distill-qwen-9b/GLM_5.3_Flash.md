# MiMo-V2.6-Distill-Qwen-9B — findings by GLM 5.3 Flash

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, open-weights SFT checkpoint)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** A 9B agentic model from Xiaomi MiMo — supervised fine-tuning of Alibaba's Qwen3.5-9B on MiMo-generated data (77.4B total SFT tokens / 27.2B loss-bearing). Covers coding, general-purpose agent tasks, visual coding, and cybersecurity; released as an open SFT starting point for agentic RL research. Smaller local-hardware sibling of the hosted MiMo-V2.6-Pro/Flash frontier models.
- **Provider / access:** self-host only (Hugging Face weights, Transformers/vLLM/SGLang/llama.cpp GGUF); not deployed by any HF Inference Provider; no hosted API found.
- **Release / knowledge:** SFT checkpoint released September 2026 (GGUF conversion by ggml-org on 2026-09-21); Xiaomi followed up with -Flash-MOPD / -Pro-MOPD checkpoints on 2026-09-27; knowledge cutoff not disclosed.
- **IDs:** `xiaomimimo/mimo-v2.6-distill-qwen-9b` (state explicitly: no Free ID exists on Zen — self-host or community GGUF only).
- **Context window:** native context window not verified in the model card or coverage; local GGUF guides start at an 8,192-token context for first tests (bartowski 5.84 GB Q4_K_M), which is a local default, not the native limit. Unverified.
- **Modalities:** text + image input (image-text-to-text pipeline), text output; thinking toggle (`enable_thinking`) with MiMo v2.6 chat template; tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-11):** open weights under MIT license — $0 self-hosted (community quantizations: 55 GGUFs; bartowski Q4_K_M 5.84 GB). No hosted API pricing found.
- **Architecture:** 9B params (BF16), base model Qwen/Qwen3.5-9B; SFT (distillation) on MiMo-generated data; open weights MIT; 22 finetunes / 11 merges downstream.

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM has no page for this SFT checkpoint (404 on the canonical slug) — no new aggregator evidence has surfaced since the 2026-10-01 pass; the HF model card / MiMo-V2.6 tech report rows stand. Scores are carried, not moved.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (base 27.0) (HF model card / MiMo-V2.6 tech report)
- Toolathlon-Verified: **35.2%** avg@1 (base 25.9); AutomationBench v1.0.6: **30.3%** (base 5.0); OfficeQA: **19.5%**; JobBench: **18.3%** (HF model card)
- MiMo General (mini)†: **62.2%** (internal set); MiMo Cyber (mini)†: **31.3%** avg@3 (internal set)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / BenchLM overall / Omniscience: no verified public score found (BenchLM 404 confirmed 2026-10-11)

Coding:

- SWE-bench Verified: **61.1%** avg@3 (base 60.0); SWE Pro: **44.6%** avg@3 (base 32.0) (HF model card + SWE-bench leaderboard eval result)
- MiMo Code (mini)†: **51.6%**; MiMo Visual Coding (mini)†: **64.0%** (internal sets)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported; native window unverified

Speed / cost / other verified measurements:

- Local community runs: **64 tok/s peak** across 2 runs on 1 GPU (llm-bench.io); GGUF first-test: 5.84 GB Q4_K_M with 8,192-token context (atomic.chat)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: no aggregator page exists (BenchLM 404) and no new rows surfaced for the SFT checkpoint.

- **Tool use: 40/100.** TB2.1 37.1%, Toolathlon 35.2%, AutomationBench 30.3% — below the methodology mid band (TB2.1 45–60% → 50–70); strong gains over its Qwen3.5-9B base but still a 9B-class executor.
- **Reasoning: 48/100.** No public GPQA/HLE/Index; internal MiMo General (mini) 62.2% and Cyber 31.3% suggest mid-low general reasoning — marked provisional (internal sets only).
- **Context window: 35/100.** Native context window unverified; local GGUF guides default to 8,192 tokens — provisional low-mid score, capped by the unverified native limit.
- **Multimodal: 65/100.** Image + text input with text output and MiMo Visual Coding 64.0% → +image-in band (60–70); no audio/video input verified.
- **Coding: 62/100.** SWE-bench Verified 61.1% (barely above its base's 60.0), SWE Pro 44.6%, MiMo Code (mini) 51.6% → mid band; the marginal SWE-V gain over base caps the score.
- **Cost efficiency: 100/100.** MIT open weights, self-hosted at $0 (Q4_K_M runs on a single GPU; 64 tok/s peak). No hosted API found — scored on self-host economics. Excluded from Overall.
- **Overall Score: 50.0/100.** (40 + 48 + 35 + 65 + 62) / 5 = 250/5 = 50.0 — unchanged. Best-fit recommendation: a free, single-GPU local agent for visual/cyber/coding experiments and an RL research starting point — not a production planner; use the bigger MiMo-V2.6-Pro/Flash for hosted frontier work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (verification pass: BenchLM 404 on the canonical slug — no aggregator page exists; the prior 2026-10-01 pass on the HF model card/MiMo-V2.6 tech report remains the evidence base); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
