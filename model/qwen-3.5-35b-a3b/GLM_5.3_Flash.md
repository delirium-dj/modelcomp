# Qwen 3.5 35B-A3B — findings by GLM 5.3 Flash

- Source: Qwen (`Qwen/Qwen3.5-35B-A3B`), open weights, Apache-2.0
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B
- **Short description:** Alibaba Qwen's small sparse-MoE member of the Qwen3.5 generation — 35B total / 3B active parameters, unified vision-language training, Gated DeltaNet hybrid layout. Top use case: ultra-cheap high-throughput multimodal assistant/agent serving; Alibaba hosts it as Qwen3.5-Flash (1M context default).
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`); OpenRouter Chat Completions route `qwen/qwen3.5-35b-a3b` (verified live 2026-10-21); self-host via vLLM / SGLang / KTransformers / Transformers; DashScope/Model Studio API compatible; the card states **Qwen3.5-Flash** is the hosted version of this checkpoint.
- **Release / knowledge:** Qwen3.5 generation release (2026); exact day not verified from the card. Knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (weights); `qwen/qwen3.5-35b-a3b` (OpenRouter). No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (verified from official HF model card); hosted Qwen3.5-Flash tier defaults to 1M context per the card.
- **Modalities:** image + video + text input, text output (image-text-to-text); thinking mode by default with `enable_thinking: false` switch; tool calls (qwen3_coder parser); JSON via response_format. No audio.
- **Pricing (as of 2026-10-21):** no verified public hosted pricing found on the sources checked (HF card, OpenRouter page); weights Apache-2.0 with only 3B active parameters — among the cheapest serving profiles of any frontier-generation open model. Provisional below.
- **Architecture:** sparse MoE — 35B total / 3B active, 256 experts (8 routed + 1 shared, expert dim 512), 40 layers, hybrid 10 × (3 × Gated DeltaNet → MoE → 1 × Gated Attention), MTP trained; unified vision encoder; open weights Apache-2.0.

### Raw benchmarks found

All numbers from the official Qwen HF model card (`huggingface.co/Qwen/Qwen3.5-35B-A3B`, thinking mode), cross-checked against the OpenRouter listing (route/capabilities — no independent benchmark numbers found there).

Agent / tool use:

- BFCL-V4: **67.3** (HF card; GPT-5-mini 55.5)
- TAU2-Bench: **81.2%** (HF card — best of the entire compared Qwen3.5 mid-size group)
- VITA-Bench: **31.9** (HF card)
- DeepPlanning: **22.8** (HF card)
- HLE w/ tool (search agent): **47.4** (HF card)
- Browsecomp: **61.0%**; Browsecomp-zh: **69.5%** (HF card)
- WideSearch: **57.1** (HF card)
- Seal-0: **41.4** (HF card)
- Terminal Bench 2: **40.5%** (HF card)
- OSWorld-Verified: **54.5**; AndroidWorld: **71.1**; ScreenSpot Pro: **68.6** (HF card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (HF card)
- HLE w/ CoT: **22.4%** (HF card)
- MMLU-Pro: **85.3**; MMLU-Redux: **93.3**; SuperGPQA: **63.4** (HF card)
- AA-LCR: **58.5** (HF card)
- HMMT Feb 25: **89.0**; HMMT Nov 25: **89.2** (HF card)
- IFEval: **91.9**; IFBench: **70.2** (HF card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **69.2%** (HF card)
- LiveCodeBench v6: **74.6%** (HF card)
- CodeForces: **2028** (HF card, own query set)
- OJBench: **36.0**; FullStackBench en: **58.1** (HF card)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 58.5, LongBench v2 59.0 (262K window; HF card); no MRCR/RULER/GraphWalks reported

### Normalized scores (1–100)

- **Tool use: 77/100.** TAU2-Bench 81.2 tops the compared group and BFCL-V4 67.3 clears GPT-5-mini; capped by Terminal Bench 2 40.5, VITA-Bench 31.9 and missing third-party harness data.
- **Reasoning: 80/100.** GPQA 84.2 and HMMT ~89 are excellent for 3B active parameters, but HLE 22.4 and SuperGPQA 63.4 trail the 27B/122B siblings.
- **Context window: 82/100.** 262K native verified from the card with 1.01M YaRN extension (1M default on the hosted Flash tier), but AA-LCR 58.5 is the weakest retrieval of the mid-size group.
- **Multimodal: 81/100.** Native image+video input; MMMU 81.4, MathVision 83.9, VideoMME 86.6, best-of-group AndroidWorld 71.1; no audio caps it.
- **Coding: 74/100.** SWE-bench Verified 69.2 and LCB v6 74.6 trail the 27B/122B siblings (72.x/78-81); CodeForces 2028 solid.
- **Cost efficiency: 85/100.** No verified hosted pricing found; provisionally excellent — Apache-2.0 open weights with only 3B active parameters per token make this one of the cheapest frontier-generation serving profiles. Re-score when a hosted price is published.
- **Overall Score: 79/100.** Mean of the five non-cost dims (77+80+82+81+74)/5 = 78.8. Best fit: budget multimodal agent/chat serving where cost per token dominates and near-flagship quality suffices.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-21
- Method: public internet research (official HF model card, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
