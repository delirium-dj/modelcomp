# MAI-Code-1.1-Flash — findings by MiMo 2.6 Flash

- Source: Microsoft (`mai-code-1.1-flash`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's lightweight agentic coding model for GitHub Copilot and VS Code; 138B-total/5B-active sparse MoE distilled from MAI-Thinking-1's compressed checkpoint. 25% faster tokens and 25% fewer tokens than the June 2026 MAI-Code-1-Flash, with +22% Terminal-Bench 2.1 in Copilot CLI and +15% .NET performance.
- **Provider / access:** GitHub Copilot / VS Code / Copilot CLI (production); Microsoft AI APIs. Chat Completions-style.
- **Release / knowledge:** Released 2026-08-11 (model card + Microsoft AI blog); trained March–August 2026; knowledge cutoff not disclosed.
- **IDs:** `microsoft/mai-code-1.1-flash` (inferred from Microsoft AI naming); GitHub Copilot model picker.
- **Context window:** 256K tokens; max output not disclosed.
- **Modalities:** text + image in (screenshots, diagrams, designs); text out; reasoning supported; tool calls.
- **Pricing (as of 2026-10-13):** $0.20 / 1M input, $1.20 / 1M output; cached input $0.02 / 1M (OpenCode data). GitHub Copilot subscription access included for Copilot users.
- **Architecture:** transformer with sparse MoE; 138B total parameters, 5B active. License: Microsoft product/service terms (GitHub Customer Agreement / Microsoft Product Terms) — proprietary, not open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (model card; +22% improvement in GitHub Copilot CLI vs prior generation)
- Agentic coding in real repositories, repository Q&A, refactoring, tool-using developer scenarios (model card positioning)
- Code survival: **+4%**, return visits: **+9%** in production Copilot telemetry (Microsoft blog)

Reasoning / knowledge:

- AA Intelligence Index: no verified public score found
- GPQA Diamond: no verified public score found for 1.1 specifically
- MAI-Thinking-1 lineage provides competitive reasoning at mid-weight (Microsoft positioning)

Coding:

- SWE-bench Verified: **72.6%** (model card; 8.6K tokens per task — more efficient than Haiku 4.5's 69.8% at 20.9K tokens)
- SWE-bench Pro: top results claimed at mid-weight price (Microsoft blog headline; June sibling scored 51.2%, 1.1 improved further — exact 1.1 figure not disclosed in reviewed text)
- Text2WebApp (internal): **74.1%** (vs Haiku 4.5's 11.5%, GPT-5.4 mini's 58.3%)
- ScreenShot2WebApp (internal): **42.1%** (vs Haiku 4.5's 10.0%)
- Vision2Web Level3 (internal): **11.5%**
- .NET tasks: **+15%** improvement vs June model (Microsoft blog)

Long context:

- 256K window; no long-context retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 62.9% is strong for a 5B-active model; production Copilot integration with improved code survival/return visits. Capped by no BFCL/Toolathlon figures and Copilot-CLI-optimized scaffold limiting general agent evaluation.
- **Reasoning: 68/100.** MAI-Thinking-1 lineage delivers "competitive reasoning" per Microsoft; mid-weight positioning. Capped by no GPQA/HLE/AA Intelligence Index public numbers for 1.1 — reasoning claims rest on lineage and IF-bench style evals from the June sibling.
- **Context window: 82/100.** 256K is solid mid-tier 2026 context. Capped by no 1M class and no long-context retrieval measurements.
- **Multimodal: 55/100.** Image input for screenshots/diagrams/designs is a real differentiator for coding workflows (ScreenShot2WebApp 42.1% crushes Haiku 4.5). Capped by coding-specific vision only — no general MMMU-style evals, text-only output.
- **Coding: 82/100.** SWE-bench Verified 72.6% at only 8.6K tokens/task is excellent efficiency; TB2.1 62.9%; WebApp generation 74.1% is category-leading. Capped by SWE-Pro exact 1.1 figure undisclosed and still behind frontier coding models (SWE-V 80%+).
- **Cost efficiency: 92/100.** $0.20/$1.20 with 5B active params and 25% token efficiency vs prior = one of the best cost-per-correct-patch models in its class; included in Copilot subscriptions. Capped by proprietary licensing (no self-host).
- **Overall Score: 72/100.** Mean of (72 + 68 + 82 + 55 + 82) / 5 = 71.8 → **72**. Best-fit recommendation: the default Copilot/VS Code daily-driver for high-volume repo work — near-Haiku-class coding at a quarter the active params and ~1/5 the token cost; not a deep-reasoning or general agentic model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Microsoft AI model card PDF, Microsoft AI blog posts 2026-08-11/10-07, BenchLM comparison pages, OpenCode data compare); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
