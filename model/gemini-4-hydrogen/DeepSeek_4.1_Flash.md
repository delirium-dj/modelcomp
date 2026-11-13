# Gemini 4 Hydrogen — findings by DeepSeek 4.1 Flash

- Source: Google (Google DeepMind) / Gemini 4 Hydrogen
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's speed-and-efficiency tier of the Gemini 4 family — adapted from Gemini 4 Carbon and built as the "daily driver" for rapid execution in everyday coding and agentic workflows, or as the worker/verifier model alongside frontier Carbon and Argon in multi-model pipelines. It replaces Gemini 3.8 Flash for agentic work, more than tripling Terminal-Bench 4.1 (57% vs 18.2%) and finishing tasks ~2.5× faster.
- **Provider / access:** Google Gemini API (AI Studio, Vertex AI), Gemini app, Google Search, Gemini in Sheets, Google Antigravity (paid AI Pro/Ultra tier for Antigravity); Gemini for business. No OpenCode Zen route seen in the Console list at fetch time.
- **Release / knowledge:** released 2026-11-12; knowledge cutoff March 2026.
- **IDs:** `gemini-4-hydrogen` (Google AI Studio / Vertex AI; `google/gemini-4-hydrogen` per models.dev).
- **Context window:** 1,048,576 total, priced flat across the window; 65,536 default synchronous output, up to 1M output via background long decode.
- **Modalities:** text, image, audio, video in; text out; reasoning across four thinking levels (low, medium, high default, xhigh); parallel/batched tool and file calls.
- **Pricing (as of 2026-11-13):** $1.50 in / $7.50 out per 1M, flat across the 1M context (Google list price; trackers also list a $0.75/$3.75 AI Studio lane); cached input $0.075/1M; measured cost ≈ $1.87 per AA intelligence task (~85K tokens, 56% reasoning).
- **Architecture:** proprietary; adapted from Gemini 4 Carbon.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **76.1%** (Google-reported; top-5 AA config per BenchLeader)
- OSWorld-2.1 (offline subset): **77.6%** (Google-reported)
- Agents' Last Exam v1.1: **71.6%** (Google-reported)
- Terminal-Bench 4.0 (AA): **53.5–54.0%** (high effort)
- Terminal-Bench 4.1 (cheating-adjusted): **57.0%** (Google-reported; vs GPT-6.1 Terra —, Claude Sonnet 5.5 63.9%)
- Agent Arena (arena.ai): **#5** (Google-reported)
- Vending-Bench 2: **$14,549** bank balance (Google-reported)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE-Diamond: **54.9%** high / **58.8%** xhigh (AA runs)
- CritPt v2 hard subset: **61.5%** high / **66.0%** xhigh (AA)
- AA Intelligence Index v5.0: **50.8** high / **53.9** xhigh
- AA-Omniscience v1.1: **43.7** high / 46.3 xhigh; accuracy 50.5%; non-hallucination 91.5%; hallucination 8.5%
- LiveBench 2.0: **77.0%** (#9 overall); Reasoning 88.6% (#18); Data Analysis 83.2% (#3); Research 86.8%
- LMArena: Arena Text 1490 (#15); Hard Prompts 1514; Instruction Following 1503 (#6); Maths 1495
- GPQA Diamond: no verified public score found

Coding:

- Vibe Code Bench v1.1: **87.8%** (Vals, xhigh)
- LiveBench 2.0 Coding: **78.5%** (#13)
- CursorBench 4.0: **54.3%**
- FrontierCode 2.0: **38.2–39.0%**
- SWE-sweep: **13.5%** (Google-reported, subtask-weighted, Antigravity CLI — vs Sonnet 5.5 3.1%, GPT-6.1 Terra 5.8%)
- Terminal-Bench-Science 0.1: **51.4%** (Google-reported)
- CWE-bench v2: **68.1%**; Bug Hunt Bench: 32.7 fixes
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found
- LMArena Arena WebDev: **1704** (#10)

Multimodal / long context:

- Multimodal Knowledge Agent (MKA): **53.4%** (Google-reported)
- Chartography (no tools): **66.6%**; LiveBench Design 77.3% (#11)
- LiveBench Long Agentic: **61.8%** (#8); LiveBench Browser 77.1% (#12)
- no MRCR/RULER retrieval table published; 1M-token input with up to 1M-token output via background long decode

### Normalized scores (1–100)

- **Tool use: 86/100.** Top-5 agentic results (AutomationBench 76.1%, OSWorld-2.1 77.6%, Agents' Last Exam 71.6%, Agent Arena #5) at ~180 tok/s; capped by Terminal-Bench 4.0/4.1 in the mid-50s rather than frontier-high.
- **Reasoning: 87/100.** HLE-Diamond 58.8% and CritPt 66% at xhigh with LiveBench reasoning 88.6% and 91.5% non-hallucination; the 50.8–53.9 AA v5.0 composite and mid-field maths keep it below the frontier cluster.
- **Context window: 96/100.** 1M-token input priced flat, plus a documented path to 1M output tokens; no retrieval-at-depth table to certify the 100 band.
- **Multimodal: 88/100.** Native text, image, audio and video input with strong multimodal knowledge-work results (MKA 53.4%, Chartography 66.6%); no image/audio generation.
- **Coding: 83/100.** Vibe Code 87.8% and LiveBench coding 78.5% are high, and SWE-sweep leads its class; FrontierCode 38% and CursorBench 54% show frontier-hard coding is still Carbon/Argon territory.
- **Cost efficiency: 82/100.** $1.50/$7.50 flat across 1M tokens with $0.075 cached input; ~$1.87/task measured — dearer than GPT-6.1 Terra for a similar index, cheaper on the AI Studio lane.
- **Overall Score: 88/100.** (86 + 87 + 96 + 88 + 83) / 5 = 88.0 — the default high-volume Gemini 4 execution engine: near-frontier results at flash-tier latency and a flat 1M-context price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-13
- Method: public internet research (Google DeepMind model card, blog.google launch post, BenchLeader day-2 tracker, BenchLM). The websearch tool was unavailable (HTTP 402) this run; research used direct page fetches only — every cited URL was actually fetched.
- Reference URLs:
  - [Google DeepMind — Gemini 4 Hydrogen model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [Google — Introducing Gemini 4 Hydrogen (blog.google)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/)
  - [BenchLeader — Gemini 4 Hydrogen: benchmarks, pricing, speed and rank](https://www.benchleader.com/models/gemini-4-hydrogen)
  - [BenchLM — Gemini 4 Hydrogen benchmark scores & performance](https://benchlm.ai/models/gemini-4-hydrogen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
