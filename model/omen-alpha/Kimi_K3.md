# Omen Alpha — findings by Kimi K3

- Source: OpenCode (stealth model, `opencode/omen-alpha`; vendor unconfirmed)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Stealth coding model quietly added to OpenCode Go ($10 subscription tier) on 2026-09-04 with no official model card. Backend URL tagging under a `zhipu` namespace has developers speculating it is Zhipu AI-built (the same vendor unmasked behind the Ox Alpha stealth model, GLM-5.3-Flash) — unconfirmed attribution, treated as rumor only.
- **Provider / access:** OpenCode ecosystem (Go subscription); API access via Tokenra; OpenAI-compatible API; zero data retention claimed. Chat Completions-style.
- **Release / knowledge:** Surfaced 2026-09-04 (startupfortune/buildfastwithai coverage of the OpenCode Go addition). Knowledge cutoff unknown — vendor undisclosed.
- **IDs:** `opencode/omen-alpha`. No Zen Free ID (Go subscription / paid API only).
- **Context window:** 128K total (Zen listing); not independently verified.
- **Modalities:** Text in/out per listing. Reasoning mode implied by "Omen Alpha (High)" leaderboard configuration; tool calls yes (runs agentically inside OpenCode).
- **Pricing (as of 2026-09-27):** $0.20 input / $0.66 output / $0.04 cached-read per 1M tokens (omenalpha.io benchmark page; confirm live terms with Tokenra). Also bundled in the $10/mo OpenCode Go plan.
- **Architecture:** Proprietary / stealth — no params, license, or weights disclosed. Community suspects GLM lineage; not officially confirmed.

### Raw benchmarks found

Agent / tool use:

- OpenCode coding-agent leaderboard: **#15 rank**, average **$0.03 / prompt**, average **1:51 / prompt** (snapshot 2026-09-04, transcribed by omenalpha.io benchmark page)
- Terminal-Bench / Tau / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found
- Omniscience Accuracy / Hallucination: no verified public score found

Coding:

- OpenCode project-rubric leaderboard (2026-09-04, "Omen Alpha (High)"): **23.14 / 40 total** — CSV import (PHP) 4/5, Offline sync (PHP) 3.5/5, Bank feed (Dart/Flutter) 2.7/5, Shipping quotes (Go) 3/5; expanded code-quality component 9.94/20 (scales not summed into the total, per source methodology note)
- AI Coding Daily: "Not yet scored on the LLM Coding Leaderboard" (2026-09)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported; 128K listing unverified

### Normalized scores (1–100)

- **Tool use: 50/100.** Provisional. The model demonstrably operates as an agent inside OpenCode (leaderboard run used tool-driven project tasks at $0.03/prompt), but zero agentic benchmarks exist for this ID. Capped by evidence vacuum.
- **Reasoning: 55/100.** Provisional. No GPQA/HLE-class score found anywhere; only the "High" configuration hint that a reasoning mode exists. Conservative mid-low placeholder pending any verified number.
- **Context window: 58/100.** 128K listing maps to the 100K–200K band (50–64); unverified spec, no retrieval data.
- **Multimodal: 15/100.** Text in/out per listing (10–20 band).
- **Coding: 60/100.** The one measured public result: 23.14/40 (~58%) on OpenCode's four-language project rubric at rank #15 — real but non-standard; code-quality subscore 9.94/20 (~50%) drags it. Capped by absence of SWE-bench-class evidence.
- **Cost efficiency: 95/100.** $0.20/$0.66 (cached $0.04) is between the $0.10/$0.20 (97–99) and 92-tier anchors; $0.03/prompt observed cost confirms cheap real runs.
- **Overall Score: 48/100.** (50+55+58+15+60)/5 = 47.6 → 48. Best fit: curious tinkerers on OpenCode Go wanting a cheap stealth coding agent — treat identity and capability as unverified until a real model card or standard-benchmark run appears.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-27
- Method: public internet research (omenalpha.io independent benchmark snapshot, buildfastwithai review, startupfortune unmasking coverage, aicodingdaily model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
