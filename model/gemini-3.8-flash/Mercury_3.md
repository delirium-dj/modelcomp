# Gemini 3.8 Flash — findings by Mercury 3

- Source: Google/Gemini 3.8 Flash
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's 2026-09-02 high-volume Flash-tier reasoning model: fast (136.5 t/s), cheap ($0.75/$3.75), 1M context, omni input (text/image/speech/video). Strong on knowledge/coding basics; weaker on the hardest agentic harnesses (TB4.0).
- **Provider / access:** Gemini API (`gemini-3.8-flash`), Google AI Studio, Vertex AI, Gemini app; 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not published.
- **IDs:** `gemini-3.8-flash` (high/medium reasoning tiers).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image + speech + video input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $0.75 input / $3.75 output per 1M tokens, 90% cache discount (blended ~$0.58). No free tier listed for 3.8 Flash.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (DeepMind card) vs **87.6%** (AA) vs **81.3%** (Vals — conflicting harnesses)
- Terminal-Bench 4.0: **19.1%** (DeepMind card) vs **19.7%** (AA) — very low; TB4.0 is a notably harder harness
- GDPval-AA: **1545 Elo** (DeepMind card) vs 46.8% normalized (AA); OSWorld 2.0: **59.0%**; Finance Agent v2: **61.4%**
- AA AutomationBench: **59.9%**; AA Tau3-Banking: **44.9%**; AA Agentic Index: **41.1%**; AA-AnalystAgent: **46.3%**; AA ITBench: **52.5%**; AA-Briefcase Elo 1202
- ApprenticeBench GUI: **24%** (NeoCognition); MazeBench ASCII: 4%; AA Cyber Index 25.1%

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA) vs **94.4%** (Vals)
- HLE: **54.9%** verified (DeepMind card) vs **47.8%** (AA)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (35.0% provider adapter) (ARC Prize)
- AA-LCR: **81.3%**; CritPt: **18.3%**; MLCR-AA: **10.6%**
- Artificial Analysis Intelligence Index: **31/100**, #40 of 60 (high mode)
- LABBench2: **86.2%**; BioMysteryBench human-solvable: **88.8%**; FrontierMath v2 Tiers 1–3 **68.42%**, Tier 4 **21.95%** (Epoch AI)
- AA-Omniscience: accuracy **50.5%**, hallucination rate **55.1%**; Gray Swan IPI (15 attempts): **5.5%**

Coding:

- DeepSWE: **73.8%** (DeepSWE leaderboard); SWE-bench: **80.0%** (Vals); LiveCodeBench: **89.5%** (Vals)
- AA Coding Index: **76.3%**; AA-SciCode: **56.6%**; CursorBench 3.2: **69.2%** vs 4.0: **39.6%** (Cursor)
- FrontierSWE v2: **19.6%** (Proximal); Bug Hunt Bench: 18.0 fixes

Long context:

- 1M window; AA-LCR 81.3%; MLCR-AA 10.6% weak at depth.

Multimodal:

- text/image/speech/video in; LVBench: **87.1%** (long video); MMMU-Pro 85.6% (AA); CharXiv (no tools) 86.2%; ExtractBench 80.71%; ParseBench 71.50%.

### Normalized scores (1–100)

- **Tool use: 82/100.** Good everyday agentic (TB2.1 ~87%, GDPval 1545, AutomationBench-AA 59.9%, Tau3 44.9%); capped hard by TB4.0 ~19% and GUI/apprentice gaps.
- **Reasoning: 86/100.** GPQA ~95%, ARC-AGI-2 89.2%, HLE 48–55% — strong mid-tier; capped by II 31, CritPt 18.3%, and FrontierMath T4 ~22%.
- **Context window: 90/100.** 1M with decent LCR 81.3%; MLCR 10.6% and no ≥98%-retrieval figure keep it below the top band.
- **Multimodal: 91/100.** Full omni input (text/image/speech/video) with strong long-video (LVBench 87.1%) and visual reasoning; text-only out caps it.
- **Coding: 86/100.** DeepSWE 73.8%, SWE-bench 80%, LiveCodeBench 89.5%, coding index 76.3%; capped by CursorBench 4.0 39.6% and FrontierSWE v2 19.6%.
- **Cost efficiency: 92/100.** $0.75/$3.75 with 90% cache discount — excellent value; verbose (130M tokens on II) keeps it shy of 100.
- **Overall Score: 87/100.** Mean of (82+86+90+91+86)/5 = 87.0 → 87. A strong budget omni workhorse; choose it for cost/throughput-sensitive workloads, not hardest agentic tasks.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google DeepMind model card via BenchLM, Artificial Analysis model page/leaderboards, Vals AI, ARC Prize, Epoch AI, NeoCognition, LlamaIndex leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (TB4.0 vs TB2.1, HLE, GPQA, TB2.1 across harnesses) listed side by side.
- Reference URLs:
  - [Gemini 3.8 Flash model card (Google DeepMind)](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Gemini 3.8 Flash — Artificial Analysis model page (II 31, $0.75/$3.75, 1M, omni input)](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Gemini 3.8 Flash — BenchLM benchmark aggregation](https://benchlm.ai/models/gemini-3-8-flash)
  - [Gemini 3.8 Flash — Vals AI model page](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [ARC Prize results — Gemini 3.8 Flash](https://arcprize.org/results/google-gemini-3-8-flash)
  - [DeepSWE v1.1 leaderboard (DataCurve)](https://deepswe.datacurve.ai/)
