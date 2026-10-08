# Gemini 3.1 Pro — findings by Laguna XS 2.1

- Source: Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (preview)
- **Short description:** Google's mid-cycle reasoning-focused upgrade to Gemini 3 Pro (first ".1" increment), released 2026-02-19; leads on abstract reasoning (ARC-AGI-2 77.1%) and graduate science (GPQA 94.3%) at a fraction of Opus-class pricing.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI; `thinking_level` low/medium/high/max; tools incl. Google Search, URL context, code execution, file search.
- **Release / knowledge:** 2026-02-19 (preview); knowledge cutoff not published in sources found.
- **IDs:** `gemini-3.1-pro-preview` (Gemini API). No Zen Free ID found.
- **Context window:** 1M tokens (1,048,576) total; 65,536 max output (per CodeWalkers/DataCamp).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes (thinking levels); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** ≤200K context: $2 / $12 per 1M in/out; >200K: $4 / $18; cached input read $0.20, cache write $0.38.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.3%**; Terminal-Bench 2.0: **68.5%** (Google release figures via AI Release Tracker / MetricNexus)
- MCP Atlas: **78.2%** (Google release figures via AI Release Tracker)
- Toolathlon: **48.8%** (AI Release Tracker)
- BrowseComp: **85.9%** (Google release figures)
- OSWorld-Verified: **76.2%** (AI Release Tracker)
- GDPval-AA: **1314 Elo**; GDPval-AA v2: **965** (AI Release Tracker); GDPval win/tie rate **67.3%**
- Finance Agent v2: **43%** (AI Release Tracker)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google model card; 94.4–95.6% on third-party trackers — top published score at release)
- HLE (no tools): **44.4%**; HLE (search + code): **51.4%** (Google model card)
- ARC-AGI-2: **77.1%** (ARC Prize Verified — more than 2x Gemini 3 Pro's 31.1%)
- FrontierMath Tier 1–3 / Tier 4: **36.9% / 16.7%** (AI Release Tracker)
- MATH: **93.0%** (Serenities AI)
- Arena Elo (Text / Code): **1485 / 1445** (AI Release Tracker)
- BullshitBench v2: **37%** (AI Release Tracker)
- CritPt / LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (single attempt, Google model card; 80.2% idapt)
- SWE-bench Pro (Public): **54.2%** (single attempt; vs GPT-5.2 55.6, GPT-5.3-Codex 56.8)
- LiveCodeBench Pro: **2887 Elo** (MetricNexus; vs GPT-5.2 2393)
- DeepSWE 1.1: **12%** (AI Release Tracker — very weak)
- MLE-Bench: **42.6%** (AI Release Tracker)
- Next.js Evals: **75%** (AI Release Tracker)
- SciCode / Vibe Code Bench: no verified public score found in sources checked

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K average; **26.3%** at 1M pointwise (Google model card)

Multimodal (supporting): MMMU-Pro **80.5%**, CharXiv Reasoning **83.3%** (AI Release Tracker)

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP Atlas 78.2%, OSWorld-Verified 76.2% and BrowseComp 85.9% are strong, but TB 2.1 70.3% sits well below the ~88% frontier ref and Toolathlon 48.8% is mid-pack — capped there plus missing Tau3/Claw-Eval rows.
- **Reasoning: 93/100.** GPQA 94.3% (top published at release), ARC-AGI-2 77.1% (SOTA at release) and HLE 44.4% no-tools all clear frontier refs; capped by no CritPt row and weaker FrontierMath Tier 4 (16.7%).
- **Context window: 95/100.** 1M window lands in the 95–100 tier, but MRCR v2 at 1M pointwise is only 26.3% — far below the ≥98% retrieval needed for 100, so it sits at the tier floor.
- **Multimodal: 95/100.** Native text/image/audio/video/PDF input (audio-in tier 90–100) with MMMU-Pro 80.5% and CharXiv 83.3% backing it; text-only output caps it below the very top.
- **Coding: 86/100.** SWE-bench Verified 80.6% and LiveCodeBench Pro 2887 Elo are frontier-adjacent, but SWE-bench Pro 54.2% trails GPT-5.2/5.3-Codex and DeepSWE 1.1 at 12% is a clear long-horizon weakness.
- **Cost efficiency: 75/100.** $2/$12 (≤200K) is well below Opus-class pricing (~$3/$15 ≈ 60 band) and cached input is $0.20; the >200K tier ($4/$18) and preview status cap it.
- **Overall Score: 90.2/100.** Mean of (82, 93, 95, 95, 86) = 90.2 — best value frontier reasoning + multimodal model; pick something else for long-horizon agentic coding.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google DeepMind model card, MetricNexus, AI Release Tracker, CodeWalkers, DataCamp, Serenities AI, idapt); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
