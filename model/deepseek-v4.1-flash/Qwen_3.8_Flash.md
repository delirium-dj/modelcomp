# DeepSeek V4.1 Flash — findings by Qwen 3.8 Flash

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — 1017 snapshot successor noted (own folder; exact-ID rule keeps base bands) + price cuts since capture, bands unchanged
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

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Snapshot succession — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017 (**"DeepSeek-V4.1-Flash-1017 is a minor update to DeepSeek-V4.1-Flash, delivering substantial improvements across reasoning, coding, agentic"** tasks, 2026-10-17) and https://x.com/ArtificialAnlys/status/2112218661432000694 (**"V4.1 Flash 1017 scores 45 on the Artificial Analysis [Index] … Elo rating on GDPval-AA v2.1 is 1746, an increase of 146 points from DeepSeek V4.1 Flash's rating of 1600"**) — the 1600 matches this report's row exactly · https://kie.ai/blog/deepseek-v4-1-flash-1017-deep-dive (**"Flash-1017 reports 77.0 on DeepSWE with $0.003/1M cache reads"**) · base-id status — https://artificialanalysis.ai/models/deepseek-v4-1-flash (base variant still profiled, released **2026-09-10**) and https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash (original weights live; **8B active prefill / 16B decode**) · pricing — https://llm-stats.com/models/deepseek-v4.1-flash (**"$0.220/M input, $0.007/M cached input, $0.660/M output"**) and https://datanorth.ai/news/deepseek-releases-deepseek-v4-1-flash (**"cut its API price to $0.15 per million input tokens off-peak"**) · lineage — https://www.morphllm.com/deepseek-v4 ("V4.1 Flash Replaced V4 Flash … For the October 17 update, see DeepSeek V4.1 Flash 1017") and https://regolo.ai/deepseek-v4-1-flash-vs-v4-flash (DeepSWE 74.2 vs 54.4 — matches this report's row).

**What moved and how it was resolved:**

1. **A dated snapshot superseded the base id on 2026-10-17 — and the registry already has its own folder (`deepseek-v4.1-flash-1017`).** Per the exact-ID scoring rule (and the kimi-k3 → K3.1 Pro precedent from the previous batch), the successor's gains — Index 39.5→45, GDPval 1600→1746, DeepSWE 74.2→77.0 — are **not merged into this report's bands**; they belong to the 1017 folder's own pass. The base variant remains served and profiled on AA, so it stays ranked; recorded as lineage context.
2. **Pricing drifted downward; Cost 96 unaffected in band.** This report captured $0.30/$1.20; llm-stats now lists **$0.22/$0.66 with $0.007 cached** and DeepSeek cut off-peak input to $0.15 at its Sept 10 launch — further under the $3/$15 ≈ 60 anchor than pass 1 assumed, so 96 holds on verified-if-not-more numbers. Cost is excluded from Overall.
3. **All scored rows stand uncontradicted.** The pass-1 captures — TB 2.1 90.6% (vendor) vs Vals 74.5%, GDPval-AA 1600, DeepSWE 74.2%, Codeforces 3471 — are restated by regolo/morph coverage; the **96.5% hallucination / Omniscience −5.3 flag** remains the audit's worst factuality profile (benchlm's Omniscience board still lists the family negatively). Reasoning 68's cap survives intact.
4. **AA v5 (2026-10-27) — batch-wide scale drift.** The 1017 "scores 45" reading and this id's 39.5 sit on AA's evolving index builds; no evidence of a capability change to the base variant itself, so no band moves. Cross-source note: one LinkedIn post claims V4.1 Flash "ties GPT-6 Astra on a coding benchmark" — vendor-adjacent framing against measured DeepSWE 74.2 (just clearing the 74 ref); declined as unanchored to a specific row, no change.

**Scores changed by this pass:** None. Tool 88, Reasoning 68, Context 94, Multimodal 68, Coding 85 → Overall = half-up mean(88, 68, 94, 68, 85) = 403/5 = 80.6 → **81, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the DeepSeek-V4.1-Flash model card and V4.1 tech report, plus Artificial Analysis, Vals AI, Collinear, JevBench and OpenHarmony Bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (HF model cards, Artificial Analysis + AA's X post, kie.ai, llm-stats, datanorth, morph/regolo lineage); 1017 snapshot gains kept in their own folder per exact-ID rule, price cuts recorded with Cost 96 standing, hallucination flag and all measured rows uncontradicted, v5 treated as scale drift — **no dimension changed and Overall remains 81**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
