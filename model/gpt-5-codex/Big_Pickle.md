# GPT-5 Codex — findings by Big Pickle

- Source: OpenAI (`gpt-5-codex`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex
- **Short description:** OpenAI's September 2025 agentic coding variant of GPT-5, further optimized for real-world software engineering in the Codex product (terminal, IDE, GitHub, ChatGPT). Introduced dynamic thinking — no router, adjusts reasoning time in real time (observed up to 7 hours on complex tasks). Deprecated 2026-04-22 and retired 2026-07-23 (DataLearner). Superseded by GPT-5.1-Codex, GPT-5.1-Codex-Max, GPT-5.2-Codex, and GPT-5.3 Codex. Not an alias of any other entry. `meta.json` marks this entry as `scaffolded: true`.
- **Provider / access:** OpenAI Responses API only (`gpt-5-codex`); Codex CLI, IDE extension, GitHub integration, ChatGPT (Plus/Pro/Business/Edu/Enterprise). Available via API from 2025-09-23. **Retired as of 2026-07-23** (DataLearner) — no longer available for new use.
- **Release / knowledge:** released 2025-09-15 (TechCrunch, OpenAI blog, DataLearner — three independent sources); API access from 2025-09-23 (OpenAI update post, Vals AI). Knowledge cutoff not publicly stated for this variant; the base GPT-5 (August 2025) has a similar training window.
- **IDs:** `gpt-5-codex` (OpenAI API, retired).
- **Context window:** **400,000 tokens total / 128,000 max output** (Vals AI, DataLearner — two independent sources agree). Note: repo `meta.json` says "128K total" — this may reflect an API default or a post-retirement data entry error; the 400K figure from Vals and DataLearner is treated as canonical.
- **Modalities:** text, image, file in; text out (Vals AI; DataLearner confirms text + image). No video input. Tool calls; reasoning effort levels (low / medium / high).
- **Pricing (as of last available):** $1.25 in / $10.00 out per 1M tokens; cached input $0.125 (Vals AI; OpenAI confirmed "same price as GPT-5"). Paid only; included with ChatGPT Plus/Pro/Business/Edu/Enterprise via Codex.
- **Architecture:** proprietary (OpenAI, weights private). A post-trained checkpoint of the GPT-5 base model specialized for agentic coding. Dynamic thinking (no fixed effort level — the model decides how long to reason based on task complexity). On OpenAI employee traffic: bottom 10% of turns used 93.7% fewer tokens than GPT-5; top 10% spent 2× longer reasoning.

### Raw benchmarks found

> Vendor-reported figures come from OpenAI's GPT-5 Codex launch post (2025-09-15) and update post (2025-09-23). Independent numbers (Vals AI, DataLearner, airank.dev) are marked as such. This model has been retired since 2026-07-23; coverage reflects its launch-era standing.

Agent / tool use:

- τ²-Bench (Telecom): **86.80%** (DataLearner, high effort + tools)
- Terminal-Bench (Vals AI eval, 2025-09-24): **58.8%** — **#1 at the time**, 10% improvement over GPT-5; lower cost and latency than other top-3 models (Vals AI)
- Terminal Bench Hard: **37.90%** (DataLearner, high effort + tools)
- Terminal-Bench 2.0: **43.4%** (airank.dev)
- SWE-Lancer IC SWE: **not separately published for the Codex variant** (the base GPT-5 scored $112K on IC SWE Diamond)
- OSWorld / OSWorld-Verified: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **83.70%** (DataLearner, high effort)
- AIME 2025: **98.70%** (DataLearner) — near-saturated
- HLE (no tools): **27.80%** (DataLearner, high effort)
- CritPt: **5.10%** (DataLearner)
- AA-LCR (long context reasoning): **71.70%** (DataLearner)
- IFBench (instruction following): **74.10%** (DataLearner)
- Artificial Analysis Intelligence Index: **no verified public score found** for the Codex variant specifically (AA evaluated the base GPT-5, not GPT-5 Codex)
- BenchLM overall: **not computed** for GPT-5 Codex (BenchLM tracks the Codex family from GPT-5.1-Codex onward; the original GPT-5 Codex is not on the leaderboard)

Coding:

- SWE-bench Verified: **74.50%** (DataLearner, high effort; airank.dev confirms 74.5%) — **#1 on Vals AI's leaderboard at launch** (2025-09-24), narrowly outperforming GPT-5. Note: OpenAI switched from the n=477 subset (used for the base GPT-5's 74.9%) to the full n=500 set for GPT-5 Codex.
- LiveCodeBench: **84.72% ±1.03**, rank 37/143 (Vals AI, high effort); DataLearner: 84% — two independent sources agree within 0.7pp
- SWE-rebench: **44.0%** (airank.dev)
- IOI v1: **9.8%** overall (Vals AI) — first model to receive full credit on a single IOI question, though overall accuracy remained low
- Aider Polyglot: **not separately published for the Codex variant** (base GPT-5: 88%)
- SWE-bench Pro: **no verified public score found**
- SciCode: **no verified public score found**

Multimodal:

- MMMU-Pro: **73.80%** (DataLearner)
- MMMU: **not separately published for the Codex variant** (base GPT-5: 84.2%)
- Image and file input supported (Vals AI); no video

Long context:

- AA-LCR: **71.70%** (DataLearner)
- No RULER or MRCR score found for this variant

### Scores

- **Tool use: 65/100.** τ²-Bench Telecom 86.80% is strong; Terminal-Bench 58.8% was #1 at launch (2025-09-24). Offsets: Terminal Bench Hard 37.90% and Terminal-Bench 2.0 43.4% are mid; no OSWorld or GDPval-AA score; the model has been retired since 2026-07-23 and is four generations behind the current Codex line (GPT-5.3 Codex).
- **Reasoning: 70/100.** AIME 2025 98.70% is near-saturated; GPQA Diamond 83.70% is solid; AA-LCR 71.70% verifies long-context reasoning; IFBench 74.10% is decent. Offsets: HLE 27.80% is mid; CritPt 5.10% is low; no independent AA Intelligence Index for the Codex variant.
- **Context window: 65/100.** 400K/128K was solid in September 2025 and remains above the 200K tier. Offsets: by October 2026, 1M+ is standard among frontier models; the model is retired and unavailable; no compaction support (that arrived with GPT-5.1-Codex-Max).
- **Multimodal: 65/100.** Image and file input supported; MMMU-Pro 73.80% is a genuine multimodal signal. Offsets: no MMMU score for this variant; no audio or video; multimodal capability was secondary to the coding focus.
- **Coding: 72/100.** SWE-bench Verified 74.50% was #1 at launch; LiveCodeBench 84.72% (rank 37/143) is strong; Terminal-Bench 58.8% was frontier-adjacent in September 2025. Offsets: SWE-rebench 44.0% and TB2.0 43.4% are mid; no SWE-bench Pro or SciCode score; by October 2026, GPT-5.3 Codex (SWE-V 85%, TB2.0 77.3%) is far ahead; the model is retired.
- **Cost efficiency: 68/100.** $1.25/$10.00 with $0.125 cached input was reasonable for a coding agent; included with ChatGPT Plus/Pro/Business/Edu/Enterprise. Offsets: the model is retired (no longer available for new use); output pricing is 3× GLM-5's $3.20; Responses API only.
- **Overall Score: 67/100.** Half-up mean of Tool use (65), Reasoning (70), Context window (65), Multimodal (65), Coding (72) = 337/5 = 67.4 → 67. Cost efficiency (68) is excluded per `model-comparison.md` methodology.

### Caveats and conflicts

- **Context window discrepancy:** repo `meta.json` says "128K total"; Vals AI and DataLearner both say 400K/128K. The 400K figure is treated as canonical (two independent sources agree; the base GPT-5 has 400K context). The meta.json figure may reflect an API default or a post-retirement data entry error.
- **Retired model:** GPT-5 Codex was deprecated 2026-04-22 and retired 2026-07-23 (DataLearner). It is no longer available for new use via the API or Codex product. All benchmark data reflects its launch-era standing (September 2025).
- **SWE-bench Verified subset change:** OpenAI switched from the n=477 subset (used for base GPT-5's 74.9%) to the full n=500 set for GPT-5 Codex (74.5%). The scores are not directly comparable — the Codex variant's 74.5% on 500 tasks is arguably stronger than the base's 74.9% on 477.
- **Dynamic thinking:** GPT-5 Codex does not use a fixed reasoning effort level. It decides how long to think based on task complexity (observed up to 7 hours). This means benchmark scores vary with task difficulty and the model's own confidence. The DataLearner scores use "high" effort; Vals AI uses "high" as well.
- **Scaffolded entry:** `meta.json` marks this entry as `scaffolded: true`. The model was accessed through OpenAI's Codex scaffold (CLI/IDE/GitHub), which adds its own tooling and context management on top of the raw model.
- **Thin BenchLM coverage:** BenchLM does not have a page for GPT-5 Codex (the original). The Codex family tracking starts at GPT-5.1-Codex. No independent overall score exists.
- **Launch-era #1 claims:** Vals AI rated GPT-5 Codex #1 on both Terminal-Bench (58.8%) and SWE-bench Verified at launch (2025-09-24). These claims were accurate for September 2025; by October 2026, the model is four generations behind.

### Sources

- OpenAI GPT-5 Codex launch post: https://openai.com/fi-FI/index/introducing-upgrades-to-codex
- OpenAI GPT-5 for developers (base model context): https://openai.com/index/introducing-gpt-5-for-developers/
- TechCrunch coverage (2025-09-15): https://techcrunch.com/2025/09/15/openai-upgrades-codex-with-a-new-version-of-gpt-5
- Vals AI model page: https://www.vals.ai/models/openai_gpt-5-codex
- DataLearner model page: https://www.datalearner.com/en/ai-models/pretrained-models/gpt-5-codex
- airank.dev: https://airank.dev/models/gpt-5-codex
- OpenAI SWE-bench Verified no longer measures frontier coding (contamination analysis): https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/

**Big Pickle (opencode/big-pickle)** — 2026-10-18
