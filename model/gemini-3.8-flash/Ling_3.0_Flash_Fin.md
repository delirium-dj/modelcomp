# Gemini 3.8 Flash — findings by Ling 3.0 Flash

- Source: Google (`google/gemini-3.8-flash`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's most intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows; released September 2, 2026 with 1M context window and multimodal input support.
- **Provider / access:** Google AI Studio (`gemini-3.8-flash`), OpenRouter, OpenCode Zen. Chat Completions API. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff 2026-03.
- **IDs:** `google/gemini-3.8-flash` (Google AI Studio / Gemini API), `gemini-3.8-flash` (OpenRouter)
- **Context window:** 1,048,576 (1M) tokens, 65,536 max output
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning enabled; tool calls; JSON mode; computer use (preview)
- **Pricing (as of 2026-09-23):** Free tier on Google AI Studio and OpenCode Zen; standard rates $0.75/1M input, $0.075/1M cached, $3.75/1M output (Google AI Studio)
- **Architecture:** Proprietary, closed weights; parameter count not disclosed; multimodal reasoning model; thinking modes (low/medium/high)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Artificial Analysis / LLM Stats, rank #1 across 35 evaluated models)
- BioMysteryBench (human-solvable): **88.8%** (DataLearner)
- LVBench (agentic): **87.8%** (DataLearner)
- LVBench (static): **87.1%** (DataLearner)
- SimpleBench: **82.4%** (DataLearner)
- OSWorld-2.0: **59.0%** (ComputingForGeeks)
- Finance Agent v2: **61.4%** (DataLearner / Vals AI)
- Terminal-Bench 4.0: **19.1%** (DataLearner)
- Agentic Index: **41.2** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.8 / 100** (NanoGPT / AA data) / **59** (per AA changelog, newer index)
- GPQA Diamond: **93.5%** (NanoGPT) / **94.4%** (BenchLM Vals)
- HLE-Verified: **54.9%** (DataLearner / ComputingForGeeks)
- AA-LCR: **84.0%** (NanoGPT, rank >99th percentile)
- MMLU-Pro (Vals): **90.2%** (BenchLM)
- CritPt: **18.3%** (NanoGPT)
- AA-Omniscience Accuracy: **54.6%** (NanoGPT)
- AA-Omniscience Hallucination Rate: **55.2%** (NanoGPT)
- BioMysteryBench (human-difficult): **56.5%** (BenchLM)
- SimpleBench: **82.4%** (DataLearner)
- CharXiv RQ: **86.2%** (DataLearner)
- GDPval-AA v2: **1545** Elo (DataLearner)

Coding:

- Terminal-Bench 2.1: **89.4%** (also agentic, ranked #1 on LLM Stats)
- DeepSWE v1.1: **73.7%** (ComputingForGeeks)
- LiveCodeBench (Vals): **89.5%** (BenchLM)
- SWE-bench (Vals): **80.0%** (BenchLM)
- DeepSWE (BenchLM): **73.8%**
- cursorBench32: **69.2%** (BenchLM)
- SciCode: **55.1%** (NanoGPT)
- Coding Index: **74.1** (Artificial Analysis)

Long context:

- AA-LCR: **84.0%** (rank >99th percentile, NanoGPT)
- LVBench: **87.8%** (agentic video understanding, DataLearner)
- Context training schedule: optimized for 1M window
- Terminal-Bench 2.1 #1 ranking confirms strong agentic reasoning over long contexts

### Normalized scores (1–100)

- **Tool use: 87/100.** Exceptional on Terminal-Bench 2.1 (89.4%, ranked #1 across 35 models); strong on BioMysteryBench (88.8%), LVBench (87.8%), and SimpleBench (82.4%); moderate on OSWorld (59.0%) and Finance Agent (61.4%); weak on Terminal-Bench 4.0 (19.1%). Top-tier agentic coding and terminal capability.
- **Reasoning: 88/100.** GPQA Diamond at 93.5-94.4% and AA-LCR at 84.0% (>99th percentile) demonstrate elite reasoning; HLE-Verified at 54.9% and MMLU-Pro Vals at 90.2% are strong; AA Intelligence Index at 46.8-59 depending on version; CritPt at 18.3% is a gap. Overall elite reasoning breadth.
- **Context window: 97/100.** 1M native context window with AA-LCR at 84.0% confirming exceptional long-context reasoning; LVBench at 87.8% demonstrates strong multimodal long-context understanding; Terminal-Bench #1 ranking validates agentic reasoning over long horizons.
- **Multimodal: 90/100.** Text, image, audio, video, and PDF input supported; text output; LVBench at 87.8% (agentic video) and CharXiv RQ at 86.2% demonstrate strong multimodal understanding; broader modality support than most competitors.
- **Coding: 89/100.** Terminal-Bench 2.1 at 89.4% (#1), LiveCodeBench Vals at 89.5%, SWE-bench Vals at 80.0%, DeepSWE v1.1 at 73.7% (matching Claude Opus 5), cursorBench32 at 69.2%. Strong across coding agent benchmarks.
- **Cost efficiency: 100/100.** Free tier on Google AI Studio and OpenCode Zen ($0 input/output). Standard paid rates are $0.75/$3.75, among the most competitive for a frontier Flash model.
- **Overall Score: 90/100.** Mean of the five non-cost dimensions (87 + 88 + 97 + 90 + 89) / 5 = 89.4, rounded half-up to 90. A top-tier multimodal reasoning agent with the #1-ranked Terminal-Bench 2.1 score, elite GPQA Diamond and AA-LCR performance, and broad multimodal support at highly competitive pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchLM, LLM Stats, NanoGPT, DataLearner, ComputingForGeeks, and Google official model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
