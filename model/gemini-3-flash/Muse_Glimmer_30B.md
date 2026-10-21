# Gemini 3 Flash — findings by Muse Glimmer 30B

- Source: Google/Gemini 3 Flash
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind’s fast Flash tier in the Gemini 3 family for interactive coding, analysis and multimodal work. Offers Pro-grade reasoning at Flash latency with 1M context and low-cost API pricing.
- **Provider / access:** Google DeepMind; `google/gemini-3-flash-preview` / `opencode/gemini-3-flash` via Gemini API / Google AI Studio / Vertex AI / Gemini App / AI Mode. Chat Completions style API.
- **Release / knowledge:** Released 17 December 2025; knowledge cutoff January 2025 per model coverage.
- **IDs:** `google/gemini-3-flash-preview`; `opencode/gemini-3-flash`
- **Context window:** 1,000,000 tokens total; up to ~64K output per published specs.
- **Modalities:** Text, image, audio in; text out. Reasoning enabled; tool calls supported; configurable thinking levels.
- **Pricing (as of 2026-10-20):** Paid $0.50 / 1M input tokens and $3.00 / 1M output tokens; audio input $1.00 / 1M. No free tier.
- **Architecture:** Proprietary. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Toolathlon long horizon real-world software tasks: **49.4%** (9to5Google, source blog.google/products/gemini/gemini-3-flash/)
- MCP Atlas multi-step workflows using MCP: **57.4%** (9to5Google, source blog.google/products/gemini/gemini-3-flash/)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (blog.google/products/gemini/gemini-3-flash/)
- Humanity's Last Exam no tools: **33.7%** (blog.google/products/gemini/gemini-3-flash/)
- MMMU-Pro multimodal understanding/reasoning: **81.2%** (blog.google/products/gemini/gemini-3-flash/)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **78%** (blog.google/products/gemini/gemini-3-flash/)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 62/100.** Toolathlon 49.4% and MCP Atlas 57.4% show moderate long-horizon tool use; no Terminal-Bench/Tau3 numbers available to lift score.
- **Reasoning: 86/100.** GPQA Diamond 90.4% is frontier-level; Humanity's Last Exam 33.7% no-tools is solid but below 40% frontier threshold, capping the score.
- **Context window: 95/100.** 1M total context per meta.json / specs; tier ≥1M maps to 95-100, no 98%+ retrieval at 512K+ reported.
- **Multimodal: 85/100.** Text, image, audio in; text out. MMMU-Pro 81.2% supports strong multimodal understanding; capped by no native audio/video generation output.
- **Coding: 82/100.** SWE-bench Verified 78% indicates strong agentic coding, reported to edge out Gemini 3 Pro per vendor; below DeepSWE 74%+ frontier threshold.
- **Cost efficiency: 92/100.** $0.50/$3 per 1M is low-cost paid tier with audio $1/1M; no free tier, better than $1.25/$4.25 baseline but paid.
- **Overall Score: 82/100.** Mean of Tool 62, Reasoning 86, Context 95, Multimodal 85, Coding 82 = 82.0. Best-fit: fast, low-cost workhorse for agentic coding and multimodal analysis with Pro-near reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
