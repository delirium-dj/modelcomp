# Claude Fable 5.1 — findings by Gemini 2.5 (google/gemini-2.5)

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Paid / Standard API Tier)
- **Short description:** Advanced reasoning and agentic model by Anthropic optimized for long-running agentic tasks, scientific research, and complex coding workflows. Variant ID: `claude-fable-5-1`.
- **Provider / access:** Anthropic API (`claude-fable-5-1`), AWS Bedrock, Google Vertex, Azure, and Microsoft Foundry (`anthropic/claude-fable-5-1`). Supports Chat Completions / Anthropic Messages API with adaptive thinking (`effort` parameter).
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1M tokens total input context, 128K max output tokens (verified via Anthropic system card and documentation).
- **Modalities:** Text/image in, text out; reasoning (adaptive thinking enabled); tool calls (parallel/sequential function calling); structured output/JSON mode.
- **Pricing (as of 2026-09-30):** $10.00 / 1M input tokens, $50.00 / 1M output tokens, $0.25 / 1M cache read tokens; standard paid tier pricing with 30-day data retention (no zero data retention by default).
- **Architecture:** Proprietary transformer architecture with adaptive thinking depth control and prompt caching infrastructure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (Vals AI run / BenchLM)
- Tau3-Banking / Tau2-Bench: **79.6%** (Artificial Analysis / BenchLM auto-routing)
- GDPval-AA: **1853** (Anthropic system card / BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** (Toolathlon-Verified / BenchLM)
  Reasoning / knowledge:
- GPQA Diamond: **93.7%** (Artificial Analysis)
- HLE: **65.0%** (Humanity's Last Exam with tools / Anthropic system card)
- LCR / MLCR: **85.3%** (Artificial Analysis AA-LCR)
- CritPt: **29.7%** (Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **53.4 / #3 of 210** (Artificial Analysis / BenchLM)
- Omniscience Accuracy / Hallucination Rate: **67.2% / 27.4%** (Artificial Analysis AA-Omniscience Accuracy / Non-Hallucination Rate)
  Coding:
- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro / Anthropic system card)
- LiveCodeBench: **90.5%** (Vals AI run / BenchLM)
- SciCode / AA-SciCode: **63.1%** (Artificial Analysis)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **81.6** (Artificial Analysis Coding Index)
  Long context:
- 1M token capacity with 128K max output, supporting full-context window utilization at standard per-token pricing.

### Normalized scores (1-100)

- **Tool use: 95/100.** Exceptional agentic workflow scores including Terminal-Bench 2.1 at 85.0% and GDPval-AA at 1853, placing it securely in the top frontier tier for tool use and multi-step execution.
- **Reasoning: 95/100.** Top-tier reasoning demonstrated by 93.7% on GPQA Diamond and 65.0% on Humanity's Last Exam (HLE), backed by an Intelligence Index score of 53.4.
- **Context window: 95/100.** Verified 1,000,000 token total context window with full-context pricing support, meeting the tier requirement for >=1M.
- **Multimodal: 65/100.** Supports multimodal text and image input processing with text-based output generation.
- **Coding: 94/100.** Outstanding coding capability verified by 81.2% on SWE-bench Pro, 90.5% on LiveCodeBench, and an Artificial Analysis Coding Index of 81.6.
- **Cost efficiency: 60/100.** Priced at $10.00 / 1M input tokens and $50.00 / 1M output tokens (with reduced cache read pricing of $0.25), mapped to the standard $3/$15 to high-tier cost bracket.
- **Overall Score: 88.8/100.** Mean of five non-cost dimensions (95, 95, 95, 65, 94); industry-leading reasoning and autonomous coding model tailored for complex enterprise and agentic loops.

---

## Signature

- Provided by: **Gemini 2.5 (google/gemini-2.5)** — 2026-09-30
- Method: Public internet research from official Anthropic documentation, system cards, BenchLM, and Artificial Analysis metrics; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
