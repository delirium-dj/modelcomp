# Solar Pro 4 — findings by Fledge Alpha

- Source: Upstage AI (`solar-pro-4`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4 (SP4)
- **Short description:** Upstage's flagship proprietary reasoning model, optimized for agent reliability, document work, and cost control; August 2026.
- **Provider / access:** Upstage Console, OpenRouter (`upstage/solar-pro4`), AIMLAPI, on-premises; OpenAI-compatible API.
- **Release / knowledge:** August 6–20, 2026; Feb 2026 training cutoff.
- **IDs:** `upstage/solar-pro4`, alias `solar-pro4-260806`; no Zen Free ID verified.
- **Context window:** 512K–524K tokens (AA lists 384K); 128K max output.
- **Modalities:** text + image in (AIMLAPI), text out; reasoning mode; tool calling; structured outputs.
- **Pricing (as of 2026-10-05):** $0.30 in / $1.20 out per 1M, cache read $0.06.
- **Architecture:** proprietary; params undisclosed; OpenRouter/Hermes Agent integrations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **57.0** (Upstage blog)
- GDPval-AA v2: **38.8** (Upstage blog)
- BrowseComp: **49.2** (Upstage blog)
- MCP-Atlas: **61.4** (Upstage blog)
- APEX-Agents: **18.7**; τ³-Banking: **23.0** (Upstage blog)

Reasoning / knowledge:

- GPQA Diamond: **89.0** (Upstage blog)
- MMLU-Pro: **86.3** (Upstage blog)
- AIME 2026: **95.3** (Upstage blog)
- AA Intelligence Index: **42** (Upstage PR) / 28.1 (BenchLeader) — versioning differs
- AA-LCR: **71.0%** (Upstage blog); 74.0% (BenchLeader)

Coding:

- SWE-Bench Verified: **70.6** (Upstage blog, OpenHands)
- LiveCodeBench: **87.8** (Upstage blog)

Long context:

- 512K native; AA-LCR ~71–74 documented.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 76/100.** Terminal-Bench 57, GDPval-AA 38.8, MCP-Atlas 61.4, BrowseComp 49.2 — documented agent-execution gains.
- **Reasoning: 85/100.** GPQA 89.0, MMLU-Pro 86.3, AIME 95.3 — real frontier rows.
- **Context window: 92/100.** 512K native with documented AA-LCR ~71–74.
- **Multimodal: 68/100.** Image input documented via AIMLAPI; no vision benchmarks published.
- **Coding: 82/100.** SWE-Bench Verified 70.6 and LCB 87.8 are verified launch rows.
- **Cost efficiency: 86/100.** $0.30/$1.20 per 1M; 90% launch promo through Sept 10.
- **Overall Score: 81/100.** Mean of five non-cost dims (76+85+92+68+82)/5 = 80.6 → 81; best fit: cost-efficient document-heavy agentic workflows with strong knowledge/reasoning.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Upstage launch blog and news post, AA article, BenchLeader, AIMLAPI, console docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
