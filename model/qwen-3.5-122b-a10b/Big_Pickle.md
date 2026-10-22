# Qwen3.5-122B-A10B — findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba's February 2026 open-weight **MoE** flagship of the Qwen3.5 "medium" series: 122B total parameters with 10B active per token, native vision-language with a Gated DeltaNet + sparse-MoE hybrid, 262K native context. It is the strongest *vision-language agent* of the medium lineup (BFCL-V4 72.2%, TAU2-Bench 79.5%, Terminal-Bench 2.0 49.4%) and a **distinct checkpoint** from the dense 27B, the 35B-A3B and the hosted Qwen3.5-Flash / Qwen3.5-Plus serving profiles.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face (`Qwen/Qwen3.5-122B-A10B`) and ModelScope; hosted on Alibaba Cloud Model Studio / DashScope OpenAI-compatible mode (`Qwen3.5-122B-A10B`, `https://dashscope.aliyuncs.com/compatible-mode/v1`, Chat Completions); OpenRouter (`qwen/qwen3.5-122b-a10b`) routing to SiliconFlow, DeepInfra, NovitaAI, AtlasCloud and Alibaba Cloud Intl. **Not on OpenCode Zen** — no `opencode/…` route and no Free ID.
- **Release / knowledge:** released 2026-02-24 (series announced 2026-02-16 with the 397B-A17B flagship). No knowledge-cutoff date is published on the model card.
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (HF weights) · `Qwen3.5-122B-A10B` (Model Studio / DashScope) · `qwen/qwen3.5-122b-a10b` (OpenRouter) · `deepinfra/Qwen/Qwen3.5-122B-A10B` · `novita/qwen3.5-122b-a10b`. No Free ID on OpenCode Zen.
- **Context window:** 262,144 tokens **native**; extensible to 1,010,000 with static YaRN RoPE scaling (rope_type `yarn`, factor 4.0; factor 2.0 advised at ~524K) — Qwen's documented recipe, not a native 1M window. Max output 65,536 tokens (OpenRouter/aggregators); the card's own examples use `max_tokens` 32,768–81,920.
- **Modalities:** text, image **and video** in (native early-fusion VLM with a vision encoder); text out; thinking mode on by default (`enable_thinking: False` for instruct mode on Model Studio); tool calling (BFCL-V4 72.2%, TIR-Bench 53.2/42.5, V\* 93.2/90.1); structured/JSON output supported by 3 of 4 tracked hosts; **no** audio input, **no** non-text output.
- **Pricing (as of 2026-10-22):** Model Studio / Alibaba Cloud $0.40 in / $3.20 out per 1M (AA calls the output price "expensive"); OpenRouter routed from $0.26 / $2.08 (SiliconFlow FP8, Alibaba Cloud Intl) up to $0.40 / $3.20 (Novita, GMI), AtlasCloud $0.30 / $2.40; DeepInfra's own April 2026 review quotes $0.29 / $2.90. Self-hosting is free — Apache 2.0 weights.
- **Architecture:** MoE, 122B total / 10B activated (AA lists 125B total / 10B active — the card says 122B); 48 layers, hidden dimension 3,072, padded vocab 248,320, hidden layout 12 × (3 × (Gated DeltaNet → MoE) → 1 × (Gated Attention → MoE)); 64 linear-attention V heads / 16 QK heads (head dim 128) plus 32 attention Q heads / 2 KV heads (head dim 256); 256 experts, 8 routed + 1 shared, expert intermediate dimension 1,024; RoPE dim 64; trained with multi-token prediction (MTP, usable as speculative decoding). Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **49.4%** (Qwen3.5-122B-A10B model card, vendor harness) — *conflicting: Artificial Analysis reports **0%** on Terminal-Bench 4.0 for the reasoning profile, and Dataconomy's AA mirror reports Terminal-Bench **Hard 31.1%**; these are different bench versions, so the vendor's 49.4% on the easier 2.0 task set should not be read as directly comparable*
- Terminal-Bench 2.1: no verified public score found (BenchLM shows "Coming soon"; the model is absent from both the BenchLM and Vals Terminal-Bench 2.1 leaderboards)
- TAU2-Bench: **79.5%** (model card, official setup plus the Claude Opus 4.5 airline fixes)
- τ²-Bench Telecom: **93.6%** (Artificial Analysis / Dataconomy mirror)
- BFCL-V4: **72.2%** (model card — highest of the medium lineup)
- TIR-Bench: **53.2% / 42.5%** (with / without chain-of-interaction; model card)
- V\* (visual agent): **93.2% / 90.1%** (with / without CI; model card)
- HLE with tools: **47.5%** (model card) — vs 25.3% without tools
- BrowseComp: **63.8%**; BrowseComp-zh 69.9%; WideSearch **60.5%**; Seal-0 44.1% (model card)
- OSWorld-Verified: **58.0%**; AndroidWorld 66.4% (model card)
- DeepPlanning: **24.1%** (model card)
- GDPval-AA: **814** (AA Intelligence Index v4.3.2, GDPval-AA v2.1) — *conflicting: BenchLM lists a GDPval-AA of **925** and an AA Agentic Index of 9.6% for the same model; different index revision*
- AA-Briefcase v1.1: **497**; AutomationBench-AA: **5%**; GDP.pdf: **3%** (AA Intelligence Index component values — both very weak)
- Claw-Eval / ClawProBench / MCP Atlas / Toolathlon: no verified public score found (BenchLM lists all four as "Coming soon")

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (model card) · 85.7% (Dataconomy AA mirror) · 86% (aggregators) — the HF eval widget also exposes 81.82 for a "default view" GPQA run
- HLE: **25.3%** (model card, w/ CoT) · 25% (AA) · 23.4% (Dataconomy mirror)
- MMLU-Pro: **86.7%**; MMLU-Redux 94.0; C-Eval 91.9; SuperGPQA 67.1 (model card)
- HMMT Feb 2026: **91.4%**; HMMT Nov 2025 90.3 (model card)
- AA-LCR: **66.9%** (model card) · **76%** (AA-LCR v1.1, reasoning) · 61% (AA non-reasoning) · 76.3% (Dataconomy mirror)
- LongBench v2: **60.2%** (model card)
- CritPt: **1%** (AA, both profiles); AA-Omniscience: **−42** reasoning / **−55** non-reasoning (a high hallucination exposure)
- Artificial Analysis Intelligence Index: **16** (reasoning) / **18** (non-reasoning, estimated) — #7 of 67 on the open-weight board; AA Coding Index 45.7, AA Agentic Index 9.6. *Conflict: the same figure is reported as 15.6 (modelgrep), 41.6/42 (Dataconomy) and 16 (AA model page) — these are different index revisions, not different models.*
- BenchLM overall: **41.69/100, #133 of 972** (BenchLM, 34 of 668 benchmarks covered; the page explicitly flags the score as conservative)
- LMSpeed overall: **61.0, #71 of 130**; LMSpeed coding score 58.4 (#52/103)
- Airating composite: **77.6, #52** (Reasoning 39% → 86.6 GPQA; Code 20% → 72.0 SWE-bench; Text 24% → 86.7 MMLU-Pro; Image 12% → 65.2)
- LMArena: **1442 ± 12**, overall rank **#129** of 183 open-source text-expert models (2,727 votes; listed at $0.26/$2.08, 262.1K context)

