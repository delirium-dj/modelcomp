# Claude Mythos 5.1 — findings by Iceman

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic’s Claude Mythos 5.1 is the verification-gated Mythos variant of Claude Fable 5.1, offered to vetted organizations (e.g. cyber/life-sciences programs) with the same underlying model capabilities and different safeguard/access posture.
- **Provider / access:** Anthropic Claude API `claude-mythos-5-1`; available to verified organizations on supported platforms including Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud managed (`claude-mythos-5-1`), and Microsoft Foundry (`claude-mythos-5-1`) per platform docs. Access requires verification programs; no confirmed OpenCode Zen Free ID (`noFreeId` in local metadata).
- **Release / knowledge:** Released September 1, 2026 (Anthropic announcement/platform docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026.
- **IDs:** `claude-mythos-5-1` (Claude API/platforms), `anthropic.claude-mythos-5-1` (Bedrock). Local metadata ID `anthropic/claude-mythos-5.1`.
- **Context window:** 1M tokens context, 128K max output (Anthropic platform docs; same specs as Fable 5.1).
- **Modalities:** Text and image input; text output (per platform docs). Adaptive thinking always on (effort-controlled).
- **Pricing (as of 2026-11-10):** Paid tier — $10 / 1M input tokens, $50 / 1M output tokens; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $0.25/MTok; Batch API 50% discount (same as Fable 5.1 per docs).
- **Architecture:** Proprietary Anthropic frontier model; same model as Claude Fable 5.1 per Anthropic, with different safeguards/access. Architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Anthropic states Claude Fable 5.1 and Claude Mythos 5.1 are the same model. Verified benchmark figures below come from the joint announcement/platform materials; where the announcement reports both labels, Mythos-specific values are noted.

Agent / tool use:

- Terminal-Bench 4.0 (**agentic coding**): **60.9%** (reported as Mythos 5.1 in the joint announcement table; Fable 5.1 55.8%)
- Terminal-Bench-Science 0.1 (**agentic scientific research**): **52.6%** (joint announcement; same model family result context)
- GDPval-AA v2 (**knowledge work**): **1853** (joint announcement)
- OSWorld 2.0 (**computer use**, partial): **77.9%** (joint announcement)
- OSWorld 2.0 (**computer use**, strict): **41.7%** (joint announcement)
- AutomationBench (**business workflows**): **31.4%** (joint announcement)
- CursorBench 3.2.0 (**agentic coding**): **73.4%** (joint announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** (joint announcement)
- Humanity's Last Exam (with tools): **65.0%** (joint announcement)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1, joint announcement table)
- CursorBench 3.2.0: **73.4%** (joint announcement)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M-token context window** and 128K max output per Anthropic docs; no standalone MRCR/RULER/GraphWalks retrieval score reported in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scoring reflects verified capability evidence for the same underlying model; access restrictions affect deployability, not raw capability scores here.

- **Tool use: 94/100.** Strong verified agentic/computer-use and workflow performance (OSWorld 2.0 77.9% partial / 41.7% strict, GDPval-AA v2 1853, AutomationBench 31.4%, TB-Science 52.6%) and the higher reported Mythos TB4.0 figure (60.9%) support high-end tool use; capped by moderate workflow results and missing template tool suites.
- **Reasoning: 94/100.** Strong HLE results (60.9% no tools, 65.0% with tools) and high knowledge-work/agentic science performance indicate frontier reasoning; capped by lack of several canonical reasoning benchmarks in reviewed sources.
- **Context window: 97/100.** Verified 1M-token context and 128K output support top-tier long-horizon operation; capped slightly by absence of independently reported long-context retrieval stress metrics in reviewed sources.
- **Multimodal: 84/100.** Verified text+image input and text output provide solid multimodal capability; capped by no evidence of broader audio/video modalities or multimodal outputs in reviewed sources.
- **Coding: 95/100.** Strong agentic coding signals including Mythos-labeled TB4.0 60.9% and CursorBench 3.2.0 73.4% indicate very high coding ability for long-horizon tasks; capped by missing common public coding benchmarks in reviewed sources.
- **Cost efficiency: 50/100.** Same high paid pricing as Fable 5.1 ($10/$50 per 1M) with additional verification-gated access constraints reduces practical cost/access efficiency for most users.
- **Overall Score: 93/100.** Mean of the five non-cost dims (94, 94, 97, 84, 95) = 92.8 → 93 (half-up). Best fit for vetted high-risk cyber/bio or long-horizon research/coding workloads where Mythos access is appropriate and premium capability is required.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic joint announcement and Mythos/Fable platform docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 and Claude Mythos 5.1 (Anthropic announcement)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Mythos 5.1 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/mythos-5-1/overview)
  - [Claude Fable 5.1 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/fable-5-1/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
