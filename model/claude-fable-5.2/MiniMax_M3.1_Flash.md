# Claude Fable 5.2 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Fable 5.2 (`claude-fable-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's latest generally available Mythos-class frontier model for demanding reasoning and long-horizon agentic work. It shares its underlying model and specifications with the separately access-controlled Claude Mythos 5.2.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-fable-5-2`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Safety classifiers can transparently route eligible requests to Opus 5 or Opus 4.8.
- **Release / knowledge:** Released 2026-11-09; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-2` (Claude API); `global.anthropic.claude-fable-5-2` (Amazon Bedrock bedrock-runtime).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; adaptive reasoning always on; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $8 per 1M input tokens, $40 per 1M output tokens, $0.20 per 1M cache reads, $10 per 1M five-minute cache writes, and $16 per 1M one-hour cache writes. Batch API requests receive a 50% discount; optional fast mode costs $16 input and $80 output per 1M.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **51.4%** (Anthropic launch results; Zapier business-workflow benchmark)
- WANDR (relaxed score): **82.1%** (Anthropic launch results; agentic search benchmark)
- OSWorld 2.1 (offline set, partial): **89.3%** (Anthropic launch results; computer-use benchmark)
- Remote Labor Index (RLI): **41.3% at high effort** (Anthropic launch results)
- GDPval-AA v2.1: no verified public score found
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE: **74.2% with tools** (Anthropic launch results)
- AA-Briefcase v1.1: **66.1% rubric score; 1785 Elo** (Anthropic launch results)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 2.0: **49.1% at xhigh effort** (Anthropic launch results; highest released-model score reported by Anthropic; 45.3% at high effort)
- FrontierSWE v2: **69.9%** (Anthropic launch results)
- Terminal-Bench-Science 0.1: **74.6% for Fable 5.2; 75.3% for Mythos 5.2** (Anthropic launch results)
- RoboDojo Sim: **64.9%** (Anthropic launch results; simulated two-arm robot control)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports a 1M-token context window and demonstrates multi-hour, 1,000-agent research and coding sessions, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 97/100.** OSWorld 2.1 at 89.3%, WANDR at 82.1%, AutomationBench at 51.4%, and RLI at 41.3% provide strong public evidence for autonomous search, computer use, and business workflows; the premium price keeps cost separate from the quality score.
- **Reasoning: 97/100.** HLE with tools at 74.2%, AA-Briefcase at 66.1%/1785 Elo, and successful scientific and mathematical formalization work support an exceptional score, with no public GPQA figure limiting the evidence.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K output.
- **Multimodal: 82/100.** Official support covers text and image input, and Chartography at 73.4% without tools plus computer-use and hardware-design results support strong vision capability; no audio or video input is documented.
- **Coding: 98/100.** FrontierCode 2.0 at 49.1%, FrontierSWE v2 at 69.9%, and Terminal-Bench-Science at 74.6%–75.3% are frontier results, alongside reported multi-agent operating-system and Rust-migration successes.
- **Cost efficiency: 48/100.** At $8 input and $40 output per 1M tokens, Fable 5.2 remains a premium price point, though it is cheaper than Fable 5.1 and supports low-cost cache reads and 50% batch discounts.
- **Overall Score: 94.8/100.** The strongest verified all-round model in this queue, combining 1M context, exceptional reasoning, agentic tool use, coding, and image input; best fit for the most ambitious long-horizon technical work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.2 model overview](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 and Mythos 5.2 launch announcement and benchmarks](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.2.md`, using the same headings.
