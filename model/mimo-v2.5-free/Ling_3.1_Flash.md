# MiMo V2.5 Free — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / MiMo V2.5 Free
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** This folder tracks the free, capped Zen tier of Xiaomi's open-weight MiMo-V2.5 (the same weights serve the paid native tier from ~$0.14/$0.28 per 1M). The free tier caps context at 200K and output at 32K; the native model supports 1M context and 32K+ output. Scores below describe the model; the free-tier caps are noted under Context window and Cost efficiency.

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5, free Zen tier)
- **Short description:** Xiaomi's native omnimodal open-weights agentic model — a 310B sparse MoE (15B active) with hybrid sliding-window attention, dedicated vision and audio encoders, and 1M context; "Pro-level agentic performance at roughly half the inference cost" per Xiaomi.
- **Provider / access:** Xiaomi — open weights (MIT) on Hugging Face (XiaomiMiMo/MiMo-V2.5) and ModelScope; free capped tier on OpenCode Zen (200K context cap, 32K output cap); native paid tier from ~$0.14/$0.28 per 1M.
- **Release / knowledge:** 2026-04-22 (Xiaomi release post; HF repo 2026-04-27). Knowledge cutoff not stated in captured sources; trained on 48T tokens.
- **IDs:** `opencode/mimo-v2.5-free` (repo meta.json); `XiaomiMiMo/MiMo-V2.5` (HF); `MiMo-V2.5` / `MiMo-V2.5-Base` (Xiaomi).
- **Context window:** 1M tokens native (MiMo-V2.5; the Base variant ships 256K); free Zen tier capped at 200K with 32K max output.
- **Modalities:** Text, image, video, audio in; text out. Reasoning model. Vision: 729M-param ViT (28 layers: 24 SWA + 4 Full); audio: 261M-param Audio Transformer (24 layers: 12 SWA + 12 Full); multi-token prediction head (3 layers, 329M).
- **Pricing (as of 2026-10):** Free Zen capped tier; native from ~$0.14 input / $0.28 output per 1M (meta.json).
- **Architecture:** Sparse MoE — 310B total / 15B active; 48 layers (1 dense + 47 MoE); 9 full-attention + 39 sliding-window-attention layers (window 128); 64 heads, 8 KV (GA) / 4 (SWA); head dim QK 192 / V 128; hidden 4096; 256 routed experts, 8 per token; MoE intermediate 2048; dense intermediate 16384 (layer 0); MTP 3 layers. (Sibling MiMo-V2.5-Pro: 1.02T / 42B, 70 layers, 384 experts.)

### Raw benchmarks found

Vendor (mimo.xiaomi.com/mimo-v2-5, 2026-04-22):

- Claw-Eval (daily agentic tasks, general subset): **62.3** — "Pareto frontier of performance and efficiency".
- MiMo Coding Bench (in-house): strong, "closing the gap with frontier models and matching MiMo-V2.5-Pro at half the cost" (no absolute score published).
- Multimodal: "matching Gemini 3 Pro on video, Claude Sonnet 4.6 on multimodal agentic work, competitive across image and document understanding" (vendor claims, no absolute scores).

Hugging Face eval results / model card:

- SWE-bench Pro (ScaleAI): **56.1%** (chat model, HF eval tab).
- Base-model table (5-shot, non-thinking, base checkpoint — not the chat model): BBH 87.2, MMLU 86.3, MMLU-Redux 89.8, MMLU-Pro 65.8, DROP 83.7, ARC-Challenge 96.5, HellaSwag 88.6, WinoGrande 84.7, TriviaQA 80.7, GPQA-Diamond 58.1, HumanEval+ 71.3, MBPP+ 70.9, LiveCodeBench v6 35.5, SWE-Bench (AgentLess) 30.8.

Third-party (Artificial Analysis, 2026-09; Vals AI via benchlm):

- GPQA Diamond: **85.0%** (AA; 84.95% on 2026-09-12); **81.6%** (Vals).
- Terminal-Bench 2.0: **65.8%** (Vals); Terminal-Bench (hard variant): **41.7%** (AA).
- LiveCodeBench: **81.5%** (Vals); SWE-bench: **71.0%** (Vals); MMLU-Pro: **82.9%** (Vals).
- AA Intelligence Index: **38** (v4.1.1, AA comparison page) / **25.2** (modelgrep snapshot, #62 of 181); MMMU-Pro measured by AA but the value was not captured cleanly.
- HLE, AIME, MCP-Atlas, τ-bench, OSWorld, MRCR/long-context retrieval, MMMU-Pro (clean value): no verified public score found for the V2.5 chat model.

### Normalized scores (1–100)

- **Tool use: 65/100.** Claw-Eval 62.3% (daily agentic) and Terminal-Bench 2.0 65.8% (Vals) are mid-pack; AA's Terminal-Bench hard 41.7% and SWE-bench Pro 56.1% pull the average down; no MCP-Atlas/τ-bench evidence.
- **Reasoning: 68/100.** GPQA Diamond 85.0% (AA) / 81.6% (Vals) is frontier-adjacent and MMLU-Pro 82.9% (Vals) is strong, but no HLE or AIME score is published for V2.5, leaving the hard-reasoning tail unmeasured.
- **Context window: 88/100.** 1M native context (architecturally confirmed), but no published long-context retrieval figure (no MRCR-class score); the free tier is capped at 200K.
- **Multimodal: 88/100.** Native text/image/video/audio input via dedicated 729M ViT and 261M audio encoders — full omni-modal input; vendor claims video parity with Gemini 3 Pro and multimodal-agentic parity with Sonnet 4.6, but no clean MMMU-class score was captured.
- **Coding: 69/100.** LiveCodeBench 81.5% and SWE-bench 71.0% (both Vals) are strong, but SWE-bench Pro 56.1% and Terminal-Bench 2.0 65.8% are mid-pack; the in-house MiMo Coding Bench has no absolute score.
- **Cost efficiency: 98/100.** Free capped Zen tier; native pricing from ~$0.14/$0.28 per 1M is among the cheapest published frontier-adjacent rates, and MIT weights allow zero-cost self-hosting.
- **Overall Score: 75.6/100.** Mean of the five quality dimensions. The free tier's 200K/32K caps do not change model quality; third-party coverage is thin (AA + Vals only) and base-model scores in the HF card are not chat-tier evidence.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
