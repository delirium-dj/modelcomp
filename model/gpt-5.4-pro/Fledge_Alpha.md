# GPT-5.4 Pro — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-reasoning tier of the GPT-5.4 family, released 2026-03-05; proprietary frontier reasoner.
- **Provider / access:** OpenAI API / Azure (`openai/gpt-5.4-pro-20260305`), Responses API and Chat Completions.
- **Release / knowledge:** 2026-03-05; knowledge cutoff 2025-08.
- **IDs:** `openai/gpt-5.4-pro-20260305`
- **Context window:** 1,050,000 tokens (922K input, ~125–128K max output).
- **Modalities:** text + image in; text out; reasoning yes; tool calls; no video/audio input.
- **Pricing (as of 2026-10-02):** $30/M input, $180/M output; cached input discounts on selected tiers.
- **Architecture:** proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- Humanity's Last Exam (with tools): **58.7%** (Scale AI / CAIS via DataLearnerAI, VectorWire)
- MultiNRC tool-use style eval: **62.3%** (BenchLeader)
- GDPval-style professional work: no verified public score found for Pro specifically

Reasoning / knowledge:

- GPQA Diamond: **94.4–94.6%** (Epoch AI via BenchLeader/VectorWire)
- Humanity's Last Exam (no tools): **44.3%** (Scale AI / CAIS)
- CritPt: **30.0%** (Artificial Analysis)
- ARC-AGI-1: **94.5%**, ARC-AGI-2: **83.3%** (Epoch AI)

Coding:

- SWE-bench Pro (higher-difficulty subset): **57.7%** for GPT-5.4 base (OpenAI launch page via llm-registry; Pro-specific figure not separately published)
- HumanEval (estimated, aggregator): **93.2%** — provisional, low-confidence source

Long context:

- No verified public MRCR/RULER/GraphWalks number for Pro; 1.05M window is the only long-context evidence.

### Normalized scores (1–100)

- **Tool use: 70/100.** HLE-with-tools 58.7% indicates capable tool-augmented reasoning, but no Terminal-Bench/OSWorld-class agent result is publicly verified for Pro.
- **Reasoning: 88/100.** GPQA Diamond 94.6% and ARC-AGI-2 83.3% are frontier-grade; CritPt 30% marks a hard ceiling on frontier science reasoning.
- **Context window: 95/100.** 1.05M-token window, 125–128K max output, consistent across listings.
- **Multimodal: 65/100.** Text and image input with reasoning; no audio/video I/O, text-only output.
- **Coding: 70/100.** GPT-5.4-family SWE-bench Pro 57.7% and strong HumanEval indicate solid coding, but no verified Pro-specific SWE-bench Verified figure.
- **Cost efficiency: 25/100.** $30/$180 per 1M is among the most expensive tracked models; justified only for maximum-reasoning workloads.
- **Overall Score: 78/100.** Mean of the five quality dims; best fit for highest-stakes reasoning where cost is secondary.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI release materials, Epoch AI, Artificial Analysis, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
