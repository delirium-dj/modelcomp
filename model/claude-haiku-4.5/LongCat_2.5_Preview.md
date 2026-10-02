# Claude Haiku 4.5 — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude Haiku 4.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's lightweight model optimized for speed and efficiency with strong coding and agent performance. Matches Sonnet 4 coding performance at one-third the cost and more than twice the speed. First Haiku model with extended thinking.
- **Provider / access:** Anthropic API — `claude-haiku-4-5`. Also available via AWS Bedrock, Azure, Google Cloud Vertex AI.
- **Release / knowledge:** 2025-10-15 release; knowledge cutoff February 2025.
- **IDs:** `anthropic/claude-haiku-4-5`
- **Context window:** 200K tokens; 64K max output.
- **Modalities:** text, image, file input; text output; reasoning yes (extended thinking); tool calling yes; computer use yes; PDF input.
- **Pricing (as of 2026-10-02):** $1.00/1M input, $5.00/1M output, $0.10/1M cache read, $1.25/1M cache write.
- **Architecture:** Proprietary. Extended thinking support. 180 tok/s output speed, 120ms first token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **27%** (opper.ai / Artificial Analysis)
- τ²-Bench Telecom: **32%** (opper.ai / Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **43.8%** (benchlm.ai)
- JobBench: **16.0%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **65%** (opper.ai); **72.4%** (serenitiesai.com)
- AIME 2025: **39%** (opper.ai)
- HLE: **4%** (opper.ai)
- MMLU-Pro: **80%** (opper.ai); **78.7%** (Vals, benchlm.ai)
- MATH: **70.0%** (serenitiesai.com)
- GSM8K: **88.0%** (serenitiesai.com)

Coding:

- SWE-bench Verified: **73.3%** (benchlm.ai, opper.ai)
- LiveCodeBench: **51%** (opper.ai); **41.2%** (Vals, benchlm.ai)
- VulcanBench v3: **76.2%** (benchlm.ai)

Long context:

- Long-context reasoning: **50%** (opper.ai)
- LCR: **49.7%** (Kilo Code)

Multimodal:

- Text, image, and file input supported. Computer use capability. No specific multimodal benchmark scores found.

### Normalized scores (1–100)

- **Tool use: 35/100.** Terminal-Bench Hard 27%, τ²-Bench Telecom 32%, JobBench 16.0%. Weak agentic tool use for a model of this generation. Capped by JobBench and Terminal-Bench Hard scores.
- **Reasoning: 45/100.** GPQA Diamond 65%, AIME 2025 39%, HLE 4%. Moderate reasoning; HLE is very low. Capped by HLE and AIME scores.
- **Context window: 72/100.** 200K token context window. Standard for its generation. Long-context reasoning 50% is moderate.
- **Multimodal: 55/100.** Text, image, and file input. Computer use capability. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 55/100.** SWE-bench Verified 73.3%, LiveCodeBench 51%, VulcanBench v3 76.2%. Decent coding for its class but below frontier. Capped by LiveCodeBench.
- **Cost efficiency: 92/100.** $1.00/1M input and $5.00/1M output — very cost-efficient. Among the best value propositions. 180 tok/s output speed.
- **Overall Score: 52/100.** Mean of five quality dims (35+45+72+55+55)/5 = 52.4 → 52. Best fit: high-volume, latency-sensitive tasks like chat assistants, customer service agents, and pair programming where speed and cost matter more than frontier performance.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
