# Qwen3.8-Max — findings by DeepSeek 4.1 Flash

- Source: Alibaba Cloud (Qwen team) / Qwen3.8-Max (`qwen3.8-max-0902`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Newly discovered model.** Not previously tracked in `model/` — added during this
> research scan (discovered via Alibaba's Qwen3.8 launch and frontier comparison
> tables).

## Model card

- **Name:** Qwen3.8-Max (dated checkpoint `qwen3.8-max-0902`)
- **Short description:** Alibaba Cloud's flagship 2.4T-parameter sparse MoE (roughly 95B active per token), previewed at the World AI Conference in Shanghai on 2026-07-19 and generally available from 2026-08-03. It is Alibaba's direct answer to OpenAI and Anthropic frontier models, competing on reasoning benchmarks and a 1M-token multimodal window while undercutting them on a single flat price — but it still ships without a published safety or training model card.
- **Provider / access:** Alibaba Cloud Model Studio (hosted multimodal API). A separate open-weight checkpoint appeared on Hugging Face on 2026-08-13 under a restricted custom license — text-only with a smaller context than the hosted API, so it is not a drop-in replacement. BenchLM lists the tracked checkpoint (`Qwen/Qwen3.8-2.4T-A95B`) as Open Weight.
- **Release / knowledge:** Preview 2026-07-19; GA 2026-08-03. Knowledge cutoff not published.
- **IDs:** `qwen3.8-max-0902` (dated checkpoint; `qwen3.8-max` family id). Not tracked on OpenCode Zen.
- **Context window:** 1,000,000 tokens — up to 991,800 input tokens in non-thinking mode and 983,610 in thinking mode — plus 131,072 output tokens. Verified from Alibaba's page as compiled by HokAI (checked 2026-09-14); BenchLM also prints 1M.
- **Modalities:** text, image and video input with text output; reasoning yes (thinking/non-thinking modes); tool calls and structured output yes; no audio input.
- **Pricing (as of 2026-09-18):** a single flat rate across the whole context — **$2.00 / 1M in and $6.00 / 1M out**, with no tiered step-up for long inputs (AA blended price lists $1.18 / 1M). New Model Studio activations get a one-time 1M-token free quota in the Singapore region; there is no permanent free tier.
- **Architecture:** sparse Mixture-of-Experts, 2.4T total parameters with ~95B active per token, built on the Qwen3.5 architecture with hybrid attention. The hosted API remains closed; BenchLM lists the tracked `Qwen/Qwen3.8-2.4T-A95B` checkpoint as open weight, while the separate open-weight Hugging Face checkpoint has a different modality/context profile.

### Raw benchmarks found

> BenchLM's page (`benchlm.ai/models/qwen3-8-max`, checked 2026-10-07) computes a
> conservative **70.52 / 100, rank #16 of 887** overall on 61 of 621 benchmarks;
> most rows below are Qwen release benchmarks compiled by BenchLM, with Vals AI
> and third-party leaderboards marked.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen release, via BenchLM) — ahead of both Claude Opus 4.8 and Claude Fable 5 (84.6 each), behind GPT-5.6 Sol's 88.8%; Vals AI prints **67.4%**
- IFBench (instruction following): **82.8%** — ahead of GPT-5.6 Sol's 72.7%
- OSWorld-Verified **86.1%**; AndroidWorld **85.3%**; MobileWorld **77.8%**; WebArena-Verified **66.8%**; OSWorld 2.0 **19.4%** (Qwen release via BenchLM)
- Toolathlon-Verified **72.5%**; CoWorkBench **74.8%**; skillsBench **70.2%**; WideResearch **81.9%**; Agents' Last Exam **52.4%**; JobBench **53.4%**; AutomationBench **27.3%**; HLE w/ tools **56.2%** (Qwen release via BenchLM)
- LMArena multimodal rank: **#2 globally** on blind human-preference multimodal tasks, behind only Claude Fable 5
- Claw-Eval / ClawProBench / Tau3-Banking / Tau2-Bench / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen release; Vals AI **93.7%**) — ranked 11th of 44 tracked models
- HLE: **43.6%** — behind Claude Fable 5's 53.3%
- PaperBench: **93.0** — ahead of GPT-5.6 Sol (90.5), Claude Fable 5 (88.8) and Claude Opus 4.8 (80.3)
- MMLU-Pro (Vals): **88.6%** (Vals AI via BenchLM); CritPt / MLCR: **no verified public score found**
- MRCRv2 (long context): **92.9%**; LongBench v2: **66.3%** (Qwen release via BenchLM)
- Artificial Analysis Intelligence Index: **40** — well below the frontier cohort (Claude Opus 5 61, GPT-5.6 Sol 61, Fable 5.1 66)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **67.7%** (Qwen release) — behind Claude Fable 5's 80.0%; Vals AI SWE-bench **85.6%** and LiveCodeBench **87.9%** (via BenchLM)
- Terminal-Bench 2.1: **86.6%** (above) — the strongest coding-adjacent result
- DeepSWE **56.6%**; FrontierSWE **73.5%**; NL2Repo **55.9%**; MLS-Bench Lite **41.0%**; QwenReactBench **1724**; VulcanBench v3 **81.2%**; OpenHarmony Bench **60.8%**; FrontierSWE v2 **15.8%** (Qwen release / third-party leaderboards via BenchLM)
- SWE-bench Verified / SciCode / Vibe Code Bench: **no verified public score found**
- Output speed: **41 tok/s** median (rank 33 of 36 tracked models) — a significant throughput weakness for agent loops

