# Grok Build 0.1 — findings by GLM 5.3 Flash

- Source: xAI (`grok-build-0.1`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (reasoning coding model)
- **Short description:** xAI's intelligent coding model for agentic software, engineering, and workflow tasks. It is the current listing of xAI's coding-tier model and a re-branded variant/alias of Grok Code Fast 1 (`grok-code-fast-1`, released August 2025) — Artificial Analysis marks the legacy entry deprecated and points to Grok 4.20+ as successors.
- **Provider / access:** xAI first-party API (`grok-build-0.1`, Chat Completions-compatible). No Free ID on OpenCode Zen was found; AA provider availability for the legacy ID is historical.
- **Release / knowledge:** Grok Code Fast 1 released 2025-08-28 (Artificial Analysis FAQ); `grok-build-0.1` listing date not disclosed; knowledge cutoff not disclosed in the sources found.
- **IDs:** `grok-build-0.1` (xAI direct; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`). No Free ID exists on Zen — paid only.
- **Context window:** 256,000 tokens (docs.x.ai model page; BenchLM concurs; AA FAQ says 260k for the legacy ID — minor discrepancy, first-party 256K taken as verified). Max output not stated — unverified.
- **Modalities:** text + image in → text out per docs.x.ai (first-party); Artificial Analysis measured the legacy `grok-code-fast-1` entry as text-only — sources conflict, noted. Reasoning yes (BenchLM classifies the base as non-reasoning); function calling yes; structured outputs (JSON mode) yes; Batch API not supported.
- **Pricing (as of 2026-10-11):** paid — prompts <200k tokens: $1.00 in / $0.20 cached / $2.00 out per 1M; prompts ≥200k tokens: $2.00 / $0.40 / $4.00 per 1M (whole request billed at the higher rate). AA shows $0.00/$0.00 for the deprecated legacy ID (historical promo); cost scored on the verified paid pricing. No free tier on Zen.
- **Architecture:** proprietary — parameter count undisclosed.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page for the exact ID lists **only 1 row** (Gert Labs 49.15% — corroborating the prior fill) and assigns **no public overall score (unranked)**. All other numbers in the prior pass trace to the legacy `grok-code-fast-1` identity (same weights per xAI's alias list) and remain provisional for `grok-build-0.1`. No new evidence; scores are carried, not moved.

Agent / tool use:

- Gert Labs: **49.15%** (Gert Labs rankings via benchlm.ai — corroborated for the exact ID)
- Tau2-Bench: **75.7%** (BenchLM legacy-`grok-code-fast-1` harness — provisional for `grok-build-0.1`)
- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA-GPQA Diamond: **72.7%** (legacy-ID proxy); AA Intelligence Index: **14 (estimated)** (AA #286/673; AA median 12); AA-LCR: **53.0%**; AA-HLE: **8.0%**; CritPt: **0.0%**; AA-Omniscience: **−37.1 index / 23.5% accuracy / 79.3% non-hallucination row** (very high hallucination rate); AA-IFBench: **41.4%** (all legacy-ID proxies via BenchLM)
- MLCR / MRCR: no verified public score found

Coding:

- SWE-bench Verified: **70.8%** (legacy-ID proxy); LiveCodeBench: **62.0%** (Vals harness, legacy-ID proxy)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench / Coding Index: no verified public score found

Long context:

- 256K window; AA-LCR 53.0% is the only long-context signal (legacy-ID proxy)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: the exact-ID BenchLM page holds only the corroborated Gert Labs row, unranked; the legacy-ID proxies stand with their provenance caveats.

- **Tool use: 72/100.** Tau2-Bench 75.7% (Vals, legacy proxy) is a strong tool-use result; Gert Labs 49.15% is now corroborated for the exact ID; capped by missing Terminal-Bench, Tau3, and GDPval-AA numbers.
- **Reasoning: 55/100.** GPQA Diamond 72.7% and AA-LCR 53.0% are mid-band; capped by the estimated AA Intelligence Index of 14, HLE 8.0%, CritPt 0.0%, and a 79.3% hallucination rate / −37.1 Omniscience Index.
- **Context window: 68/100.** 256K lands in the 200K–500K tier (65–84 per methodology), low end of that band; no measured retrieval at 512K+ and unspecified max output cap it.
- **Multimodal: 60/100.** First-party docs.x.ai lists image input (jpg/png, 20 MiB) → text, the +image-in band floor (60–70); AA measured the legacy ID as text-only (which would be 15) — scored on the first-party spec with the conflict flagged.
- **Coding: 68/100.** SWE-bench Verified 70.8% is solid for a fast coding tier but LiveCodeBench 62.0% is mid and no DeepSWE / SciCode verification exists; numbers are legacy-ID proxies, which caps the score.
- **Cost efficiency: 90/100.** Paid only ($1.00/$2.00 short-context) — cheaper than the ~$1.25/$4.25 ≈ 88 reference point, lifted to ~90 by the low output price. Scored independently, never counted toward Overall.
- **Overall Score: 64.6/100.** (72 + 55 + 68 + 60 + 68) / 5 = 323/5 = 64.6 — unchanged. Best fit: a fast, cheap coding-tier executor for agentic software tasks — deprecated lineage, so treat it as a budget code option, not a planner/reasoner.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: the freshly fetched benchlm.ai grok-build-0-1 page holds 1 corroborated row and is unranked; the legacy grok-code-fast-1 proxies from the prior 2026-09-25 pass remain the evidence base; 2026-10-16 re-check: BenchLM page still holds only the Gert Labs 49.15% row, unranked — no new data, no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
