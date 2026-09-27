# Claude Sonnet 4 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's 2025-05-22 mid-tier Claude 4 model. It posted 72.7% SWE-bench Verified — statistically level with the flagship Opus 4 — at one fifth of Opus pricing, which made it the default backbone of production coding agents (GitHub Copilot's coding agent launched on it). Superseded for new builds by Sonnet 4.5/4.6.
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-20250514`) via the Messages API; Claude apps, Bedrock/Vertex resale; OpenAI-compatible via gateways. Proprietary, closed.
- **Release / knowledge:** Released 2025-05-22; knowledge cutoff March 2025 (Benchgen model card).
- **IDs:** `anthropic/claude-sonnet-4` (BenchmarkList/Artificial Analysis naming); `claude-sonnet-4-20250514` on Anthropic's API. No OpenCode Zen Free ID.
- **Context window:** 200,000 tokens with 16,000 max output tokens (Benchgen; Anthropic). The 1M beta window belongs to Sonnet 4.6, not this checkpoint.
- **Modalities:** text and vision in, text out; hybrid reasoning with extended thinking (including thinking with tool use), tool/function calling, computer use, structured output. No audio or video.
- **Pricing (as of 2026-09-27):** $3.00 / 1M input and $15.00 / 1M output (Anthropic pricing page, via Benchgen and BenchmarkList).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-MCP **45.0%** (1/7); ChronosBench **98.2%** (1/13); WildAgtEval **67.5%** (1/10); AndroidWorld **94.8%** (2/21); Claw Bench **100** (2/37)
- MCP-Universe **29.4%** (5/27); MCP-Bench **0.68** (79th pct); MCPMark **28.3%**; Tau2-Bench Telecom **64.6%**; Tau3-Banking **16.7%**; Tau2 Airline **60.0%**; Terminal-Bench Hard **31.1%**; GDPval-AA **877 Elo**; Online Mind2Web **40.0%**; MultiChallenge **57.1%**; CAR-bench **47.0%**; PinchBench **80.5%**
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond **76.0%** (with extended thinking; Anthropic, via Benchgen)
- ARC-AGI-1 **40.0%**; ARC-AGI-2 **5.9%**; MultiChallenge **57.1%**
- kluster.ai LLM Hallucination Detection Leaderboard **98.6%** (rank 2 of 16); PTCBENCH context stability **0.03** (rank 2 of 4)
- HLE / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** for this checkpoint

Coding:

- SWE-bench Verified **72.7%** (Anthropic); SWE-bench Lite **60.3%** (1/18); SWE-bench Multimodal **35.6%**; Aider Polyglot **61.3%** (14/47, $26.58 for 225 tasks)
- SciCode **40.0%**; Terminal-Bench 2.0 **35.5%** (Anthropic) / Terminal-Bench 2.1 **36.3%**; CORE-Bench Hard **46.7%** ($65.58/run); LiveCodeBench **62.4%**; IOI **6.5%**; ALE-Bench **655.35**
- DeepSWE / SWE-Pro / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER/GraphWalks retrieval value published; the 200K window and 16K output cap are the documented limits. ALE-Bench self-refine x16 burned 523,943 tokens in one run, hinting at cost behaviour rather than recall quality.

### Normalized scores (1–100)

- **Tool use: 74/100.** Excellent computer-use-adjacent agentics (ChronosBench 98.2%, AndroidWorld 94.8%, OSWorld-MCP 45.0%) and workable MCP coverage (MCP-Universe 29.4%); the cap is Tau3-Banking **16.7%** and terminal agentics around 31–36%.
- **Reasoning: 70/100.** 76.0% GPQA Diamond with extended thinking and a #2 hallucination-detection result (98.6%) are respectable, but ARC-AGI-2 **5.9%** and a missing HLE/AA index place it clearly below 2026 frontier reasoning tiers.
- **Context window: 72/100.** 200K input with a 16K output cap and no published retrieval benchmark — the same tier as Claude Opus 4.5 but with a smaller usable output budget and no 1M beta tier on this checkpoint.
- **Multimodal: 62/100.** Vision input is real and used in agentic evals (SWE-bench Multimodal 35.6%, JMed48k 84.1%, MedAraBench 69.4%) but there is no image output, no audio or video, and no MMMU-class benchmark published.
- **Coding: 78/100.** 72.7% SWE-bench Verified at $3/$15 was the value breakthrough of mid-2025, reinforced by SWE-bench Lite (60.3%) and Aider Polyglot (61.3%); the caps are IOI **6.5%** and LiveCodeBench **62.4%**.
- **Cost efficiency: 62/100.** $3/$15 is mid-priced: roughly 5× cheaper than Opus-class input pricing but with no free tier and an expensive output side for long agent loops (CORE-Bench Hard cost $65.58 per run).
- **Overall Score: 71.2/100.** (74 + 70 + 72 + 62 + 78) / 5 = 71.2. Best fit: high-volume production coding and computer-use agents that need 2025-frontier reliability at sustainable cost, not frontier-2026 reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-27
- Method: public internet research (Benchgen model card, BenchmarkList profile with third-party eval rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
