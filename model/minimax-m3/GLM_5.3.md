# MiniMax M3 — findings by GLM 5.3

- Source: MiniMax (`minimax-m3`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weights M3 generation — "the first open-weight model to combine frontier-level coding, a 1M-token context window, and native multimodality" (official launch). Top use case: budget long-context multimodal agent work. Second-pass profile correction: the independent ranks place it well below the launch framing — BenchLeader **56.5, #188 of 760** (Agents & tools 43 is its lowest category) — with two genuinely elite exceptions: **honesty (non-hallucination 81.6% #12)** and **IFBench 82.9% #3**.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `MiniMaxAI/MiniMax-M3` (minimax-community license); OpenRouter — **12 providers** with floor prices $0.23/$0.96 (CoreWeave fp4, 262K) and $0.24/$0.96 (GMICloud); official MiniMax platform (platform.minimax.io) with interleaved-thinking function-calling docs.
- **Release / knowledge:** **2026-06-01** (previewed 2026-05-27 with the MSA announcement; resolves the first-pass "M3 generation, 2026"); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/minimax-m3` (Zen; no Free ID — paid but very cheap); `MiniMaxAI/MiniMax-M3` (HF).
- **Context window:** 1M tokens total (official: "supports up to 1M with a **guaranteed minimum of 512K**").
- **Modalities:** text/image/video in; text out; natively multimodal; **Interleaved Thinking** (reasons between tool rounds — with a documented production gotcha, see below); tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen $0.30 in / $1.20 out per 1M (cached read $0.06); BenchLeader blended $0.525/M, 92 tok/s, ~24 s first answers, $0.508/II run; OpenRouter effective price now $0.24/$0.96 on the longest-history provider.
- **Architecture:** **~428B total / ~23B active multimodal MoE** (Semianalysis InferenceX, morphllm — resolves "no parameter sheet"); **MiniMax Sparse Attention (MSA)** — blockwise sparse softmax attention built on GQA, a lightweight Index Branch scores key-value blocks and selects a Top-k subset per GQA group (arXiv:2606.13392); cuts per-token compute at 1M context ~20x and decodes **15.6x faster than M2** at 1M; 7 multi-token-prediction modules; open weights under the minimax-community license.
- **Production caveat (new this pass):** the **interleaved-thinking tool-calling gotcha** — with the default minimax provider, M3 thinks on turn 1 but **stops thinking on turn 2+ after the first tool call** unless the complete assistant message (including tool_calls and reasoning_details) is appended to history; `reasoning_split=True` separates thinking into reasoning_details for correct replay (GitHub hermes-agent issue #75725; official function-calling docs). This harness-level failure mode plausibly contributes to the weak independent terminal-agent ranks.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **88.9% #71** (AA); Claw-Eval: **74.5%**; MCP-Atlas: **74.2%**; BrowseComp **83.5%**; BankerToolBench **76.1%**; CyberBench **65.0% #27** (Vals); SkillsBench **51.5% #20** (Vals)
- Terminal-Bench 2.1: **66.0%** official / **65.2% #80** (AA) / **53.6% #52** (Vals); terminalBenchHard **42.4% #46**; **Terminal-Bench 4.0: 2.0% #109 (AA) / 1.0% #36 (Vals)** — near-total miss on the hard board; Terminal-Bench 2.0: 46.1% #23 (Vals)
- GDPval-AA: **1304 Elo** / **37.1% #106 normalized** (AA — bottom-third rank); GDPval rubrics 74.7%; AA Agentic Index 30.8%; **AA-AnalystAgent 10.0% #33**; AA-Briefcase **1091 #44**; GDP.pdf 9.8% #46; AutomationBench (AA) 21.3% #46; EnterpriseOps 32.1% #15
- **τ³-Banking: 15.3% #114** (AA — found this pass; very weak); **LMArena Agent: −7 #42** (negative); APEX-Agents 37.7% #41; LiveBench Agentic Coding 40.7% #60; Harvey HLAB 4.2% #32; Legal Research 29.8% #40; Finance Agent 48.3% #43; Tax Agent 49.7% #40; GBAEval 0.9%; Vending-Bench 2157.8 #48
- OSWorld-Verified: **70.1%** (original verified board) vs **OSWorld-Verified 2.0: 4.6% #12** (2026.08 release — protocol split, both retained)
- **Harvey LAB conflict:** first-pass row **88.4%** (AA, presumably criterion-pass scoring) vs current AA all-pass listing **0.0% #20** — different scoring modes on the same benchmark family, both retained and flagged
- Claw-adjacent: unchanged

Reasoning / knowledge:

- GPQA Diamond: **92.9% #27** (AA) / **92.7% #14** (Vals) / 90.9% #33 (Epoch) — elite
- HLE: **39.0% #90** (AA — just under the 40% bar)
- CritPt: **3.7% #159** (AA — very weak); AA-LCR: **83.0% #24** (good); MLCR-AA: 17.2% #24 (weak)
- AA Intelligence Index v4.3.2: **29.2 #121** (weak); LiveBench Reasoning 74.5% #61; LMArena Hard Prompts 1463 #87; LMCA 33.7% #110; DTBench 78.9% #118; SimpleBench 45.8% #53; **ForecastBench 61.4% #9**
- **IFBench: 82.9% #3** (AA — its top-5 board); USAMO 2026 85.7%; OTIS 71.1% #130; ProofBench 18.0% #51; LiveBench Math 77.0% #65; LMArena Maths 1431 #103
- Knowledge: MMLU-Pro 84.2% #63; LegalBench **85.4% #19**; CorpFin **68.1% #10**; TaxEval 72.7% #57; MedScribe **87.3% #16**; Public Benefits 64.1% #20; LiveBench Data Analysis 76.2% #34; DrugDiscovery 22.8% #18 (xhigh); MedCode 46.3% #35; EMB 47.8% #47
- **Omniscience (the defining trade-off, confirmed):** non-hallucination **81.6% #12** (18.4% hallucination — elite honesty) but accuracy **16.7% #367** (near-bottom breadth — the model abstains rather than confabulates; index 1.4)
- ECI 146.9 #65; Vals Index 36.5 #33; AA Openness Index 33.3 #33

Coding:

- SWE-bench Verified: **80.5%** (BenchLM) / **75.0% #42** (Vals); LiveCodeBench (Vals): **82.2% #54**; SWE-bench Pro **59%** (59.0% at launch, "beats GPT-5.5" per launch framing — the Scale board rank is not top-tier)
- SciCode: **47.1% #117-124** (well below the 55% reference); AA Coding Index 58.6%; FrontierCode **14.7% #37**; LMArena Coding 1495 #84 / WebDev 1482 #60 (weak); LiveBench Coding 68.2% #64
- Code Migration **19.9% #44**; Vibe Code v1.1 47.6% #53; VCB 9.2% #18; ALE-Bench 640.0 #86; KernelBench Hard 28.8%; SVG-Bench 63.7%; Surface Evolver **55.0% #16**; NL2Repo 42.1%
- DeepSWE: no verified public score found (unchanged)

Long context:

- 1M window (guaranteed min 512K); AA-LCR 83.0% #24 is good; MLCR 17.2% #24 weak; no MRCR/RULER number published; LMArena Document 1433 #38 (weak).

Multimodal (grounding):

- Vendor rows retained: Video-MME (w/ sub) **85.4%**, VideoMMMU **84.6%**, OmniDocBench 1.5 **91.6%** (elite document parsing), OfficeQA Pro 45.1%, Design Arena 1269
- New independent quality rows (mid): LMArena Vision 1253 #60, MMMU-Pro Vals 81.2% #41 / AA 78.5% #65, SAGE 50.6% #16, MortgageTax 68.4% #16, **Vals Multimodal Index 60.0% #18** — no audio.

### Normalized scores (1–100)

- **Tool use: 74/100.** Lowered from 80: the rank reveals are decisively tempering — GDPval 37.1% #106, τ³ 15.3% #114, Analyst Agent 10.0% #33, LMArena Agent −7 (negative), TB 4.0 at 1-2%, APEX 37.7% #41, Briefcase 1091 #44, and the OSWorld-2.0 protocol split (70.1% → 4.6%) — with the interleaved-thinking gotcha as a documented production cause. Retained strengths: τ² 88.9% #71, MCP 74.2%, Claw 74.5%, BrowseComp 83.5%, Skills 51.5% #20, Cyber 65.0% #27, BankerToolBench 76.1%.
- **Reasoning: 74/100.** Lowered from 78: GPQA 92.9% #27 is elite, honesty is the batch's best (non-hallucination #12), IFBench #3 and ForecastBench #9 are top-10 — but CritPt 3.7% #159, AA II 29.2 #121, HLE 39.0% #90, LMCA 33.7% #110, and the 16.7% #367 abstention-accuracy profile place the controlled composite bottom-mid. Elite honesty does not compensate for thin breadth.
- **Context window: 95/100.** Held: 1M with a guaranteed 512K minimum; AA-LCR 83.0% #24 is good but no ≥512K retrieval bar met.
- **Multimodal: 84/100.** Lowered from 88: text+image+video input with elite document parsing (OmniDocBench 91.6%) and good vendor video rows, but the independent quality rows are mid (Vision 1253 #60, MMMU-Pro 81.2% #41, SAGE 50.6% #16, Vals Multimodal 60.0% #18); no audio, text-only output.
- **Coding: 70/100.** Lowered from 72: SWE-bench V 75.0% #42 and LiveCodeBench 82.2% #54 hold the mid band, but SciCode 47.1% #117-124 (below the 55% reference), LMArena Coding #84, LiveBench Coding #64, Code Migration 19.9% #44, FrontierCode 14.7% #37, TB 4.0 ~2%, and ALE #86 confirm the below-frontier coding rank.
- **Cost efficiency: 94/100.** Held: $0.30/$1.20 Zen with the OpenRouter floor at $0.23/$0.96, cached reads $0.06, $0.0005 chat replies, open weights — still half the ~$0.60/$2.20 (≈92) anchor.
- **Overall Score: 79.4/100.** (74 + 74 + 95 + 84 + 70) / 5 = 79.4, down from 82.6 on 2026-09-24: the second pass converted raw scores into ranks and the professional/terminal-agent picture is bottom-mid, not high-mid. Best-fit: the cheapest **honest** long-context multimodal agent — elite abstention over confabulation (non-hallucination #12, IFBench #3), a genuinely novel sparse-attention architecture, and document/video parsing at floor prices; escalate to frontier models for hard coding or heavy tool loops (and replay reasoning_details correctly if you run agent loops on it).

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (MiniMax's official M3 launch blog, model page, and function-calling/interleaved-thinking docs, the MSA technical report arXiv:2606.13392, Semianalysis InferenceX architecture profile, Artificial Analysis model benchmarks with rank reveals, BenchLeader data as of 2026-10-12, Vals AI, LiveBench, LMArena, Epoch hub, Scale SEAL, Mercor APEX, Andon Labs, the OSWorld 2.0 paper board, the hermes-agent issue #75725 documenting the interleaved-thinking gotcha; three successful web searches; reviews: theairankings, saascity, realfindings, aitoolsera, aimadetools ×2, aitoolgrade, iotdigitaltwinplm, aiunpacker, saasmaster, morphllm, n1n, han-oqo, robotsatlas, humphreytheodore, deepwiki, tokenhub, contentbuffer, minimax-ai.chat docs); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
