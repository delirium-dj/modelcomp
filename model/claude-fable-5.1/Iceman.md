# Claude Fable 5.1 — findings by Iceman

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic’s Claude Fable 5.1 is a frontier Mythos-class model (generally available Fable variant) for coding, knowledge work, and long-running problem solving. Anthropic states Claude Fable 5.1 and Claude Mythos 5.1 are the same model with different safeguard/access levels.
- **Provider / access:** Anthropic Claude API `claude-fable-5-1`; also available on Amazon Bedrock (`anthropic.claude-fable-5-1`), Google Cloud managed/Anthropic managed Claude endpoints (`claude-fable-5-1`), Microsoft Foundry (`claude-fable-5-1`), and Claude Platform on AWS (`claude-fable-5-1`) per platform docs. No confirmed OpenCode Zen Free ID (`noFreeId` in local metadata).
- **Release / knowledge:** Released September 1, 2026 (Anthropic announcement/platform docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026.
- **IDs:** `claude-fable-5-1` (Claude API/platforms), `anthropic.claude-fable-5-1` (Bedrock). Local metadata ID `anthropic/claude-fable-5.1`.
- **Context window:** 1M tokens context, 128K max output (Anthropic platform docs). (Batch extended output noted for some newer Claude models; Fable 5.1 page lists 128K max output.)
- **Modalities:** Text and image input; text output (per platform docs). Adaptive thinking always on (effort-controlled).
- **Pricing (as of 2026-11-10):** Paid tier — $10 / 1M input tokens, $50 / 1M output tokens; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $0.25/MTok; Batch API 50% discount (Anthropic docs/announcement notes cache-read pricing changes for typical workloads).
- **Architecture:** Proprietary Anthropic frontier model; architecture/parameter count not publicly disclosed.

### Raw benchmarks found

> Verified figures below are from Anthropic’s “Claude Fable 5.1 and Claude Mythos 5.1” announcement and platform docs. Fable 5.1/Mythos 5.1 are described as the same model; some reported rows include both labels.

Agent / tool use:

- Terminal-Bench-Science 0.1 (**agentic scientific research**): **52.6%** (Anthropic announcement)
- Terminal-Bench 4.0 (**agentic coding**): **55.8%** (Fable 5.1; Mythos 5.1 reported as 60.9% on same table) (Anthropic announcement)
- GDPval-AA v2 (**knowledge work**): **1853** (Anthropic announcement)
- OSWorld 2.0 (**computer use**, partial): **77.9%** (Anthropic announcement)
- OSWorld 2.0 (**computer use**, strict): **41.7%** (Anthropic announcement)
- AutomationBench (**business workflows**): **31.4%** (Anthropic announcement)
- CursorBench 3.2.0 (**agentic coding**): **73.4%** (Anthropic announcement)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** (Anthropic announcement)
- Humanity's Last Exam (with tools): **65.0%** (Anthropic announcement)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **55.8%** (Anthropic announcement)
- CursorBench 3.2.0: **73.4%** (Anthropic announcement)
- SWE-bench Verified / SWE-Pro: **no verified public score found** (local metadata notes SWE-Pro 81.2% but not independently verified in fetched primary sources for this pass)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M-token context window** and 128K max output per Anthropic docs; no standalone MRCR/RULER/GraphWalks retrieval score reported in reviewed sources.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 93/100.** Strong verified agentic/computer-use and workflow performance (OSWorld 2.0 77.9% partial / 41.7% strict, GDPval-AA v2 1853, AutomationBench 31.4%, TB-Science 52.6%) indicates high-end tool use; capped by moderate results on some workflow benchmarks and missing template tool suites.
- **Reasoning: 94/100.** Strong HLE results (60.9% no tools, 65.0% with tools) and high knowledge-work/agentic science performance support frontier reasoning; capped by lack of several canonical reasoning benchmarks (GPQA/LCR/AA Index) in reviewed sources.
- **Context window: 97/100.** Verified 1M-token context and 128K output support top-tier long-horizon operation; capped slightly by absence of independently reported long-context retrieval stress metrics in reviewed sources.
- **Multimodal: 84/100.** Verified text+image input and text output provide solid multimodal capability for document/vision workflows; capped by no evidence of broader audio/video modalities or multimodal outputs in reviewed sources.
- **Coding: 94/100.** Strong agentic coding signals (CursorBench 3.2.0 73.4%, Terminal-Bench 4.0 55.8%) and Anthropic’s positioning for long-horizon coding indicate very high coding ability; capped by missing common public coding benchmarks (SWE-bench Verified/LiveCodeBench) in reviewed sources.
- **Cost efficiency: 52/100.** High paid pricing ($10/$50 per 1M, with cache/batch discounts) is expensive and limits cost efficiency despite capability; best value only for difficult long-horizon tasks.
- **Overall Score: 92/100.** Mean of the five non-cost dims (93, 94, 97, 84, 94) = 92.4 → 92 (half-up). Best fit for long-horizon agentic coding, complex knowledge work, and research workflows where top capability matters more than cost.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Anthropic announcement and platform docs; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.1 and Claude Mythos 5.1 (Anthropic announcement)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/fable-5-1/overview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
