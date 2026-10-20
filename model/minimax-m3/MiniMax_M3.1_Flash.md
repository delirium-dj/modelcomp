# MiniMax M3 — findings by MiniMax M3.1 Flash

- Source: MiniMax (`MiniMax-M3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June-2026 open-weight flagship — "MiniMax M3 is officially released today", the model MiniMax positions as "the first and only open-weight model to bring all three together": **1M context + native multimodal + frontier coding**. Its technical bet is **MiniMax Sparse Attention (MSA)** — "9× prefill and 15× decode speedups compared to M2 at 1M context, reducing per-token compute to 1/20" — on a 428B/23B-active MoE. It is the direct predecessor of MiniMax M3.1 Flash (the free route this reporter is named after).
- **Provider / access:** MiniMax API `MiniMax-M3` at `https://api.minimax.io/v1/chat/completions` (OpenAI-compatible) and `https://api.minimax.io/anthropic/v1/messages` (Anthropic-compatible, recommended), plus the legacy `chatcompletion_v2` path; open weights at `huggingface.co/MiniMaxAI/MiniMax-M3` (427B safetensors, BF16/F32) and `github.com/MiniMax-AI/MiniMax-M3`; ModelScope; OpenRouter `minimax/minimax-m3`; OpenCode Zen `opencode/minimax-m3` (`https://opencode.ai/inference/openai/v1/chat/completions`).
- **Release / knowledge:** released **2026-06-01** (MiniMax blog; AA `releaseDate: 2026-06-01`; Vals and OpenRouter's creation timestamp say 2026-05-31). Knowledge cutoff: **no verified public value found** (AA `knowledgeCutoffDate: null`).
- **IDs:** `MiniMax-M3` (MiniMax API), `minimax/minimax-m3` (OpenRouter), `opencode/minimax-m3` (Zen), `MiniMaxAI/MiniMax-M3` (HF).
- **Context window:** **1,000,000 tokens** — "M3 API supports up to 1M tokens context window with a **guaranteed minimum of 512K**"; OpenRouter's provider context is 524,288. Max output **512,000** (OpenRouter `max_completion_tokens: 512000`; Vals "Max Output Tokens 512k") — the largest output cap in this dataset.
- **Modalities:** text, image and video in; text out. "audio input is not currently supported".
- **Reasoning controls:** `thinking` = `disabled` / `adaptive` (on by default); the HF card lists `enabled` / `adaptive` / `disabled`. (`reasoning_effort` is a **M3.1-Flash** feature, not M3.)
- **Pricing (as of 2026-10-19, per 1M tokens):** ≤512K input **$0.30 in / $1.20 out**, cache read **$0.06**; >512K **$0.60 / $2.40 / $0.12**; `service_tier=priority` = 1.5×. The launch price was 50% off for seven days ($0.60/$2.40). Token Plan tiers: Plus $20 ≈ 1.7B tokens/month, Max $50 ≈ 5.1B, Ultra $120 ≈ 9.8B. Rate limits: 200 RPM / 10,000,000 TPM (M3 and M3.1-Flash).
- **Architecture:** MoE, **428B total / 23B activated** ("~428B parameters and ~23B activated parameters"), MiniMax Sparse Attention, a 1M-token context, native multimodality; technical report arXiv:2606.13392.
- **Licence:** `minimax-community` — **MiniMax Community License, not MIT/Apache**; Artificial Analysis classifies it as `commercial-license` with an Openness Index of 33.3 ("Commercial use is allowed with restrictions").

### Raw benchmarks found

> MiniMax's own HF-card figure and launch-blog numbers are marked "vendor"; Artificial Analysis, Vals AI and the BenchLM ledger are independent. Most vendor scaffolds are MiniMax-internal (Claude Code / Terminus 2 / Mini-SWE-Agent), not public leaderboard runs.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (vendor, MiniMax-internal scaffold) / **65.17%** (AA) / **53.56%** (Vals AI, #12/75)
- Terminal-Bench 4.0: **2.02%** (AA) / **1.01%** (Vals AI, #47/51) — essentially zero on the current agentic-terminal benchmark
- BrowseComp **83.5%** (vendor) — "On BrowseComp, M3 scores 83.5, surpassing Opus 4.7 (79.3)"; GDPval rubrics 74.8; BankerToolBench **76.1%**; MCP Atlas **74.2%**; Claw-Eval **74.5%**; Apex-Agents 27.7%; OfficeQA Pro **45.1%**; SpreadSheetBench-v1 89.4%; DRACO 73.2; LOCA-Bench (256k) 49.3
- OSWorld-Verified **75.2%** (vendor) / 70.1% (via BenchLM); OSWorld **2.0 4.6%** (arXiv:2606.29537) — a different benchmark generation
- τ²-bench **88.89%** (AA); τ³-Banking **15.26%** (AA); AutomationBench **21.25%** (AA); EnterpriseOps-Gym-AA 32.11% (AA); AnalystAgent **10%** (AA); Harvey LAB **0%** (AA)
- Design Arena / IFBench **82.86%** (AA); no Terminal-Bench 4.0 row on the official board (page is client-rendered)

Reasoning / knowledge:

- GPQA Diamond: **92.93%** (AA) / **92.68%** (Vals AI, #15/138) / 92.7% (via BenchLM)
- HLE **38.97%** (AA) / 39.0% (via BenchLM); LCR **83.0%** (AA); MLCR-AA 17.22% (AA); CritPt **3.71%** (AA)
- Artificial Analysis Intelligence Index: **29.22** (#23/121 open-weight models) — one of the more *concise* profiles at 120M output tokens (#19/47 verbosity)
- Omniscience: index **1.35**, accuracy **16.7%**, hallucination rate **18.43%** (AA) — a very low-accuracy, low-hallucination profile
- IMO 2025 **35/42**; USAMO 2026 **36/42** (85.7%); GDPval-AA 1242.47 (AA) / 1304 (via BenchLM); no FrontierMath, AIME or MMLU-Pro figure published for M3

Coding:

- SWE-bench Verified: **80.5%** (vendor) / **75.00%** (Vals AI, #46/88) / 80.5% (via BenchLM); SWE-bench Pro **59.0%** (vendor)
- LiveCodeBench **82.15%** (Vals AI, #56/143) / 82.2% (via BenchLM); DeepSWE: **not published** for M3
- NL2Repo **42.1%**; SWE Atlas-QnA 37.9; SWE Atlas-Test Writing 30.8; SWE-fficiency 34.8; LiveSQLBench 40.2; CL-bench 20.5; VIBE-V2 **50.1%**; SVG-Bench **63.7%**; KernelBench Hard **28.8%**; PaperBench 52.6; PostTrainBench **37.1%**
- No FrontierCode, FrontierSWE, CursorBench, Vibe Code Bench or ProgramBench figure for M3

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published.** 1M context (512K guaranteed), 512K max output; LOCA-Bench (256k) 49.3% is the only long-horizon number, and it is a MiniMax-internal scaffold.
- MSA's own claim is a compute claim ("9× prefill and 15× decode speedups compared to M2 at 1M context, reducing per-token compute to 1/20"), not a retrieval-accuracy claim.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 72/100.** Terminal-Bench 2.1 66.0% (vendor) / 65.17% (AA) / 53.56% (Vals) — below the rubric's ~88% anchor — BrowseComp 83.5% (above Opus 4.7's 79.3), MCP Atlas 74.2%, Claw-Eval 74.5%, BankerToolBench 76.1%, OSWorld-Verified 75.2%, τ²-bench 88.89%. Capped by Terminal-Bench 4.0 at **1.01–2.02%**, by AutomationBench 21.25%, by τ³-Banking 15.26%, by AnalystAgent 10% and Harvey LAB 0%, and by OSWorld 2.0 at 4.6%.
- **Reasoning: 74/100.** GPQA Diamond 92.68–92.93%, LCR 83.0%, USAMO 2026 36/42, IMO 2025 35/42, and an AA Intelligence Index of **29.22 (#23/121 open-weight models)**. Capped by HLE 38.97%, CritPt 3.71%, MLCR-AA 17.22%, and by the very low Omniscience **accuracy of 16.7%** (index 1.35) — the model rarely answers knowledge questions correctly, even though it rarely hallucinates.
- **Context window: 94/100.** 1,000,000 tokens (512K guaranteed) with a **512,000 max output** — the rubric's top tier on both window and output. One point below because **no long-context retrieval measurement exists** (no MRCR, RULER or GraphWalks) and the only long-horizon datapoint, LOCA-Bench (256k) 49.3%, is a MiniMax-internal scaffold.
- **Multimodal: 89/100.** Text, image and video in with text out, with a strong published multimodal set: MMMU-Pro **78.55%** (AA) / 81.16% (Vals) / 78.1% (vendor), Video-MMMU 84.6%, Video-MME (with subtitles) 85.4%, OmniDocBench 91.6%, ERQA 70.5%, OSWorld-Verified 75.2% (agentic screen use). Held at 89 (just under the 90–100 audio/non-text band) because **audio input is not supported** and no independent vision harness has run it.
- **Coding: 76/100.** SWE-bench Verified 75–80.5%, SWE-bench Pro 59.0%, LiveCodeBench 82.15%, Terminal-Bench 2.1 66.0%, VIBE-V2 50.1%, SVG-Bench 63.7%, PaperBench 52.6%, PostTrainBench 37.1%, SWE Atlas-QnA 37.9%. Capped by the absence of any **DeepSWE** figure (the rubric's primary coding anchor), by Terminal-Bench 2.1 at 66.0% and Terminal-Bench 4.0 at ~2%, by SWE-bench Pro 59.0%, and by KernelBench Hard 28.8% and NL2Repo 42.1%.
- **Cost efficiency: 90/100.** The evaluated route — OpenCode Zen `opencode/minimax-m3` — is billed at **$0.30 in / $1.20 out** per 1M with a $0.06 cached read, matching MiniMax's list price for ≤512K prompts; Artificial Analysis measures **$0.51 per Index task** and the model is notably concise (120M output tokens, #19/47 verbosity). The deductions are the **Community Licence** (not OSI) and the fact that prompts above 512K double to $0.60/$2.40.
- **Overall Score: 81.0/100.** (72 + 74 + 94 + 89 + 76) / 5 = 81.0 — best-fit: a **1M-context, native-multimodal, 428B open-weight flagship at $0.30/$1.20** whose engineering story (MiniMax Sparse Attention: 9× prefill, 15× decode, 1/20 per-token compute at 1M context) is more compelling than its benchmark profile — Terminal-Bench 4.0 at ~2%, OSWorld 2.0 at 4.6% and a 16.7% knowledge-accuracy score mean it is a long-context, video-capable generalist rather than an agentic-coding model; MiniMax M3.1 Flash (the free route) is its own successor.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 2.1 — 66.0% (MiniMax scaffold) vs 65.17% (AA) vs 53.56% (Vals).** Scaffold and harness differences; AA is the anchor.
2. **Terminal-Bench 4.0 — 2.02% (AA) vs 1.01% (Vals).** Both are effectively zero, and no official-board row exists (the leaderboard renders client-side).
3. **OSWorld — 75.2% OSWorld-Verified (vendor) vs 70.1% (via BenchLM) vs 68.70%→70.06% at 100→200 max steps (vendor's own methodology note) vs 4.6% on OSWorld **2.0** (arXiv:2606.29537).** Different benchmark generations; the Verified figure is used and the 2.0 number recorded.
4. **SWE-bench Verified — 80.5% (vendor) vs 75.00% (Vals).** The independent run is used.
5. **MMMU-Pro — 78.1% (vendor) vs 78.55% (AA) vs 81.16% (Vals);** the card's variant is unstated (it maps to the standard 10-option setting).
6. **Release date — 2026-06-01 (blog, AA) vs 2026-05-31 (Vals, OpenRouter creation).** One day apart; the blog date is used.
7. **Pricing — launch $0.60/$2.40 (seven-day 50% off) vs today's $0.30/$1.20;** Vals still lists the launch rate. Today's rate is used.
8. **Reasoning-type labels conflict** — BenchLM marks M3 "Non-Reasoning" while AA records `isReasoning: true` and the HF card exposes `thinking: adaptive` (on by default). AA's reading is used.
9. **Scale — AA index 29.22 vs BenchLM 54.97/100.** Different composites; only AA's number enters the rubric.
10. **GDPval-AA — 1242.47 Elo (AA) vs 1304 (via BenchLM).** Minor; AA used.
11. **Vendor scaffolds are internal.** The published Terminal-Bench, SWE-bench and OSWorld numbers come from MiniMax's own Claude Code / Terminus 2 / Mini-SWE-Agent scaffolds, which is why the independent Vals and AA runs are systematically lower; this is stated in each score line rather than averaged away.

### Notes on identity

- `MiniMax-M3` is a distinct model from `MiniMax-M2.7` and `MiniMax-M2.5` (both $0.30/$1.20 on Zen, with M2.5 deprecated 2026-08-05) and from **MiniMax M3.1 Flash** — a separate, later model (Zen: "MiniMax M3.1 Flash Free | minimax-m3.1-flash-free", free for a limited time, "Its provider follows a zero-retention policy and does not use your data for model training"), which is the free route this reporting agent is named after.
- The **licence is the MiniMax Community Licence**, not MIT — so "open weights" is accurate while "open source" is not, and the Openness Index is 33.3/100.
- MSA is a **serving/architecture claim about efficiency**, not a quality claim: the vendor's own numbers are about prefill/decode speed and per-token compute at 1M context, and no independent retrieval benchmark accompanies them.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — MiniMax's launch blog, the `MiniMaxAI/MiniMax-M3` Hugging Face model card (parameters, licence, context, benchmark figure, scaffolds), the MiniMax API docs (endpoints, thinking modes, pricing, rate limits), the MiniMax Sparse Attention paper (arXiv:2606.13392) and the OSWorld 2.0 paper (arXiv:2606.29537); independent trackers Artificial Analysis (model page with its per-evaluation payload), Vals AI, the BenchLM evidence ledger, OpenRouter, and OpenCode Zen. Vendor-vs-independent conflicts — chiefly the internal-scaffold advantage and the 2.02%-vs-1.01% Terminal-Bench 4.0 readings — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.md`, using the same headings.
