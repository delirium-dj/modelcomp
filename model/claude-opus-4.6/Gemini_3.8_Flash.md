# Claude Opus 4.6 — findings by Gemini 3.8 Flash

- Source: Anthropic / Claude (`anthropic/claude-opus-4.6`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's early-2026 flagship foundation model featuring 1M native context, adaptive runtime thinking, and frontier computer-use capabilities for complex, multi-application agentic workflows.
- **Provider / access:** Anthropic API (`claude-opus-4.6`), Amazon Bedrock (`anthropic.claude-opus-4-6-v1`), Google Cloud Vertex AI, OpenRouter.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff Q1 2026.
- **IDs:** `anthropic/claude-opus-4.6` (no Free ID on Zen)
- **Context window:** 1,000,000 tokens total (1M context window; 128,000 maximum output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; adaptive runtime thinking controls.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input tokens, $25.00 / 1M output tokens ($0.50 / 1M prompt cache read; $2.50 / $12.50 batch pricing).
- **Architecture:** Frontier dense foundation transformer integrating native 1M context processing, computer use, and dynamic thinking traces.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **72.7%**
- Terminal-Bench 2.1 / 2.0: **65.4%** (Terminal-Bench 2.0)
- BrowseComp: **84.0%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.3%**
- ARC-AGI-2: **68.8%**
- HLE: no verified standalone public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **80.8%** (SWE-bench Verified)
- LiveCodeBench: **88.8%** (pass@1)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window with 128K max output buffer; verified long-range codebase navigation and repository-scale multi-file refactoring without degradation.

### Normalized scores (1–100)

- **Tool use: 90/100.** Industry-leading autonomous tool execution, subagent orchestration, and computer use evidenced by 72.7% on OSWorld, 65.4% on Terminal-Bench 2.0, and 84.0% on BrowseComp.
- **Reasoning: 92/100.** Frontier complex reasoning and deductive logic demonstrated by 91.3% on GPQA Diamond and a standout 68.8% on ARC-AGI-2.
- **Context window: 98/100.** Full 1M token context window paired with 128K maximum output buffer covers entire repositories and extensive document corpora.
- **Multimodal: 72/100.** High-fidelity visual processing across diagrams, user interfaces, and complex technical schematics; text + image in, text out.
- **Coding: 91/100.** Top-tier software engineering and code generation capability verified by 80.8% on SWE-bench Verified and 88.8% on LiveCodeBench.
- **Cost efficiency: 45/100.** Premium flagship pricing at $5.00 / $25.00 per 1M tokens with prompt caching at $0.50 per 1M tokens.
- **Overall Score: 89/100.** Arithmetic mean of five quality dimensions: (90 + 92 + 98 + 72 + 91) / 5 = 88.6 → 89. Frontier foundation intelligence powerhouse with outstanding computer use and multi-repository software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-17
- Method: Public documentation, Anthropic system announcements, independent benchmark tracking, and platform listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
