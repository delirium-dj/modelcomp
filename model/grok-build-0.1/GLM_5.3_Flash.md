# Grok Build 0.1 — findings by GLM 5.3 Flash

- Source: xAI (`grok-build-0.1`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (reasoning coding model)
- **Short description:** xAI's intelligent coding model for agentic software, engineering, and workflow tasks. It is the current listing of xAI's coding-tier model and a re-branded variant/alias of Grok Code Fast 1 (`grok-code-fast-1`, released August 2025) — Artificial Analysis marks the legacy entry deprecated and points to Grok 4.20+ as successors.
- **Provider / access:** xAI first-party API (`grok-build-0.1`, Chat Completions-compatible). No Free ID on OpenCode Zen was found as of 2026-09-25; AA provider availability for the legacy ID is historical.
- **Release / knowledge:** Grok Code Fast 1 released 2025-08-28 (Artificial Analysis FAQ); `grok-build-0.1` listing date not disclosed; knowledge cutoff not disclosed in the sources found.
- **IDs:** `grok-build-0.1` (xAI direct; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`). No Free ID exists on Zen as of research date — paid only.
- **Context window:** 256,000 tokens (docs.x.ai model page, verified 2026-09-25; AA FAQ says 260k for the legacy ID — minor discrepancy, first-party 256K taken as verified). Max output not stated — unverified.
- **Modalities:** text + image in → text out per docs.x.ai (first-party); Artificial Analysis measured the legacy `grok-code-fast-1` entry as text-only — sources conflict, noted. Reasoning yes; function calling yes; structured outputs (JSON mode) yes; Batch API not supported.
- **Pricing (as of 2026-09-25):** paid — prompts <200k tokens: $1.00 in / $0.20 cached / $2.00 out per 1M; prompts ≥200k tokens: $2.00 / $0.40 / $4.00 per 1M (whole request billed at the higher rate). AA shows $0.00/$0.00 for the deprecated legacy ID (historical promo); cost scored on the verified paid pricing of the current ID. No free tier on Zen, so no data-usage caveat applies.

### Raw benchmarks found

All verified numbers trace to the legacy `grok-code-fast-1` identity (same weights per xAI's alias list); BenchLM coverage is partial (12 of 483 rows, updated 2026-09-24; computed Overall 32.05 #144/507 is a tracker composite). No direct `grok-build-0.1` benchmark runs were found — legacy-ID numbers are the closest proxy and are marked provisional for the current ID.

Agent / tool use:

- Tau2-Bench (**agentic tool use**): **75.7%** (BenchLM, τ²-bench harness) — provisional for `grok-build-0.1`
- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **72.7%** (BenchLM)
- AA Intelligence Index / BenchLM overall: **14 (estimated) / 32.05 (#144 of 507)** (AA #286/673; AA median 12)
- AA-LCR: **53.0%** (BenchLM)
- AA-HLE: **8.0%** (BenchLM)
- CritPt: **0.0%** (BenchLM)
- AA-Omniscience Index / Accuracy / Hallucination Rate: **-37.1** / **23.5%** / **79.3%** (BenchLM — very high hallucination rate)
- AA-IFBench (instruction following): **41.4%** (BenchLM)
- MLCR / MCRR: no verified public score found

Coding:

- SWE-bench Verified: **70.8%** (BenchLM) — provisional for `grok-build-0.1`
- LiveCodeBench: **62.0%** (BenchLM, Vals harness) — provisional for `grok-build-0.1`
- SWE-bench Pro / DeepSWE / SciCode / AA-SciCode / Vibe Code Bench / Coding Index: no verified public score found

Long context:

- 256K window; no MRCR / RULER / GraphWalks retrieval score reported. AA-LCR 53.0% is the only long-context signal.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2-Bench 75.7% (Vals) is a strong tool-use result; capped by missing Terminal-Bench, Tau3, and GDPval-AA numbers — a single-harness score cannot push higher.
- **Reasoning: 55/100.** GPQA Diamond 72.7% and AA-LCR 53.0% are mid-band; capped by the estimated AA Intelligence Index of 14, HLE 8.0%, CritPt 0.0%, and a 79.3% hallucination rate / -37.1 Omniscience Index.
- **Context window: 68/100.** 256K lands in the 200K–500K tier (65–84 per methodology), low end of that band; no measured retrieval at 512K+ and unspecified max output cap it.
- **Multimodal: 60/100.** First-party docs.x.ai lists image input (jpg/png, 20 MiB) → text, the +image-in band floor (60–70); Artificial Analysis measured the legacy ID as text-only (which would be 15) — scored on the first-party spec with the conflict flagged.
- **Coding: 68/100.** SWE-bench Verified 70.8% is solid for a fast coding tier but LiveCodeBench 62.0% is mid and no DeepSWE / SciCode verification exists; numbers are legacy-ID proxies, which caps the score.
- **Cost efficiency: 90/100.** Paid only ($1.00/$2.00 short-context) — cheaper than the ~$1.25/$4.25 ≈ 88 reference point, lifted to ~90 by the low output price. Scored independently, never counted toward Overall.
- **Overall Score: 65/100.** (72 + 55 + 68 + 60 + 68) / 5 = 64.6 → 65 (half-up). Best fit: a fast, cheap coding-tier executor for agentic software tasks — deprecated lineage, so treat it as a budget code option, not a planner/reasoner.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-25
- Method: public internet research (xAI docs, Artificial Analysis model page, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
