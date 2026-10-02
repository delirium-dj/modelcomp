# Muse Spark 1.2 Free — findings by Qwen 3.8 Flash

- Source: Meta / Muse Spark 1.2 (contributor-free tier) (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation — free on OpenCode Zen with training-data consent.
- **Provider / access:** OpenCode Zen free tier (`muse-spark-1.2-contributor-free`); Contributor $0.10/$0.20 and Standard $1.25/$4.25 per 1M paid tiers. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Muse Spark 1.2; succeeded by 1.3); knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free`; Meta model page `muse-spark`.
- **Context window:** 1,048,576 (1M) (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Free Zen tier (consent-based); Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (22 of 618 rows), citing the Meta Muse Spark 1.2 model page, Artificial Analysis, Vals AI, Proximal, VulcanBench and OpenRouter (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta; Vals 69.7%)
- GDPval-AA: **1631** (Meta; AA normalized 49.1%); AA Agentic Index 44.0%

Reasoning / knowledge:

- AA-GPQA Diamond: **90.4%**; AA-HLE **45.5%**
- AA-LCR 79.0%; CritPt 17.7%; Intelligence Index 39.6
- Omniscience Accuracy / Hallucination: 45.4% / **33.3%** (notably low hallucination); MMLU-Pro (Vals) 88.3

Coding:

- Terminal-Bench 2.1 82.9%; SWE-bench (Vals) **86.6%**; AA Coding Index 72.2%
- DeepSWE **59.3%** (well under 74 ref); AA-SciCode 57.4%; VulcanBench v3 87.0
- FrontierSWE v2 **12.0%** — weak on the hardest repo benchmark

Multimodal / long context:

- Omni-input per curated meta (text/image/audio/video/PDF); only Design Arena Website 1318 published
- AA-LCR 79.0 at 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 82.9% and GDPval-AA 1631 are solid but under the frontier refs (88% / 1750), and AA Agentic Index 44.0 with Vals TB 69.7% confirm it trails the current 90-band agents.
- **Reasoning: 84/100.** GPQA-Diamond 90.4% and HLE 45.5% clear both bars with a rare 33.3% hallucination rate; capped by mid Index 39.6, CritPt 17.7% and no ARC-AGI/MRCR rows.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier; AA-LCR 79.0 supports useful long-context behavior but no ≥98% retrieval metric is published, so the band floor.
- **Multimodal: 90/100.** Text+image+audio+video+PDF in / text out puts it in the audio/video 90–100 band; benchmark evidence is a single Design Arena row (1318), so the floor.
- **Coding: 80/100.** SWE-bench (Vals) 86.6%, TB 82.9% and VulcanBench 87.0 are good, but DeepSWE 59.3% (far under 74), FrontierSWE v2 12.0% and Coding Index 72.2% keep it out of the 90 band.
- **Cost efficiency: 97/100.** A genuinely free Zen contributor tier plus $0.10/$0.20 Contributor pricing — effectively the $0 = 100 anchor with a consent caveat; Standard $1.25/$4.25 remains cheap. Cost is excluded from Overall.
- **Overall Score: 86/100.** Mean of Tool 82, Reasoning 84, Context 95, Multimodal 90, Coding 80 = 86.2 → 86. Best fit: free/high-volume agentic coding and omnimodal ingestion where unusually low hallucination matters; hard long-horizon repo work (FrontierSWE 12%) has since been overtaken by Muse Spark 1.3.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Meta Muse Spark 1.2 model page, plus Artificial Analysis, Vals AI, Proximal, VulcanBench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
