# GPT-5.5 Pro — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's top-tier frontier foundation system with extended compute and maximum reasoning effort, engineered for high-consequence software architecture, scientific research, and complex agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), Responses API, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-05-14 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.5-pro`. No Free tier on Zen; commercial enterprise and pay-as-you-go API.
- **Context window:** 1,000,000 tokens total (1M context window); max output 128,000 tokens.
- **Modalities:** Text, image, audio, video, PDF in; text, code, structured JSON out; extended test-time reasoning.
- **Pricing (as of 2026-10):** $15.00 / 1M input tokens, $60.00 / 1M output tokens ($1.50 / 1M cached prompt tokens); premium tier pricing.
- **Architecture:** Unified mixture-of-experts (MoE) transformer system optimized with adaptive extended reasoning search and tool verification loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.2%** (vals.ai leaderboard, 2026)
- Tau3-Banking / Tau2-Bench: **48.2%** / **98.5%** (Sierra benchmark harness)
- GDPval-AA: **87.2%** (Artificial Analysis GDPval-AA v2.1 win-or-tie rate)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.4%** (Toolathon leaderboard, 2026)

Reasoning / knowledge:

- GPQA Diamond: **95.2%** (Artificial Analysis, xhigh reasoning)
- HLE: **57.0%** (Humanity's Last Exam with tools; 44.8% without tools, Artificial Analysis)
- LCR / MLCR: **87.5%** (Artificial Analysis AA-LCR long-context reasoning)
- CritPt: **31.0%** (CritPt physics research benchmark, CtrlAltDebrief)
- Artificial Analysis Intelligence Index / BenchLM overall: **63.5 / #1**
- Omniscience Accuracy / Hallucination Rate: **62% / 81%**

Coding:

- SWE-bench Verified / SWE-Pro: **84.8%** (SWE-bench Verified) / **62.5%** (SWE-bench Pro)
- LiveCodeBench: **88.1%** pass@1 (vals.ai, 2026)
- SciCode / AA-SciCode: **59.2%**
- Vibe Code Bench: **73.5%**
- DeepSWE / Coding Index / other: **74.5%** (DeepSWE benchmark)

Long context:

- MRCR v2 (Multi-Round Co-reference Resolution) verified across 1M token window length; AA-LCR achieved 87.5% retention.

### Normalized scores (1–100)

- **Tool use: 86/100.** Exceptional agentic execution highlighted by 81.2% on Terminal-Bench 2.1 and 87.2% on GDPval-AA, capped by 59.4% on Toolathon.
- **Reasoning: 95/100.** Frontier-defining performance with 95.2% on GPQA Diamond, 57.0% on Humanity's Last Exam (tools), and 63.5 on AA Intelligence Index.
- **Context window: 96/100.** Verified 1M total token window with 128K max output and reliable MRCR v2 multi-needle disambiguation.
- **Multimodal: 92/100.** Full omnimodal input support (text, image, audio, video, PDF) with high visual fidelity and reasoning.
- **Coding: 91/100.** Top-tier coding capabilities across SWE-bench Verified (84.8%), LiveCodeBench (88.1%), and DeepSWE (74.5%).
- **Cost efficiency: 30/100.** Premium enterprise pricing at $15.00 / $60.00 per 1M tokens reflects high-cost extended reasoning compute.
- **Overall Score: 92/100.** Highest-echelon frontier reasoning and autonomous engineering model, ideally reserved for mission-critical problem solving where quality takes absolute priority over token expense.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI developer announcements, technical releases, Artificial Analysis leaderboards, and independent benchmark indices; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
