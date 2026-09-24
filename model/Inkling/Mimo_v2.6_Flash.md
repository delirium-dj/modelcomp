# Inkling — findings by Mimo v2.6 Flash

- Source: Thinking Machines Lab/Inkling (`thinkingmachines/inkling`, alias `inkling`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (sibling Inkling-Small, 276B total / 12B active — not tracked here). **Folder note:** this folder is capitalised (`model/Inkling/`), deviating from the lowercase slug convention; renaming is a maintainer decision and was not performed.
- **Short description:** Thinking Machines Lab's first large open-weights release — a natively multimodal 975B-parameter MoE (**41B active**, 6 of 256 routed + 2 shared experts per token), Apache 2.0, controllable thinking effort (0.2–0.99, headline numbers measured at effort 0.99), plus a free agent-harness endpoint that logs traffic.
- **Provider / access:** Thinking Machines' Tinker service and third-party providers — DeepInfra, Fireworks, Together, Hugging Face, OpenRouter (`thinkingmachines/inkling`, plus `:batch` and `:free` routes), Vercel AI Gateway. **`tools`/`tool_choice` supported but `response_format` is not**, so JSON output cannot be enforced. Weights on Hugging Face (BF16 + NVFP4 quant).
- **Release / knowledge:** 2026-07-15 (official card / evals.report; OpenRouter and CloudPrice say 2026-07-17); knowledge cutoff not disclosed.
- **IDs:** `thinkingmachines/inkling` (OpenRouter, Vercel), `thinkingmachines-inkling` (CloudPrice). **No OpenCode Zen Free ID found**; an OpenRouter `:free` route and TML's free research API exist (both log prompts/outputs).
- **Context window:** **1,048,576** per the official card (CloudPrice 1.0M, max output up to 472K) — but provider listings disagree: Vercel says 262,144 in/out, Together says **524K**, and Tinker's API only offers **64K and 256K** context options. Treated as 1M-capable open weights with a host-dependent practical limit.
- **Modalities:** text, image (40–4096 px/dim) and audio (16 kHz WAV, ≤20 min) in → **text out**; reasoning with adjustable effort; tool calling; **no enforced JSON mode**; video appears in pretraining data but is **not** an input modality.
- **Pricing (as of 2026-09-25):** cheapest OpenRouter provider (DeepInfra) **$0.95 in / $4.05 out** per 1M with $0.16 cache reads; OpenRouter/Fireworks/Together $1.00 / $4.05; Thinking Machines' own Tinker API **$1.87 / $4.68 at 64K** and $3.74 / $9.36 at 256K — a context-tiered price that materially raises cost for long sessions.
- **Architecture:** 66-layer decoder-only MoE, 975B/41B active, hybrid 5:1 sliding-window (512) / global attention, four causal convolutions per block, relative-position bias (no RoPE), BF16/MXFP8/NVFP4; Apache 2.0 (BF16 serving needs 8× B300 or 16× H200; NVFP4 ≈ 600 GB).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). (TML) = Thinking Machines' own table at effort 0.99; (AA) = Artificial Analysis.

Agent / tool use:

