# Qwen 3.7 Plus — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`opencode/qwen-3.7-plus`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus. Alibaba's **proprietary multimodal-agent tier on the Qwen3.7 backbone** — where Qwen3.7 Max is a text-only reasoning engine, **Plus adds eyes**: screenshots, document images, video frames, GUI navigation, browser automation and end-to-end mobile-app operation. BenchLM's canonical slug is `qwen3-7-plus` (**not** `qwen-3-7-plus`, which 404s — the same dotted-slug lookup trap as Qwen3.8-27B). It scores **53.91/100, #82 of 1,015** with **69 benchmarks**, placing it marginally *above* Qwen3.6 Plus (53.66) and below Qwen3.8-27B (54.55).
- **Short description:** The **GUI-agent specialisation pays off precisely where it should**: **OSWorld-Verified 73.3%, AndroidWorld 81.0%, ScreenSpot Pro 79.0% and MCP Atlas 73.2%** — the strongest computer-use cluster in this research series — plus a genuinely strong visual suite (**OmniDocBench 1.5 91.4%, RealWorldQA 86.9%, MathVision 90.3%, Video-MME 88.0%**). The collapse is in depth and reliability: **AA Agentic Index 19.7%, AA Intelligence Index absent, CritPt 9.1%, AA-HLE 35.6%, terminalBenchHard 47% and OSWorld 2.0 at 2.8%.**
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud, Together (1M context) and Fireworks (262K), OpenRouter, and OpenCode Zen. **Closed-source, proprietary licence** — no weights, no self-hosting. Repo meta.json records `noFreeId`.
- **Release / knowledge:** **released 2026-05-31** (llm-stats, the tracked release date) with general availability reported as **2026-06-01** by an independent agents directory — a one-day discrepancy that is almost certainly timezone rounding rather than a real conflict. **Knowledge cutoff not disclosed.**
- **IDs:** `qwen/qwen3.7-plus` (Openrouter); `qwen3.7-plus` (Together, Fireworks, Zen); `alibaba_qwen3.7-plus` (Vals).
- **Context window:** **1M tokens via Together, 262.1K via Fireworks, 65.5K max output** — meaning **the 1M window is provider-dependent, not a property of the model**. Repo meta.json records 1M with 131K out and a Zen lane capped at 128K and **text-only**, which conflicts with Together's 1M and with the measured video benchmarks.
- **Modalities:** **text, image and video in; text out** — this is the model's defining claim and it is well-evidenced, with **Video-MME 88.0%, VideoMMMU 85.4% and MLVU 87.4%** all measured. **llm-stats' FAQ says "text and images as input" and omits video; that contradicts both QwenCloud's own spec and three measured video benchmarks, so it is recorded as an error on the aggregator's side** rather than a model limitation.
- **Pricing (as of 2026-11-05):** **$0.32 in / $0.08 cached / $1.28 out per 1M via Together (1M context); $0.40 / $0.080 / $1.60 via Fireworks (262K context)** — llm-stats. Repo meta.json instead records a tiered Alibaba Cloud card of **$0.40/$1.60 ≤256K rising to $1.20/$4.80 above 256K, with $0.32/$1.28 via OpenRouter/OpenCode Go**. **These two structures conflict and are recorded side by side rather than reconciled** — the material question for a buyer is whether the $0.32/$1.28 rate carries the 1M window (Together says yes, the meta.json tier table implies no).
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Alibaba Cloud's Qwen3.7-Plus launch benchmark post is the primary source (so the large majority of rows are **vendor-run and labelled as such**), with Artificial Analysis, Vals AI, Epoch AI, the OSWorld 2.0 paper and Openrouter supplying the independent rows. 69 benchmarks total.

Agent / tool use — **the GUI half is genuinely strong, the execution half is not**:

