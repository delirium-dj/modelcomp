# Ling 2.6 Flash — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** InclusionAI's (Ant Group) **open-weight "Instant" instruct model** — **104B total / 7.4B active** MoE, released via API **2026-04-21** and **open-sourced 2026-04-28/29** under MIT. Its thesis is an explicit rejection of the industry's "long-reasoning" trend: rather than chasing benchmark ceilings with longer outputs, it is systematically optimized for **inference efficiency, token efficiency and agent performance**, using only **~15M output tokens to complete the full Artificial Analysis Intelligence Index suite** — roughly one-seventh of Nemotron-3-Super's ~110M+. Top use case: high-frequency, cost-sensitive production agents. It reached **~100B daily tokens on OpenRouter within days of launch** and is validated against Claude Code, Kilo Code, Qwen Code, Hermes Agent and OpenClaw.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-flash` (**MIT**, plus official `-fp8` and `-int4` variants and a `-base` checkpoint; 215 GB BF16); ModelScope (14,020 downloads); OpenRouter `inclusionai/ling-2.6-flash`; Novita AI; online demo at `ling.tbox.cn`. Self-host via SGLang (recommended) or vLLM — runs on a **single 4-GPU node**. Requires `--trust-remote-code` (custom `BailingMoeV2_5ForCausalLM` modeling code). No OpenCode Zen ID found.
- **Release / knowledge:** API release **2026-04-21**; **weights open-sourced 2026-04-28/29**; technical report **arXiv:2606.15079** (shared Ling/Ring 2.6 report, June 2026). Knowledge cutoff: not disclosed.
- **IDs:** `inclusionAI/Ling-2.6-flash` (HF), `inclusionai/ling-2.6-flash` (OpenRouter)
- **Context window:** **Native 128K, extendable to 256K via YaRN (×2)** — stated explicitly in the SGLang cookbook ("Native context is 128K"; launch command uses `--context-length 262144` with `rope_type: yarn, factor: 2.0, original_max_position_embeddings: 131072`). Novita's blog and Artificial Analysis both describe it as a "256K"/"262k" window, which is the YaRN-extended figure. **256K is credited as the usable window; 128K is the native one.**
- **Modalities:** **Text in → text out only.** The HF repo is a `Text Generation` `bailing_hybrid` checkpoint tagged `English`; Artificial Analysis states plainly that it "does not support image input… can only process text" and "is not multimodal." Reasoning: **No** — Artificial Analysis is explicit that it "is not a reasoning model. It provides direct responses without extended chain-of-thought reasoning." That is the core design decision, not a limitation. Tool calls: yes (`--tool-call-parser qwen25`). Structured output: yes.
- **Pricing (as of 2026-10-09):** **OpenRouter $0.01 in / $0.03 out per 1M** (serverless) — among the cheapest routes for any model of this size anywhere. **Novita AI $0.10 / $0.30.** **MIT-licensed open weights** make self-hosting free of token cost. No Free API tier required — the tariff is effectively free-tier-priced.
- **Architecture:** **104B total / 7.4B active** sparse MoE (HF safetensors report 107.49B). Hybrid linear attention: **1:7 MLA + Lightning Linear**, upgraded from Ling 2.0's original GQA, on a highly sparse MoE backbone. Requires custom modeling code (`BailingMoeV2_5ForCausalLM`).

### Raw benchmarks found

> **Vendor-reported** agent figures come from InclusionAI's own evaluation, run with **GPT-5.2 as the User Agent** across all evaluated domains; IFBench figures for GPT-OSS-120B (low) and GPT-5.4-mini (Non-Reasoning) are sourced from the AA leaderboard, and **all other model data in InclusionAI's table is internal evaluation**. AIME 2026 is **independently confirmed on the Hugging Face `MathArena/aime_2026` leaderboard** via a community evaluation PR.

Agent / tool use:

