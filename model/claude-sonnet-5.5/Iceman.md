# Claude Sonnet 5.5 — findings by Iceman

- Source: Anthropic/Claude Sonnet 5.5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic’s Claude Sonnet 5.5 is a fast, high-capability Sonnet-tier model for everyday coding, agent, and enterprise workloads, balancing speed and intelligence with 1M-token context and adaptive thinking.
- **Provider / access:** Anthropic Claude API `claude-sonnet-5-5`; also available on Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud managed/Anthropic managed Claude endpoints (`claude-sonnet-5-5`), Microsoft Foundry (`claude-sonnet-5-5`), and Claude Platform on AWS (`claude-sonnet-5-5`). No confirmed OpenCode Zen Free ID (`noFreeId` in local metadata).
- **Release / knowledge:** Released September 28, 2026 (Anthropic announcement/platform docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026.
- **IDs:** `claude-sonnet-5-5` (Claude API/platforms), `anthropic.claude-sonnet-5-5` (Bedrock). Local metadata ID `anthropic/claude-sonnet-5.5`.
- **Context window:** 1M tokens total context, 128K max output (synchronous Messages API); up to 300K output on Message Batches API with `output-300k-2026-03-24` beta header (platform docs).
- **Modalities:** Text and image input; text output. Adaptive thinking on by default (effort-controlled); tool use supported.
- **Pricing (as of 2026-11-10):** Paid tier — $2 / 1M input tokens, $10 / 1M output tokens; 5m cache write $2.50/MTok, 1h cache write $4/MTok, cache read $0.10/MTok; Batch API 50% discount (Anthropic docs/announcement).
- **Architecture:** Proprietary Anthropic model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s Claude Sonnet 5.5 announcement and platform docs.

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **70.6%** (Anthropic announcement)
- FrontierCode 1.1 (Main) (**agentic coding**): **46.2%** (Max effort) / **52.1%** (Xhigh effort) (Anthropic announcement)
- CursorBench 4.0 (**agentic coding**): **55.5%** (Anthropic announcement)
- GDPval-AA v2.1 (**knowledge work**): **1844** (Anthropic announcement)
- AA-Briefcase v1.1 (**knowledge work**): **1811** (Anthropic announcement)
- OSWorld 2.1 (**computer use**, partial): **80.1%** (Anthropic announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity's Last Exam (**with tools**): **64.5%** (Anthropic announcement)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **70.6%** (Anthropic announcement)
- FrontierCode 1.1 (Main): **46.2%** (Max) / **52.1%** (Xhigh) (Anthropic announcement)
- CursorBench 4.0: **55.5%** (Anthropic announcement)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M-token context window** and 128K max output (300K batch beta) per Anthropic docs; no standalone MRCR/RULER/GraphWalks retrieval score reported in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 94/100.** Strong verified agentic/computer-use and knowledge-work results (TB4.0 70.6%, OSWorld 2.1 80.1% partial, GDPval-AA v2.1 1844, AA-Briefcase 1811, CursorBench 55.5%) indicate excellent tool-driven performance for a fast model; capped by missing some standardized tool-call benchmarks.
- **Reasoning: 92/100.** Solid verified reasoning/knowledge-work signals (HLE 64.5% with tools, strong GDPval-AA/AA-Briefcase scores) support high reasoning capability; capped by absence of several canonical reasoning benchmarks (GPQA, AA Index) in reviewed sources.
- **Context window: 97/100.** Verified 1M-token context with 128K output (300K batch beta) supports long-horizon and large-context workflows; capped slightly by lack of reported long-context retrieval stress metrics.
- **Multimodal: 82/100.** Verified text+image input and text output with strong visual/chart evidence (Chartography 61.6% no tools reported in announcement table) indicate good multimodal understanding; capped by limited modality breadth and text-only output.
- **Coding: 95/100.** Excellent verified agentic coding performance (TB4.0 70.6%, FrontierCode up to 52.1% Xhigh, CursorBench 55.5%) makes it a top everyday coding model; capped by missing common coding benchmarks like SWE-bench Verified in reviewed sources.
- **Cost efficiency: 90/100.** Competitive paid pricing ($2/$10 per 1M, low cache read $0.10/MTok) and strong efficiency/token use per announcement deliver high value for capability and speed.
- **Overall Score: 92/100.** Mean of the five non-cost dims (94, 92, 97, 82, 95) = 92.0 → 92 (half-up). Best fit for everyday coding, agentic workflows, document/analysis tasks, and fast iteration where strong capability-to-cost balance matters.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement and platform docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 (Anthropic announcement)](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
