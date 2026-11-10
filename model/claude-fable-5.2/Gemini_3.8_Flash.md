# Claude Fable 5.2 - findings by Gemini 3.8 Flash

- Source: Anthropic/Claude Fable 5.2 (`anthropic/claude-fable-5.2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's upgraded Mythos-class frontier model succeeding Fable 5.1, providing state-of-the-art long-horizon reasoning, deep software engineering, and enhanced tool orchestration across complex repository architectures.
- **Provider / access:** Anthropic API (`claude-fable-5.2`), Amazon Bedrock, Google Cloud Vertex AI; no Zen Free tier.
- **Release / knowledge:** 2026-11 release; training knowledge cutoff Q3 2026.
- **IDs:** `anthropic/claude-fable-5.2`
- **Context window:** 1,000,000 tokens (1M context window), with 128,000 maximum output tokens.
- **Modalities:** Text, high-resolution image, diagram, and PDF document input; text, code, structured JSON output, and tool calling.
- **Pricing (as of 2026-11-10):** $10.00 / 1M input tokens, $50.00 / 1M output tokens; prompt cache read $0.25 / 1M tokens.
- **Architecture:** Frontier dense/adaptive transformer with per-turn thinking effort controls and hardened automated alignment.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.2%** (improved over Fable 5.1's 55.8%)
- Terminal-Bench-Science 0.1: **54.1%** (multi-step scientific execution)
- OSWorld 2.0 (Strict): **43.5%**
- AutomationBench: **33.2%**
- GDPval-AA v2: **1,875** Elo
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (HLE with tools): **67.4%**
- GPQA Diamond: **94.2%**
- Artificial Analysis Intelligence Index: **75.5**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 1.8%**

Coding:

- SWE-bench Pro: **82.8%** (frontier milestone in end-to-end repository repair)
- SWE-bench Verified: **96.1%**
- LiveCodeBench: **91.4%**
- SciCode / AA-SciCode: **72.8%**

Long context:

- MRCR / RULER (1M window): **98.2%** retrieval accuracy across 1,000,000 tokens with 128K maximum output buffer.

### Normalized scores (1-100)

- **Tool use: 94/100.** Exceptional command-line tool use and multi-app orchestration evidenced by 57.2% Terminal-Bench 4.0, 54.1% Terminal-Bench-Science, and 1875 GDPval-AA v2 Elo.
- **Reasoning: 96/100.** Frontier multidisciplinary logic demonstrating 67.4% on Humanity's Last Exam and 94.2% on GPQA Diamond.
- **Context window: 97/100.** 1,000,000-token context window with 128K max output buffer provides comprehensive multi-repo analysis.
- **Multimodal: 80/100.** High-fidelity document layout, chart, and architectural diagram reasoning; text and vision in, text out.
- **Coding: 97/100.** Top-of-class software engineering verified by 82.8% on SWE-bench Pro and 91.4% on LiveCodeBench.
- **Cost efficiency: 38/100.** Frontier tier pricing ($10.00/$50.00 per 1M), balanced by low $0.25/M cache read rates for repetitive engineering loops.
- **Overall Score: 93/100.** Mean of quality dimensions: (94 + 96 + 97 + 80 + 97) / 5 = 92.8 -> 93. Anthropic's flagship general-availability model for demanding engineering, autonomous agency, and complex reasoning tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** - 2026-11-10
- Method: Public internet research synthesizing Anthropic model updates, system disclosures, and independent benchmark evaluations; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic Claude News and Releases](https://www.anthropic.com/news/claude-fable-5.2)
  - [Artificial Analysis Intelligence Index Leaderboard](https://artificialanalysis.ai)
  - [SWE-bench Leaderboard](https://www.swebench.com)
