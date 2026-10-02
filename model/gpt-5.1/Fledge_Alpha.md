# GPT-5.1 — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 agentic/coding flagship revision of GPT-5, with Instant and Thinking variants; superseded by GPT-5.2/5.4 and retired from ChatGPT March 2026.
- **Provider / access:** OpenAI API, Azure (`gpt-5.1-2025-11-13`); Chat Completions and Responses.
- **Release / knowledge:** 2025-11-12/13; knowledge cutoff 2024-09-30.
- **IDs:** `openai/gpt-5.1`, `gpt-5.1-2025-11-13`
- **Context window:** 400,000 tokens (272K on some Azure tiers), 128K max output.
- **Modalities:** text + image in; text out; reasoning effort none→high; tool calls, JSON mode.
- **Pricing (as of 2026-10-02):** $1.25/M input, $0.125/M cached input, $10/M output.
- **Architecture:** proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ-bench Airline (Tau2Bench): **67%** (Vals AI via docsbot comparison)
- τ-bench Retail: **77.9%**, Telecom: **95.6%** (docsbot/Vals)
- GDPval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (Epoch AI, launch config); 87.6% at high effort Feb 2026 re-run
- Humanity's Last Exam: **23.7–26.5%** (Scale AI / CAIS)
- AIME 2025: **94.0%** (launch reports)
- HLE (AA default): **28.5%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **76.3%** (Epoch AI / SWE-bench)
- SWE-bench Pro: **50.8%** (public subset)
- LiveCodeBench: **86.5–86.8%** (Vals AI)
- AA Coding Agent Index: not published for this model

Long context:

- OpenAI MRCR2 Needle 256k: **86.8%** (reported); GraphWalks BFS 128k matched by GPT-5.

### Normalized scores (1–100)

- **Tool use: 80/100.** τ-bench Retail 77.9% / Telecom 95.6% and Airline 67% show solid tool-use; no GDPval number caps confidence.
- **Reasoning: 75/100.** GPQA Diamond 88.1% and AIME 94% are strong for its generation; HLE ~24–28% is mid-tier.
- **Context window: 70/100.** 400K tokens is below the 1M-class frontier; 128K max output is standard.
- **Multimodal: 65/100.** Text + image input, text-only output; no audio/video native I/O.
- **Coding: 80/100.** SWE-bench Verified 76.3% and LiveCodeBench 86.8% were second-tier at launch, now superseded.
- **Cost efficiency: 80/100.** $1.25/$10 with 90% cache discount is reasonable, though newer GPT-6 Luna undercuts it heavily.
- **Overall Score: 74/100.** Mean of the five quality dims; best fit as a legacy 400K-context coding model, now largely superseded.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch materials, Epoch AI, SWE-bench, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
