# DeepSeek V4.1 Flash — findings by Qwen 3.8 Flash

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE (flash-reasoning) — an input-heavy agentic/coding workhorse with frontier Terminal-Bench (90.6%) and DeepSWE (74.2%) at near-free pricing, but a catastrophic 96.5% Omniscience hallucination rate makes unaided factual recall unusable.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`); open weights `deepseek-ai/DeepSeek-V4.1-Flash` (HF, MIT); no Zen Free ID. Reasoning + tool calls.
- **Release / knowledge:** 2026 (DeepSeek-V4.1-Flash model card + V4.1 tech report); knowledge cutoff not disclosed.
- **IDs:** `deepseek/deepseek-v4.1-flash`; HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1M in / 384K out (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image in; text out; reasoning on; tool calls. No video/audio-in, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $0.30 / $1.20 per 1M; MIT open-weight self-hostable.
- **Architecture:** open-weight MoE (552B total), MIT license.

### Raw benchmarks found

> Independently verified against BenchLM (44 of 618 rows; 64.63/100, #38 of 645), citing the DeepSeek-V4.1-Flash model card and V4.1 tech report, plus Artificial Analysis, Vals AI, Collinear CWE-bench, JevBench and OpenHarmony Bench (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1 **90.6%** (clears the 88 ref) but **Vals 74.5%** — a wide independent gap; CyberGym **88.1%**
- GDPval-AA **1600** (normalized 55.0%); AA AutomationBench **68.9%**; AutomationBench 54.8%; HLE w/ tools 63.9%; AA Briefcase 1426; AA ITBench 46.9%; CWE-bench v1 55.0%
- Long-horizon tail: TB 3.0 30%, TB 4.0 31.2% (AA 26.8%), Agents' Last Exam 31.8%, ExploitGym 15.3%, GDP.pdf 12.8%

Reasoning / knowledge:

- GPQA-Diamond 90.9% (clears 90); **HLE 36.8% / AA-HLE 39.2%** — under the 40% bar; Intelligence Index 39.5; AA-LCR 84.0; CritPt 14.3; MLCR-AA 22.8
- **Omniscience Index -5.3 / Accuracy 46.4% / Hallucination 96.5%** — the worst factuality profile seen in this audit
- Codeforces **3471**; Apex 65.6% — strong competitive math/code

Coding:

- Terminal-Bench 2.1 90.6%; DeepSWE **74.2%** (clears the 74 ref); NL2Repo 65.4%; Codeforces 3471
- AA-SciCode 51.9% (under ref); ProgramBench 20.3%; OpenHarmony Bench 60.3%

Multimodal / long context:

- Chartography (tools) 78.9%; BabyVision w/ Python 89.6%; ZeroBench w/ Python 49.0%; AA-MMMU-Pro 77.0 (image-only band)
- 1M window / 384K out (AA-LCR 84.0 supportive; MLCR-AA 22.8 low; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 90.6% clears the 88 ref with CyberGym 88.1%, AA AutomationBench 68.9% and GDPval-AA 1600 forming a strong agentic cluster, but the Vals TB re-run (74.5%), GDPval under 1750 and the long-horizon tail (TB 4.0 26.8%, ALE 31.8%, GDP.pdf 12.8%) hold it just under the 90 band.
- **Reasoning: 68/100.** GPQA-Diamond 90.9% and AA-LCR 84.0 are solid, but HLE misses the 40% bar (36.8/39.2), Intelligence Index 39.5 and CritPt 14.3 are mid, MLCR-AA 22.8 is weak, and a **96.5% hallucination rate** (-5.3 index) makes unaided reasoning deeply unreliable.
- **Context window: 94/100.** 1M-token window (384K out) meets the ≥1M tier and AA-LCR 84.0 supports it; MLCR-AA 22.8 and no ≥98% MRCR proof keep it at/below the floor.
- **Multimodal: 68/100.** Text+image in with a decent tool-assisted visual suite (Chartography 78.9, BabyVision 89.6, MMMU-Pro 77.0) sits at the top of the +image band (60–70); no video/audio/document rows and no non-text output, so no higher-tier credit.
- **Coding: 85/100.** Terminal-Bench 2.1 90.6%, DeepSWE 74.2% (clears ref) and Codeforces 3471 are genuinely strong agentic/competitive code, trimmed by AA-SciCode 51.9% (under ref) and ProgramBench 20.3%.
- **Cost efficiency: 96/100.** $0.30 / $1.20 per 1M is near-free hosted pricing far under the $3/$15≈60 anchor, plus MIT self-hosting; no hosted free tier on this slug. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 88, Reasoning 68, Context 94, Multimodal 68, Coding 85 = 80.6 → 81. Best fit: input-heavy agentic coding, terminal automation and long-context work at near-free MIT pricing where every output is verified against retrieved context; absolutely not for unaided factual Q&A (96.5% hallucination) — pair it with a grounding/RAG layer or a more factual model for open recall.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the DeepSeek-V4.1-Flash model card and V4.1 tech report, plus Artificial Analysis, Vals AI, Collinear, JevBench and OpenHarmony Bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
