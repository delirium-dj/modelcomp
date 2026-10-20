# Gemini 4 Argon — findings by Muse Glimmer 30B

- Source: Google DeepMind (`opencode/gemini-4-argon`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's 1M-output frontier model for long-horizon coding and enterprise research; DeepSWE 77.9% and Vals Index 68.9% both #1, gated launch.
- **Provider / access:** Google DeepMind; OpenCode Zen `opencode/gemini-4-argon` (Chat Completions). Also accessible via Gemini App / AI Studio / Google Antigravity for Pro/Ultra subscribers.
- **Release / knowledge:** no verified public release date found; launch referenced as gated 2026.
- **IDs:** `opencode/gemini-4-argon`; `google/gemini-4-argon` (vendor).
- **Context window:** 1M total (262K output; 1M via continuation) — per `meta.json`; GraphWalks retrieval verified up to 1M.
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls supported.
- **Pricing (as of 2026-10-20):** Intro $2.00/$10.00 per 1M in/out; Standard $4.00/$20.00 per 1M in/out; Cached input $0.10 per 1M. No free ID on Zen. Gated availability.
- **Architecture:** proprietary; total/active params not publicly disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- AutomationBench Score: **51.3%** (deepmind.google/models/gemini-4-argon performance table)
- Terminal-bench 4.0: **57.4%** (deepmind.google/models/gemini-4-argon performance table)
- OSWorld-2.0 Offline subset Partial score: **69.2%** (deepmind.google/models/gemini-4-argon performance table)
- Agent's Last Exam Pass rate: **39.5%** (deepmind.google/models/gemini-4-argon performance table)

Reasoning / knowledge:

- Vals Index: **68.9%** (deepmind.google/models/gemini-4-argon performance table) — #1 vs GPT-6 Astra / Claude Fable 5.1 / Claude Opus 5.5
- LABBench 2: **88.8%** (deepmind.google/models/gemini-4-argon performance table)
- RiemannBench: **76.0%** (deepmind.google/models/gemini-4-argon performance table)
- Vals Finance Agent v2: **65.4%** (deepmind.google/models/gemini-4-argon performance table)
- Harvey's Legal Agent Benchmark: **19.6%** (deepmind.google/models/gemini-4-argon performance table)

Coding:

- DeepSWE v1.1: **77.9%** (deepmind.google/models/gemini-4-argon performance table) — #1
- FrontierSWE v2: **55.0%** (deepmind.google/models/gemini-4-argon performance table)
- Vibe Code Bench: **91.9%** (deepmind.google/models/gemini-4-argon performance table)
- Terminal-Bench Science 0.1: **57.6%** (deepmind.google/models/gemini-4-argon performance table)
- PostTrainBench: **45.3%** (deepmind.google/models/gemini-4-argon performance table)
- CWE-bench v1: **68.0%** (deepmind.google/models/gemini-4-argon performance table) — tied #1

Long context:

- GraphWalks up to 128k BFS F1: **99.7%** (deepmind.google/models/gemini-4-argon performance table)
- GraphWalks 256k to 1M BFS F1: **84.2%** (deepmind.google/models/gemini-4-argon performance table)

Multimodal understanding:

- Chartography: **71.6%** (deepmind.google/models/gemini-4-argon performance table)
- LVBench: **91.7%** (deepmind.google/models/gemini-4-argon performance table)

### Normalized scores (1–100)

> Derive each from the raw numbers above using methodology in `model-comparison.md`.

- **Tool use: 79/100.** AutomationBench 51.3% and Terminal-bench 4.0 57.4% place it in mid-frontier tool use; OSWorld 69.2% supports strong agentic grounding. Capped by Agent's Last Exam 39.5%.
- **Reasoning: 85/100.** Vals Index 68.9% #1 and LABBench 2 88.8% show strong knowledge work; RiemannBench 76.0% adds math. Legal agent 19.6% pulls down upper bound.
- **Context window: 96/100.** 1M total with verified GraphWalks 84.2% F1 at 256k-1M and 99.7% at 128k. Score reflects tier ≥1M with high retrieval.
- **Multimodal: 85/100.** Text/image/video in, text out per meta.json; Chartography 71.6% and LVBench 91.7% support strong visual understanding. No audio in/out reported.
- **Coding: 88/100.** DeepSWE v1.1 77.9% #1 and Vibe Code Bench 91.9% are frontier; FrontierSWE v2 55.0% and PostTrainBench 45.3% cap the mean.
- **Cost efficiency: 50/100.** Intro $2/$10 → $4/$20 per 1M with no free tier; gated access further limits effective efficiency.
- **Overall Score: 87/100.** Mean of Tool 79, Reasoning 85, Context 96, Multimodal 85, Coding 88 = 86.6 → 87. Best-fit for long-horizon coding/agentic research with massive output window.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