- **OSWorld-Verified: 73.3%** (vendor); **AndroidWorld: 81.0%** (vendor); **MCP Atlas: 73.2%** (vendor); **BFCL v4: 72.9%** (vendor)
- **τ²-bench: 93%** [AA]; terminalBenchHard: 47% [AA]; APEX-Agents-AA: 22.4% [AA]
- **Terminal-Bench 2.0: 70.3%** (vendor) / **Terminal-Bench 2.1 (Vals): 52.8%** — a 17.5-point gap, both far under the 88%+ reference
- **GDPval-AA: 886 Elo** [AA] / **13.3% normalized** — the second-lowest GDPval figure in this batch
- **OSWorld 2.0: 2.8%** — near-floor on the newer harness; VITA-Bench: 45.6%; QwenClawBench: 61.8%; DeepPlanning: 62.3%; QwenWebBench: 1,536 Elo
- **AA Agentic Index: 19.7%** — the second-lowest in this batch; AA EnterpriseOps-Gym: 40.6%
- **Claw-Eval: 62.7%** — one of only three measured ClawEval figures in this research series
- **Terminal-Bench 4.0, τ³-Banking, Toolathlon, MazeBench, ALE, JobBench, BrowseComp: no verified public score found** — so two of three frontier references are unmeasured and the third is 2.8%

Reasoning / knowledge — **mid on exams, thin on depth**:

- **GPQA: 90.3%** (vendor) / **AA-GPQA Diamond 90.0%** — clears the 90%+ reference on both, with AA essentially agreeing
- **HLE: 34.7%** (vendor) / **AA-HLE 35.6%** — fails the 40%+ reference by ~4–5 points on both
- **MMLU-Pro: 88.5%**; MMLU-Redux: 94.5%; MMMLU: 89.0%; MMLU-ProX: 85.4%; SuperGPQA: 71.4%
- **AA-LCR: 73.0%**; **CritPt: 9.1%**; **MRCRv2: 91.7%** — the strongest MRCR-family figure in this research series
- **FrontierMath v2 Tiers 1–3: 34.4%** [Epoch]; Apex: 22.7%; HMMT Feb 2026: 92.9%; IMOAnswerBench: 86.0%
- IFEval: 94.6%; IFBench: 79.1% (vendor) / 78.0% [AA]
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath Tier 4: no verified public score found** — so **reliability is entirely unmeasured** and three of five reasoning references are unmeasurable

Coding — solid mid-frontier:

- **SWE-bench Verified: 77.7%** (vendor); SWE Multilingual: 75.8%; **SWE-bench Pro: 57.6%**
- **LiveCodeBench v6: 89.6%** — attributed to the Qwen3.8-27B card, a **provenance note worth flagging**: this row is cross-cited from a sibling model's card rather than measured on Plus
- **AA Coding Index: 55.9%** [AA] — 14 points under the 70% reference; **AA-SciCode: 46.1%** — under 55%; SciCode: 51.3%; **NL2Repo: 41.1%**
- **DeepSWE, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in) — **the second-strongest dimension**:

