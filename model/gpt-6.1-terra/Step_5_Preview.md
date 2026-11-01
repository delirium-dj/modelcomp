# GPT-6.1 Terra — findings by Step 5 Preview

- Source: OpenAI/GPT-6.1 Terra
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra (vendor hyphenated style; sibling effort variants share weights — Max/Xhigh/High/Medium/Low/non-reasoning are effort configs of one model)
- **Short description:** OpenAI's fast, efficient mid-tier GPT-6.1 model for visual reasoning, precise computer use, and natural writing, released 2026-10-26; positioned as the cost-intelligence option of the GPT-6.1 family (50% cheaper than GPT-5.6 Terra's standard API prices per launch coverage).
- **Provider / access:** OpenAI API `https://api.openai.com/v1` — Chat Completions and Responses endpoints (tool calling requires Responses), Batch supported (50% cheaper); also on Amazon Bedrock (`us.openai.gpt-6.1-terra` / `global.openai.gpt-6.1-terra` cross-Region inference profiles). Not listed on OpenCode Zen as of 2026-10-31.
- **Release / knowledge:** 2026-10-26 (ChatGPT Work and Codex for Plus/Pro/Enterprise/Edu at launch); knowledge cutoff 2026-06-01 (official model page).
- **IDs:** `gpt-6.1-terra` (OpenAI API; dateless snapshot, only published snapshot)
- **Context window:** 1,050,000 tokens total, 922,000 max input, 128,000 max output (official model page; Artificial Analysis and Vals round to "1M").
- **Modalities:** in — text, image; out — text (audio/video explicitly unsupported). Reasoning model with `reasoning.effort` = none/low/medium (default)/high/xhigh/max. Tools on Responses API: web_search, file_search, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search; structured outputs, prompt caching, streaming supported.
- **Pricing (as of 2026-10-31):** $1.00 per 1M input / $0.05 cached input / $1.25 cache-write (30-min) / $5.00 per 1M output (OpenAI standard tier); prompts above 272K input tokens are billed 2x input and 1.5x output for the whole request; Batch and Flex 50% lower; Regional processing +10%; Fast mode 2x. Artificial Analysis measures $0.96 per Intelligence Index task; Vals AI $2.94 per Vals Index test.
- **Architecture:** proprietary; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 Offline (computer use): **74.2%** (OpenAI-reported, via BenchLM aggregation)
- Agents' Last Exam: **60.0%** (OpenAI-reported, via BenchLM)
- Terminal-Bench 4.0: **50.30%** (OpenAI-reported) vs **55.6%** (Artificial Analysis, via BenchLM) vs **49.49%** (#10–11 of ~56–59) (Vals AI, effort max) — three-harness spread reported rather than averaged
- AutomationBench-AA: **60.2%** (Artificial Analysis, via BenchLM)
- GDPval-AA v2.1: **1,476 Elo** (Artificial Analysis, via BenchLM) — below the 1,750+ frontier reference, above the ~1,200 mid reference
- AA-Briefcase v1.1: **1,402 Elo** (Artificial Analysis, via BenchLM)
- GDP.pdf: **28.6%** (Artificial Analysis, via BenchLM)
- MazeBench: **16%** (MazeBench leaderboard, via BenchLM — provisional single-source)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **51** (Max effort), #12 of 58 in the >$1/1M price class, 28 of 719 overall — the effort ladder is Max 51 / Xhigh 45 / High 42 / Medium 38 / non-reasoning 30 / Low 29
- AA-HLE (Humanity's Last Exam): **46.2%** (Artificial Analysis, via BenchLM)
- FrontierMath v2: **90.88%** (Tiers 1–3), **92.68%** (Tier 4) (Epoch AI leaderboards, via BenchLM)
- AA-LCR (long-context reasoning): **82.7%** (Artificial Analysis, via BenchLM)
- CritPt v2: **28.0%** (Artificial Analysis, via BenchLM)
- MLCR-AA (medical long context): **30.6%** (Artificial Analysis, via BenchLM)
- AA-Omniscience v1.1: Index **29.6**, accuracy 47.6%, hallucination rate **34.5%** (Artificial Analysis, via BenchLM)
- HealthBench: 51.1% raw / 55.1% length-adjusted / 62.7% professional / 31.4% hard (OpenAI system-card addendum, via BenchLM)
- GPQA Diamond: no verified public score found
- Vals Index v2.2: **60.47%** (#11 of 32 header; #10 of 28 / 60.17% on the launch-update page) (Vals AI)

Coding:

- AA-SciCode: **55.1%** (Artificial Analysis, via BenchLM)
- Terminal-Bench 4.0: 49.49–55.6% (see conflicting figures above)
- Vibe Code Bench v1.1: **84.00%** (#19–20 of ~120–123) (Vals AI)
- FrontierCode 2.0: folded into the Index composite; per-model text value not published
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 1.05M-token window (official docs); AA-LCR 82.7% and MLCR-AA 30.6% show solid-but-not-saturated long-context reasoning; no MRCR/RULER curve at a stated window length

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 2.1 Offline 74.2% and Agents' Last Exam 60% are genuinely strong, but GDPval-AA (1,476 Elo), AA-Briefcase (1,402), and AutomationBench-AA (60.2%) sit in the upper-mid band — capped below frontier (GDPval 1,750+, Briefcase ~1,700) with no Tau3/Claw-Eval numbers.
- **Reasoning: 85/100.** AA Index 51 (Max) with AA-HLE 46.2% clearing the 40% frontier reference and FrontierMath v2 above 90%; capped by mid-range CritPt (28%), a high hallucination rate (34.5%), and an Index score (51) well under the 60+ frontier reference.
- **Context window: 95/100.** 1,050,000 tokens total / 922K input / 128K output — top tier (≥1M = 95–100); the >272K-token 2x/1.5x price surcharge is noted as a caveat; AA-LCR 82.7% is good but not the ≥98% retrieval that would justify 100.
- **Multimodal: 65/100.** Text + image input, text output; audio and video explicitly unsupported (official docs) — the +image-in band of 60–70 applies; MMMU-Pro 84.7–85.5% is strong for image reasoning but does not widen modality coverage.
- **Coding: 82/100.** SciCode 55.1% meets the 55% frontier reference and Vibe Code 84% is strong, but Terminal-Bench 4.0 lands at 49.5–55.6% across three harnesses (mid vs frontier depends on harness) and SWE-bench/LiveCodeBench are unpublished.
- **Cost efficiency: 87/100.** $1/$5 standard with $0.96 per AA Index task — near the ~$1.25/$4.25 ≈ 88 reference point; the >272K-token 2x/1.5x surcharge and 2x Fast mode are the caveats that keep it off 90+.
- **Overall Score: 80/100.** Mean of (75 + 85 + 95 + 65 + 82)/5 = 80.4 → 80 (independently consistent with BenchLM's 80.46/100 composite). Best fit: cheap frontier-adjacent computer-use and agentic automation at ~$1/$5 — pick it for visual-reasoning/computer-use pipelines; step up to GPT-6.1 Sol or GPT-6 Astra when Index 55+ is required.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-31
- Method: public internet research across four independent source families (OpenAI's official model page/pricing, Artificial Analysis release page, Vals AI model page, BenchLM aggregator that separately attributes OpenAI-reported and AA-reported numbers); conflicting Terminal-Bench 4.0 values (OpenAI 50.30% / AA 55.6% / Vals 49.49%) are listed side by side rather than reconciled to one number; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6.1 Terra official model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [Artificial Analysis — GPT-6.1 Terra release page (Intelligence Index, speed, cost)](https://artificialanalysis.ai/models/releases/gpt-6-1-terra)
  - [Vals AI — GPT-6.1 Terra model page (Vals Index, Terminal-Bench 4.0, component scores)](https://www.vals.ai/models/openai_gpt-6.1-terra)
  - [BenchLM — GPT-6.1 Terra benchmark aggregation (OpenAI-reported + AA-reported tables)](https://benchlm.ai/models/gpt-6-1-terra)
  - [OpenAI community — GPT-6.1 Terra launch announcement](https://community.openai.com/t/gpt-6-1-terra-delivering-fast-and-capable-computer-use-at-a-lower-price/1409900)
  - [Amazon Bedrock — GPT-6.1 Terra model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-6-1-terra.html)
