# Grok 4.3 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.3`)
- Date: 2026-09-24 (UTC)
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
- **Pricing (as of 2026-09-24):** $1.25 / $2.50 per 1M in/out standard; $2.50 / $5.00 above 200K input; cached input $0.20 per 1M (~84% discount). Paid; free app tier uses Grok 4-class models, not 4.3.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **97.7%** (xAI materials, cited by theairankings.com)
- Terminal-Bench, Tau3-Banking, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon: no verified public score found
- Artificial Analysis agentic-tool components: not broken out for this model

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (Artificial Analysis)
- HLE: **35.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **53.2 (~ranked 38th)** on the launch-era v4.0 scale; **25 (91st of 200, $0.17/task)** on the re-based v4.3 scale of 7 Sep 2026 (Artificial Analysis; both readings dated)
- AIME 2025 / MMLU: no verified public score found ("data not available")
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found — xAI has not published a full SWE-bench table and concedes it trails Claude Opus 4.7 on SWE-bench Pro by double-digit points
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval value verified (1M window claimed; 200K cost cliff at 2x rates; no MRCR/RULER value found)
- Throughput: ~171 tokens/second output, TTFT ~12 seconds (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-Bench 97.7% is near-perfect and clears the Tau3 ~50%+ frontier reference; missing Terminal-Bench/Tau3/GDPval numbers and the lack of any published agentic table keep it under 95.
- **Reasoning: 85/100.** GPQA Diamond 90.1% hits the 90%+ frontier reference; HLE 35.0% stays under the 40% bar and the AA Index (53.2 launch-era, ~38th; 25 re-based) is mid-pack rather than top — those gaps cap it.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100); no measured ≥98% retrieval at 512K+ and the 200K cost cliff keep it off the maximum.
- **Multimodal: 85/100.** Native video + image + text input (first for xAI) with motion reasoning and document generation; text-only output — the +video/PDF band is 75–90.
- **Coding: 70/100.** Zero verified public coding benchmarks (no SWE-bench, no LiveCodeBench) and xAI's own concession that it trails Claude Opus 4.7 by double digits on agentic coding — score rests on thin evidence, conservative per the no-hallucination rule.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M is cheaper than the ~$1.25/$4.25 = ~88 methodology reference (cheaper output), with ~84% cache discount and $0.17/task on the re-based AA Index; the 200K doubling is the caveat.
- **Overall Score: 85/100.** Mean of the five quality dims (92 + 85 + 95 + 85 + 70) / 5 = 85.4 → 85. Best-fit: cheap high-volume reasoning, science/analysis and video understanding where frontier coding is not the priority.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (theairankings.com model page with Artificial Analysis and xAI data, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
