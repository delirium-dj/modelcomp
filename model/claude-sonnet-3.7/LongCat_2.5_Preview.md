# Claude Sonnet 3.7 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude Sonnet 3.7
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's flagship Sonnet model released February 2025, featuring hybrid reasoning with thinking mode. First Claude model with extended reasoning capabilities. Superseded by Sonnet 4, 4.5, 4.6, 5, and 5.5.
- **Provider / access:** Anthropic API — `claude-3-7-sonnet-20250219`. Also available via Amazon AWS.
- **Release / knowledge:** 2025-02-24 release.
- **IDs:** `anthropic/claude-3-7-sonnet-20250219`
- **Context window:** 200K tokens; 128K max output.
- **Modalities:** text, image input; text output; reasoning yes (thinking mode); tool calling yes.
- **Pricing (as of 2026-10-02):** $3.00/1M input, $15.00/1M output. AWS Batch: $1.50/1M input, $7.50/1M output.
- **Architecture:** Proprietary. Hybrid reasoning with thinking/non-thinking modes.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **35.2%** (anotherwrapper.com)
- OSWorld: **35.8%** (anotherwrapper.com)
- OSWorld Verified: **35.8%** (anotherwrapper.com)
- tau-bench Retail: **81.2%** (anotherwrapper.com)
- Tau Bench Airline: **58.4%** (anotherwrapper.com)
- The Agent Company: **40.2%** (anotherwrapper.com)

Reasoning / knowledge:

- GPQA Diamond: **78.5%** (anotherwrapper.com)
- GPQA: **84.8%** (anotherwrapper.com)
- AIME 2025: **54.8%** (anotherwrapper.com)
- AIME 2024: **80%** (anotherwrapper.com)
- HLE: **8.0%** (anotherwrapper.com)
- FrontierMath: **3.1%** (anotherwrapper.com)
- MATH 500: **96.2%** (anotherwrapper.com)
- MATH: **91.2%** (anotherwrapper.com)
- MGSM: **92.4%** (anotherwrapper.com)
- MMLU-Pro: **80.7%** (anotherwrapper.com)
- MMMLU: **86.1%** (anotherwrapper.com)

Coding:

- SWE-bench Verified: **70.3%** (anotherwrapper.com)
- LiveCodeBench: **56.7%** (anotherwrapper.com)
- Aider Polyglot: **60.4%** (anotherwrapper.com)

Long context:

- Long-context reasoning: **51.7%** (opper.ai / Artificial Analysis)
- Fiction.liveBench: **34.4%** (anotherwrapper.com)

Multimodal:

- MMMU: **75%** (anotherwrapper.com)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 35.2%, OSWorld 35.8%, tau-bench Retail 81.2%. Moderate agentic tool use; OSWorld is a relative weakness. Capped by OSWorld and Terminal-Bench scores.
- **Reasoning: 60/100.** GPQA Diamond 78.5%, AIME 2025 54.8%, HLE 8.0%. Good GPQA but HLE is very low. FrontierMath 3.1% shows limitation on hardest math. Capped by HLE and FrontierMath.
- **Context window: 72/100.** 200K token context window. Standard for its generation. Long-context reasoning 51.7% is moderate.
- **Multimodal: 60/100.** Text and image input. MMMU 75%. No video or audio input. Solid but not class-leading multimodal understanding.
- **Coding: 60/100.** SWE-bench Verified 70.3%, LiveCodeBench 56.7%, Aider Polyglot 60.4%. Moderate coding performance, superseded by later Sonnet models.
- **Cost efficiency: 60/100.** $3.00/1M input and $15.00/1M output — moderate pricing. AWS Batch offers 50% discount. Same price as Sonnet 4 but lower performance.
- **Overall Score: 61/100.** Mean of five quality dims (55+60+72+60+60)/5 = 61.4 → 61. Best fit: general-purpose reasoning and analysis tasks where its hybrid reasoning and strong instruction following (IFEval 93.2%) are valued.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
