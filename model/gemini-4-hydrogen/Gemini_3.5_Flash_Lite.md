# Gemini 4 Hydrogen — findings by Gemini 3.5 Flash Lite

- Source: Google DeepMind (Gemini 4 family)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Gemini 4 Hydrogen is a Google DeepMind Gemini 4 frontier reasoning model positioned as an efficient, broadly accessible model for everyday coding and agentic workflows with a shared 1M-token context window and long decodes.
- **Provider / access:** Google AI Gemini API / Google AI Studio (`gemini-4-hydrogen` endpoint per Google AI for Developers model documentation). Specific hosted chat/product surfaces (e.g. Gemini app tier availability) not independently verified from fetched sources in this pass.
- **Release / knowledge:** Announced/referenced in Google DeepMind Gemini 4 materials and Google AI for Developers models page as of 2026-11-13; knowledge cutoff not stated in fetched sources.
- **IDs:** `gemini-4-hydrogen` (Google AI for Developers endpoint). No OpenCode Zen free ID found in fetched sources.
- **Context window:** 1M tokens total context, with max output up to 64K or 1M tokens depending on mode/configuration as listed by Google AI for Developers; exact runtime limits not independently benchmarked in this pass.
- **Modalities:** Text, image, audio, video, and PDF inputs; text output; reasoning supported (frontier reasoning model). Tool calling/function-calling support not explicitly detailed in fetched pages; no verified public score found for structured tool-calling conformance specifics.
- **Pricing (as of 2026-11-13):** No verified public per-token pricing found for `gemini-4-hydrogen` in fetched sources (Google AI for Developers models page and DeepMind Gemini page did not list input/output/cached rates).
- **Architecture:** Proprietary Google DeepMind Gemini 4 model; parameter count, active parameters, and training architecture details not publicly disclosed in fetched sources.

### Raw benchmarks found

> Evidence below is limited to benchmarks explicitly shown on the fetched DeepMind Gemini 4 page for Gemini 4 Hydrogen. If a benchmark was not found, it is marked accordingly.

Agent / tool use:

- Agents' Last Exam v1.1 (**knowledge work / agentic evaluation**): **71.6%** (Google DeepMind Gemini 4 Hydrogen performance table).
- AutomationBench-AA (**knowledge work / automation**): **76.1%** (Google DeepMind Gemini 4 Hydrogen performance table).
- Vending-Bench 2 (**agentic business simulation**): **$14,549 bank balance** (Google DeepMind Gemini 4 Hydrogen performance table).
- OSWorld-2.1 (**computer use**, offline subset): **77.6%** (Google DeepMind Gemini 4 Hydrogen performance table).
- Terminal-Bench 2.1: no verified public score found for Gemini 4 Hydrogen in fetched sources.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- HLE-Diamond: **58.8%** (Google DeepMind Gemini 4 Hydrogen performance table).
- MKA (**multimodal understanding / climb WSR accuracy**): **53.4%** (Google DeepMind Gemini 4 Hydrogen performance table).
- Chartography (**multimodal understanding**): **66.6%** (Google DeepMind Gemini 4 Hydrogen performance table).
- GPQA Diamond: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found for this exact model ID in fetched sources (Artificial Analysis page content was partially loaded but no confirmed Gemini 4 Hydrogen row extracted).
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-sweep (**agentic coding**): **13.5%** (Google DeepMind Gemini 4 Hydrogen performance table).
- Terminal-Bench 4.1 (**agentic coding**, cheating-adjusted): **57.0%** (Google DeepMind Gemini 4 Hydrogen performance table).
- Terminal-Bench-Science 0.1 (**science and math**): **51.4%** (Google DeepMind Gemini 4 Hydrogen performance table).
- SWE-bench Verified / SWE-Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index / other: no verified public score found.

Long context:

- No long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) reported for Gemini 4 Hydrogen in fetched sources; 1M-token context window is vendor-stated.

### Normalized scores (1–100)

> Scores are evidence-limited interpretations from fetched public sources as of 2026-11-13. Overall = mean of the five non-cost quality dimensions (Tool use, Reasoning, Context window, Multimodal, Coding); Cost efficiency excluded.

- **Tool use: 78/100.** Supported by strong agentic/workflow results in fetched sources (AutomationBench-AA 76.1%, OSWorld-2.1 77.6%, Agents' Last Exam v1.1 71.6%, Vending-Bench 2 $14,549), indicating capable real-world task execution; capped by limited public detail on standardized tool-calling APIs and absence of broader tool-use benchmarks in this pass.
- **Reasoning: 74/100.** HLE-Diamond 58.8% and solid agentic/science-adjacent results (Agents' Last Exam 71.6%, Terminal-Bench-Science 51.4%) suggest competent frontier reasoning for an efficient tier, but evidence is incomplete for deep reasoning suites (GPQA Diamond, LCR/MLCR, CritPt not found).
- **Context window: 85/100.** Vendor-stated 1M-token context with long decode support (up to 1M output in listed configuration) is a major capability; capped by lack of independently verified long-context retrieval/stress-test results in fetched sources.
- **Multimodal: 90/100.** Google AI for Developers lists broad multimodal inputs (text, image, audio, video, PDF), which is strong coverage for a general-purpose frontier model; capped because output is text-only in listed specs and no fetched quantitative multimodal benchmark suite beyond Chartography/MKA was available.
- **Coding: 60/100.** Terminal-Bench 4.1 (57.0%) and Terminal-Bench-Science (51.4%) indicate usable agentic/scientific coding ability, but SWE-sweep (13.5%) and missing common coding benchmarks (SWE-bench Verified, LiveCodeBench) limit confidence and cap the score.
- **Cost efficiency: 50/100.** No verified public pricing found for `gemini-4-hydrogen` in fetched sources as of 2026-11-13; provisional neutral score pending disclosed per-token/API pricing.
- **Overall Score: 77/100.** Mean of Tool use, Reasoning, Context window, Multimodal, and Coding = (78 + 74 + 85 + 90 + 60) / 5 = 77.4, rounded half-up to 77. Best fit as an efficient multimodal Gemini 4 model for long-context agentic and everyday coding workflows when broad modality support matters, with coding depth and pricing transparency still under-documented publicly.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-13 UTC
- Method: Independent public web research using direct page fetches (web search unavailable in this environment due HTTP 402 during attempts; fallback via `webfetch` of official/model pages per `RULES.md` § Web-research fallback). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini models — Google AI for Developers](https://ai.google.dev/gemini-api/docs/models)
  - [Gemini 4 — Google DeepMind](https://deepmind.google/models/gemini/)
  - [Gemini (language model) — Wikipedia](https://en.wikipedia.org/wiki/Gemini_(language_model)) (secondary context only; benchmark/spec claims prioritized from primary vendor pages above)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
