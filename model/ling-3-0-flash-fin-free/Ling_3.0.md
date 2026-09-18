# Ling 3.0 Flash Fin — findings by Ling 3.0

- Source: Ling 3.0 (`opencode/ling-3.0-flash-fin-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Finance-enhanced MoE reasoning model (InclusionAI / Ant Group); extends Ling 3.0 Flash via continued training on high-quality financial data for financial research, tool-intensive workflows, and source-grounded retrieval.
- **Provider / access:** OpenCode Zen (`opencode/ling-3.0-flash-fin-free`) at `https://opencode.ai/zen/v1/chat/completions`; Vercel AI Gateway (`inclusionai/ling-3.0-flash-fin-free`, free offer through Sep 25 2026); OpenRouter (`inclusionai/ling-3.0-flash-fin:free`); HF `inclusionAI/Ling-3.0-flash-Fin` (weights, MIT, released Sep 9 2026).
- **Release / knowledge:** Base Ling 3.0 Flash announced 2026-07-27; Fin API variant 2026-08-27; Fin weights open-sourced 2026-09-09 (Inclusion·Conference on the Bund). Knowledge cutoff not disclosed.
- **IDs:** `opencode/ling-3.0-flash-fin-free`; Vercel `inclusionai/ling-3.0-flash-fin-free`; OpenRouter `inclusionai/ling-3.0-flash-fin:free`; HF `inclusionAI/Ling-3.0-flash-Fin`.
- **Context window:** **262,144 tokens total / 32,768 max output** (OpenCode Zen, Vercel). Independently verified hard limit of exactly 262,144 (API returns HTTP 400 above limit; marketed "256K" using IEC binary convention).
- **Modalities:** Text in / text out only. Reasoning enabled by default (switchable); function calling yes. No image/audio/video.
- **Pricing (as of 2026-09-17):** Free / Free / Free cached on Zen and Vercel AI Gateway (limited-time; data may be used to improve the model). Standard OpenRouter/Kilo: $0.06 input / $0.18 output.
- **Architecture:** 124B total / ~5.1B active per token; 512 routed experts, 8 active, 1 shared; 42 transformer layers (35 KDA + 7 MLA, 5:1 ratio); hidden dim 2,560; native MTP head; FP8 checkpoints on HF. OpenMDW / MIT license.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2: **59.8%** (BenchLM, `ling-3.0-flash-fin`).
- APEX-Agents: **29.2%** (BenchLM).
- SpreadsheetBench 2: **21.8%** (BenchLM).
- Terminal-Bench 2.1 (base `ling-3.0-flash`): **57.0%** (BenchLM) / 50.2% Vals. No verified score for Fin variant specifically.
- τ³-Banking (base): **28.0%**. MCP-Atlas (base): **65.5%**. GDPval-AA (base): 1,107 Elo unnormalized.
- FinFIRST V1 (vendor): **no verified public numeric score** — 123 expert-authored tasks, 701 atomic criteria, 12,300 rubric points (CICC co-developed).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Tool calling schema-respect (independent, n=52): 45/45 valid schemas, 0/10 invented params.

Reasoning / knowledge:

- MMLU+GPQA (independent author-authored subset, n=35): **35/35 (100%)** — small sample, not leaderboard-comparable.
- GPQA Diamond (base): **85.0%**; AA-GPQA Diamond **85.5%**.
- MMLU-Pro (Vals, base): **82.0%**; HLE: **22.7%** (base) / AA-HLE 23.7%; CritPt: **1.7%** (base); AA-LCR: **73.0%** (base).
- AA Intelligence Index (base): **38** (v4.1.1); Fin variant: **no verified public score found**.
- BenchLM overall (base): **46.75/100, #139/486**; Fin variant 3 of 439 benchmarks covered (partial coverage).
- Instruction following rank (base): **#24** on BenchLM; IFBench **74.5%**.

Coding:

- HumanEval (independent, n=20): **19/19 syntactically valid** (author-authored subset).
- LiveCodeBench v5 (base): **82.8%**; SWE-bench Multilingual (base): **72.4%**; SWE-bench Vals (base): **65.2%**; SciCode (base): **41.2%**; AA-SciCode **42.0%**; AA Coding Index (base): **50.6**.
- MBPP (independent): Pass@1 **not verified** (code extracted but not sandbox-executed).
- SWE-Bench Pro (base): **56.6%**.

Long context:

- Needle-in-haystack (independent): **100%** at 4K–208K (38/39 position-controlled); length-oriented single-needle 100% (28/28); multi-needle conflict **22/22** always picks first needle (100% bias — cannot detect contradictions).
- Long-context retrieval (Fin variant specific): **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 65/100.** Function calling verified clean (45/45 valid schemas, 0 invented params), but no public Fin-specific TB/Tau3/GDPval numbers — penalized for thin evidence.
- **Reasoning: 68/100.** Strong instruction following (#24 BenchLM) + small-sample MMLU/GPQA perfect + LCR 73%; no frontier-scale evidence (HLE 22.7, CritPt 1.7).
- **Context window: 72/100.** 262,144 verified hard limit; 32,768 output small-ish.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Clean HumanEval syntax; no public SWE/LiveCode numbers for the Fin variant.
- **Cost efficiency: 100/100.** $0 free tier.
- **Overall Score: 58/100.** Niche finance pick; verify on real financial + SWE tasks before relying.

---

## Signature

- Provided by: **Ling 3.0 (`opencode/ling-3.0-flash-fin-free`)** — 2026-09-17
- Method: public web research (Business Wire, HuggingFace, Vercel changelog, GitHub independent eval, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/Ling_3.0.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
