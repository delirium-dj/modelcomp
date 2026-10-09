# Kimi K2.5 — findings by Kimi K3

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight flagship released 2026-01-27: a 1T-parameter MoE (32B active) unifying vision+text, thinking/non-thinking modes, and single/multi-agent (Agent Swarm) execution. Succeeded later in the year by Kimi K2.6 and K3.
- **Provider / access:** Moonshot AI API (`kimi-k2.5`, OpenAI-compatible Chat Completions); open weights on Hugging Face `moonshotai/Kimi-K2.5` (MIT); deployment via vLLM/SGLang/KTransformers documented in the official repo.
- **Release / knowledge:** 2026-01-27 (TechCrunch, aireleasetracker); knowledge cutoff not published.
- **IDs:** `kimi-k2.5` (Moonshot API); `moonshotai/Kimi-K2.5` (HF). No OpenCode Zen Free ID verified.
- **Context window:** 262,144 tokens (256K); benchmarks standardized to ~128k inputs (official repo README via DeepWiki).
- **Modalities:** text/image/video in → text out; thinking and non-thinking modes; tool calling (search, code-interpreter, web-browsing) and Agent Swarm multi-agent execution; JSON/structured output via tool calls.
- **Pricing (as of 2026-10-09):** Moonshot API ≈ $1.50 / $6.00 per 1M in/out (airank.dev); weights MIT — self-hosting eliminates per-token cost (hardware-bound).
- **Architecture:** 1T total / 32B active MoE (aireleasetracker, airank); MIT-licensed open weights; vision encoder native.

### Raw benchmarks found

(Official repo README table via DeepWiki; thinking mode unless noted; competitors re-evaluated where marked `*`)

Agent / tool use:

- BrowseComp: **60.6%** standard, **74.9%** with context management, **78.4%** Agent Swarm (vs GPT-5.2 65.8)
- WideSearch (item-f1): **72.7%** (79.0% swarm); DeepSearchQA: **77.1%**; FinSearchComp T2&T3: **67.8%**; Seal-0: **57.4%**
- OSWorld: **63.3%** (airank.dev)
- Terminal-Bench 2.0: **50.8%** non-thinking (official; Terminus-2 harness) — airank lists **43.2%** (harness difference noted)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE-Full: **30.1%** no tools; **50.2%** with tools (vs GPT-5.2 45.5, Claude Opus 4.5 43.2)
- AIME 2025: **96.1** (avg@32); HMMT 2025: **95.4**; IMO-AnswerBench: **81.8**
- GPQA Diamond: **87.6** (avg@8); MMLU-Pro: **87.1**
- CritPt / AA Intelligence Index: no verified public score found

Coding:

- SWE-Bench Verified: **76.8%** (avg@5, non-thinking; vs Opus 4.5 80.9, GPT-5.2 80.0)
- SWE-Bench Pro: **50.7%**; SWE-Bench Multilingual: **73.0%**
- LiveCodeBench v6: **85.0%**; SciCode: **48.7%**; OJBench (cpp): **57.4%**; PaperBench: **63.5%**; CyberGym: **41.3%**

Vision/multimodal:

- MMMU-Pro **78.5**, OCRBench **92.3**, InfoVQA **92.6**, MathVista mini **90.1**, MathVision **84.2**, OmniDocBench 1.5 **88.8**, SimpleVQA **71.2** (all official table)
- VideoMMMU **86.6**, MMVU **80.4**, VideoMME **87.4**, LongVideoBench **79.8**, LVBench **75.9**

Long context:

- AA-LCR: **70.0** (avg@3); LongBench v2: **61.0** (128k-standardized) — leaderboard-competitive at launch (AA-LCR #2 in official comparison).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 84/100.** Agentic search is the standout (BrowseComp 78.4 swarm, DeepSearchQA 77.1, FinSearchComp 67.8) plus OSWorld 63.3 and a documented Agent Swarm multi-agent mode; capped by mid CyberGym (41.3) and Terminal-Bench's harness-sensitive 43–51 range.
- **Reasoning: 84/100.** HLE w/tools 50.2% led the launch table; AIME 96.1 / HMMT 95.4 near-perfect; GPQA 87.6 trails GPT-5.2 (92.4) and Gemini 3 Pro (91.9); no-tools HLE 30.1 shows the tool dependency.
- **Context window: 75/100.** 256K is mid-tier by late-2026 (1M is common now); AA-LCR 70.0 and LongBench v2 61.0 are solid but trail the newest 1M-class retrieval leaders.
- **Multimodal: 88/100.** True native text+image+video intake with table-leading OCRBench 92.3 / InfoVQA 92.6 and strong video (VideoMMMU 86.6); output is text-only, which keeps it short of full-multimodal.
- **Coding: 82/100.** SWE-Bench Verified 76.8 + LiveCodeBench 85.0 + SWE-Multilingual 73.0 are competitive-with-frontier; SWE-Bench Pro 50.7 and Terminal-Bench ~44–51 cap it below the best coding specialists.
- **Cost efficiency: 80/100.** MIT open weights at 1T scale make self-host economics strong; hosted API $1.50/$6.00 is mid-pack, not flash-cheap.
- **Overall Score: 82.6/100.** Mean of 84/84/75/88/82 = 82.6 → 82.6. Best fit: open-weights multimodal agents (OCR/document/video-heavy) and agentic search pipelines that can self-host.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (MoonshotAI/Kimi-K2.5 GitHub README benchmark table via DeepWiki, airank.dev independent listing, TechCrunch launch coverage, aireleasetracker, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores. Note: this is my own predecessor model; all numbers are cited from public sources, none self-derived.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
