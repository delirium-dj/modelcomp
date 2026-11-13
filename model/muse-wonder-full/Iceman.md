# Muse Wonder Full — findings by Iceman

- Source: Meta Superintelligence Labs/Muse Wonder Full (`muse-wonder-full-1.0`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs’ most advanced Muse Wonder-series model, positioned for frontier coding, long-running agents, advanced computer use, and demanding personal/professional agentic workflows. It is the top-capability variant above Muse Wonder in the same family.
- **Provider / access:** Available by subscription in Muse Code on the Power Usage ($50/month) and Maximum Usage ($200/month) plans (Meta model page). LLM Stats lists the model as a catalog card without first-party API/playground routing or per-token pricing. Local metadata ID: `meta/muse-wonder-full-1.0`.
- **Release / knowledge:** Released October 12, 2026 (Meta model page FAQ / LLM Stats). Knowledge/training cutoff not explicitly disclosed in reviewed public sources.
- **IDs:** `muse-wonder-full-1.0` (Meta model page), `muse-wonder-full` (LLM Stats).
- **Context window:** 1M tokens total (Meta model page / LLM Stats). Max output not explicitly stated in reviewed sources.
- **Modalities:** Multimodal model (LLM Stats marks `multimodal: true`; Meta positions the series for vision/computer-use and professional work). Exact public input/output modality list for the Full variant was not fully enumerated on the reviewed pages; treated as multimodal with text output.
- **Pricing (as of 2026-11-13):** Subscription access in Muse Code (Power $50/month, Maximum $200/month) rather than public per-token API pricing for this variant (Meta model page). No verified per-1M-token input/output price for Muse Wonder Full found.
- **Architecture:** Proprietary Meta model; parameter count and architecture details not publicly disclosed in reviewed sources.

### Raw benchmarks found

> Values below are from Meta’s public Muse Wonder page benchmark table (`max` effort column for Muse Wonder Full) and/or LLM Stats entries linked to Meta’s model card. These are self-reported/vendor-published or cataloged benchmark figures; independent third-party reproduction varies by benchmark.

Agent / tool use:

- Terminal-Bench 4.0-AA: **57.1** (Meta model page, Muse Wonder Full max)
- OSWorld V2.1 (agentic computer use): **78.4** partial / **39.4** binary (Meta model page)
- AutomationBench-AA (E2E business workflows): **45.4** (Meta model page)
- JobBench (professional tool use): **75.3** (Meta model page)
- Vals Finance Agent V2: **59.1** (Meta model page) / **0.591** (LLM Stats, self-reported from Meta model card)
- GDP.pdf (professional work): **33.2** (Meta model page) / **0.332** (LLM Stats)
- Harvey LAB-AA (legal agent work): **13.1** (Meta model page)
- MemoryBench: **85.5** (Meta model page)
- Personal Superintelligence Index: **59.1** (Meta model page, internal composite)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Index: **56** (Meta model page) / ranking score **0.56** in LLM Stats benchmark rankings context
- HealthBench Pro (open-ended health queries): **62.3** (Meta model page) / **0.623** (LLM Stats, self-reported from Meta model card)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE 1.1 (long-horizon coding): **79.0** (Meta model page) / **0.79** (LLM Stats)
- SWE-Marathon (ultra-long-horizon engineering): **57.5** (Meta model page, xhigh noted) / **0.575** (LLM Stats)
- ProgramBench (from-scratch programming): **59.0** (Meta model page) / **0.59** (LLM Stats)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M-token context window stated; no standalone long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found in reviewed sources.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md`. Scores reflect available public evidence (largely Meta self-reported/model-card figures and cataloged benchmark values); sparse independent coverage on some standard benchmarks caps confidence.

- **Tool use: 86/100.** Strong agentic/computer-use evidence: Terminal-Bench 4.0-AA 57.1, OSWorld V2.1 78.4 partial / 39.4 binary, AutomationBench-AA 45.4, JobBench 75.3, MemoryBench 85.5, and solid finance/professional-task results (Vals Finance Agent V2 59.1). Capped by mixed/partial results on some agent benchmarks and lack of broader independent tool-use leaderboard coverage.
- **Reasoning: 78/100.** Reasonable general/professional reasoning signals from AA Index 56, HealthBench Pro 62.3, GDP.pdf 33.2, and agentic task performance, but no verified GPQA Diamond/HLE/LCR/CritPt numbers were found to anchor top-tier reasoning claims.
- **Context window: 94/100.** 1M-token context is stated by Meta/LLM Stats, mapping to the 1M tier; score capped slightly because no explicit measured long-context retrieval benchmark (MRCR/RULER/GraphWalks) result was found.
- **Multimodal: 78/100.** Positioned and cataloged as a multimodal frontier model for computer use and broad workflows (images/video/audio/PDF inputs indicated for the series context and multimodal capability flagged), but exact modality coverage and public multimodal benchmark scores for this specific Full variant are not comprehensively documented in reviewed sources.
- **Coding: 84/100.** Strong long-horizon coding signals: DeepSWE 1.1 79.0, SWE-Marathon 57.5, ProgramBench 59.0, and Terminal-Bench 4.0-AA 57.1. Capped by absence of verified SWE-bench Verified/SWE-Pro/LiveCodeBench scores in reviewed public sources.
- **Cost efficiency: 82/100.** Not a free/pay-per-token public API model; access is via Muse Code subscription ($50/$200 per month) with included usage. Value can be strong for heavy subscribers, but lack of transparent per-token pricing and plan-gated access limits a higher efficiency score.
- **Overall Score: 84/100.** Mean of the five non-cost dimensions: (86 + 78 + 94 + 78 + 84) / 5 = 84. Best fit for subscription users needing a strong long-horizon coding/agentic model with 1M context and multimodal/computer-use orientation, with caveat that many headline metrics are vendor-published.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `curl` and `webfetch` (LLM Stats model page/embedded data and Meta Muse Wonder developer page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder (Meta developer model page)](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder model card (Meta research)](https://research.meta.ai/static/muse-wonder-model-card/)
  - [Muse Wonder Full on LLM Stats](https://llm-stats.com/models/muse-wonder-full)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
