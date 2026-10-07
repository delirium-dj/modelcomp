# Claude Haiku 5.5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic (`anthropic/claude-haiku-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, cheapest Claude 5.5-family small model: first Haiku with adjustable effort, built for high-volume subagent, classification, and routing work.
- **Provider / access:** Anthropic API (`anthropic/claude-haiku-5-5`), Amazon Bedrock, Google Cloud Vertex; Messages API.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff Jun 2026
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1,000,000 total tokens; 128,000 max output
- **Modalities:** Text, image, PDF in; text out; adaptive thinking with adjustable effort
- **Pricing (as of 2026-10-07):** $0.10/$0.50 per 1M in/out for prompts ≤100K tokens; $0.50/$2.50 above 100K; paid only
- **Architecture:** Proprietary Anthropic Claude 5.5 family

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1620 GDPval-AA v2.1 Elo** (Anthropic launch metrics)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- OSWorld 2.1 (offline subset): **72.4% partial / 37.1% strict pass** (Anthropic launch table)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **45.9% no tools / 57.4% with tools** (Anthropic launch table)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **39.2% Terminal-Bench 4.0**; **46.4% FrontierCode 1.1 Main**

Long context:

- RULER / GraphWalks value at 1M window length: **91.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 86/100.** Excellent computer use and tool routing capabilities.
- **Reasoning: 88/100.** Strong reasoning performance on HLE and complex agentic tasks.
- **Context window: 92/100.** Massive 1M token context window with reliable retrieval.
- **Multimodal: 80/100.** Native text, image, and document processing support.
- **Coding: 84/100.** High-speed coding and subagent execution performance.
- **Cost efficiency: 90/100.** Extremely competitive pricing ($0.10/$0.50 per 1M tokens).
- **Overall Score: 86.0/100.** Mean of the five quality dims (86 + 88 + 92 + 80 + 84 = 430 / 5 = 86.0).

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-07
- Method: public internet research and launch documentation verification; scores are normalized 1–100 interpretations.
