# Qwen 3.5 Plus — findings by Kimi K3

- Source: Alibaba (`Qwen3.5-Plus` / `qwen3.5-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's Feb-2026 flagship Qwen 3.5-series model — a 397B-total / 17B-active hybrid Gated DeltaNet + MoE, released open-weight (Apache 2.0), aimed at frontier-level coding, instruction following, and multimodal work at low compute cost. Known criticism: overthinking (verbose, sometimes inconsistent reasoning chains) that the 3.6 successor targeted.
- **Provider / access:** Alibaba Model Studio / OpenAI-compatible endpoints; third-party hosts incl. Qubrid AI (`Qwen/Qwen3.5-Plus`, defaults temperature 0.6 / top_p 0.95). Open weights for self-hosting.
- **Release / knowledge:** Released February 2026 (Qubrid launch coverage).
- **IDs:** `qwen3.5-plus` (API), `Qwen/Qwen3.5-Plus` (Qubrid catalog string). No Free ID exists on OpenCode Zen.
- **Context window:** 1M tokens (reported working well on large codebases/long documents in third-party testing).
- **Modalities:** Full multimodal input — text + image + audio (per Qubrid comparison; the heavier audio/video sibling is Qwen 3.5 Omni). Reasoning mode (`enable_thinking`) supported.
- **Pricing (as of 2026-10-01):** Official Alibaba list pricing not re-verified in this pass; cheap third-party hosting available (Qubrid: start at $5 top-up). Cost score marked provisional.
- **Architecture:** 397B total / ~17B active parameters, hybrid Gated DeltaNet + Mixture-of-Experts; Apache 2.0 open source (Qubrid).

### Raw benchmarks found

Agent / tool use:

- IFBench (instruction following): **76.5** (vs GPT-5.2 75.4 — cited by Qubrid comparison, Apr 2026)
- Terminal-Bench 2.x / Tau3 / GDPval-AA / Claw-Eval: **no verified public score found** for this exact model

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt: **no verified public score found** for this exact model
- Qubrid playground head-to-head vs Qwen 3.6 Plus (Apr 2026): 106.27 tok/s, TTFT 6.86s, 1,858 reasoning tokens → 178 output words (overthinking behavior reproduced)

Coding:

- SWE-bench Verified: **76.4** (roughly level with Gemini 3 Pro, per Qubrid comparison citing launch numbers)
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** for this exact model

Long context:

- 1M window; "worked well in practice for large codebases and long documents" (Qubrid, qualitative); no MRCR/RULER quantified retrieval published.

### Normalized scores (1–100)

- **Tool use: 65/100.** IFBench 76.5 shows strong instruction following; capped by the absence of Terminal-Bench/Tau3/Claw-Eval numbers and production-reported inconsistency/retry costs.
- **Reasoning: 60/100.** No GPQA/HLE published; capable class per peer outcomes, but documented overthinking and flaky repeats cap it mid-band.
- **Context window: 90/100.** 1M window (≥1M tier) with decent practical retrieval in third-party testing but no quantified needle benchmarks to justify the top of the band.
- **Multimodal: 90/100.** Text + image + audio input natively (audio-in band 90–100); heavier video workloads belong to the 3.5 Omni sibling; text-only output.
- **Coding: 85/100.** SWE-bench Verified 76.4 is near-frontier (≈ Gemini 3 Pro class per the comparison); capped by missing independent LiveCodeBench/SciCode and next-gen successors surpassing it.
- **Cost efficiency: 70/100 (provisional).** Open-weight (self-host at infra cost) plus cheap third-party hosting; official Alibaba list price not verified in this pass — scored conservatively pending a sourced price.
- **Overall Score: 78/100.** Half-up mean of the five quality dims: (65 + 60 + 90 + 90 + 85) / 5 = 78.0 → 78. Best fit: open-weights multimodal flagship for self-hosted or cost-sensitive deployments; superseded by Qwen 3.6 Plus for production agent loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (Qubrid AI model coverage and Qwen 3.5 Plus vs 3.6 Plus head-to-head, Apr 2026); scores are normalized 1–100 interpretations — several raw rows rest on a single third-party source and are marked provisional.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
