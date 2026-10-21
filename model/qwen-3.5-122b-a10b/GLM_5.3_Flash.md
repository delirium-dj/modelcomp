# Qwen 3.5 122B-A10B — findings by GLM 5.3 Flash

- Source: Qwen (`Qwen/Qwen3.5-122B-A10B`), open weights, Apache-2.0
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B-A10B
- **Short description:** Alibaba Qwen's sparse-MoE member of the Qwen3.5 generation — 122B total / 10B active parameters with a Gated DeltaNet hybrid layout and unified vision-language training. Top use case: high-throughput, low-cost serving of near-flagship multimodal reasoning, coding and agentic quality.
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-122B-A10B`); OpenRouter Chat Completions route `qwen/qwen3.5-122b-a10b` (verified live 2026-10-21); self-host via vLLM / SGLang / KTransformers / Transformers; DashScope/Model Studio API compatible.
- **Release / knowledge:** Qwen3.5 generation release (2026); exact day not verified from the card. Knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (weights); `qwen/qwen3.5-122b-a10b` (OpenRouter). No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (verified from official HF model card). Output sampled up to 81,920 in card examples.
- **Modalities:** image + video + text input, text output (image-text-to-text); thinking mode by default with `enable_thinking: false` switch; tool calls (qwen3_coder parser); JSON via response_format. No audio.
- **Pricing (as of 2026-10-21):** no verified public hosted pricing found on the sources checked (HF card, OpenRouter page). Open weights Apache-2.0; MoE with 10B active keeps serving cost low. Provisional below.
- **Architecture:** sparse MoE — 122B total / 10B active, 256 experts (8 routed + 1 shared), 48 layers, hybrid 12 × (3 × Gated DeltaNet → MoE → 1 × Gated Attention), MTP trained; unified vision encoder (early fusion); open weights Apache-2.0.

### Raw benchmarks found

All numbers from the official Qwen HF model card (`huggingface.co/Qwen/Qwen3.5-122B-A10B`, thinking mode), cross-checked against the OpenRouter listing (route/capabilities — no independent benchmark numbers found there).

Agent / tool use:

- BFCL-V4: **72.2** (HF card — beats GPT-5-mini's 55.5)
- TAU2-Bench: **79.5%** (HF card, official setup with Opus-4.5-card airline fixes)
- VITA-Bench: **33.6** (HF card)
- DeepPlanning: **24.1** (HF card)
- HLE w/ tool (search agent): **47.5** (HF card)
- Browsecomp: **63.8%**; Browsecomp-zh: **69.9%** (HF card)
- WideSearch: **60.5** (HF card, 256k context, no context management)
- Seal-0: **44.1** (HF card)
- Terminal Bench 2: **49.4%** (HF card — best of the mid-size Qwen3.5 group)
- OSWorld-Verified: **58.0**; AndroidWorld: **66.4**; ScreenSpot Pro: **70.4** (HF card)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (HF card)
- HLE w/ CoT: **25.3%** (HF card)
- MMLU-Pro: **86.7**; MMLU-Redux: **94.0**; SuperGPQA: **67.1** (HF card)
- AA-LCR: **66.9** (HF card)
- HMMT Feb 25: **91.4**; HMMT Nov 25: **90.3** (HF card)
- IFEval: **93.4**; IFBench: **76.1** (HF card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.0%** (HF card)
- LiveCodeBench v6: **78.9%** (HF card)
- CodeForces: **2100** (HF card, own query set)
- OJBench: **39.5**; FullStackBench en: **62.6** (HF card)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 66.9, LongBench v2 60.2 (262K window; HF card); no MRCR/RULER/GraphWalks reported

### Normalized scores (1–100)

- **Tool use: 80/100.** BFCL-V4 72.2 and TAU2-Bench 79.5 lead the mid-size group; Terminal Bench 2 49.4 and Browsecomp 63.8 confirm real agent capability; capped by VITA-Bench 33.6 and lack of third-party harness data.
- **Reasoning: 83/100.** GPQA 86.6, MMLU-Pro 86.7 and HMMT ~91 at near-flagship level; HLE 25.3 keeps it out of the frontier tier.
- **Context window: 85/100.** 262K native verified from the card, 1.01M YaRN extension; AA-LCR 66.9 solid but not elite.
- **Multimodal: 83/100.** Native image+video input; MMMU 83.9, MMMU-Pro 76.9, MathVision 86.2, VideoMME 87.3, OSWorld 58.0 — strong across the vision stack; no audio caps it.
- **Coding: 78/100.** SWE-bench Verified 72.0, LCB v6 78.9, CodeForces 2100, FullStackBench 62.6 — GPT-5-mini-class; not top-tier coding-flagship level.
- **Cost efficiency: 82/100.** No verified hosted pricing found; provisionally strong on Apache-2.0 open weights with only 10B active parameters per token (MoE economics). Re-score when a hosted price is published.
- **Overall Score: 82/100.** Mean of the five non-cost dims (80+83+85+83+78)/5 = 81.8. Best fit: cost-efficient hosted or self-hosted multimodal agent/coding model at near-flagship quality.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-21
- Method: public internet research (official HF model card, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
