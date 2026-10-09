# Hy3 preview — findings by Step 5 Preview

- Source: Tencent Hy / Hunyuan (`Hy3-preview`, weights `tencent/Hy3-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 preview (Tencent's April 2026 preview of the third Hunyuan generation)
- **Short description:** The first model trained on Tencent's fully rebuilt pre-training + RL infrastructure (the February 2026 rebuild led by chief AI scientist Yao Shunyu) — a hybrid fast/slow-thinking MoE with 295B total / 21B active parameters, 3.8B MTP layer, 80 layers, 192 experts (top-8), GQA, and a 256K context window, shipped in under three months from cold start. Its architectural story is expert-utilization efficiency: differentiated expert sizes (hard tokens routed to bigger experts), a P-Penalty loss that discourages over-reliance on large experts, and routing precision that lets 21B active parameters do what peers need 37–40B active for. Tencent explicitly framed the preview as a feedback release with known limitations — weak error recovery on tool calls and sensitivity to inference hyperparameters — and open-sourced it on Hugging Face/ModelScope/GitCode. The GA "Hy3" followed on 2026-07-06 under Apache 2.0.
- **Provider / access:** Open weights (BF16) + Tencent Cloud TokenHub API; integrated into Yuanbao, CodeBuddy and WorkBuddy from launch.
- **Release:** 2026-04-23.
- **Context window:** 256K tokens; three inference modes trading latency vs depth.
- **Modalities:** Text in → text out (hybrid thinking).
- **Pricing (as of 2026-10-09):** launch API rate ¥1.2/M input and ¥4/M output for the 0–16K tier (≈$0.18/$0.59).
- **Architecture:** MoE 295B/21B, differentiated expert sizes + P-Penalty Loss, MTP speculative decoding.

### Raw benchmarks found

Instruct model (via Tencent launch coverage — Decrypt, GIGAZINE): 

- SWE-bench Verified: **74.4%** (Hy2: 53.0%; Opus 4.6: 80.8, GLM-5: 77.8, Kimi K2.5: 76.8)
- Terminal-Bench 2.0: **54.4%** (Hy2: 23.2%)
- BrowseComp: **67.1%** (Hy2: 28.7%); WideSearch: **70.2%** (Opus 4.6: 77.2%)
- Tsinghua Qiuzhen College math PhD qualifying exam (Spring 2026): **88.4 avg@3** — top among Chinese models
- China High School Biology Olympiad (CHSBO 2025): **87.8** — highest among Chinese models
- ClawEval and WildClawBench: "scores well" (no numeric results published in the launch materials)
- GPQA Diamond, HLE, MCP Atlas, τ³, GDPval, MRCR/RULER: **no verified public score found** for the preview checkpoint (the Hy4-preview card's parenthetical Hy3 rows are the later GA model)

Base model (Hy3-preview-Base vs Kimi-K2-Base / DeepSeek-V3-Base / GLM-4.5-Base):

- MMLU 87.42; MMLU-Pro **65.76** (best in the base table); MMLU-Redux 86.86; SuperGPQA **51.60**; SimpleQA 26.47; ARC-C 95.99; DROP 85.50
- LiveCodeBench v6 **34.86** (best in table); MBPP-plus 78.71; CRUXEval-I **71.19**
- GSM8K **95.37**; MATH **76.28**; CMath **91.17**; C-Eval 89.80; CMMLU 89.61; MMMLU **80.15**; INCLUDE **78.64**

### Normalized scores (1–100)

- **Tool use: 62/100.** BrowseComp 67.1%, WideSearch 70.2% and Terminal-Bench 2.0 54.4% are real mid-band agentic/search results, and Tencent notes it "scores well" on ClawEval/WildClawBench — but the vendor's own known-issues list flags weak tool-error recovery, and no MCP-Atlas, τ³ or GDPval number exists.
- **Reasoning: 62/100.** Top-among-Chinese-models results on two real-world expert exams (Tsinghua math PhD qualifying 88.4 avg@3, CHSBO 87.8) plus the best base MMLU-Pro (65.76) and MATH (76.28) in its comparison set — mid-band evidence with no GPQA/HLE for the instruct checkpoint.
- **Context window: 70/100.** 256K is the 200K–500K band (65–84); Tencent's CL-bench/CL-bench-Life context-learning evals showed real gains (the scheduling case study is documented) but no MRCR/RULER-style number is published.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 70/100.** SWE-bench Verified 74.4% was a +21.4-point generational leap and sat between GLM-5 (77.8) and Kimi K2.5 (76.8) at launch; Terminal-Bench 2.0 54.4% (from 23.2%) and base LiveCodeBench 34.86% round out a strong open-weights coding profile for 21B active.
- **Cost efficiency: 95/100.** ¥1.2/M input and ¥4/M output (~$0.18/$0.59) with open weights and 21B active — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, plus the differentiated-expert efficiency story.
- **Overall Score: 55/100.** Best-fit recommendation: the efficient open-weights reasoning/agent model of spring 2026 — 21B-active economics with SWE-V 74.4 and top-Chinese exam scores; a preview with acknowledged tool-error-recovery weaknesses, superseded by the Apache-2.0 GA Hy3 (2026-07-06) and then Hy4 preview.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Tencent Hy release pages, GitHub/Hugging Face model cards with base-model tables, Decrypt and GIGAZINE launch coverage, Tencent Cloud techpedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy5.md`, using the same headings.
