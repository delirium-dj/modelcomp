# Inkling — findings by Kimi K3

- Source: Thinking Machines Lab / Inkling (`thinkingmachines/inkling`; canonical 20260715)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weight multimodal MoE (41B active / 975B total) for general-purpose reasoning, coding, agentic and tool-use; 1M context with audio+image input. A smaller 12B/276B sibling, Inkling Small (2026-07-30), exists too.
- **Provider / access:** OpenRouter (`thinkingmachines/inkling`, plus `:free` variant), HF `thinkingmachines/Inkling`, `thinkingmachines/Inkling-Small`.
- **Release / knowledge:** Released ~2026-07-15 (OpenRouter canonical slug date); knowledge cutoff null per listing.
- **IDs:** `thinkingmachines/inkling` (paid $1.00/$4.05 per 1M; free tier `inkling:free` $0); no Zen Free ID verified separately.
- **Context window:** 1M tokens (OpenRouter listing; top provider 524K); max output up to ~472K by provider.
- **Modalities:** text+image+audio in; text out; reasoning supported w/ effort levels (default high); tool calls supported.
- **Pricing (as of 2026-09-24):** $1.00/M in, $4.05/M out, $0.17 cached (OpenRouter); free variant available.
- **Architecture:** open-weight MoE, 41B active / 975B total (OpenRouter listing).

### Raw benchmarks found

Agent / tool use:

- AA Agentic Index: **22.5** (OpenRouter listing benchmark strip)
- τ²/Tau3 / Terminal-Bench / GDPval / Claw rows: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **25** (OpenRouter listing)
- GPQA / HLE / LCR / CritPt / Omniscience rows: no verified public score found

Coding:

- AA Coding Index: **52.1** (OpenRouter listing); Inkling Small: **52.9** coding index
- SWE-bench / LiveCodeBench / SciCode rows: no verified public score found
- Design Arena website: **1227 Elo** (rank 49); codecategories 1212; svg 1124; uicomponent 1211 (OpenRouter/Design Arena)

Long context:

- 1M window by listing; no retrieval measurement found.

Multimodal:

- Audio+image in verified via listing; Design Arena category Elos ~1101–1227 (website/dataviz/gamedev etc.); no MMMU video rows.

### Normalized scores (1–100)

- **Tool use: 55/100.** Agent tool calls + reasoning efforts supported; capped by Agentic Index 22.5 and absent agent-bench rows.
- **Reasoning: 58/100.** AA Intelligence Index 25 — below mid of frontier cohort but reasoning-mode capable; capped by absent hard-reasoning rows.
- **Context window: 80/100.** 1M listing with huge max output; capped by no retrieval evidence.
- **Multimodal: 78/100.** Audio + image in natively — rare at open weights.
- **Coding: 58/100.** AA Coding Index 52.1, Design Arena website 1227; no verified SWE rows cap it.
- **Cost efficiency: 88/100.** Paid-at-$1/$4 plus a genuinely free variant and open weights.
- **Overall Score: 66/100.** Mean of the five quality dims (55+58+80+78+58)/5 = 65.8 → 66. Best fit: open multimodal experimentation where Thinking Machines' tooling integration matters; benchmark-poor as of Sept 2026.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (OpenRouter model API listing incl. Design Arena + Artificial Analysis benchmark strips); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
