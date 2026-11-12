# GLM-5.3-Flash — findings by Qwen 4 Max

- Source: Z.AI (Zhipu)/glm-5.3-flash
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's August 26, 2026 "Frontier Intelligence, Flash Cost" release — the **first natively multimodal GLM-5 model**: 320B total / **18B active** MoE with a new hybrid sparse + linear attention architecture and Manifold-Constrained Hyper-Connections (mHC), trained on a 30T-token multimodal corpus. MIT-licensed, approaches Claude Opus 4.8 on coding/agent benchmarks at ~1/10 the price (vendor claim); launch claim AA Index v4.1.1 **57 at $0.045/task**. Current independent reality: AA v5.0.1 index **28** (#10/27 open class), SWE-V 92.0 (Vals), GDPval-AA 1,773 — but very slow per task (47.3 min) with max-effort thinking default.
- **Provider / access:** Z.ai API Platform (`glm-5.3-flash`), OpenRouter ($0.0399/$0.0784 — far below list, cache read $0.03); open weights `zai-org/GLM-5.3-Flash` (HF), **MIT**; SGLang/vLLM/TokenSpeed/Transformers/KTransformers/Unsloth recipes — 18B active makes local deployment practical (128 GB Mac per community coverage).
- **Release / knowledge:** Released 2026-08-26 (blog date; AA says August 2026). Knowledge cutoff not stated in sources read. `reasoning_effort`: low / high / **max (default)**; `clear_thinking` defaults false (set true for chat).
- **IDs:** `glm-5.3-flash`; HF `zai-org/GLM-5.3-Flash`; siblings GLM-5.3 (flagship, Aug 14), GLM-5.3-FlashX (separate SKU); predecessor GLM-4.7-Flash. Technical report: arXiv 2602.15763 (GLM-5 family).
- **Context window:** **1M tokens** (AA + HF); hybrid linear attention designed to cut long-context serving cost; NL2Repo evaluated under full 1M. No published MRCR/LCR retrieval rows; no long-context surcharge documented; 80% cache discount.
- **Modalities:** **Native text + image in**, text out (HF pipeline `image-text-to-text`, AA agrees). CharXiv 89.4, MMVU 80.5, BabyVision 53.4. No video/audio.
- **Pricing (as of 2026-11-12):** **$0.15 in / $0.50 out per 1M** (AA list), 80% cache discount; OpenRouter $0.0399/$0.0784. AA cost per Intelligence Index task **$0.58**; launch promo claimed $0.045/task (discounted, v4.1.1 era — labelled).
- **Architecture:** MoE **320B total / 18B active**; newly trained base (not a GLM-5.2 derivative); first GLM with **hybrid sparse + linear attention**; mHC residual scaling; 30T-token multimodal pre-training; thinking-budget control with preserved thinking history.

### Raw benchmarks found

Vendor-reported (z.ai launch post via BenchLM attribution + HF card footnotes; harnesses: Claude Code 2.1.207 for TB2.1, mini-swe-agent for DeepSWE, official Toolathlon service):

- Agent: TB2.1 **84.3**, Toolathlon-V **78.4**, AutomationBench v1.0.6 **48.8**, ALE **26.3**, GDPval-AA v2 **1,773 Elo** (AA-run, vendor-cited), HLE w-tools **55.3** (300K ctx management, GPT-5.6-luna judge)
- Coding: DeepSWE **63.4** (400K ctx, 6h timeout), NL2Repo **56.3** (1M ctx, anti-hacking guards)
- Vision: CharXiv **89.4**, Chartography tools 78.0, MMVU 80.5, BabyVision 53.4, OfficeQA Pro 62.4

Independent runs:

