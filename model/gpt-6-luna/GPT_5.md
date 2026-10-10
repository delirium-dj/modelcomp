# GPT-6 Luna — findings by [ChatGPT 5 (openai/gpt-5)]

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (Free-tier accessible via desktop app for Free and Go users on ChatGPT)
- **Short description:** OpenAI's most efficient model in the GPT-6 series, positioned below GPT-6 Sol, designed for high-volume, latency-sensitive tasks such as chat, classification, and lightweight agentic work. It is a proprietary reasoning model with configurable effort levels (none to max). No known alias or variant.
- **Provider / access:** OpenAI first-party API (`openai/gpt-6-luna`). Also available via Amazon Bedrock, OpenRouter, OrcaRouter, and other gateways. Supports both Chat Completions and Responses API. Chat Completions supports function calling only with `reasoning_effort` set to `none`; the Responses API supports built-in tools and function calling.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff May 18, 2026.
- **IDs:** `openai/gpt-6-luna` (OpenAI API), `openai__gpt_6_luna` (Box AI). No Free ID exists on OpenCode Zen.
- **Context window:** 1,050,000 tokens total; 922,000 max input, 128,000 max output. Verified via OpenAI API documentation and corroborated by AWS Bedrock and third-party trackers.
- **Modalities:** Text and image input; text output. Reasoning yes (effort levels: none, low, medium, high, xhigh, max); tool calls supported; JSON mode / structured outputs supported.
- **Pricing (as of 2026-10-10):** $0.10 per 1M input tokens; $0.50 per 1M output tokens; cached input $0.01 per 1M; cache writes $0.125 per 1M. Prompts exceeding 272K input tokens are priced at 2x input and cache rates and 1.5x output for the full request. Free-tier access via ChatGPT desktop app for Free and Go users; paid API tier is not free. Free-tier privacy caveat: free-tier usage may be subject to data usage for model improvement unless opted out.
- **Architecture:** Proprietary; parameters not disclosed. Reasoning is trained via reinforcement learning (chain-of-thought). Not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (llmlearner.com, max with tools, rank 34/51)
- Tau3-Banking / Tau2-Bench: **68.6%** (OpenRouter, TAU-Bench)
- GDPval-AA: **1367 Elo** (Artificial Analysis via apidog.com, max effort)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AutomationBench-AA: **53%** (Artificial Analysis, max effort)
- OSWorld 2.0 offline: **48.9%** (Artificial Analysis via mezha.ua, max effort)
- Terminal-Bench 4.0: **12.6%** (Artificial Analysis, max effort)

Reasoning / knowledge:

- GPQA Diamond: **88.3%** (OpenRouter, OpenAI provider)
- HLE: **38.5%** (OrcaRouter, Artificial Analysis)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **38.1 / #37 of 147** (OrcaRouter, max effort; Artificial Analysis v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **43.8% / 76.7%** (OrcaRouter, AA-Omniscience via Artificial Analysis)
- ARC-AGI-1 (Max): **86.7%** (ARC Prize, Semi-Private)
- ARC-AGI-2 (Max): **59.3%** (ARC Prize, Semi-Private)
- ARC-AGI-3 (Max, Provider Adapter): **0.59%** (ARC Prize)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.6%** (OrcaRouter, Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE 1.1: **66.6%** (OpenAI vendor-reported, max effort; corroborated by apidog.com)
- Terminal-Bench 4.0: **12.6%** (Artificial Analysis, max effort)
- Coding Agent Index: **41** (Artificial Analysis via OrcaRouter, down from 43 for GPT-5.6 Luna)

Long context:

- Long-Context Recall: **83.3%** (OrcaRouter, Artificial Analysis AA-LCR v1.1); no MRCR/RULER/GraphWalks values reported.

### Normalized scores (1-100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 73% sits in the mid-to-upper band (frontier ~88%+). AutomationBench-AA 53% and OSWorld 2.0 48.9% are moderate. GDPval-AA 1367 is below the frontier 1750+ tier. Tau-Bench 68.6% is strong. The model is clearly capable for high-volume agentic tasks but well below Sol-tier and frontier models on complex tool-use benchmarks.
- **Reasoning: 82/100.** GPQA Diamond 88.3% is near frontier (90%+). HLE 38.5% is just below the 40%+ frontier threshold. AA Intelligence Index 38.1 is above median for its class but far below frontier (60+). ARC-AGI-1 86.7% and ARC-AGI-2 59.3% are strong. The model punches above its price tier on knowledge reasoning but is capped by lower HLE and AA Index scores.
- **Context window: 95/100.** Verified total of 1,050,000 tokens qualifies for the ≥1M tier (95-100). No retrieval benchmark at 512K+ (MRCR/RULER) is publicly reported, so it does not reach the 100-point threshold requiring ≥98% retrieval. Long-context recall of 83.3% (AA-LCR) is solid but not exceptional.
- **Multimodal: 65/100.** Text and image input only; text output. Falls in the "+image in = 60-70" band. No video, audio, PDF-specific, or non-text output capabilities reported.
- **Coding: 70/100.** DeepSWE 1.1 at 66.6% is below the 74%+ frontier tier. Terminal-Bench 4.0 at 12.6% is low; Terminal-Bench 2.1 at 73% is mid. SciCode 54.6% is near the 55%+ frontier threshold but not above it. Coding Agent Index of 41 is a regression from GPT-5.6 Luna's 43. The model is a capable but not frontier coding model.
- **Cost efficiency: 95/100.** At $0.10 input / $0.50 output per 1M tokens, it is among the cheapest frontier-adjacent models. The input rate aligns with the ~$0.10/$0.20 tier (97-99), but the higher output rate ($0.50) places it slightly lower. Cached input at $0.01 adds substantial value for repeated-prefix workloads.
- **Overall Score: 77/100.** Mean of Tool use (72) + Reasoning (82) + Context window (95) + Multimodal (65) + Coding (70) = 384 / 5 = 76.8, half-up rounded to 77. Best-fit recommendation: high-volume, cost-sensitive agentic and reasoning workloads where the 1M-token context window and low input cost matter more than peak frontier capability.

---

## Signature

- Provided by: **ChatGPT 5 (openai/gpt-5)** — 2026-10-10
- Method: Public internet research via web search and direct source retrieval (OpenAI developer docs, Artificial Analysis, ARC Prize, OpenRouter, OrcaRouter, BenchLM, AWS Bedrock, Box Dev Docs, vendor blogs, and independent evaluations). Scores are normalized 1-100 interpretations per the v4 methodology, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
