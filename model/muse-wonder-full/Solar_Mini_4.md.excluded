# Muse Wonder Full (max) — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** Meta / Muse Wonder Full (`muse-wonder-full`; Muse Code only)
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (max) — alias `muse-wonder-full`; max-reasoning flagship of the Muse Wonder family
- **Short description:** Meta's first frontier-class agentic model (2026-10-12, Meta Superintelligence Labs), tied #2 on the AA Intelligence Index v4.3.2 (56, behind Opus 5.5's 58). Access is Muse Code subscriptions only (Power $50/mo, Maximum $200/mo) — not on the Meta Model API; the API model is `muse-wonder-1.0`.
- **Provider / access:** Meta Superintelligence Labs — newsroom launch 2026-10-12, Meta Developer docs, Muse Code Power/Maximum Usage subscriptions. No API access.
- **Release / knowledge:** Released 2026-10-12. Knowledge cutoff: not disclosed.
- **IDs:** `muse-wonder-full` (Muse Code); API counterpart `muse-wonder-1.0` (Wonder, Standard mode).
- **Context window:** 1,048,576 tokens (1M) total. Max output: not disclosed.
- **Modalities:** Text, image, video, audio, PDF input; text output; reasoning default on (max effort in Muse Code).
- **Pricing (2026-10-31):** Subscription-only — Muse Code Power ($50/mo) or Maximum ($200/mo); default allows contributor training on submitted content (Contributor mode off = no training). **Not sold per token.** Conflict resolution: AICoder's "$4.00/$20.00 per 1M" matches the Wonder *API* pricing and is a quote error — AA/docs confirm Full is subscription-only.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0 (max): **57%** (Meta-reported; Muse Spark 1.3 max was 33% — +24; level with Gemini 4 Argon high).
- GDPval-AA v2.1 (max): **1,857 Elo** — independent AA board, #2 behind Opus 5.5 (1,866); within CI of Opus 5.5 and Sonnet 5.5 (1,838). Vals' Harvey legal-agent harness gives Wonder Full 4th (21.67%) — harness-dependent.
- Coding Agent Index (Muse Code, max, independent AA): **68** — tied Claude Code Sonnet 5.5 max (68), Opus 5.5 max (66); Muse Spark 1.3 max = 54.
- Agentic Index: **68.9** (BenchGap estimate, 2026-10-29).
- DeepSWE 1.1: Wonder 78.8 vs Full 79.0; SWE-Marathon: Wonder 53.1 vs Full 57.5 (Meta table, max effort).

**Reasoning / knowledge:**
- GPQA Diamond: **95.7%** — BoardGap estimate, medium confidence.
- HLE (no tools): **55.5%** measured.
- AA-LCR: **83.7%** measured.
- SciCode: **62.6%** measured (AA) / 62.1% estimated — #3 on SciCode.
- CritPt: **32.9%** measured — #1 on CritPt leaderboard (nearest competitors 31–32%).
- MMLU 93.7% / MMLU-Pro 86.2% / MMMLU 92.1% (BenchGap estimates).
- AA-Omniscience accuracy 41.0% measured; hallucination rate 33% → 23% — least-hallucinating ≥45-IQ scorers.

**Coding:**
- SWE-bench Verified: **96.8%** estimated (BenchGap); Vals SWE-bench 94.8% estimated.
- SWE-bench Pro: **78.9%** estimated; DeepSWE 79.0% estimated.
- SWE-Marathon: **57.5%** measured (Full) vs 53.1% (Wonder) — max effort.

**Multimodal / speed / cost:**
- 1,048,576 ctx; max output not disclosed; no per-token pricing (subscription). Input ~6.44M tokens per AA-index task (16% less than Wonder's 7.69M).
- Multimodal: text + image + video + audio + PDF in, text out — richest input set of the family.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 57% (max, +24 over predecessor, level w/ Gemini 4 Argon high); GDPval-AA 1,857 (within 9 Elo of Opus 5.5); Coding Agent Index 68 measured. Capped by max-effort token load (~6.44M input/task).
- **Reasoning: 90/100.** GPQA Diamond 95.7% (frontier bar GPQA 90%+ → 90–100); CritPt 33% (#1); SciCode 62.6% (#3). HLE 55.5 is mid-tier — GPQA carries the score.
- **Context window: 96/100.** 1,048,576 tokens — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+.
- **Multimodal: 82/100.** Text + image + video + audio + PDF in — richest input set; text output only.
- **Coding: 91/100.** SWE-bench Verified 96.8% estimated / 94.8% measured — frontier-class; Coding Agent Index 68 vs 54 predecessor. Estimates carry confidence caveats.
- **Cost efficiency: 65/100.** Not per-token; $50–$200/month subscriptions; at ~$4/$20 rates, full AA-index task ≈ $28 equivalent — steep vs $2/$10 peers.
- **Overall Score: 90/100.** (90+90+96+82+91)/5 = 449/5 = 89.8 → half-up 90. Best fit: frontier agentic coding/professional model for Muse Code power users; subscription-only distribution makes it a luxury pick vs API-billed rivals.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Newsroom — Introducing Muse Wonder and Muse Wonder Full](https://about.fb.com/news/2026/10/introducing-muse-wonder-and-muse-wonder-full/)
  - [Artificial Analysis — Muse Wonder Full (max) model page](https://artificialanalysis.ai/models/muse-wonder-full)
  - [Artificial Analysis — Muse Wonder article](https://artificialanalysis.ai/articles/muse-wonder)
  - [BenchGap — Muse Wonder Full benchmark scores](https://benchgap.net/model/muse-wonder-full)
  - [Awaited.dev — Muse Wonder Full isn't the model in the API](https://awaited.dev/releases/muse-wonder-api-vs-full/)
  - [LLM Match Maker — Muse Wonder Full](https://www.llmmatchmaker.com/blog/muse-wonder)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; access conflict (subscription-only vs per-token quote) documented.
