# Gemini 3.6 Flash — findings by Laguna XS 2.1

- Source: Google (`gemini-3.6-flash`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's mid-tier agentic workhorse (2026-07-21) — better coding, knowledge work and computer use than 3.5 Flash with ~17% fewer output tokens; now the "previous generation Flash" behind 3.7/3.8 Flash at the same promo rate.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.6-flash`, stable GA), Vertex AI, Gemini Enterprise Agent Platform, Google Antigravity, Gemini app, GitHub Copilot. Thinking levels MINIMAL/LOW/MEDIUM (default)/HIGH. Free tier in AI Studio.
- **Release / knowledge:** 2026-07-21 (GA); knowledge cutoff March 2026 (per HokAI).
- **IDs:** `gemini-3.6-flash` (Gemini API). No Zen Free ID found.
- **Context window:** 1,048,576 in / 65,536 out.
- **Modalities:** text, image, video, audio, PDF in; text out; computer use available as a built-in client-side tool; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** promo $0.75 / $3.75 per 1M in/out through 2026-12-31 (list $1.50 / $7.50 from 2027-01-01); Batch/Flex 50% ($0.375/$1.875); Priority ~$1.35/$6.75; cached input $0.075 ($0.15 from 2027), storage $0.50/M tokens/hour.
- **Architecture:** proprietary; parameter count/architecture not disclosed. ~198 output tok/s (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0%** (Google model card; vs 3.5 Flash 78.4, Sonnet 5 81.2)
- Terminal-Bench 2.1: **78.0%** (Terminus-2, Google model card)
- GDPval-AA v2: **1421 Elo** (Google model card)
- BU Bench: **68%**; CursorBench 3.2: **53.5%** (AI Release Tracker)
- Gray Swan IPI k=1: **7.3%**; BullshitBench v2: **39%** (AI Release Tracker)
- Tau3 / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **34** (Artificial Analysis via HokAI)
- CharXiv Reasoning: **85.2% no tools / 89.4% with tools** (Google model card)
- Arena Elo: Text **1482** / Code **1539** (AI Release Tracker)
- GPQA / HLE / CritPt: no verified public score found in sources checked

Coding:

- SWE-bench Pro (Public): **58.7%** (Google model card; vs 3.5 Flash 55.1)
- DeepSWE v1.1: **49%** (Google model card; up to 65% fewer output tokens observed)
- MLE-Bench: **63.9%** (Google model card — best score tracked by AI Release Tracker at release)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- GDM-MRCR v2 (8-needle): **91.8%** at 128K average; **54.0%** at 1M pointwise (Google model card — 1M pointwise roughly 2x the 3.1 Pro/3.7 Flash generation's ~26%)

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld-Verified 83.0% (built-in computer-use tool), TB 2.1 78.0% and GDPval v2 1421 are strong for a Flash tier; capped by no Tau3/MCP-Atlas rows and mid-table GDPval Elo.
- **Reasoning: 72/100.** CharXiv 85.2% (best in Google's comparison row) and Arena Text 1482 are decent; capped by AA Index 34 and no public GPQA/HLE rows.
- **Context window: 95/100.** 1M window with MRCR v2 91.8% at 128K and 54.0% at 1M pointwise — the best 1M-pointwise retrieval of its Gemini generation, though still far from the ≥98% bar for 100.
- **Multimodal: 95/100.** Text/image/video/audio/PDF in (audio-in tier 90–100); text-only output caps it.
- **Coding: 78/100.** SWE-bench Pro 58.7%, MLE-Bench 63.9% (class-leading at release) and TB 2.1 78.0%; capped by DeepSWE 49% well below the 74% frontier ref.
- **Cost efficiency: 90/100.** Promo $0.75/$3.75 (through 2026-12-31) between the methodology's ~92 and ~88 anchors, with Batch/Flex at half and a real free tier; docked for the January 2027 doubling.
- **Overall Score: 83.6/100.** Mean of (78, 72, 95, 95, 78) = 83.6 — a capable, cheap agentic workhorse; new deployments should evaluate 3.7/3.8 Flash first at the identical promo rate.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google launch post + model card + Gemini API docs/pricing, Cloud docs, HokAI, benchr, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
