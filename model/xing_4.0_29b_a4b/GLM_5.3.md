# Xing 4.0 29B A4B — findings by GLM 5.3

- Source: China Telecom AI / XingChen-AGI (`XingChen-AGI/Xing4.0-29B-A4B`; project stub `opencode/xing_4.0_29b_a4b`)
- Date: 2026-10-17 (UTC) — scored report replacing the 2026-10-17 `.excluded` negative-findings file after the open-weights discovery
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B (Xing series, formerly TeleChat)
- **Short description:** China Telecom AI's (星辰/XingChen-AGI) next-generation open MoE — 29B total / 4B active per token, natively 256K context (extensible to 512K), the first model of its scale trained entirely on Ascend NPU clusters with MindSpore, deeply optimized for complex engineering and agent tasks. Massively popular open release (50K+ downloads/month on the top HF repos, 60+ community quantizations within weeks).
- **Provider / access:** Hugging Face open weights `XingChen-AGI/Xing4.0-29B-A4B` (Apache 2.0; BF16/FP8/W8A8/GGUF/MLX variants plus a large community ecosystem incl. FlagOS multi-vendor builds); Transformers/vLLM/SGLang/KTransformers serving; fine-tune via LLaMA-Factory and MindFormers. The project stub's `opencode/xing_4.0_29b_a4b` ID remains absent from live Zen (identity resolves to the HF release).
- **Release / knowledge:** HF weights ~2026-09 (top repos updated 20-30 days before 2026-10-17; TeleChat3-MoE training report arXiv:2512.24157); knowledge cutoff not stated.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF); folder stub `opencode/xing_4.0_29b_a4b` (no live Zen endpoint).
- **Context window:** 256K native, extensible to 512K (model card).
- **Modalities:** text in / text out; thinking mode toggle (`enable_thinking`); tool calling / agent-framework adapted (OpenCode, Claude Code, OpenClaw, Hermes alignment); structured outputs; custom `xing4_0` architecture (`trust_remote_code`).
- **Pricing (as of 2026-10-17):** Apache 2.0 open weights — free self-hosting; 4-bit quant ≈15 GB VRAM (runs on RTX 3090/4090 per the official collection); no per-token hosted price verified.
- **Architecture:** 29B total / 4B active MoE; mHC + MLA + MTP architecture (multi-step planning-oriented); 40 layers, hidden 3584; MLA attention; 64 routed experts (4 active) + 1 shared; Ascend 910C + MindSpore training with ~96% throughput gain from co-optimization (mHC fused operators, MoE communication optimization, selective recomputation).

### Raw benchmarks found

> All numbers are vendor-run from the official HF model card (comparison vs Gemma4-26B-A4B and Qwen3.6-35B-A3B), with harness parameters disclosed per-benchmark in the card footnotes. No independent aggregator coverage yet (BenchLM: no page; AA: no page).

Agent / tool use:

- Claw-Eval: **76.55%** (official; avg of 3 runs, 256K ctx) — beats Gemma4-26B 71.49% and Qwen3.6-35B 74.54%
- Tau3-Bench: **64.63%** (official; avg pass@1 of 4 runs) — mid, between Qwen3.6-35B 67.2% and Gemma4 58.9%
- Terminal-Bench 2.1: **57.5%** (official; avg of 3 runs, 24h timeout) — nearly doubles Gemma4-26B's 30.0%
- DeepresearchBII (OpenCode harness + Exa MCP): **60.8%** (official) — vs Gemma4 39.3%
- GDPval-AA / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- AIME 2026: **90.0%** (official; avg of 5 runs) — between Gemma4 88.3% and Qwen3.6-35B 92.7%
- AA-LCR: **61.0%** (official; avg of 3 runs) — below both comparators (66.0/62.0)
- IFBench: **69.67%** (official) — mid
- GPQA / HLE / MMLU / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **75.0%** (official; SWE-agent harness, 210K ctx) — outstanding for 4B active; crushes Gemma4-26B's 53.0%, matches Qwen3.6-35B's 76.0%
- SWE-bench Multilingual: **66.0%** (official) — near Qwen3.6-35B 67.2%
- SuperCLUE: **93.52** (official collection blurb — Chinese-knowledge composite, vendor-run)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- 256K native (512K extensible); AA-LCR 61.0% is the only long-context-adjacent measurement — moderate; no MRCR/RULER published.

Multimodal:

- no verified public score found — text-only model.

### Normalized scores (1–100)

- **Tool use: 72/100.** Claw-Eval 76.55% and DeepresearchBII 60.8% lead its size class outright, Terminal-Bench 2.1 57.5% nearly doubles the Gemma4 comparator, and Tau3 64.63% is respectable — a genuinely agent-tuned small MoE; capped by vendor-only sourcing, no GDPval/MCP-Atlas coverage, and AA-LCR weakness hinting at long-horizon context limits.
- **Reasoning: 62/100.** AIME 2026 90.0% is excellent for 4B active, but AA-LCR 61.0% trails both comparators, IFBench 69.67% is mid, and the core reasoning suite (GPQA/HLE/MMLU) is entirely unpublished — provisional mid score.
- **Context window: 72/100.** 256K native sits in the 200K–500K tier just above the 200K=70 anchor; the 512K extension is documented but unverified in serving, and measured long-context reasoning (AA-LCR 61.0%) is modest.
- **Multimodal: 15/100.** Text-only input and output — text-only band.
- **Coding: 75/100.** SWE-bench Verified 75.0% is the standout — matching Qwen3.6-35B (a larger active count) and crushing the same-size Gemma4-26B by 22 points — with SWE Multilingual 66.0% supporting; capped by no LiveCodeBench/SciCode/DeepSWE rows and vendor-only sourcing.
- **Cost efficiency: 95/100.** Apache 2.0 weights that self-host at ~15 GB VRAM in 4-bit (consumer-GPU class for a 29B MoE), no verified hosted price — effectively free at the only verified access path; Ascend-native training suggests cheap domestic serving too.
- **Overall Score: 59/100.** Half-up mean of (72 + 62 + 72 + 15 + 75) / 5 = 59.2 → 59. Best-fit recommendation: the best small open-weights agentic-coding base to emerge from the Chinese telecom labs — SWE-bench Verified 75.0% and agent-bench leadership at 4B active make it a consumer-GPU domain-fine-tuning champion (intent classification, contract auditing, knowledge QA per the vendor); verify the unpublished reasoning suite before trusting knowledge-heavy work.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-17
- Method: public internet research (official HF model card `XingChen-AGI/Xing4.0-29B-A4B` with full benchmark table and per-benchmark harness footnotes, official HF collection blurb (SuperCLUE), TeleChat3-MoE training report (arXiv:2512.24157) citation lineage, HF ecosystem scan showing 60+ community quantizations and FlagOS multi-vendor builds, models.dev registry, live Zen endpoint). This pass supersedes the same-day `.excluded` file written before the HF release was located; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
