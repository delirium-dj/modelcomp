# Ling-2.6-1T — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-2.6-1T`, released 2026-04-29)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T (the trillion-parameter flagship of the Ling 2.6 family; non-reasoning "instant" tier)
- **Short description:** Ant Group's ~1-trillion-parameter MoE — **1,025B total / 63B active per token** — with 256 routed + 1 shared expert (8 active per token, first 4 layers dense), 80 layers, and the family's hybrid attention (Lightning Attention : MLA at **7:1**, partial RoPE with rope θ 6M), served in FP8 compressed tensors. Its design goal is capability per output token: the team's own position is that "Ling-2.6-1T attains a score of 34 [on the AA Intelligence Index] using only about 16M output tokens, comparable to GPT-5.4 in the non-reasoning setting" — AA's current rebased v4.3.2 index lists **17** (#14 of 46 in class). The tech-report table shows genuinely strong mid-tier results against non-thinking frontier models: **SWE-bench Verified 72.20** (ahead of GPT-5.4 non-reasoning's 69.20 and DeepSeek-V3.2's 66.40), **AIME 2026 87.40**, GPQA-Diamond 76.17, τ²-bench 78.36 and PinchBench 85.24, all on MIT-licensed weights. It has since been delisted from OpenRouter (now 404, Ling 3.x only) and is marked deprecated on Artificial Analysis, superseded by the Ling 3.0 generation.
- **Provider / access:** MIT weights on Hugging Face / ModelScope (Ling-2.6-1T + `-base`); Ant Ling platform (OpenAI/Anthropic-compatible API); formerly OpenRouter (Novita, 92.7 tok/s) — delisted.
- **Release:** 2026-04-29 (Ant Ling changelog v1.0.1; AA lists 2026-04-23).
- **Context window:** 262,144 tokens (docs note support up to 1M; the official API opened at 256K).
- **Modalities:** Text in → text out; non-reasoning/instant (the reasoning companion is Ring-2.6-1T).
- **Pricing (as of 2026-10-09):** $0.30/M input, $2.50/M output, $0.06/M cached read (blended ≈ $0.52/M at AA's 7:2:1 ratio); MIT weights free.
- **Architecture:** BailingMoeV2_5ForCausalLM (`bailing_hybrid`), 1,025B/63B active, 80 layers, 8-active-of-256 experts, 7:1 Lightning:MLA.

### Raw benchmarks found

Tech report (arXiv:2606.15079) Table 5, non-reasoning, head-to-head with non-thinking frontier models:

- GPQA-Diamond: **76.17** (GLM-5 70.20, GPT-5.4 non-reasoning 76.89, DeepSeek-V3.2 77.11, Kimi-K2.5 80.52)
- HLE: **10.06**; AIME 2026: **87.40** (GPT-5.4 72.92); HMMT-Nov25: 81.93; IMO-AnswerBench: 65.81
- LiveCodeBench-v6: **65.58** (DeepSeek-V3.2 57.71); SWE-bench Verified: **72.20** (GLM-5 73.80, GPT-5.4 69.20)
- PinchBench: **85.24**; ClawEval: 51.00; BFCL-V4: **70.64**; τ²-bench: **78.36**; Terminal-Bench 2.0: 40.45
- IFBench: 57.62; LongBenchV2: 48.31; **MRCR (16K–256K): 80.37**; C-SimpleQA: 76.53; SimpleQA-Verified: 31.50; SuperGPQA: 58.32; bbeh: 52.37; ARCPrize: 50.94

Base model (Table 3): MMLU 86.82, MMLU-Pro 67.79, GPQA 45.45, LiveCodeBench 44.27, LongBenchv2 43.54, Belebele 94.67, LEval 76.21

Artificial Analysis (independent): Intelligence Index **17** (#14/46 in class, #26/697; deprecated status) — the vendor card's 34 figure is on an earlier index version.

### Normalized scores (1–100)

- **Tool use: 66/100.** BFCL-V4 70.64, τ²-bench 78.36, PinchBench 85.24 and IFBench 57.62 are solid upper-mid agentic results for a non-reasoning tier; ClawEval 51.0 and Terminal-Bench 2.0 40.45 pull it below the top band.
- **Reasoning: 72/100.** AIME 87.40, HMMT 81.93, IMO-AnswerBench 65.81 and GPQA 76.17 are upper-mid-band — beating non-thinking GPT-5.4/DeepSeek-V3.2 on math — while HLE 10.06 and bbeh 52.37 cap it below the frontier reasoning tier.
- **Context window: 72/100.** 262K in the 200K–500K band (65–84) with MRCR 80.37 and LongBenchV2 48.31 confirming real long-horizon retention; docs claim 1M support that the API never opened.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 68/100.** SWE-V 72.20 edges non-reasoning GPT-5.4 and LiveCodeBench 65.58 leads the non-thinking comparison set; the reasoning sibling Ring-2.6-1T is stronger (SWE-V 74.0), which is where the coding crown sits.
- **Cost efficiency: 68/100.** $0.30/$2.50 with $0.06 cached reads and MIT self-host weights — the methodology's ~$0.3/$2.5 ≈ 63–68 tier — offset by 63B active parameters that make self-hosting expensive, and its ~16M-token evaluation footprint which is genuinely efficient.
- **Overall Score: 58/100.** Best-fit recommendation: the non-reasoning trillion-parameter workhorse — GPT-5.4-class instant responses with SWE-V 72.2 and AIME 87.4 at a third of the price, MIT-licensed; superseded by the Ling 3.0 generation and delisted on OpenRouter.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (inclusionAI Ling-2.6-1T and -base Hugging Face cards, tech report arXiv:2606.15079, Artificial Analysis, Ant Ling developer docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_2_7.md`, using the same headings.
