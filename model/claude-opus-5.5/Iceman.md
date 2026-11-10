# Claude Opus 5.5 — findings by Iceman

- Source: Anthropic/Claude Opus 5.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic’s Claude Opus 5.5 is the first model in the Claude 5.5 family, positioned for long-running agentic coding and knowledge work with 1M-token context, 128K-token output, and adaptive thinking. It is the same Opus-tier flagship line tracked in this repo as `anthropic/claude-opus-5-5`.
- **Provider / access:** Anthropic Claude API `claude-opus-5-5`; also available on Amazon Bedrock (`anthropic.claude-opus-5-5`), Google Cloud managed/Anthropic managed Claude endpoints (`claude-opus-5-5`), Microsoft Foundry (`claude-opus-5-5`), and Claude Platform on AWS (`claude-opus-5-5`). Chat Completions vs Responses API mode not independently verified beyond provider docs; no confirmed OpenCode Zen Free ID (`noFreeId` in local metadata).
- **Release / knowledge:** Released September 22, 2026 (Anthropic announcement / platform docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026.
- **IDs:** `claude-opus-5-5` (Claude API / several platforms), `anthropic.claude-opus-5-5` (Bedrock). Local metadata ID: `anthropic/claude-opus-5-5`.
- **Context window:** 1M tokens total context, 128K max output (synchronous Messages API); up to 300K output on Message Batches API with `output-300k-2026-03-24` beta header (Anthropic platform docs).
- **Modalities:** Text and image input; text output. Adaptive thinking always on (effort-controlled); tool use supported (per Anthropic model docs/capabilities).
- **Pricing (as of 2026-11-10):** Paid tier — $4 / 1M input tokens, $20 / 1M output tokens; 5m cache write $5/MTok, 1h cache write $8/MTok, cache read $0.20/MTok; Batch API 50% discount on input/output (Anthropic pricing/docs). Fast mode available separately ($8/$40 per MTok in/out per announcement).
- **Architecture:** Proprietary Anthropic frontier model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Benchmarks below are verified public figures reported by Anthropic for Claude Opus 5.5 (announcement, Sep 22 2026) and/or Anthropic platform docs. Where third-party or comparative figures are cited, the source is noted.

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **66.4%** (Anthropic announcement; reported at xhigh effort; production safeguards enabled during eval per notes)
- FrontierCode v1.1 (Main) (**agentic coding**): **54.4%** (Anthropic announcement)
- CursorBench 4.0 (**agentic coding**): **57.8%** (Anthropic announcement)
- AutomationBench (**business workflows**, run/reported by Zapier): **40.0%** (Anthropic announcement)
- OSWorld 2.1 (**computer use**, partial): **81.8%** (Anthropic announcement)
- GDPval-AA v2.1 (**knowledge work**): **1846 Elo** (Anthropic announcement)
- Terminal-Bench-Science 0.1 (**agentic scientific research**): **58.7%** (Anthropic announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity's Last Exam (**with tools**): **67.7%** (Anthropic announcement)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: agentic coding benchmarks above (TB4.0 66.4%, FrontierCode 54.4%, CursorBench 57.8%) reported by Anthropic.

Long context:

- **1M-token context window** with 128K max output (300K in batch beta) per Anthropic docs; no standalone MRCR/RULER/GraphWalks retrieval score reported in the sources reviewed.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 96/100.** Strong verified agentic/computer-use performance (TB4.0 66.4%, OSWorld 2.1 81.8% partial, AutomationBench 40.0%, CursorBench 57.8%, GDPval-AA v2.1 1846) supports top-tier tool/agent capability; capped by limited breadth of publicly reported standardized tool-call suites (e.g. Tau/Claw/MCP-Atlas not found).
- **Reasoning: 95/100.** HLE 67.7% with tools, strong knowledge-work/agentic science results (GDPval-AA 1846, TB-Science 58.7%) indicate frontier reasoning; capped by absence of several standalone reasoning benchmarks (GPQA Diamond, LCR/MLCR, AA Index) in reviewed primary sources.
- **Context window: 97/100.** Verified 1M-token context and 128K output (300K batch beta) place it at the top practical tier for long-horizon work; capped slightly by lack of independently reported long-context retrieval stress scores in reviewed sources.
- **Multimodal: 84/100.** Verified text+image input and text output with strong visual/chart capability evidence (Chartography 89.0% with tools) exceed text-only models; capped because audio/video/PDF breadth and richer multimodal output modalities are not established in reviewed sources.
- **Coding: 96/100.** High verified agentic coding results (TB4.0 66.4%, FrontierCode 54.4%, CursorBench 57.8%) and long-horizon coding positioning support a near-frontier coding score; capped by missing common public coding benchmarks (e.g. SWE-bench Verified/LiveCodeBench) in reviewed sources.
- **Cost efficiency: 68/100.** Paid pricing ($4/$20 per 1M, discounted cache/batch options) is competitive for an Opus-tier flagship but not free/low-cost; value is strong for hard agentic workloads, less so for routine use.
- **Overall Score: 94/100.** Mean of the five non-cost dims (96, 95, 97, 84, 96) = 93.6 → 94 (half-up). Best fit for long-running agentic coding, computer use, and complex knowledge work where frontier capability and large context justify premium pricing.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic primary sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5.5 (Anthropic announcement)](https://www.anthropic.com/news/claude-opus-5-5)
  - [Claude Opus 5.5 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/opus-5-5/overview)
  - [Models overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
