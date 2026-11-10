# Qwen 3.5 2B — findings by Inkling 2 Small

- Source: Alibaba Cloud / Qwen Team (`Qwen/Qwen3.5-2B`; Zen route `opencode/qwen-3.5-2b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B (Qwen3.5-2B)
- **Short description:** Alibaba's open-weights dense ~2B-parameter native-multimodal (text/image/video in) Qwen 3.5 model — the smallest member of the Qwen 3.5 family, Apache-2.0, aimed at prototyping, edge/on-device and fine-tuning workloads. A distinct small checkpoint, not a tier of a larger model.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-2B` (open weights); hosted lanes: OpenCode Zen (`opencode/qwen-3.5-2b`, per folder metadata), Ollama (`qwen3.5:2b`), Qualcomm AI Hub, various inference providers; self-host via vLLM / SGLang / KTransformers / Transformers (OpenAI-compatible Chat Completions API).
- **Release / knowledge:** Qwen 3.5 generation launched February 2026 (HF citation: Qwen Team, February 2026); llm-stats.com lists release Mar 2, 2026. Knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.5-2B` (HF); `qwen3.5:2b` (Ollama); `opencode/qwen-3.5-2b` (Zen)
- **Context window:** 262,144 native; ~81,920 max output on provider rows — per HF model card (verified 2026-11-10)
- **Modalities:** Text, image, video in; text out; reasoning yes (non-thinking by default; thinking mode supported with caveats — prone to thinking loops per vendor notes); tool calling; JSON mode
- **Pricing (as of 2026-11-10):** **$0** — Apache-2.0 open weights; free hosted lanes reported for the Zen route; HF Inference Providers paid lanes per provider. No vendor-metered official API price.
- **Architecture:** ~2B-parameter causal LM with vision encoder (early-fusion multimodal); Gated DeltaNet linear attention + gated attention hybrid with sparse MoE FFN (24 layers; 2048 hidden; 248,320-token vocabulary); multi-token prediction (MTP) trained; Apache-2.0 license

### Raw benchmarks found

(All from the official Qwen3.5-2B model card, Thinking / Non-thinking where both reported, checked 2026-11-10)

Agent / tool use:

- BFCL-V4 (Thinking): **43.6**
- TAU2-Bench (Thinking): **48.8** (vendor note: airline-domain fix applied per the Claude Opus 4.5 system card)
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Thinking): **51.6** (vs Qwen3.5-0.8B: 11.9; Qwen3-1.7B: 40.1)
- MMLU-Pro: **55.3** (Non-thinking) / **66.5** (Thinking)
- MMLU-Redux: 69.2 / 79.6; C-Eval: 65.2 / 73.2; SuperGPQA: 30.4 / 37.5
- IFEval: 61.2 / 78.6; IFBench (Thinking): **41.3**; MultiChallenge (Thinking): **33.7**
- HMMT Feb 25 (Thinking): **22.9**; HMMT Nov 25 (Thinking): **19.6**
- MMMLU (Thinking): 63.1

Multimodal / vision:

- MMMU: **64.2** / 64.2; MMMU-Pro: 50.3 / 47.7; MathVista (mini): 76.7 / 73.9; MMBenchEN-DEV: 83.3; OCRBench: 84.5
- VideoMME (w/o sub.): 69.0; MLVU: 76.2; MVBench: 64.9

Coding:

- LiveCodeBench / SWE-bench / SciCode: no verified public score found for this exact model
- No coding-specific benchmark appears on the official card — nearest reasoning-math proxies (HMMT 19.6–22.9) are far below frontier

Long context:

- AA-LCR (Thinking): **25.6**; LongBench v2 (Thinking): **38.7**

### Normalized scores (1–100)

- **Tool use: 44/100.** BFCL-V4 43.6 and TAU2-Bench 48.8 are real agentic signals in-line with a 2B model; no MCP-Atlas corroboration; tool-calling docs are strong but benchmarks cap the score.
- **Reasoning: 52/100.** GPQA 51.6 (Thinking), MMLU-Pro 66.5 (Thinking) / 55.3 (Non-thinking) are respectable for 2B; HMMT ~20 and SuperGPQA 37.5 mark its ceiling on hard STEM.
- **Context window: 60/100.** 262,144 native context is large for this class, but AA-LCR 25.6 / LongBench v2 38.7 show retrieval quality is weak — window size outpaces effective use.
- **Multimodal: 62/100.** Genuinely native vision-language: MMMU 64.2, MathVista 76.7, OCRBench 84.5, plus real video benchmarks (MLVU 76.2) — rare at 2B scale.
- **Coding: 38/100.** No verified coding benchmark published for this model; math-reasoning proxies (HMMT ≤ 22.9) are low; score set below the reasoning dim for lack of direct evidence.
- **Cost efficiency: 97/100.** Apache-2.0 open weights — $0 to self-host; cheapest hosted lanes free; unbeatable cost axis.
- **Overall Score: 51/100.** Mean of (44 + 52 + 60 + 62 + 38) / 5 = 256/5 = 51.2 → 51. The strongest open multimodal per dollar at 2B scale — for prototyping, fine-tuning and edge work, not for hard reasoning or autonomous coding.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-10
- Method: public internet research (official model card, vendor docs, tracker listings); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: cheap multimodal prototyping/edge deployment and hobby fine-tuning; escalate to larger Qwen 3.5 members for hard tasks.
- Reference URLs:
  - [Qwen/Qwen3.5-2B — Hugging Face model card (benchmarks, specs, license)](https://huggingface.co/Qwen/Qwen3.5-2B)
  - [ollama.com — qwen3.5:2b](https://ollama.com/library/qwen3.5:2b)
  - [llm-stats.com — Qwen3.5-2B benchmarks, pricing & context window](https://llm-stats.com/models/qwen3.5-2b)
  - [Qualcomm AI Hub — Qwen3.5-2B for on-device inference](https://aihub.qualcomm.com/compute/models/qwen3_5_2b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
