# Gemini 3.5 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3-5-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash. The 3.5-generation Flash tier, now **three generations behind** Gemini 4 (Argon, Carbon) and behind its own successors 3.7 Flash (66.53) and 3.8 Flash (66.22) on BenchLM — it scores 61.40, #49 of 1009. A separate sibling, **Gemini 3.5 Flash Cyber**, is tracked as its own folder.
- **Short description:** A 3.5-generation Flash model with a genuinely unusual profile: **the highest composite intelligence index in this batch (AA Intelligence Index 50.2)** paired with **the worst measured long-context retrieval of any 1M-window model in this research series (MRCR 1M 26.6%)** — a model whose window is nominal rather than usable at scale. BenchLM's 55-row catalog is also notable for sourcing most figures from Google DeepMind **launch screenshots on X**, the weakest provenance in this research series.
- **Provider / access:** Gemini API and OpenCode Zen (`opencode/gemini-3.5-flash`) at **$1.50/$9.00/$0.15**, with no >200K tier. Also `google/gemini-3.5-flash` on OpenRouter.
- **Release / knowledge:** release date not restated; the 3.5 generation is Google's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-5-flash` (Gemini API, Zen); `google/gemini-3.5-flash`.
- **Context window:** **1M tokens** (BenchLM and Zen's flat rate card agree), but with the caveat below.
- **Modalities:** **text, image, video and audio in; text out** (per Anthropic's lineup-wide statement that all current models share this modality set, corroborated by the CharXiv/MMMU-Pro suite). Reasoning model.
- **Pricing (as of 2026-11-05):** **$1.50 input / $0.15 cached / $9.00 output per 1M**, with no long-context tier — the full 1M window at the flat rate. Methodology anchors put $1.50/$9.00 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 55-row catalog is the index. **Provenance caveat: most of Google's own rows are attributed to "Google / Google DeepMind: Gemini 3.5 Flash launch screenshots" on X**, which is a weaker source than a model card or system card and is flagged throughout. Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench and OpenRouter supply the independent rows.

Agent / tool use:

- **Terminal-Bench 2.1: 76.2%** (Google/X) / **74.2%** (Vals) — well under the 88%+ frontier reference
- **MCP Atlas: 83.6%**; **OSWorld-Verified: 78.4%**; **τ²-bench: 95.3%** — three genuinely strong agentic figures
- Toolathlon: 56.5%; Finance Agent v2: 57.9%; Gert Labs: 61.85%; AA EnterpriseOps-Gym: 50.1%
- **GDPval-AA: 1,345 Elo** / 42.2% normalized — far under the 1,750 frontier reference
- **AA Agentic Index: 27.3%** — the second-lowest in this batch; **MazeBench: 0%**; ResearchClawBench: 18.0%
- AA ITBench: 40.3%; AA-AnalystAgent: 45.0%; APEX-Agents-AA: 47.1%
- **τ³-Banking, BrowseComp, Claw-Eval, Agents' Last Exam: no verified public score found**

Reasoning / knowledge — **split, with a decisive long-context failure**:

- **AA Intelligence Index: 50.2** — the highest composite figure in this batch
- **AA-GPQA Diamond: 92.2%** / GPQA-D 92.7% (Vals) / GPQA 92.2% (AA) — clears the 90%+ reference on all three
- **HLE: 40.2%** (Google/X) / AA-HLE 42.7% — clears the 40%+ reference, but only just on the vendor figure
- **MRCRv2: 77.3%**; **MRCR 1M: 26.6%** — the only model in this research series claiming a 1M window with measured retrieval below 30% at that length
- ARC-AGI-1: **92.5%**; ARC-AGI-2: 72.1%; AA-LCR: **69.3%** — the weakest AA-LCR in this batch
- **CritPt: 13.1%**; FrontierMath v2 Tier 4: **26.8%** / Tiers 1–3: 62.8%
- AA-Omniscience: index 21.2, accuracy 51.9%, hallucination rate **60.7%**
- MMLU-Pro (Vals): 89.5%; AA-IFBench: 76.3%

Coding:

- **AA Coding Index: 70.1%** — just clears the 70% frontier reference
- LiveCodeBench (Vals): **87.6%**; SWE-bench (Vals): **78.8%**
- Terminal-Bench 2.1: 76.2% — well under the 85% reference
- **AA-SciCode: 53.9%** / SciCode 53.1% — under the 55% reference
- Vibe Code Bench: 48.68%; CursorBench 3.1 49.8% / 3.2 48.8%; SWE-bench Pro: 55.1%
- **SWE-bench Verified, DeepSWE: no verified public score found**

Multimodal — the second-strongest dimension:

- **MMMU-Pro: 83.6%** (Google/X) / **84.3%** (AA); **CharXiv: 84.2%**; **ExtractBench: 79.84%**; ParseBench: 73.36%
- Blueprint-Bench 2: 33.6%; Design Arena: 1,267 Elo

### Normalized scores (1–100)

- **Tool use: 62/100.** Three strong individual figures — τ²-bench 95.3%, MCP Atlas 83.6%, OSWorld-Verified 78.4% — cannot carry the dimension against three failures: Terminal-Bench 2.1 at 76.2% (11.8 points under the reference), GDPval-AA 1,345 Elo (405 Elo under), and **no τ³-Banking figure at all**, so two of three references are unmet or uncheckable. AA Agentic Index 27.3%, MazeBench 0% and ResearchClawBench 18.0% confirm the agentic-execution layer is weak.
- **Reasoning: 80/100.** AA Intelligence Index 50.2 is the best composite in this batch, AA-GPQA Diamond 92.2–92.7% clears the 90%+ reference on three harnesses, HLE 40.2%/42.7% clears the 40%+ reference, and ARC-AGI-1 is 92.5%. Capped by the decisive long-context failure — **MRCR 1M 26.6%** and AA-LCR only 69.3%, the weakest in this batch — plus CritPt 13.1%, FrontierMath Tier 4 26.8%, ARC-AGI-2 72.1% and a 60.7% hallucination rate.
- **Context window: 80/100.** Scored far below the methodology's 95–100 tier for a 1M window, and this is the report's central finding. The window's *size* is confirmed (1M, flat-priced with no >200K tier), but its *usable retrieval* is measured at **MRCRv2 77.3% and MRCR 1M 26.6%** — the only 1M-window model in this research series with sub-30% retrieval at 1M — and AA-LCR is 69.3%. A window that cannot retrieve at its own length is not a 1M window in any practical sense, so it is scored as a long-mid-range model.
- **Multimodal: 88/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and depth supports the upper-middle of that band: MMMU-Pro 83.6%/84.3%, CharXiv 84.2%, ExtractBench 79.84%. Held at 88 rather than the 90s by Blueprint-Bench 2 at 33.6%, text-only output, and the X-screenshot provenance of the two best figures.
- **Coding: 70/100.** The strongest dimension. AA Coding Index 70.1% just clears the 70% reference, LiveCodeBench 87.6% and SWE-bench 78.8% (Vals) are solid. Capped by Terminal-Bench 2.1 76.2% (8.8 points under the reference), AA-SciCode 53.9% (under the 55% reference), Vibe Code Bench 48.68%, CursorBench 3.2 48.8%, SWE-bench Pro 55.1%, and no SWE-bench Verified or DeepSWE figure.
- **Cost efficiency: 84/100.** $1.50/$0.15/$9.00 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and there is **no >200K tier**, so the full 1M window is sold at the flat rate — structurally better long-context pricing than GPT-6 Astra or Claude Sonnet 5.5's tiers. Held at 84 rather than 88 by having no free tier and being dominated on BenchLM rank by Gemini 3.7 Flash (#23) and 3.8 Flash (#27) at the same $1.50 input.
- **Overall Score: 76/100.** (62 + 80 + 80 + 88 + 70) / 5 = 76.0 → 76. Recommendation: a **cheap multimodal document/vision engine** — MMMU-Pro 84.3%, CharXiv 84.2%, ExtractBench 79.84%, AA Intelligence Index 50.2 (the batch's best composite) and full audio/video input at $1.50/$9.00 with no long-context surcharge. Do not treat it as a 1M-context model: **MRCR 1M is 26.6%**, so anything above roughly 128K will degrade badly, and its agentic layer (AA Agentic Index 27.3%) is not competitive. For the same money Gemini 3.7 Flash beats it on BenchLM, agentic and retrieval.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using BenchLM's 55-row catalog as the primary index — which is unusual in attributing most Google rows to **Google DeepMind's Gemini 3.5 Flash launch screenshots on X**, a provenance weaker than a model card or system card and one recorded explicitly in this report rather than paraphrased — cross-checked against Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench and OpenRouter for the independent rows, plus OpenCode Zen's pricing table. Conflicting figures are listed side by side — Terminal-Bench 2.1 76.2% vs 74.2%, GPQA Diamond 92.2% / 92.7% / 92.7% — rather than averaged. Missing benchmarks (τ³-Banking, BrowseComp, Claw-Eval, Agents' Last Exam, SWE-bench Verified, DeepSWE) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 3.5 Flash benchmark scores (55 rows, 61.40/100, #49/1009)](https://benchlm.ai/models/gemini-3-5-flash)
  - [Artificial Analysis — Gemini 3.5 Flash](https://artificialanalysis.ai/models/gemini-3-5-flash)
  - [Vals AI — Gemini 3.5 Flash leaderboard results](https://www.vals.ai/models/google_gemini-3.5-flash)
  - [ARC Prize — Gemini 3.5 Flash (High) verified results](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [ExtractBench leaderboard (source of the 79.84% document-extraction figure)](https://www.extractbench.ai/#leaderboard)
  - [OpenRouter — Gemini 3.5 Flash benchmarks and pricing](https://openrouter.ai/google/gemini-3.5-flash/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
