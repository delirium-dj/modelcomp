# Qwen 3.8 27B — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen — Qwen3.8-27B
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's Qwen 3.8 27B dense open-weights model (27B, 262K/1M YaRN) for agentic coding and vision; GPQA 90.5%, SWE-bench 86.0% (Vals).
- **Provider / access:** Open weights on Hugging Face `Qwen/Qwen3.8-27B`; hosted via Qwen Cloud `qwen3.8-27b` and OpenRouter `qwen/qwen3.8-27b`. Chat Completions / Responses API. No OpenCode Zen Free ID.
- **Release / knowledge:** 2026-08 (Qwen3.8 family announcement); knowledge cutoff not publicly stated.
- **IDs:** `Qwen/Qwen3.8-27B` (HF), `qwen3.8-27b` (Qwen Cloud); no Zen Free ID.
- **Context window:** 262,144 native (extensible to 1,000,000 tokens with YaRN)
- **Modalities:** Text/image/video in; text out; reasoning yes (thinking on by default, reasoning_effort tunable); tool calls yes.
- **Pricing (as of 2026-10-20):** Open weights Apache-2.0 — self-host free. Qwen Cloud API $0.50 in / $3.00 out per 1M tokens; input implicit cache $0.10/1M.
- **Architecture:** Dense 27B parameters, causal LM with vision encoder, Apache-2.0 open weights.

### Raw benchmarks found

> Values from Hugging Face model card Benchmark Results section and Qwen Cloud specs, as verified 2026-10-20.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus) (**group**): 73.0 (source: Hugging Face Qwen/Qwen3.8-27B Benchmark Results, Text Performance)
- OSWorld-Verified: 84.3 (source: HF Benchmark Results, VL Performance)
- WebArena-Verified: 64.8 (source: HF Benchmark Results, VL Performance)
- AndroidWorld: 81.9 (source: HF Benchmark Results, VL Performance)
- ClawEval-MM Pass@3: 57.4, Average 56.9 (source: HF Benchmark Results, VL Performance)

Reasoning / knowledge:

- GPQA Diamond: 89.2% (source: HF Benchmark Results, Text Performance; Hugging Face eval results 89.2)
- HLE: 30.8% (source: HF Benchmark Results, Text Performance, judged by GPT-4o)
- IFBench: 79.5 (source: HF Benchmark Results, Text Performance)
- LiveCodeBench v6: 90.3% (source: HF Benchmark Results, Text Performance)

Coding:

- SWE-bench Pro: 61.7% (Claude Code harness, 256K context, source: HF Benchmark Results)
- DeepSWE 1.1: 42.2% (Claude Code harness, source: HF Benchmark Results; Hugging Face eval results 42.2)
- QwenSWEBench: 79.0 (in-house, avg@3 8h timeout, source: HF Benchmark Results)
- LiveCodeBench v6: 90.3% (see above)
- NL2Repo-Bench: 42.3 (Claude Code harness, source: HF Benchmark Results)
- CoWorkBench: 70.7 (long-horizon office work, source: HF Benchmark Results)

Long context:

- Native context 262,144 tokens; extensible to 1M with YaRN per model card. No verified MRCR/RULER/GraphWalks public score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 73.0 with strong OSWorld 84.3 / AndroidWorld 81.9; WebArena 64.8 caps the multimodal tool tier.
- **Reasoning: 78/100.** GPQA Diamond 89.2 near frontier 90%+; HLE 30.8 and IFBench 79.5 hold the score in high-mid band.
- **Context window: 85/100.** 262K native in 200K–500K tier; YaRN extension to 1M supports 500K–1M band mapping.
- **Multimodal: 85/100.** Verified native image + video in, text out; VL benchmarks show leadership in OSWorld/WebArena/ClawEval-MM.
- **Coding: 76/100.** LiveCodeBench 90.3 and QwenSWEBench 79.0 are strong; SWE-bench Pro 61.7 and DeepSWE 42.2 limit the ceiling.
- **Cost efficiency: 100/100.** Apache-2.0 open weights enable free self-host; API pricing $0.50/$3.00 is moderate for the class.
- **Overall Score: 79/100.** Mean of Tool 72 + Reasoning 78 + Context 85 + Multimodal 85 + Coding 76. Best fit: single-GPU dense agentic coding/vision work where open-weights deployment and 262K+ context matter.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; Hugging Face model card Benchmark Results and Qwen Cloud model page verified via webfetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
