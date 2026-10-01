# GPT-5.2 — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.2`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's 2025-12-11 flagship (released ~4 weeks after GPT-5.1), shipped in three API flavors — GPT-5.2 Thinking (`gpt-5.2`, five reasoning levels none→x-high), GPT-5.2 Instant (`gpt-5.2-chat-latest`) and GPT-5.2 Pro (`gpt-5.2-pro`) — with SOTA claims on GDPval, ARC-AGI-1/2 and coding. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API + Chat Completions (`https://api.openai.com/v1`); aggregator rows via Requesty/OpenRouter/llm-stats. Responses/compact endpoint compresses over-length conversations instead of truncating.
- **Release / knowledge:** released 2025-12-11; knowledge cutoff 2025-08-31 (OpenAI via DeepLearning.AI; llm-stats says 2025-08-25 — both = Aug 2025).
- **IDs:** `gpt-5.2`, `gpt-5.2-chat-latest`, `gpt-5.2-pro`. **No OpenCode Zen Free ID found** — scored on paid API pricing (Thinking lane).
- **Context window:** 400,000 tokens input, 128,000 max output (OpenAI spec row via DeepLearning.AI; llm-stats agrees).
- **Modalities:** text + image in; text out; reasoning yes (none/low/medium/high/x-high); tool calling, prompt caching. Video/audio input not verified for the API (Video-MMMU appears as an evaluated benchmark only).
- **Pricing (as of 2026-10-01):** $1.75 / 1M input, $14.00 / 1M output (OpenAI list via AA/llm-stats); 3:1 blended ≈ $4.81–5.19 / 1M. Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights (llm-stats: "Proprietary, Closed source"); parameter count not published.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- GDPval (wins/ties vs domain professionals, 44 occupations): **70.9%** (OpenAI; vs GPT-5's 38.8%)
- τ²-Bench: **85** (AA via 44B normalized row); τ²-Bench Telecom: **98.7%** (OpenAI/llm-stats)
- Terminal-Bench Hard: **47** (AA via 44B); Terminal-Bench 2.0/2.1: **no verified public score found**
- SWE-Lancer IC Diamond: **74.6%** (OpenAI); ScreenSpot-Pro (UI understanding): **86.3%** (OpenAI)
- OSWorld / MCP-Atlas / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** Thinking / **93.2%** Pro (OpenAI); **90** (AA via 44B)
- AIME 2025 (no tools): **100.0%** (OpenAI; AA row **99**); HMMT 2025: 99.4% (llm-stats)
- FrontierMath T1–3: **40.3%**; T4: **14.6%** (OpenAI)
- ARC-AGI-1 (Verified): **86.2%** Thinking / 90.5% Pro; ARC-AGI-2 (Verified): **52.9%** Thinking / 54.2% Pro (OpenAI)
- HLE: **34.5%** Thinking / 36.6% Pro (glbgpt vendor table); **35** (AA via 44B)
- MMLU-Pro: **87** (AA via 44B); BrowseComp: 65.8% (llm-stats)
- AA Intelligence Index: **73** at x-high, tying Gemini 3 Pro Preview (DeepLearning.AI, Dec-2025 index v4); **42.2** at x-high on AA's current recalibrated scale (44B, Aug 2026) — cite both, scales differ by version
- AA Coding Index: **62** at x-high, tying Gemini 3 Pro Preview high (DeepLearning.AI)

Coding:

- SWE-bench Verified: **80.0%** (OpenAI; benchmark made this the model's "new high")
- SWE-Bench Pro (public): **55.6%** (OpenAI; vs GPT-5.1 Thinking 50.8%)
- LiveCodeBench: **89** (AA via 44B); SciCode: **52** (AA via 44B)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI MRCRv2 (8 needles): **98.2%** @4–8k, 95.3% @16–32k, 85.6% @64–128k, **77.0%** @128k–256k (OpenAI)
- GraphWalks BFS <128k: **94.0%**; parents <128k: 89.0% (OpenAI); BrowseComp Long Context 128k: 92.0%

Multimodal:

- CharXiv Reasoning (w/ Python): **88.7%** (OpenAI); Video-MMMU: **85.9%**; MMMLU: **89.6%** (OpenAI)
- Image input supported (spec rows); no MMMU main score or audio input found

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 70.9% wins/ties, τ²-Bench 85 and τ²-Bench Telecom 98.7% are upper-mid to strong, but Terminal-Bench Hard 47 sits at the bottom of the mid band (TB 45–60 → 50–70) and no OSWorld/MCP-Atlas row exists — composite lands at 78.
- **Reasoning: 89/100.** GPQA 92.4% and AIME 100% are in the frontier band (90+ → 90–100), FrontierMath T1–3 40.3% and ARC-AGI-2 52.9% are standout; HLE 34.5% (frontier 40+ → 90–100) and AA Index 73/42.2 (scale-version dependent) are the only caps → 89.
- **Context window: 82/100.** 400K sits in the 200K–500K tier (65–84), pushed to its top by unusually strong measured retrieval (MRCRv2 77% at 128k–256k, GraphWalks 94%) — the band ceiling stops it at 82.
- **Multimodal: 65/100.** Text + image in — spec rows confirm image input but no PDF/video/audio input modality and no non-text output. CharXiv 88.7 and Video-MMMU 85.9 are strong vision evaluations but do not widen the input band: image-in only = 60–70 per methodology, scored 65.
- **Coding: 88/100.** SWE-bench Verified 80.0% clears the DeepSWE-74% frontier anchor, LiveCodeBench 89 is elite, SWE-Bench Pro 55.6% is a top-tier result; SciCode 52 (<55% ref) and AA Coding Index 62 (<70 ref) keep it just out of the 90s.
- **Cost efficiency: 65/100.** $1.75/$14 sits between the ~$1.25/$4.25 ≈ 88 anchor and the $3/$15 ≈ 60 anchor, closer to the expensive side on output; 3:1 blended ≈ $5/1M.
- **Overall Score: 80/100.** (78 + 89 + 82 + 65 + 88) / 5 = 80.4 → 80 — best-fit as a near-frontier flagship for science/math reasoning and serious coding with measured long-context retrieval; capped by Terminal-Bench-class agentic reliability, image-only multimodal input and $14 output pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.2" post, DeepLearning.AI The Batch coverage, Artificial Analysis rows via Requesty/44B normalization pages, the-decoder benchmark table, llm-stats shared-benchmark tables, glbgpt vendor table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