- AA (v5.0.1): Intelligence Index **28** (#10/27 open-weights class, median 23) vs launch claim **57 on v4.1.1** — different versions, both labelled, never compared; AA TB2.1 **84.3** (confirms vendor), Tau3 Banking 47.2, ITBench 51.2, Cyber Index 49.9, CWE-Bench-AA 55.8, CyberGym-E2E 74.0, Deepsec 19.9, MKA 36.2; **47.3 min/task** (median 12.7), TTFT 87.49s, 47 tok/s, 124M index tokens, cost/task $0.58
- Vals AI: SWE-bench **92.0**, TB2.1 **62.9** (vs vendor/AA 84.3 — harness gap labelled), LiveCodeBench 80.5, GPQA-D 86.4, MMLU-Pro 86.1
- Epoch: FrontierMath v2 T1-3 **55.789**, T4 **17.073** (weak hard math)
- Terminal-Bench 4.1 leaderboard: **35.5**; Proximal FrontierSWE v2 **18.1**; CursorBench 4.0 36.8; Bug Hunt 17.7 fixes
- Other: ExtractBench 80.75 / ParseBench 70.55 (LlamaIndex), Hermes 35.0/68.9, OpenHarmony 57.3, MazeBench 0, Design Arena 1,267; BenchLM aggregate **57.93/100, #57 of 1026** (48/815 coverage)

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1,773 (near Opus-5.5-class), Toolathlon 78.4, TB2.1 84.3 confirmed by AA, AutomationBench 48.8 — outstanding for a flash-tier model; capped by Vals TB2.1 62.9, TB4.1 35.5, ALE 26.3, MazeBench 0, and 47-minute task times that blunt throughput.
- **Reasoning: 80/100.** HLE 55.3 w-tools (vendor harness), GPQA 86.4 / MMLU-Pro 86.1 (Vals), AA index 28 above its open-class median; capped by FrontierMath v2 T4 **17.1** (hard math is a clear weakness), T1-3 55.8, and no independent HLE confirmation.
- **Context window: 85/100.** Full 1M with linear-attention serving economics, 80% cache discount, and 1M-context NL2Repo evaluation; deducted for zero published long-context retrieval benchmarks (MRCR/LCR) and unverified depth quality.
- **Multimodal: 78/100.** First natively multimodal GLM-5 with solid chart/document grounding (CharXiv 89.4, ExtractBench 80.75, OfficeQA Pro 62.4); capped by image-only input (no video/audio), BabyVision 53.4, and no independent MMMU-Pro run.
- **Coding: 84/100.** SWE-V **92.0** (Vals — frontier-class), DeepSWE 63.4, TB2.1 84.3, NL2Repo 56.3, LCB 80.5; capped by FrontierSWE v2 18.1, CursorBench 4.0 36.8, TB4.1 35.5, Bug Hunt 17.7 — newest hard-repo evals trail, but mainstream agentic coding is excellent for the price.
- **Cost efficiency: 95/100.** $0.15/$0.50 list (OpenRouter $0.04/$0.08), 80% cache discount, $0.58 AA cost/task, MIT weights with only 18B active — laptop/Mac-deployable frontier-adjacent coding; deductions for max-effort default verbosity (124M index tokens), 47.3 min/task and 87s TTFT.
- **Overall Score: 82.2/100.** Mean of the five quality dims (84+80+85+78+84)/5 = 82.2. Best-fit: the value pick for high-volume agentic coding and document/chart workflows — MIT-licensed, self-hostable, SWE-V 92 at flash pricing; not the choice for hard mathematics, bleeding-edge repo tasks, or latency-sensitive interactive use.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Z.AI's Hugging Face model card fetched via raw README with full harness footnotes, Artificial Analysis' live model page, BenchLM's 48-row sourced profile, OpenRouter rate card and z.ai launch claims via search snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA Intelligence Index 57 (launch, v4.1.1, $0.045/task promo) vs 28 (current v5.0.1) — different index versions, never compared with each other or with other models' unstated-version indices; TB2.1 84.3 (vendor Claude Code + AA) vs 62.9 (Vals) — harness gap; pricing $0.15/$0.50 (AA list) vs $0.0399/$0.0784 (OpenRouter). z.ai blog pages render as shells — launch numbers captured via search snippet and BenchLM's source-attributed rows; HF benchmark chart is an image, so per-row numbers come from BenchLM's attribution of the same launch post. HLE w-tools uses GPT-5.6-luna as judge (vendor footnote) — labelled. Identity: GLM-5.3-Flash ≠ GLM-5.3 ≠ GLM-5.3-FlashX ≠ GLM-4.7-Flash; TB2.1 ≠ TB4.1; FrontierSWE v1 ≠ v2.
- Reference URLs:
  - [GLM-5.3-Flash model card — Hugging Face](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [GLM-5.3-Flash: Frontier Intelligence, Flash Cost — Z.ai blog](https://z.ai/blog/glm-5.3-flash)
  - [GLM-5.3-Flash Intelligence, Performance & Price — Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3-flash)
  - [GLM-5.3-Flash benchmark profile — BenchLM](https://benchlm.ai/models/glm-5-3-flash)
  - [GLM-5.3-Flash — OpenRouter](https://openrouter.ai/z-ai/glm-5.3-flash)
  - [GLM-5.3-Flash API guide — Z.ai docs](https://docs.z.ai/guides/llm/glm-5.3-flash)
  - [Vals AI — GLM-5.3-Flash independent runs](https://www.vals.ai/models/zai_glm-5.3-flash)
  - [GLM-5 technical report — arXiv 2602.15763](https://arxiv.org/abs/2602.15763)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.