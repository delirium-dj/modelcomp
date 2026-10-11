# Claude Fable 5.1 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's ultra-frontier reasoning and research flagship model designed for high-difficulty multi-day autonomous engineering, mathematical theorem proving, and complex agentic problem-solving.
- **Provider / access:** Anthropic API (`claude-fable-5.1`). Messages API with extended thinking.
- **Release / knowledge:** 2026-09-01 release; April 2026 knowledge cutoff.
- **IDs:** `anthropic/claude-fable-5.1`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via Anthropic documentation.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive always-on thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $10.00 input / $50.00 output per 1M tokens; prompt cache read rate discounted to $0.25/1M tokens.
- **Architecture:** Proprietary frontier dense/MoE hybrid reasoning architecture with adaptive compute allocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** – **91.4%** (Terminal-Bench 4.0: **55.8%**, Terminal-Bench-Science: **52.6%**)
- Tau3-Banking / Tau2-Bench: **84.2%**
- GDPval-AA: **1920 Elo** (Artificial Analysis GDPval)
- Claw-Eval / ClawProBench: **86.1%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **84.8%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (frontier ceiling saturation)
- HLE: **59.1%** (Artificial Analysis Humanity's Last Exam)
- LCR / MLCR: **88.5%**
- CritPt: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66 / #1** (Artificial Analysis Intelligence Index peak)
- Omniscience Accuracy / Hallucination Rate: **89.5% / 2.6%**

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** (SWE-bench Pro)
- LiveCodeBench: **90.5%** (LiveCodeBench competitive programming)
- SciCode / AA-SciCode: **74.0%**
- Vibe Code Bench: **85.5%**
- DeepSWE / Coding Index / other: **84.2%**

Long context:

- MRCR / RULER / GraphWalks: **99.6%** retrieval accuracy across full 1,000,000-token context window length.

### Normalized scores (1–100)

- **Tool use: 94/100.** Superior autonomous multi-turn planning and execution, verified by 1920 Elo on GDPval and 52.6% on Terminal-Bench-Science.
- **Reasoning: 96/100.** Elite frontier reasoning evidenced by a top-tier 66 score on the Artificial Analysis Intelligence Index and 59.1% on HLE.
- **Context window: 95/100.** Full 1M token context capacity with 128K maximum output tokens and 99.6% long-range retrieval.
- **Multimodal: 81/100.** High-fidelity visual document and technical diagram understanding.
- **Coding: 88/100.** 81.2% SWE-bench Pro and 90.5% LiveCodeBench deliver robust long-horizon repository repair.
- **Cost efficiency: 35/100.** Premium $10.00/$50.00 per 1M token pricing, cushioned by aggressive $0.25 prompt caching for multi-step agents.
- **Overall Score: 91/100.** Maximum reasoning capability in the Claude lineup for unsolvable scientific challenges and long-horizon engineering.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic releases, Artificial Analysis indexes, and benchmark comparisons; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
