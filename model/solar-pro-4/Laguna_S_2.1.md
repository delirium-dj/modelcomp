# Solar Pro 4 — findings by Laguna S 2.1

> Source: upstageai/solar-pro-4 (Upstage), e.g. Artificial Analysis, Upstage official blog, PR Newswire
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Solar Pro 4 (Upstage AI). Proprietary agentic reasoning model (Korean).
- Short description: Upstage's proprietary agentic reasoning model with a 512K context window, reasoning-on-by-default, built for multi-step terminal/tool/long-document work; "stops when evidence runs out."
- Provider / access: Upstage API; 1 provider on AA. `noFreeId` (paid only) — repo `meta.json` marks pricing "Unknown" but verified public data follows.
- Release: **August 6, 2026** (Artificial Analysis; PR Newswire "Unveils Solar Pro 4, Scoring 42...").
- Architecture: proprietary (closed weights); parameter count undisclosed (Artificial Analysis).
- Context window: **512,000 tokens** (Artificial Analysis 512k; Upstage blog "512K"). **Below the 1M tier** (≤64K caveat cleared). Max output: 128,000 (Upstage blog); no retrieval-percentage figure.
- Modalities: **text input → text output only** (Artificial Analysis: "supports text input... does not support image input... not multimodal"). +text-in only (0 of image/video/audio/PDF).
- Knowledge cutoff: not stated on AA or Upstage blog.
- Reasoning / tools: Yes — reasoning on by default (configurable effort); τ³-Banking, Terminal-Bench tool use; function calling/structured outputs (Upstage blog / API docs).
- Pricing (as of 2026-09-23): **$0.30 / $1.20** per 1M in/out (Upstage API); cache discount 80% (~$0.22/MTok blended). noFreeId (paid).
- Speed: 54.0 tok/s (#116/175, slow); TTFT 2.08s (below-average latency).

### Raw benchmarks found

> Verified public numbers (Artificial Analysis model page 2026-09; Upstage blog "as of August 2026"; PR Newswire). Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **28** (#19/175 reasoning class; class median 13; "well above average"). (PR Newswire/press headline cites the **August at-launch figure of 42**; AA's current v4.3.2 page shows 28 — re-based. Primary = 28; the 42 launch figure is noted in the reconciliation.)
- Terminal-Bench v2.1: **57** (Upstage blog, "Artificial Intelligence as of August 2026").
- tau3-Banking: **23** (Upstage blog, AA).
- AA-LCR: **71** (Upstage blog, AA — "reason across ~100k tokens of reports").
- Terminal-Bench 2.0/2.1 Hard / 4.0 / SWE-bench Verified / Pro / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Tau3-general / GDPval-AA Elo / GPQA Diamond / HLE / CritPt / AA-Briefcase / AutomationBench-AA / AA-Omniscience / AA-LCR / Toolathon / MCP-Atlas / Humanity's Last Exam / cost-per-IntIndex-task($) / MMMU-Pro: NOT FOUND for this model in fetched pages.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. `Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5)`; Cost excluded. Anchored on **current AA Intelligence Index v4.3.2 = 28** (consistent with my other Sept-2026 findings). Solar Pro 4 has no image support, only 512K context, and is slow — capping several dims.

- **Tool use: 62/100.** TB v2.1 57 + tau3-Banking 23 + GDPval-AA (Index-28 band, near-frontier-open-weight class) suggest mid-60s; capped by no exact GDPval/Tau3-general rank and slow 54 tok/s.
- **Reasoning: 62/100.** AA Intelligence Index 28 (well above its reasoning-class median 13); capped by no standalone GPQA/HLE/CritPt and the lower v4.3.2 figure vs the launch-42 headline.
- **Context window: 80/100.** 512,000 native tokens (≥64K caveat cleared) — strong but below the 1M tier; no retrieval-percentage figure.
- **Multimodal: 15/100.** **Text input only** (AA explicitly: "does not support image input... not multimodal"); 0 of image/video/audio/PDF.
- **Coding: 60/100.** Terminal-Bench v2.1 57 + AA-LCR 71 (long-doc coding context); capped by no SWE-bench/DeepSWE/LiveCodeBench % located.
- **Cost efficiency: 60/100.** $0.30/$1.20 per 1M (~$0.22/MTok blended) — mid-tier value for a 512K reasoning agent; noFreeId (paid) caps below $0.
- **Overall Score: 56/100.** (62 + 62 + 80 + 15 + 60) / 5 = 279 / 5 = 55.8 → 56.

> ⚠️ **Reconciliation note:** The repo AI-Rankings average for this model is **64.1** (audit/model-comparison.md). Two causes: (1) the **Intelligence Index figure changed** — PR Newswire/press headline cites the August-2026 launch figure **42**, but AA's current Sept-2026 v4.3.2 page shows **28** (re-based against an expanded 175-model reasoning class, median now 13). I anchor on the **current v4.3.2 = 28** for consistency with my other Sept-2026 findings (Fable 26→67; GPT-5.4 39→69; Muse 34→67), which lands this model at **56**. (2) Solar Pro 4 is **text-only** (Multimodal 15) and **512K context** (not 1M) — structural caps the ceiling. If the August-2026 Index-42 launch figure were used instead, Tool/Reasoning/Coding lift ~+6 each → ~62. Both the repo's 64.1 (512K text-only, capped ceiling) and my 56 are far below Index-based frontier models; the divergence is the benchmark re-base, documented above.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis Solar Pro 4 model page; Upstage "The Agentic Model That Finishes the Job" blog with AA Aug-2026 scores; PR Newswire). Re-normalized via `model-comparison.md` v4, anchored on the **current AA Intelligence Index v4.3.2 = 28** (vs the Aug-2026 launch figure of 42, both cited). Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.