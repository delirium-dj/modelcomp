# Gemini 3.1 Pro — findings by Space Bunny

- Source: Google (`gemini-3.1-pro-preview`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Why this pass changed the file:** the first pass recorded "no verified public score found"
> across the board. Google's DeepMind **model card and model-evaluation report** for this exact
> checkpoint do exist and publish a full benchmark table, and independent labs have since run it.
> Vendor and independent numbers disagree materially and are reported side by side below.

## Model card

- **Name:** Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- **Short description:** Google's GA-class Pro flagship for software engineering, grounded factual work, and multi-step agent/tool workflows — still a *preview* endpoint and the only Pro-tier model left in the Gemini 3 line.
- **Provider / access:** Google Gemini API / AI Studio / Vertex AI (`gemini-3.1-pro-preview`); a separate `gemini-3.1-pro-preview-customtools` endpoint exists for mixed bash + custom-tool workflows. Many third-party gateways resell it ($2/$12 typical; Kilo Gateway $1/$6).
- **Release / knowledge:** Released **2026-02-19**; **no shutdown date announced** as of 2026-10-10 (Gemini API deprecation schedule). Knowledge cutoff not published.
- **Context window:** 1,048,576 input tokens; 65,536 max output.
- **Modalities:** Text, image, video, audio/speech and PDF input; text output; thinking (low/medium/high), code execution, function calling, structured outputs, URL context, search grounding, Maps grounding. No image/audio generation, no Live API.
- **Pricing (as of 2026-10-10):** **$2.00 in / $12.00 out per 1M** at ≤200K prompt tokens; **$4.00 / $18.00** above 200K (Google developer guide). Thinking tokens bill as output. Cheapest third-party resellers list $1/$6.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** (Google model card, Terminus 2 harness); Vals AI independent run: **67.4%** (first place, Feb 2026) and **70.79%** on its agentic-coding aggregate; Artificial Analysis Terminal-Bench **4.0**: **4.04%** — a different, much harder benchmark version, not a contradiction of the 2.0 rows but a warning
- Terminal-Bench 2.1: **73.8%** (Google, July 2026 update)
- BrowseComp: **85.9%** (Google, Deep Research mode with search/python/browsing)
- MCP Atlas (public set): **69.2%**; τ2-bench: reported via the standard sierra framework, airline domain excluded
- APEX-Agents-AA (Artificial Analysis, independent): **32.01%**; τ³-Banking: **21.44%**; ITBench-AA (IT operations): **30.33%**
- GDPval-AA: sourced from the Artificial Analysis public leaderboard by Google; no standalone value in the sources reviewed

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google, self-computed, no tools) vs **95.45%** (Vals AI independent) vs **94.1%** (PricePerToken, sourced from AA) — all within run-to-run noise
- Humanity's Last Exam: **44.4%** no tools / **51.4%** with search + code (Google); **46.44% ±1.96** on the Scale AI leaderboard in Thinking High (rank 1); Artificial Analysis HLE (text, no tools) **47.03%**
- ARC-AGI-2 (ARC Prize Verified): **77.1%**; ARC-AGI-3 (Standard): **0.42%**
- MMMLU **92.6%**; MMLU Pro **90.99%** (Vals AI); MLCR-AA medical reasoning **15.56%** (AA); IFBench instruction following **77.14%** (AA)
- Artificial Analysis Intelligence Index: **30** on index v4.3.2 (confirmed 2026-10-08) — the earlier widely-quoted **57** for this model was on the *previous* index version and is not comparable; the frontier ceiling on the current scale is 58 (Claude Opus 5.5)
- Vals Index composite (economic-impact weighted, independent): **33.44% ±1.17**, rank 32 of 33 as of 2026-10-07; cost per test **$1.95–$2.18**; AA-AnalystAgent data analysis 41.25%
- Omniscience Accuracy / Hallucination Rate / CritPt: no verified public score found (Calibration error is reported as higher than GPT-5.4's)

Coding:

- SWE-bench Verified: **80.6%** (Google, average of 10 runs, disclosed +0.6 adjustment for three harness bugs); Vals AI independent: **78.80%**; Vals AI's own Feb 2026 run: **69.6%** — the spread is harness and effort, not a single truth
- SWE-bench Pro (Public): **54.2%** (Google, 5 runs) vs **~46.1%** on the standardized public leaderboard
- LiveCodeBench Pro: **2,887 Elo** (public leaderboard); LiveCodeBench **88.49%** (Vals AI)
- SciCode: **59%** (Artificial Analysis)
- Vibe Code Bench v1.1: **32.03%** (independent) and **6.69%** (Vals AI run) — markedly weak; ProgramBench: **0.00%** on this project's independent tracking

Long context:

- MRCR v2 (8-needle): **84.9%** cumulative at 128K, but only **26.3% pointwise at the full 1M window** — Google's own numbers show a steep quality drop at maximum length
- Documented limit: 1,048,576 input tokens / 65,536 output

Multimodal:

- MMMU-Pro: **80.5%** (Google, averaged across Standard and Vision settings) / **88.21%** (Vals AI independent)
- Vals Multimodal Index composite: **56.07%** (independent)
- HLE is reported on the full text + multimodal set

### Normalized scores (1–100)

- **Tool use: 78/100.** Google ships code execution, function calling, search grounding and a dedicated custom-tools endpoint, and BrowseComp 85.9% / MCP Atlas 69.2% show real retrieval-agent ability. Held well below the leaders by independent agentic numbers: APEX-Agents 32.01%, ITBench 30.33%, τ³-Banking 21.44%, and Terminal-Bench 4.0 at 4.04%.
- **Reasoning: 93/100.** GPQA Diamond 94.3% (vendor) / 95.45% (Vals AI independent), HLE rank 1 on Scale at 46.44%, ARC-AGI-2 77.1% and MMMLU 92.6% are frontier-grade. Capped because the current Artificial Analysis Intelligence Index reads 30 and the Vals Index ranks it 32nd of 33 — the vendor card and the independent composites tell very different stories.
- **Context window: 90/100.** 1,048,576 input tokens is a top-tier capacity and MRCR v2 84.9% at 128K is strong, but Google's own pointwise result collapses to **26.3% at the full 1M window**, so the headline window overstates usable length.
- **Multimodal: 93/100.** Native text, image, video, audio and PDF input with text output, MMMU-Pro 80.5% (vendor) / 88.21% (Vals AI). Capped by a Vals Multimodal Index of 56.07% — solid rather than elite.
- **Coding: 87/100.** SWE-bench Verified 80.6% (vendor) / 78.80% (independent), LiveCodeBench Pro 2,887 Elo, Terminal-Bench 2.1 73.8% and SciCode 59% are all strong. Offset by SWE-bench Pro at 54.2% (46.1% standardized), Vibe Code Bench at 32.03% and ProgramBench at 0.00%.
- **Cost efficiency: 78/100.** $2/$12 (doubling to $4/$18 above 200K) is the cheapest price among the frontier Pro models, and a full Vals Index test costs $1.95. Held back because Gemini 3.8 Flash beats it by 21 points on the Vals Index at $0.75/$3.75, and Gemini 4 Argon's introductory rate is $2/$10 — cheaper on output than this model.
- **Overall Score: 88/100.** Best fit for 1M-context multimodal agent work on Google Cloud where SWE-bench Verified and BrowseComp matter; independent composites argue a newer Flash model is the better default today.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across the Google DeepMind Gemini 3.1 Pro model card and model-evaluation report, the Gemini API model/deprecation/changelog pages, Artificial Analysis model and index data, Vals AI's Vals Index leaderboard and per-model page, Scale AI's HLE leaderboard, PricePerToken and AIEvals aggregator tables; conflicting vendor vs independent figures (SWE-bench Verified, Terminal-Bench, GPQA, SWE-bench Pro, Intelligence Index version change) are presented side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Google DeepMind — Gemini 3.1 Pro model card: https://deepmind.google/models/model-cards/gemini-3-1-pro/
- Gemini 3.1 Pro model evaluation report (methodology + full benchmark table): https://storage.googleapis.com/deepmind-media/gemini/gemini_3-1_pro_model_evaluation.pdf
- Gemini API deprecation schedule (`gemini-3.1-pro-preview`: 2026-02-19, no shutdown announced): https://ai.google.dev/gemini-api/docs/deprecations
- Gemini API model list: https://ai.google.dev/gemini-api/docs/models
- Vals AI — Vals Index leaderboard (Gemini 3.1 Pro 33.44%, updated 2026-10-07): https://vals-ai.com/benchmarks/vals_index
- Vals AI — Gemini 3.1 Pro Preview model page (Terminal-Bench 2.0 67.4%, SWE-bench Verified 69.6%): https://www.vals.ai/models/google_gemini-3.1-pro-preview
- AIEvals — Gemini 3.1 Pro aggregated independent vs publisher results (read 2026-10-08): https://aievals.app/models/gemini-3-1-pro
- Artificial Analysis — Gemini 3.1 Pro Preview: https://artificialanalysis.ai/models/gemini-3-1-pro-preview
- LLMBoard — Gemini 3.1 Pro (GPQA 94.30%, SWE-bench Verified 80.60%, AA HLE 47.03%, provider pricing): https://www.llmboard.ai/models/gemini-3-1-pro
- Hamirev — Gemini 4 Argon vs Flash vs Pro, Vals Index comparison (2026-10-07): https://hamirev.com/gemini-4-argon-vs-flash-vs-pro/
- Gemini 4 Argon announcement (context on the successor tier, 2026-09-30): https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/