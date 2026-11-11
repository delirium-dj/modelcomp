# Muse Spark 1.3 — findings by Qwen 4 Max

- Source: Meta/muse-spark-1.3
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' frontier reasoning model for long-horizon coding and agentic work (fourth Muse Spark release in five months). One model across all tier names — Contributor/Free ($0, training-data consent) and Standard/Max (paid, `reasoning_effort` max) share the same weights; xhigh/max are reasoning budgets, not separate models.
- **Provider / access:** Meta Model API (`muse-spark-1.3`) and Muse Code from launch day; OpenCode Zen `opencode/muse-spark-1.3` (Contributor/Free lane). Chat Completions-style API; xhigh generally available, max in limited partner preview pending safety testing.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff not stated in sources read.
- **IDs:** `meta/muse-spark-1.3`, `opencode/muse-spark-1.3` (Free/Contributor ID exists on Zen).
- **Context window:** 1,000,000 tokens (vendor-stated; actively managed — remembers actions and retrieves from much earlier in the thread, per Meta's Muse Spark line documentation). Max output not stated in sources read.
- **Modalities:** Text, image, video in; text out. Reasoning: yes (xhigh/max effort budgets). Tool calls: yes — agentic-first behavior (clarifying questions, asks for help when stuck, confirms before consequential/irreversible actions). JSON mode not confirmed.
- **Pricing (as of 2026-11-11):** Standard $1.25 in / $4.25 out per 1M, cache hits $0.15/M (unchanged from 1.2); Contributor/Free tier $0 in exchange for Meta training-data consent; max-variant pricing not yet published. AA cost per Intelligence Index task: $0.55 (xhigh) — lowest of any model scoring ≥59 (Grok 4.6 high $0.94, GPT-5.6 Sol max $0.95); up from 1.2's $0.40 (~57% more input tokens per agentic task).
- **Architecture:** Proprietary (parameters undisclosed); open-weights Muse Spark release on Meta's roadmap (Muse Glimmer 30B, distilled from Muse Spark, shipped open in Aug 2026). Stronger prompt-injection resistance and irreversible-action calibration vs 1.2 (Meta-reported).

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench Banking (**AA agentic eval**): **47% (xhigh) / 52% (max)** — max is the #1 score among all models (Artificial Analysis, 2026-09-02; up from 1.2's 35%)
- Terminal-Bench 2.1: **85% (xhigh) / 86% (max)** (AA; 1.2 was 80%)
- GDPval-AA v2 (**knowledge work Elo**): **1709 (xhigh) / 1754 (max)** (AA; 1.2 was 1615)
- Tool-call efficiency: ~20% fewer tool calls and ~25% fewer tokens vs 1.2 in Meta engineer comparisons (vendor-reported)
- Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61 (xhigh) / 62 (max)** (AA, Sep 2026 snapshot; ties GPT-5.6 Sol max and Grok 4.6 high at 61; trails Claude Fable 5.1 66 and Opus 5 63; 1.2 was 57, 1.1 was 53)
- GPQA Diamond: **94%** (both variants; AA; 1.2 was 90%)
- CritPt (**scientific reasoning**): **26% (xhigh) / ~25% (max)** (AA; 1.2 was 18%)
- AA-LCR: **79%** — regression from 1.2's 83% (AA)
- AA-Omniscience Accuracy: fell 3 pts (xhigh) / 1 pt (max) vs 1.2 — higher abstention rate, lower hallucination rate (AA; calibrated "I don't know" behavior)
- HLE: no verified public score found

Coding:

- DeepSWE 1.1 (**long-horizon real-world SWE**): **75.4%** (Meta release coverage, Flowtivity; trails Gemini 4 Argon's 77.9%)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Qualitative (Meta): fewer unnecessary turns, less verbose, cleaner coding style vs 1.2

Long context:

- MRCR (**long-context retrieval**): **98.5%** at the 1M window (Meta release coverage, Flowtivity) — near-perfect retrieval

### Normalized scores (1–100)

- **Tool use: 95/100.** #1 Tau3-Bench Banking (52% max), Terminal-Bench 2.1 85–86%, GDPval-AA v2 1709–1754 Elo, and purpose-built long-horizon agent behavior (clarify/ask-help/confirm); capped by GDPval trailing Opus 5.5's 1846 (v2.1) and no Tau2 evidence.
- **Reasoning: 92/100.** AA Index 61/62 (top-4, tied with GPT-5.6 Sol max / Grok 4.6 high), GPQA Diamond 94%, CritPt +8 pts; capped by the AA-LCR regression (79%) and omniscience-accuracy drop, and the gap to Fable 5.1 (66).
- **Context window: 100/100.** 1M tokens with 98.5% MRCR retrieval and active context management — top tier on both capacity and measured long-context recall.
- **Multimodal: 85/100.** Text + image + video input with strong document/chart workflow support; text out only; capped by no confirmed audio input and no image/audio output.
- **Coding: 94/100.** DeepSWE 1.1 75.4% plus Terminal-Bench 2.1 85% and measured turn/token efficiency gains; capped by DeepSWE trailing Argon (77.9%) and no public SWE-bench Verified figure.
- **Cost efficiency: 100/100.** $0 Contributor/Free lane exists (caveat: Meta training-data consent) and the paid tier is the cheapest frontier-class model per task ($0.55, $1.25/$4.25 with $0.15 cache hits); note cost per task rose vs 1.2 ($0.40).
- **Overall Score: 93.2/100.** Mean of the five quality dims (95+92+100+85+94)/5 = 93.2. Best-fit: frontier-tier long-horizon coding and agentic workflows at the lowest cost per task — the value pick at the frontier's edge.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Artificial Analysis figures via independent launch coverage + vendor statements); scores are normalized 1–100 interpretations, not official vendor scores. Regressions (AA-LCR, Omniscience) are reported alongside the headline gains; tier names resolve to one model per the repo's alias-family roster.
- Reference URLs:
  - [Muse Spark 1.3: Meta's Frontier Coding Model Explained — Eigent](https://www.eigent.ai/blog/muse-spark-1-3-meta-frontier-model)
  - [Meta Muse Spark 1.3 Benchmarks: What the Release Shows — Flowtivity](https://flowtivity.ai/blog/meta-muse-spark-1-3-benchmarks-ai-agents/)
  - [Muse Spark 1.3: Features, Benchmarks, and Pricing — DataCamp](https://www.datacamp.com/blog/muse-spark-1-3)
  - [Introducing Muse Spark — Meta AI blog (Model API line)](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.