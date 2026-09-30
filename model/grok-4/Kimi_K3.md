# Grok 4 — findings by Kimi K3

- Source: xAI / Grok 4 (`grok-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's 2025-flagship base Grok 4 — now legacy (128K window, non-reasoning base) with intact GPQA but dated agentic/reasoning metrics; succeeded by 4.1→4.7 line.
- **Provider / access:** xAI API (`grok-4`), X/Grok consumer apps.
- **Release / knowledge:** 2025 release (exact date not verified in current sources); knowledge cutoff not verified.
- **IDs:** `xai/grok-4` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 128K tokens (benchlm.ai).
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning: base = Non-Reasoning (benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; legacy tier.
- **Architecture:** proprietary (xAI).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **74.9%** (benchlm.ai)
- Gert Labs: **42.3%** (benchlm.ai)
- Terminal-Bench / GDPval / Claw tracks: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **87.7%** (benchlm.ai)
- HLE (AA-HLE): **26.7%** (benchlm.ai)
- AA-LCR: **68.0%**; CritPt: **2.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **22.5**; BenchLM overall **52.72/100, #65 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **40.5% / 64.5%** (benchlm.ai)
- FrontierMath v2: **19.7%** T1–3 / **2.1%** T4; AA-IFBench: **53.7%** (benchlm.ai)

Coding:

- React Native Evals: **72.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found at this ID

Long context:

- AA-LCR 68.0% within 128K window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **68.8%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-bench 74.9% is decent; capped by near-total absence of agentic coverage (no TB/GDPval/MCP rows).
- **Reasoning: 62/100.** GPQA 87.7% retains knowledge depth; capped by HLE 26.7%, CritPt 2.0%, FrontierMath ~20%, AA Index 22.5.
- **Context window: 52/100.** 128K window — a generation behind the 1M standard; LCR 68.0% within it.
- **Multimodal: 68/100.** MMMU-Pro 68.8% image input; text-only output caps it.
- **Coding: 60/100.** Only React Native Evals 72.6% measured; no software-engineering benchmark coverage at this ID.
- **Cost efficiency: 65/100.** Price unverified; legacy model typically discounted — provisional.
- **Overall Score: 62/100.** Mean of the five quality dims (66+62+52+68+60)/5 = 61.6 → 62. Best fit: legacy Grok integrations; new work should target 4.5/4.6.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
