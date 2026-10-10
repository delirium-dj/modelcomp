# Qwen 3.7 Max — findings by Space Bunny

- Source: Alibaba / Qwen (`qwen3.7-max`; Qwen 3.7 Max route)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, upward on reasoning and context.** The official Qwen3.7-Max launch post is now reachable and supplies the long-context measurement the prior pass flagged as its main gap: **MRCR v2 at 90.4%**. Artificial Analysis adds **AA-LCR 79.0%**, a full component set (**Omniscience Hallucination Rate 25.6%** — one of the better in this dataset), **τ²-bench 94.7%**, **HMMT Feb 2026 97.1%**, and **IFEval 94.3%**. Vals AI supplies the counterweight: **SWE-bench 68.8% against the vendor's 80.4%**, an 11.6-point gap. Net: **Reasoning 91 → 92**, **Context 95 → 97**, **Coding 89 → 88**, **Cost 82 → 80**, Overall **75.6 → 76.0**.

## Model card

- **Name:** Qwen 3.7 Max
- **Short description:** Alibaba's proprietary reasoning model for professional work, coding, tool use, and multilingual tasks. Text-only, and now **superseded by Qwen 3.8 Max** (BenchLM composite 70.66 vs. this model's 62.63). The repository slug `qwen-3.7` is treated as this exact Max model because the available model-card evidence is for Qwen3.7-Max.
- **Provider / access:** Alibaba Cloud Model Studio; independent route/provider ID `qwen3.7-max` / `Qwen3.7-Max`; OpenRouter `qwen/qwen3.7-max`. No OpenCode Zen free alias exists.
- **Lifecycle:** **Superseded.** Qwen 3.8 Max has shipped and dominates on BenchLM's composite. The Alibaba catalog now also carries Qwen3.8-Flash-Next, Qwen3.8-Omni-Flash, and a Qwen4 Max. No deprecation date was found for `qwen3.7-max`.
- **Release / knowledge:** **Release-date conflict retained:** BenchLM lists **2026-05-16**; Vals lists **2026-05-20**. No reliable knowledge cutoff published.
- **IDs:** `qwen3.7-max`; source labels `Qwen3.7-Max`.
- **Context window:** **984K (Vals) / 1M (BenchLM, Qwen).** Exact official output limit not independently confirmed. **Retrieval quality is now measured twice** — see below.
- **Modalities:** **Text input, text output.** Vals explicitly reports **no image, video, or file input** for the evaluated model, and no visual benchmark exists for it. Reasoning, tool use, and structured output are supported.
- **Pricing (verified 2026-10-10):** **$2.50 per 1M input / $7.50 per 1M output** (Vals). BenchLM says no comparable first-party rate is published. **Qwen 3.8 Max lists at $2.00 / $6.00** — cheaper on both legs — so this price point is already obsolete within the family.
- **Architecture:** Proprietary; parameter count not disclosed in the reviewed sources.

### Raw benchmarks found

**Official — Qwen3.7-Max launch post:**

| Benchmark | Score |
| --- | --- |
| **MRCR v2 (long context)** | **90.4%** |
| CritPt | 13.4% |
| GPQA Diamond | **92.4%** |
| MMLU-Pro / MMLU-Redux / MMMLU | **89.6% / 95% / 90.3%** |
| SuperGPQA | 73.6% |
| HLE (no tools / with tools) | 41.4% / 53.5% |
| **HMMT Feb 2026** | **97.1%** |
| IMOAnswerBench / MathArena Apex | 90.0% / 44.5% |
| **IFEval / IFBench** | **94.3% / 79.1%** |
| MMLU-ProX / NOVA-63 / INCLUDE / MAXIFE / PolyMath | 87% / 59.0% / 86.2% / 89.2% / 86.5% |
| Terminal-Bench 2.0 | 69.7% |
| SWE-bench Verified | **80.4%** |
| SWE-bench Pro | 60.6% |
| SWE Multilingual | 78.3% |
| LiveCodeBench v6 | **91.6%** |
| NL2Repo / SciCode | 47.2% / 53.5% |
| MCP Atlas / BFCL v4 | 76.4% / 75.0% |
| Claw-Eval / QwenClawBench / QwenWebBench | 65.2% / 64.3% / **1568 Elo** |
| VITA-Bench | 47.9% |

**Independent — Artificial Analysis:**

- Intelligence Index **29.5**
- **τ²-bench: 94.7%**
- GDPval-AA **31.6% / 1190 Elo**
- AA Agentic Index **23.9%**
- GPQA Diamond **92.3%**; HLE **40.5%**
- **AA-Omniscience: Index 13.5%, Accuracy 31.1%, Hallucination Rate 25.6%**
- **AA-LCR: 79.0%**
- AA-SciCode 49.5%; **AA Coding Index 66.0%**; AA-IFBench 80.5%

**Independent — Vals AI:**

- **SWE-bench 68.8%** — **11.6 points below the vendor's 80.4%**
- **LiveCodeBench 87.1%** — 4.5 points below the vendor's 91.6%
- **Terminal-Bench 2.1: 61.0%**
- GPQA Diamond **90.2%**; MMLU-Pro **89.3%**; Vibe Code Bench v1.1 **52.9%**

**Other:** OpenHarmony Bench **53.4%** (official leaderboard); Gert Labs **64.27%**; **ResearchClawBench 18.7%**; Design Arena Website **1279**; BenchLM overall **62.63/100**, rank **#42 of 889**.