- **OmniDocBench 1.5: 91.4%**; **MathVision: 90.3%**; **RealWorldQA: 86.9%**; **CharXiv: 85.9%**
- **Video-MME (with subtitle): 88.0%**; **VideoMMMU: 85.4%**; **MLVU (M-Avg): 87.4%** — genuine video understanding
- **MMMU-Pro: 79.0%** (vendor) / **80.5%** [AA]; ScreenSpot Pro: **79.0%**; SimpleVQA: 81.7%; MedXpertQA (MM): 71.0%
- **AA-MMMU-Pro 80.5% exceeds the vendor's 79.0%** — an unusual direction, recorded as a confidence signal
- ERQA: 69.8%; OCRBench V2: 70.7%; ODINW13: 51.1%; MMSearch-Plus: 41.4%; Design Arena (website): **1,266 Elo**
- **ExtractBench, BabyVision, ZeroBench, ParseBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 66/100.** Mid-band, and the model's most genuine asset. **OSWorld-Verified 73.3%, AndroidWorld 81.0%, MCP Atlas 73.2%, BFCL v4 72.9% and τ²-bench 93% [AA]** are a real computer-use cluster — the strongest in this research series — and **Claw-Eval 62.7%** adds a rare third data point. Capped hard by **AA Agentic Index 19.7%, GDPval-AA 13.3% normalized (886 Elo against 1,750), terminalBenchHard 47%, OSWorld 2.0 2.8%, APEX-Agents-AA 22.4%, and the total absence of Terminal-Bench 4.0, τ³-Banking, Toolathlon, MazeBench, ALE, JobBench and BrowseComp** — so the model drives GUIs competently and cannot sustain a long agentic task.
- **Reasoning: 64/100.** Mid-band. **GPQA Diamond 90.0–90.3% clears its reference on both vendor and AA runs, MMLU-Pro 88.5% and MMLU-Redux 94.5% are strong exam figures, and MRCRv2 91.7% is the strongest in its family here.** Capped by **AA-HLE 34.7–35.6% (under 40%), CritPt 9.1%, FrontierMath v2 Tiers 1–3 34.4%, Apex 22.7%, AA-LCR 73.0% (the second-lowest in this batch), and the total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME and FrontierMath Tier 4** — so both composite depth and reliability are unknown.
- **Context window: 88/100.** **1M via Together, 262.1K via Fireworks, 65.5K max output** — so the tier is provider-dependent, which is the score's main constraint: a window that changes with your router is not a model property. Scored at 88 (the 200K–500K band's ceiling, held up by MRCRv2 91.7%) rather than the ≥1M tier because **the 262K route is the more widely deployed one and no MRCR/GraphWalks run exists at 1M depth**. Repo meta.json additionally records a **text-only 128K Zen lane**, which would score materially lower.
- **Multimodal: 92/100.** Text, image and video in with text out, scored at the top of the methodology's 75–90 band and marginally above it because the coverage claim is unusually well-evidenced: **three separate video benchmarks (Video-MME 88.0%, VideoMMMU 85.4%, MLVU 87.4%), OmniDocBench 91.4%, MathVision 90.3%, RealWorldQA 86.9%, CharXiv 85.9%, ScreenSpot Pro 79.0%**, and **AA measuring MMMU-Pro above the vendor (80.5% vs 79.0%)**. Held below 95+ because output is text-only, there is no audio input, and ExtractBench, BabyVision, ZeroBench and ParseBench are unmeasured.
- **Coding: 68/100.** Mid-band. **SWE-bench Verified 77.7%, SWE Multilingual 75.8% and LiveCodeBench v6 89.6%** are solid mid-frontier figures. Capped by **AA Coding Index 55.9% (14 points under the 70% reference), AA-SciCode 46.1% (under 55%), NL2Repo 41.1%, and a provenance caveat: the LiveCodeBench v6 row is cross-cited from the Qwen3.8-27B card rather than measured on Plus**, plus no DeepSWE, Vibe Code Bench or FrontierCode figure.
- **Cost efficiency: 92/100.** **$0.32/$0.08/$1.28 via Together with a 1M window** is one of the better cards in this research series — cheaper than every Claude and GPT flagship — and the $0.08 cache rate is aggressive. Held at 92 rather than higher because **the two provider rate cards conflict on whether the cheap rate carries the 1M window**, there is no free tier (`noFreeId`), the model is **closed-source with no self-hosting escape**, and parameter count is undisclosed so infrastructure planning is impossible.
- **Overall Score: 76/100.** (66 + 64 + 88 + 92 + 68) / 5 = 75.6 → **76** → **76**. Recommendation: **the best computer-use / GUI-agent model in this research series** — OSWorld-Verified 73.3%, AndroidWorld 81.0%, ScreenSpot Pro 79.0%, MCP Atlas 73.2% and a well-evidenced video-input suite at $0.32/$1.28 with a 1M window. Use it for anything that involves driving a real interface rather than an API. Three cautions: **it cannot sustain a long agentic task** (AA Agentic Index 19.7%, OSWorld 2.0 2.8%, GDPval-AA 13.3%); **both its composite reasoning depth and its reliability are entirely unmeasured** — no AA Intelligence Index, no AA-Omniscience, no ARC-AGI — so do not use it as a factual or deep-reasoning assistant; and **the 1M window is provider-dependent and the Zen lane is a text-only 128K route**, so verify the tier you actually buy before planning long-horizon work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Alibaba Cloud's Qwen3.7-Plus launch benchmark post as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 69-row catalog under its canonical dotted slug `qwen3-7-plus`** — which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, the OSWorld 2.0 paper and Openrouter — plus llm-stats for release date, licence, context and provider pricing, and an independent agents directory for the GA date. **Three lookup/provenance traps are recorded rather than papered over: (1) the repo folder spelling `qwen-3-7-plus` 404s on both BenchLM and LLMLearner and the dotted slug `qwen3-7-plus` had to be found via search; (2) llm-stats' FAQ describes the model as text-and-image input, which contradicts QwenCloud's own specification and three measured video benchmarks (Video-MME 88.0%, VideoMMMU 85.4%, MLVU 87.4%) and is recorded as an aggregator error; (3) the LiveCodeBench v6 row is cross-cited from the Qwen3.8-27B model card rather than measured on Plus, which is weaker provenance and is flagged at the figure.** The pricing conflict — Together's $0.32/$1.28 with a 1M window against the repo meta.json's tiered $0.40/$1.60 → $1.20/$4.80 structure — is listed side by side rather than reconciled, since the material question is whether the cheap rate carries the 1M window. Conflicts are never averaged: GPQA 90.3% (vendor) / 90.0% [AA], HLE 34.7% / 35.6% [AA], Terminal-Bench 2.0 70.3% (vendor) / 52.8% (Vals, 2.1 harness), MMMU-Pro 79.0% (vendor) / 80.5% [AA] with the independent run preferred on each. Missing benchmarks (Terminal-Bench 4.0, τ³-Banking, Toolathlon, MazeBench, ALE, JobBench, BrowseComp, AA Intelligence Index, AA-Omniscience, ARC-AGI, AIME, FrontierMath Tier 4, DeepSWE, Vibe Code Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench, ParseBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud — Qwen3.7-Plus launch benchmarks (primary source, 50+ vendor rows)](https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206)
  - [Alibaba Cloud — Qwen3.7-Plus: Multimodal Agent Intelligence (launch post)](https://www.alibabacloud.com/blog/603206)
  - [BenchLM — Qwen3.7 Plus benchmark scores (69 rows, 53.91/100, #82/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-7-plus)
  - [Artificial Analysis — Qwen3.7-Plus](https://artificialanalysis.ai/models/qwen3-7-plus)
  - [Vals AI — Qwen3.7 Plus leaderboard results](https://www.vals.ai/models/alibaba_qwen3.7-plus)
  - [LLM Stats — Qwen3.7-Plus release date, licence, provider pricing, context](https://llm-stats.com/models/qwen3.7-plus)
  - [Awesome Agents — Qwen3.7-Plus profile (GA date, GUI-agent capability description)](https://awesomeagents.ai/models/qwen-3-7-plus/)
  - [Independent review — ScreenSpot Pro 79.0 and Terminal-Bench 70.3, computer-use positioning](https://blog.buildfastwithai.com/qwen-3-7-plus-multimodal-agent-review-2026)
  - [Qwen — Qwen3.7-Plus launch blog ("Multimodal Agent Intelligence")](https://qwen.ai/blog?id=qwen3.7-plus)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [OSWorld 2.0 paper](https://arxiv.org/abs/2606.29537)
  - [Openrouter — Qwen3.7-Plus benchmarks](https://openrouter.ai/qwen/qwen3.7-plus/benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
