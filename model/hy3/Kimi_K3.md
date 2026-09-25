# Hy3 — findings by Kimi K3

- Source: Tencent / Hy3 (Hunyuan 3, `tencent/hy3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Hunyuan 3, instruct)
- **Short description:** Tencent's open-weight Hunyuan MoE — 295B total / 21B active, 256K context, hybrid fast-and-slow thinking, Apache 2.0. Mid-pack results with a decent LCR (79.0%) but weak agentic scores.
- **Provider / access:** open weights (Apache 2.0); hosted preview on TokenHub ~$0.18/$0.59 per 1M; no OpenCode Zen Free ID.
- **Release / knowledge:** 2026 (after Hy3 Preview; exact date not verified in my sources).
- **IDs:** `tencent/hy3`.
- **Context window:** 256K tokens / 32K max output (catalog + benchlm.ai agree).
- **Modalities:** text/image in; text out; reasoning yes (hybrid thinking); tool calls; JSON mode per serving stack.
- **Pricing (as of 2026-09-24):** TokenHub preview ~$0.18/$0.59 per 1M (catalog note); open weights → self-host.
- **Architecture:** MoE 295B total / 21B active, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1136 Elo** (27.3% normalized) (benchlm.ai)
- AA Agentic Index: **25.6%** (benchlm.ai)
- Terminal-Bench / Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **89.7%** (benchlm.ai)
- HLE (AA-HLE): **33.5%** (benchlm.ai)
- AA-LCR: **79.0%**; CritPt: **4.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **25.3**; BenchLM overall **51.45/100, #69 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **32.0% / 74.1%** (benchlm.ai)

Coding:

- AA Coding Index: **58.8**; AA-SciCode: **48.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- AA-LCR 79.0% within 256K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1193 Elo** (benchlm.ai); image-in per catalog; no MMMU row.

### Normalized scores (1–100)

- **Tool use: 58/100.** GDPval 1136 and Agentic Index 25.6% are below mid-tier; capped by zero terminal/tau/agent coverage.
- **Reasoning: 68/100.** GPQA 89.7% and LCR 79.0% solid; capped by HLE 33.5%, CritPt 4.9%, hallucination 74.1%.
- **Context window: 68/100.** 256K window with decent LCR 79.0%; below the 1M tier.
- **Multimodal: 66/100.** Image input, Design Arena 1193; thin evidence otherwise; text-only output.
- **Coding: 62/100.** Coding Index 58.8, SciCode 48.6%; no SWE-bench-family rows cap it.
- **Cost efficiency: 86/100.** Apache 2.0 open weights + ~$0.18/$0.59 preview hosting.
- **Overall Score: 64/100.** Mean of the five quality dims (58+68+68+66+62)/5 = 64.4 → 64. Best fit: Apache-licensed 256K self-hosting for Chinese/English chat and light coding.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, repo catalog metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
