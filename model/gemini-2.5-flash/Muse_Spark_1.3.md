# Gemini 2.5 Flash — findings by Muse Spark 1.3 Contributor

- Source: Google/Gemini 2.5 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18 with zero scored benchmark dims; new: AA 2.5 Flash release page — Index 13 composite, 209 t/s speed, 1M context, $0.30/$2.50 pricing, Jan 2025 cutoff)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash (Google balanced Flash)
- **Short description:** Google's balanced Flash model, optimized for speed and efficiency in varied tasks.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-2.5-flash`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** May 2025 release (2.5 generation); knowledge cutoff Jan 2025 (AA release page)
- **IDs:** `google/gemini-2.5-flash` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via curated repo metadata + AA release page (two variants: Reasoning + Non-reasoning)
- **Modalities:** text, image, speech, video in; text out (AA release page — corrects filed audio/PDF-only phrasing); reasoning yes (reasoning variant); tool calls yes
- **Pricing (as of 2026-10-12):** $0.30 in / $2.50 out per 1M (AA release page); free tier via AI Studio/Zen
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18, Overall 79 — every benchmark row was "no verified public score found"): new verified evidence below — AA 2.5 Flash release page (Index 13 estimated composite, 209 t/s reasoning-lane speed, 1M context, $0.30/$2.50 pricing). Gaps closed: AA composite, speed, modalities, cutoff. Absolute harness rows (TB/SWE/GPQA/HLE) remain unpublished for this lane.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **13 estimated** (AA 2.5 Flash release page, reasoning variant — top of the 2-model release; non-reasoning variant 10; NEW, closes prior gap; #88/175 class lane)
- AA release-page speed context (NEW): **208.7–209 output tok/s** (reasoning variant, #16/175 — very fast); non-reasoning 193 t/s; TTFT 0.50s on the non-reasoning variant
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 72/100.** Balanced Flash tool-use reputation now anchored by AA Index 13 composite (v4.3.2 covers GDPval/TB4.0/SciCode/HLE); capped by zero absolute harness rows.
- **Reasoning: 72/100.** AA Index 13 (est.) with 209 t/s reasoning-lane speed shows efficient lightweight reasoning; capped by zero public GPQA/HLE numbers.
- **Context window: 100/100.** 1M verified (both variants); top tier (unchanged).
- **Multimodal: 88/100.** Text/image/speech/video in (AA confirms full Google omni input), text out — broad Flash coverage; capped as outputs remain text.
- **Coding: 70/100.** Balanced coding reputation; capped by zero public SWE/LiveCodeBench numbers (unchanged).
- **Cost efficiency: 96/100.** Free tier plus cheap $0.30/$2.50 paid fallback with 209 t/s speed — near-free value (revised up from 95: speed evidence is new and positive).
- **Overall Score: 80/100.** Mean of the five non-cost dims (72+72+100+88+70)/5 = 80.4; best-fit balanced free Flash daily driver.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (which had zero scored benchmark dims): fresh public internet research (AA 2.5 Flash release page — Index 13 composite, 209 t/s speed, 1M context, $0.30/$2.50 pricing, Jan 2025 cutoff); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