- MCP Atlas: **76.0%** (TML via Vercel) — a second mirror records **74.1%**
- Toolathlon Verified: **45.5%** (TML via Vercel)
- Terminal-Bench 2.1: **63.8%** (TML, internal harness; Together lists 62.5) — TML's own table gives GLM-5.2 82.7% on the same row; Terminal-Bench 4.0: **1.0**
- BrowseComp: **77.1%**; GDPval-AA: **28.2%**; Artificial Analysis Agentic Index: **22.5**
- Tau2/Tau3-Bench, Vending-Bench, AutomationBench, Claw-Eval, MCP-Mark: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (TML) — mirrors record **88.3** (Epoch AI / LLMLearner, rank 57 of 254) and **87.9** (Together)
- HLE: **29.7%** text-only → **46.0% with tools** (TML); AIME 2026: **97.1%** (rank 6 of 29); Global-MMLU(-Lite): **88.7%**; IFBench: **79.8%**
- ARC-AGI-1: 79.5%; ARC-AGI-2: 36.53%; CritPt: **5.4%** (rank 54 of 118); FrontierMath v2: 33.3 (38 of 43), Tier 4 v2: 4.9; SimpleQA Verified: 43.9%
- AA-Omniscience: accuracy **41.5%**, index **2**
- Artificial Analysis Intelligence Index: **25** (xhigh, v4.3.2, #28 of 115 in its open-weight class, class median 18) / **25.5** (#102 overall per CloudPrice); output 140M tokens; speed **162.7 tok/s** (#9 of 115), TTFT 1.89 s (AA) — a second AA mirror shows 76.2 tok/s and 2.78 s TTFT
- BenchLM overall: no verified public score found

Multimodal:

- MMMU-Pro (Standard 10): **73.5%**; CharXiv RQ: **78.1%**
- Audio: Audio MC **56.6%**, MMAU **77.2%**, VoiceBench **91.4%**
- Video: no input modality, no video benchmark row; output text-only

Coding:

- SWE-bench Verified: **77.6%** resolved (TML, max effort; rank 23 of 101) — Inkling-Small 77.4
- SWE-bench Pro (public): **54.3%** (rank 33 of 56); SciCode: **47.0%** (rank 41 of 83); FrontierCode: **14.0%** weighted (Main)
- Artificial Analysis Coding Index: **52.1** (#65)
- LiveCodeBench, Terminal-Bench 2.0, DeepSWE, Aider, Vibe Code Bench: **no verified public score found**

Long context:

- AA-LCR v1.1: **77.3%** — a solid retrieval result at long lengths for a 1M window (AA, via OpenRouter); CloudPrice's LCR row: 0.8
- MRCR / RULER / GraphWalks at fixed window lengths: **no verified public score found**
- Release context (via Raschka): 45T pretraining tokens (text/image/audio/video), >30M RL rollouts, effort sweeps published rather than a single operating point

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 76.0% and BrowseComp 77.1% show genuine tool and retrieval competence, and Terminal-Bench 2.1 63.8% is respectable — though it is TML's own internal harness, where its own table shows GLM-5.2 20 points higher. Capped by GDPval-AA 28.2%, an AA Agentic Index of 22.5 (low field), Toolathlon 45.5%, Terminal-Bench 4.0 at 1.0, and no Tau/MCP-Mark/Claw row.
- **Reasoning: 77/100.** GPQA Diamond 87.2–88.3, AIME 2026 97.1 (top-10 of 29), Global-MMLU 88.7 and IFBench 79.8 are all strong, and HLE jumps to 46.0% with tools — above the 40+ frontier reference *when tool-equipped*. Capped by HLE 29.7% text-only, CritPt 5.4%, FrontierMath 33.3, an Intelligence Index of only 25 (mid-field for September 2026, #28 of 115 open-weights), and AA-Omniscience accuracy 41.5 / index 2.
- **Context window: 91/100.** 1,048,576 tokens with **measured** retrieval — AA-LCR 77.3% — puts it in the top of the ≥1M tier, and throughput at 162.7 tok/s (#9 of 115) means the window is usable, not theoretical. Not higher: no MRCR/RULER cross-check, provider listings that cap at 262K/524K, and Tinker's API only selling 64K/256K context tiers.
- **Multimodal: 74/100.** Native text + image + **audio** input with measured MMMU-Pro 73.5%, CharXiv 78.1%, MMAU 77.2% and VoiceBench 91.4% — above the plain +image band because audio is first-class and benchmarked. Held out of the 75–90 band by text-only output and no video input (video exists only in pretraining data).
- **Coding: 74/100.** SWE-bench Verified 77.6% (23rd of 101) and SWE-bench Pro 54.3% are the strongest rows and genuinely near-frontier for an open-weight model; SciCode 47.0%, a Coding Index of 52.1 (#65) and FrontierCode 14.0% hold the dimension back, and there is no LiveCodeBench, DeepSWE or TB2.0 row at all.
- **Cost efficiency: 87/100.** $0.95/$4.05 with $0.16 cache reads lands just better than the ~$1.25/$4.25 → 88 anchor, and Apache 2.0 weights are free to self-host — but AA calls the pricing above average for the open-weights tier, hardware needs 8× B300 for BF16, Tinker's own API charges $1.87/$4.68 (64K) and $3.74/$9.36 (256K), and the free endpoints log all traffic.
- **Overall Score: 78/100.** (72 + 77 + 91 + 74 + 74) / 5 = 77.6 → 78 — best-fit as an open-weights long-context multimodal reasoner with real audio understanding and competitive SWE-bench numbers; pick something cheaper for bulk agentic coding (GDPval 28.2%, Agentic Index 22.5), and note the missing JSON `response_format` before wiring it into a structured-output pipeline.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (Thinking Machines' official Inkling card and effort-0.99 table via HowAIWorks/Vercel mirrors, Epoch AI standardized rows, LLMLearner's ranked benchmark dump, CloudPrice's AA index/pricing rows, Together AI's model page, TheModelBeat/OpenRouter pricing, Sebastian Raschka's architecture notes); scores are normalized 1–100 interpretations, not official vendor scores. Mirror conflicts (GPQA 87.2/87.9/88.3, MCP Atlas 74.1/76.0, context 262K/524K/1M) are cited, not averaged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