**Conflicts retained:** SWE-bench Verified **80.4% (Qwen) vs. 68.8% (Vals)**; LiveCodeBench **91.6% (Qwen) vs. 87.1% (Vals)**; GPQA Diamond **92.4% (Qwen) vs. 92.3% (AA) vs. 90.2% (Vals)**; release date **2026-05-16 (BenchLM) vs. 2026-05-20 (Vals)**.

Sources consulted: [Qwen3.7-Max launch post (qwen.ai)](https://qwen.ai/blog?id=qwen3.7), [BenchLM Qwen3.7 Max (updated 2026-10-10)](https://benchlm.ai/models/qwen3-7-max), [Artificial Analysis Qwen3.7 Max](https://artificialanalysis.ai/models/qwen3-7-max), [Vals AI Qwen3.7 Max](https://www.vals.ai/models/alibaba_qwen3.7-max), [OpenHarmony Bench leaderboard](https://bench.matrix.openharmony.cn/), [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/), [Gert Labs rankings](https://gertlabs.com/rankings), and [OpenRouter qwen3.7-max benchmarks](https://openrouter.ai/qwen/qwen3.7-max/benchmarks), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 88/100.** Unchanged. **MCP Atlas 76.4%**, **BFCL v4 75.0%**, **τ²-bench 94.7%** (new, and one of the highest in this dataset), **QwenWebBench 1568 Elo**, **Claw-Eval 65.2%**, and **QwenClawBench 64.3%** are strong. Capped by **AA Agentic Index 23.9%**, **GDPval-AA 1190 Elo / 31.6%**, **ResearchClawBench 18.7%**, and **Terminal-Bench 2.1 at 61.0% (Vals)** against the vendor's 69.7% at version 2.0.
- **Reasoning: 92/100.** Raised from 91. **GPQA Diamond is a three-way agreement — 92.4% (Qwen), 92.3% (AA), 92.2%–90.2% (Vals)** — which is as clean as any GPQA record in this dataset. **HMMT Feb 2026 at 97.1%**, **IMOAnswerBench 90.0%**, **MMLU-Pro 89.3–89.6%**, **MMMLU 90.3%**, **MMLU-Redux 95%**, **SuperGPQA 73.6%**, and **IFEval 94.3%** all support a frontier-tier score. Knowledge grounding is a real strength: **AA-Omniscience Hallucination Rate 25.6%** is among the best measured here. Held below the mid-90s by **HLE 41.4%**, **CritPt 13.4%**, **Omniscience Accuracy of only 31.1%**, and an **AA Intelligence Index of 29.5** — careful but not knowledgeable, the same trade Grok 4.3 makes.
- **Context window: 97/100.** Raised from 95. This closes the gap the prior pass named as its main weakness, with **two independent retrieval measurements now in hand: MRCR v2 at 90.4% (vendor) and AA-LCR at 79.0% (independent)**. A 984K–1M window with proven recall at length is the top of this dataset's context tier.
- **Multimodal: 15/100.** Unchanged and deliberately floored. **Vals explicitly reports text-only input**, Qwen publishes no visual benchmark for this model, and the Design Arena Website Elo of 1279 measures web output quality, not modality capability. This is the single largest drag on the Overall and is a deliberate choice: Qwen 3.8 Max and Qwen 3.8-Omni-Flash both add vision.
- **Coding: 88/100.** Reduced from 89. **SWE-bench Verified 80.4%**, **SWE Multilingual 78.3%**, **LiveCodeBench v6 91.6%**, **SWE-bench Pro 60.6%**, and **SciCode 53.5%** are strong vendor numbers, and **AA Coding Index 66.0%** is a real independent composite. The reduction is driven by Vals' independent runs: **SWE-bench 68.8%** — an 11.6-point gap — and **LiveCodeBench 87.1%**. Also capped by **NL2Repo 47.2%** and the absence of any DeepSWE figure.
- **Cost efficiency: 80/100.** Reduced from 82. **$2.50 / $7.50** is mid-range: cheaper than the $5/$30 OpenAI frontier band, more expensive than every 2026 Flash route, and — decisively — **more expensive than Qwen 3.8 Max at $2.00 / $6.00**, the direct successor, on both legs. A superseded model at a premium to its replacement is poor value regardless of its absolute rate. No first-party price confirmation was obtained.
- **Overall Score: 76.0/100.** (88 + 92 + 97 + 15 + 88) / 5 = 380 / 5 = 76.0, up from 75.6. Nearly flat because **Multimodal 15** caps the arithmetic — a text-only model cannot exceed roughly 76 on this scale no matter how strong its other dimensions are, which is exactly what Qwen 3.8 Max's 70.66 vs. Qwen 3.8-27B's 58.27 BenchLM spread illustrates. **Best fit: text-only professional, multilingual, and long-context agent workloads** where GPQA 92.4%, IFEval 94.3%, MRCR v2 90.4%, and a 25.6% hallucination rate matter. **Migrate to Qwen 3.8 Max** — it is cheaper on every leg, adds vision, and scores 8 points higher on BenchLM's composite.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Qwen's official Qwen3.7-Max launch post, Artificial Analysis, Vals AI, OpenHarmony Bench, ResearchClawBench, Gert Labs, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent rows are kept separate with their harnesses. Cost efficiency is excluded from Overall.
- Audit note — conflicts retained: **SWE-bench Verified 80.4% (Qwen) vs. 68.8% (Vals)**, the widest coding gap for this model; **LiveCodeBench 91.6% vs. 87.1%**; **GPQA Diamond 92.4 / 92.3 / 90.2** recorded as agreement; **release date 2026-05-16 vs. 2026-05-20**. Pricing remains single-sourced (Vals) with **no first-party confirmation**, and the successor's lower rate is noted as the decisive cost fact. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Qwen_3_7_Max_Recheck.md`, using the same headings.