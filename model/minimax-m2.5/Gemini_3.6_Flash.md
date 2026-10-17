# MiniMax M2.5 — findings by Gemini 3.6 Flash

- Source: MiniMax (`minimax/minimax-m2.5`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's agent-native open-weights 230B MoE foundation model designed for cost-effective software engineering, deep web search, and tool orchestration.
- **Provider / access:** MiniMax Platform (`platform.minimax.io`), Amazon Bedrock, Hugging Face (`MiniMaxAI/MiniMax-M2.5`), OpenCode Zen (`opencode/minimax-m2.5`).
- **Release / knowledge:** February 2026 release; early 2026 knowledge cutoff.
- **IDs:** `minimax/minimax-m2.5`, `opencode/minimax-m2.5`
- **Context window:** 1,000,000 tokens input / 128,000 max output tokens — verified via MiniMax documentation.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-18):** $0.15–$0.30 input / $0.60–$1.20 output per 1M tokens ($0.03 cached input); MIT open weights.
- **Architecture:** 230B total MoE trained with agent-native RL (Forge framework) across real-world environments.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **76.3%**
- GDPval-MM: **59.0%** pairwise win rate

Reasoning / knowledge:

- Agent-native CoT reasoning with multi-environment RL optimization.

Coding:

- SWE-bench Verified: **80.2%** (79.7% Droid harness / 76.1% OpenCode harness)
- Multi-SWE-Bench: **51.3%**

Long context:

- 1,000,000 tokens context window supported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong agentic web search and tool execution backed by 76.3% on BrowseComp and 59.0% win rate on GDPval-MM.
- **Reasoning: 72/100.** Effective agent-native CoT reasoning and task planning.
- **Context window: 95/100.** Verified 1M token input context window.
- **Multimodal: 65/100.** Text and image input support with text output generation.
- **Coding: 85/100.** High software engineering capability demonstrated by 80.2% on SWE-bench Verified across multiple agent scaffolds.
- **Cost efficiency: 95/100.** Outstanding $0.15–$0.30 / $0.60–$1.20 pricing paired with open-weights availability.
- **Overall Score: 79/100.** High-efficiency open-weights workhorse model delivering strong agentic coding and long context performance.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-18
- Method: Multi-source web research across MiniMax release documentation and developer benchmark evaluations; normalized scores 1–100.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
