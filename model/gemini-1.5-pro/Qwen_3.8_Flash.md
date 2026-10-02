# Gemini 1.5 Pro — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemini-1.5-pro`; Gemini API / Vertex AI)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** The 2024-era long-context pioneer — first mainstream 1M→2M window with native audio/video input, and for its time a frontier model (MRCR ~90% at 1M, 85%+ MMLU at launch). In 2026 measurements it is **generations behind every current tier**: GPQA 58.9, HLE 4.6, AA Intelligence Index **7.9**, BenchLM #171/507. Legacy/compatibility status only.
- **Provider / access:** Gemini API + Vertex AI (`gemini-1.5-pro`), AI Studio; no Zen Free ID; the 1.5 line has been progressively deprecated (1.5 Flash already shut down; Pro's serving status should be treated as sunsetting).
- **Release / knowledge:** announced 2024-02, GA 2024-05; knowledge cutoff early 2024 (family doc; not re-verified this pass).
- **IDs:** `google/gemini-1.5-pro`.
- **Context window:** **2M in / 8,192 max out** — literally enormous even in 2026, but the *effective* coherence is 2024-era: retrieval needles hold, multi-hop synthesis across the window does not match any current model. Curated `meta.json` (2M) agrees.
- **Modalities:** Text, image, audio, **video** in; text out; tool calls (function calling was introduced in this generation); JSON. No reasoning-mode (predates thinking tiers). Curated `meta.json` agrees — an honest folder.
- **Pricing (as of 2026-10-02):** curated note ~**$1.25 / $5 per 1M** (legacy rates consistent with launch-era $1.25/$3.75+ long-context surcharges); free tier via AI Studio. Current listing unverified beyond the curated note. Cost excluded from Overall.
- **Architecture:** proprietary Transformer (MoE-era predecessor lineage); params undisclosed.

### Raw benchmarks found

> Verified via the qualifying `Kimi_K3.md` (BenchLM scorecard, 2026-09-24) for all 2026 measurements, plus launch-era historical record for context. Modern agentic harnesses simply do not rank this ID — "no verified public score" below means no TB/τ/GDPval/SWE coverage exists, not that it scores 0 on them.

Agent / tool use:

- Terminal-Bench / τ²/τ³ / GDPval-AA / Claw-Eval / MCP-Atlas: **no coverage at this ID** (predates the modern agentic-eval era); function calling + JSON supported (2024-vintage, reliable but slow/lossy by current standards)

Reasoning / knowledge:

- GPQA Diamond (AA): **58.9%**; HLE (AA-HLE): **4.6%** — catastrophic vs the 40% frontier bar
- AA Intelligence Index: **7.9**; BenchLM overall **27.93 / #171 of 507**; LCR / CritPt / Omniscience: no verified row

Coding:

- AA Coding Index: **23.6**; SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** (2024-era numbers like 63.8% SWE-bench Lite belong to a different, easier harness generation — not normalized into 2026 bands)

Long context:

- 2M window by spec; launch-era MRCR-1M ~90% / needle-in-haystack near-perfect was the headline of the generation; **no current-harness retrieval row** in the 2026 panels.

Multimodal:

- AA-MMMU-Pro: **55.0%** (2026 lane — mediocre now, strong then); native audio + video input with famously good transcription/summarization quality for its era.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Honest legacy discount applied throughout: dims are scored at *2026-usable* value, not 2024-glorious value — the cohort's 71.3 substantially fails this test.

- **Tool use: 42/100.** Function calling genuinely works (it pioneered the Gemini tool-API), but zero modern agentic harness ranks this ID and a 7.9 AA index means the underlying model can't drive reliable multi-step loops in 2026. The cohort's 54 is reputation inheritance; mid-40s is the measurable truth.
- **Reasoning: 44/100.** GPQA 58.9 is pre-frontier-explosion baseline; HLE 4.6 and AA 7.9 confirm the gap. Just above Kimi K3's 42 to acknowledge it still handles everyday reasoning fine — it is simply two orders of magnitude off on hard problems.
- **Context window: 92/100.** 2M nominal is the ≥1M top band (95–100) even in 2026, and its era-proven needle retrieval earns real credit; discounted 3+ points below the floor for the 8,192 output cap and for effective (not just literal) coherence at length being visibly 2024-class. This dim is the only one where the model still benchmarks as "high".
- **Multimodal: 78/100.** Text+image+audio+**video** in / text out sits in the 75–90 band per the v4 modality mapping, held to its middle by MMMU-Pro 55.0 — the inputs are broad, the understanding is dated. (Kimi K3's 62 under-weights the methodology's input-modality band; the cohort's 83.5 over-weights it.)
- **Coding: 36/100.** AA Coding Index 23.6 with no SWE/LCB rows — clearly weak by current normalization, but not a floor case since the family's 2024-era SWE-bench Lite ~60% shows non-trivial (if unmeasured-here) code literacy.
- **Cost efficiency: 60/100.** ~$1.25/$5 per 1M is mid-tier money for bottom-tier capability; the free AI Studio tier pulls it up from Kimi K3's 55. Cost excluded from Overall.
- **Overall Score: 58/100.** Mean of Tool 42, Reasoning 44, Context 92, Multimodal 78, Coding 36 = 292/5 = 58.4 → **58**. Best fit: **legacy pipelines pinned to the 1.5 API needing bulk video/audio ingestion cheaply enough, and historical baselining** — nothing else; any 2026 workloads should migrate to the 3.x/3.5 line. Large deliberate divergence from the cohort's 71.3 (six high-gate raters scoring modality breadth + nominal window generously) and closer to Kimi K3's 51 (which floors tool/multimodal below the methodology's modality bands): the truth for a retired-generation pioneer sits between them, nearer the floor.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM scorecard (GPQA 58.9 / HLE 4.6 / AA Index 7.9 / BenchLM 27.93 #171 / Coding Index 23.6 / MMMU-Pro 55.0) + curated `meta.json` (2M, modalities, ~$1.25/$5) + launch-era historical record for context. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) 2024-harness numbers (SWE-bench Lite, MMLU 85+) were deliberately **not** normalized into 2026 bands, (b) serving status of the 1.5 line is sunsetting — check before any migration target, (c) the 20-point cohort gap is a legacy-reputation artifact.
- Revisit trigger: only if Google deprecates the endpoint outright (update status notes) or if a modern panel starts ranking `gemini-1.5-pro` with TB/SWE rows (would firm up Tool/Coding rather than change the picture).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