Coding:

- SWE-bench Verified: **72.0%** (model card) — identical to GPT-5-mini's 72.0 in the same table
- LiveCodeBench v6: **78.9%**
- Terminal-Bench 2.0: 49.4% (see tool use); Terminal-Bench 4.0: 0% (AA)
- CodeForces: **2100** (vendor's own query set); OJBench 39.5; FullStackBench en **62.6** (best of the medium lineup) / zh 58.7
- SciCode / AA-SciCode: **39.7%** (Artificial Analysis; LMSpeed #83/112)
- AA Coding Index: **45.7** (AA); BenchLM coding lane 32.6 (#85/152)
- Vibe Code Bench / DeepSWE / SWE-Rebench: no verified public score found

Long context:

- AA-LCR v1.1: **76%** (Artificial Analysis) · 66.9% (vendor card)
- LongBench v2: **60.2%** (vendor card)
- YaRN 1,010,000-token extension (factor 4.0): supported and documented, but **no MRCR / RULER / GraphWalks retrieval score at 512K–1M** is published for this checkpoint → no verified public score found
- Note: the 1M-context-by-default products are Qwen3.5-Plus (397B-A17B) and Qwen3.5-Flash (35B-A3B) — not this checkpoint, so no 1M figure is attributed to the 122B.

### Normalized scores (1–100)

- **Tool use: 74/100.** The tool-call axis is genuinely strong — τ²-Bench Telecom 93.6%, TAU2-Bench 79.5%, BFCL-V4 72.2%, TIR-Bench 53.2%, BrowseComp 63.8%, OSWorld-Verified 58% — and it beats the dense 27B on the terminal axis (TB 2.0 49.4% vs 41.6%); what caps the score is the independent terminal/computer-use picture (Terminal-Bench 4.0 **0%**, Terminal-Bench Hard 31.1%, AutomationBench-AA 5%, GDPval-AA 814) plus a complete absence of Claw-Eval, MCP Atlas, Toolathlon and Terminal-Bench 2.1 numbers.
- **Reasoning: 73/100.** Hard STEM leads the medium lineup (GPQA Diamond 86.6%, MMLU-Pro 86.7%, SuperGPQA 67.1%, HMMT 91.4/90.3, AA-LCR 76%), but the ceiling stays low — HLE 25.3%, CritPt 1%, AA-Omniscience −42 — and the AA Intelligence Index is only 16 (18 non-reasoning), with a hallucination exposure that keeps it out of the frontier band.
- **Context window: 78/100.** 262,144 tokens native, confirmed by every host (Model Studio, OpenRouter, AA, BenchLM all list 262K) — the 200K–500K tier (65–84) — with mid-tier retrieval (LongBench v2 60.2%, AA-LCR 66.9% vendor / 76% independent); the 1,010,000-token figure is a YaRN extrapolation with no published retrieval score beyond 262K.
- **Multimodal: 85/100.** The best open vision-language model in its class — MMMU 83.9%, MMMU-Pro 76.9%, MathVision 86.2%, MathVista 87.4%, OmniDocBench 89.8%, OCRBench 92.1%, ScreenSpot-Pro 70.4%, and full video support (VideoMME 87.3%, MLVU 87.3%, VideoMMMU 82.0%, MVBench 76.6%) with a dedicated visual-agent tool-call set (TIR-Bench 53.2, V\* 93.2); it stays under 90 because there is no audio input and output is text-only.
- **Coding: 72/100.** SWE-bench Verified 72.0% and LiveCodeBench v6 78.9% are solidly mid-tier, with FullStackBench en 62.6% and CodeForces 2100 the family's stronger suits, but AA SciCode 39.7% (<40%), Coding Index 45.7 and a Terminal-Bench 4.0 score of 0% keep it out of the frontier tier.
- **Cost efficiency: 91/100.** Hosted pricing of $0.40 / $3.20 per 1M on Model Studio (output price flagged "expensive" by AA) or $0.26 / $2.08 through OpenRouter/SiliconFlow — cheap for a 122B-class MoE, and the Apache 2.0 weights make self-hosting effectively $0; the 1.5× spread between the cheapest and dearest route is noted but the low end is what most users get.
- **Overall Score: 76/100.** Mean of the five quality dims (74 + 73 + 78 + 85 + 72) / 5 = 76.4 → 76 — the best open-weight vision-language agent model of the Qwen3.5 medium generation, and the pick when multimodal grounding (image + video + document) matters more than terminal-agent autonomy.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-22
- Method: public internet research (official Hugging Face model card including its Language and Vision-Language evaluation tables and eval-results files, the Qwen3.5 release blog, Artificial Analysis model / provider / comparison pages, DeepInfra's provider benchmark review, OpenRouter and Model Studio catalogues, BenchLM, LMSpeed, Airating, LMArena and Dataconomy mirrors). Conflicting figures are listed side by side with their harness and index revision; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
