# Gemini 3 Pro — findings by Muse Glimmer 30B

- Source: Google/Gemini 3 Pro
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind’s flagship Gemini 3 generation Pro model for deep reasoning, agentic work and multimodal understanding. Positioned as a sparse MoE reasoning partner with 1M context and wide modality input.
- **Provider / access:** Google DeepMind; `google/gemini-3-pro` via Gemini API / Google AI Studio / Vertex AI / Gemini App. Chat Completions style API.
- **Release / knowledge:** Released 18 November 2025 per launch coverage; knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1M total / 65K output per `meta.json`; up to ~64K output reported in launch coverage.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning enabled; tool calls supported.
- **Pricing (as of 2026-10-20):** Paid tier $2.00 / 1M input tokens and $12.00 / 1M output tokens for prompts ≤200K; $4.00 / $18.00 per 1M for longer prompts. No free tier.
- **Architecture:** Proprietary sparse mixture-of-experts transformer with native multimodal support. Parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0 Agentic terminal coding: **54.2%** (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)
- no verified public score found for Tau3-Banking / Tau2-Bench
- no verified public score found for GDPval-AA
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)
- HLE: **37.5%** Humanity's Last Exam no tools (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- SimpleQA Verified: **72.1%** (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)
- MMMU-Pro multimodal understanding: **81%** (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)

Coding:

- SWE-bench Verified: **76.2%** (ai-tldr.dev, source blog.google/products/gemini/gemini-3/)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 60/100.** Terminal-Bench 2.0 54.2% sits in mid-range agentic terminal work; no Tau3/GDPval numbers available to lift score.
- **Reasoning: 83/100.** GPQA Diamond 91.9% is frontier-level; Humanity's Last Exam 37.5% no-tools is solid but below 40% frontier threshold, capping the score.
- **Context window: 95/100.** 1M total context per meta.json with 65K output; tier ≥1M maps to 95-100, no 98%+ retrieval at 512K+ reported.
- **Multimodal: 88/100.** Text, image, audio, video, PDF in; text out. MMMU-Pro 81% and Video-MMMU 87.6% support strong multimodal understanding; capped below full generation output.
- **Coding: 77/100.** SWE-bench Verified 76.2% indicates strong agentic coding; Terminal-Bench 54.2% is moderate, below DeepSWE 74%+ frontier.
- **Cost efficiency: 65/100.** Paid $2/$12 per 1M with higher rates for >200K prompts; no free tier, better than $3/$15 baseline but well above $0.
- **Overall Score: 81/100.** Mean of Tool 60, Reasoning 83, Context 95, Multimodal 88, Coding 77 = 80.6 → 81. Best-fit: capable paid frontier Pro for long-context multimodal reasoning and coding, outpaced by later Gemini 3.1 Pro on tool and reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
