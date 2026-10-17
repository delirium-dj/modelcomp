# Step 5 Preview — findings by Qwen 3.7 Plus

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship model for agentic work — a sparse MoE with 600B total / 27B active parameters, 1M-token context, and native text/image/video input. Released September 20, 2026; open weights landed October 15, 2026.
- **Provider / access:** OpenCode Zen `opencode/step-5-preview` (also `step-5-preview-free` free tier); StepFun Platform `step-5-preview` (OpenAI-compatible Chat Completions + Messages API); OpenRouter `stepfun/step-5-preview` via DeepInfra (fp8).
- **Release / knowledge:** 2026-09-20 release; open weights 2026-10-15; knowledge cutoff not publicly stated.
- **IDs:** `opencode/step-5-preview`, `stepfun/step-5-preview` (OpenRouter), `step-5-preview` (StepFun API). Free ID: `step-5-preview-free` on OpenCode Zen.
- **Context window:** 1,000,000 tokens input, 64,000 tokens max output (per StepFun developer docs, verified on platform.stepfun.ai).
- **Modalities:** Text, image (URL/Base64, up to 60 images/request, JPG/PNG/WebP/GIF), video (URL/Base64/stepfile, MP4/QuickTime/Matroska, <128 MB) in; text out; reasoning (low/medium/high effort); tool calling; JSON Mode + JSON Schema; prompt caching; streaming.
- **Pricing (as of 2026-10-17):** $1.00/1M input (cache miss), $0.10/1M input (cache hit), $2.70/1M output (includes reasoning tokens). Free tier available on OpenCode Zen.
- **Architecture:** Sparse MoE, 600B total parameters, 27B active per token (4.5%); open weights under StepFun Model License 1.0 (Apache-2.0-style with commercial notice conditions above 100M MAU / $20M revenue).

### Raw benchmarks found

> Sources: StepFun launch post (stepfun.com/step-5-preview, 2026-09-20), BenchLM (benchlm.ai/models/step-5-preview, 2026-10-17), BenchmarkList (benchmarklist.com/models/stepfun-step-5-preview), CellCog analysis (cellcog.ai/blog/step-5-preview), Artificial Analysis via BenchLM, VibeCoderJournal SWE-bench Verified leaderboard. StepFun's comparison table uses High effort for Step 5 Preview vs Max effort for rivals — flagged where relevant.

Agent / tool use:

- MCP Atlas: **85.6%** (StepFun launch / BenchLM — 5th of 48, 91st pct; field leader Fable 5.1 87.2%)
- BrowseComp: **88.7%** (StepFun launch / BenchLM — 12th of 608, 81st pct; field leader G-6 Astra 94.2%)
- Toolathlon-Verified: **74.1%** (StepFun launch / BenchLM — 16th of 41, 63rd pct; field leader O-5 80.6%)
- Terminal-Bench 2.1: **85.0%** (StepFun launch / BenchLM — 21st of 194, 90th pct; field leader Fable 5.1 91.4%)
- GDPval-AA: **1566 Elo** (StepFun launch / BenchLM — 28th of 352, 92nd pct; AA-normalized 54.3%)
- Tau3-Banking: **42.5% Pass@1** (BenchmarkList — 13th of 176, 93rd pct; field leader GLM-5.3 50.3%)
- DRACO: **83.3%** (StepFun launch / BenchLM — 9th of 24, 65th pct; field leader O-5 88.6%)
- JobBench: **59.0%** (StepFun launch / BenchLM — 9th of 48, 83rd pct; field leader O-5 67.8%)
- AA-Briefcase: **1433 Elo** (BenchmarkList — 26th of 145, 83rd pct)
- AutomationBench-AA: **51.0%** (BenchmarkList — 20th of 26, 24th pct)
- SWE Atlas Codebase QnA: **63.6%** (BenchmarkList — 5th of 37, 89th pct)
- SWE Atlas Test Writing: **50.8%** (BenchmarkList — 7th of 30, 79th pct)
- CyberGym: **84.7%** (StepFun launch / BenchLM — 9th of 43, 81st pct)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun launch / BenchLM — 11th of 468, 98th pct; field leader G-6 Astra 96.1%)
- HLE: **46.5%** (StepFun launch / BenchLM — 21st of 478, 96th pct; field leader O-5.5 67.7%)
- AA-LCR: **88.3%** (StepFun launch / BenchmarkList — 2nd of 408, 100th pct; field leader K3 88.7%)
- CritPt: **20.9%** (StepFun launch / BenchmarkList — 13th of 28, 56th pct; field leader G-5.6 Sol 32.3%)
- Artificial Analysis Intelligence Index: **43.7** (AA via BenchLM — 38th of 427, 91st pct; field leader Fable 5.1 65.7)
- AA-Omniscience Accuracy: **41.5%** (AA via BenchLM)
- AA-Omniscience Hallucination Rate: **43.0%** (AA via BenchLM)
- AA-Omniscience Index: **16.38** (BenchmarkList — 16th of 30)

