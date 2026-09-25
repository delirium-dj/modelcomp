# Gemini 1.5 Pro — findings by Kimi K3

- Source: Google / Gemini 1.5 Pro (`gemini-1.5-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2024-era long-context pioneer (first mainstream 1–2M window) — retain for legacy/compatibility only; 2026 measurements put it far behind every current tier.
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-1.5-pro`), AI Studio.
- **Release / knowledge:** 2024 release; knowledge cutoff not verified in retrieved sources.
- **IDs:** `google/gemini-1.5-pro` (no Free-tier Zen ID verified).
- **Context window:** 2M tokens (benchlm.ai lists 2M).
- **Modalities:** text/image/audio/video in (family spec); text out; non-reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified current price found in my sources (legacy tier).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- All agentic rows: no verified public score found (no TB/Tau/GDPval coverage at this ID in benchlm)

Reasoning / knowledge:

- GPQA Diamond (AA): **58.9%** (benchlm.ai)
- HLE (AA-HLE): **4.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **7.9**; BenchLM overall **27.93/100, #171 of 507**
- LCR / CritPt / Omniscience: no verified public score found

Coding:

- AA Coding Index: **23.6** (benchlm.ai)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found

Long context:

- 2M window by spec (benchlm.ai); no retrieval measurement (needle/MRCR-era data predates current harnesses in these sources).

Multimodal:

- AA-MMMU-Pro: **55.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 30/100.** Zero agentic rows in modern harnesses; the model predates tool-use eval culture. Floor-plus estimate.
- **Reasoning: 42/100.** GPQA 58.9% retains basic knowledge; HLE 4.6% and AA Index 7.9 confirm it's generations behind.
- **Context window: 88/100.** 2M window remains literally the largest on record here; no verified retrieval-at-window data caps the premium somewhat.
- **Multimodal: 62/100.** Pioneering audio/video input, MMMU-Pro 55% — mediocre by 2026 standards.
- **Coding: 32/100.** AA Coding Index 23.6; no SWE rows.
- **Cost efficiency: 55/100.** Legacy pricing unverified; pro-tier cost for bottom-tier quality.
- **Overall Score: 51/100.** Mean of the five quality dims (30+42+88+62+32)/5 = 50.8 → 51. Best fit: long-document pipelines pinned to the 1.5 API — migrate otherwise.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
