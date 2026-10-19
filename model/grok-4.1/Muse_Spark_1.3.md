# Grok 4.1 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.1 (`opencode/grok-4.1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (Fast Reasoning cut)
- **Short description:** xAI's Nov 2025 efficiency reasoning model (grok-4-1-fast-reasoning): a "frontier multimodal model optimized specifically for high-performance agentic tool calling" with 2M context at $0.20/$0.50. Top use case: cheap high-volume tool-calling agents.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning`, aliases `grok-4-1-fast`, `grok-4-1-fast-reasoning-latest`); available in Enterprise API; OpenCode Zen ID `opencode/grok-4.1`.
- **Release / knowledge:** 2025-11-17/19 release (llm-stats compare + BenchLM record; xAI Enterprise API notes Nov 2025); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/grok-4.1` (Zen-hosted; xAI native ID `grok-4-1-fast-reasoning`).
- **Context window:** 2,000,000 tokens in, 30,000 out (xAI docs + llm-stats — verified); higher rates above 128K prompt tokens. No public retrieval-at-length numbers found.
- **Modalities:** xAI docs describe it as a frontier multimodal model with function calling + structured outputs; reasoning yes. Exact input modality list not itemized in the public docs excerpt — scored as image-capable by family proxy (provisional).
- **Pricing (as of xAI docs, current):** $0.20 input / $0.05 cached / $0.50 output per 1M (+$25/1K live-search sources).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Tau2-bench: **93.3%** (BenchLM Grok 4.1 Fast vs Inkling compare page, data verified 2026-07-18)
- Terminal-Bench 2.0 / 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP Atlas: **no verified public score found** for this ID (Inkling scored 74.1% on the same BenchLM compare page — not this model)

Reasoning / knowledge:

- AA-GPQA Diamond: **85.3%** (BenchLM compare page, verified 2026-07-18)
- AA-HLE: **17.6%** (BenchLM compare page, verified 2026-07-18)
- AA-Omniscience Accuracy / Hallucination Rate: **25.3% / 72.4%** (BenchLM compare page — high hallucination rate noted)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified, Grok 4.1 Fast (Reasoning) (Vals AI, by task difficulty): **60% (<15 min) / 34% (15m–1h) / 7% (1–4h) / 0% (4h)** (Vals AI SWE-bench page, updated 2026-09-01)
- Vibe Code Bench v1.1: **1.20%** (BenchLM compare page; BenchLM model record tracks Vals exact-leaderboard data — verified weak spot)
- AA-SciCode: **44.2%** (BenchLM compare page)
- BenchLM Coding category: **50.9, #80 of 147** (BenchLM model record, Aug 2026)
- SWE-bench Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (2M window verified via xAI docs; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 93.3% plus xAI's explicit agentic-tool-calling design brief evidence real tool strength; capped by zero public TB/Tau3/GDPval/MCP-Atlas numbers.
- **Reasoning: 72/100.** AA-GPQA 85.3% is solid but AA-HLE 17.6% is weak and the 72.4% hallucination rate (AA-Omniscience) is a genuine honesty discount; capped at 72.
- **Context window: 98/100.** Verified 2M in / 30K out clears the ≥1M tier; held below 100 for lack of any published ≥512K retrieval-fidelity measurement.
- **Multimodal: 65/100.** xAI bills it a multimodal model with image-class inputs assumed by family proxy (provisional); text-only out keeps it mid-band pending an itemized modality list.
- **Coding: 62/100.** Vals SWE splits (60/34/7/0) collapse past 1h, Vibe Code Bench 1.20% is a verified floor-level result, and AA-SciCode 44.2% is mid; capped at 62.
- **Cost efficiency: 97/100.** $0.20/$0.50 paid pricing sits at the ~$0.10/$0.20 (97–99) value reference; ~10.9x cheaper blended than Grok 4.5 (llm-stats).
- **Overall Score: 76/100.** Mean of the five non-cost dims (82 + 72 + 98 + 65 + 62) / 5 = 75.8 → 76; best fit as a bargain tool-calling tier with verified honesty/coding caveats.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (xAI official docs, BenchLM model + compare pages, Vals AI SWE-bench page, llm-stats model compare, xAI release notes via docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Artificial Analysis grok-4-1-fast page (non-reasoning lane: Index 11 est., 2M, text+image, 2025-11-19, deprecated → 4.3), (2) benchgap grok-4-1-fast lane (10 measured as of 2026-10-18), (3) xAI docs models page (4.7-succession + tooling context). Conflicting results compared below.

| Dimension | 2026-09-26 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 82 | 82 | hold — filed Tau2 93.3% (BenchLM compare lane) stands; benchgap Tau2 63.7% measured is a different lane (AA-Tau2 vs BenchLM-Tau2 harness) — both listed, filed lane retained; no TB/GDPval absolute |
| Reasoning | 72 | 72 | hold — filed AA-GPQA 85.3%/AA-HLE 17.6%/Omni 25.3/72.4 (BenchLM compare lane) stand; benchgap AA-GPQA 63.7%/AA-HLE 5.1% measured is a different lane/snapshot — both listed; filed lane retained; Index 11 est. anchor consistent with cap |
| Context | 98 | 98 | hold — 2M reconfirmed on AA; no retrieval curve |
| Multimodal | 65 | 65 | hold — text+image reconfirmed on AA; MMMU-Pro 48.4% measured deepens without moving band |
| Coding | 62 | 62 | hold — Vals splits + Vibe 1.20% + SciCode 44.2% stand; no new SWE-Pro/LiveCode absolute |
| Cost | 97 | 97 | hold — $0.20/$0.50 stands (AA non-reasoning lane carries no price row; filed xAI-docs pricing retained) |
| Overall | 76 | 76 | hold — (82+72+98+65+62)/5 = 75.8 → 76 |

LANE CONFLICTS (both listed, filed lanes retained): benchgap grok-4-1-fast (AA-GPQA 63.7%/AA-HLE 5.1%/Tau2 63.7%) vs filed BenchLM compare page (AA-GPQA 85.3%/AA-HLE 17.6%/Tau2 93.3%) — different harnesses/snapshots of a deprecated cut; neither contradicts within-lane. Scores hold; prior gaps (TB/GDPval/Claw, LCR/CritPt, SWE-Pro/LiveCode, MRCR/RULER) all stand.

Sources: https://artificialanalysis.ai/models/grok-4-1-fast · https://benchgap.net/model/grok-4-1-fast · https://docs.x.ai/docs/models/grok-4-1-fast-reasoning

