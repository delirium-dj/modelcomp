# GLM 5.3 FlashX — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu (curated id `opencode/glm-5.3-flashx`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX (Z.ai model code `glm-5.3-flashx`)
- **Short description:** Z.ai's **high-speed serving tier** for GLM-5.3-Flash — the same 320 B-total / 18 B-active multimodal MoE, re-served for up to 200 output tokens/s at ~2.5× the Flash price. **Variant flag:** not a new intelligence checkpoint. Z.ai and secondary coverage both state FlashX inherits the `glm-5.3-flash` weights with no capability change, so every task-quality figure below is an *inherited* GLM-5.3-Flash number; no FlashX-specific benchmark suite was published. Also related: GLM-5.3-Flash ran its pre-release anonymous window as **`ox-alpha`** on OpenCode/OpenRouter, i.e. the same weights behind `model/ox_alpha/`.
- **Provider / access:** Z.ai bigmodel API (`glm-5.3-flashx`, Chat Completions, OpenAI-compatible), also reseller routes (e.g. CometAPI). Hosted-only: the tier itself has no downloadable weights, but the underlying GLM-5.3-Flash checkpoint is open (`zai-org/GLM-5.3-Flash`, MIT). Not yet on the GLM Coding Plan (Flash is).
- **Release / knowledge:** FlashX live 2026-09-18; GLM-5.3-Flash released 2026-08 (pre-trained on a 30 T-token multimodal corpus). No knowledge-cutoff figure disclosed on the pages I could read.
- **IDs:** `glm-5.3-flashx` (Z.ai), `glm-5.3-flash` (capability base / weights), OpenCode curated id `opencode/glm-5.3-flashx`.
- **Context window:** 1,048,576 input tokens; 128,072 (128 K) max output — Z.ai model documentation card.
- **Modalities:** video / image / text / file in; text out. Thinking is always on (`thinking.type` supports only `enabled`), `reasoning_effort` low / high / max; function calling, context caching, structured JSON output, streaming tool calls. No native audio-input or image-generation endpoint on this ID (the docs' speaker-attribution workflow works over the video track).
- **Pricing (as of 2026-10-07):** $0.37 in / $1.25 out per 1M tokens, cached input $0.075 with limited-time free storage — Z.ai pricing page, exactly matching this folder's curated `meta.json`. GLM-5.3-Flash on the same page is $0.15 / $0.50 / $0.03 cached. **Conflict:** the CometAPI explainer lists "$60 per 1M in and $60 per 1M out" with an "official reference price" of $75/$75 — that is reseller credit-pack pricing, irreconcilable with Z.ai's own table, and I did not use it for scoring.
- **Architecture:** ~320 B total / 18 B active MoE, 45 layers, first open-weights frontier model with hybrid sparse + linear attention plus Manifold-Constrained Hyper-Connections (mHC) and `IndexPool` (4 indexer key vectors weighted-pooled into 1) — cuts attention compute 3.0× and KV cache 4.4× versus GLM-5.3. Served on >100 K domestic accelerators with an Encode–Prefill–Decode disaggregated stack (W8A8, hybrid INT8/FP8/BF16 cache quantization, ReplaySSM, Layer Split).
- **Serving note:** "up to 200 tokens/s" is a provider-reported *peak*, not a sustained or independently verified rate; no baseline multiplier was officially published.

### Raw benchmarks found

No FlashX-specific suite exists; rows below are Z.ai's GLM-5.3-Flash results as indexed by BenchLM `glm-5-3-flash` (overall **57.37/100, #56 of 887**, 38 of 623 benchmarks covered, coverage flagged partial/conservative; last updated 2026-10-07), Artificial Analysis, Vals AI and the Z.ai launch post.

Agent / tool use:

- Terminal-Bench 2.1: **84.3 %** (vendor, corroborated by AA) / **62.9 %** (Vals AI, standardized harness)
- Terminal-Bench 4.0: **32.8 %** (AA) — the visible soft spot on the newer harness
- GDPval-AA: **1773 Elo**; AA Briefcase **1454**
- Toolathlon-Verified: **78.4 %**; τ³-Banking (AA): **47.2 %**; ITBench-AA **51.2 %**; EnterpriseOps-Gym-AA **33.2 %**
- AutomationBench: **48.8 %** (vendor) / **60.4 %** (AA); Agents' Last Exam: **26.3 %**; GDP.pdf **15.4 %**; HLE w/ tools: **55.3 %**
- Claw-Eval: **no verified public score found for this ID** (recorded N/A, small penalty per methodology)

Reasoning / knowledge:

- GPQA Diamond: **91.2 %** (AA) / **86.4 %** (Vals); MMLU-Pro: **86.1 %** (Vals)
- HLE: **39.9 %** (AA); CritPt: **15.4 %** (AA) — unusually strong for the class
- AA-LCR: **80.0 %**; MLCR-AA: **51.1 %**
- AA-Omniscience index: **7.5** (positive, i.e. materially better-calibrated than the −9 to −16 legacy/near-frontier cases in this registry)
- **Intelligence Index conflict:** BenchLM lists the AA Intelligence Index at **41.8** for this model, while the Z.ai launch post claims **57 on AA Intelligence Index v4.1.1** at $0.045/task (discounted). Different index versions/harnesses; I scored against the mid-40s figure, which is the independent-aggregator reading.

Coding:

- SWE-bench (Vals): **92.0 %**; LiveCodeBench (Vals): **80.5 %**
- DeepSWE: **63.4 %** (vs GLM-5.2 46.2 %); AA-SciCode: **51.6 %**; NL2Repo: **56.3 %**
- FrontierSWE v2: **18.1 %**; OpenHarmony Bench: **57.3 %**
- Z.ai Code Bench v1.0 (Claude Code 2.1.207, max effort): **29.0** vs Claude Opus 4.8 **29.5** — vendor harness, near-parity claim, not independently reproduced

Multimodal:

- MMVU: **80.5 %**; CharXiv: **89.4 %**; Chartography (with tools): **78.0 %**; OfficeQA Pro: **62.4 %**; BabyVision: **53.4 %**; Design Arena (website) Elo **1278** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1773 is at the methodology's frontier anchor, Toolathlon 78.4 % is excellent and τ³-Banking 47.2 % sits just under the ~50 % frontier reference, but Terminal-Bench 2.1 84.3 % (and Vals' 62.9 % on a standardized harness) plus Terminal-Bench 4.0 32.8 % and EnterpriseOps 33.2 % show the tier still falls short of the 88 %+ / 90–100 anchor band; missing Claw-Eval is a further slight penalty. All figures inherited from GLM-5.3-Flash.
- **Reasoning: 84/100.** AA-GPQA 91.2 % is frontier and CritPt 15.4 % is among the best in this registry, but HLE 39.9 % is right at the 40 % frontier threshold and the independent Intelligence Index (41.8) is mid-band, well below the 60+ needed for 90–100. Positive Omniscience index 7.5 helps.
- **Context window: 96/100.** A verified 1,048,576-token window with 128 K output and strong long-context measured results (AA-LCR 80.0 %, MLCR-AA 51.1 %) qualifies for the ≥1 M tier (95–100); it is not 100 because no ≥98 % MRCR/RULER retrieval figure at 512 K+ exists for this ID.
- **Multimodal: 88/100.** Image + video + file input with MMVU 80.5 %, CharXiv 89.4 % and tool-assisted Chartography 78.0 % places it at the top of the "video/PDF in" band (75–90); capped there — not 90+ — because there is no native audio input and output is text-only.
- **Coding: 85/100.** SWE-bench 92.0 % (Vals) and LiveCodeBench 80.5 % are frontier-class, and vendor SWE/DeepSWE trends are strong, but three of the four methodology anchors are missed: DeepSWE 63.4 % (< 74 %), SciCode 51.6 % (< 55 %), Terminal-Bench 2.1 84.3 % (just under 85 %), with FrontierSWE v2 18.1 % showing the long-horizon ceiling.
- **Cost efficiency: 93/100.** $0.37 in / $1.25 out with $0.075 cached input lands between the anchors (~$0.10/$0.20 ≈ 97–99 and ~$0.60/$2.20 ≈ 92) — about 2.5× the price of `glm-5.3-flash`, which scores identically, so you are paying purely for latency. The MIT open weights plus the vendor's $0.045-per-Index-task Flash figure keep it high; the FlashX speed premium is the deduction.
- **Overall Score: 88/100.** Mean of the five quality dimensions (89 + 84 + 96 + 88 + 85) / 5 = 88.4 → 88; Cost excluded per `RULES.md`. Best fit: latency-sensitive interactive coding/computer-use agents that need 1 M context and visual feedback loops; if throughput does not matter, `glm-5.3-flash` is the same weights at 40 % of the price.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Z.ai model + pricing documentation, Z.ai GLM-5.3-Flash launch post, BenchLM `glm-5-3-flash`, Artificial Analysis evaluation leaderboards via BenchLM, Vals AI, OpenCode Data `zhipuai/glm-5-3-flashx`, CometAPI/IT Home secondary coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
