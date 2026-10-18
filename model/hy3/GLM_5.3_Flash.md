# HY3 — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3` — Hunyuan HY3 open weights)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan HY3; full July 2026 open release)
- **Short description:** Tencent's open-weight Hunyuan sparse MoE flagship (295B total / 21B active) with a 256K window and hybrid fast-and-slow thinking (`no_think` / `low` / `high` reasoning-effort modes) — the July 2026 production follow-up to April's HY3 Preview. BenchLM ranks it #85 of 889 (52.75). Now superseded in Tencent's own line by the Hy4 preview (61.36).
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3`); hosted route ~$0.14/$0.58 per 1M (official API pricing per llm-stats; TokenHub preview route ~$0.18/$0.59). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 6, 2026 (Tencent official release, confirming enhanced performance over the preview; BenchLM release record). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/Hy3` (HF); TokenHub preview endpoint. Reasoning effort values: `no_think` / `low` / `high` (verified in the HF chat template).
- **Context window:** 256,000 tokens (BenchLM concurs); ~32K max output (folder meta).
- **Modalities:** Text + image in; text out (folder meta). Tool calling with preserved thinking history is implemented in the chat template; reasoning-toolcall-retry fallback supported.
- **Pricing (as of 2026-10-11):** Official API ~$0.14 in / $0.58 out per 1M (llm-stats); TokenHub preview route ~$0.18/$0.59. Self-hosting free under Apache 2.0.
- **Architecture:** Open weights, Apache 2.0. Sparse MoE, 295B total / ~21B activated. Hybrid fast-and-slow thinking (three effort tiers incl. a no-think fast path).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1136** (AA, independent — normalized **28.3%**; fills the gap the prior passes marked missing; weak)
- AA Agentic Index: **25.6%** (AA — new; weak); Design Arena Website: **1183** (OpenRouter — added 2026-10-16)
- SWE-bench Verified (agentic harness): **74.4%** (BenchLM base variant; innfactory.ai independently lists ~78%) — prior fill, unchanged
- Terminal-Bench / Tau2 / MCP-Atlas / Claw-Eval: no verified public score found for the full HY3 build

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (AA, independent — third-source corroboration of the 87.2–90.4 spread); HLE: **33.5%** (AA — fills the gap, under the 40% bar)
- Artificial Analysis Intelligence Index: **25.3** (AA — fills the index gap; low-mid)
- AA-LCR v1.1: **79.0%** (AA — fills the long-context gap, solid); CritPt: **4.9%** (AA — near-zero)
- AA-Omniscience: **32.0% accuracy / 74.1% non-hallucination row / −18.5 index** (AA — weak)

Coding:

- AA-SciCode: **48.6%** (AA, independent — fills the SciCode gap); AA Coding Index: **58.8%** (AA — new, mid)
- SWE-bench Pro: **~57.9** (llm-stats, prior pass); LiveCodeBench / DeepSWE / Vibe: no verified public score found

Long context:

- AA-LCR 79.0% is the first measured long-context number (solid); 256K window; no MRCR/RULER retrieval numbers published

Ecosystem position (sourced, non-benchmark):

- BenchLM flags HY3 as superseded: "Tencent has newer models in this line: Hy4 preview"

### Normalized scores (1–100)

- **Tool use: 62/100.** (Was 66 on the prior pass.) The measured agentic rows (GDPval 28.3% normalized, AA Agentic 25.6%) document a weaker standardized profile than the chat-template tool-calling design implied; the 74.4% SWE-bench Verified run keeps it above the floor.
- **Reasoning: 78/100.** GPQA Diamond 87.2–90.4 now corroborated across three sources, AA-LCR 79.0% and AA-HLE 33.5% fill the gaps, and the AA Index of 25.3 documents the composite — the band holds.
- **Context window: 72/100.** 256K places it in the 200K–500K band (65–84); AA-LCR 79.0% is the first measured retrieval-adjacent evidence (solid); no MRCR numbers.
- **Multimodal: 62/100.** Image input claimed in folder meta (60–70 band); the served chat template exposes text-focused content handling — scored at the band floor pending vendor vision rows.
- **Coding: 74/100.** SWE-bench Verified 74.4% (~78% per innfactory.ai) with the new AA-SciCode 48.6% and AA Coding Index 58.8% corroborating the mid-frontier placement; no LiveCodeBench row exists.
- **Cost efficiency: 95/100.** Official API pricing of ~$0.14/$0.58 per 1M leans high between the ~$0.10/$0.20→97–99 and $0.30/$1.20→90 anchors; Apache 2.0 self-hosting keeps the marginal cost at $0. No free hosted tier.
- **Overall Score: 69.6/100.** (Was 70.4 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (62 + 78 + 72 + 62 + 74) / 5 = 348/5 = 69.6 — lowered slightly on the 2026-10-11 second pass as the measured agentic rows correct the template-based tool score. Best fit: an affordable Apache-2.0 self-host MoE whose capability claims now have fully measured backing — still superseded by Hy4 preview in Tencent's own line.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Hy3 page with AA board citations, the prior 2026-09-19/10-05 passes on the HF model card/chat template + llm-stats + innfactory.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