- **BFCL-V4: 67.04** — InclusionAI reports this as **leading** its comparison set: vs Nemotron-3-Super (49B active) 35.12, GLM-4.5-Air 50.67. A ~32-point lead over Nemotron-3-Super at 7.4B active is the single most striking number in this report.
- **PinchBench: 81.10** — also reported as **leading**: vs Qwen3.5-122B-A10B 78.20, Nemotron-3-Super 73.10, GLM-4.5-Air 73.30.
- **Multi-IF (Turn 3): 74.85** — multi-turn instruction following.
- **IFBench: 58.10** — single-turn precise instruction following.
- **TAU2-bench** and **Claw-Eval**: named by InclusionAI as reaching "SOTA-class" or "competitive with, and in some cases reaches SOTA level" against models with larger active parameter counts — **no numeric value published** in any source found.
- Decode throughput at 65K context: **4.38×** vs Nemotron-3-Super 3.37×, Qwen3.5-122B-A10B 1.90×, GLM-4.5-Air 1.00× (baseline); **2.2× the prefill throughput of Nemotron-3-Super**
- Tau3-Banking, GDPval-AA, OSWorld, AutomationBench: no verified public score found

Reasoning / knowledge:

- **AIME 2026: 73.85%** — **independently confirmed on the Hugging Face `MathArena/aime_2026` leaderboard** (community eval, PR #2). InclusionAI's own figure is identical at 73.85%.
- **Artificial Analysis Intelligence Index: 10** (AA model page) — **#3 of 39** open-weight *non-reasoning* models of similar size, against a class median of 7. Note the ceiling: because Ling-2.6-flash is deliberately **not** a reasoning model, AA compares it only against non-reasoning peers, which is why the absolute figure looks low next to reasoning models scoring 20–30. That framing is the fair one.
- GPQA Diamond / HLE / MMLU-Pro / CritPt / AA-LCR / Omniscience: **no verified public score found** for this model
- Deliberate design consequence: with no extended chain-of-thought, the model's reasoning ceiling is structurally capped. InclusionAI's own framing is that the question *"Are these excessive reasoning tokens truly necessary for high-frequency, everyday agent use cases?"* is the one it is optimizing against.

Coding:

- **SWE-bench Verified: 61.2%** (InclusionAI; also filed to the HF `.eval_results/swe-bench_verified.yaml`). HMMT Feb 2026 was also added to the HF eval results.
- SWE-bench Pro / SWE-bench Multilingual / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench / Terminal-Bench: **no verified public score found for this model**

Long context:

- **128K native, 256K via YaRN (×2).** **No long-context retrieval benchmark — MRCR, RULER, LongBench or AA-LCR — has been published** for this model, so effective quality at 256K is unmeasured. The architecture claim is about *throughput* at long context ("4× throughput at long contexts"), not retrieval accuracy.

Speed / cost efficiency inputs (the model's actual headline):

- **Up to 340 tokens/s** on a 4× H20-3e node (TP=4, batch 32) — InclusionAI's own hardware measurement, and the fastest figure in this report
- **~15M output tokens** to complete the full Artificial Analysis Intelligence Index suite, versus **~110M+** for Nemotron-3-Super — roughly **one-seventh the tokens** for competitive performance
- Artificial Analysis lists Speed, Cost and Verbosity as **"N/A"** for this model — AA has not independently benchmarked its throughput, so the 340 tokens/s and 15M-token figures are vendor-measured, not AA-verified
- Pricing at $0.01/$0.03 on OpenRouter makes the per-token figures close to irrelevant: even with 15M output tokens, an Intelligence Index run costs on the order of cents

### Normalized scores (1–100)

- **Tool use: 82/100.** The strongest dimension, and the reason to choose this model: **BFCL-V4 at 67.04 and PinchBench at 81.10 are both reported as class-leading**, with a ~32-point BFCL lead over Nemotron-3-Super at 15× the active parameters, and **Multi-IF Turn-3 at 74.85** shows real multi-turn instruction following. Tool calling is natively supported. Capped by the absence of published values for the two benchmarks InclusionAI most leans on for its SOTA claims — **TAU2-bench and Claw-Eval** — and by no GDPval-AA, Tau3, OSWorld or AutomationBench figure.
- **Reasoning: 62/100.** **AIME 2026 at 73.85%** is independently leaderboard-confirmed and respectable for an instruct model, and **AA Intelligence Index 10 (#3 of 39 in the non-reasoning class, median 7)** is genuinely good *for its category*. Held to 62 by the deliberate absence of extended reasoning — Artificial Analysis is explicit it "is not a reasoning model" — and by the complete lack of GPQA Diamond, HLE, MMLU-Pro, CritPt or AA-LCR data.
- **Context window: 80/100.** **128K native, 256K via YaRN** — upper-mid tier and matching the model family. Not higher because **no long-context retrieval benchmark exists**, and because the native window is 128K rather than the 262K–1M of its sibling Ling-2.6-1T (which reaches 1M via YaRN).
- **Multimodal: 15/100.** **Text-only**, confirmed by the HF `Text Generation` checkpoint and Artificial Analysis's explicit "does not support image input / is not multimodal." Floor score by methodology. InclusionAI's vision-capable member is `Ling-3.0-flash-VL`, a different model.
- **Coding: 68/100.** **SWE-bench Verified 61.2%** is a credible figure for a 7.4B-active instruct model and is filed to Hugging Face's eval results, with **AIME 2026 73.85%** showing solid mathematical coding-adjacent reasoning. Held to 68 by the total absence of SWE-bench Pro, SWE-bench Multilingual, LiveCodeBench, SciCode, DeepSWE and **any Terminal-Bench version** — for a model marketed as agentic, having zero terminal-agentic measurements is a real gap.
- **Cost efficiency: 99/100.** **OpenRouter $0.01 in / $0.03 out** is about as cheap as inference gets for a 104B-class model, **MIT open weights** remove token cost entirely for self-hosters, and the model fits a **single 4-GPU node**. The efficiency story is reinforced by design, not just price: **~15M output tokens on the full AA suite, ~1/7 of Nemotron-3-Super**, plus 340 tokens/s and 4× long-context decode throughput. Held at 99 rather than 100 only because the throughput and token-efficiency figures are vendor-measured — Artificial Analysis lists speed, cost and verbosity as "N/A" for this model — and because Novita's route is 10× OpenRouter's price.
- **Overall Score: 61/100.** Best fit: **high-volume, latency- and budget-sensitive production agents and subagents** — coding-agent loops, document and structured-data processing, multi-turn workflows — where BFCL-V4 67.04 and PinchBench 81.10 at $0.01/$0.03 with MIT weights and a single-4-GPU footprint is a genuinely hard combination to beat, and where 15M-token efficiency means cost per completed task stays low even on long agentic trajectories. Do **not** pick it for deep reasoning, frontier math beyond AIME, long-horizon analytical work, or anything multimodal — its no-chain-of-thought design and text-only input are intentional tradeoffs, not gaps to be papered over.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across the **official Hugging Face model card** for `inclusionAI/Ling-2.6-flash` (three-pillar design rationale, the 340 tokens/s 4× H20 measurement, the ~15M-token AA-suite figure, the BFCL-V4 / TAU2 / SWE-bench Verified / Claw-Eval / PinchBench SOTA claims, and the explicit disclosure that all non-AA-leaderboard model data is **internal evaluation** run with **GPT-5.2 as User Agent**), the **Hugging Face `.eval_results` community evaluation** confirming **AIME 2026 = 73.85** on the `MathArena/aime_2026` leaderboard, the **SGLang cookbook page** for Ling-2.6 (native 128K context, YaRN ×2 to 256K, tool-call parser, hardware matrix, throughput ratios), the **Artificial Analysis model page** (Intelligence Index 10, #3 of 39 non-reasoning peers, "not a reasoning model," text-only, and speed/cost/verbosity listed as **N/A**), Novita AI's provider blog (the full 6-model × 19-benchmark × 7-category comparison table and token-efficiency figures), Gate News' coverage of the open-sourcing, ModelScope's download statistics, and the shared `arXiv:2606.15079` Ling/Ring 2.6 technical report. Every vendor-reported agent figure is labeled as internal evaluation, and the one independently leaderboard-confirmed score (AIME 2026) is marked as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_2.6_flash_int4.md`, using the same headings only if a quantization variant warrants separate scoring — on current evidence it does not. Re-scoring is warranted once Artificial Analysis publishes its own speed, cost-per-task and verbosity rows (currently "N/A"), or once numeric values appear for the named-but-unpublished TAU2-bench and Claw-Eval results.