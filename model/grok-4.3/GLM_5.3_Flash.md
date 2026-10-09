# Grok 4.3 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 2026 flagship general-reasoning model, superseded by the coding-focused Grok 4.5 in July 2026 but still available — the only Grok with native video input and a 1M-token context, and one of the cheapest frontier-adjacent models at $1.25/$2.50 per million tokens. Best for cheap reasoning at scale, science/analysis, and video understanding.
- **Provider / access:** xAI API (`grok-4.3`, OpenAI-compatible endpoint at `https://api.x.ai/v1`, Chat Completions); also in Grok apps (SuperGrok Lite $10/mo and above) and inside X. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-04-17 (apps, beta) / 2026-04-30 (API); superseded 2026-07-08 by Grok 4.5; knowledge cutoff December 2025.
- **IDs:** `grok-4.3` (xAI API). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (verified via xAI materials and Artificial Analysis); requests over 200K input tokens billed at double the standard rate.
- **Modalities:** text, image and video input (first xAI model with native video — mp4/mov/webm up to 5 min at 1080p, speech transcription, speaker segmentation, object tracking); text output; reasoning yes; tool calls; document generation (PDF/spreadsheets/slides); JSON mode via API.
- **Pricing (as of 2026-10-09):** $1.25 / $2.50 per 1M in/out standard; $2.50 / $5.00 above 200K input; cached input $0.20 per 1M (~84% discount). Paid; free app tier uses Grok 4-class models, not 4.3.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

> Artificial Analysis / OpenRouter rows via benchlm.ai (updated 2026-10-09) + Vals AI. Previously-missing rows now measured.

Agent / tool use:

- Tau2-bench: **97.7%** (AA — near-perfect; corroborates the earlier reading)
- GDPval-AA: **1018 Elo** / 29.2% (AA/OpenRouter via benchlm.ai — fills the previously-missing GDPval row; mid-band anchor)
- Terminal-Bench 2.1 (Vals): **41.9%** (Vals AI — fills the previously-missing TB row; weak)
- APEX-Agents-AA: **17.0%**; AA Agentic Index: **17.2%** (AA — weak agentic rows)
- Gert Labs: **43.86%**; ResearchClawBench: **12.4%** (benchlm.ai)
- Terminal-Bench / Tau3-Banking / MCPAtlas / Claw-Eval / Toolathon: no verified public score found
- Artificial Analysis agentic-tool components: not broken out for this model

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (AA — corroborates; Vals: **91.4%**)
- HLE: **35.0%** (AA — under the 40% bar)
- Artificial Analysis Intelligence Index: **37.6** (AA current reading via benchlm.ai — updates the 2026-09-07 re-based "25 (91st of 200)" and the launch-era 53.2 v4.0 readings)
- AA-LCR: **64.3%** (OpenRouter via benchlm.ai — fills the previously-missing LCR); CritPt: **8.0%**
- IFBench: **81.3%** (AA — new)
- AA-Omniscience: Index 18.0, accuracy **34.6%**, hallucination rate **25.0%** (OpenRouter — good honesty)
- MMLU-Pro (Vals): **85.8%** (benchlm.ai)
- AIME 2025 / MMLU: no verified public score found ("data not available")
- MMMU-Pro: **78.1%** (AA — measured vision)

Coding:

- LiveCodeBench (Vals): **84.5%** (Vals AI — fills the previously-missing LCB)
- SWE-bench (Vals): **71.4%** (Vals AI — fills the previously-missing independent SWE row)
- SciCode: **47.3%** / AA-SciCode: **48.3%** (AA — fills the previously-missing SciCode; below the 55%+ frontier mark)
- AA Coding Index: **42.3%** (AA — weak)
- SWE-bench Verified / SWE-Pro: no verified public score found — xAI has not published a full SWE-bench table and concedes it trails Claude Opus 4.7 on SWE-bench Pro by double-digit points
- Vibe Code Bench / DeepSWE / SWE-Atlas: no verified public score found

Long context:

- AA-LCR **64.3%** measured (fills the previously-missing row); 1M window claimed; 200K cost cliff at 2x rates; no MRCR/RULER value found
- Throughput: ~171 tokens/second output, TTFT ~12 seconds (Artificial Analysis)

Multimodal / vision:

- MMMU-Pro: **78.1%** (AA); AA-MMMU-Pro: **78.1%**; Design Arena Website: **1201** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau2 97.7% is near-perfect, but the filled TB2.1 (Vals) 41.9%, GDPval-AA 1018 Elo (mid-band ~900–1200 → 50–70) and weak APEX 17.0% / AA Agentic Index 17.2% substantially cap the old qualitative 92.
- **Reasoning: 84/100.** GPQA 90.1–91.4% hits the 90%+ frontier reference; HLE 35.0% stays under the 40% bar; AA Index 37.6 (updated up from the re-based 25) and the filled AA-LCR 64.3% are mid-pack; IFBench 81.3% and a good 25.0% hallucination rate support it.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ and the 200K cost cliff keep it off the maximum (AA-LCR 64.3% is mid-pack).
- **Multimodal: 85/100.** Native video + image + text input (first for xAI) with measured MMMU-Pro 78.1% and document generation; text-only output — the +video/PDF band is 75–90.
- **Coding: 78/100.** Now with filled rows: LCB 84.5%, SWE-bench (Vals) 71.4%, SciCode 47.3% (below the 55%+ mark); AA Coding Index 42.3% and missing SWE-bench Verified/Pro keep it mid-tier.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M is cheaper than the ~$1.25/$4.25 = ~88 methodology reference (cheaper output), with ~84% cache discount; the 200K doubling is the caveat.
- **Overall Score: 83/100.** Mean of the five quality dims (75 + 84 + 95 + 85 + 78) / 5 = 83.4 → 83. Best-fit: cheap high-volume reasoning, science/analysis and video understanding where frontier coding is not the priority.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing AA/OpenRouter/Vals boards, updated 2026-10-09, theairankings.com); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing TB2.1 41.9% (Vals), GDPval-AA 1018, AA-LCR 64.3%, SciCode 47.3%, LCB 84.5%, SWE-bench (Vals) 71.4%, IFBench 81.3%, MMMU-Pro 78.1%; updates AA Index 25→37.6 — Tool 92→75, Reasoning 85→84, Coding 70→78, Overall 85→83.
- Future sources: add a new file next to this one, e.g. `Grok_4.5.md`, using the same headings.
