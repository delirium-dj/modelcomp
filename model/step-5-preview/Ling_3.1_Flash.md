# Step 5 Preview — findings by Ling 3.1 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship sparse-MoE model for long-horizon agentic work, software engineering, and professional knowledge work, with a stated finance strength. Not a variant of another entry; preview release ahead of open weights.
- **Provider / access:** StepFun platform (`step-5-preview`, OpenAI-compatible API; Chat Completions and Messages API, streaming, prompt caching); open-weight BF16 checkpoint on Hugging Face (`SHSLab/Step-5-Preview-BF16`).
- **Release / knowledge:** Released 2026-09-18 (API access 2026-09-20; open weights announced for 2026-10-15); knowledge cutoff not stated.
- **IDs:** `step-5-preview` (StepFun platform); HF `SHSLab/Step-5-Preview-BF16`. No OpenCode Zen Free ID found on the current Zen list — scored on StepFun paid pricing.
- **Context window:** 1,000,000 tokens total; max output 64K per StepFun platform docs (HF card: 32,768 default, configurable up to 131,072) — verified against platform.stepfun.ai and the HF model card.
- **Modalities:** text, image, and video in; text out; reasoning yes (low/medium/high, xhigh per HF card); tool calls yes (parallel, strict JSON schema); JSON mode and JSON Schema supported.
- **Pricing (as of 2026-10-10):** $1.00 / 1M input, $2.70 / 1M output (Artificial Analysis, StepFun API); blended 7:2:1 cache-hit ratio ≈ $0.54 / 1M; 87 tok/s (AA) / 99.8 tok/s vendor-reported; TTFT ~2.8–3.0s.
- **Architecture:** sparse MoE, 600B total / 27B active per token (~4.5% sparsity), 92 layers, sparse GQA with block-wise token merging; StepFun Community License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun launch page, high effort)
- Terminal-Bench v4: **33.3%** (StepFun; 2.6× Kimi K3's 12.6%)
- τ³-Banking: **42.5%** (StepFun comparison table)
- GDPval-AA v2.1: **1566** (StepFun page, AA as of 2026-09-20; HF card shows 1571)
- AA-Briefcase v1.1: **1433** (StepFun; HF card 1417)
- Toolathlon-Verified: **74.1%** (108 expert-authored tasks, ~20 turns average)
- MCP-Atlas: **85.6%** (1,000 tasks across 36 MCP servers, 220 tools)
- AutomationBench-AA: **51.0%**; AutomationBench (public): **44.0%**
- SWE Atlas Codebase QnA: **63.6%**; SWE-Atlas Test-writing: **50.8%**
- PresentBench: **76.8%**; JobBench: **59.0%**; Apex-Agents: **37.8%**; OfficeQA Pro: **60.3%**; Spreadsheet v2: **29.4%**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (198 PhD-level science MCQs; human expert avg 81%)
- HLE: **46.5%** (59.4% with tools, +12.9 pts)
- AA-LCR v1.1: **88.3%** (long-context reasoning; near-tied with Kimi K3's 88.7%)
- CritPt: **20.9%** (71 unpublished research-level physics challenges)
- Artificial Analysis Intelligence Index: **44** (v4.3.2, recalibrated 2026-09-07; #40/227)
- DRACO: **83.3%** (cross-domain deep research)
- BrowseComp: **88.7%** (1,266 hard web information retrieval questions)
- Agents' Last Exam (ALE-CLI): **29.5%** (Linux-only CLI subset, 40 industry subfields)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **67.7%** (SWE-agent harness, temp 1.0, top_p 0.95)
- ProgramBench: **80.5%** (rebuild programs from binary + docs; 200 tasks, 248K+ behavioral tests)
- SciCode: **58.9%** (above GPT-6 Astra 56.5% and Claude Opus 5 56.4%)
- RoadmapBench: **54.3%** (115 long-horizon coding tasks; median ~3,700 LOC changed)
- SWE-Marathon v1.1: **72.7%** (partial score; 20 realistic multi-hour tasks)
- StepCodeBench: **49.0%** (avg@4; StepFun internal, 553 repos, 9 task types, 33 languages)
- StepCode-Bench-Daily: **64.9%**; StepCode-Bench-General: **65.0%**
- CyberGym: **84.7%** (best in comparison set)
- MLS-Bench-Lite: **40.5%** (30-task subset, generalizable ML methods)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1 88.3% in the 1M-window class; no separate MRCR / RULER / GraphWalks retrieval percentage reported — no verified public score found for MRCR at 512K+.

Multimodal & document:

- MMMU-Pro: **76.0%**; GDP.pdf: **14.8%** (known weak spot)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 85.0% and MCP-Atlas 85.6% sit just under the frontier band (TB ~88%+), with Toolathlon 74.1% and τ³-Banking 42.5% mid-band; GDPval-AA 1566/1571 trails the 1750+ frontier reference.
- **Reasoning: 79/100.** GPQA 93.5% and HLE 46.5% are frontier-level and AA-LCR 88.3% is near the 95% top band, but CritPt 20.9% and an Intelligence Index of 44 (frontier 60+) cap the score.
- **Context window: 95/100.** Native 1M-token window (64K max output per platform docs; 131,072 configurable per HF card); no 512K+ retrieval percentage published, so 100 is not justified.
- **Multimodal: 80/100.** Text, image, and video input with text-only output lands in the 75–90 video-input band; no audio in and no non-text out.
- **Coding: 83/100.** TB 2.1 85.0% and SciCode 58.9% reach the frontier reference, ProgramBench 80.5% and SWE-Marathon 72.7% are strong, but DeepSWE 67.7% trails the 74%+ frontier.
- **Cost efficiency: 91/100.** $1.00/$2.70 per 1M (AA) is cheaper than the ~$1.25/$4.25 ≈ 88 reference point (blended ≈ $0.54/1M); very verbose output (160M tokens on the Index eval) inflates real-world bills.
- **Overall Score: 84/100.** Mean of Tool 85, Reasoning 79, Context 95, Multimodal 80, Coding 83 = 84.4 → 84. Best-fit: cheap 1M-context agentic/coding engine for finance and long-horizon SWE where vendor-reported benchmarks are acceptable; wait for independent replication before trusting frontier claims.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (StepFun launch page, platform.stepfun.ai docs, Hugging Face SHSLab/Step-5-Preview-BF16 card, Artificial Analysis model page, eesel and toolworthy reviews, all 2026-09); scores are normalized 1–100 interpretations, not official vendor scores. All Step 5 Preview benchmarks are vendor-reported; no independent technical report published yet.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
