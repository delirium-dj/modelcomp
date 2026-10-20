# Gemini 3.5 Flash-Lite — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3.5-flash-lite`, GA 2026-07-21)
- Date: 2026-10-19 (UTC) — third-pass verification
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
- **Speed:** 446.6 tok/s (AA, Google API, 2026-10-19 — re-measured up from 359.1); TTFT 7.75 s. Still #4/151 on output speed.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **49.61/100** overall, #101 of 956 models, 26 of 644 benchmarks covered (partial coverage — conservative). Artificial Analysis today: Index **22** (#42/173, v4.3.2 scale — unchanged), 446.6 tok/s (#4/151), TTFT 7.75s, 59M Index tokens (concise vs 99M median), $0.19 per Index task, $0.30/$2.50 with 90% cache discount (blended $0.33/M), 4 providers — NOT deprecated on AA.

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

- Artificial Analysis: Intelligence Index **22** (#42/173 today; was #41/182); 446.6 tok/s; TTFT 7.75 s; $0.19 per Index task; 59M output tokens (concise vs 99M median)
- Epoch AI (high effort): GPQA Diamond **83.3%**; OTIS Mock AIME **71.1%**; FrontierMath T1-3 26.0% / T4 0.0%; LiveBench 63.8; Chess 22.0; Mystery Game 19.0 — effort range 8.0 composite points
- Vals AI: TB 2.1 50.2%; APEX-Agents 29.3%; CyberBench 59.1%; Finance Agent 47.4%; LiveBench agentic coding 45.3%; FACTS Search 63.4%
- BenchLeader: index 54.7 (#228/759) — multimodal 61, agents & tools 40, human preference 65
- Vector Wire: strong on long context (1 of 3 measured) and factuality (2/4); behind leaders in multimodal (−27.8%), agentic (−33.6%), coding (−40.7%), instruction following (−41.6%), math (−61.0%)
- modelbenchmark.io composite: 40th percentile of 342
- New AA / Vals rows (2026-10-19): AA-MMMU-Pro **79.0%** (first published MMMU for this model), AA-LCR **76.0%**, CritPt **0.0%** (AA), AA-HLE **18.8%**, AA-Omniscience accuracy **29.5%** / index **5.2%** / hallucination-rate metric **34.4%**, GPQA (Vals) **83.8%** (matches Epoch), MMLU-Pro (Vals) **85.8%**, LCB (Vals) **79.0%**, SWE-bench (Vals) **75.0%**, AA Coding Index **49.3%**, AA Agentic Index **15.9%**, GDPval-AA normalized **24.2%** (AA), Epoch FrontierMath v2 T1–3 **25.965%** / T4 **0.0%** (matches the prior pass)

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 74.0%, SWE-Bench Pro 54.2%, TB 2.1 54.0% (50.2% Vals), GDPval Elo 1,140 and MLE-Bench 39.2% are a strong mid-band agentic profile for the price — beating Gemini 3 Flash on computer use; τ³-Banking 17.5%, APEX 29.3% and the agents-&-tools category (40/100) keep it out of the upper band.
- **Reasoning: 55/100.** GPQA 83.3–83.8% and AIME 71.1% are respectable mid-band; AA Intelligence Index 22, FrontierMath 26.0%/0.0% (T1-3/T4), LiveBench 63.8 and Chess 22.0% mark a fast-tier model, not a reasoner.
- **Context window: 78/100.** A 1M-token window is the ≥1M band (95–100) — heavily discounted because retrieval collapses at full length: MRCR 8-needle 72.2% @128K but only 21.3% @1M (vs 72.2% AA-LCR-style reasoning at the front of the window).
- **Multimodal: 86/100.** Text + image + video + audio + PDF input → text out is the 90–100 band on input breadth (the only tier here with audio+PDF+video all native); docked within the band for text-only output, Vector Wire's ~28% gap to the multimodal leader, and now the first published AA-MMMU-Pro of **79.0%** (2026-10-19) — solid for a Flash-Lite but well behind the 83–87% Pro-tier readings. Trimmed from 88 on that measurement (Overall unchanged at 68).
- **Coding: 58/100.** SWE-Bench Pro 54.2% (beating Gemini 3 Flash) and TB 2.1 54.0% beat the 3.1 Flash-Lite by +16/+23 points, but LiveBench agentic coding 45.3%, SciCode 41.3% and the −40.7% gap to the coding leader show this is a subagent coder, not an SWE leader.
- **Cost efficiency: 92/100.** $0.30/$2.50 with $0.03 cache reads and batch at $0.15/$1.25 — the methodology's ~$0.6/$2.2 ≈ 92 range — and AA's $0.19 per Index task at 446.6 tok/s makes it one of the cheapest ways to run volume agentic traffic.
- **Overall Score: 68/100.** Mean of the five non-cost dims (62+55+78+86+58)/5 = 67.8 → 68 (multimodal trimmed 88→86 on the new AA-MMMU-Pro 79.0% row; Overall unchanged). Best-fit recommendation: the volume agent tier — OSWorld 74%, SWE-Pro 54.2% and 1M context at 447 tok/s and $0.19/task, ideal for subagent fleets and document parsing; don't trust the 1M window's far end and don't ask it to reason.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA Index 22 unchanged (#42/173), speed re-measured at 446.6 tok/s (#4/151, up from 359.1), TTFT 7.75s, not deprecated, 4 providers; BenchLM composite 49.61/100 (#101/956, 26/644 benchmarks) adding the first published AA-MMMU-Pro 79.0%, AA-LCR 76.0%, CritPt 0.0%, AA-HLE 18.8%, AA-Omniscience 29.5% accuracy, GPQA (Vals) 83.8% (matches Epoch), LCB (Vals) 79.0%, SWE (Vals) 75.0%, AA Coding Index 49.3%, AA Agentic Index 15.9% and GDPval normalized 24.2% — all consistent with the existing reads; Multimodal trimmed 88→86 on the new AA-MMMU-Pro 79.0% row (was docked for "no MMMU published"), Overall unchanged at 68. Second-pass verification (2026-10-10): benchmarklist.com has no standalone Gemini-3.5-Flash-Lite page (a high-throughput tier); re-checked the Google model card, Artificial Analysis (Intelligence Index 22, 359.1 tok/s, $0.19/task), Epoch AI (GPQA 83.3%, AIME 71.1%, FrontierMath T1-3 26.0%/T4 0.0%) and Vals AI (TB 2.1 50.2%, APEX 29.3%, LiveBench agentic coding 45.3%) — SWE-Bench Pro 54.2%, OSWorld-Verified 74.0%, MRCR 72.2% @128K / 21.3% @1M and the AA index of 22 all confirm the existing Tool use 62 / Reasoning 55 / Context 78 / Multimodal 88 / Coding 58 reads. Prior pass (2026-10-09) used Google DeepMind model card, Gemini launch blog, Gemini API docs/cloud docs, Artificial Analysis, Epoch AI and Vals AI via modelbenchmark/BenchLeader, Vector Wire.
- Future sources: add a new file next to this one, e.g. `Gemini_3_8_Flash_Lite.md`, using the same headings.
