# Claude Opus 4.6 — findings by Gemini 3.6 Flash

- Source: Anthropic (`anthropic/claude-opus-4.6` / `claude-opus-4-6`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's frontier foundation model featuring adaptive thinking, 1M context processing, and high-precision agentic workflow orchestration.
- **Provider / access:** Anthropic API (`claude-opus-4-6`), Amazon Bedrock, Google Cloud Vertex AI. Messages API with extended thinking.
- **Release / knowledge:** 2026-02-05 release; November 2025 knowledge cutoff.
- **IDs:** `anthropic/claude-opus-4.6`, `claude-opus-4-6`
- **Context window:** 1,000,000 tokens input / 64,000 max output tokens — verified via Anthropic official documentation.
- **Modalities:** text, image in; text out; reasoning yes (adaptive thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $5.00 input / $25.00 output / $1.25 cached per 1M tokens.
- **Architecture:** Proprietary transformer architecture with adaptive thinking effort and dynamic subagent execution.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 / 2.1: **65.4%** (Anthropic technical report)
- BrowseComp: **84.0%**
- Tau3-Banking / Tau2-Bench: **75.0%–91.9%** (Tau2-Bench)
- GDPval-AA: **1820 Elo**
- Claw-Eval / ClawProBench: **84.0**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **91.5**

Reasoning / knowledge:

- GPQA Diamond: **92.1%**
- ARC-AGI 2: **68.8%**
- HLE: **53.0%** (Humanity's Last Exam, with tools)
- Artificial Analysis Intelligence Index / BenchLM overall: **68.5 / #2**
- LCR / MLCR: **91.2%**
- CritPt: **82.5%**
- Omniscience Accuracy / Hallucination Rate: **94.0% / 1.8%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.6%–80.8%** (SWE-bench Verified)
- LiveCodeBench: **88.8%**
- SciCode / AA-SciCode: **62.0%**
- Vibe Code Bench: **81.2%**
- DeepSWE / Coding Index / other: **78.5%**

Long context:

- MRCR v2: **76.0%** retrieval accuracy across full 1,000,000-token 8-needle context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic computer-use and CLI automation proven by 65.4% on Terminal-Bench 2.0 and 84.0% on BrowseComp.
- **Reasoning: 92/100.** Elite academic and novel problem solving evidenced by 68.8% on ARC-AGI 2 and 53.0% on Humanity's Last Exam.
- **Context window: 94/100.** Verified 1M token input capacity with 64K max output and reliable 8-needle MRCR v2 retrieval retention.
- **Multimodal: 80/100.** Native vision understanding processing high-resolution diagrams and UI screenshots with text output.
- **Coding: 87/100.** Top-tier software engineering performance supported by 88.8% on LiveCodeBench and up to 80.8% on SWE-bench Verified.
- **Cost efficiency: 65/100.** Enterprise pricing ($5.00/$25.00 per 1M tokens) with substantial prompt caching benefits ($1.25).
- **Overall Score: 88/100.** Highly capable frontier reasoning and coding model providing strong agentic execution and deep analytical depth.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across Anthropic release announcements, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
