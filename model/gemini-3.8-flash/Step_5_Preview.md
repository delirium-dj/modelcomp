# Gemini 3.8 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-8-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash. The 3.8-generation Flash tier, sitting below the Gemini 4 family (Argon, Carbon) and above Gemini 3.7 Flash (66.53). A separate sibling, **Gemini 3.8 Flash Cyber**, is tracked as its own folder and is not covered here.
- **Short description:** A genuinely unusual profile — **flagship-grade scientific and visual knowledge in a Flash-tier body**. GPQA Diamond 95.3%, MMMU-Pro 85.6% and ARC-AGI-2 89.2% are all frontier-class, while Terminal-Bench 4.0 (19.1%) and FrontierSWE v2 (19.6%) collapse. BenchLM scores it 66.22/100, #27 of 1009 — the lowest rank-to-quality ratio examined in this batch, since it outranks Gemini 3.1 Pro (64.41) on BenchLM despite being a tier below it.
- **Provider / access:** Gemini API and OpenCode Zen (`opencode/gemini-3-8-flash` at **$1.50/$7.50/$0.15**, with no >200K surcharge tier — the full 1M window is sold at the standard rate). Also `google/gemini-3.8-flash` on OpenRouter.
- **Release / knowledge:** release date not published on the model card; the Gemini 4 Argon comparison (Oct 2026) lists it in the current lineup, and Third-party benchmark charts treat it as the established 3.8 comparator. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3.8-flash` (Gemini API, Zen); `google/gemini-3.8-flash`.
- **Context window:** **1M tokens**, confirmed by Google's model card, BenchLM and Artificial Analysis. Zen's flat rate card (no >200K tier) corroborates that the window carries no surcharge. Max output not published.
- **Modalities:** **text, image, video and audio in; text out** (per Anthropic's lineup-wide statement that all current models share this modality set; corroborated by the LVBench and CharXiv video/chart results). Reasoning model.
- **Pricing (as of 2026-11-05):** **$1.50 input / $0.15 cached / $7.50 output per 1M**, with no long-context tier — a materially cheaper rate card than Gemini 3.1 Pro's $2/$12 and less than half Gemini 4 Argon's introductory $2/$10. No free tier.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's own model card supplies most figures; Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Datacurve, Cognition, Cursor, Kaggle, NeoCognition, LlamaIndex, Nous Research and OpenRouter supply the independent rows. Where Google and AA/Vals measure the same benchmark, all are shown.

Agent / tool use — **severely split, and the split is the finding**:

- **Terminal-Bench 2.1: 89.4%** (Google model card) / **87.6%** (AA) / **81.3%** (Vals) — clears the 88%+ frontier reference on two of three harnesses
- **GDPval-AA: 1,545 Elo** / 46.8% normalized — below the 1,750 frontier reference
- **AA Tau3 Banking: 44.9%** — below the 50% frontier reference
- **Terminal-Bench 4.0: 19.10%** (model card) / **19.7%** (AA) — a catastrophic drop from its own TB2.1 result, and one of the weakest figures in this research series
- **FrontierSWE v2: 19.6%**; **MazeBench: 4%**; **ApprenticeBench: 24%**; GDP.pdf: 21.0%
- AA AutomationBench: 59.9%; AA ITBench: 52.5%; OSWorld 2.0: 59.0%; Finance Agent v2: 61.4%; AA-AnalystAgent: 46.3%; AA Agentic Index: 41.1%; AA Briefcase: 1,202; Hermes Bench: 62.2%; Hermes Index: 38.1%
- Claw-Eval: **no verified public score found**

Reasoning / knowledge — **the strongest dimension by far**:

- **AA-GPQA Diamond: 95.3%** / **94.4%** (Vals) — the highest GPQA figure in this entire research series, tied above Claude Fable 5.1's 93.7%
- HLE-Verified: **54.9%**; AA-HLE: **47.8%**
- **ARC-AGI-1: 98.5%**; **ARC-AGI-2: 89.2%**; ARC-AGI-3: **10.4%** (Provider-Adapter run 35.0%)
- LABBench2: **86.2%**; BioMysteryBench: **88.8%** (human-solvable) / 56.5% (human-difficult); MMLU-Pro (Vals): **90.2%**
- **FrontierMath v2 Tier 4: 21.95%** — roughly a quarter of Gemini 4 Argon's 78.05% and a fifth of Claude Opus 5.5's 95.0%; Tiers 1–3: 68.4%
- AA-LCR: **81.3%**; **CritPt: 18.3%**; **MLCR-AA: 10.6%**
- AA Intelligence Index: **30.6**; AA-Omniscience: index 23.3, accuracy 50.5%, hallucination rate **55.1%**
- **MRCR: no verified public score found**

Coding — mid-pack, with the same split:

- **AA Coding Index: 76.3%** (clears the 70% frontier reference)
- **Terminal-Bench 2.1: 89.4%** (clears the 85% reference)
- **DeepSWE: 73.8%** — 0.2 points under the 74% reference, from the DeepSWE v1.1 leaderboard
- **AA-SciCode: 56.6%** (clears the 55% reference); SWE-bench (Vals): **80.0%**; LiveCodeBench (Vals): **89.5%**
- ScarfBench: 66.0%; CursorBench 3.2: 69.2%; **FrontierSWE v2: 19.6%**; **CursorBench 4.0: 39.6%**; Bug Hunt Bench: 18.0 fixes
- SWE-bench Verified / SWE-bench Pro: **no verified public score found**; no FrontierCode figure found

Multimodal — second-strongest dimension:

- **AA-MMMU-Pro: 85.6%** — the best image-understanding figure in this batch except GPT-6 Astra's 87.8%
- **CharXiv (no tools): 86.2%**; **LVBench (long video): 87.1%**; ExtractBench: 80.71%; ParseBench: 71.50%; Design Arena (website): 1,299 Elo

Safety: **Gray Swan indirect prompt injection (15 attempts): 5.5%** — the weakest of the six Gemini/Claude models with a published figure (Carbon 0.0%, Argon 0.7%, Opus 5.5/Fable 5.1 1.0%, Claude Opus 5 4.6%).

### Normalized scores (1–100)

- **Tool use: 78/100.** Meets exactly one of the three frontier references (Terminal-Bench 2.1 89.4%/87.6%) and misses the other two (GDPval-AA 1,545 Elo below 1,750; AA Tau3 Banking 44.9% below 50%). Held up by AA AutomationBench 59.9%, AA ITBench 52.5%, Finance Agent v2 61.4% and OSWorld 2.0 59.0%. Drawn down hard by Terminal-Bench 4.0 19.1%, FrontierSWE v2 19.6%, MazeBench 4%, ApprenticeBench 24% and GDP.pdf 21.0% — a model that solves TB2.1 nearly at the frontier but fails TB4.0 four times out of five is not a reliable agentic coder.
- **Reasoning: 82/100.** GPQA Diamond 95.3%/94.4% is the highest measured anywhere in this research series, HLE-Verified 54.9% clears the 40% reference, ARC-AGI-2 89.2% and ARC-AGI-1 98.5% are frontier-class, and LABBench2 86.2% / BioMysteryBench 88.8% are strong scientific-reasoning results. Capped by FrontierMath Tier 4 21.95% (a quarter of Argon's), CritPt 18.3%, MLCR-AA 10.6%, ARC-AGI-3 10.4%, an AA Intelligence Index of only 30.6 and a 55.1% hallucination rate. A model with encyclopedic scientific knowledge and shallow deep reasoning.
- **Context window: 96/100.** 1M-token tier with AA-LCR 81.3%, and the commercial detail that **Zen sells the full 1M window at the flat $1.50/$7.50 rate with no >200K tier** — cheaper long-context access than every other 1M model researched. Held under 100 because no MRCR retrieval run exists and no max-output limit is published.
- **Multimodal: 92/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and the depth is the best in this batch after Gemini 4 Argon: MMMU-Pro 85.6%, CharXiv 86.2% without tools, LVBench 87.1% on long video, ExtractBench 80.71%. Held at the band's lower-middle by text-only output and a 1,299-Elo Design Arena result.
- **Coding: 88/100.** AA Coding Index 76.3% clears the 70% reference, Terminal-Bench 2.1 89.4% clears the 85% reference, AA-SciCode 56.6% clears the 55% reference, and DeepSWE 73.8% misses the 74% reference by 0.2 points. SWE-bench 80.0% and LiveCodeBench 89.5% (Vals) corroborate. Capped by FrontierSWE v2 19.6%, CursorBench 4.0 39.6% and Bug Hunt Bench 18.0 — the same agentic-execution weakness that caps its tool-use score, and no published SWE-bench Verified/Pro figure.
- **Cost efficiency: 85/100.** $1.50/$0.15/$7.50 per 1M is between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and there is **no >200K tier**, so the entire 1M window is sold at the standard rate — a structural advantage over Gemini 4 Argon ($2/$10 but with tiered long-context), GPT-6 Astra (2x/1.5x above 272K) and Claude Sonnet 5.5 (unpriced 1M, but a higher base). Held below 88 by having no free tier and being dominated on quality by Gemini 4 Argon at a similar introductory rate.
- **Overall Score: 87/100.** (78 + 82 + 96 + 92 + 88) / 5 = 87.2 → 87. Recommendation: an excellent **cheap knowledge-and-vision engine** — at $1.50/$7.50 for 1M context with GPQA 95.3%, MMMU-Pro 85.6% and LVBench 87.1%, it is one of the best value propositions in this research series for document VQA, scientific retrieval and multimodal analysis. Do not deploy it as an autonomous coding agent: its own Terminal-Bench 4.0 (19.1%) and FrontierSWE v2 (19.6%) results show the agentic-execution layer does not hold, and its Gray Swan prompt-injection resistance (5.5%) is the weakest of the models with published figures.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Google's Gemini 3.8 Flash model card as the primary source, cross-checked against BenchLM's 63-row catalog (which attributes each number to Google's model card, Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Datacurve, Cognition, Cursor, Kaggle, NeoCognition, LlamaIndex, Nous Research or OpenRouter) and OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 89.4% / 87.6% / 81.3% across three harnesses, GPQA Diamond 95.3% / 94.4% — rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [BenchLM — Gemini 3.8 Flash benchmark scores (63 rows, 66.22/100, #27/1009)](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3.8-flash)
  - [Vals AI — Gemini 3.8 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3.8-flash)
  - [ARC Prize — published semi-private results for Gemini 3.8 Flash](https://arcprize.org/results/google-gemini-3-8-flash)
  - [DeepSWE v1.1 leaderboard (source of the 73.8% DeepSWE figure)](https://deepswe.datacurve.ai/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
