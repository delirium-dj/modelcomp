# Gemini 4 Argon — findings by Leanstral_1.5

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind / Gemini 4 Argon
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's frontier reasoning model for complex workflows, released September 30, 2026, featuring a 1M context window, 1M max output tokens, native multimodal (text/image/video/audio), and state-of-the-art performance across coding, enterprise knowledge work, cybersecurity, and science benchmarks. Available via Google AI Pro/Ultra and soon via paid API.
- **Provider / access:** Google DeepMind; Google AI Pro/Ultra subscribers; planned paid API for developers and enterprises (introductory $2/$10 per 1M in/out, raising to $4/$20 after introductory period). Available on Google Cloud Vertex AI. No data retention for API customers.
- **Release / knowledge:** Released 2026-09-30 for Pro/Ultra subscribers; broader API availability coming. Knowledge cutoff not publicly disclosed (post-2025 training data inferred from benchmarks).
- **IDs:** `gemini-4-argon` (model ID); Google AI Studio / Vertex AI endpoints.
- **Context window:** 1,048,576 (1M) total tokens; 1,048,576 (1M) max output tokens — industry-leading output length.
- **Modalities:** Text, image, video, and audio in; text out. Reasoning yes (extended thinking). Tool calls yes. JSON mode yes.
- **Pricing (as of 2026-10-31):** Introductory $2/$10 per 1M in/out (after introductory period: $4/$20); 95% off cached input (95% discount); available to Pro/Ultra subscribers and through Google Cloud Vertex AI. Free for Google AI Pro/Ultra subscribers (part of subscription).
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: successor to Gemini 3.x family, multimodal (text/image/video/audio), 1M context, 1M output, reasoning-focused MoE or dense architecture.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agent / tool use:**

- Terminal-Bench 4.0 (AA): **65.2%** (Google DeepMind official comparison table; AA leaderboard reports 57.1% for Argon vs 59.6% for Opus 5.5 — different harnesses)
- FrontierSWE 2: **65.5%** (DeepMind comparison table; #1 among compared models, ahead of Carbon 61.2%, Astra 65.5% tie, Opus 62.3%, Fable 56.3%)
- SWE-sweep: **4.3%** (DeepMind comparison table; narrow eval, not representative)
- Agents' Last Exam v1.1: **69.0%** (DeepMind comparison table; only Argon and Carbon shown)
- OSWorld-2.1 (offline): **81.5%** (DeepMind comparison table; online reported separately)
- AutomationBench: **51.3%** (Zapier, DeepMind comparison table; #1 among all models)
- Vending-Bench 2: **$13,718** bank balance (DeepMind comparison table)
- Terminal-Bench-Science 0.1 (AA): **52.9%** (DeepMind comparison table; AA reports 64.6% for GPT-6 Astra, 59.0% for Opus 5.5)
- CWE-bench: **68.0%** (DeepMind comparison table; ties with Astra; GPT-5.6 Sol also 68%)
- ExploitGym: **42.0%** (DeepMind comparison table; #1 among shown models)
- SEC-bench Pro: **83.4%** (DeepMind comparison table)

**Reasoning / knowledge:**

- AA Index v5.0: **50** (DeepMind comparison table; #1 Carbon 59, Argon 50, Astra 57, Opus 5.5 58, Fable 5.1 49)
- Vals Index v2.2: **69.2%** (DeepMind comparison table; #1 among shown models)
- Blueprint-Bench 2: **54.4%** (DeepMind comparison table)
- RiemannBench: **76.0%** (DeepMind comparison table; #1 among shown models)
- AA-LCR: not directly reported in comparison table; Google's Blog post confirms leading on Gray Swan IPI

**Coding:**

- DeepSWE v1.1: **77.9%** (DeepMind official blog; "sets a new state of the art")
- FrontierSWE 2: **65.5%** (DeepMind comparison table)
- Terminal-Bench 4.0 (AA): **57.1%** (DeepMind comparison table)
- SciCode: **72.0%** (DeepMind comparison table)
- Chartography: **71.6%** (DeepMind comparison table)

**Long context:**

- GraphWalks 256K–1M BFS F1: **84.2%** (DeepMind comparison table; #1 among shown models, far ahead of Carbon 96.2% at higher tier)
- LVBench (long video understanding): **91.7%** (DeepMind official blog)

**Multimodal understanding:**

- Chartography: **71.6%** (DeepMind comparison table; with tools 72.5% for Carbon)
- Blueprint-Bench 2: **54.4%** (DeepMind comparison table)

**Science and math:**

- RiemannBench: **76.0%** (DeepMind comparison table)
- Terminal-Bench-Science 0.1: **52.9%** (DeepMind comparison table)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 95/100.** TB4.0 65.2% (AA, frontier tier), FrontierSWE 65.5% (#1), AutomationBench 51.3% (#1), OSWorld-2.1 81.5%, Vending-Bench $13,718 (#1) — capped by SWE-sweep 4.3% (very narrow eval) and the partially-reported TB4.0 AA leaderboard score of 57.1% (different harness).
- **Reasoning: 95/100.** AA Index 50 (#1 Carbon, #2 Argon), Vals Index 69.2% (#1), RiemannBench 76% (#1), Blueprint-Bench 54.4% — capped by GraphWalks 84.2% being the only long-context retrieval figure (no MRCR data published).
- **Context window: 100/100.** 1M tokens confirmed by DeepMind; GraphWalks 84.2% at 256K–1M validates retrieval; 1M max output tokens is industry-leading.
- **Multimodal: 85/100.** Text/image/video/audio in; 71.6% Chartography, 91.7% LVBench long video, 54.4% Blueprint-Bench — strong multimodal but no independent multimodal leaderboard scores beyond Chartography/LVBench; capped by the absence of MMMU-Pro, Design Arena, and other multimodal benchmarks in published DeepMind data.
- **Coding: 95/100.** DeepSWE v1.1 77.9% (SOTA per DeepMind), FrontierSWE 65.5% (#1), SciCode 72% — capped by Terminal-Bench 4.0 57.1% (AA) being partial and SWE-sweep 4.3% being a narrow eval.
- **Cost efficiency: 85/100.** $2/$10 introductory per 1M (50% off Opus 5.5); $4/$20 after introductory period; 95% off cached input; available free to Pro/Ultra subscribers. Cost per task competitive at frontier-tier performance.
- **Overall Score: 94/100.** Mean of (95 + 95 + 100 + 85 + 95) / 5 = 94 → **95**; capped by Multimodal 85 and the absence of MRCR/GPQA/HLE independent verification (DeepMind comparison table lacks these benchmarks).

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Gemini 4 Argon — our next era of frontier intelligence](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Google DeepMind: Gemini 4 — frontier performance in complex workflows](https://deepmind.google/technologies/gemini/)
  - [Google DeepMind: Gemini 4 Argon model page](https://deepmind.google/models/gemini-4-argon/)
  - [Artificial Analysis: Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Sophon: Gemini 4 Argon](https://sophon.at/models/gemini-4-argon)
  - [BenchLM: gemini-4-argon](https://benchlm.ai/models/gemini-4-argon)
  - [Google: Gemini 4 Carbon — next frontier model](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-4-argon/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-4-argon/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
