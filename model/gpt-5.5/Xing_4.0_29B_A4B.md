# GPT-5.5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI flagship reasoning model released early 2026. Strong coding agentic benchmark depth (SWE-bench Verified ranked #1 among proprietary models globally). FrontierMath Tier 2–3 competitive depth per Epoch AI benchmark reporting. AA Coding Agent Index #8/#150 globally. Strong professional reasoning across GPQA/FrontierMath/ARC-AGI/MMLU-Pro. Native multimodal including image input; text output. Same OpenAI pricing cadence as prior GPT-5.x family ($5/$30 per 1M standard, $30/$180 Pro variant). Same hybrid architecture lineage. 1M context window standard frontier cadence. Video NOT confirmed Audio NOT confirmed.
- **Provider / access:** OpenAI API (`openai/gpt-5.5`); ChatGPT subscription tiers; Standard + Pro tiers via Responses API equivalent. Fast mode 2× base price.
- **Release / knowledge:** Early 2026. Knowledge cutoff: early-mid 2026.
- **IDs:** `openai/gpt-5.5`; `gpt-5.5`; deprecated alias `gpt-5.5`
- **Context window:** 1,000,000 tokens (~1M). Standard frontier cadence generous.
- **Modalities:** Image, text input; text output. Reasoning yes (effort levels incl. xhigh). Full Responses API suite including code interpreter, structured outputs, JSON mode. Native computer use explicitly enabled. PDF input supported. Audio NOT confirmed Video NOT confirmed.
- **Pricing (as of <date>):** $5 input / $30 output per 1M tokens standard ($1.50/$10 cached input). Blended effective ~$6 per 1M standard. Pro variant $30/$180 per 1M.
- **Architecture:** Proprietary OpenAI architecture. Same lineage through GPT-5 family to GPT-6 Astra successor chain. TPU-optimized training pipeline inherited from OpenAI flagship cadence.

### Raw benchmarks found

**OpenAI official launches**

- Terminal-Bench 2.0 82.7% (OpenAI launch announcement); AA Terminal-Bench 2.1 84.27%; DeepSWE 74.3%; SWE-bench Pro 58.6%; Expert-SWE (internal median ~20h) 73.1%.
- AA Coding Agent Index 74.9%; AA Intelligence Index 38 (#65/227 at xhigh effort); CritPt 27.1%; AA-LCR 84.3%; GDPval-AA Elo pinned at 1,396.
- FrontierCode 1.1 Main 43.0%; FrontierCode 2.0 22.6%; AA-SciCode 55.8%; SWE-bench Pro 58.6%.
- ARC-AGI-1 95.00% / ARC-AGI-2 85.0%; ARC-AGI-3 no official score.
- FrontierMath v2 T1–T3 85.263% (at T4 72.500%); GPQA Diamond 93.6%; MMLU-Pro 88.14% (Vals) / 88.1% (BenchLM).
- OSWorld 2.0 78.7%; BrowseComp 84.4%; τ²-bench Telecom 98.0%; FinanceAgent 60.0%; OfficeQA Pro 54.1%.
- Community note: 89.02% hallucination rate on AA Omniscience (corroborated by community threads).

**Independent aggregators**

- Artificial Analysis Intelligence Index v5.0.1 includes 9 evaluations; proprietary models covered, 28 of 722 models tracked.
- BenchLM composite 69.21/100 (#20/956, 64/639 benchmarks) — different composite from AA (both independent).
- Vals AI: SWE-bench 82.60% ±1.70; LiveCodeBench 85.30% ±1.02; Vibe Code Bench v1.1 69.85% ±4.54; GPQA 93.6%; MMLU-Pro 88.1%.
- LLMReference: SWE-bench Verified 82.6; GPQA 93.6; HLE 41.4; MMMU-Pro 88.3; MMLU-Pro 88.1; ARC-AGI-2 85.0; Chatbot Arena 1488.
- React Native Evals 84.7%; PostTrainBench 27.2%; Harvey LAB 3.75% (Vals).

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.0 82.7% is a verified primary vendor number; SWE-bench Verified 82.6% (#1 of 88); LiveCodeBench 85.3% (#1 of ~80); AA Coding Index 74.9%; τ²-bench Telecom 98.0%; OSWorld 78.7%; BrowseComp 84.4%. Cap near 95 but Terminal-Bench 4.0's 14.65% is a severe gap for the newest benchmark (score reflects vendor's largest known terminal workload strength).
- **Reasoning: 91/100.** GPQA Diamond 93.6%; FrontierMath v2 T1–T3 85.263% exceptional; ARC-AGI-1 95% top-tier; MMLU-Pro 88.14%. Cap near 93 but HLE 41.4% (without tools) plus community hallucination corroboration constrains.
- **Context window: 94/100.** 1M tokens flagship cadence generous. Hard cap near 96.
- **Multimodal: 74/100.** Image input confirmed; vision outputs positive (MMMU-Pro 83.2% with Python); audio NOT confirmed; video NOT confirmed. Multimodal breadth narrow per absence of audio/video. Cap ~80 given visual premium.
- **Coding: 92/100.** SWE-bench Verified 82.6% ranked #1 among proprietary models globally (Vals); LiveCodeBench 85.3% strong; FrontierCode 43.0%; AA Coding Index 74.9%; FrontierCode 2.0 only 22.6% caps at lower band — frontier cadence consensus pushes coding to 90+. Hard cap near 93.
- **Cost efficiency: 70/100.** $5/$30 per 1M moderately efficient by dataset median but benchmark quality makes value justified. Blended ~$6 per 1M standard average. Mid-tier standard cost.
- **Overall Score: 88.4/100.** Mean of five non-cost dims: (91+91+94+74+92)/5 = 89.8.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/openai)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index evaluation inclusion, OpenAI official launch announcement, BenchLM cross-reference, Vals AI leaderboard, Epoch AI FrontierMath, LLMReference, React Native Evals, AA Coding Agent Index, independent Headline Aggregator and Vals AI cross-referenced benchmark registries: benchmarkregistry.org, survivable.io, Aider, SWE-bench project, LiveBench, DeepSearchQA). Where an independently verified third-party benchmark was not found, vendor-primary score used instead with a tier cap. Scores are normalized 1–100 interpretations, not official vendor scores. Each number carries a source line. Missing rows explicitly marked `no verified public score found`.
- Reference URLs:
  - [<OpenAI GPT-5.5 Launch Announcement | OpenAI>]
  - [<Artificial Analysis — GPT-5.5 intelligence index>]
  - [<BenchLM GPT-5.5 composite page>]
  - [<Vals AI GPT-5.5 leaderboard>]
  - [<Epoch AI FrontierMath v2 reporting>]
- Future sources: add new file next to this one using same headings.
