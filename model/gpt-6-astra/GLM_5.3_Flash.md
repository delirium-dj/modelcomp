# GPT-6 Astra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (paid flagship; no Free-tier wording; ChatGPT Pro/Business/Enterprise plans additionally get a "GPT-6 Astra Pro" variant)
- **Short description:** OpenAI's most capable model, positioned above GPT-5.6 Sol and the GPT-6 Sol/Luna and GPT-6.1 Sol/Terra siblings, for complex reasoning, coding, computer use, research and document creation; first OpenAI model to reach the "Critical" cybersecurity threshold under its Preparedness Framework (offensive-cyber workflows gated to the OpenAI Daybreak program).
- **Provider / access:** OpenAI API as `gpt-6-astra` — Responses API `v1/responses` (required for tool calling) and Chat Completions `v1/chat/completions`, plus `v1/batch`; also served through Microsoft Azure, AWS Bedrock, Codex, and 11 API providers tracked by Artificial Analysis. Zero Data Retention available for eligible API customers; misalignment monitoring runs on tool-using inference. Not offered on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released 2026-09-03 (system card publication date; AA FAQ confirms September 3, 2026); knowledge cutoff April 30, 2026. Family context: GPT-6 Sol/Luna added 2026-09-22, GPT-6.1 Sol 2026-09-29, GPT-6.1 Terra October 2026 — Astra remains the max-effort flagship.
- **IDs:** `gpt-6-astra` (OpenAI API model ID; snapshot list contains only `gpt-6-astra`). No Free ID on Zen.
- **Context window:** 1,050,000 tokens total / 922,000 max input / 128,000 max output — verified on the OpenAI API model page. Requests with >272K input tokens bill at 2x input and cache rates and 1.5x output for the full request.
- **Modalities:** Text + image in; text out (audio/video not supported; PDF input not listed on the model page, file_search tool available). Reasoning: yes (`reasoning.effort` low/medium/high/xhigh/max; `none` not supported). Tool calls: yes — functions, web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, MCP, tool_search, plus async tool calling and mid-turn steering. Structured Outputs (JSON mode), streaming, and prompt caching supported.
- **Pricing (as of 2026-11-01):** $10.00 in / $50.00 out per 1M; cached input $1.00 (90% discount); cache writes $12.50 (1.25x input rate). Batch/Flex 50% of standard; Fast mode and Ultrafast mode 2x (Ultrafast: US data residency and global processing only). AA blended price $7.70 per 1M (7:2:1 hit/input/output ratio) and $6.24 per Intelligence Index task.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed; RL-trained reasoning model producing long internal chains of thought.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI launch table, max effort; GPT-5.6 Sol 37.3%, Claude Fable 5.1 55.8%, Claude Opus 5 52.6%; AA's independent mini-swe-agent leaderboard tops out at Kimi K3.1 Pro 67.2% with Astra not in its published top 3)
- AutomationBench: **41.4%** (OpenAI launch table; GPT-5.6 Sol 18.1%, Claude Fable 5.1 31.4%, Claude Opus 5 26.9%)
- OSWorld 2.0 (v2026.08.08 offline set, partial score): **72.6%** at ~40 min/task (OpenAI launch table; GPT-5.6 Sol 65.7% at ~75 min, Claude Opus 5 70.2%)
- Agents' Last Exam: **59.3%** (OpenAI launch table; GPT-5.6 Sol 53.6%, Claude Opus 5 55.5%)
- ScreenSpot-Pro (no tools): **92.7%** (OpenAI launch table; GPT-5.6 Sol 76.9%)
- BrowseComp: **91.5%** (OpenAI launch table; Claude Opus 5 90.8%, GPT-5.6 Sol 90.4%)
- BenchCAD: **95.9%** (OpenAI launch table; GPT-5.6 Sol 83.3%)
- GDPval-AA v2.1: **Elo 1584** at max, rank #43/308 (AA leaderboard table, Stirrup shell+browsing harness; leader Claude Opus 5.5 Max 1866, GPT-5.6 Sol Max 1618, GPT-6.1 Sol Max 1609, GLM-5.3-Flash 1649; effort ladder: Xhigh 1569, High 1536, Medium 1498, Low 1403)
- Tau2-Bench / Tau3-Banking: no verified public score found (AA measures τ³-Banking; published top is Qwen3.8 Max 51.3%, Astra not in its published top 3)
- Claw-Eval / ClawProBench: no verified public score found
- Prompt-injection robustness (tool-use safety proxy): indirect-injection defender success **99.79%**, instruction hierarchy **99.99%**; Gray Swan IPI Arena attack success rate **8.5%** over 15 attempts vs GPT-5.6 Sol 27.0% (OpenAI system card)

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI launch table, max effort; Gemini 3.8 Flash 95.3%, GPT-5.6 Sol 94.6%, Claude Fable 5.1 93.7%)
- FrontierMath Tier 4 (v2): **97.6%** (OpenAI launch table — described as saturated; GPT-5.6 Sol 83.0%, Claude Fable 5.1 87.8%)
- HLE (with tools): **57.2%** (OpenAI launch table; Claude Fable 5.1 65.0%, Claude Opus 5 63.6%)
- HLE-Diamond (no tools, AA): Reasoning partition **78.0%** — tied #2–3 with Claude Opus 5.5 Max, behind Gemini 4 Carbon 79.6% (AA HLE-Diamond page); overall AA HLE-Diamond value not published in accessible page text
- ARC-AGI-3: **99.9%** (OpenAI launch table, responses-API harness; ARC Prize Foundation: "surpassed our human action-efficiency baseline on 96% of levels"); ARC-AGI-2: **95.0%**; ARC-AGI-1: **98.5%** (OpenAI launch table; Fable 5.1 90.0%/97.5%)
- Terminal-Bench Science 0.1: **64.6%** (OpenAI launch table; GPT-5.6 Sol 22.4%, Claude Fable 5.1 52.6%)
- Artificial Analysis Intelligence Index v5.0: **57** (Max), rank #4/58; **55** (Xhigh) (AA model page and leaderboard FAQ; Gemini 4 Carbon 59 leads, Claude Opus 5.5 Max 58); OpenAI's launch table cites the older AA v4.1.1 as **61.2** vs Claude Fable 5.1 65.7
- CritPt: no verified public score found (AA includes CritPt v2 Hard in its Index but publishes no Astra value in accessible page text)
- HealthBench Professional (length-adjusted): **64.7** (OpenAI system card, corrected 2026-09-22; launch-table read 63.4; GPT-5.6 Sol 60.5)
- AA-Omniscience v1.1: no verified public score found (AA lists the evaluation for Astra; no value in accessible page text)

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI launch table; Claude Opus 5 73.7%, Gemini 3.8 Flash 73.8%, GPT-5.6 Sol 72.7%)
- FrontierCode 1.1 Extended: **64.5%** / Main: **53.3%** (OpenAI launch table with a Codex-style developer message; Claude Fable 5 64.9%/53.5% — marginally ahead on both tracks)
- AA Coding Agent Index v1.4: **67.0** (OpenAI launch table citation; Claude Opus 5 68.1, Claude Fable 5 67.2, GPT-5.6 Sol 65.1)
- Terminal-Bench 4.0 (agentic coding): **57.9%** — highest in OpenAI's launch table (see Agent section for harness caveats)
- SWE-bench Verified: no verified public score found (swebench.com leaderboard renders client-side with no Astra row retrievable; OpenAI did not report it)
- SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- OpenAI MRCR v2 8-needle: **100.0%** @ 256K–512K and **96.3%** @ 512K–1M (OpenAI launch table; GPT-5.6 Sol 91.5%/73.8%)
- MLCR-AA (long-context medical-record reasoning, 25–64K-token records, AA): pass rate **41.7%** — #1, tied with Claude Sonnet 5.5 Max (GPT-6.1 Sol Max 38.3%); accuracy **95.6%** — #3 behind GPT-6.1 Terra 98.3% and GPT-6.1 Sol 96.7% (AA MLCR-AA page)

