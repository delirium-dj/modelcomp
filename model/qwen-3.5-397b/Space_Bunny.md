# Qwen 3.5 397B A17B — findings by Space Bunny

- Source: Qwen / `Qwen/Qwen3.5-397B-A17B` (open-weights checkpoint; the project's `opencode/qwen-3.5-397b` alias is the same model)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's largest and most capable **Qwen3.5** open-weights model, released **February 2026** — the first Qwen open-weights checkpoint with **native vision and video input**, unifying the previously separate Qwen3 (text) and Qwen3-VL lines through early fusion on multimodal tokens. A 397B-total / 17B-active sparse MoE on a Gated DeltaNet + gated-attention hybrid stack, supporting **201 languages and dialects**. Scored **45 on the Artificial Analysis Intelligence Index (#3 among open-weights models)**. Top use case: self-hosted or cheap-API multimodal agents that need frontier-adjacent vision, video and GUI capability under Apache 2.0.
- **Provider / access:** Hugging Face `Qwen/Qwen3.5-397B-A17B` (Apache 2.0, 456,621 downloads in the last month, 77 quantizations, Inference Providers incl. Novita). Served by **9 tracked providers**: DeepInfra, OpenRouter, Novita AI, Together AI, GMI Cloud, Prime Intellect, Scaleway, OVHcloud, VoltageGPU. Alibaba Cloud Model Studio / QwenCloud (`qwen3.5-397b-a17b`, DashScope OpenAI-compatible + Responses API). OpenAI-compatible Chat Completions API throughout; self-hostable via vLLM, SGLang, KTransformers or Transformers. No OpenCode Zen ID found.
- **Release / knowledge:** Released **February 2026** (Qwen blog citation month/year; DeepInfra and Requesty list Feb 2026; OpenRouter page dated 2026-02-16). Knowledge cutoff: not disclosed on the model card.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (HF), `qwen/qwen3.5-397b-a17b` (OpenRouter), `deepinfra/Qwen/Qwen3.5-397B-A17B`, `qwen3.5-397b-a17b` (Alibaba/QwenCloud)
- **Context window:** **262,144 tokens natively**, extensible to **1,010,000** via YaRN RoPE scaling (Qwen recommends factor 2.0 for ~524K, 4.0 for ~1M, and only when long contexts are actually needed — static scaling can hurt shorter inputs). Max output 64K–65,536 on hosted endpoints (81,920 recommended for competition math/programming). **Caveat:** the project's `meta.json` scaffolded `128K total` and `Text in/out` placeholders come from generic defaults in `scripts/lib/naming.mjs`, **not** provider evidence — the real figures are 262K native / ~1M extended and image+video in / text out.
- **Modalities:** **Text, image, and video in → text out** (verified in the official quickstart: `image_url` and `video_url` message types; Novita lists `text, image, video` in and `text` out). Document understanding is a stated strength. Reasoning: **on by default**, disabled via `enable_thinking: False` / `chat_template_kwargs` — no `/think` soft switch. Tool calls / function calling: yes (with `--tool-call-parser qwen3_coder`). JSON mode / structured outputs: yes (DeepInfra FP8 is the one tracked provider without it). Prompt/context caching: yes. Web search, code interpreter, image search: built-in tools on QwenCloud.
- **Pricing (as of 2026-10-09, USD per 1M tokens):** Official Alibaba Cloud / QwenCloud **$0.60 in / $3.60 out**; Novita $0.60/$3.60; OpenRouter $0.55/$3.50 (cached $0.225); **DeepInfra $0.54 in / $3.40 out / $0.30 cached** (lowest blended, $1.25); DeepInfra via Requesty $0.49/$3.60. Range across 9 providers: **$0.45–0.83 in, $3.40–4.09 out**. Apache 2.0 weights make self-hosting free of token cost.
- **Architecture:** Causal LM with vision encoder. **397B total / 17B activated MoE**, 60 layers laid out as 15 × (3 × (Gated DeltaNet → MoE) → 1 × (Gated Attention → MoE)), hidden dimension 4096, token embedding 248,320 (padded), **512 experts (10 routed + 1 shared)** with expert intermediate dimension 1024. Gated DeltaNet: 64 linear-attention heads for V, 16 for QK, head dim 128. Gated attention: 32 Q heads / 2 KV heads, head dim 256, RoPE dimension 64. Trained with multi-step MTP. **Apache 2.0.**

### Raw benchmarks found

> Language/agent/coding figures are from the **official Qwen model card**, which benchmarks the open-weights checkpoint. Vision figures are also from the model card's Vision-Language table. Every row lists Qwen's own comparison set for context. Independent figures are labeled separately.

Agent / tool use:

- BFCL-V4: **72.9%** (model card; vs GPT-5.2 63.1, Claude 4.5 Opus 77.5, Gemini-3 Pro 72.5, Qwen3-Max-Thinking 67.7, Kimi K2.5 68.3) — one of the strongest rows in the card
- TAU2-Bench: **86.7%** (model card; vs GPT-5.2 87.1, Claude 4.5 Opus 91.6, Gemini-3 Pro 85.4, Qwen3-Max-Thinking 84.6, Kimi K2.5 77.0)
- BrowseComp: **69.0%** with simple context-folding, **78.6%** with the discard-all strategy used by DeepSeek-V3.2 and Kimi K2.5 (model card; vs GPT-5.2 65.8, Claude 4.5 Opus 67.8, Gemini-3 Pro 59.2, Qwen3-Max-Thinking 53.9, Kimi K2.5 74.9)
- BrowseComp-zh: **70.3%** (model card; vs GPT-5.2 76.1, Claude 4.5 Opus 62.4)
- WideSearch: **74.0%** (model card, 256K context with no context management; vs GPT-5.2 76.8, Claude 4.5 Opus 76.4, Gemini-3 Pro 68.0)
- Seal-0: **46.9%** (model card)
- VITA-Bench: **49.7%** (model card; vs GPT-5.2 38.2, Claude 4.5 Opus 56.3, Gemini-3 Pro 51.6)
- MCP-Mark: **46.1%** (model card; vs GPT-5.2 57.5, Claude 4.5 Opus 42.3, Gemini-3 Pro 53.9, Qwen3-Max-Thinking 33.5, Kimi K2.5 29.5)
- Tool Decathlon: **38.3%** (model card; vs GPT-5.2 43.8, Claude 4.5 Opus 43.5, Gemini-3 Pro 36.4, Qwen3-Max-Thinking 18.8)
- DeepPlanning: **34.3%** (model card; vs GPT-5.2 44.6, Gemini-3 Pro 23.3)
- **APEX-Agents: 13.6%** (Hugging Face leaderboard, `mercor/apex-agents` — independent run). This is far below the card's other agentic rows and is the single most important independent counterweight in this report.
- Tau3-Banking: no separately reported figure; Tau2-Bench is the reported family
- GDPval-AA: no verified public score found for this checkpoint (that belongs to Qwen3.5-Plus)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA: **88.4%** (model card; vs GPT-5.2 92.4, Claude 4.5 Opus 87.0, Gemini-3 Pro 91.9, Qwen3-Max-Thinking 87.4, Kimi K2.5 87.6). Independently confirmed: HF leaderboard `davidrein/gpqa` Diamond **88.4%**.
- HLE: **28.7%** (model card; vs GPT-5.2 35.5, Gemini-3 Pro 37.5, Claude 4.5 Opus 30.8, Kimi K2.5 30.1)
- HLE w/ tool: **48.3%** (model card; vs GPT-5.2 45.5, Gemini-3 Pro 45.8, Qwen3-Max-Thinking 49.8, Kimi K2.5 50.2)
- HLE-Verified (Qwen's revised HLE with a transparent component-wise protocol): **37.6%** (vs GPT-5.2 43.3, Gemini-3 Pro 48, Claude 4.5 Opus 38.8)
- MMLU-Pro: **87.8%** (model card; independently confirmed on HF's TIGER-Lab leaderboard at **87.8%**); MMLU-Redux 94.9%; SuperGPQA 70.4%; C-Eval 93.0
- AA-LCR: **68.7%** (model card; tied with Qwen3-Max-Thinking; vs GPT-5.2 72.7, Claude 4.5 Opus 74.0, Gemini-3 Pro 70.7, Kimi K2.5 70.0)
- Artificial Analysis Intelligence Index: **45**, **#3 among open-weights models** (DeepInfra, citing AA)
- AIME 2026: **91.3%**; HMMT Feb 2025: **94.8%**; HMMT Nov 2025: **92.7%**; IMOAnswerBench **80.9%**
- IFEval 92.6%; IFBench **76.5%** (best in the card's comparison set); MultiChallenge **67.6%** (best in the card)
- Multilingual: MMMLU 88.5%; MMLU-ProX 84.7% (29 languages); NOVA-63 **59.1%** (best in card); INCLUDE 85.6%; Global PIQA 89.8%; PolyMATH **73.3%**; WMT24++ 78.9% (55 languages); MAXIFE **88.2%** (best in card) — consistent with the 201-language claim
- Omniscience / CritPt / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **76.4%** (model card; independently confirmed on the HF `swe-bench/SWE-bench_Verified` leaderboard at **76.4%**). vs GPT-5.2 80.0, Claude 4.5 Opus 80.9, Gemini-3 Pro 76.2, Qwen3-Max-Thinking 75.3, Kimi K2.5 76.8
- SWE-bench Multilingual: **69.3%** (independently confirmed on HF); vs GPT-5.2 72.0, Claude 4.5 Opus 77.5, Gemini-3 Pro 65.0
- Terminal-Bench 2: **52.5%** (model card; vs GPT-5.2 54.0, Claude 4.5 Opus 59.3, Gemini-3 Pro 54.2, Kimi K2.5 50.8 — but only 22.5% for Qwen3-Max-Thinking, the previous Qwen flagship)
- SecCodeBench: **68.3%** (model card; vs GPT-5.2 68.7, Claude 4.5 Opus 68.6, Gemini-3 Pro 62.4)
- LiveCodeBench v6: **83.6%** (model card; vs GPT-5.2 87.7, Gemini-3 Pro 90.7)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found for this checkpoint

Multimodal / grounded (native vision, model card):

- MMMU **85.0%**; MMMU-Pro **79.0%**; MathVision **88.6%**; Mathvista-mini **90.3%**; We-Math **87.9%**; DynaMath 86.3%
- RealWorldQA 83.9%; MMStar 83.8%; HallusionBench 71.4%; MMBenchEN-DEV-v1.1 93.7%; SimpleVQA 67.1%
- OmniDocBench1.5 **90.8%**; CharXiv(RQ) 80.8%; MMLongBench-Doc 61.5%; CC-OCR 82.0%; AI2D_TEST 93.9%; OCRBench 93.1%
- Spatial: ERQA 67.5%; CountBench 97.2%; RefCOCO 92.3%; LingoQA **81.6%**; V* **95.8%** (91.1 without Code Interpreter); EmbSpatialBench 84.5%; RefSpatialBench 73.6%
- Video: VideoMME(w sub.) 87.5%; VideoMME(w/o sub.) 83.7%; VideoMMMU 84.7%; MLVU 86.7%; MVBench 77.6%; LVBench 75.5%; MMVU 75.4%
- Visual agent / GUI: ScreenSpot Pro 65.6%; **OSWorld-Verified 62.2%** (vs Claude 4.5 Opus 66.3, Kimi K2.5 63.3); **AndroidWorld 66.8%** (vs Kimi K2.5 63.7)
- Medical VQA: SLAKE 79.9%; PMC-VQA 64.2%; MedXpertQA-MM 70.0%
- ZEROBench 12 (vs 9/3/10 for the comparison set); ZEROBench_sub **41.0%**; BabyVision 52.3% with Code Interpreter (43.3% without)

Long context:

- **262,144 tokens native**, extensible to **1,010,000** with YaRN — verified in the model card's Model Overview and Ultra-Long Texts section. Real retrieval evidence: **AA-LCR 68.7%** and **LongBench v2 63.2%** (both model card, both *below* GPT-5.2 and Claude 4.5 Opus). BrowseComp and WideSearch were run at 256K. No MRCR / RULER / GraphWalks numbers.

### Normalized scores (1–100)

- **Tool use: 80/100.** BFCL-V4 72.9%, TAU2-Bench 86.7%, BrowseComp 78.6% and WideSearch 74.0% show real agentic strength, and MCP-Mark 46.1% beats both Kimi K2.5 (29.5%) and Qwen3-Max-Thinking (33.5%). Capped by APEX-Agents at just **13.6%** on the independent leaderboard, Tool Decathlon 38.3%, DeepPlanning 34.3%, and no GDPval-AA or Claw-Eval figure.
- **Reasoning: 78/100.** GPQA Diamond 88.4% (independently confirmed twice) and AIME26 91.3% are solid, with exceptional multilingual coverage (NOVA-63 59.1%, MAXIFE 88.2%, PolyMATH 73.3%) backing the 201-language claim. Held back by HLE at only 28.7% closed-book (HLE-Verified 37.6%), an AA Intelligence Index of 45, and AA-LCR 68.7% trailing GPT-5.2.
- **Context window: 88/100.** **262,144 native** and **extensible to ~1,010,000** via YaRN — upper-middle tier natively, and genuinely near-1M if you enable scaling. Not higher because the measured long-context retrieval (AA-LCR 68.7%, LongBench v2 63.2%) is only mid-pack, and Qwen itself warns static YaRN can degrade shorter inputs.
- **Multimodal: 86/100.** The strongest dimension: native image **and video** input with text output, corroborated by a very deep model-card evaluation — MMMU-Pro 79.0%, MathVision 88.6%, OCRBench 93.1%, OmniDocBench1.5 90.8%, VideoMME 87.5%, and real GUI-agent results (ScreenSpot Pro 65.6%, OSWorld-Verified 62.2%, AndroidWorld 66.8%). Capped by text-only output and no audio input.
- **Coding: 76/100.** SWE-bench Verified 76.4% and SWE-bench Multilingual 69.3% (both independently confirmed on HF leaderboards) and SecCodeBench 68.3% are respectable. Terminal-Bench 2 at 52.5% is only mid-pack, LiveCodeBench v6 83.6% trails GPT-5.2 and Gemini-3 Pro, and **no SWE-bench Pro, DeepSWE or SciCode number exists** for this checkpoint — the missing hard-agentic rows are the cap.
- **Cost efficiency: 91/100.** Official $0.60 in / $3.60 out, with DeepInfra at $0.54/$3.40 and OpenRouter at $0.55/$3.50 — near the ~$0.60/$2.20 reference point despite a higher output rate. **Apache 2.0 weights** remove token cost entirely for anyone who can self-host, which is the strongest cost argument in this tier. No Free hosted tier keeps it out of the 95+ band.
- **Overall Score: 82/100.** Best fit: self-hosted or budget-API multimodal agents that need genuine video, document and GUI understanding alongside solid tool calling and a 262K-native (1M-extensible) window — but not the pick for hard SWE-agentic coding, where Terminal-Bench 2.5's 52.5% and the absence of DeepSWE/SWE-bench-Pro data argue for a dedicated coding model.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked against the **official Hugging Face model card** for `Qwen/Qwen3.5-397B-A17B` (full architecture spec and complete language + vision-language benchmark tables with Qwen's own comparison set), Hugging Face's independent evaluation leaderboard rows (MMLU-Pro, GPQA-Diamond, HMMT, AIME 2026, SWE-bench Verified, SWE-bench Multilingual, APEX-Agents), DeepInfra's 9-provider benchmark and pricing study, Alibaba Cloud/QwenCloud and Novita official model pages, Requesty's provider rate table, OpenRouter and computeprices rate trackers, and SemiAnalysis InferenceX for hardware-level throughput. Where the model card and an independent leaderboard disagree (notably APEX-Agents), both are reported and the independent number is given explicit weight. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Plus.md`, using the same headings — QwenCloud notes that the hosted **Qwen3.5-Plus** is the production counterpart to this checkpoint, with 1M context by default, built-in tools and adaptive tool use, and it is a genuinely different hosted product with its own score.