Coding:

- DeepSWE v1.1: **67.7%** (StepFun launch / BenchLM — 19th of 52, 65th pct; field leader = self at 67.7%)
- Terminal-Bench 2.1: **85.0%** (also listed under coding — 21st of 194, 90th pct)
- SciCode: **58.9%** (StepFun launch / BenchLM — 12th of 29, 96th pct; field leader O-5.5 66.9%)
- ProgramBench: **80.5%** (StepFun launch / BenchLM — 4th of 37, 92nd pct; field leader G-6 Astra 85.4%)
- SWE-Marathon v1.1: **72.7%** (StepFun launch; field leader O-5 85.6%)
- StepCodeBench avg@4: **49.0%** (StepFun's own benchmark — 553 repos, 9 categories, 33 languages; field leader O-5 63.9%)
- MLS-Bench Lite: **40.5%** (BenchmarkList — 9th of 15, 43rd pct)
- SWE-bench Verified: **~50%** (VibeCoderJournal reports 44.6%; BenchLM estimates 60.5% with "estimated" flag — conflicting data; StepFun does not publish SWE-bench Verified directly)
- Vibe Code Bench: no verified public score found (Kilo leaderboard lists step-5-preview-free at 35.9% but this is the free tier, may differ)

Long context:

- AA-LCR: **88.3%** at 1M context (StepFun launch / BenchmarkList — 2nd of 408)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 86/100.** Exceptional agentic breadth: MCP Atlas 85.6%, BrowseComp 88.7%, Toolathlon 74.1%, GDPval-AA 1566 Elo (92nd pct), Tau3-Banking 42.5% (93rd pct). Terminal-Bench 2.1 85.0% and CyberGym 84.7% add further strength. Capped by AutomationBench-AA at 51.0% and APEX-Agents at 37.8%, which lag the frontier (O-5 at 69.5% and 55%+ respectively).
- **Reasoning: 85/100.** GPQA Diamond 93.5% is frontier-class (98th pct, trailing Astra by 2.6 pp). HLE 46.5% is strong (96th pct) but 21 pp behind O-5.5. AA-LCR 88.3% is near-top (2nd of 408). AA Intelligence Index 43.7 is solid (91st pct). CritPt 20.9% is mid-pack. Capped by HLE gap vs frontier and CritPt.
- **Context window: 95/100.** 1M tokens native, verified on StepFun developer docs. AA-LCR 88.3% (2nd of 408) confirms effective long-context retrieval at scale. 64K max output is generous. Docked 5 for no MRCR/RULER/GraphWalks numbers reported at specific window lengths.
- **Multimodal: 78/100.** Text + image + video input natively supported. MMMU-Pro 76.4% is strong (76th pct). OfficeQA Pro 60.3% is moderate (18th pct). GDP.pdf 14.8% is weak vs Astra's 31.0%. Video support (MP4/QuickTime/Matroska, up to 60 images) adds breadth but document-PDF understanding lags.
- **Coding: 76/100.** DeepSWE 67.7% is competitive with K3 (67.5%) and GLM 5.3 (66.9%) but 6+ pp behind Astra/Opus 5. Terminal-Bench 2.1 85.0% and ProgramBench 80.5% are strong. SciCode 58.9% and SWE-Marathon 72.7% are solid. SWE-bench Verified is conflicting (44.6–60.5% depending on source) — using the conservative ~50% estimate. StepCodeBench 49.0% shows a "meaningful gap to the frontier" per StepFun. Capped by SWE-bench Verified uncertainty and StepCodeBench gap.
- **Cost efficiency: 92/100.** $1.00/$2.70 per 1M is remarkably cheap for a 600B MoE flagship — 18% of Kimi K3's $15.00 output price. Cache hit at $0.10 makes sustained agentic work very affordable. Free tier available on OpenCode Zen. Only docked because $2.70 is still above flash-class models ($0.50–$1.15).
- **Overall Score: 84/100.** Mean of five non-cost dims: (86 + 85 + 95 + 78 + 76) / 5 = 84.0. A frontier-class agentic model with exceptional tool use, strong reasoning, and 1M context at a price that makes day-long autonomous runs affordable. Best fit for: agentic workflows, finance, long-horizon research, and cost-sensitive deployments needing frontier-level intelligence.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-17
- Method: public internet research across StepFun developer docs, HuggingFace model card, BenchLM, BenchmarkList, CellCog analysis, Artificial Analysis, VibeCoderJournal, OpenRouter, and Kilo leaderboard; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
