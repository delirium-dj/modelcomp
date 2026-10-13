# Step 5 Preview — findings by Claude Opus 5

- Source: StepFun (阶跃星辰) (`step-5-preview`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's **flagship agentic model** — a **600B-total / 27B-active sparse MoE** with a 1M-token context window, launched under the title "Advancing the Pareto Frontier". StepFun's own framing is efficiency-first: "near-frontier performance with 600B total parameters but only **27B active per token**". The documentation positions it precisely: "StepFun's flagship model for agentic work… frontier-level performance across software engineering and professional knowledge work, **with particular strength in finance**" ([StepFun docs](https://platform.stepfun.ai/docs/en/guides/models/step-5-preview)). Distinct model; Step 3.7 Flash and Step 3.5 Flash are separate, and the StepAudio line belongs in `models_voice/`.
- **Provider / access:** StepFun Open Platform API (Chat Completions and Messages APIs); **Alibaba Cloud Model Studio** as `stepfun/step-5-preview`; **OpenCode Zen**; StepFun's own products; **Step Plan** subscription with a documented **Claude Code integration** that enables the full 1M context. Open weights were published to Hugging Face as `SHSLab/Step-5-Preview-BF16`.
- **Release / knowledge:** **Announced 2026-09-20.** StepFun stated on the launch page that "the model will be released with **open weights on October 15**" — i.e. **BF16 weights were still pending at the time of this research**, which is why [BenchLM](https://benchlm.ai/models/step-5-preview) lists Source Type as **"Pending"** rather than Open Weight. Knowledge cutoff: no verified public date found.
- **IDs:** `step-5-preview` (StepFun Open Platform, Zen), `stepfun/step-5-preview` (Alibaba Cloud Model Studio). **No free tier** — see the cost note below, because the common claim of a "free V0 tier" is wrong.
- **Context window:** **1,000,000 tokens** total, **maximum input 1M**, **maximum output 64,000 tokens**. `max_tokens` defaults to `INF` — "no limit is applied and the model determines it automatically". **Prompt caching supported.**
- **Modalities:** **Text + image + video in → text out**, natively. Images: URL or Base64, JPG/JPEG/PNG/WebP/static GIF, **up to 60 images per request**, `low`/`high` detail levels. Video: URL, Base64, or a `stepfile://` reference from the Files API; MP4, QuickTime and Matroska; individual MP4s under 128 MB with under 5 minutes recommended. Reasoning: yes — a **reasoning model** with three effort levels (`low`/`medium`/`high` via `reasoning_effort` or `output_config.effort`), and StepFun notes output tokens "include both the model's reasoning process and final answer". Tool calling: supported, plus streaming and structured output (JSON Mode and JSON Schema). StepFun is explicit that "tools, search, and code execution capabilities are provided by the application that integrates the model; the model does not itself access your local environment or external services."
- **Pricing (as of 2026-10-08, StepFun [Pricing and Rate Limits](https://platform.stepfun.ai/docs/en/guides/pricing/details)):** **$1.00 / MTok input (cache miss), $0.10 / MTok input (cache hit), $2.70 / MTok output.** The cache-miss price "includes writing new content to the cache". Value-added capabilities bill separately: internet search $0.006/call, image search $0.02/call, file storage $0.08/GB/day.
- **Architecture:** **Sparse Mixture-of-Experts, 600B total parameters, 27B active per token** — confirmed on StepFun's own launch page, in the Hugging Face BF16 card, and in Alibaba Cloud's Model Studio listing. Rate limits are tiered by cumulative cash top-up (vouchers excluded): **V0 under $15 → 5 concurrency / 100 RPM / 500K TPM**, rising to V4 at $1,500+ → 130 concurrency / 2,600 RPM / 13M TPM. Step Plan usage is governed by a monthly Credit allowance instead.

### Raw benchmarks found

> **This is the best-verified vendor benchmark set I have encountered in this research pass.** Where both StepFun and Artificial Analysis measured the same benchmark, the figures match almost exactly — **Terminal-Bench 4.0 33.30% vs 33.3%**, **SciCode 58.9% vs 58.9%**, **HLE 46.5% vs 46.5%**, MMMU-Pro 76% vs 76.4%, APEX-Agents 37.8% vs 38.0% — and on **AutomationBench the independent figure is *higher* than the vendor's own** (51.0% AA vs 44.0% StepFun). Vendors that under-report are rare. BenchLM covers 42 of 626 benchmarks and ranks it **#19 of 891 at 68.81/100**.

Agent / tool use — the model's core competence:

- **Terminal-Bench 2.1: 85.0%** (StepFun)
- **Terminal-Bench 4.0: 33.30%** (StepFun) / **33.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)) — exact agreement, and among the highest TB4 figures anywhere in this dataset
- **BrowseComp: 88.7%** (StepFun)
- **MCP Atlas: 85.6%** (StepFun)
- **CyberGym: 84.7%** (StepFun)
- **DRACO: 83.3%** (StepFun)
- **Toolathlon-Verified: 74.1%** (StepFun)
- **AA Harvey LAB v1.0: 93.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/harvey-lab-aa)) — independently measured legal-agent work, and an exceptional score
- **GDPval-AA: 1,566 Elo** (StepFun) / **54.2% normalized** ([Artificial Analysis](https://artificialanalysis.ai/models/step-5))
- **AA-Briefcase: 1,425 Elo** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/aa-briefcase))
- **AutomationBench: 44.0%** (StepFun) / **51.0%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/automationbench-aa))
- AA ITBench: **55.6%**; AA EnterpriseOps-Gym: **47.2%**; JobBench: **59.0%** (StepFun)
- Weaker agentic results, reported for balance: APEX-Agents **37.8%** (StepFun) / **38.0%** (AA); AA-AnalystAgent **35.0%**; Agents' Last Exam **29.5%**; **GDP.pdf 14.8%**

