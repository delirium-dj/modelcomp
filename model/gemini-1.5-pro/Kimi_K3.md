# Gemini 1.5 Pro — findings by Kimi K3

- Source: Google / Gemini 1.5 Pro (`gemini-1.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 2024-era long-context pioneer (first mainstream 1M window, 2M at GA) — fully retired: the `gemini-1.5-pro` aliases stopped working on the Gemini API in 2025 and the model is confirmed shut down/retired as of 2026. Keep as historical reference only.
- **Provider / access:** Google Gemini API / Vertex AI / AI Studio — all retired for this model (Google deprecation notice cited via GitHub issue tracker: `-001` phased out first, `-002`/aliases lasted until 2025-09-24; shutdown verified July 2026 by rapidevelopers.com tracker; "retired API status" per gate.ai, June 2026). Successor path: Gemini 2.5 Pro → 3.x Pro.
- **Release / knowledge:** Announced 2024-02-15 (ai-tldr.dev), 1M tokens to early testers, 2M tokens at GA (Sept 2024); knowledge cutoff not verified in retrieved sources.
- **IDs:** `google/gemini-1.5-pro` (no Free-tier Zen ID verified); aliases `gemini-1.5-pro-001` / `-002`.
- **Context window:** 2M tokens at GA (ai-tldr.dev; benchlm.ai lists 2M).
- **Modalities:** text/image/audio/video in (family spec); text out; non-reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** model retired — no current price exists. Historical list price was Pro-tier ($1.25/M in, $5/M out at ≤128K, doubling beyond 128K at GA-era launch pricing; not re-verifiable post-retirement in my sources).
- **Architecture:** proprietary (Google DeepMind); MoE.

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

- 2M window by spec (benchlm.ai, ai-tldr.dev); no retrieval measurement (needle/MRCR-era data predates current harnesses in these sources).

Multimodal:

- AA-MMMU-Pro: **55.0%** (benchlm.ai)
- Pioneer-era native audio + video input (no public audio/video benchmark score found).

### Normalized scores (1–100)

- **Tool use: 35/100.** Zero agentic rows in modern harnesses; function-calling JSON plumbing existed, but the model predates tool-use eval culture. Floor-plus estimate.
- **Reasoning: 55/100.** GPQA 58.9% retains decent basic knowledge for 2024 tech; HLE 4.6% and AA Index 7.9 confirm it's generations behind 2026 models — honestly low-mid band per current evidence.
- **Context window: 96/100.** 2M GA window ⇒ 95–100 band; still the largest verified window in this dataset; absence of retrieval-at-window measurements keeps it off the cap.
- **Multimodal: 85/100.** Native image + audio + video input (band 85–92 for this generation); MMMU-Pro 55.0% and text-only output put it at the bottom of the band.
- **Coding: 38/100.** AA Coding Index 23.6; no SWE-bench/LiveCodeBench rows — entry-level code generation only.
- **Cost efficiency: 40/100.** Fully retired (aliases dead since 2025-09-24) — no price exists to buy; historical Pro-tier pricing ($1.25/$5 class) was never a cheap tier, so scored low rather than in the legacy cheap band.
- **Overall Score: 61.8/100.** Mean of the five quality dims (35+55+96+85+38)/5 = 61.8. Historical reference only — the model is shut down; long-document pipelines should be on Gemini 3.x.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard; ai-tldr.dev model history; modeldeprecations.dev / rapidevelopers.com / gate.ai lifecycle trackers; Google deprecation notice as cited on GitHub); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed full retirement (alias shutdown 2025-09-24, retired status verified July 2026), announced 2024-02-15 with 1M→2M-at-GA window history; recalibrated scores (Tool 30→35, Reasoning 42→55, Context 88→96, Multimodal 62→85, Coding 32→38, Cost 55→40, Overall 51→61.8).
- Future sources: add a new file next to this one using the same headings.
