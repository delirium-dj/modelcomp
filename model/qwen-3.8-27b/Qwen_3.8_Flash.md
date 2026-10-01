# Qwen3.8-27B — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B (dense vision-language, open weights)
- **Short description:** Alibaba's Apache-2.0 dense 27B VL model — a standout multimodal/long-document profile (CharXiv 90.2%, OmniDocBench 91.1%, MathVision 94.6% w/ Python, video understanding) plus strong LiveCodeBench (v6 90.3%) and computer-use (OSWorld 84.3%, AndroidWorld 81.9%), on a 262K native (1M YaRN) window. Weaker on GDPval/Briefcase agentic work and HLE (33.9%). BenchLM #56 of 645 (57.56), 55/618 rows.
- **Provider / access:** Qwen / Alibaba open weights (`Qwen/Qwen3.8-27B`, HuggingFace); API via providers. Thinking on by default; no free Zen ID.
- **Release / knowledge:** Qwen3.8-27B model card (HuggingFace); knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B`.
- **Context window:** 262K native, extensible to 1M with YaRN (curated meta); BenchLM lists 262K.
- **Modalities:** Text/image/video in; text out (curated meta) — confirmed by a broad vision/document benchmark suite.
- **Pricing (as of 2026-10-02):** Open weights (Apache-2.0) — self-hosting free; API provider pricing varies.
- **Architecture:** proprietary-trained, open-weight dense 27B, hosted or self-host.

### Raw benchmarks found

> Independently verified against BenchLM (55 of 618 rows; 57.56/100, #56 of 645), citing the Qwen3.8-27B model card, plus Artificial Analysis, Vals AI, VulcanBench and the AA leaderboards (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Multimodal / grounded:

- MathVision 90.0% / **w/ Python 94.6%**; CharXiv **90.2%** (83.7 w/o tools); **OmniDocBench 1.5 91.1%**; RealWorldQA 85.9%; BabyVision w/ Python 85.6%
- AA-MMMU-Pro 76.3%; Vision2Web 62.9%; ERQA 65.5% — a genuine image+video+document VL profile

Coding:

- **LiveCodeBench v6 90.3%**; SWE-bench (Vals) 86.0%; LiveCodeBench (Vals) 84.0%; VulcanBench v3 82.6%
- Terminal-Bench 2.1 73.0%; SWE-bench Pro 61.7%; AA Coding Index 68.1%; DeepSWE 42.2%; NL2Repo 42.3%; AA-SciCode 46.6%

Agent / tool use:

- **OSWorld-Verified 84.3%**; **AndroidWorld 81.9%**; AA-Terminal-Bench 2.1 79.8% / card 73.0%; CoWorkBench 70.7%; WebArena-Verified 64.8%
- GDPval-AA 1411 / 45.5% (weak); AA Briefcase 1401; τ3-Banking 48.0%; AutomationBench 48.2%; JobBench 33.4%; Terminal-Bench 4.0 5.6% (weak)

Reasoning / knowledge:

- **AA-GPQA Diamond 90.5%** (clears 90; Vals 88.9, card 89.2); AA-HLE 33.9% / card 30.8% (under 40 bar); MMLU-Pro (Vals) 84.3; AA Intelligence Index 33.7; IFBench 79.5
- AA-Omniscience Index -10.0 / Accuracy 15.6% / Hallucination 30.3%; CritPt 5.4% (very low); MLCR-AA 21.7; AA-LCR 82.0

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 74/100.** Excellent computer/GUI autonomy (OSWorld-Verified 84.3%, AndroidWorld 81.9%, Terminal-Bench 2.1 73–79.8%) but the professional-knowledge-work suites stay weak — GDPval-AA 1411 / 45.5%, τ3-Banking 48.0%, JobBench 33.4% and Terminal-Bench 4.0 5.6% pull the sustained-office-work signal down.
- **Reasoning: 72/100.** GPQA-Diamond 90.5% clears the 90 bar and MMLU-Pro 84.3 / IFBench 79.5 are solid, but AA-HLE 33.9% misses the 40 bar, CritPt 5.4% is very low, Intelligence Index 33.7 is mid, and the Omniscience profile (Index -10.0, Accuracy 15.6%) flags unreliable factual recall despite a modest 30.3% hallucination rate.
- **Context window: 78/100.** 262K native (1M via YaRN) sits in the undefined 200K–1M band; AA-LCR 82.0 is supportive, but the large window is an extrapolation rather than a demonstrated ≥98% MRCR retrieval, so a solid upper-mid placement on the native 262K.
- **Multimodal: 85/100.** A genuine image+video+document VL profile with elite grounded reads (CharXiv 90.2, OmniDocBench 1.5 91.1, MathVision w/ Python 94.6, RealWorldQA 85.9, MMMU-Pro 76.3) — top of the +video/PDF tier (75–90); text-only output keeps it from the 90–100 non-text-output band.
- **Coding: 78/100.** LiveCodeBench v6 90.3%, SWE-bench (Vals) 86.0% and VulcanBench 82.6% are strong, but DeepSWE 42.2%, NL2Repo 42.3%, SciCode 46.6% and Coding Index 68.1% show it is competitive rather than frontier on repo-scale / scientific code.
- **Cost efficiency: 92/100.** Apache-2.0 open weights (free self-host) make it among the cheapest capable models here; API pricing varies by provider but the self-host floor drives value. Cost is excluded from Overall.
- **Overall Score: 77/100.** Mean of Tool 74, Reasoning 72, Context 78, Multimodal 85, Coding 78 = 77.4 → 77. Best fit: open-weight multimodal vision/document work (CharXiv, OmniDocBench, video) and computer-use agents on a self-hosted budget, where its LiveCodeBench and GUI autonomy are strong; avoid it as an unaided factual/reasoning authority (HLE/GPQA-mem gap, low Omniscience accuracy) and verify office-work (GDPval) tasks.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Qwen3.8-27B model card, plus Artificial Analysis, Vals AI and VulcanBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B.md`, using the same headings.
