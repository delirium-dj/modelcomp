# Gemini 1.5 Pro — findings by Kimi K3

- Source: Google / Gemini 1.5 Pro (`gemini-1.5-pro`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-24; deprecation at Artificial Analysis confirmed, release date + knowledge cutoff + 2M window verified, no new benchmark coverage — scores unchanged)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro (Sep '24)
- **Short description:** Google's 2024-era long-context pioneer (first mainstream 1–2M window) — **deprecated at Artificial Analysis** (historical data only; Google substitutes point at Gemini 2.0 Flash); retain for legacy/compatibility only.
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-1.5-pro`), AI Studio; provider count at AA no longer listed (deprecation).
- **Release / knowledge:** **Released 2024-09-24** (Artificial Analysis — new this pass); knowledge cutoff **August 2024** (Artificial Analysis — new this pass).
- **IDs:** `google/gemini-1.5-pro` (no Zen ID — also absent from the 2026-10-13 Zen listing).
- **Context window:** **2M tokens** (Artificial Analysis confirms benchlm's first-pass figure — now doubly verified).
- **Modalities:** text/image/speech/video in → text out (Artificial Analysis specs — confirms first-pass family note); non-reasoning (confirmed); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** AA no longer lists a live price (deprecated); first-pass had none — pricing remains unverified.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- All agentic rows: no verified public score found (model predates tool-use eval culture; still no coverage as of 2026-10-13)

Reasoning / knowledge:

- GPQA Diamond (AA): **58.9%** (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): **4.6%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **8 (estimated, #124/296 non-reasoning class)** — artificialanalysis.ai 2026-10-13; first-pass benchlm aggregate was 7.9 — consistent
- BenchLM overall **27.93/100, #171 of 507** (benchlm.ai, first-pass snapshot)
- LCR / CritPt / Omniscience: no verified public score found

Coding:

- AA Coding Index: **23.6** (benchlm.ai, first-pass snapshot)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found

Long context:

- 2M window by spec (now verified by both trackers); no retrieval measurement exists — needle/MRCR-era data predates current harnesses.

Multimodal:

- AA-MMMU-Pro: **55.0%** (benchlm.ai, first-pass snapshot); input breadth officially spans text/image/speech/video.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — second pass confirmed the profile and found no new measured rows.**

- **Tool use: 30/100.** Zero agentic rows in modern harnesses; floor-plus estimate.
- **Reasoning: 42/100.** GPQA 58.9% retains basic knowledge; HLE 4.6% and AA Index ~8 confirm it's generations behind.
- **Context window: 88/100.** 2M window remains literally the largest on record here (now double-verified); no retrieval-at-window data caps the premium.
- **Multimodal: 62/100.** Pioneering audio+video input officially confirmed; MMMU-Pro 55% — mediocre by 2026 standards.
- **Coding: 32/100.** AA Coding Index 23.6; no SWE rows.
- **Cost efficiency: 55/100.** Legacy pricing unverified/withdrawn at AA; pro-tier cost for bottom-tier quality.
- **Overall Score: 51/100.** Mean of the five quality dims (30+42+88+62+32)/5 = 50.8 → 51 (unchanged). Best fit: long-document pipelines pinned to the 1.5 API — migrate otherwise; first-party availability should be treated as end-of-life.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (artificialanalysis.ai model page 2026-10-13 — deprecation notice, release 2024-09-24, cutoff Aug 2024, 2M context, speech/video input confirmed; Zen listing 2026-10-13 — absent; first-pass benchlm.ai rows retained as that snapshot). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
