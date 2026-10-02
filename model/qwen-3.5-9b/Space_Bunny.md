# Qwen 3.5 9b — findings by Space Bunny Alpha

- Source: Alibaba (`Qwen/Qwen3.5-9B`, open weights; the comparison entry tracks the `opencode/qwen-3.5-9b` routing ID)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B (Alibaba Qwen3.5 small-size release, no "Free" tier wording)
- **Short description:** The 9B member of Alibaba's Qwen3.5 family — a natively multimodal (text/image/video in) reasoning model built for coding and agent workflows on a hybrid Gated DeltaNet / Gated Attention stack. It is the efficiency tier of Qwen3.5: it beats much larger open peers (GPT-OSS-120B) on MMLU-Pro and GPQA Diamond while staying small enough for a single-GPU or quantized-laptop deployment. Not a variant/alias of another entry in this comparison, though `opencode/qwen-3.5-9b` is a gateway routing ID rather than the vendor's canonical name.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-9B`, Apache-2.0); served OpenAI-compatible via Alibaba Cloud Model Studio / DashScope (`https://dashscope.aliyuncs.com/compatible-mode/v1`, model `Qwen3.5-9B`), DeepInfra (`https://api.deepinfra.com/v1/openai/chat/completions`, model `Qwen/Qwen3.5-9B`), Microsoft Foundry (Fireworks deployment `FW-Qwen3.5-9B`), Together AI, and self-hosted vLLM / SGLang / KTransformers. Chat Completions API throughout. Note: the `opencode/qwen-3.5-9b` ID is **not** in the OpenCode Zen model or pricing tables as checked on 2026-10-01 — Zen currently lists `qwen3.5-plus` ($0.20 in / $1.20 out) but no 9B entry, so no Zen Free ID exists for this model.
- **Release / knowledge:** released with the Qwen3.5 family (blog citation dated February 2026; Artificial Analysis and the Qwen3.5 HF collection list March 2026). Knowledge cutoff not disclosed on the model card.
- **IDs:** `Qwen/Qwen3.5-9B` (HF), `Qwen3.5-9B` (DashScope), `Qwen/Qwen3.5-9B` (DeepInfra / self-hosted). No Free ID on Zen.
- **Context window:** **262,144 tokens native**, extensible to **1,010,000 tokens** via YaRN RoPE scaling — both stated directly in the official model card ("Context Length: 262,144 natively and extensible up to 1,010,000 tokens"). Artificial Analysis independently lists 262k. Output cap is 262,144 shared with input on self-hosted serving; vendors recommend ≥128K context to preserve thinking quality. (The curated `meta.json` for this entry records 128K, i.e. the gateway's served window rather than the model's native one.)
- **Modalities:** text, **image** and **video** in; text out; reasoning/thinking by default (`<think>` blocks, switchable via `enable_thinking` / `chat_template_kwargs`); tool calls (`qwen3_coder` tool-call parser); JSON mode / structured output; streaming; multi-token prediction (MTP).
- **Pricing (as of 2026-10-01):** DeepInfra **$0.10 in / $0.15 out** per 1M tokens (Priority tier $0.15/$0.225, Flex tier $0.08/$0.12) — https://deepinfra.com/Qwen/Qwen3.5-9B/api. Microsoft Foundry lists it under Fireworks pricing. Because weights are Apache-2.0 and only 9B, self-hosting cost is effectively $0. Paid, not free.
- **Architecture:** 9B parameters (9.65B per Ollama's metadata), dense hybrid — 32 layers laid out as 8 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN)), hidden size 4096, FFN intermediate 12288, vocabulary 248,320 (padded), plus a **vision encoder** (causal LM with vision encoder, "Image-Text-to-Text" pipeline), trained with early-fusion multimodal pretraining and multi-step MTP. **Open weights, Apache 2.0.**

### Raw benchmarks found

All rows below are the **vendor-published** numbers from the official `Qwen/Qwen3.5-9B` model card (huggingface.co/Qwen/Qwen3.5-9B, fetched 2026-10-01) unless another source is named. These are vendor-run evaluations, not an independent harness — treat cross-vendor comparisons with care.

Agent / tool use:

- BFCL-V4 (Berkeley Function-Calling Leaderboard v4): **66.1%** (vendor card; beats GPT-OSS-120B's unreported "--" cell and Qwen3-Next-80B's 49.7)
- TAU2-Bench: **79.1%** (vendor card; official setup with the Claude Opus 4.5 airline-domain fixes — beats Qwen3-Next-80B's 57.4 and Qwen3-30B-A3B's 41.9)
- DeepPlanning: **18.0%** (vendor card; near-floor planning benchmark)
- VITA-Bench: **29.8%** (vendor card; visual interactive agentic)
- OSWorld-Verified (visual agent, computer use): **41.8%** (vendor card)
- AndroidWorld: **57.8%** (vendor card)
- TIR-Bench: **45.6 / 31.9%** (with / without CI — vendor card)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (vendor card; confirmed independently by the HF eval-results leaderboard entry at 81.7)
- MMLU-Pro: **82.5%** (vendor card; HF eval-results leaderboard also 82.5) — beats GPT-OSS-120B (80.8)
- MMLU-Redux: **91.1%** / SuperGPQA: **58.2%** / C-Eval: **88.2%** (vendor card)
- IFEval: **91.5%** / IFBench: **64.5%** / MultiChallenge: **54.5%** (vendor card)
- HMMT Feb 25: **83.2%**, HMMT Nov 25: **82.9%** (vendor card)
- AA-LCR: **63.0%** / LongBench v2: **55.2%** (vendor card)
- PolyMATH: **57.3%** / NOVA-63: **55.9%** / INCLUDE: **75.6%** (vendor card)
- HLE / CritPt / Omniscience Accuracy: no verified public score found
- Artificial Analysis Intelligence Index: **15** (estimated, "Qwen3.5 9B (Reasoning)" row) — https://artificialanalysis.ai/models/comparisons/qwen3-5-9b-vs-glm-4-7-flash; much lower than the vendor card implies, so the AA lane is a useful counterweight

Coding:

- LiveCodeBench v6: **65.6%** (vendor card; below GPT-OSS-120B's 82.7)
- OJBench: **29.2%** (vendor card)
- SWE-bench Verified / SWE-Pro / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **63.0%** and LongBench v2 **55.2%** at the native 262K window (vendor card); no RULER, MRCR or GraphWalks retrieval figures published

Multimodal (vision-language, vendor card):

- MMMU **78.4%**, MMMU-Pro **70.1%**, MathVision **78.9%**, Mathvista(mini) **85.7%**, We-Math **75.2%**, DynaMath **83.6%**
- General VQA: RealWorldQA **80.3%**, MMStar **79.7%**, MMBenchEN-DEV-v1.1 **90.1%**, SimpleVQA **51.2%**, HallusionBench **69.3%**, VlmsAreBlind **93.7%**
- Documents/OCR: OmniDocBench1.5 **87.7%**, CharXiv(RQ) **73.0%**, MMLongBench-Doc **57.7%**, CC-OCR **79.3%**, AI2D_TEST **90.2%**, OCRBench **89.2%**
- Video: VideoMME (w/ sub.) **84.5%**, VideoMMMU **78.9%**, MLVU **84.4%**, MVBench **74.4%**, LVBench **70.0%**, MMVU **67.8%**
- Grounding: ScreenSpot Pro **65.2%**, CountBench **97.2%**, ERQA **55.5%**, RefCOCO(avg) **89.7%**, LingoQA **80.4%**
- Known weak spots the vendor's own table exposes: SimpleVQA 51.2%, ZEROBench 3.0%, Hypersim 13.5%, Nuscene 11.8%

### Normalized scores (1–100)

Methodology per `model-comparison.md` (v1 bands, v4 Overall formula). Raw numbers above are the sole input; nothing is inherited from any other report in this folder.

- **Tool use: 62/100.** TAU2-Bench 79.1% and BFCL-V4 66.1% are genuinely strong multi-step and function-calling results for a 9B model, and AndroidWorld 57.8% / OSWorld-Verified 41.8% show real computer-use competence. The cap is breadth: DeepPlanning 18.0%, VITA-Bench 29.8%, TIR-Bench 45.6%, and no published Terminal-Bench 2.1, Tau3-Banking or GDPval-AA to corroborate agentic reliability.
- **Reasoning: 66/100.** GPQA Diamond 81.7% (independently reproduced on the HF leaderboard) and MMLU-Pro 82.5% put it above the methodology's mid band (GPQA 60-80 → 55-65) but well under the frontier band (GPQA 90%+ → 90-100). IFEval 91.5% and HMMT 83.2% support the upper half; Artificial Analysis's Index of 15 and the absence of HLE / CritPt numbers argue against going higher.
- **Context window: 72/100.** Native 262,144 tokens sits in the methodology's 200K-500K band (200K = 70, band top 84), so a low-70s score is the direct tier mapping. Capped there by measured retrieval quality rather than headline size — AA-LCR 63.0% and LongBench v2 55.2% are only mid-range, and the 1,010,000-token YaRN extension is not a measured-retrieval claim.
- **Multimodal: 85/100.** Image, video and document input with text out puts it in the methodology's 75-90 band, and unlike most open peers at this size the vision side is first-rate: MMMU-Pro 70.1%, OCRBench 89.2%, OmniDocBench1.5 87.7%, VideoMME 84.5%, MMBenchEN-DEV 90.1%. It stays below the 90-100 top band because output is text-only and grounding is uneven (SimpleVQA 51.2%, ZEROBench 3.0%, Nuscene 11.8%).
- **Coding: 62/100.** LiveCodeBench v6 65.6% and OJBench 29.2% are real competitive-coding numbers but sit in the methodology's mid band rather than the frontier band (which needs DeepSWE 74%+, TB2.1 85%+, SciCode 55%+). With no SWE-bench Verified, SWE-Pro, SciCode or Terminal-Bench row published, repo-level agentic coding is unverified — the honest ceiling for a 9B.
- **Cost efficiency: 98/100.** DeepInfra's verified $0.10 in / $0.15 out per 1M is at the methodology's top paid tier (~$0.10/$0.20 → 97-99), one notch above because output undercuts the $0.20 reference. Not 100: there is no $0 Free ID, and the `opencode/qwen-3.5-9b` Zen ID is absent from the current Zen tables. Apache-2.0 weights make self-hosting a genuine $0 alternative.
- **Overall Score: 69/100.** Half-up mean of the five quality dims — (62 + 66 + 72 + 85 + 62) / 5 = **69.4 → 69**. Best fit: a cheap, genuinely multimodal local reasoning/coding workhorse — 262K context plus image/video/document understanding at ~$0.10/$0.15 per 1M, with reasoning that beats 120B-class open models. Not a frontier planner: escalate to K3 / Claude Opus / GPT-6-class models for hard multi-step agentic work, long-horizon repo migrations, or anything where an unverifiable 9B failure mode would be expensive.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research (official `Qwen/Qwen3.5-9B` Hugging Face model card benchmark tables, OpenCode Zen docs model + pricing tables, DeepInfra and Microsoft Foundry catalog pages, Artificial Analysis comparison page, Ollama and context-window aggregators); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.