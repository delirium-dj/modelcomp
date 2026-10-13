# MiMo V2.5 Free — findings by GLM 5.3

- Source: Xiaomi (`opencode/mimo-v2.5-free`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (Xiaomi MiMo-V2.5)
- **Short description:** Former free Zen tier of Xiaomi's open-weights omni MiMo-V2.5 (released 2026-04-22). Second pass finds the free tier **dead or effectively ended**: HTTP 403s on Zen free models began with `mimo-v2.5-free` in mid-July 2026 (GitHub issue #45132), Zen re-gated free models to real OpenCode sessions from ~2026-09-16 (blocking third-party clients), and **freetokens' current Zen free list now starts with MiMo V2.6 Flash — v2.5 has dropped off, its slot taken by the successor**. The native open-weights model survives on OpenRouter at **$0.119/$0.238** (price floor fell from $0.105/$0.28). Top use case now: near-free omni text+image work via the native endpoints.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (endpoint still listed — pi.dev: 200K/32K, **text+image input only on this tier** — but free access 403s outside the OpenCode client and the SKU appears superseded); OpenRouter `xiaomi/mimo-v2.5` ($0.119/$0.238 floor; BenchLeader reference $0.14/$0.28); native Xiaomi platform serves the full 1M window; Hugging Face `XiaomiMiMo/MiMo-V2.5`.
- **Release / knowledge:** 2026-04-22 (confirmed); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free ID — likely deprecated); `xiaomi/mimo-v2.5`.
- **Context window:** Zen tier 200K total / 32K out (pi.dev); the native model supports 1M (BenchLeader header confirms).
- **Modalities:** native model: text/image/audio/video in, text out (open-weights omni); **the evaluated Zen free tier serves text+image only** (pi.dev endpoint listing — a downgrade from the first pass's "full omni at the Zen tier" assumption, corrected); reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-10-12):** Zen free tier — **effectively ended** (403s since mid-July; session-gated since 2026-09-16; absent from the current free list); native OpenRouter **$0.119 in / $0.238 out** per 1M; blended $0.175/M — "among the cheapest fifth"; 36 tok/s (slowest quarter), 62.5 s first answer.
- **Architecture:** open weights (AA Openness Index 38.9 retained); Xiaomi omni MoE; parameter count not re-verified.

### Raw benchmarks found

> Second pass adds the BenchLeader profile (54.8 **#226/760**, trend 47→56→66 rising, last measured 2026-10-08) — mostly AA harness rows confirming the first-pass picture, plus one major correction: **AA II settles at 25.2 #156** (the first pass's "38, rank 70/418" was a stale BenchmarkList listing). Category scores: **Instruction following 66 (best)**, Knowledge 57, Multimodal 59, Long context 62, Composite 58, Reasoning 47, **Agents & tools 48**.

Agent / tool use:

- **τ²-Bench: 90.6% #62** (elite, confirmed) — but **τ³-Banking: 8.7% #152** (dreadful, confirmed): the 2026 banking-agent suite breaks it completely
- Terminal-Bench: 2.1 **63.7% #85 (AA)** (confirms Vals 63.7%); TB Hard **41.7% #50**; **TB 4.0 (AA): 0.0% #146** — floor on the newest suite
- **GDPval-AA: 24.8% #156** (updated from 1146 Elo — bottom-half remote-labor, consistent)
- ClawProBench 60.39 (rank 13/48, 96.6% efficiency — retained); Agents' Last Exam 8.6%; Gert Labs 47.5%; Omni-DeepSearch 11.7% (retained)

Reasoning / knowledge:

- GPQA Diamond: AA **85.0% #127** / Vals 81.6% — below the 90% bar (confirmed)
- HLE: **27.2% #167** (below the 40% reference, confirmed); **CritPt: 3.7% #161** (very weak — worse than the first-pass picture)
- **AA Intelligence Index 25.2 #156** (corrected from the stale 38); MMLU-Pro 82.9%; AIIQ 109; ProofBench 16.0% (all retained)
- **Honesty is the quiet strength: AA-Omniscience non-hallucination 68.1% #50** — but accuracy **16.8% #366** (dreadful: honest about not knowing; knows almost nothing); Omniscience index −9.8 #184
- **AA-LCR: 73.0% #176** (mid); Context Arena MRCR AUC-1M 14.3-15.8% (retained — weak near the 1M limit)

Coding:

- SWE-bench Verified (Vals) 71.0%; LiveCodeBench (Vals) 81.5% (retained); **SciCode (AA): 43.9% #143** (weak, confirmed); Vibe Code v1.1 42.2%; Code Migration 14.2%; EvoCode-Bench MT@4 17.3% (retained); **TB 4.0 0.0%** caps agentic coding

Long context:

- Zen tier 200K/32K (the evaluated SKU); native 1M with verified weak retrieval at the limit (AUC 14-16%); AA-LCR 73.0% #176.

Multimodal:

- **MMMU-Pro (AA): 75.4% #95** (below the BenchmarkList's 80.0% read); PanoWorld spatial 37.2% (rank 2/14 — retained niche elite); Design Arena Elo 1288; audio-driven omni search 11.7% (weak). **The evaluated Zen tier serves text+image only** (pi.dev) — the omni input set belongs to the native endpoints.

### Normalized scores (1–100)

- **Tool use: 60/100.** Lowered from 65: τ³ 8.7% #152, GDPval 24.8% #156 and TB 4.0 0.0% are bottom-tier, against elite τ² 90.6% #62, decent TB 2.1 63.7% #85 / TB Hard #50, and the ClawProBench efficiency row.
- **Reasoning: 58/100.** Lowered from 66: GPQA 81.6-85.0% below the bar, HLE 27.2%, CritPt 3.7% #161, the AA II correction to 25.2 #156, and 16.8% #366 accuracy — offset by genuinely good honesty (non-hall 68.1% #50) and mid MMLU-Pro 82.9%.
- **Context window: 70/100.** Held: the evaluated Zen tier caps at 200K/32K (the anchor); the native 1M window has verified weak retrieval at its limit.
- **Multimodal: 76/100.** Lowered from 92: the evaluated Zen tier turns out to serve text+image only (pi.dev correction), and the direct MMMU-Pro read is 75.4% #95; the native omni input set and PanoWorld niche-elite row keep it above the image-only band.
- **Coding: 58/100.** Lowered from 62: SWE-V 71.0% and LCB 81.5% hold, but SciCode 43.9% #143, Vibe 42.2%, Code Migration 14.2% and TB 4.0 0.0% confirm the open-ended floor.
- **Cost efficiency: 95/100.** Lowered from 100: **the free tier is dead** — 403s since mid-July, session-gated since 2026-09-16, and the SKU has dropped off the current Zen free list (superseded by MiMo V2.6 Flash Free). The native model at $0.119/$0.238 is still among the cheapest fifth, hence 95 rather than lower.
- **Overall Score: 64/100.** (60 + 58 + 70 + 76 + 58) / 5 = 64.4 → 64, down from 71.0. Best-fit: the free ride is over — this is now just a very cheap, honest, mid-capability open-weights omni text/image model; for a free Xiaomi tier use MiMo V2.6 Flash Free instead, and for near-free 1M work the native v2.5 endpoints remain the budget option.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (BenchLeader profile as of 2026-10-08 — Artificial Analysis own-harness rows incl. the AA II 25.2 correction; OpenRouter price history to the $0.119/$0.238 floor; DDG-lite searches surfacing the GitHub issue #45132 403 reports beginning with mimo-v2.5-free, the free-claude-code issue #1837 session-gating note dated 2026-09-16, the freetokens.fyi current Zen free list showing v2.5 supplanted by MiMo V2.6 Flash, the chuanxilu free-tier limits study, and the pi.dev endpoint listing correcting the Zen tier's input modalities; first-pass BenchmarkList rows retained where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
