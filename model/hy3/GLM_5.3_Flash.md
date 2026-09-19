# HY3 — findings by GLM 5.3 Flash

- Source: Tencent (`tencent/hy3` — Hunyuan HY3 open weights)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY3 (Tencent Hunyuan HY3; full July 2026 open release)
- **Short description:** Tencent's open-weight Hunyuan sparse MoE flagship (295B total / 21B active) with a 256K window and hybrid fast-and-slow thinking (`no_think` / `low` / `high` reasoning-effort modes) — the July 2026 production follow-up to April's HY3 Preview. Now superseded in Tencent's own line by the Hy4 preview.
- **Provider / access:** Open weights on Hugging Face (`tencent/Hy3`); hosted preview route on TokenHub (~$0.18/$0.59 per 1M). Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 6, 2026 (BenchLM release record); preview (April 2026) superseded. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `tencent/Hy3` (HF); TokenHub preview endpoint. Reasoning effort values: `no_think` / `low` / `high` (verified in the HF chat template).
- **Context window:** 256,000 tokens; ~32K max output (folder meta; 256K corroborated by BenchLM).
- **Modalities:** Text + image in; text out (folder meta). Tool calling with preserved thinking history is implemented in the chat template; reasoning-toolcall-retry fallback supported.
- **Pricing (as of 2026-09-19):** TokenHub preview ~$0.18 in / $0.59 out per 1M (folder meta). Self-hosting free under Apache 2.0.
- **Architecture:** Open weights, Apache 2.0 (folder meta). Sparse MoE, 295B total / ~21B activated. Hybrid fast-and-slow thinking (three effort tiers incl. a no-think fast path).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2 / Tau3 / GDPval / MCP-Atlas / Claw-Eval: no verified public score found — BenchLM lists **0 sourced benchmark rows** for HY3 as of 2026-09-18 ("tracked, but not publicly ranked yet")
- Tool calling: implemented in the official chat template (with preserved thinking and a reasoning_toolcall_retry fallback strategy)

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / LCR / MRCR: no verified public score found
- Hybrid thinking (`no_think`/`low`/`high`) is verified in the served template, but no published reasoning benchmarks

Coding:

- SWE-bench Verified / Pro / LiveCodeBench / SciCode / DeepSWE / Vibe: no verified public score found

Long context:

- 256K window; no MRCR/RULER retrieval numbers published

Ecosystem position (sourced, non-benchmark):

- BenchLM flags HY3 as superseded: "Tencent has newer models in this line: Hy4 preview" (tracked 2026-09-18)
- Qwen's Aug 3, 2026 E-Commerce Bench mentions second-place GLM 5.2 — no HY3 row surfaced in any cross-vendor table reviewed

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calling with preserved thinking is implemented and verified in the chat template, but with zero published agentic benchmarks the score is a provisional capability-flag midpoint.
- **Reasoning: 58/100.** Hybrid fast-and-slow thinking (three effort tiers) is real and verifiable, yet no GPQA/HLE/Index row exists anywhere — provisional mid score with an evidence dock.
- **Context window: 72/100.** 256K places it in the 200K–500K band (65–84), above the 200K=70 anchor but far from the 1M frontier; no retrieval numbers.
- **Multimodal: 62/100.** Image input claimed in folder meta (60–70 band); the served chat template exposes text-focused content handling — scored at the band floor pending vendor vision rows.
- **Coding: 55/100.** No coding benchmarks published at all; scored provisionally on the 295B/21B open-flagship positioning with a full evidence dock.
- **Cost efficiency: 94/100.** ~$0.18/$0.59 per 1M sits between the ~$0.10/$0.20→97–99 and $0.30/$1.20→90 anchors, leaning high; Apache 2.0 self-hosting makes the marginal cost effectively $0 for capable teams. No free hosted tier.
- **Overall Score: 60.4/100.** (55+58+72+62+55)/5 = 60.4. Best fit: an affordable Apache-2.0 self-host MoE for teams that value license freedom and hybrid thinking — treat all capability claims as unproven until independent rows exist, and note it is already superseded by Hy4 preview.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: BenchLM dossier, Hugging Face `tencent/Hy3` model card/chat template, Tencent blog attempt, cross-vendor tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

