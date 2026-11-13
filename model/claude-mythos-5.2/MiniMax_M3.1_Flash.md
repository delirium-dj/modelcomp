# Claude Mythos 5.2 — findings by MiniMax M3.1 Flash

- Source: Anthropic/Claude Mythos 5.2 (`claude-mythos-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's verification-gated Mythos-class frontier model for advanced cybersecurity and life-science research. It is the same underlying model as the generally available Claude Fable 5.2, with more permissive safeguards for vetted organizations.
- **Provider / access:** Anthropic Claude Platform Messages API, with model ID `claude-mythos-5-2`; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. Access requires verification through Anthropic's Cyber Verification Program or Life Sciences Verification Program.
- **Release / knowledge:** Released 2026-11-09; reliable and training-data knowledge cutoff June 2026.
- **IDs:** `claude-mythos-5-2` (Claude API); `global.anthropic.claude-mythos-5-2` (Amazon Bedrock bedrock-runtime).
- **Context window:** 1,000,000 input tokens with up to 128,000 output tokens; official Anthropic model documentation and API specifications.
- **Modalities:** Text and images in; text out; adaptive reasoning always on; tool use, server-side web search and code execution, extended thinking, and prompt caching supported. No audio or video input is listed by Anthropic.
- **Pricing (as of 2026-11-13):** $8 per 1M input tokens, $40 per 1M output tokens, $0.20 per 1M cache reads, $10 per 1M five-minute cache writes, and $16 per 1M one-hour cache writes. Batch API requests receive a 50% discount; optional fast mode costs $16 input and $80 output per 1M.
- **Architecture:** Proprietary Anthropic model; parameter count and architecture are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (offline set, partial): **89.3%** (Anthropic launch results; computer-use benchmark)
- WANDR (relaxed score): **82.1%** (Anthropic launch results; agentic search benchmark)
- AutomationBench: **51.4%** (Anthropic launch results; Zapier business-workflow benchmark)
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

- FrontierCode 2.0: **49.1% at xhigh effort** (Anthropic launch results; shared underlying model with Fable 5.2)
- FrontierSWE v2: **69.9%** (Anthropic launch results; shared underlying model with Fable 5.2)
- Terminal-Bench-Science 0.1: **75.3% for Mythos 5.2; 74.6% for Fable 5.2** (Anthropic launch results)
- CyScenarioBench: **76.3%** (Anthropic launch results; cybersecurity benchmark)
- CVE Rediscovery: **89.6%** (Anthropic launch results; October 2026 run against 1,829 CVEs)
- De novo binder design (24 hours): **85.1%** (Anthropic launch results; protein-design benchmark)
- RoboDojo Sim: **64.9%** (Anthropic launch results; simulated two-arm robot control)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- Anthropic reports a 1M-token context window and demonstrates multi-hour, 1,000-agent research and coding sessions, but no verified public MRCR, RULER, or GraphWalks retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 98/100.** OSWorld 2.1 at 89.3%, WANDR at 82.1%, AutomationBench at 51.4%, CyScenarioBench at 76.3%, and CVE Rediscovery at 89.6% provide exceptional public evidence for autonomous search, computer use, and security workflows.
- **Reasoning: 98/100.** HLE with tools at 74.2%, AA-Briefcase at 66.1%/1785 Elo, and successful scientific and mathematical formalization work support an exceptional score, with no public GPQA figure limiting the evidence.
- **Context window: 100/100.** Anthropic verifies a 1M-token input window, the dataset's highest context tier, with 128K output.
- **Multimodal: 82/100.** Official support covers text and image input, and Chartography at 73.4% without tools plus computer-use and hardware-design results support strong vision capability; no audio or video input is documented.
- **Coding: 98/100.** FrontierCode 2.0 at 49.1%, FrontierSWE v2 at 69.9%, and Terminal-Bench-Science at 75.3% are frontier results, alongside reported multi-agent operating-system and Rust-migration successes.
- **Cost efficiency: 48/100.** At $8 input and $40 output per 1M tokens, Mythos 5.2 remains a premium price point, though it is cheaper than Mythos 5.1 and supports low-cost cache reads and 50% batch discounts.
- **Overall Score: 95.2/100.** A verified 1M-context frontier model for long-running coding, research, multimodal knowledge work, and specialist security/science tasks; best fit for vetted organizations undertaking the most ambitious technical work.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public-web research using Anthropic's official model documentation and launch announcement after the web-search service returned HTTP 402 on two attempts; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5.2 model overview](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Claude Fable 5.2 and Mythos 5.2 launch announcement and benchmarks](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude models overview, context, pricing, and platform IDs](https://platform.claude.com/docs/en/about-claude/models/overview)
- Future sources: add a new file next to this one, e.g. `Claude_Mythos_5.2.md`, using the same headings.
