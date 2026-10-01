# Qwen 3.8 Flash — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.8 Flash (`opencode/qwen-3.8-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash (open-weights flash tier)
- **Short description:** Alibaba's fast flash tier — strong LiveCodeBench (v6 91.9%) / Coding Index (73.0), GPQA-Diamond 92.3% and an image+video VL profile (MathVision 95.7% w/ Python, CharXiv 90.6, LVBench 76.6), on a 262K window. Offsetting reads: 45.3% hallucination, AA-HLE 38.0% just under the 40 bar, and OSWorld 2.0 19.4% on GUI autonomy.
- **Naming reconciliation:** BenchLM publishes this Flash tier under the model card **`Qwen/Qwen3.8-Flash-Next`** (variant "experimental-preview (Next)", 64.49/100, #39 of 645) — the same Qwen3.8 Flash product line, not a distinct sibling (Max / 27B are separate pages). Scores below are drawn from that page; the curated `opencode/qwen-3.8-flash` entry and this site's `average.md` (82.3) treat it as the served "Qwen 3.8 Flash".
- **Provider / access:** Qwen / Alibaba open weights; served via API providers and OpenCode (`opencode/qwen-3.8-flash`). Reasoning + tool calls.
- **Release / knowledge:** Qwen3.8-Flash-Next model card (HuggingFace); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.8-flash` / `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** BenchLM/model card list **262K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 262K.
- **Modalities:** image + video + text in; text out (MathVision, CharXiv, LVBench, RealWorldQA, Vision2Web confirm vision/video) — curated `meta.json` "Text in/out" is out of date.
- **Pricing (as of 2026-10-02):** Open weights — self-hosting free; flash-tier API pricing near the low end.
- **Architecture:** open-weight dense/MoE flash model, hosted or self-host.

### Raw benchmarks found

> Independently verified against BenchLM `Qwen3.8-Flash-Next` (37 of 618 rows; 64.49/100, #39 of 645), citing the Qwen3.8-Flash-Next model card plus Artificial Analysis (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- **LiveCodeBench v6 91.9%**; SWE Multilingual 81.0%; AA Coding Index **73.0%** (clears 70 bar)
- DeepSWE 58.7%; SWE-bench Pro 62.5%; AA-SciCode 50.6%; NL2Repo 48.1%

Multimodal / grounded:

- MathVision 90.6% / **w/ Python 95.7%**; CharXiv 90.6% (84.6 w/o tools); RealWorldQA 88.5%; **LVBench 76.6% (video)**; AA-MMMU-Pro 79.8%; Vision2Web 64.0%; ERQA 72.3%

Agent / tool use:

- AndroidWorld **84.5%**; CoWorkBench 73.9%; Toolathlon-Verified 73.5%; GDPval-AA 1648 / 55.6%; JobBench 55.7%; Agents' Last Exam 51.2%
- OSWorld 2.0 19.4% (weak GUI-computer-use read)

Reasoning / knowledge:

- **AA-GPQA Diamond 92.3%** / card 91.7% (clears 90); AA-HLE 38.0% / card 35.9% (just under 40 bar); AA Intelligence Index 39.8; IFBench 81.3; AA-LCR 79.7; CritPt 11.1
- AA-Omniscience Index -9.7 / Accuracy 24.5% / **Hallucination 45.3%** — high confabulation

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 76/100.** AndroidWorld 84.5%, CoWorkBench 73.9% and Toolathlon-Verified 73.5% are solid tool-use/agent reads, but OSWorld 2.0 19.4% and GDPval-AA 55.6% (1648) show GUI-computer-use and professional-office autonomy lag — good, not frontier.
- **Reasoning: 78/100.** GPQA-Diamond 92.3% clears the 90 bar and IFBench 81.3 / Intelligence Index 39.8 are respectable, but AA-HLE 38.0% sits just under the 40 bar, CritPt 11.1% is low, and a **45.3% hallucination rate** (Omniscience Accuracy 24.5%) is a real reliability drag.
- **Context window: 80/100.** 262K native sits in the undefined 200K–1M band (upper half); AA-LCR 79.7 supports it and no ≥98% MRCR retrieval is demonstrated, so an upper-mid placement (curated meta conflicts at 128K).
- **Multimodal: 84/100.** A genuine image+video profile with elite grounded reads (MathVision w/ Python 95.7, CharXiv 90.6, RealWorldQA 88.5, video LVBench 76.6, MMMU-Pro 79.8) — top of the +video/PDF tier (75–90); text-only output keeps it under the non-text-output band.
- **Coding: 80/100.** LiveCodeBench v6 91.9% is exceptional and SWE Multilingual 81.0% / Coding Index 73.0% (clears 70) back it, trimmed by DeepSWE 58.7%, SciCode 50.6% and NL2Repo 48.1% on repo-scale work.
- **Cost efficiency: 92/100.** Open-weight flash tier — free self-host and near-lowest hosted pricing make it outstanding value for capability. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 76, Reasoning 78, Context 80, Multimodal 84, Coding 80 = 79.6 → 80. Best fit: fast, cheap multimodal + coding work (vision/video docs, LiveCodeBench, tool-calling agents) on the flash budget — its own lineage's strongest all-round value lane; keep grounded verification on factual output (45.3% hallucination) and don't rely on it for OSWorld-style GUI autonomy.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `Qwen3.8-Flash-Next` rows citing the Qwen3.8-Flash-Next model card plus Artificial Analysis); scored as the served Qwen 3.8 Flash tier — see the naming-reconciliation note in the model card. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md` (already this file) or `Qwen_3.8_Flash_Next.md`, using the same headings.
