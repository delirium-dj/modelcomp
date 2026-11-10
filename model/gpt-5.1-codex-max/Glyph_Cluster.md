# GPT-5.1-Codex-Max — findings by Glyph Cluster

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's frontier agentic coding model (November 2025) optimized for long-running software engineering tasks, featuring compaction for coherent work across multiple context windows and millions of tokens in a single task.
- **Provider / access:** Proprietary model available in OpenAI Codex surfaces (CLI/IDE/cloud/code review) for eligible ChatGPT plans at announcement; API access was stated as coming soon in the announcement. Exact public API model ID/availability may vary by product surface.
- **Release / knowledge:** Released November 19, 2025 (OpenAI). Knowledge cutoff not explicitly stated in fetched sources.
- **IDs:** `gpt-5.1-codex-max` (product/model name)
- **Context window:** Trained for compaction across multiple context windows and long-horizon tasks over millions of tokens in-session (per OpenAI announcement); fixed base context-window size not explicitly stated in fetched sources.
- **Modalities:** Coding-focused agentic text model in Codex environments; specific input/output modality details not fully specified in fetched announcement text.
- **Pricing (as of 2026-11-10):** Pricing not explicitly stated in fetched announcement; available via Codex plan entitlements at launch (see OpenAI docs for current plan limits/pricing).
- **Architecture:** Proprietary (details not disclosed).

### Raw benchmarks found

> Numbers below are taken from OpenAI's announcement appendix for GPT-5.1-Codex-Max (xhigh, compaction enabled) where extractable.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI announcement appendix, GPT-5.1-Codex-Max xhigh)
- Long-horizon agentic behavior: demonstrated multi-hour/24h+ task persistence in internal evaluations (qualitative, per announcement)
- BFCL / GDPval-AA / Tau / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: no verified public score found in accessible fetched sources
- Artificial Analysis Intelligence Index: no verified public score found in accessible fetched sources

Coding:

- SWE-bench Verified (n=500): **77.9%** (OpenAI announcement appendix, xhigh)
- SWE-Lancer IC SWE: **79.9%** (OpenAI announcement appendix)
- Terminal-Bench 2.0: **58.1%** (OpenAI announcement appendix)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- Compaction enables operation across multiple context windows and coherent work over millions of tokens in a single task (OpenAI announcement)
- Fixed context window / long-context retrieval benchmark: no verified public score found

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Scores are normalized interpretations, not official vendor scores.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency**.

- **Tool use: 84/100.** Strong agentic coding/tool-use performance evidenced by Terminal-Bench 2.0 (58.1%) and demonstrated long-running autonomous task execution in Codex environments; capped by limited standardized non-coding tool-use benchmark coverage in fetched sources.
- **Reasoning: 82/100.** High performance on complex software engineering benchmarks (SWE-bench Verified 77.9%, SWE-Lancer IC SWE 79.9%) implies strong applied reasoning; capped by absence of standalone general reasoning benchmark numbers (GPQA/HLE/AIME) in accessible sources.
- **Context window: 95/100.** Native compaction for coherent multi-context-window operation over millions of tokens in long tasks is a strong long-horizon/context capability; capped slightly by lack of an explicitly stated fixed base window and standardized long-context retrieval scores.
- **Multimodal: 20/100.** Primarily positioned as a coding/agentic text model in Codex; multimodal capabilities not clearly specified in fetched announcement, so scored conservatively.
- **Coding: 92/100.** Excellent reported coding benchmarks (SWE-bench Verified 77.9%, SWE-Lancer IC SWE 79.9%, Terminal-Bench 2.0 58.1%) indicate frontier-level coding/agentic software engineering performance.
- **Cost efficiency: 70/100.** OpenAI reports improved token efficiency (e.g. better performance than GPT-5.1-Codex at medium effort with ~30% fewer thinking tokens on SWE-bench Verified), but concrete pricing was not stated in fetched sources; scored as provisionally good efficiency.
- **Overall Score: 75/100.** Mean of the five non-cost dims (84, 82, 95, 20, 92) = 74.6 → 75 (half-up). Best fit for long-running, high-complexity coding and software-engineering agent workflows where sustained context management and terminal/tool execution matter most.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research via accessible sources (OpenAI announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)
  - [OpenAI — GPT-5.1-Codex-Max system card](https://openai.com/index/gpt-5-1-codex-max-system-card/)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
