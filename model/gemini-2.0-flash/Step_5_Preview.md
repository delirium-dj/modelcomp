# Gemini 2.0 Flash — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-2.0-flash`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (experimental 2024-12-11; GA 2025-02-05)
- **Short description:** Google's second-generation "workhorse" — the fast, cheap, multimodal member of the Gemini 2.0 family that kicked off Google's "agentic era" positioning: low latency, native tool use, and a 1M-token context at a flat per-token rate with no short/long-context price tier. It accepted text, image, audio and video input (with image generation and TTS output arriving post-launch — AA's page independently lists "text and image" output) and was the tier that made 1M multimodal context accessible at $0.10/M. **It is retired: Google deprecated and shut `gemini-2.0-flash` down on 2026-06-01 — API requests now fail**, and Google's model docs list it among the shut-down models, directing developers to newer Flash generations (Gemini 2.5 Flash and the Gemini 3.x line).
- **Provider / access:** Was API-only (Gemini API in AI Studio, Vertex AI); proprietary, no weights. Now shut down.
- **Release:** 2024-12-11 (experimental), 2025-02-05 (GA); retired 2026-06-01. Knowledge cutoff August 2024 (Artificial Analysis lists June 1, 2024).
- **Context window:** 1,048,576 tokens (1M); max output 8,192 tokens.
- **Modalities:** Text, image, audio and video in → text out (image generation and text-to-speech output arrived after launch; AA lists text + image output); native tool use.
- **Pricing (last list price before retirement):** $0.10/M input (text/image/video; $0.70 for audio), $0.40/M output; cached input $0.025/M; batch tier half price ($0.05/$0.20); also on the free developer tier.
- **Architecture:** Undisclosed sparse MoE transformer — Google never published parameter counts.

### Raw benchmarks found

Google model card (April 2025):

- MMLU-Pro: **76.4%**; GPQA Diamond: **62.1%**; MATH: **89.7%**
- MMMU (multimodal reasoning): **70.7%**; Natural2Code: **92.9%**
- FACTS Grounding: **84.6%**; Global MMLU (Lite): **83.4%**; SimpleQA (no search): **29.9%**

Third-party (2026 trackers, post-retirement historical values):

- Artificial Analysis Intelligence Index: **9** (8.9 estimated; non-reasoning model; #104/296, above the class median of 7) — re-confirmed 2026-10-19
- BenchLeader Index: **45.0** (#500 of 758 configs) — categories: Multimodal 56, Maths 49, Knowledge 51, Long context 37, Reasoning 38, Coding 32
- AA-LCR (long-context reasoning): **31.3%** (#370) — re-confirmed 2026-10-19; CritPt: **0.0%**; τ²-bench: **29.5%** (AA)
- AA-Omniscience: Index **−42.5**, accuracy **23.5%**, hallucination rate **86.2%** (new in the 2026-10-19 re-run); AA-IFBench **40.2%**; AA-HLE **4.3%**
- Fiction.LiveBench 120k: 62.5% (#13) in one setting, 37.5% in another
- BenchGecko: 44.5 average across 20 benchmarks (Chatbot Arena Elo 1,360 overall; HELM IFEval 84.1%; MATH level-5 82.2%)
- **New in the 2026-10-19 re-run:** SWE-bench Verified **21.4%** (Google's own Gemini 2.5 technical report, Table 3 — arXiv:2507.06261 — the first SWE-bench-family number on record for this model); MMMU **69.3%** and GPQA **65.2%** / AA-GPQA Diamond **62.3%** from the same table; AIME 2025 **29.7%**
- Terminal-Bench, MCP Atlas, GDPval: **no verified public score found**

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **one score adjusted on new evidence — Coding 50 → 46 (Overall 57 → 56).** The first SWE-bench Verified number on record for this model (21.4%, from the Gemini 2.5 technical report's comparison table) lands far below the "good classic codegen" story that Natural2Code 92.9% told, and it confirms BenchLeader's coding category (32/100). Everything else re-verified unchanged: AA's Index 9, AA-LCR 31.3%, τ² 29.5% and the Omniscience rows all sit where the existing scores placed the model.

- **Tool use: 40/100.** It shipped native tool use and was built for the agentic era, but Google published no agentic benchmark (no TB2.1/τ³/MCP-Atlas/GDPval figure exists; AA's τ² rerun reads 29.5% and IFBench 40.2%) and BenchLeader's agents-&-tools category scores it 37/100 — the tool-use dimension rests on capability claims and third-party category scores.
- **Reasoning: 45/100.** GPQA Diamond 62.1–65.2% and MMLU-Pro 76.4% were mid-tier for Feb 2025 and are far below the 2026 frontier (GPQA 90%+, HLE 40%+); SimpleQA 29.9%, AIME 2025 29.7%, HLE 4.3% and the AA Intelligence Index of ~9 reflect that; a non-reasoning model by 2026 standards.
- **Context window: 60/100.** The 1M-token window is nominal — the size would justify the 85–100 bands, but measured long-context quality is weak (AA-LCR 31.3%, BenchLeader long-context 37/100, Fiction.LiveBench 120k 62.5%), so it sits at the level of models with a fraction of the window. An 8,192-token output cap compounds the limit.
- **Multimodal: 88/100.** Text + image + audio + video input → text out (image/TTS output post-launch) is the 90–100 band; MMMU 69.3–70.7% and Multimodal 56/100 on BenchLeader are competent but not class-leading, so it lands at the bottom of the band.
- **Coding: 46/100.** Natural2Code 92.9% and MATH level-5 82.2% show good classic code-generation, but the new SWE-bench Verified 21.4% (the model's only agentic-coding-family measurement) plus BenchLeader's coding 32/100 and the 8K output cap put it in the lower-mid band.
- **Cost efficiency: 97/100.** At its flat $0.10/$0.40 per million tokens (batch $0.05/$0.20) it was the cheapest serious 1M multimodal option in the market — the methodology's ~$0.1/$0.2 ≈ 97–99 tier. Moot now: the model is shut down and cannot be bought at any price.
- **Overall Score: 56/100.** Mean of 40/45/60/88/46 = 55.8 → 56. Best-fit recommendation: a historical pick — the model that democratized 1M multimodal context at flash prices in 2025; retired since June 2026, so it belongs only in legacy pipelines that have already migrated. Use Gemini 2.5 Flash or the 3.x line instead.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — Artificial Analysis deprecated page (Index ~9, modality/output confirmation) + BenchLM's 15-row aggregate (SWE-bench 21.4% and MMMU/GPQA from the Gemini 2.5 technical report, AA-LCR/τ²/Omniscience rows); original run used the Google Gemini API model docs + archived Gemini 2.0 launch posts, AI/TLDR and iOPTERA retirement documentation, BenchLeader and BenchGecko. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2_5_Flash_2026.md`, using the same headings.
