# Kimi K2.6 — findings by Step 5 Preview

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's April 2026 open-weight flagship (released 2026-04-20, Modified MIT license) — a native multimodal agentic model with the best SWE-bench Pro and long-horizon agent stability in the open-weights class, and the #1 open-weights model on the Artificial Analysis Intelligence Index at launch. Its agent-swarm architecture scales to 300 sub-agents executing 4,000 coordinated steps (vs 100/1,500 for K2.5), and it turns prompts and visual inputs into production-ready interfaces.
- **Provider / access:** Moonshot API (`kimi-k2.6`, platform.kimi.ai), Kimi.ai / Kimi App / Kimi Code; open weights `moonshotai/Kimi-K2.6` on Hugging Face; 9+ API providers (Fireworks, Parasail, DeepInfra, Cloudflare, Together, Novita, SiliconFlow…); OpenRouter `moonshotai/kimi-k2.6`.
- **Release / knowledge:** 2026-04-20. Knowledge cutoff not disclosed.
- **IDs:** `kimi-k2.6` (Moonshot/OpenRouter), `moonshotai/Kimi-K2.6` (HF weights).
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image and video in → text out (MoonViT, 400M vision encoder); Thinking (default) and Instant modes; thinking preserved across turns; function calling; OpenAI- and Anthropic-compatible APIs.
- **Pricing (as of 2026-10-09):** $0.95 / MTok input, $0.16 cached, $4.00 output (Moonshot first-party); OpenRouter route $0.465 / $2.45 with $0.0975 cache reads; cheapest provider Parasail $0.60/$2.80.
- **Architecture:** MoE, 1T total / 32B active, 61 layers (1 dense), 384 experts (8 selected + 1 shared), MLA attention, SwiGLU, 160K vocab; native INT4 QAT on experts + BF16 elsewhere.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **58.4/100** overall, #60 of 956 models, 55 of 648 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **27** (#26/121 — matches the file's 27.0), 77.3 tok/s, TTFT 2.72s, $0.95/$4.00 with 83% cache discount (blended $0.70/M; $0.80 per Index task), 256k context (260k per the FAQ row), text/image/video, 1T/32B, Modified MIT, 12 providers, 180M Index tokens (very verbose) — DEPRECATED on AA (suggests Kimi K3)