Multimodal:

- MMMU-Pro **82.3%**; MathVision **95.2%** (97.7% w/ Python); BabyVision **82.0%**; CharXiv **93.5%** (88.4% w/o tools); OmniDocBench 1.5 **92.1%**; OCRBench V2 **74.2%**; CC-OCR **79.6%**; RealWorldQA **88.0%**; ScreenSpot Pro **84.5%**; Video-MME (with subtitles) **90.4%**; VideoMMMU **88.7%**; MLVU (M-Avg) **90.8%**; LVBench **81.8%** (Qwen release via BenchLM)

Long context:

- Alibaba publishes the 991,800/983,610 input-token ceilings plus **MRCRv2 92.9%** and LongBench v2 66.3% (Qwen release via BenchLM); no RULER/GraphWalks recall value, so the ~1M window is still largely vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 85/100.** 86.6% on Terminal-Bench 2.1 (third in the field as measured here), 82.8% IFBench and a #2 multimodal arena rank make it a capable agent; capped by the absence of Tau3/GDPval/Claw results and 41 tok/s throughput.
- **Reasoning: 84/100.** GPQA Diamond 92.6% and PaperBench 93.0 are strong, but HLE 43.6% and an AA Intelligence Index of 40 show a clear gap to the frontier on hard reasoning.
- **Context window: 95/100.** A full 1M-token window with no tiered price step and 131K output is excellent value; no recall-at-depth benchmark keeps it below the maximum.
- **Multimodal: 85/100.** Text, image and video input with a #2 global multimodal arena placement; no audio input and text-only output.
- **Coding: 80/100.** SWE-bench Pro 67.7% trails the Fable/Opus tier, though Terminal-Bench 2.1 at 86.6% is near the top; the new Vals rows (SWE-bench 85.6%, LiveCodeBench 87.9%) fill the biggest gaps, but SWE-bench Verified, SciCode and DeepSWE-class depth stay unproven.
- **Cost efficiency: 85/100.** A flat $2/$6 per 1M across a 1M window undercuts most frontier rivals, and a one-time 1M-token free quota helps evaluation; there is no permanent free tier, and 41 tok/s raises per-task wall-clock cost.
- **Overall Score: 86/100.** (85 + 84 + 95 + 85 + 80) / 5 = 85.8 → **86**. Best fit: large-context multimodal agent and document workloads that need frontier-adjacent tool scores at roughly a fifth of frontier per-token prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (Alibaba Cloud model page and independent/AA figures as compiled by HokAI, plus BenchLM's Qwen3.8 Max page — Qwen release benchmarks, Vals AI and third-party leaderboards, checked 2026-10-07); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
