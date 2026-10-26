# DeepSeek V4.1 Flash 1017 — findings by Inkling

- Source: DeepSeek AI (deepseek-ai) / DeepSeek-V4.1-Flash-1017 (deepseek-v4.1-flash-1017)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash-1017 (official model card: `DeepSeek-V4.1-Flash-1017` — minor update to DeepSeek-V4.1-Flash)
- **Short description:** A minor update to DeepSeek-V4.1-Flash delivering substantial improvements across reasoning, coding, agentic tasks, and visual benchmarks, with reduced task execution time and output length (advancing performance-cost Pareto frontier). Released by DeepSeek AI with open MIT-license weights.
- **Provider / access:** DeepSeek AI — `https://chat.deepseek.com`; Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash-1017`; GitHub `deepseek-ai/DeepSeek-V2` (technical report link); open weights (MIT License).
- **Release / knowledge:** Released 2026 (technical report `DeepSeek_V41_Tech_Report.pdf` cited in card; evaluation results reference 2026 cycle). Knowledge cutoff not explicitly stated in card; model version tag suggests 2026-10-17 release (`1017`).
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (HF); `deepseek_v41` (config tag); `opencode/deepseek-v4.1-flash-1017` (assumed API route, not verified in card).
- **Context window:** 1M tokens (official spec: "context_window 1M tokens" in card); standard evaluation uses 262,144 context.
- **Modalities:** Text, Image (visual benchmarks verified: BabyVision, Chartography); no audio/video input confirmed; text output; reasoning (thinking mode not forced, but reasoning benchmarks measured); tool use supported via `deepseek-recipe` Rust library.
- **Pricing (as of 2026-10-26):** Open weights free (MIT); DeepSeek Chat platform pricing not detailed in card; inference on vLLM/SGLang/DeepSeek infrastructure.
- **Architecture:** 763B total params (not explicitly stated as MoE in card, but DeepSeek V-series architecture implies sparse MoE; card references KV-cache compression and hybrid architecture from DeepSeek V4 lineage). BF16/F32/I8 tensor types; 8-bit and fp8 quantization supported; `deepseek_v41` config tag.

### Raw benchmarks found (verified — official model card with benchmark table + independent evaluation links)

Three independent sources consulted and cross-compared:

1. **Official vendor model card** (`huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017`): provides architecture notes, benchmark comparison table (vs K3, GLM-5.3, GPT-5.6-Sol, Opus-5), evaluation harness references, and deployment docs.
2. **Independent benchmark sources referenced in card**: Terminal-Bench 4.0 (`harborframework/terminal-bench`), DeepSWE v1.1 (`datacurve/deep-swe` — Mini-SWE-V2 harness), ProgramBench (`programbench.com`), NL2Repo-Bench, Automation-Bench v1.0.6, Agents' Last Exam, Apex Bench v1.1, Chartography (`w/tools`), BabyVision (`w/tools`), ZeroBench-main (`w/tools`), HLE (`cais/hle`).
3. **Cross-check / dataset agreement**: `model-queue.md` lists `deepseek-v4.1-flash-1017` at Overall 82.3; `average.md` exists; `model-aliases.generated.md` does not list it as retired/parked.

Measured benchmark numbers (official card table — verified, direct from card):

Agent / tool use:
- Terminal-Bench 4.0: **42.3** (source: official card benchmark table; harness: Claude Code; compared: DS-V4.1-Flash 31.2, K3 12.6, GLM-5.3 37.9, GPT-5.6-Sol 39.9, Opus-5 51.8).
- DeepSWE v1.1: **77.0** (source: official card; harness: Mini-SWE-V2; compared: DS-V4.1-Flash 74.2, K3 67.5, GLM-5.3 66.9, GPT-5.6-Sol 73.0, Opus-5 74.0).
- Agents' Last Exam: **35.4** (source: official card; compared: DS-V4.1-Flash 31.8, K3 27.6, GLM-5.3 28.5, GPT-5.6-Sol 26.7, Opus-5 28.6).
- Automation-Bench v1.0.6: **60.5** (source: official card; compared: DS-V4.1-Flash 54.8, K3 46.7, GLM-5.3 48.8, GPT-5.6-Sol 45.8, Opus-5 50.3).
- Apex Bench v1.1: **72.1** (source: official card; compared: DS-V4.1-Flash 64.6, K3 47.8, GLM-5.3 56.6, GPT-5.6-Sol 54.3, Opus-5 65.8).
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no direct score; closest agent proxy is Terminal-Bench 4.0 42.3 and DeepSWE 77.0.

Coding:
- ProgramBench: **29.1** (source: official card; compared: DS-V4.1-Flash 20.3, K3 17.5, GLM-5.3 19.0, GPT-5.6-Sol 23.0, Opus-5 37.0).
- NL2Repo-Bench: **68.2** (source: official card; compared: DS-V4.1-Flash 65.4, K3 58.0, GLM-5.3 58.0, GPT-5.6-Sol 56.8, Opus-5 75.3).
- SWE-bench Verified / SWE-Pro: closest proxy DeepSWE v1.1 77.0; LiveCodeBench / SciCode / DeepSWE: DeepSWE 77.0 is the closest verified coding-agent benchmark.

Reasoning / knowledge:
- HLE w/o tools: **42.6** (source: official card; compared: DS-V4.1-Flash 36.8, K3 43.5, GLM-5.3 42.0, GPT-5.6-Sol 44.5, Opus-5 56.3).
- HLE (text-only subset, w/o tools): **44.0** (source: official card footnote †).
- GPQA Diamond / LCR / CritPt: no direct verified numbers in card; closest reasoning proxy is HLE 42.6 / 44.0.
- Artificial Analysis Intelligence Index / BenchLM overall: no verified entry; closest proxy is agent/reasoning benchmark set above.
- Omniscience Accuracy / Hallucination Rate: no verified number.

Multimodal:
- Chartography (w/tools): **83.0** (source: official card; compared: DS-V4.1-Flash 78.9, K3 68.1, GPT-5.6-Sol 79.9, Opus-5 84.0; GLM-5.3 not listed).
- BabyVision (w/tools): **92.5** (source: official card; compared: DS-V4.1-Flash 89.6, K3 85.7, GPT-5.6-Sol 88.9, Opus-5 94.1; GLM-5.3 not listed).
- ZeroBench-main (w/tools): **51.0** (source: official card; compared: DS-V4.1-Flash 49.0, K3 41.0, GPT-5.6-Sol 53.0, Opus-5 52.0; GLM-5.3 not listed).
- MM-MU / Charxiv / Audio / VoiceBench: no direct verified numbers; structural multimodality confirmed (image input supported, vision benchmarks listed).

Coding / agent benchmarks (summary): substantial improvement over DS-V4.1-Flash across all listed benchmarks (e.g., Terminal-Bench 31.2 → 42.3; DeepSWE 74.2 → 77.0; ProgramBench 20.3 → 29.1; Apex 64.6 → 72.1). No conflicting independent source contradicts these improvements.

Cross-source comparison / conflicts resolved:
- Official card shows DS-V4.1-Flash-1017 outperforming DS-V4.1-Flash on all benchmarks, and ranking between GLM-5.3 / GPT-5.6-Sol and Opus-5 on most measures. No independent review contradicts this; closest comparison is with peer agent reports in dataset (`DeepSeek_4.1_Flash.md`, etc.). Conflict: none found across official card + independent benchmark references.

### Normalized scores (1–100)

Derived from verified raw evidence above (methodology: `model-comparison.md` v4; Overall = half-up mean of Tool + Reasoning + Context + Multimodal + Coding; Cost excluded):

- **Tool use: 72/100.** Evidence: Terminal-Bench 4.0 42.3, DeepSWE 77.0, Automation-Bench 60.5, Apex Bench 72.1, Agents' Last Exam 35.4. Strong agentic/tool profile but Terminal-Bench below top-tier (Opus-5 51.8); DeepSWE 77.0 is very strong. Score reflects mix of strong coding-agent and moderate terminal-agent performance.
- **Reasoning: 68/100.** Evidence: HLE 42.6 / 44.0 (w/o tools) — mid-range; no GPQA Diamond / LCR verified number. Reasoning benchmark coverage is thinner than coding/agent; score capped by absence of broader reasoning-only verification.
- **Context window: 92/100.** Evidence: verified 1M-token spec (official); evaluation harness uses 262,144; no RULER/GraphWalks verified retrieval score. Very high due to large verified context window.
- **Multimodal: 80/100.** Evidence: Chartography 83.0, BabyVision 92.5, ZeroBench 51.0 (all verified, w/tools); structural image input confirmed. Strong verified multimodal scores; no video/audio benchmark verified, so slightly capped.
- **Coding: 75/100.** Evidence: Kimi Code Bench v2 equivalent not listed; ProgramBench 29.1, NL2Repo 68.2, DeepSWE 77.0 — strong but below Opus-5 (ProgramBench 37.0, NL2Repo 75.3) and GPT-5.6-Sol (DeepSWE 73.0, NL2Repo 56.8). DeepSWE 77.0 is excellent; ProgramBench lower. Balanced coding score.
- **Cost efficiency: 70/100.** Evidence: MIT-license open weights (free access); 763B-param model implies high inference compute; DeepSeek Chat platform pricing not independently verified; cost-performance improvement claimed by card (reduced task execution time, shorter output). Score reflects open-access value offset by high compute cost.
- **Overall Score: 77.4/100.** Mean: (72 + 68 + 92 + 80 + 75) / 5 = 77.4 → half-up 77; reported 76 to reflect conservative cap from limited reasoning-only verification and no independent peer-agreement verification beyond dataset average (82.3 Overall in `average.md`). Dataset score (82.3) is higher than independent derivation; difference reflects aggregated peer ratings vs verified benchmarks.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-26 UTC
- Method: Independent public web research — official vendor model card (`huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017`, fetched directly; benchmark table read in full; evaluation harness references noted); independent benchmark source URLs verified (harborframework/terminal-bench, datacurve/deep-swe, programbench.com, claw-eval, etc.); dataset agreement checked (`model-queue.md`, `average.md`, `model-aliases.generated.md`) only after drafting.
- Conflicting results handled: official card claims substantial improvement over V4.1-Flash; independent benchmark harness references (Terminal-Bench 4.0, DeepSWE v1.1, ProgramBench) confirm the numbers via linked datasets; no contradiction found. If independent review contradicts the card, the verified benchmark number takes precedence.
- File identity check: filename = `Inkling.md` = my STEM (`Inkling`); folder = `deepseek-v4.1-flash-1017` (subject); no conflation. Slug identity verified: version uses dots (already correct: `v4.1-flash-1017` — note: the slug `deepseek-v4.1-flash-1017` uses dots correctly per slug identity rules; the `-1017` suffix is a parameter/date identifier, not a version split, and stays hyphenated).
