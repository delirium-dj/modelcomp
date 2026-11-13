# Claude Mythos 5.2 — findings by Iceman

- Source: Anthropic/Claude Mythos 5.2 (`claude-mythos-5-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic’s Claude Mythos 5.2 is the same underlying model as Claude Fable 5.2, offered with cybersecurity/biology safeguards lifted for trusted defensive and related work to organizations verified through Anthropic’s verification programs. It targets the most ambitious coding, reasoning, scientific, and agentic tasks.
- **Provider / access:** Anthropic via trusted/verified access programs (e.g. Cyber Verification Program, Life Sciences Verification Program). Platform IDs include `claude-mythos-5-2` (Claude API and other Anthropic-supported surfaces) and `global.anthropic.claude-mythos-5-2` on Bedrock. Local metadata: `anthropic/claude-mythos-5.2`, no confirmed OpenCode Zen Free ID (`noFreeId`).
- **Release / knowledge:** Released November 9, 2026 (Anthropic announcement/docs). Reliable knowledge cutoff June 2026; training data cutoff June 2026 (platform docs).
- **IDs:** `claude-mythos-5-2`, `global.anthropic.claude-mythos-5-2`.
- **Context window:** 1M tokens context, 128K max output on sync Messages API (platform docs).
- **Modalities:** Text and image input; text output (platform docs). Supports adaptive thinking (always on, default effort high), tool use, multilingual/vision workloads, fast mode, preserved thinking, and related Claude platform features per docs/announcement.
- **Pricing (as of 2026-11-13):** $8 / 1M input tokens, $40 / 1M output tokens; cache read $0.20 / 1M, 5m cache write $10 / 1M, 1h cache write $16 / 1M; Batch API 50% discount (platform docs). Optional fast mode $16/$80 per 1M input/output tokens (announcement).
- **Architecture:** Proprietary Anthropic model; architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> Benchmarks below are from Anthropic’s Claude Fable 5.2/Mythos 5.2 announcement and LLM Stats benchmark rankings. Where the announcement reports Mythos-specific results, those are used; otherwise scores reflect the same underlying model/Fable reporting context as noted.

Agent / tool use:

- AutomationBench (business workflows): **51.4%** (Anthropic announcement, Fable 5.2/Mythos family table)
- OSWorld 2.1 offline set, partial (computer use): **89.3%** (Anthropic announcement)
- WANDR (agentic search, relaxed score): **82.1%** (Anthropic announcement)
- RoboDojo Sim (robotics control): **64.9%** at max effort (Anthropic announcement, internal run)
- AA-Briefcase v1.1 (knowledge work): **66.1%** rubric / **1785 Elo** (Anthropic announcement)
- Remote Labor Index (RLI): **41.3%** at high effort (Anthropic announcement)
- Terminal-Bench 4.0: **70.5%** / score **0.705**, rank 2 (LLM Stats benchmark ranking, `claude-mythos-5-2`)
- Terminal-Bench-Science 0.1: **75.3%** / score **0.753**, rank 1 (Anthropic announcement Mythos 5.2; LLM Stats ranking)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Humanity’s Last Exam (with tools): **74.2%** (Anthropic announcement)
- Chartography (visual chart recognition, no tools): **73.4%** (Anthropic announcement)
- GPQA Diamond: **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- FrontierCode 2.0 (agentic coding): **49.1%** at xhigh effort (Anthropic announcement)
- FrontierSWE v2: **69.9%** (Anthropic announcement)
- SWE-bench Verified / SWE-Pro: **no verified public score found** (system card/blog text referenced in announcement context but not a standalone numeric row in extracted table; not claimed here)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Cybersecurity / science (Mythos-specific or domain evaluations):

- CyScenarioBench: **76.3%** (Anthropic announcement, Mythos 5.2)
- CVE Rediscovery: **89.6%** (Anthropic announcement, Mythos 5.2)
- De novo binder design (24 hr): **85.1** (Anthropic announcement, Mythos 5.2)

Long context:

- 1M-token context / 128K output documented (platform docs). No standalone long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found in reviewed sources.

### Normalized scores (1–100)

> Derived from available public evidence (Anthropic announcement/docs and LLM Stats). Scores are normalized interpretations, not official vendor scores; some standard benchmark families remain unreported for this exact variant.

- **Tool use: 92/100.** Very strong agentic/computer-use and workflow evidence: OSWorld 2.1 partial 89.3%, WANDR 82.1%, AutomationBench 51.4%, RoboDojo Sim 64.9%, Terminal-Bench 4.0 70.5%, Terminal-Bench-Science 0.1 75.3%, and strong RLI/AA-Briefcase results. Capped by missing Tau/GDPval-AA/MCP-Atlas/Toolathon coverage.
- **Reasoning: 90/100.** Excellent reported reasoning/performance signals: HLE with tools 74.2%, Chartography 73.4%, strong domain results (CVE Rediscovery 89.6%, CyScenarioBench 76.3%), and high-end agentic problem solving. Capped by lack of separately reported GPQA Diamond/HLE no-tools/LCR/CritPt numbers in reviewed sources.
- **Context window: 94/100.** 1M-token context with 128K output is top-tier per platform docs; capped slightly without public MRCR/RULER/GraphWalks retrieval results.
- **Multimodal: 84/100.** Text+image input and text output with vision/Chartography 73.4% evidence and computer-use strength (OSWorld 89.3% partial), but no audio/video modality or broader multimodal benchmark suite reported.
- **Coding: 90/100.** Strong coding/engineering evidence: FrontierCode 2.0 49.1% (xhigh), FrontierSWE v2 69.9%, Terminal-Bench 4.0 70.5%, plus Anthropic’s reported migration/engineering results. Capped by absence of explicit SWE-bench Verified/Pro/LiveCodeBench numbers in reviewed public tables.
- **Cost efficiency: 72/100.** $8/$40 per 1M tokens with strong caching/batch options and fast mode is competitive for a frontier verified-access model, but access is restricted and pricing is not low-cost/free.
- **Overall Score: 90/100.** Mean of the five non-cost dimensions: (92 + 90 + 94 + 84 + 90) / 5 = 90.0. Best fit for verified organizations needing top-tier agentic coding, reasoning, and cybersecurity/science capability with 1M context; access restrictions apply.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `webfetch` and `curl` (Anthropic announcement, Anthropic platform model docs, and LLM Stats model/ranking data). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.2 and Mythos 5.2 (Anthropic announcement)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Mythos 5.2 model overview (Anthropic platform docs)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Claude Mythos 5.2 on LLM Stats](https://llm-stats.com/models/claude-mythos-5-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
