# Grok 4.6 — findings by Space Bunny

- Source: SpaceXAI / xAI (`grok-4.6`; reasoning effort low / medium / **high** (default) / xhigh — cannot be disabled)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (high)
- **Short description:** SpaceXAI's frontier reasoning and agent model released 2026-08-12, built with **supplemental training on anonymized Cursor workflow data** in collaboration with Cursor. Part of the 1.5T-scale family; extends Grok 4.5 with gains in long-running agents, engineering, office work, AI research enablement, and inference optimization. Now superseded by Grok 4.7 (2026-09-21) at identical price and speed.
- **Provider / access:** SpaceXAI API (`grok-4.6`, no published aliases); **4 API providers** on Artificial Analysis; also in Cursor, Grok Build, OpenRouter, Vercel, and Cloudflare. Responses API and Chat Completions. Regions us-east-1 and us-west-2 only. Rate limits 150 requests/sec, 50M tokens/min.
- **Lifecycle:** **Superseded, not retired.** Grok 4.7 shipped 2026-09-21 as the direct successor on a larger base model with a longer RL run, at the same $2/$6 and same speed (plus a fast variant at 2× speed / 2× price). Grok 4.7 improves on GDPval and AA-Briefcase and is better at self-verification and long-context management. **No discontinuation date published**; Artificial Analysis does not flag Grok 4.6 as deprecated.
- **Release / knowledge:** Released **2026-08-12**. **Knowledge cutoff February 1, 2026** (month precision) — this resolves the prior pass's "no cutoff shown."
- **IDs:** `grok-4.6`; high / xhigh are reasoning configurations.
- **Context window:** **500,000 tokens** with **no text output limit** per the docs (Vals lists a 500,000-token max output figure). **Note:** Grok 4.6 is *not* the widest-context model SpaceXAI sells — `grok-4.3` and the entire 4.20 family carry 1M.
- **Modalities:** Text and image input; **text output**. Images limited to **20 MiB, jpg or png only**. Audio/video not supported. Built-in tools: function calling, web search, X search, code execution.
- **Pricing (verified 2026-10-10):** Below 200K prompt tokens: **$2.00 input / $0.50 cached input / $6.00 output** per 1M. **At or above 200K prompt tokens every rate doubles to $4.00 / $1.00 / $12.00** (docs.x.ai/developers/models, xAI's own row label reads ">= 200k," not just ">"). Fast variant is 2× price. **Operational trap:** xAI's get-started page instructs you to set `prompt_cache_key` or the `x-grok-conv-id` header — without it "you often pay full input price on a cache-cold server," meaning the default failure mode is $2.00 instead of $0.50 and the input bill can quadruple silently. Cached input is also **$0.50 vs. Grok 4.5's $0.30** at identical headline rates.
- **Architecture:** Proprietary; part of SpaceXAI's **1.5T-scale** family. Parameter count not disclosed. Corporate note: SpaceX acquired xAI 2026-02-02; the "SpaceXAI" name was formally adopted 2026-07-06 — both predate Grok 4.6.
- **Speed:** **64.9 output tokens/s** (#109/216, "slower than average" vs. a 79 t/s median); **TTFT 31.26s** against a 3.89s reasoning median.

### Raw benchmarks found

**Official — Grok 4.6 Model Card (2026-08-12):**

| Benchmark | Score | Notes |
| --- | --- | --- |
| APEX-SWE | **56.4%** | Terminus-2 harness, high effort |
| DeepSWE v1.1 | **65.9%** high / **67.0%** xhigh | mini-swe-agent harness |
| SWE-Marathon v1.1 | **31.9%** | Grok Build harness, high effort |
| **Terminal-Bench 3.0** | **26.0%** | Grok Build harness, high effort |
| FrontierCode v1.1 (Extended) | **61.3%** | |
| APEX-Agents | **57.5%** | |

The card additionally documents GDPval-AA, AA-Briefcase, OfficeQA Pro, Legal Agent Benchmark, EEBench, 3DCodeBench, PartBench, CADGenBench, CADBench, SpaceXAI MTS Eval, InferenceEval, KernelBenchInternal v1.1, Factuality (Hallucination), DeepSearchQA, CyberGym, CVE-Bench, SecureCodeReview, HackerBench v0.2, and a full bio/CBRN safety suite. Absolute values for most of these were not extractable in this pass.

**Independent — Artificial Analysis (v4.3.2, high effort):**

- Intelligence Index **44.3**, rank **#31/216**. (The widely quoted launch-era **60.92 / #6 of 95** was on the earlier **v4.1.1** nine-eval composite — retained as a labeled prior-version figure, not merged.)
- **GPQA Diamond 94.9%** — **#1 of 246** at launch
- HLE **42.9%** (no tools, 2,158-question text-only subset) — ties GPT-5.6 Terra
- GDPval-AA **56.1%** / **1643 Elo**; AA-Briefcase **1577** Elo; τ³-Banking **50.7%**; AutomationBench **66.7%**; EnterpriseOps-Gym **48.3%**; Agentic Index **53.4%**; AnalystAgent **41.3%**
- **Terminal-Bench 2.1: 88.4%** (#3)
- AA-SciCode **56.5%**; AA Coding Index **76.8%**
- **AA-Omniscience: Index 30.5%, Accuracy 48.2%, Hallucination Rate 34.3%** — the hallucination rate fell from Grok 4.5's 54.1%
- **AA Terminal-Bench 4.0: 21.2%**
- AA-LCR **75.0%** (#27 of 408)
- Cost: $1,068 for the full index suite vs. $579 on Grok 4.5 — **1.84× at identical headline rates**, with cache reads and writes at 57% of the bill

**Independent — Vals AI:**

- **SWE-bench 95.6% — rank #4 of 83+**, bash-only harness, $0.78/test (2026-08-14)
- **GPQA Diamond 94.7%** (rank 3); MMLU-Pro **89.4%**; LiveCodeBench **88.2%**
- **Vals Index 59.17% ± 1.21**, $4.335 per test, 38m 4s
- **Terminal-Bench 2.1: 78.28** (vs. AA's 88.4 — a 10-point harness gap)
- **Terminal-Bench 4.0: 17.2%** (mini-swe-agent, single bash tool, pass@1 over 3 full passes, raw 0.17172, effort high). The official grant-funded board (Grok Build, 5-trial pass@1) lists **20.3 ± 3.09 CI**.

**Independent — other boards:**

- **DeepSWE (Datacurve): 67.0% ±2** on mini-swe-agent — slightly *above* xAI's 65.9
- **ARC-AGI-2 (xhigh): 67.1%**
- LiveBench **78.0**
- **Terminal-Bench 3.0: 26.5%** (official leaderboard) vs. xAI's 26.0
- CursorBench 3.2 **70.8%**; CursorBench 4.0 **41.4%**
- **FrontierSWE v2: 25.3%** (Proximal); VulcanBench v3 **87.0%**; CWE-bench v1 **57.0%**; Bug Hunt Bench 27.0 fixes
- **ApprenticeBench GUI: 13%** (NeoCognition)

**Conflicts retained:** Terminal-Bench 2.1 **88.4% (AA) vs. 78.28% (Vals)**; Terminal-Bench 4.0 **17.2% (Vals) / 20.3 ± 3.09 (official board) / 21.2% (AA)**; DeepSWE **65.9% (xAI) vs. 67.0% (DataCurve board)**.

Sources consulted: [Model Card: Grok 4.6 (SpaceXAI PDF)](https://media.x.ai/v1/website/card-4p6-4cd2dc57.pdf), [Introducing Grok 4.6 (SpaceXAI, 2026-08-12)](https://x.ai/news/grok-4-6), [Artificial Analysis Grok 4.6](https://artificialanalysis.ai/models/grok-4-6) and [article](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis), [The Model Gap Grok 4.6](https://themodelgap.com/models/grok-4-6), [Vals AI Grok 4.6](https://www.vals.ai/models/grok_grok-4.6), [eesel AI — Grok 4.6 pricing and cache-rate catch](https://www.eesel.ai/blog/grok-4-6), [BenchLM Grok 4.6](https://benchlm.ai/models/grok-4-6), [modelscale.dev Grok 4.6](https://modelscale.dev/models/grok-4-6), and [Introducing Grok 4.7 (2026-09-21)](https://x.ai/news/grok-4-7), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 96/100.** Unchanged, now much better evidenced. APEX-SWE **56.4%**, τ³-Banking **50.7%** (#2 at launch), GDPval-AA **1643 Elo**, AutomationBench **66.7%**, AA Agentic Index **53.4%**, APEX-Agents **57.5%**, AnalystAgent **41.3%**, plus the Cursor collaboration and CursorBench 3.2 at **70.8%**. Held at 96 by **Terminal-Bench 4.0 at 17.2% / 20.3% / 21.2%** across three runners, **Terminal-Bench 3.0 at 26.0%**, and **ApprenticeBench GUI at 13%** — Grok 4.6 dominates the 2.1-era agentic benchmarks and collapses on every successor harness.
- **Reasoning: 94/100.** Raised from 91. The prior pass recorded "no verified GPQA/HLE value found." **GPQA Diamond is now the model's defining result: 94.9% on Artificial Analysis (#1 of 246 at launch) and 94.7% on Vals (rank 3)**, corroborated by MMLU-Pro **89.4%**, HLE **42.9%**, ARC-AGI-2 **67.1%** (xhigh), LiveBench **78.0**, and SciCode **56.5%**. Grounding also improved sharply — **AA-Omniscience Hallucination Rate fell to 34.3% from Grok 4.5's 54.1%**, with the Omniscience Index at 30.5%. Not 100 because the 44.3 composite remains mid-pack on v4.3.2 and SciCode is the one row that moved backwards against 4.5.
- **Context window: 92/100.** Unchanged. 500,000 input tokens with no text output limit, and there is now **real retrieval evidence: AA-LCR 75.0%, #27 of 408** — the prior pass's "no retrieval-at-length result" caveat is resolved. Held below the 1M tier, and worth flagging that **SpaceXAI's own `grok-4.3` and 4.20 models carry 1M context**, so the flagship is not the widest-context model the vendor sells.
- **Multimodal: 68/100.** Raised from 65. The launch explicitly emphasizes "more ambitious interactive and **visual** work," image input is confirmed with documented limits (20 MiB, jpg/png), and the OSWorld-class GUI results are real agent evidence. Not raised further: no absolute vision benchmark score is published for this model, and there is no audio or video I/O.
- **Coding: 93/100.** Raised from 90. The decisive new datum is **Vals AI's SWE-bench at 95.6% — rank #4 of 83+** — plus **LiveCodeBench 88.2%** (Vals), **DeepSWE 67.0%** (DataCurve board, confirming xAI's 65.9%), **CursorBench 3.2 at 70.8%**, **FrontierCode v1.1 Extended at 61.3%**, and **AA Coding Index 76.8%**. Deducted for the newer harnesses: **Terminal-Bench 3.0 at 26.0%**, **Terminal-Bench 4.0 at 17.2%**, **FrontierSWE v2 at 25.3%**, **SWE-Marathon v1.1 at 31.9%**, and **CursorBench 4.0 at 41.4%**. Excellent repo-level coding; weak on the current long-horizon and terminal-agent generation.
- **Cost efficiency: 82/100.** Reduced from 86. $2/$6 is genuinely competitive for frontier agent performance, and Grok 4.7 is served at the same price. Four real deductions: **every rate doubles at ≥200K prompt tokens**; **cached input is $0.50 against Grok 4.5's $0.30** and Artificial Analysis measured the same benchmark suite at **1.84× the cost** on 4.6 despite identical headline rates; **cache reads and writes are 57% of the bill**; and **you must send `prompt_cache_key` or `x-grok-conv-id`** or the input line silently bills at full price. Set the header or the sticker price is fiction.
- **Overall Score: 88.6/100.** (96 + 94 + 92 + 68 + 93) / 5 = 443 / 5 = 88.6, up from 86.8. The prior pass was working without the official Model Card and without Vals' SWE-bench run. **Best fit:** frontier coding and knowledge-work agents on a $2/$6 budget — SWE-bench 95.6% and GPQA Diamond #1 of 246 are the strongest capability-per-dollar pair in this dataset. **Prefer Grok 4.7 for new deployments** at identical price, with the caveats that it has a narrower 500K context than xAI's older 4.3/4.20 models and that Grok 4.6's cache economics need the routing header.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of SpaceXAI's official Grok 4.6 Model Card and launch post, plus Artificial Analysis, Vals AI, the Datacurve DeepSWE board, ARC Prize, LiveBench, Terminal-Bench official board, Cursor evals, Proximal FrontierSWE, NeoCognition, and independent pricing analyses; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the widely circulated **60.92 Intelligence Index** for this model is a **v4.1.1** figure; the current v4.3.2 value is **44.3**. Both are retained with their version labels rather than merged. Three harness conflicts are preserved unresolved (Terminal-Bench 2.1 88.4 vs. 78.28; Terminal-Bench 4.0 17.2 / 20.3 / 21.2; DeepSWE 65.9 vs. 67.0).
- Future sources: add a new file next to this one, e.g. `Grok_4_6_Recheck.md`, using the same headings.