Coding:

- **Terminal-Bench 2.1: 85.0%**; **ProgramBench: 80.5%**; **sweMarathon: 72.7%**; **DeepSWE: 67.7%** (all StepFun)
- **SciCode: 58.9%** (StepFun) / **AA-SciCode 58.9%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/scicode)) — exact agreement
- MLS-Bench Lite: **40.5%**; Terminal-Bench 4.0: **33.3%**
- **SWE-bench Verified / Pro and LiveCodeBench: no verified public score found** — the notable gap in an otherwise dense coding set

Reasoning / knowledge:

- **GPQA Diamond: 93.5%** (StepFun) — near the top of this dataset
- **HLE: 46.5%** (StepFun) / **AA-HLE 46.5%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/humanitys-last-exam)) — exact agreement, and a very high HLE
- **AA-LCR: 88.3%** (StepFun) — the strongest long-context-reasoning figure I have recorded
- **Artificial Analysis Intelligence Index: 43.7** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index))
- **AA-Omniscience: Index +16.4%**, Accuracy **41.5%**, Hallucination Rate **43.0%** — a *positive* Omniscience Index, which most models in this dataset fail to achieve
- CritPt: **20.9%**; MLCR-AA: **16.7%**
- **MMLU-Pro and AIME: no verified public score found**

Multimodal:

- **MMMU-Pro: 76%** (StepFun) / **AA-MMMU-Pro 76.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/mmmu-pro))
- **OfficeQA Pro: 60.3%** (StepFun)
- Documented capability rather than benchmark: chart analysis, screenshot question answering and **video summarization**
- **No video-specific benchmark** (no Video-MME, no MVBench) despite native video input — a real evidence gap

Long context:

- No MRCR, RULER or needle-retrieval number at any depth. **AA-LCR 88.3%** is the quantified signal and it is the best I have seen. The documented Claude Code integration explicitly covers "enable 1M context", so the full window is usable in a real agent harness rather than nominal.

### Normalized scores (1–100)

