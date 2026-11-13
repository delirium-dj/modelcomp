# Claude Mythos 5 — findings by Iceman

- Source: Anthropic (Claude Mythos Preview / Claude Mythos 5, Project Glasswing)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5 (Claude Mythos Preview)
- **Short description:** Anthropic’s frontier cybersecurity-focused model announced with Project Glasswing (2026-04-07) as Claude Mythos Preview; a general-purpose model with unusually strong coding, reasoning, and vulnerability-discovery/exploitation capabilities, initially provided to a limited set of defensive partners rather than broadly released.
- **Provider / access:** Anthropic (Project Glasswing / limited research preview access). Anthropic stated participants could access via Claude API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry; after initial usage credits, pricing stated as $25/$125 per million input/output tokens for participants. Exact public/Zen API IDs not verified from public sources.
- **Release / knowledge:** Announced 2026-04-07 (Project Glasswing). Knowledge cutoff: no verified public value found.
- **IDs:** No verified public general-availability API model ID found (preview/restricted access).
- **Context window:** No verified public context-window specification found in accessible primary sources.
- **Modalities:** Text/code focus evident from evaluations; image/multimodal input-output capabilities not clearly specified in accessible public sources. Tool use/agentic operation demonstrated in reported evaluations (e.g. terminal/computer-use and agentic coding tasks).
- **Pricing (as of 2026-11-13):** Restricted preview pricing reported by Anthropic as $25/$125 per million input/output tokens for Project Glasswing participants after credits; broader public pricing not announced (no free tier).
- **Architecture:** Proprietary frontier model (Anthropic). Parameter count and detailed architecture not publicly disclosed.

### Raw benchmarks found

> Values below are taken from Anthropic’s public Project Glasswing announcement and the Anthropic Frontier Red Team assessment of Claude Mythos Preview (accessed 2026-11-13). Where a benchmark was not found in verified public sources, marked accordingly.

Agent / tool use:
- CyberGym (cybersecurity vulnerability reproduction): **83.1%** (Anthropic Project Glasswing page, vs Claude Opus 4.6 66.6%)
- BrowseComp (agentic search): **86.9%** (Project Glasswing benchmark table)
- OSWorld-Verified (agentic/computer use): **79.6%** (Project Glasswing benchmark table)
- Terminal-Bench 2.0 (agentic coding & terminal use): **82.0%** (Project Glasswing; Terminus-2 harness, adaptive thinking max effort, 1M token budget/task, 5 attempts; note: 92.1% reported with 4-hour timeout and TB 2.1 updates)
- Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **94.6%** (Anthropic Project Glasswing benchmark table)
- Humanity’s Last Exam (HLE): **56.8%** without tools, **64.7%** with tools (Project Glasswing; note: Anthropic states it still performs well at low effort, suggesting possible memorization concerns)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:
- SWE-bench Verified: **93.9%** (Anthropic Project Glasswing; memorization-screen note reported by Anthropic)
- SWE-bench Pro: **77.8%** (Project Glasswing)
- SWE-bench Multilingual: **87.3%** (Project Glasswing)
- SWE-bench Multimodal (internal Anthropic implementation): **59.0%** (Project Glasswing; not directly comparable to public leaderboard)
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:
- **No verified public long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) or explicit context-window figure found** in accessible primary sources.

### Normalized scores (1–100)

> Derived from the raw public evidence above. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency excluded from Overall.

- **Tool use: 91/100.** Strong agentic evidence on public benchmarks: CyberGym 83.1%, OSWorld-Verified 79.6%, BrowseComp 86.9%, and Terminal-Bench 2.0 82.0% (92.1% in Anthropic’s extended setting), plus Frontier Red Team reports of autonomous end-to-end vulnerability discovery/exploitation workflows. Capped by lack of broad public tool-benchmark coverage (Tau/Toolathon/MCP-Atlas etc. not publicly reported).
- **Reasoning: 88/100.** Excellent GPQA Diamond (94.6%) and solid HLE with tools (64.7%), but HLE without tools 56.8% and Anthropic notes possible memorization at low effort; other major reasoning benchmarks (LCR/CritPt/AA index) not publicly verified, limiting confidence at the very top tier.
- **Context window: 50/100.** No verified public context-window size or long-context retrieval results found in accessible primary sources; assigned a neutral provisional score pending verified specification/measurements.
- **Multimodal: 40/100.** Limited public evidence of multimodal capability: OSWorld-Verified (79.6%) implies visual/computer-use competence and SWE-bench Multimodal 59.0% was reported on an internal implementation, but no clear verified specification of supported input/output modalities beyond text/code-centric use in public materials.
- **Coding: 95/100.** Exceptional verified coding/security results: SWE-bench Verified 93.9%, SWE-bench Multilingual 87.3%, SWE-bench Pro 77.8%, Terminal-Bench 2.0 82.0% (92.1% extended), plus extensive real-world vulnerability-finding/exploit evidence reported by Anthropic. Slight cap because several standard coding benchmarks (LiveCodeBench/SciCode) are not publicly reported.
- **Cost efficiency: 35/100.** Restricted, defense-focused preview with reported participant pricing of $25/$125 per 1M tokens after credits and no public/free tier; high capability but expensive and access-limited relative to broadly available models.
- **Overall Score: 73/100.** Mean of the five non-cost dims (91, 88, 50, 40, 95) = 72.8 → 73 (half-up). Best interpreted as a high-end, restricted cybersecurity/coding frontier preview with strong verified coding and agentic performance, but limited publicly verified context/multimodal specs and no broad public availability.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: public internet research via fetched primary sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Project Glasswing: Securing critical software for the AI era (Anthropic)](https://www.anthropic.com/glasswing)
  - [Assessing Claude Mythos Preview’s cybersecurity capabilities (Anthropic Frontier Red Team)](https://red.anthropic.com/2026/mythos-preview)
  - [Claude Mythos Preview system card (Anthropic, PDF)](https://www.anthropic.com/claude-mythos-preview-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
