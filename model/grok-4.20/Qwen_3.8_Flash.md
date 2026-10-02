# Grok 4.20 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.20 (`xai/grok-4.20`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (reasoning variant)
- **Short description:** xAI's early-2026 flagship reasoning model that preceded the Grok 4.3 price-cut refresh — a strong generalist (high GPQA, best-in-class ARC-AGI-2, solid coding, multimodal) on a 2M-token context window. Superseded by Grok 4.3 / 4.5 / 4.6 in the line.
- **Provider / access:** xAI API (`grok-4.20`, endpoint `grok-4.20-0309-reasoning`), OpenRouter (`x-ai/grok-4.20`). Chat/Responses; reasoning + tool calls; image input.
- **Release / knowledge:** ~2026-02/03 (endpoint dated 0309); knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.20`.
- **Context window:** 2M tokens (BenchLM-verified) — NOTE: the curated `meta.json` claims "128K / Text in/out", an unverified placeholder contradicted by BenchLM's 2M window and multiple image-modality rows; scored on the verified data.
- **Modalities:** text + image in; text out; reasoning on; tool calls. Published visual rows (MMMU-Pro, CharXiv, ERQA, SimpleVQA, MedXpertQA-MM) confirm image understanding; no verified audio/video or non-text output.
- **Pricing (as of 2026-10-02):** no independently confirmed GA rate card retrieved; xAI flagship band ≈$2–3 in / $6–15 out per 1M (curated meta says only "Standard pricing"). Cost scored conservatively; excluded from Overall.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Verified against BenchLM (24 of 618 rows; overall 59.18/100, #52 of 645), citing Meta's Muse Spark comparison chart, Vals AI, OpenRouter and the ARC Prize leaderboard (fetched 2026-10-02). BenchLM flags partial coverage → conservative overall.

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (Vals TB 2.1: 44.2%); DeepSearchQA **62.8%**; Gert Labs **38.36%**
- OSWorld / GDPval-AA / τ²: **no verified Grok 4.20 row found**

Reasoning / knowledge:

- GPQA-Diamond: **88.5%** (Vals 88.6%); MMLU-Pro (Vals) **86.3%**
- HLE w/o tools: **31.6%** (under the 40% bar)
- ARC-AGI-2: **53.3%** (strong); ARC-AGI-3: **0.1%**; HealthBench Hard 20.3%; MedXpertQA (Text) 50.2%

Coding:

- SWE-bench Verified: **76.7%** (Vals 72.2%); SWE-bench Pro **51.8%**
- LiveCodeBench: **84.3%** (Vals) / LiveCodeBench Pro **74.2%**; Vibe Code Bench **4.06%**

Multimodal / long context:

- MMMU-Pro **75.2%**; MedXpertQA-MM **65.8%**; CharXiv **60.9%**; SimpleVQA **57.4%**; ERQA **54.1%**; Design Arena Website **1237**
- 2M window; no MRCR/RULER ≥98%-at-length retrieval row published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 60/100.** DeepSearchQA 62.8% is decent but Terminal-Bench 2.0 47.1% / 2.1 44.2% and Gert Labs 38.36% are squarely mid, and no OSWorld/GDPval/τ² agentic row is published for this model — below the frontier band.
- **Reasoning: 78/100.** GPQA-Diamond 88.5% and a standout ARC-AGI-2 53.3% are near-frontier, but HLE 31.6% misses the 40% bar and ARC-AGI-3 0.1% is essentially nil, so upper-mid rather than the 90 band.
- **Context window: 96/100.** A verified 2M-token window exceeds the ≥1M tier; no published ≥98% long-context-retrieval metric (MRCR/RULER), so just below the ceiling.
- **Multimodal: 68/100.** Text + image in / text out is the +image 60–70 band, and five independent visual rows (MMMU-Pro 75.2, MedXpertQA-MM 65.8, CharXiv 60.9, SimpleVQA 57.4, ERQA 54.1) support it; no video/audio input or non-text output keeps it from the 75–90 band.
- **Coding: 78/100.** SWE-bench Verified 76.7% and LiveCodeBench 84.3% are strong, but SWE-bench Pro 51.8%, Vibe Code Bench 4.06% and Terminal-Bench 47% drag it below the frontier 90s.
- **Cost efficiency: 75/100.** No confirmed GA rate card retrieved; scored provisionally in the xAI flagship band (~$2–3 in / $6–15 out per 1M). Cost is excluded from Overall.
- **Overall Score: 76/100.** Mean of Tool 60, Reasoning 78, Context 96, Multimodal 68, Coding 78 = 76.0 → 76. Best fit: a 2M-context multimodal reasoning + coding generalist with genuinely strong abstract reasoning (ARC-AGI-2 53.3%) and clean code; weaker on hands-on agentic terminal tasks and long-context retrieval depth, and now price/trailing-intelligence displaced by Grok 4.3 and later.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Meta Muse Spark chart, Vals AI, OpenRouter and ARC Prize; fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Flagged that the curated meta.json (128K/text-only) is a placeholder contradicted by the verified 2M multimodal data; pricing left provisional (no confirmed rate card found).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
