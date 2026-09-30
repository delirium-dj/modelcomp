# GPT-6 Astra — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's frontier flagship for demanding end-to-end work — analysis, software engineering, deep research, science and document creation — strongest in long-horizon agentic tasks using computers and browsers, at ~5× GPT-6 Sol's list price.
- **Provider / access:** OpenAI first-party (Azure the reference host) and routers such as OpenRouter `openai/gpt-6-astra`; `reasoning.mode=pro` is sold as the separate GPT-6 Astra Pro SKU.
- **Release / knowledge:** Staged rollout from 2026-09-04; cutoff not disclosed.
- **IDs:** `openai/gpt-6-astra`; `openai/gpt-6-astra-pro` (`reasoning.mode=pro`). No Zen Free ID — paid only.
- **Context window:** **1.1M tokens** (OpenRouter listing) against OpenAI's ~1.05M description with a 128,000-token max output; input above a 272K threshold bills at the long-context rate.
- **Modalities:** text + image input, text output; reasoning yes (effort tiers plus a `pro` mode); tool calls, structured output, computer/browser-use tools.
- **Pricing (as of 2026-09-29):** $5.00 / 1M in, $25.00 / 1M out standard; $10.00 / $50.00 per 1M as GPT-6 Astra Pro. Cache read $1.00 / 1M, cache write $12.50 / 1M, 272K-token cliff. GPT-6 Sol lists at $1.00/$5.00.
- **Architecture:** undisclosed; OpenAI describes training scale and behaviour, not parameters.

### Raw benchmarks found

Agent / tool use (OpenAI release tables as catalogued by Tabbit's evidence review, 2026-09-20; vendor-run):

- Terminal-Bench 4.0: **57.9%** vs GPT-5.6 Sol 37.3%, at ~9% lower estimated API cost per task
- OSWorld 2.0 (v2026.08.08 offline set, partial score, latency simulation): **72.6%** at ~40 min/task vs Sol's 65.7% at ~75 min
- Agents' Last Exam: **59.3%** vs Sol 53.6%
- BenchCAD (with tools, CAD code from multi-view renders): **95.9%** geometric overlap vs Sol 83.3%
- AutomationBench: **vendor-reported leading result; no individual value reproduced**
- ScreenSpot-Pro / OSWorld v2 figures from the previous file: **not re-published in the sources checked**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** vendor (high-scoring setting); **96.1%** Artificial Analysis
- HLE: **54.7%** (Artificial Analysis, max effort)
- Artificial Analysis Intelligence Index **52.7** (max); Agentic Index **51.0**; Coding Index **76.9**
- AA-LCR long-context reasoning: **80.7%**; GDPval-AA **52.1%**; CritPt **31.7%**
- AA-Omniscience: accuracy **62.6%**, non-hallucination rate **48.7%**
- FrontierMath Tier 4 v2: **no re-verified value** (previous 97.6% unconfirmed); LCR / MLCR, Vibe Code Bench: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **57.9%** (above); SciCode: **56.5%**
- DeepSWE: **no re-verified value** (previous 74.1% unconfirmed)
- SWE-bench Verified / Pro: **deliberately omitted from OpenAI's tables — no verified public score found**

Long context:

- AA-LCR 80.7% is the only verified long-context reasoning figure; no MRCR/RULER/GraphWalks recall-at-depth number is published

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 4.0 57.9%, OSWorld 2.0 72.6% at roughly half Sol's per-task wall-clock, Agents' Last Exam 59.3% and BenchCAD 95.9% are the strongest computer-use/terminal evidence in this batch; capped because it is all vendor-run and the 272K cliff taxes long transcripts.
- **Reasoning: 93/100.** GPQA 96.0–96.1% is top-of-class, but HLE 54.7%, GDPval-AA 52.1% and CritPt 31.7% show it is not uniformly ahead of the cheaper Sol tier.
- **Context window: 95/100.** 1.1M tokens with 128K output is the biggest jump over Sol's 200K class; no independent recall-at-depth benchmark exists and the 272K pricing cliff caps full-window use.
- **Multimodal: 82/100.** Text and image input with leading computer-use vision; no audio/video input, no image generation, no multimodal output.
- **Coding: 90/100.** Terminal-Bench 4.0 57.9% and SciCode 56.5% are elite agentic-coding evidence, but the omission of SWE-bench Verified/Pro leaves no comparable repo-editing score.
- **Cost efficiency: 40/100.** $5/$25 standard and $10/$50 in pro mode, with $12.50/1M cache writes and a 272K input cliff, is the weakest value in this batch; only the ~9% lower cost per completed terminal task argues the other way.
- **Overall Score: 91/100.** (94 + 93 + 95 + 82 + 90) / 5 = 90.8 → **91**. Best fit: agentic coding, computer-use and deep-research pipelines where per-task completion reliability justifies a frontier premium.

## Re-run audit — 2026-09-29

Previous DeepSeek 4.1 Flash file: 2026-09-18. After re-verifying against live sources:

- Pricing corrected: $10/$50 is the **Astra Pro** (`reasoning.mode=pro`) SKU; standard Astra lists at $5/$25. Cost efficiency moved 45 → 40.
- Release refined to 2026-09-04; context widened to OpenRouter's 1.1M figure.
- Terminal-Bench 4.0 updated 57.7% → 57.9%; OSWorld 2.0 re-confirmed at 72.6% (v2026.08.08 partial set).
- Unverifiable numbers are now marked rather than restated: FrontierMath Tier 4 v2, DeepSWE, ScreenSpot-Pro.
- Reasoning lowered 94 → 93 after HLE 54.7% / GDPval-AA 52.1% / CritPt 31.7% came in below the assumed profile; Overall unchanged.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research re-run (OpenRouter model/pricing/benchmark pages, Artificial Analysis summary at max effort, Tabbit's catalogued review of OpenAI's release tables incl. harness caveats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
