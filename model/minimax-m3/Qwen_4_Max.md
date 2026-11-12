# MiniMax M3 — findings by Qwen 4 Max

- Source: MiniMax/minimax-m3
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M3 (HF `MiniMaxAI/MiniMax-M3`; API `minimax-m3`)
- **Short description:** MiniMax's **June 1, 2026** open-weight flagship (OpenRouter lists May 31) — "Frontier Coding, 1M Context, Native Multimodality — All in One Model," pitched as the **first open-weight model combining all three**. Native mixed-modality training from Step 0 (interleaved data pipeline re-architected); **MiniMax Sparse Attention (MSA)** gives 1M context at **1/20 per-token compute vs M2, 9× prefill / 15× decode speedups**, >4× faster than Flash-Sparse-Attention/flash-moba operators. Interactive user-simulator framework trains multi-turn collaborative coding. Weights + tech report (arXiv 2606.13392) shipped within the promised 10 days.
- **Provider / access:** MiniMax API + MiniMax Code (Agent Team, Producer+Verifier loop, built on OpenCode/Pi; desktop app) + Token Plan; **open weights** (MINIMAX COMMUNITY LICENSE — commercial use with restrictions) on HF/ModelScope; SGLang/vLLM/Transformers/KTransformers/unsloth/ATOM (MXFP4/MXFP8) recipes; **11 API providers** per AA (OpenRouter, Fireworks day-0, OpenCode, Requesty…).
- **Release / knowledge:** Released 2026-06-01 (AA; blog "today" June 1; OpenRouter May 31 — listing lag). Knowledge cutoff not stated in sources read.
- **IDs:** `MiniMax-M3` / `minimax-m3`; predecessor M2.7; sibling M3.1 Flash (BenchLM 60.06 — separate model); ≠ M2.5 ≠ M1.
- **Context window:** **1M tokens** (official/AA); Fireworks/Requesty cap at **500K/512K with 512K max output** — provider limits labelled. **>512K input billed at a higher long-context rate** (official; ≤512K standard). AA-LCR **83.0** (strong); no MRCR row. 80% cache discount. MSA ablations "matched full attention on the vast majority of capabilities."
- **Modalities:** **Text + image + video in, text out** (official + AA agree; HF `image-text-to-text`, tags video/multimodal). Desktop computer use via MiniMax Code. No audio input (Token Plan's speech/music pool covers other MiniMax models). MMMU-Pro 78.1 vendor / 78.6 AA, VideoMMMU **84.6**, Video-MME w-sub **85.4**, OmniDocBench 1.5 **91.6**.
- **Pricing (as of 2026-11-12):** **$0.30 in / $1.20 out per 1M** (MiniMax API/AA/OpenCode), 80% cache, AA blended **$0.22**; **OpenRouter $0.23/$0.96** — provider spread labelled. **$1.29 per AA index task**; 122 tok/s, TTFT **68.07s** (class median 17.82s — slow), 12.5 min/task, 104M index tokens (concise). Token Plan: Plus $20/mo ~1.7B tokens, Max $50 ~5.1B, Ultra $120 ~9.8B. `service_tier=priority` available. Thinking modes **enabled/adaptive/disabled** share pricing.
- **Architecture:** MoE **428B total / 23B active** (AA + HF), MSA sparse attention (KV-block partitioning, "KV outer gather Q" contiguous-memory operator), native multimodal fusion. Recommended sampling temp 1.0 / top_p 0.95. GitHub MiniMax-AI/MiniMax-M3 + MSA operator repo.

### Raw benchmarks found

Vendor-reported (minimax.io launch blog + HF model card; harnesses detailed in blog methodology — Claude Code scaffolding for SWE-V/Pro, Terminus 2 for TB2.1 8C16G/2h/128K-out, OSWorld-V 361 samples/200 steps, MathArena dual-judge min for USAMO):

- Coding: SWE-bench Verified **80.5**, SWE-bench Pro **59.0**, TB2.1 **66.0**, SWE-fficiency **34.8**, KernelBench Hard **28.8**, NL2Repo **42.1**, VIBE V2 50.1 (internal), SVG-Bench 63.7 (internal)
- Agent: BrowseComp **83.5** (WebExplorer framework, >64K history discarded), MCP Atlas **74.2** (Gemini 2.5 Pro judge), OSWorld-Verified **70.1** (68.70 at 100 steps → 70.06 at 200), Claw-Eval **74.5** (Pass³, Gemini 3.0 Flash judge), BankerToolBench 76.1 (M2.7 judge), GDPval rubrics 74.7 (internal pointwise)
- Multimodal: MMMU-Pro **78.1**, VideoMMMU **84.6** (1FPS/512 frames), Video-MME w-sub **85.4** (84.6 at 512 frames), OmniDocBench 1.5 **91.6**, OfficeQA Pro 45.1
- Math: USAMO 2026 **85.7** (MathArena, 512K max output, test-time scaling ≤10 iterations, dual judges GPT-5.4-high + Gemini 3.1 Pro-high take min)
- Autonomy demos: ICLR 2025 outstanding-paper reproduction ~12h/18 commits/23 figures; Hopper FP8 GEMM ~24h/147 submissions/1,959 tool calls, 7.6%→**71.3%** peak utilization (9.4×; best solution at submission 145 — only Opus 4.7 and M3 persisted past 30); PostTrainBench **0.37** (Opus 4.7 0.42, GPT-5.5 0.39)

Independent runs:

- AA (live, reasoning version, v5.0.1): index **19** (#17/27 open-weights class, median 23; BenchLM carries 18.9 — consistent); AA-GPQA **92.9**, AA-HLE **39.0**, AA-LCR **83.0**, CritPt **3.7**, AA-Omniscience **−5.5** (accuracy 44.9, hallucination **91.4**), τ² **88.9**, GDPval-AA **1,304 Elo / 37.1% normalized**, Agentic Index 30.8, Harvey LAB **v1.0 88.4** (≠ v1.1 hallucination-gated all-pass), IFBench **82.9**, SciCode 47.1, Coding Index 58.6, MMMU-Pro 78.6, Cyber Index 22.4, CWE-Bench-AA 41.7, CyberGym-E2E 24.4, DeepsecBench 1.1
- Vals AI: SWE-bench **75.0**, TB2.1 **53.6**, LCB **82.2**, GPQA-D 92.7, MMLU-Pro 84.2
- Other: ResearchClawBench 19.8, **OSWorld 2.0 4.6** (paper run — ≠ OSWorld-Verified), OpenHarmony Bench 48.4, MazeBench 0, Design Arena 1,253; BenchLM aggregate **49.03/100, #103 of 1026** (57/815 coverage, conservative)

### Normalized scores (1–100)

- **Tool use: 80/100.** BrowseComp 83.5, MCP Atlas 74.2, τ² 88.9, OSWorld-V 70.1, Claw-Eval 74.5, BankerToolBench 76.1; capped by GDPval-AA **1,304 / 37.1%** (weak vs 1,600+ peers), Agentic Index 30.8, OSWorld 2.0 **4.6**, ResearchClaw 19.8, MazeBench 0, and shallow cyber (CyberGym-E2E 24.4, DeepsecBench 1.1).
- **Reasoning: 75/100.** GPQA **92.9** (AA; Vals 92.7 confirms), USAMO 2026 **85.7** (test-time-scaled), IFBench 82.9, HLE 39.0, MMLU-Pro 84.2; capped by AA index **19** (below class median 23), CritPt **3.7** (near-zero physics), and Omniscience hallucination **91.4%** (net −5.5 — severe knowledge-reliability weakness).
- **Context window: 88/100.** 1M via MSA with **9×/15× prefill/decode speedups and 1/20 compute**, AA-LCR **83.0** (strong), 512K output on Fireworks, 80% cache; deducted for the >512K long-context surcharge, provider caps at 500–512K, and no MRCR depth row.
- **Multimodal: 82/100.** Native image+video from Step 0 (AA confirms video input), VideoMMMU **84.6**, Video-MME **85.4**, OmniDocBench **91.6**, MMMU-Pro 78.6 (AA); capped by no audio input, OfficeQA Pro 45.1, and vendor video harness advantages (512–1024 frames vs external 640 cap; Opus 4.7 unreportable >20% API errors).
- **Coding: 80/100.** SWE-V **80.5**, SWE-Pro **59.0**, TB2.1 66.0 (Vals 53.6 — harness spread), LCB 82.2, NL2Repo 42.1, SWE-fficiency 34.8, KernelBench Hard 28.8, CUDA-kernel autonomy demo; capped by Coding Index 58.6, SciCode 47.1, and no DeepSWE/TB4/FrontierCode/CursorBench rows.
- **Cost efficiency: 88/100.** $0.30/$1.20 (OpenRouter $0.23/$0.96) with 80% cache, blended $0.22, $1.29/task; Token Plan ~1.7B tokens for $20/mo is exceptional quota-per-dollar; open weights self-hostable; deducted for TTFT **68.07s**, >512K surcharge, and community-license restrictions.
- **Overall Score: 81.0/100.** Mean of the five quality dims (80+75+88+82+80)/5 = 81.0. Best-fit: open-weight long-context multimodal agents — full-repo understanding, video/document parsing, desktop computer use, and long-horizon autonomous engineering (CUDA/paper-repro demos) at $0.22 blended; pair with retrieval/verification for factual work (91.4% hallucination) and avoid physics-heavy reasoning (CritPt 3.7). M3.1 Flash is the faster/cheaper sibling; M3 trades index points for 1M MSA context and native video.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (MiniMax's official launch blog fetched in full including the per-benchmark Evaluation Methodology section; HF raw README fetched in full — architecture, thinking modes, deployment, license; Artificial Analysis' live page + FAQ; BenchLM's 57-row sourced profile; OpenRouter/Fireworks/Requesty/OpenCode pricing via search and prior fetch); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **reasoning type** BenchLM "Non-Reasoning" vs AA "Reasoning: Yes" vs HF enabled/adaptive/disabled — hybrid model, AA tracks the reasoning version; AA index 19 live vs 18.9 BenchLM-carried (consistent v5.0.1-era snapshots); pricing $0.30/$1.20 (MiniMax/AA/OpenCode) vs $0.23/$0.96 (OpenRouter) — provider spread; context 1M (official) vs 500K/512K (Fireworks/Requesty) — provider caps; TB2.1 66.0 (vendor, Terminus 2) vs 53.6 (Vals) — harness spread; **OSWorld-Verified 70.1 ≠ OSWorld 2.0 4.6** (different benchmarks); **Harvey LAB v1.0 88.4 ≠ v1.1 hallucination-gated all-pass**; GDPval rubrics 74.7 (internal pointwise) ≠ GDPval-AA 1,304 Elo/37.1% (AA); Video-MME 85.4 w-sub vs 84.6 at 512 frames (methodology); MMMU-Pro 78.1 vendor vs 78.6 AA and GPQA 92.9 AA vs 92.7 Vals (consistent). Identity: MiniMax-M3 ≠ M3.1 Flash ≠ M2.7 ≠ M2.5; USAMO 2026 ≠ IMO 2025; vendor peer columns (Opus 4.7, GPT-5.5, Gemini 3.1 Pro) use mixed official/internal harnesses — only the M3 column is scored.
- Reference URLs:
  - [MiniMax M3: Frontier Coding, 1M Context, Native Multimodality — MiniMax (official)](https://www.minimax.io/blog/minimax-m3)
  - [MiniMax-M3 model card — Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M3)
  - [MiniMax-M3 technical report — arXiv 2606.13392](https://arxiv.org/abs/2606.13392)
  - [MiniMax-M3 — Artificial Analysis](https://artificialanalysis.ai/models/minimax-m3)
  - [MiniMax M3 benchmark profile — BenchLM](https://benchlm.ai/models/minimax-m3)
  - [MiniMax M3 — OpenRouter](https://openrouter.ai/minimax/minimax-m3)
  - [MiniMax M3 Launch — Fireworks AI](https://fireworks.ai/blog/minimax-m3)
  - [MiniMax M3 — Vals AI leaderboards](https://www.vals.ai/models/minimax_MiniMax-M3)
  - [OpenCode Console models — pricing table](https://opencode.ai/docs/console/models/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.