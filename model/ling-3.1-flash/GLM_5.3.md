# Ling 3.1 Flash — findings by GLM 5.3

- Source: InclusionAI (`opencode/ling-3.1-flash`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-02 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash (Zen Free tier: "Ling 3.1 Flash Free")
- **Short description:** InclusionAI's (Ant Group) hybrid reasoning model for coding, multi-step analysis, and tool-using agents — the successor to Ling 3.0 Flash (released **2026-09-29** per BenchLeader; the launch screenshots said 09-30 — flagged). Two weeks post-launch, **the first independent AA measurements landed strong**: **HLE 39.4% #87 (at the 40% reference line), AA Intelligence Index 41.1 #56, GDPval-AA 55.9% #25, SciCode 54.0% #66, Terminal-Bench 4.0 33.3% #37, AA-LCR 83.0% #25 (elite long-context), and good honesty (62.1% non-hall #67)** — while **still free** (Zen free tier live per freetokens' tracked list; NovitaAI on OpenRouter serving at $0.000/$0.000) with **212 tok/s (fastest quarter)**. Top use case: the best free fast-tier agentic text model measured this cycle — cyber/tool-heavy work at $0 with a real 262K window.
- **Provider / access:** OpenCode Zen `opencode/ling-3.1-flash` (Free tier `ling-3.1-flash-free`, Chat Completions-compatible — **still live**); **OpenRouter NovitaAI at $0.000 in / $0.000 out, 262K, 64 tok/s**; Vercel AI Gateway `inclusionai/ling-3.1-flash` (Novita; reference rates $0.30/$0.90).
- **Release / knowledge:** **2026-09-29** (BenchLeader) / 2026-09-30 (launch screenshots — flagged); knowledge cutoff not published.
- **IDs:** `opencode/ling-3.1-flash` (limited-time Free ID `opencode/ling-3.1-flash-free`); `inclusionai/ling-3.1-flash` (Vercel/Novita).
- **Context window:** **262,144 tokens / 32,768 max output** (confirmed by BenchLM + Vercel + the provider row).
- **Modalities:** text in / text out (long-context text workflows; no image/video/audio — the vision line is the separate Ling 3.0 Flash VL, this cycle's batch-11 dossier); hybrid reasoning (BenchLeader measures a single config so far); tool-using agent support by design.
- **Pricing (as of 2026-10-13):** **Free — $0/$0 on both the Zen free tier (still live) and the Novita OpenRouter row**; reference list rates $0.30/$0.90 (blended $0.45/M — "cheaper than most"); 212 tok/s measured (fastest quarter), 11 s first answer; $0.022/session; caveat unchanged: during the free period collected data may be used to improve the model — not for confidential code.
- **Architecture:** 560B total / 25B activated MoE (Vercel card, retained); open-weights status still unverified (no accessible public HF card).

### Raw benchmarks found

> Second pass adds the first independent measurements: **4 AA-harness rows via BenchLeader** (not yet ranked — needs 5 across 2 categories) — and they upgrade every quality dimension. Partial category scores: **Composite 76, Reasoning 71, Long context 67, Knowledge 63**.

Agent / tool use:

- **GDPval-AA v2.1: 55.9% #25** — gap filled; a genuinely strong rank for the flash tier
- **Terminal-Bench 4.0 (AA): 33.3% #37** — strong on the newest suite (vs Ling 3.0 Flash's ~0.5% era floor; the vendor's TB 4 launch claim of 40.4% reads consistent, both retained)
- Vendor launch rows retained: skillsBench 68.7%, AutomationBench 52.5%, CyberGym 87.9%, Finance Agent v2 57.9%, DRACO 85.5%, SWE-Atlas Codebase QnA 55.9% — the cyber/tool breadth story is now half-independent (TB 4.0 corroborates); Terminal-Bench 2.1 / τ² / τ³ / Claw-Eval / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- **HLE (AA): 39.4% #87** — gap filled; at the 40% reference line, remarkable for the tier; **CritPt: 18.0% #68** (mid — the residual weak row)
- **AA Intelligence Index: 41.1 #56** — strong (the family's best AA II measured this cycle)
- **Honesty good: AA-Omniscience non-hallucination 62.1% #67**; accuracy 29.1% #182; index 2.2 #116; HealthBench Professional 65.3% (vendor, retained)
- GPQA / LCR-dedicated rows: still absent (unranked — 4 rows only)

Coding:

- **SciCode (AA): 54.0% #66** — gap filled; at the 55% reference (strong for flash tier)
- TB 4.0 33.3% #37 doubles as the agentic-coding signal; SWE-bench Verified / LiveCodeBench / Vibe: still no verified public score (unchanged gaps)

Long context:

- **262K confirmed; AA-LCR: 83.0% #25 — elite within the window** (Long context 67 is among its best categories).

Multimodal:

- Text-only workflows (unchanged; vision lives on the Ling 3.0 Flash VL line).

### Normalized scores (1–100)

- **Tool use: 70/100.** Raised from 65: the gap filled strong — GDPval 55.9% #25 and TB 4.0 33.3% #37 (the newest suite, where most peers floor at 0-15%) — plus the retained cyber breadth (CyberGym 87.9%, DRACO 85.5%) and skillsBench 68.7%; τ³/TB 2.1/MCP-Atlas remain unmeasured.
- **Reasoning: 72/100.** Raised from 58: HLE 39.4% #87 sits at the reference line, AA II 41.1 #56 is strong, honesty 62.1% #67 good — CritPt 18.0% #68 is the residual cap; GPQA remains unmeasured.
- **Context window: 74/100.** Raised from 70: 262K confirmed, with elite measured retrieval inside it (AA-LCR 83.0% #25).
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 68/100.** Raised from 60: SciCode 54.0% #66 (at the reference) and TB 4.0 33.3% #37 are strong flash-tier rows — no SWE-V/LCB rows yet, which caps the confidence.
- **Cost efficiency: 100/100.** Held: $0/$0 on both the Zen free tier (verified still live) and the Novita OpenRouter row, at 212 tok/s in the fastest quarter — the best free speed-value measured this cycle; the data-use caveat stands.
- **Overall Score: 60/100.** (70 + 72 + 74 + 15 + 68) / 5 = 59.8 → 60, up from 54. Best-fit: the strongest free fast-tier agentic text model measured this cycle — reference-line HLE, AA II 41 #56, GDPval #25, elite in-window retrieval (83% #25), and 212 tok/s at $0 on two routes; the 4-row unranked measurement record means the confidence interval is wide, so re-verify when the fifth row lands — but on current evidence it beats most paid flash tiers for cyber/tool work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-02 report (the first independent AA-harness measurements via BenchLeader as of 2026-10-13 — HLE/CritPt/SciCode/TB 4.0/GDPval/Omniscience/AA-LCR/AA II; the NovitaAI OpenRouter $0-row; the freetokens Zen free-list verification from this cycle's earlier passes; the 2026-09-29/30 release-date discrepancy flagged; the vendor launch rows retained where not contradicted — TB 4.0's vendor 40.4% vs AA 33.3% spread flagged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
