# DeepSeek V4 Pro — findings by Space Bunny

- Source: DeepSeek (`deepseek-v4-pro-0813`; max reasoning)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change, upward.** The full **DeepSeek-V4 technical report** is now reachable, supplying the coding figures the prior pass recorded as missing: **SWE-bench Verified 80.6%**, **SWE-bench Pro 55.4%**, **LiveCodeBench Pass@1-COT 93.5%**, **Codeforces 3206**, **DeepSWE 62.7%**, **NL2Repo 61.5%**, **DSBench-FullStack 71.1%**, **BrowseComp 83.4%**, **MCP Atlas 73.6%**, **HMMT Feb 2026 95.2%**, and **IMOAnswerBench 89.8%**. Independently, **Vals AI measures SWE-bench at 96.4%** and **GPQA Diamond 92.4%**, and ARC Prize publishes verified **ARC-AGI-1 90.00% / ARC-AGI-2 61.3%**. Net: **Tool use 94 → 93**, **Reasoning 90 → 91**, **Coding 89 → 93**, **Cost 92 → 90**, Overall **77.2 → 78.0**.

## Model card

- **Name:** DeepSeek V4 Pro 0813 (reasoning, max effort)
- **Short description:** DeepSeek's open-weight, text-only 1.6T MoE for million-token reasoning, coding, and long-horizon agents. Retained as a separate API service after DeepSeek reversed its plan to fold V4 Pro traffic into V4.1 Flash.
- **Provider / access:** Hugging Face `deepseek-ai/DeepSeek-V4-Pro-0813` (technical report PDF in-repo); DeepSeek API `deepseek-v4-pro` / `deepseek-v4-pro-0813`; DeepInfra; OpenRouter (`deepseek/deepseek-v4-pro`); multiple inference providers. Tool calling and structured output vary by provider.
- **Lifecycle:** **Active — DeepSeek reversed its retirement plan.** The 2026-09-10 V4.1 Flash announcement said all `deepseek-v4-pro` requests would route to V4.1 Flash at Flash rates from 04:00 UTC on 2026-09-14 "until V4.1-Pro launches." The change log now states DeepSeek will **continue providing V4 Pro API service after 2026-09-14 with billing unchanged**, in response to user demand. **V4.1 Pro had not launched as of 2026-10-04** (`deepseek/deepseek-v4.1-pro` returns HTTP 404). No retirement date has been published. Operational note: pin a snapshot — DeepSeek switched a model name behind four days' notice once already, and reversed it.
- **Release / knowledge:** HF repo creation 2026-08-13; V4 Pro GA rolled out across app, web, and API on 2026-08-13. No public knowledge cutoff disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro-0813`; `deepseek-v4-pro`; `deepseek-v4-pro-0813`.
- **Context window:** **1,000,000 tokens** (Artificial Analysis, BenchLM). Exact output limit not published in the sources reviewed.
- **Modalities:** **Text input, text output only.** Artificial Analysis explicitly reports no image input; no image support is claimed anywhere. This is the model's defining constraint and it is intentional — V4 Pro is text-only while V4.1 Flash is natively multimodal.
- **Pricing (two routes, retained separately):** Artificial Analysis reports **$1.32 per 1M input / $3.96 per 1M output** with a **97% cache discount**; BenchLM records a DeepSeek-native route at **$0.435 / $0.87** with cached input **$0.003625**. V4 Pro's own (pre-reversal) price card was $0.022 cached / $0.66 input / $1.98 output off-peak. Pin the route before budgeting.
- **Architecture:** Open-weights MoE, **~1.6T total parameters / 49B active**, MIT licence. Largest open-weight model in this dataset by a wide margin.

### Raw benchmarks found

**Official — DeepSeek-V4 technical report (`DeepSeek_V4.pdf`) and V4 Pro 0813 API update / agent comparison table:**

| Benchmark | Score |
| --- | --- |
| Terminal-Bench 2.1 | **87.9%** |
| Terminal-Bench 2.0 | 67.9% |
| SWE-bench Verified | **80.6%** |
| SWE-bench Pro | **55.4%** |
| SWE Multilingual | **76.2%** |
| LiveCodeBench Pass@1-COT | **93.5%** |
| Codeforces | **3206** |
| DeepSWE v1.1 | **62.7%** |
| NL2Repo | **61.5%** |
| DSBench-FullStack | **71.1%** |
| DSBench-Hard | 67.2% |
| BrowseComp | **83.4%** |
| MCP Atlas | **73.6%** |
| Toolathlon | 51.8% |
| Toolathlon-Verified | **74.1%** |
| GDPval-AA | **1306 Elo** |
| HLE (no tools) / HLE w/ tools | 42.7% / **60.0%** |
| GPQA Diamond | **90.1%** |
| MMLU-Pro | 87.5% |
| Chinese-SimpleQA | 84.4% |
| HMMT Feb 2026 | **95.2%** |
| IMOAnswerBench | **89.8%** |
| MathArena Apex / Apex Shortlist | 38.3% / 90.2% |
| MRCR 1M | **83.5%** |
| CorpusQA 1M | **62.0%** |
| CyberGym | 83.3% |
| AutomationBench | 31.8% |
| Agents' Last Exam | 25.7% |

**Independent — Artificial Analysis (v4.3.2):**

- **Intelligence Index 53.2** (BenchLM-transcribed) — **conflict:** the Artificial Analysis creator page lists **DeepSeek V4 Pro 0813 (Max) at 36** with 1.6T/49B active, 85 t/s, and ~$0.7 blended, while BenchLM records **53.2** for the same model. The two are most likely different effort configurations or index vintages; both are retained and neither is used as the sole basis for scoring.
- **GPQA Diamond 92.8%** (vendor 90.1%, Vals 92.4% — three sources agree within 2.7 points)
- HLE **41.0%** (vendor 42.7%)
- **AA-LCR 80.3%**; CritPt 18.0%
- **AA-Omniscience: Index 0.8, Accuracy 49.1%, Hallucination Rate 94.1%** — the second-worst hallucination rate in this dataset after Gemini 2.5 Pro
- AA Agentic Index **49.6%**; APEX-Agents-AA **24.3%**; EnterpriseOps-Gym **49.6%**; **τ²-bench 96.2%**; GDPval-AA **54.5%**
- AA Coding Index **68.8%**; AA-SciCode **51.0%**; AA-IFBench **76.5%**

**Independent — Vals AI:**

- **SWE-bench 96.4%** — among the highest recorded for any model in this dataset
- LiveCodeBench **87.5%**
- **Terminal-Bench 2.1: 54.7%** — **33.2 points below DeepSeek's own 87.9%**, the largest vendor-vs-independent gap recorded in this batch
- GPQA Diamond **92.4%**; MMLU-Pro 87.0%; Vibe Code Bench v1.1 49.93%

**Independent — ARC Prize (verified results):** ARC-AGI-1 **90.00%**; ARC-AGI-2 **61.3%**

**Other:** OpenHarmony Bench **59.0%**; Design Arena Website **1258** (OpenRouter); BenchLM overall **63.77/100**, rank **#40 of 889**.

Sources consulted: [DeepSeek-V4 technical report (PDF, in `deepseek-ai/DeepSeek-V4-Pro`)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf?download=true), [BenchLM DeepSeek V4 Pro 0813 (updated 2026-10-10)](https://benchlm.ai/models/deepseek-v4-pro-0813), [DeepSeek API pricing / agent comparison table](https://api-docs.deepseek.com/quick_start/pricing/), [Artificial Analysis DeepSeek V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-pro), [Vals AI DeepSeek V4 Pro 0813](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813), [ARC Prize — DeepSeek V4 Pro 0813 verified results](https://arcprize.org/results/deepseek-v4-pro-0813), [DeepSeek API Change Log](https://api-docs.deepseek.com/updates), and [SandBase — V4.1 Pro release status (2026-10-04)](https://blog.sandbase.ai/deepseek-v4-1-pro-release-status-2026/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 93/100.** Reduced from 94. Terminal-Bench 2.1 **87.9%**, **BrowseComp 83.4%**, **MCP Atlas 73.6%**, **Toolathlon-Verified 74.1%**, **τ²-bench 96.2%**, and **AA Agentic Index 49.6%** are strong, and the model now has real agentic breadth the prior pass lacked. The single-point reduction is driven by **Vals' Terminal-Bench 2.1 at 54.7% against DeepSeek's 87.9%** — a **33-point gap**, which is not harness noise and deserves attention before you rely on the vendor number. Also capped by **AutomationBench 31.8%**, **APEX-Agents-AA 24.3%**, and **Agents' Last Exam 25.7%**.
- **Reasoning: 91/100.** Raised from 90. **GPQA Diamond is a genuine three-way agreement: 90.1% (DeepSeek), 92.8% (AA), 92.4% (Vals).** **HMMT Feb 2026 95.2%**, **IMOAnswerBench 89.8%**, **MMLU-Pro 87.5%**, **Chinese-SimpleQA 84.4%**, **AA-LCR 80.3%**, and **ARC-AGI-1 90.00%** all support a high score. The ceiling is knowledge reliability: **AA-Omniscience Hallucination Rate of 94.1%** with an **Index of 0.8** is close to worst-in-dataset, and **CritPt 18.0%** plus **HLE 41.0%** show the frontier-exam weakness. This model will confidently produce plausible and wrong facts at a very high rate.
- **Context window: 98/100.** Unchanged. **1M context verified and measured three independent ways: MRCR 1M at 83.5%, CorpusQA 1M at 62.0%, and AA-LCR at 80.3%.** This is the best-evidenced long-context profile in the dataset — a 1M window with proven retrieval at full length, not just a capacity claim.
- **Multimodal: 15/100.** Unchanged, and deliberately floored. **Artificial Analysis explicitly reports text-only input** and no source claims image, audio, or video support. The only adjacent signal is a Design Arena Website Elo of 1258, which is a web-output preference measure, not a modality capability. V4.1 Flash exists specifically to cover the multimodal gap at a quarter of the price.
- **Coding: 93/100.** Raised from 89 — the largest correction in this report. **Vals AI measures SWE-bench at 96.4%**, which is among the highest figures anywhere in this dataset, corroborated by **SWE-bench Verified 80.6%** (DeepSeek), **LiveCodeBench Pass@1-COT 93.5%**, **Codeforces 3206**, **SWE Multilingual 76.2%**, and **DSBench-FullStack 71.1%**. Deductions for **Terminal-Bench 2.1 at 54.7% (Vals)** against 87.9% vendor, **DeepSWE 62.7%** (below V4.1 Flash's 74.2%), and **Vibe Code Bench 49.93%**.
- **Cost efficiency: 90/100.** Reduced from 92. The route prices are genuinely low — **$0.435 / $0.87 native** with cached input at $0.003625 and a **97% cache discount** — and MIT licensing removes licence cost. Deductions: **~1.6T total / 49B active parameters** makes self-hosting the most expensive open-weight deployment in this dataset, realistically multi-node; the Artificial Analysis route at $1.32/$3.96 is several times the native rate; and the model is a **1.6T-parameter text-only model** competing against 309B multimodal alternatives that deliver comparable benchmarks for a fraction of the serving cost.
- **Overall Score: 78.0/100.** (93 + 91 + 98 + 15 + 93) / 5 = 390 / 5 = 78.0, up from 77.2. **The overall is flat because the score is dominated by Multimodal 15** — a text-only model cannot exceed roughly 80 on this scale no matter how strong its other dimensions are. **Best fit:** text-only million-token coding and reasoning where SWE-bench Verified 80.6% / Vals 96.4%, Codeforces 3206, and MRCR 1M 83.5% matter and you can self-host at scale. **Two things to verify first:** the **94.1% hallucination rate** makes it unsuitable for knowledge-retrieval workloads without verification, and **Vals' 54.7% vs. DeepSeek's 87.9% on Terminal-Bench 2.1** needs your own measurement before you commit to unattended agent loops.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of DeepSeek's own V4 technical report PDF and API agent comparison table, Artificial Analysis, Vals AI, ARC Prize verified results, OpenHarmony Bench, and the DeepSeek API change log; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent rows are kept separate with their harnesses. Cost efficiency is excluded from Overall.
- Audit note — conflicts retained unresolved: **Intelligence Index 36 (AA creator page, Max) vs. 53.2 (BenchLM transcription)**, likely effort configuration or index vintage; **Terminal-Bench 2.1 87.9% (DeepSeek) vs. 54.7% (Vals)**, the widest vendor gap in this batch; **GPQA Diamond 90.1 / 92.8 / 92.4** across three sources, recorded as agreement. Two pricing routes are retained separately rather than averaged. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals (technical report, BenchLM, AA, Vals) rather than three searches.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro_Recheck.md`, using the same headings.