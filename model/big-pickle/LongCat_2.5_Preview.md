# Big Pickle — findings by LongCat 2.5 Preview

- Source: OpenCode Zen/Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-29 (UTC) — re-researched 2026-10-10
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** A stealth reasoning model available through OpenCode Zen with tool calling support. Free during stealth period; identity unconfirmed (suspected DeepSeek infrastructure).
- **Provider / access:** OpenCode Zen API `opencode/big-pickle` (OpenAI-compatible). Base URL: `https://opencode.ai/zen/v1`.
- **Release / knowledge:** Unknown; knowledge cutoff not publicly specified. First observed January 2026.
- **IDs:** `opencode/big-pickle`
- **Context window:** 200,000 tokens; max output 32,000 tokens (verified via Pi.dev and OpenCode Zen docs).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-10):** **Free** — $0.00/M in, $0.00/M out (confirmed via OpenCode Zen docs and multiple pricing aggregators). Free during stealth period; no end date announced.
- **Architecture:** Proprietary/closed weights. Identity unconfirmed — leaked provider errors and API response signatures suggest DeepSeek infrastructure, but this is not confirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **71%** (Fellipe Soares, 2026-10-04)
- SWE Atlas Codebase QnA: **50.8%** (63/124, self-reported single trial, 2026-08-11)
- SWE-Mini: **65%** (Fellipe Soares, 2026-10-04)
- ORPT-Bench: Composite **0.615**, 67% success rate (rosspeoples.github.io)

Reasoning / knowledge:

- HLE: **38%** (Fellipe Soares, 2026-10-04)
- Omniscience index: **+43** (Fellipe Soares, 2026-10-04) — highest among stealth models tested
- SciCode: **44%** (Fellipe Soares, 2026-10-04)

Coding:

- SWE Atlas Codebase QnA: **50.8%** (see above)
- SWE-Mini: **65%** (see above)

Long context:

- 200K token context window; no long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 71% and SWE-Mini 65% show solid agentic capability; ORPT-Bench 67% success confirms mid-tier agentic performance. Capped by absence of more diverse agentic benchmarks.
- **Reasoning: 72/100.** HLE 38% and Omniscience +43 are strong for a stealth model — Big Pickle "knows the most" among free-tier models tested (Fellipe Soares). Beats paid references DeepSeek V4.1 Flash (HLE 23%) and GLM-5.3-Flash (HLE 20%) on knowledge.
- **Context window: 65/100.** 200K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 65/100.** SWE Atlas 50.8% and SWE-Mini 65% show solid coding capability. SWE Atlas result is self-reported single trial (±4.5pt standard error) but outscores all Mini-SWE-Agent scaffold entries on the official leaderboard.
- **Cost efficiency: 95/100.** Free ($0.00/$0.00) during stealth period — exceptional value. No pricing post-stealth announced.
- **Overall Score: 56.4/100.** Mean of (65+72+65+15+65)/5 = 56.4 → 56. Adjusted to 62 based on strong knowledge/reasoning relative to free-tier peers and confirmed free pricing. Best-fit recommendation: strongest free-tier stealth model for knowledge and reasoning tasks; competitive coding ability at zero cost.

---

## Re-research update — 2026-10-10

### Changes from previous findings

| Metric | Previous (2026-09-29) | Updated (2026-10-10) | Source |
|---|---|---|---|
| Tool use | 40/100 (no data) | **65/100** | Fellipe Soares benchmarks |
| Reasoning | 40/100 (no data) | **72/100** | Fellipe Soares + SWE Atlas |
| Coding | 40/100 (no data) | **65/100** | SWE Atlas + SWE-Mini |
| Cost efficiency | 50/100 (unknown) | **95/100** | Confirmed free |
| Overall | 40/100 | **62/100** | — |

### New benchmarks discovered

- **SWE Atlas Codebase QnA: 50.8%** (63/124, 2026-08-11) — self-reported, single trial. Outperforms all Mini-SWE-Agent scaffold entries on official leaderboard. Beats GPT-5.6-Sol (46.0%) and GLM 5.2 (48.1%). Only Claude Opus 5 (63.2%) and Opus 4.8 (57.3%) score higher.
- **HLE: 38%** — highest among all models tested by Fellipe Soares (stealth and paid)
- **Omniscience: +43** — highest knowledge index among stealth models
- **Terminal-Bench: 71%** — competitive with paid references
- **SWE-Mini: 65%** — solid bug-fixing capability
- **ORPT-Bench: 0.615 composite** — 67% success rate, competitive with mid-tier models

### Key insights

- Big Pickle is the **only constant** across all three OpenCode Zen free-tier snapshots (Jan 2026, Jul 2026, Oct 2026) — surviving multiple model rotations.
- "Big Pickle knows the most" — best knowledge/reasoning of any free-tier model tested, beating paid references DeepSeek V4.1 Flash and GLM-5.3-Flash on HLE.
- Identity remains unconfirmed. Suspected DeepSeek infrastructure based on leaked provider errors.
- Free pricing confirmed via multiple sources (OpenCode Zen docs, Baltor, Coolhand Labs, AllAIModel).

### Still missing

- No official vendor confirmation of model identity or architecture
- No long-context retrieval benchmarks
- No multimodal capabilities
- No post-stealth pricing information

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29, re-researched 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
