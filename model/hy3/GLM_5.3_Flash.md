# HY3 — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3` — Hunyuan HY3 open weights)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan HY3; full July 2026 open release)
- **Short description:** Tencent's open-weight Hunyuan sparse MoE flagship (295B total / 21B active) with a 256K window and hybrid fast-and-slow thinking (`no_think` / `low` / `high` reasoning-effort modes) — the July 2026 production follow-up to April's HY3 Preview. Now superseded in Tencent's own line by the Hy4 preview.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3`); hosted route ~$0.14/$0.58 per 1M (official API pricing per llm-stats; TokenHub preview route ~$0.18/$0.59). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 6, 2026 (Tencent official release, 2026-07-06, confirming enhanced performance over the preview; BenchLM release record). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/Hy3` (HF); TokenHub preview endpoint. Reasoning effort values: `no_think` / `low` / `high` (verified in the HF chat template).
- **Context window:** 256,000 tokens; ~32K max output (folder meta; 256K corroborated by BenchLM).
- **Modalities:** Text + image in; text out (folder meta). Tool calling with preserved thinking history is implemented in the chat template; reasoning-toolcall-retry fallback supported.
- **Pricing (as of 2026-10-05):** Official API ~$0.14 in / $0.58 out per 1M (llm-stats); TokenHub preview route ~$0.18/$0.59. Self-hosting free under Apache 2.0.
- **Architecture:** Open weights, Apache 2.0 (folder meta). Sparse MoE, 295B total / ~21B activated. Hybrid fast-and-slow thinking (three effort tiers incl. a no-think fast path).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified (agentic harness): **74.4%** (BenchLM, base variant; innfactory.ai independently lists ~78%) — fills the 2026-09-19 "no coding benchmarks published" gap
- Terminal-Bench / Tau2 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found for the full HY3 build
- Tool calling: implemented in the official chat template (with preserved thinking and a reasoning_toolcall_retry fallback strategy)

Reasoning / knowledge:

- GPQA Diamond: **~90.4** (llm-stats, full July build) / **87.2** (BenchLM, base variant) — fills the 2026-09-19 "no GPQA/HLE row exists" gap
- HLE / AA Intelligence Index / LCR / MRCR: no verified public score found

Coding:

- SWE-bench Verified: **74.4%** (see above)
- SWE-bench Pro: **~57.9** (llm-stats, full July build)
- LiveCodeBench / SciCode / DeepSWE / Vibe: no verified public score found

Long context:

- 256K window; no MRCR/RULER retrieval numbers published

Ecosystem position (sourced, non-benchmark):

- BenchLM flags HY3 as superseded: "Tencent has newer models in this line: Hy4 preview" (tracked 2026-09-18)
- Tencent's official 2026-07-06 release confirms enhanced performance over the April preview

### Normalized scores (1–100)

- **Tool use: 66/100.** Tool calling with preserved thinking is verified in the chat template and the 74.4% SWE-bench Verified run proves working agentic execution; capped by zero Terminal-Bench/Tau2/GDPval rows for the full build.
- **Reasoning: 78/100.** GPQA Diamond 87.2–90.4 across two boards is a strong measured result that replaces the old evidence dock; capped by cross-source spread and absent HLE/Index rows.
- **Context window: 72/100.** 256K places it in the 200K–500K band (65–84), above the 200K=70 anchor but far from the 1M frontier; no retrieval numbers.
- **Multimodal: 62/100.** Image input claimed in folder meta (60–70 band); the served chat template exposes text-focused content handling — scored at the band floor pending vendor vision rows.
- **Coding: 74/100.** SWE-bench Verified 74.4% (BenchLM base variant; ~78% per innfactory.ai) is a genuinely strong result; SWE-bench Pro ~57.9 is mid and no LiveCodeBench row exists.
- **Cost efficiency: 95/100.** Official API pricing of ~$0.14/$0.58 per 1M (llm-stats) is slightly under the TokenHub route's ~$0.18/$0.59 and leans high between the ~$0.10/$0.20→97–99 and $0.30/$1.20→90 anchors; Apache 2.0 self-hosting keeps the marginal cost at $0. No free hosted tier.
- **Overall Score: 70.4/100.** (66+78+72+62+74)/5 = 70.4. Best fit: an affordable Apache-2.0 self-host MoE whose capability claims now have measured backing (strong reasoning, solid agentic coding) — still superseded by Hy4 preview in Tencent's own line.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-19 pass: BenchLM dossier, HF model card/chat template; 2026-10-05 approved enrichment pass: llm-stats, BenchLM base-variant rows, innfactory.ai, Tencent 2026-07-06 release); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
