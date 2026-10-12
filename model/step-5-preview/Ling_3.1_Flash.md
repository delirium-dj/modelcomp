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
- **Pricing (as of 2026-10-10):** $1.00 / 1M input, $2.70 / 1M output (Artificial Analysis, StepFun API; 95% cache-discount claim); blended 7:2:1 cache-hit ratio ≈ $0.54 / 1M; $0.72 per AA Index task ($924.68 total; ~164M output tokens vs ~92M median — very verbose); 86.8–99.8 tok/s, TTFT 2.8–2.96s; on OpenRouter since 2026-10-08 (`stepfun/step-5-preview`).
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
- AA agentic comparison (AA, independent): trails Qwen3.8 Max and GLM-5.3 on all four agentic rows — GDPval-AA **1566** (vs 1668/1646), Terminal-Bench 4.0 **33%** (vs 39%/42%), AA-Briefcase **1432** (vs 1640/1525), AutomationBench-AA **51%** (vs 56%/62%)
- AA-Omniscience: accuracy **42%** (attempts 68% of questions), hallucination rate **43%** of attempts → AA-Omniscience Index **16** (vs GLM-5.3's 14 and Kimi K3's 48% accuracy) — weak factual grounding
- 24-hour agent experiments (StepFun): tuned an H100 kernel to **508 TFLOPS** (vs Claude Opus 5's 493); raised Qwen3-30B-A3B on AIME24 from 53.3% to **60%** via automated post-training
- Cold Iron (thinking-off arm, `reasoning_effort=low`, OpenRouter): tool_calling **2/2**, writing **5/5**
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (198 PhD-level science MCQs; human expert avg 81%)
- HLE: **46.5%** (59.4% with tools, +12.9 pts)
- AA-LCR v1.1: **88.3%** (long-context reasoning; near-tied with Kimi K3's 88.7%)
- CritPt: **20.9%** (71 unpublished research-level physics challenges)
- Quantslant 13-task Polish suite (2026-10-09, blind LLM-judge calibrated): **65.4** — parity with GLM-5.3 (64.8), behind Kimi K3 (78.5), DeepSeek V4.1 Flash (72.9), Qwen3.8 Max (76.8), GPT-6 Luna (80.4), Opus 5.5 (91.3); clean 46/46 basic knowledge; creative fiction 5.0/10, plain-language 5.3/10
- **Empty-completion quirk (Quantslant):** at low effort the model burned its full 6,000–8,000-token budget inside the hidden reasoning chain and returned **zero visible text** on 3 of 9 generation tasks; a 16,000-token cap resolves it (4,902 reasoning tokens, then 19/22 proofreading fixes, 3 orthographic misses)
- Cold Iron strict_v01 (thinking-off, 2026-10-10): **133/157 (84.7%)**, 0 errors, 31.4 min — reasoning 29/30 (96.7%), math 26/30 (86.7%), prose 28/30 (93.3%), instruction 26/30 (86.7%); `reasoning.effort=none` returns HTTP 400 (reasoning is mandatory; `enable_thinking=false` alone still thinks)
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
- Kingbench hands-on (MindStudio/Elma, OpenCode agent, 2026-10-08): **67/80 (83.75%)** across 8 tasks — archery game 9.5/10 (wind, moving targets, timer, replaying leaderboard), local Gemma 2B LoRA fine-tune + serving web app 9.5/10 (factual errors in the generated training data), elevator simulation 8/10, 3D contact-lens case 8/10, folding table 8/10 (slider ran backward), counting 10/10, 3D wristwatch 6/10; between GLM 5.3 Flash (78.75%) and GLM 5.3 (91.25%), above MIMO v2.6 Pro/Flash (69.38%/72.50%) — historical comparisons, not simultaneous runs
- Cold Iron coding column: **17/30 (56.7%)** — easy 2/2, medium 3/3, hard 4/5, expert 6/8, **frontier 2/12**: 12 of 13 coding fails are SyntaxError (10 unterminated string literals, 2 invalid decimal literals) under the suite's 4,096-token cap (frontier items consumed 4,276–4,661 tokens in 27–41s); the suite cautions this is a budget artifact, not a Python inability
- SWE-Marathon v1.1 72.7% partial trails Kimi K3 (84.4%) and Claude Opus 5 (85.6%)
- CyberGym: **84.7%** (best in comparison set)
- MLS-Bench-Lite: **40.5%** (30-task subset, generalizable ML methods)
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1 88.3% in the 1M-window class; no separate MRCR / RULER / GraphWalks retrieval percentage reported — no verified public score found for MRCR at 512K+.

Multimodal & document:

- MMMU-Pro: **76.0%** (trails Kimi K3 81.0%, Claude Opus 5 85.0%, GPT-6 Astra 87.0%); GDP.pdf: **14.8%** (known weak spot); video input supported (platform docs: screenshots, charts and video understanding examples)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 85.0% and MCP-Atlas 85.6% sit just under the frontier band (TB ~88%+), with Toolathlon 74.1% and τ³-Banking 42.5% mid-band; GDPval-AA 1566/1571 trails the 1750+ frontier reference. AA's independent agentic comparison is softer: Step 5 trails Qwen3.8 Max and GLM-5.3 on all four agentic rows (GDPval-AA, TB 4.0, AA-Briefcase, AutomationBench-AA), and AA-Omniscience Index 16 (42% accuracy, 43% hallucination) flags weak factual grounding.
- **Reasoning: 79/100.** GPQA 93.5% and HLE 46.5% are frontier-level and AA-LCR 88.3% is near the 95% top band, but CritPt 20.9%, an Intelligence Index of 44 (frontier 60+), the Quantslant Polish-suite parity (65.4 ≈ GLM-5.3) and the low-effort empty-completion quirk (zero visible text when the reasoning chain eats the token budget) cap the score.
- **Context window: 95/100.** Native 1M-token window (64K max output per platform docs; 131,072 configurable per HF card); no 512K+ retrieval percentage published, so 100 is not justified.
- **Multimodal: 80/100.** Text, image, and video input with text-only output lands in the 75–90 video-input band; no audio in and no non-text out.
- **Coding: 83/100.** TB 2.1 85.0% and SciCode 58.9% reach the frontier reference, ProgramBench 80.5% and the Kingbench hands-on (83.75%, playable game + local fine-tune pipeline) are strong, but DeepSWE 67.7% trails the 74%+ frontier, SWE-Marathon 72.7% trails Kimi K3 (84.4%), and Cold Iron's frontier column (2/12 under a 4,096-token cap, 12 SyntaxErrors) marks the hard-coding floor.
- **Cost efficiency: 91/100.** $1.00/$2.70 per 1M (AA) is cheaper than the ~$1.25/$4.25 ≈ 88 reference point (blended ≈ $0.54/1M), and $0.72 per AA Index task undercuts Kimi K3 ($2.00) and GLM-5.3 ($2.01) ~2.8×; very verbose output (~164M tokens on the Index eval vs ~92M median) inflates real-world bills (Quantslant: $0.31 for 13 short tasks vs GLM-5.3's $0.03).
- **Overall Score: 84/100.** Mean of Tool 85, Reasoning 79, Context 95, Multimodal 80, Coding 83 = 84.4 → 84. Best-fit: cheap 1M-context agentic/coding engine for finance and long-horizon SWE where vendor-reported benchmarks are acceptable; wait for independent replication before trusting frontier claims.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 85 / Reasoning 79 / Context 95 / Multimodal 80 / Coding 83 / Cost 91, Overall stays 84. The pass added AlphaSignal's AA deep dive, Quantslant's 13-task Polish hands-on, MindStudio/Elma's Kingbench agent runs, SMF Clearinghouse's Cold Iron suite and the full HF-card methodology:

- **New independent rows:** AA agentic comparison — trails Qwen3.8 Max and GLM-5.3 on all four agentic rows (GDPval-AA 1566 vs 1668/1646; TB 4.0 33% vs 39%/42%; AA-Briefcase 1432 vs 1640/1525; AutomationBench-AA 51% vs 56%/62%); **AA-Omniscience 42% accuracy / 43% hallucination → Index 16** (the file's "no verified public score" is now filled); AA cost-per-task $0.72 ($924.68 for the full Index, ~164M output tokens vs ~92M median); Cold Iron strict_v01 133/157 (84.7%, 0 errors) with reasoning 29/30 and tool_calling 2/2.
- **Quantslant Polish hands-on (2026-10-09, blind LLM-judge calibrated):** 65.4 across 13 tasks — parity with GLM-5.3 (64.8), behind Kimi K3 (78.5), DeepSeek V4.1 Flash (72.9), Qwen3.8 Max (76.8); clean 46/46 basic knowledge; short-form solid (email 8.5/10, summary/translation 8.0/10), creative fiction 5.0/10.
- **Empty-completion quirk:** at low effort the model burned its full 6,000–8,000-token budget inside the hidden reasoning chain and returned zero visible text on 3 of 9 generation tasks (product description, both proofreading drills); a 16,000-token cap resolves it (4,902 reasoning tokens, then 19/22 proofreading fixes with 3 orthographic misses). Architectural reasoning-budget behavior, not a comprehension failure.
- **Kingbench hands-on (MindStudio/Elma, OpenCode agent):** 67/80 (83.75%) across 8 tasks — archery game 9.5/10 (wind, moving targets, timer, replaying leaderboard) and a local Gemma 2B LoRA fine-tune + serving web app 9.5/10 (factual errors in the generated training data) stand out; elevator sim, 3D contact-lens case and folding table 8/10 (slider ran backward), counting 10/10, wristwatch 6/10; between GLM 5.3 Flash (78.75%) and GLM 5.3 (91.25%) on the historical chart — not simultaneous runs.
- **Cold Iron coding floor:** 17/30 (56.7%) — easy 2/2, medium 3/3, hard 4/5, expert 6/8, frontier 2/12; 12 of 13 fails are SyntaxError (10 unterminated string literals) under the suite's 4,096-token cap (frontier items consumed 4,276–4,661 tokens in 27–41s each) — a budget artifact per the suite, not a Python inability; `reasoning.effort=none` returns HTTP 400 (reasoning is mandatory; `enable_thinking=false` alone still thinks).
- **24-hour agent experiments (StepFun):** tuned an H100 kernel to 508 TFLOPS (vs Claude Opus 5's 493); raised Qwen3-30B-A3B on AIME24 from 53.3% to 60% via automated post-training.
- **Specs/status:** on OpenRouter since 2026-10-08 (`stepfun/step-5-preview`); 86.8–99.8 tok/s, TTFT 2.8–2.96s; 95% cache-discount claim; ~1.2 TB in BF16 for the 600B weights; open weights still scheduled for 2026-10-15 (AA tracks the preview as proprietary until they land; Quantslant notes it would tie for 3rd among open models behind MiMo-V2.6-Pro 46 and GLM-5.3 45, level with Kimi K3 44).
- Still open: independent DeepSWE/TB 2.1/MCP-Atlas reproduction (all vendor-reported), the open-weights license, SWE-bench Verified / LiveCodeBench / Vibe Code Bench rows, and MRCR/RULER/GraphWalks at depth.
- Score impact: none — the AA agentic comparison and AA-Omniscience Index 16 are softer than the vendor table but measure different suites; the Kingbench 83.75% hands-on and Cold Iron's 84.7% corroborate the mid-80s Coding/Reasoning levels; the empty-completion quirk and frontier-coding floor are documented caps, already reflected in Reasoning 79 / Coding 83; Overall stays (85+79+95+80+83)/5 = 84.4 → 84.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10 (updated 2026-10-11)
- Method: public internet research (StepFun launch page, platform.stepfun.ai docs, Hugging Face SHSLab/Step-5-Preview-BF16 card, Artificial Analysis, AlphaSignal, Quantslant, MindStudio, Elma, SMF Clearinghouse, VEGA, Cocoloop, eesel, Stack Futures); scores are normalized 1–100 interpretations, not official vendor scores. All Step 5 Preview benchmarks are vendor-reported; no independent technical report published yet.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
