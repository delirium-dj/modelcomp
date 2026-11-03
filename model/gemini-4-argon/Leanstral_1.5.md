# Gemini 4 Argon — findings by Leanstral 1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's Gemini 4 tier flagship for enterprise knowledge work, reasoning, and agentic coding. 1M context window with multimodal (text + image) input. Succeeds Gemini 3.1 Pro in Google's product lineup.
- **Provider / access:** Google AI Studio, Google Vertex AI, Gemini API (`generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent` — API ID may differ for Argon tier). Chat Completions API. Also available via Google AI Pro and Ultra subscription tiers.
- **Release / knowledge:** Released September 2026; knowledge cutoff not separately disclosed from Gemini 4 family.
- **IDs:** `google/gemini-4-argon` (API-facing model ID pending confirmation)
- **Context window:** 1,000,000 tokens (~1,500 A4 pages); input / max output limits not separately disclosed; verified at 1M from official DeepMind benchmarks page
- **Modalities:** Text and image in; text out; reasoning yes (extended thinking); tool calls; JSON mode; function calling supported
- **Pricing (as of 2026-11-03):** $4.00 / $20.00 per 1M input / output tokens. Cache discount 95%. Available via 3 API providers tracked by AA (Google AI Studio, Google Vertex). TTFT ranges 41.32–48.34s depending on provider.
- **Architecture:** Proprietary; model size not disclosed by Google. Described as Gemini 4 tier flagship.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- AutomationBench-AA (Zapier): **51.3%** (DeepMind blog, October 2026); AA leaderboard shows Gemini 4 Carbon leading at 77.8%
- SWE-sweep (agentic coding): **4.3%** (DeepMind blog)
- FrontierSWE 2: **55.0%** (DeepMind blog)
- Terminal-Bench 4.0: **57.1%** (DeepMind blog); AA leaderboard shows Kimi K3.1 Pro at 67.2%, Gemini 4 Carbon at 65.2%
- Terminal-Bench-Science 0.1 (AA): **52.9%** (DeepMind blog, "Gemini 4 Argon scores 52.9%" on Terminal-Bench-Science)
- Agents' Last Exam v1.1 (Computer Use): **69.0%** (DeepMind blog)
- OSWorld-2.1: **74.7%** (DeepMind blog; Claude Opus 5.5 leads at 87.2%)
- Vending-Bench 2: **$13,718** (DeepMind blog)
- GDPVal-AA v2: **1631 Elo** (AA GDPval leaderboard; ranked #28)
- DeepSearch QA: **49.6%** (Meta Spark 1.3 comparison table on DeepMind blog)
- Agentic IF Index (Internal): **no verified public score found**
- JobBench: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50 / 100** (Artificial Analysis, rank #15/60); only 15th despite being a flagship model
- HLE-Diamond: **no verified public score found** (Gemini 4 Carbon leads at 69.1% on AA)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**
- AA-Omniscience Net Score: **no verified public score found**
- AA-Omniscience Hallucination Rate: **4%** (AA; lowest or tied-lowest among models scored)
- RiemannBench: **76.0%** (DeepMind blog)

Coding:

- SWE-sweep (agentic): **4.3%** (DeepMind blog; very low)
- FrontierSWE 2: **55.0%** (DeepMind blog; GPT-6 Astra leads at 65.5%)
- Terminal-Bench 4.0: **57.1%** (DeepMind blog)
- Terminal-Bench-Science 0.1: **52.9%** (DeepMind blog)
- DeepSWE v1.1: **no verified public score found** (Muse Spark leads reported DeepSWE at 74.0% in Meta blog comparison)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- GraphWalks (256K–1M, BFS F1): **84.2%** (DeepMind blog)
- No longer-context retrieval benchmarks beyond GraphWalks found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Good agentic automation scores (AutomationBench 51.3%, SWE-sweep 4.3%, FrontierSWE 2 at 55.0%) and competitive OSWorld-2.1 at 74.7%. However SWE-sweep at only 4.3% is concerning for a coding flagship — may reflect different eval methodology. AA AutomationBench shows the model ranks well on business workflows but not on frontier SWE benchmarks. Lacks independent AA tool-use leaderboard placement.
- **Reasoning: 70/100.** AA Intelligence Index of 50 (#15/60) is below flagship expectations — below Gemini 4 Carbon (59) and Claude models. However, extended thinking is confirmed, and the model ranks well on specific domain benchmarks (RiemannBench 76.0%, HLE not independently verified). No independent GPQA/LCR/CritPt scores found to triangulate.
- **Context window: 65/100.** Verified 1M context from official benchmarks. GraphWalks 84.2% at 256K–1M is strong, but no RULER or longer-context retrieval benchmarks found. Scaling behavior beyond 1M not independently verified.
- **Multimodal: 85/100.** Text and image input confirmed; no video input (unlike Gemini 4 Carbon which supports speech + video). Text output only. For a non-vision-native model this is standard, but lacks the multimodal breadth of Gemini 4 Carbon. 15 points for text-only if image weren't confirmed; image capability lifts this.
- **Coding: 60/100.** Mixed signals — FrontierSWE 2 at 55.0% is competitive but SWE-sweep at 4.3% is very low. Terminal-Bench 4.0 at 57.1% is moderate. No independent SWE-bench or LiveCodeBench scores found. The coding story is inconsistent across benchmarks; capped by lack of coherent third-party evidence.
- **Cost efficiency: 65/100.** $4.00/$20.00 per 1M tokens is expensive relative to competitors. 95% cache discount helps but at $4/M input, cost efficiency is below median for frontier models. Muse Spark's $0.10/$0.20 contributor tier and GPT-5.5 at $1.25/$10.00 make Argon expensive by comparison.
- **Overall Score: 70/100.** Mean of Tool (72) + Reasoning (70) + Context (65) + Multimodal (85) + Coding (60) = 70.4. Rounded to 70. Scores are provisional — key concern is that SWE-sweep 4.3% and Intelligence Index #15/60 suggest the model is not at the absolute frontier despite its flagship marketing, though it leads on some enterprise benchmarks.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Primary sources: DeepMind official blog benchmarks, Artificial Analysis model pages and leaderboards, Zapier AutomationBench methodology.
- Reference URLs:
  - [Gemini 4 Argon — DeepMind Blog (Performance)](https://deepmind.google/technologies/gemini/)
  - [Gemini 4 Argon — Official Blog Post](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)
  - [Artificial Analysis — Gemini 4 Argon (High)](https://www.artificialanalysis.com/models/gemini-4-argon)
  - [Artificial Analysis — Gemini 4 Argon Providers](https://www.artificialanalysis.com/models/gemini-4-argon/providers)
  - [Artificial Analysis — GDPval-AA v2.1 Leaderboard](https://www.artificialanalysis.com/evaluations/gdpval-aa)
  - [Zapier AutomationBench Paper](https://arxiv.org/abs/2604.18934)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