Speed / cost context (AA, max effort): output speed **78.2 t/s** (below tier median 80.5); time to first answer token **~270s** at max effort; cost per Intelligence Index task **$6.24**.

### Normalized scores (1–100)

- **Tool use: 92/100.** Vendor-max-effort SOTA across terminal, computer-use and browsing (Terminal-Bench 4.0 57.9%, OSWorld 2.0 72.6%, Agents' Last Exam 59.3%, ScreenSpot-Pro 92.7%, AutomationBench 41.4%, BrowseComp 91.5%) plus 99.79% indirect-injection robustness and the broadest hosted-tool set (async calls, mid-turn steering, MCP, skills), capped by the only retrievable independent agentic ranking — AA GDPval-AA v2.1 Elo 1584 at #43/308, below GPT-5.6 Sol (1618) and far below Claude Opus 5.5 (1866) — and no published Tau2/Tau3 score.
- **Reasoning: 94/100.** Frontier-saturating math and abstraction (FrontierMath Tier 4 97.6%, ARC-AGI-3 99.9% with an ARC Prize human-parity quote, ARC-AGI-2 95.0%, GPQA Diamond 96.0%) capped by HLE with tools at 57.2% well behind Claude Fable 5.1's 65.0%, AA HLE-Diamond reasoning 78.0% behind Gemini 4 Carbon's 79.6%, and AA Intelligence Index v5.0 of 57 ranking #4/58.
- **Context window: 93/100.** 1.05M-token window (922K max input / 128K max output) verified on the OpenAI model page, with near-perfect measured retrieval (MRCR v2 8-needle 100.0% @ 256K–512K, 96.3% @ 512K–1M) and AA MLCR-AA long-context reasoning #1 at 41.7%, capped by the imperfect top-band retrieval and windows larger than 1.05M existing on AA's context chart.
- **Multimodal: 80/100.** Text + image input with strong visual grounding (ScreenSpot-Pro 92.7%, BenchCAD 95.9%) but text-only output, no native audio/video/PDF input listed, and no retrievable MMMU-Pro value — above a text-only 15 yet short of audio/video-native multimodal flagships.
- **Coding: 92/100.** Tops OpenAI's own coding table (DeepSWE v1.1 74.1%, Terminal-Bench 4.0 57.9%, FrontierCode 1.1 Extended 64.5%, AA Coding Agent Index 67.0) but loses by a hair to Claude Fable 5 on both FrontierCode tracks (64.9%/53.5%) and to Claude Opus 5 on the AA Coding Index (68.1), sits below AA's independent Terminal-Bench 4.0 leader (Kimi K3.1 Pro 67.2%), and has no verified SWE-bench Verified, SWE-Pro or LiveCodeBench score.
- **Cost efficiency: 36/100.** $10/$50 per 1M tokens is ~5x AA's tier medians ($2/$10) at blended $7.70 per 1M with $6.24 per Index task, no free tier, and OpenAI's own cheaper sibling GPT-6.1 Sol ($2/$10) advertised as near-Astra performance; the 90% cache discount, 50% Batch/Flex rates and below-median verbosity keep it from scoring lower.
- **Overall Score: 90/100.** (92+94+93+80+92)/5 = 451/5 = 90.2 → 90 — best fit for the most demanding agentic, computer-use and long-horizon reasoning work where budget is secondary; value-driven or high-volume workloads should step down to GPT-6.1 Sol.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6 Astra: A new generation of intelligence (launch post with full benchmark tables)](https://openai.com/index/gpt-6-astra/)
  - [OpenAI API model page — gpt-6-astra (context, modalities, pricing, endpoints, tools)](https://platform.openai.com/docs/models/gpt-6-astra)
  - [OpenAI GPT-6 Astra System Card (deployment safety hub, published 2026-09-03)](https://deploymentsafety.openai.com/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra (Max) model page (Intelligence Index v5.0, speed, cost)](https://artificialanalysis.ai/models/gpt-6-astra)
  - [Artificial Analysis — GDPval-AA v2.1 leaderboard (full Elo table incl. GPT-6 Astra 1584)](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — MLCR-AA long-context benchmark (Astra 41.7% pass, #1)](https://artificialanalysis.ai/evaluations/mlcr-aa)
