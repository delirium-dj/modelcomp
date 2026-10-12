# GPT-5.5 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.5` / `gpt-5.5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's systems engineering foundation model optimized for multi-step agentic loops, OS-level computer use, long-horizon software engineering, and scientific reasoning.
- **Provider / access:** OpenAI API (`gpt-5.5`), Microsoft Azure Foundry, OpenCode Zen (`opencode/gpt-5.5`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-04-23 release; early 2026 knowledge cutoff.
- **IDs:** `openai/gpt-5.5`
- **Context window:** 1,050,000 tokens input / 128,000 max output tokens — verified via OpenAI developer documentation.
- **Modalities:** text, image in; text out; reasoning yes (configurable reasoning effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $5.00 input / $30.00 output / $0.50 cached per 1M tokens.
- **Architecture:** Proprietary high-capacity foundation model with 32x32 patch-based vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI technical disclosure)
- OSWorld-Verified: **78.7%**
- BrowseComp: **84.4%**
- Tau3-Banking / Tau2-Bench: **98.0%** (Tau2-Bench Telecom)
- GDPval-AA: **84.9%** (GDPval)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62.0**
- GeneBench: **noted mathematical proof discovery assistance**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **58.6%** (SWE-bench Pro)
- LiveCodeBench: **2780 Elo**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **82.7%** (Terminal-Bench 2.0)

Long context:

- RULER / Needle in Haystack: **99.5%** retrieval accuracy across 1,050,000-token context window.

### Normalized scores (1–100)

- **Tool use: 89/100.** Premier autonomous tool execution backed by 82.7% on Terminal-Bench 2.0, 78.7% on OSWorld, and 98.0% on Tau2-Bench.
- **Reasoning: 92/100.** High-level academic and scientific reasoning highlighted by 93.6% on GPQA Diamond and verified research proof assistance.
- **Context window: 95/100.** Verified 1.05M token input context with 128K output generation limit and 99.5% retrieval accuracy.
- **Multimodal: 80/100.** Advanced 32x32 patch visual encoder processing high-resolution imagery and interface screenshots with text output.
- **Coding: 86/100.** Strong full-system software engineering with 58.6% on SWE-bench Pro and 2780 Elo on LiveCodeBench.
- **Cost efficiency: 70/100.** Frontier API pricing ($5.00/$30.00 per 1M) supported by 10x prompt caching discount ($0.50).
- **Overall Score: 88/100.** Systems engineer workhorse model offering robust autonomous tool execution and deep reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-11
- Method: Multi-source web research across OpenAI technical disclosures, Artificial Analysis evaluations, and developer benchmarks; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