Agent / tool use (Moonshot's own table, thinking mode, 262K context, tools where noted):

- DeepSearchQA: **f1 92.5 / accuracy 83.0** (field-leading; GPT-5.4 78.6/63.7, Opus 4.6 91.3/80.6)
- BrowseComp: **83.2%** (Agent Swarm: 86.3%; K2.5 74.9)
- WideSearch (item-f1): **80.8%**
- Claw-Eval v1.1: **62.3 pass^3 / 80.9 pass@3** (Opus 4.6 70.4/82.4)
- OSWorld-Verified: **73.1%** (GPT-5.4 75.0, Opus 4.6 72.7)
- Toolathlon: **50.0%**; MCPMark: **55.9%**; APEX-Agents: **27.9%** (452-task AA protocol); **TAU3-Bench 72.4% (#3/13, independent — BenchmarkList 2026-10-07)**; **TerminalWorld 57.5% (#2/8)**; AgentTrap 75 (#1/8); PinchBench 90.2 (#6/73); **Tau3-Banking 23.3% (#45/176, independent)**
- Terminal-Bench 2.0 (Terminus-2): **66.7%** (GPT-5.4 65.4, Gemini 3.1 Pro 68.5); Terminal-Bench Hard: **43.9%** (AA)
- GDPval-AA: **Elo 1520** (vs 1309 for K2.5); **27.0%** (AA)
- Terminal-Bench 2.1: **65.9%** (AA) / 53.6% (Vals); **Terminal-Bench 4.0: 0.5%** (AA — the new hard suite is far from solved)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot) / 88.4% (K3-comparison table) / **91.1%** (AA) / 89.1% (Vals)
- HLE: **34.7% full-set no tools** (36.4% text-only subset; 55.5% text-only with tools); **54.0% full-set with tools** — beats GPT-5.4's 52.1% and Opus 4.6's 53.0%
- AIME 2026: **96.4%**; HMMT Feb 2026: **92.7%**; IMO-AnswerBench: **86.0%**
- AA Intelligence Index: **27.0** (reasoning; 23.6 non-reasoning) — **#1 of 77 open-weights models**, behind only Opus 4.6, GPT-5.4 and Gemini 3.1 Pro overall
- AA-LCR: **81.0%**; CritPt: **8.0%** (AA); SciCode: **52.2%** (Moonshot) / 51.5% (AA)
- AA-Omniscience: accuracy 32.6%, non-hallucination rate 59.5%; Moonshot reports the hallucination rate fell to 39% (from K2.5's 65%)
- LiveBench: coding 78.6%, reasoning 79.4%, mathematics 84.3%, data analysis 65.1%, language 75.1%, IF 64.4%, agentic coding 46.9%
- MMLU-Pro: 87.6% (Vals); LMArena Elo: code 1509–1513, text 1461, vision 1265

Coding:

- SWE-bench Pro: **58.6%** (beats GPT-5.4's 57.7% and Opus 4.6's 53.4%; K2.5 50.7%)
- SWE-bench Verified: **80.2%** (Moonshot, 10 runs; Vals 76.2%); SWE-bench Multilingual: **76.7%**
- LiveCodeBench v6: **89.6%**; OJBench (python): **60.6%**
- AA Coding Index: **61.8**; Vibe Code Bench v1.1: **37.9%** (Vals); ProgramBench: **0.0%** (Vals); Code Migration 27.8% (Vals)

Multimodal:

- MMMU-Pro: **79.4% / 80.1% with Python** (Vals 86.3%); CharXiv (RQ): 80.4% / 86.7% with Python; MathVision: 87.4% / 93.2% with Python; BabyVision: 39.8% / 68.5% with Python; V* (w/ Python): 96.9%

Long context:

- 256K window; AA-LCR 81.0% (AA, reasoning) / 69.7% (non-reasoning); **no MRCR/RULER**

### Normalized scores (1–100)

- **Tool use: 68/100.** DeepSearchQA f1 92.5 (field-leading), BrowseComp 83.2% (86.3% with agent swarm), Claw-Eval 80.9 pass@3 and OSWorld-Verified 73.1% remain strong, but the third pass measured the agentic suites the file lacked and they are weak: AA Agentic Index 22.1%, OSWorld 2.0 4.6%, ResearchClawBench 18.0%, GDPval-AA Elo 1,115 (AA — well below the vendor 1,520). Trimmed from 74 — the vendor search/orchestration rows do not carry to the independent agentic composites.
- **Reasoning: 84/100.** GPQA 90.5–91.1%, HLE 54.0% with tools (best in its comparison table), AIME 96.4%, HMMT 92.7% and the #1 open-weights AA Intelligence Index (27.0) are frontier-adjacent; capped by HLE 34.7% without tools, CritPt 8.0% and the Omniscience accuracy of 32.6% — knowledge depth trails the coding-led headline.
- **Context window: 78/100.** 262,144-token window sits in the 200K–500K band, backed by AA-LCR 81.0% (reasoning); the 1M-class models in this comparison out-rank it on raw window, and no MRCR/RULER figure exists.
- **Multimodal: 85/100.** Native text + image + video in → text out is the 75–90 band, anchored by MMMU-Pro 79.4–86.3%, MathVision 93.2% (with Python), V* 96.9% and the coding-driven design work; no audio input or non-text output keeps it below 90.
- **Coding: 82/100.** SWE-bench Pro 58.6% (ahead of GPT-5.4 and Opus 4.6 on the same table), SWE-bench Verified 80.2% and LiveCodeBench 89.6% are frontier-adjacent for open weights; capped by Vibe Code Bench 37.9%, ProgramBench 0.0%, SciCode 52.2% and the 0.5% Terminal-Bench 4.0 — long-horizon terminal work trails the closed frontier.
- **Cost efficiency: 89/100.** $0.95/$4.00 per MTok first-party ($0.16 cache reads) maps to the methodology's ~$1.25/$4.25 ≈ 88 tier, with the OpenRouter route at $0.465/$2.45 and Parasail at $0.60/$2.80 undercutting further — the cheapest frontier-adjacent coding model with open weights included.
- **Overall Score: 79/100.** Mean of the five non-cost dims (68+84+78+85+82)/5 = 79.4 (Tool use 74→68 on the newly measured weak independent agentic rows). Best-fit recommendation: the leading open-weights agentic-coding model — SWE-Pro-class software engineering, DeepSearchQA-class research agents and swarm orchestration at commodity pricing with self-hostable weights; pair with a closed frontier model for TB4.0-grade terminal work.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated, suggests Kimi K3: Index 27 #26/121 — unchanged; 77.3 tok/s; $0.80/task; 180M Index tokens — very verbose) and BenchLM (composite 58.4/100, #60/956, 55/648 benchmarks): new rows AA Agentic Index 22.1%, OSWorld 2.0 4.6%, ResearchClawBench 18.0%, GDPval-AA Elo 1,115 (AA — vs the vendor 1,520; conflict flagged), AA-HLE 37.5%, AA-IFBench 76.0%, Epoch FrontierMath v2 57.2%/25.6%, CursorBench 3.1 47.6%, Gert Labs 56.82%, Design Arena Website 1269 — Tool use was trimmed 74→68 on the weak independent agentic composite (Overall 81→79). Second-pass verification (2026-10-10) cross-referenced benchmarklist.com (199 primary-source results, updated 2026-10-07 — independent TAU3-Bench 72.4% #3/13, Tau3-Banking 23.3% #45/176, TerminalWorld 57.5% #2/8, AgentTrap 75 #1/8, PinchBench 90.2 #6/73, OSWorld 73.1% #6/72, Terminal-Bench Hard 43.9% #20/326, APEX-Agents-AA 28.5% #14/33, ClawProBench 59.31 #16/48, AA-Briefcase 818 #72/145, BrowseComp 83.2% #32/60) — the then-existing reads held. Prior pass (2026-10-09) used Moonshot Kimi K2.6 tech blog + HF model card, Artificial Analysis, Vals AI, DeepInfra provider benchmarks, Lambda, DataLearner, OpenLM, opengodmode.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