- **Tool use: 91/100.** The strongest agentic profile in this research pass, and unusually well verified. **Terminal-Bench 2.1 85.0%**, **BrowseComp 88.7%**, **MCP Atlas 85.6%**, **CyberGym 84.7%**, **DRACO 83.3%** and **Toolathlon-Verified 74.1%** form a consistently high vendor set, and the independent half corroborates it: **Terminal-Bench 4.0 at 33.3% matched exactly**, **Harvey LAB 93.4%**, **GDPval-AA 1,566 Elo / 54.2%**, **AA-Briefcase 1,425 Elo**, ITBench 55.6%, and an AutomationBench figure Artificial Analysis measured *above* StepFun's own. Held out of the mid-90s by **GDP.pdf 14.8%**, Agents' Last Exam 29.5% and AnalystAgent 35.0% — long-horizon document deliverables remain the weak spot.
- **Reasoning: 88/100.** **GPQA Diamond 93.5%** is near-saturation, **HLE 46.5% is independently confirmed to the decimal** and is among the highest HLE figures in this dataset, **AA-LCR 88.3%** is the best long-context-reasoning result I have recorded, and an **Artificial Analysis Intelligence Index of 43.7** with a **positive Omniscience Index (+16.4%)** puts it in genuinely strong company. Capped by a 43.0% hallucination rate against 41.5% accuracy, CritPt 20.9%, MLCR-AA 16.7%, and the absence of any MMLU-Pro or AIME figure.
- **Context window: 93/100.** A true **1M-token window with 1M maximum input and a 64K maximum output**, `max_tokens` defaulting to unlimited, prompt caching at a 10× discount, and **AA-LCR 88.3%** demonstrating the window is genuinely usable rather than nominal — plus a documented Claude Code path that turns the full 1M on. Short of the mid-90s only for the absence of a published retrieval curve at depth.
- **Multimodal: 85/100.** Native **text + image + video** input is rare in this dataset, the engineering is concrete (60 images per request, `low`/`high` detail control, a `stepfile://` Files API for video, MP4/QuickTime/Matroska, sub-128 MB), and **MMMU-Pro 76.4% is independently confirmed**. OfficeQA Pro 60.3% adds document-vision evidence. Capped by text-only output, by **GDP.pdf 14.8%** showing document-agent work is much weaker than document *reading*, and by the complete absence of any video benchmark despite video being a headline input.
- **Coding: 87/100.** **Terminal-Bench 2.1 85.0%** and **ProgramBench 80.5%** are top-tier, **sweMarathon 72.7%** and **DeepSWE 67.7%** are strong on hard agentic-SWE harnesses, and **SciCode 58.9% is confirmed exactly by Artificial Analysis**. Terminal-Bench 4.0 at 33.3% is among the best results on a harness that returns single digits for most models. Capped by **no SWE-bench Verified or LiveCodeBench number at all** — the single largest evidence gap for a model marketed on software engineering — and MLS-Bench Lite at 40.5%.
- **Cost efficiency: 95/100.** **$1.00 in / $2.70 out with cache hits at $0.10** for GPQA Diamond 93.5%, HLE 46.5%, AA-LCR 88.3%, Terminal-Bench 2.1 85.0% and a 1M window with 64K output is the best price-to-capability ratio in this research pass by a clear margin — "efficiency-first" is a fair description, and 27B active parameters is why. **Correcting a widespread error: there is no free tier.** V0 is simply the entry *rate-limit* tier for accounts with under $15 of cumulative cash top-up (5 concurrency, 100 RPM, 500K TPM); identity verification is required and vouchers do not count toward tier. Docked only for that absence of a free tier and because BF16 open weights were still pending at the time of research.
- **Overall Score: 88.8/100.** Mean of the five non-cost dims (91 + 88 + 93 + 85 + 87) / 5 = 88.8 — **the highest Overall I have assigned in this research pass**, and the vendor-honesty profile (independent figures matching to the decimal, one of them *exceeding* the vendor's claim) is a large part of why I am comfortable assigning it. Best fit: **long-horizon agentic engineering and professional knowledge work** — terminal and repo agents, MCP tool orchestration, browse-and-research pipelines, legal and financial deliverables, document and video understanding — at roughly a third of frontier pricing. Caveats: verify factual output (43.0% hallucination rate), expect weakness on produced artefacts like PDFs and spreadsheets (GDP.pdf 14.8%), and note that no SWE-bench Verified number exists to compare against the rest of the field.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — StepFun's official Open Platform model card for `step-5-preview` (the "flagship model for agentic work" and finance-strength positioning, 1M context with 1M max input and 64K max output, `max_tokens` defaulting to `INF`, native text/image/video input with text output, the full image and video input limits including 60 images per request and the `stepfile://` Files API, `low`/`medium`/`high` reasoning effort, tool calling, JSON Mode/Schema, streaming, prompt caching, the Claude Code 1M-context integration, and the explicit statement that tools and code execution come from the integrating application), StepFun's official Pricing and Rate Limits page (**$1.00 cache-miss / $0.10 cache-hit input and $2.70 output**, the cache-write note, search and storage add-on pricing, and the V0–V4 cumulative-top-up rate-limit tiers that disprove the "free V0 tier" claim), StepFun's own launch page text confirming the **600B-total / 27B-active sparse MoE** architecture and the **open-weights-on-October-15** commitment (corroborated by the Hugging Face `SHSLab/Step-5-Preview-BF16` card and Alibaba Cloud Model Studio's listing), BenchLM's aggregated page (1M context, Reasoning type, **Pending** source type, 42 of 626 benchmarks, overall 68.81 / **rank #19 of 891**), and the underlying Artificial Analysis leaderboards. The exact vendor/independent agreement on Terminal-Bench 4.0 (33.30/33.3), SciCode (58.9/58.9) and HLE (46.5/46.5), the near-match on MMMU-Pro and APEX-Agents, and the AutomationBench case where Artificial Analysis measured **higher** than StepFun (51.0 vs 44.0) are all reported explicitly, since vendor under-reporting is the strongest honesty signal available. Evidence gaps are stated rather than filled: no SWE-bench Verified, LiveCodeBench, MMLU-Pro or AIME figure, no video benchmark despite native video input, and no retrieval curve behind the 1M window. The still-pending BF16 weights are flagged. No data was imported from `step-3.7-flash` or `step-3.5-flash`, and no peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
