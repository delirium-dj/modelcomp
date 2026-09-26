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
