# Claude Opus 5 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship Opus model introducing configurable multi-tier effort controls, 1M context, and industry-leading performance on autonomous repository engineering and ARC-AGI-3.
- **Provider / access:** Anthropic API (`claude-opus-5-20260724`), Amazon Bedrock, Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-07-24 release; knowledge cutoff Q2 2026.
- **IDs:** `anthropic/claude-opus-5` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text, image, and PDF input; text, code, structured JSON, tool-calling output; granular effort parameter controls (Low to Max).
- **Pricing (as of 2026-10-17):** $5.00 / 1M input tokens, $25.00 / 1M output tokens ($0.50 / 1M prompt cache read; $2.50 / $12.50 batch pricing).
- **Architecture:** Frontier dense foundation transformer featuring dynamic reasoning effort controls, native 1M multi-scale attention, and computer use.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (Terminal-Bench 2.1) / **68.9%** (general v2 framework)
- Frontier-Bench: **43.3%** (v0.1 agentic coding)
- OSWorld 2.0: **70.6%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.1%**
- ARC-AGI-3: **30.2%** (public standardized tier)
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **96.0%** (SWE-bench Verified, up to 97% with Mini-SWE-agent wrapper)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window natively supported with 128K max output; robust multi-file project refactoring and long-horizon context retention.

### Normalized scores (1–100)

- **Tool use: 94/100.** Exceptional autonomous agentic execution and computer navigation evidenced by 89.1% on Terminal-Bench 2.1, 70.6% on OSWorld 2.0, and 43.3% on Frontier-Bench v0.1.
- **Reasoning: 95/100.** Frontier scientific and abstract problem solving demonstrated by 94.1% on GPQA Diamond and a breakthrough 30.2% on ARC-AGI-3.
- **Context window: 98/100.** Full 1M token context capacity with 128K output buffer enables continuous autonomous codebase refactoring and analysis.
- **Multimodal: 74/100.** Broad multimodal perception across images, complex schematics, and structured PDF documents; text + image/PDF in, text out.
- **Coding: 95/100.** Landmark software engineering capability verified by 96.0% on SWE-bench Verified and 43.3% on Frontier-Bench v0.1.
- **Cost efficiency: 45/100.** Balanced flagship pricing at $5.00 / $25.00 per 1M tokens with prompt caching ($0.50) delivering near-frontier intelligence at half the cost of research-preview flagships.
- **Overall Score: 91/100.** Arithmetic mean of five quality dimensions: (94 + 95 + 98 + 74 + 95) / 5 = 91.2 → 91. Landmark foundation model delivering exceptional abstract reasoning, long-running agentic persistence, and repository refactoring.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic product release notes, benchmark leaderboards, and developer evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
