# Gemini 2.5 Flash — findings by Claude Opus 5

- Source: Google / Google DeepMind (`gemini-2.5-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** The mid-tier "thinking model" of Google's Gemini 2.5 generation — a 1M-context, four-way-multimodal model with a developer-controllable **thinking budget**, positioned by Google as offering "the best cost-per-intelligence available" at launch. It is a distinct model, not an alias: `gemini-2.5-pro` sits above it and `gemini-2.5-flash-lite` below, and both have their own folders here. The 2.5 Flash **TTS Preview** and **Native Audio Preview** are separate models with their own tracker entries and are not credited in this report.
- **Provider / access:** Gemini API / Google AI Studio and Vertex AI as `gemini-2.5-flash`; also OpenRouter (`google/gemini-2.5-flash`). Supports Google's native tool suite — **Grounding with Google Search, Code Execution, and URL Context** — in addition to standard function calling. **Correction to this folder's curated metadata:** `meta.json` claims a "Free tier available on Google AI Studio **and OpenCode Zen**"; Zen's published endpoint and pricing tables contain **no Gemini 2.5 entry at all** (their Gemini line begins at Gemini 3 Flash) ([Zen docs](https://opencode.ai/docs/zen/)). The Google AI Studio free tier is real; the Zen claim is not.
- **Release / knowledge:** Announced at Google I/O as the `05-20` preview; **generally available and stable 2025-06-17**, with Google stating the GA build is the same 05-20 model ([Google developers blog](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)). The earlier `2.5 Flash Preview 04-17` endpoint was deprecated 2025-07-15. Knowledge cutoff: no verified public date found.
- **IDs:** `gemini-2.5-flash` (Gemini API / Vertex AI), `google/gemini-2.5-flash` (OpenRouter). **A genuine free route exists** via the Google AI Studio free tier with standard rate limits — but not via OpenCode Zen.
- **Context window:** **1,048,576 tokens (1M)**, corroborated by [BenchLM](https://benchlm.ai/models/gemini-2-5-flash). Notably, Google "kept a single price tier regardless of input token size" for this model — so unlike Claude Haiku 5.5, Grok 4.20 or the GPT-6 line, **there is no long-context price cliff**, which makes the full window economically usable. Max output: no verified public figure found.
- **Modalities:** **Text + image + audio + video/PDF in → text out.** The Gemini 2.5 generation's technical report establishes four-way input across the family; this folder's metadata records "Text, image, audio, PDF in; text out". No generated media. Reasoning: **yes, with an explicit thinking budget** the developer controls — and unlike Flash-Lite, thinking is **on** by default. Tool calls: yes, plus the three native Google tools listed above.
- **Pricing (as of 2026-10-08):** **$0.30 / MTok input, $2.50 / MTok output**, flat ([Google developers blog](https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/)). Worth recording precisely because the GA repricing was unusual: input went **up** from $0.15 and output came **down** from $3.50, and Google simultaneously **removed the separate "thinking" and "non-thinking" prices** that it admitted "led to developer confusion". Free tier on Google AI Studio with standard rate limits.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and sparsity undisclosed. BenchLM labels the tracked row **Non-Reasoning**, which is a harness-configuration label — the model is a thinking model by design, and that distinction matters a great deal below.

### Raw benchmarks found

> **Configuration caveat that dominates this report:** this is a model whose thinking budget is a developer-set parameter, and the public numbers clearly come from different settings. Artificial Analysis's row reads like a thinking-off or low-budget configuration; a secondary aggregator reports materially higher figures on the same benchmarks. Both are given, labelled, and the gap is treated as evidence of measurement uncertainty rather than resolved by picking the flattering one.

Agent / tool use:

- τ²-bench: **14.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-flash)) — very low, and the only independent agentic measurement that exists
- Terminal-Bench 2.0: **16.4%** ([airank.dev](https://airank.dev/models/gemini-2.5-flash)) — a **secondary aggregator**, not a primary leaderboard; cited for completeness and weighted accordingly
- GDPval-AA, AA Agentic Index, OSWorld, MCP-Atlas, BrowseComp, Claw-Eval, Toolathon: **no verified public score found**
- Non-benchmark but verifiable capability: native Grounding with Google Search, Code Execution and URL Context tools, plus function calling

Reasoning / knowledge:

- GPQA Diamond: **68.3%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-flash)) vs **78.3%** ([airank.dev](https://airank.dev/models/gemini-2.5-flash)) — a **10-point spread** across sources, almost certainly a thinking-budget difference
- HLE: **4.7%** (AA-HLE, Artificial Analysis) vs **12.1%** (airank.dev) — a **2.6× spread**, same cause
- AA-LCR: **49.9%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **9.8**; BenchLM overall **42.21/100, rank #124 of 889** (only 14 of 625 benchmarks, flagged conservative)
- AA-Omniscience: Index **−42.6**, Accuracy **26.1%**, **Hallucination Rate 93.0%** — the single highest hallucination rate recorded anywhere in this research pass
- AA-IFBench: **39.0%**
- FrontierMath v2: Tiers 1–3 **4.84%**, Tier 4 **4.17%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Coding:

- **No SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode, FrontierCode, Terminal-Bench-as-coding, or Vibe Code Bench figure exists for this model** in any source I consulted. This is the emptiest coding dimension of any model in this pass. Design Arena — Website **1120 Elo** ([OpenRouter](https://openrouter.ai/google/gemini-2.5-flash/benchmarks)) measures front-end *design* preference and is not a coding-correctness benchmark; it is recorded under multimodal, not here.

Multimodal:

- AA-MMMU-Pro: **65.5%** ([Artificial Analysis](https://artificialanalysis.ai/models/gemini-2-5-flash)) — independent, and the strongest single datapoint for this model
- Design Arena — Website: **1120 Elo** (OpenRouter)
- No MathVision, CharXiv, OmniDocBench, Video-MME, or audio-understanding number found — a conspicuous absence for a model whose input surface includes audio and video

Long context:

- No MRCR / RULER / needle-retrieval number at any depth. **AA-LCR 49.9%** is the only quantified long-context signal, and at under 50% it is the weakest long-context reasoning score of any 1M-context model I have assessed in this pass.

### Normalized scores (1–100)

- **Tool use: 42/100.** τ²-bench at **14.9%** is the only independent agentic measurement, and it is close to floor; a secondary aggregator's Terminal-Bench 2.0 of 16.4% points the same way. Credit is retained for genuinely useful first-party tooling — Search grounding, Code Execution and URL Context are real, production-grade integrations that most models in this dataset lack — but a model cannot be scored as agentic on integration surface alone when every number measured on it is in the teens.
- **Reasoning: 54/100.** Honest uncertainty drives this score: GPQA Diamond is reported at **68.3%** by Artificial Analysis and **78.3%** by a secondary aggregator, and HLE at **4.7%** versus **12.1%** — the thinking budget is a free parameter and the public record does not pin it. I score nearer the independently-measured end, then cap further for CritPt 1.4%, FrontierMath ~4–5% at both tiers, AA-IFBench 39.0%, an AA Intelligence Index of 9.8, and a **93.0% hallucination rate against 26.1% accuracy** — the worst abstention behaviour in this entire pass.
- **Context window: 76/100.** 1,048,576 tokens, vendor-documented and aggregator-confirmed, and — uniquely among the large-window models I have scored — **with no price cliff**: Google explicitly kept one flat rate regardless of input size, so the whole window costs the same per token as the first thousand. That is a real, differentiating economic property and it earns credit. Held down to 76 because **AA-LCR 49.9%** says the window's *usable* quality is weak, and no retrieval curve exists at any depth.
- **Multimodal: 74/100.** Four-way input (text, image, audio, video/PDF) remains broader than most 2026 models here, and AA-MMMU-Pro 65.5% is a respectable *independent* vision result. Capped by text-only output and by the fact that **nothing beyond still images is measured at all** — no video benchmark, no audio-understanding benchmark, no document/OCR benchmark — so three of the four input modalities are capability claims without public evidence of quality.
- **Coding: 48/100.** Scored almost entirely on absence: there is **no SWE-bench, no LiveCodeBench, no SciCode, no FrontierCode and no agentic-coding figure of any kind** for this model. That is not a research gap I can close — Google published none and no independent harness posted one. Held at 48 rather than lower because the model demonstrably ships a Code Execution tool, sits in a generation whose Pro tier measured 54.4% on an independent SWE-bench run, and is widely used in production coding tooling; but an unevidenced dimension cannot be scored as a strength.
- **Cost efficiency: 62/100.** $0.30 in / $2.50 out per MTok with a **flat rate across the entire 1M window** and a real free tier on Google AI Studio is genuinely good pricing, and the GA repricing — dropping output 29% and abolishing the confusing thinking/non-thinking split — was a developer-friendly move worth acknowledging. The score is nonetheless capped by a comparison internal to Google's own catalogue: **Gemini 3.5 Flash-Lite costs exactly the same $0.30 / $2.50 and scores 50.79 against this model's 42.21.** Identical price, materially better model, same vendor — that is the definition of being dominated, and the `meta.json` claim of a Zen free tier (which does not exist) does not help its case.
- **Overall Score: 58.8/100.** Mean of the five non-cost dims (42 + 54 + 76 + 74 + 48) / 5 = 58.8. Best fit: cheap, flat-rate bulk ingestion across a full million-token window with mixed media — transcription-adjacent summarisation, document and A/V triage, Search-grounded Q&A — where the no-cliff pricing genuinely matters. Do not use it for agentic work (τ²-bench 14.9%), do not assume coding ability that has never been measured, and verify every factual claim it makes (93% hallucination rate). If you are starting fresh on Google's stack today, Gemini 3.5 Flash-Lite is the same price and strictly better.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google's developer-blog post of 2025-06-17 for GA status, the thinking-budget design, native tool support, the deprecation of the 04-17 preview, and the exact repricing history ($0.15→$0.30 input, $3.50→$2.50 output, thinking/non-thinking split removed, single tier regardless of input size); BenchLM's aggregated `gemini-2-5-flash` page; the underlying Artificial Analysis, Epoch AI and OpenRouter leaderboards; and one secondary aggregator (airank.dev) whose higher GPQA/HLE/Terminal-Bench figures are reported with an explicit low-authority caveat rather than adopted. The OpenCode Zen catalogue was checked directly and contains no Gemini 2.5 route, so this folder's `meta.json` free-tier-on-Zen claim is reported as incorrect. The 10-point GPQA and 2.6× HLE spreads between sources are attributed to the developer-settable thinking budget and surfaced as measurement uncertainty rather than resolved in the model's favour. No data was imported from `gemini-2.5-pro` or `gemini-2.5-flash-lite`, which have their own folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
