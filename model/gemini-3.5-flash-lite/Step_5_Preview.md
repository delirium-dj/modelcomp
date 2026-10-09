# Gemini 3.5 Flash-Lite — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3.5-flash-lite`, GA 2026-07-21)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite (the fastest, cheapest 3.5-class model; GA 2026-07-21, retirement 2027-07-21 or later)
- **Short description:** Google's high-throughput tier, built for subagent tasks and document parsing at 1M context — and the surprise of the 3.5 launch: on agentic evals it beats its own big sibling, **Gemini 3 Flash** (SWE-Bench Pro 54.2% vs 49.6%, OSWorld-Verified 74.0% vs 65.1%), while running at 350+ output tokens per second (AA measured 359.1 — the fastest in its class) for $0.30/$2.50. It is a big generational jump over 3.1 Flash-Lite on every axis that matters for scale: TB 2.1 31→54%, GDM-MRCR 128K 60.1→72.2%, GDPval Elo 642→1,140, OSWorld 54.3→74.0%. Configurable thinking levels (minimal/low/medium/high) let developers trade depth for latency per task, and computer use is a built-in tool. The catch is the far end of its own window: MRCR at 1M is only 21.3%.
- **Provider / access:** Gemini API (AI Studio, Android Studio), Gemini Enterprise Agent Platform, the Gemini app, Google Search AI Mode rollout.
- **Release:** 2026-07-21; retirement 2027-07-21 or later.
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** Text, image, video, audio and PDF in → text out (no audio/image generation); caching, code execution, computer use (preview), file search, function calling, search grounding, structured outputs.
- **Pricing (as of 2026-10-09):** $0.30/M input, $2.50/M output, $0.03 cache reads; batch $0.15/$1.25; priority $0.54/$4.50.
- **Speed:** 359.1 tok/s (AA, Google API); TTFT 8.46 s.

### Raw benchmarks found

Google model card (Gemini 3.1 Flash-Lite / GPT-5.4 mini / Claude Haiku 4.5 in parents):

- SWE-Bench Pro (Public): **54.2%** (38.3 / 54.4 / 39.5)
- Terminal-Bench 2.1: **54.0%** (31.0 / 59.2 / 44.2)
- MLE-Bench: **39.2%** (22.0 / – / –)
- GDPval-AA v2: **1,140 Elo** (642 / 1,171 / 907)
- OSWorld-Verified: **74.0%** (54.3 / 72.1 / 50.7)
- CharXiv Reasoning: **74.5%** (76.5% with tools)
- GDM-MRCR v2 (8-needle): **72.2% @128K** (60.1 / 42.7 / 35.3); 21.3% @1M

Google blog (launch):

- 350 output tokens/s (Artificial Analysis)
- Outperforms Gemini 3 Flash on SWE-Bench Pro (54.2% vs 49.6%) and OSWorld-Verified (74.0% vs 65.1%)

Third-party:

- Artificial Analysis: Intelligence Index **22** (#41/182; class median 13); 359.1 tok/s; TTFT 8.46 s; $0.19 per Index task; 59M output tokens (concise vs 100M median)
- Epoch AI (high effort): GPQA Diamond **83.3%**; OTIS Mock AIME **71.1%**; FrontierMath T1-3 26.0% / T4 0.0%; LiveBench 63.8; Chess 22.0; Mystery Game 19.0 — effort range 8.0 composite points
- Vals AI: TB 2.1 50.2%; APEX-Agents 29.3%; CyberBench 59.1%; Finance Agent 47.4%; LiveBench agentic coding 45.3%; FACTS Search 63.4%
- BenchLeader: index 54.7 (#228/759) — multimodal 61, agents & tools 40, human preference 65
- Vector Wire: strong on long context (1 of 3 measured) and factuality (2/4); behind leaders in multimodal (−27.8%), agentic (−33.6%), coding (−40.7%), instruction following (−41.6%), math (−61.0%)
- modelbenchmark.io composite: 40th percentile of 342

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 74.0%, SWE-Bench Pro 54.2%, TB 2.1 54.0% (50.2% Vals), GDPval Elo 1,140 and MLE-Bench 39.2% are a strong mid-band agentic profile for the price — beating Gemini 3 Flash on computer use; τ³-Banking 17.5%, APEX 29.3% and the agents-&-tools category (40/100) keep it out of the upper band.
- **Reasoning: 55/100.** GPQA 83.3–83.8% and AIME 71.1% are respectable mid-band; AA Intelligence Index 22, FrontierMath 26.0%/0.0% (T1-3/T4), LiveBench 63.8 and Chess 22.0% mark a fast-tier model, not a reasoner.
- **Context window: 78/100.** A 1M-token window is the ≥1M band (95–100) — heavily discounted because retrieval collapses at full length: MRCR 8-needle 72.2% @128K but only 21.3% @1M (vs 72.2% AA-LCR-style reasoning at the front of the window).
- **Multimodal: 88/100.** Text + image + video + audio + PDF input → text out is the 90–100 band on input breadth (the only tier here with audio+PDF+video all native); docked within the band because Google publishes no MMMU/Video-MME number for this model and Vector Wire rates it ~28% behind the multimodal leader.
- **Coding: 58/100.** SWE-Bench Pro 54.2% (beating Gemini 3 Flash) and TB 2.1 54.0% beat the 3.1 Flash-Lite by +16/+23 points, but LiveBench agentic coding 45.3%, SciCode 41.3% and the −40.7% gap to the coding leader show this is a subagent coder, not an SWE leader.
- **Cost efficiency: 92/100.** $0.30/$2.50 with $0.03 cache reads and batch at $0.15/$1.25 — the methodology's ~$0.6/$2.2 ≈ 92 range — and AA's $0.19 per Index task at 359 tok/s makes it one of the cheapest ways to run volume agentic traffic.
- **Overall Score: 68/100.** Best-fit recommendation: the volume agent tier — OSWorld 74%, SWE-Pro 54.2% and 1M context at 350+ tok/s and $0.19/task, ideal for subagent fleets and document parsing; don't trust the 1M window's far end and don't ask it to reason.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google DeepMind model card, Gemini launch blog, Gemini API docs/cloud docs, Artificial Analysis, Epoch AI and Vals AI via modelbenchmark/BenchLeader, Vector Wire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash_Lite.md`, using the same headings.
