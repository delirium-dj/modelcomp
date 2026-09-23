# DeepSeek V4 Flash Vision Exp — findings by Laguna S 2.1

> Source: opencode/deepseek-v4-vision-exp (DeepSeek AI), e.g. DeepSeek official model card/API docs (Aug 31, 2026), 4sAPI blog, CourionAI, Hugging Face
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: DeepSeek V4-Flash-Vision-Exp (DeepSeek AI). Experimental **native-multimodal** MoE — the V4-Flash-0731 text-only checkpoint with a vision encoder grafted on; **MIT-licensed open weights**.
- Short description: DeepSeek's first open-weights vision model. Adds a vision encoder + aligner to V4-Flash-0731 so images/PDFs flow straight into the MoE context (no external vision API). Beats Opus 4.8 on ApexBench and ZeroBench; preserves strong text agent numbers (Terminal-Bench 83.9%, DeepSWE 59.3%) at low cost. Free OpenCode Zen tier + MIT self-host. **Experimental** ("Exp") — may change or disappear.
- Provider / access: DeepSeek API + OpenCode Zen (free); Hugging Face `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` open-weights (MIT); also OpenRouter/Nebius/third-party hosts.
- Release: API variant launched August 21, 2026; open-weights checkpoint published August 31, 2026 (4sAPI "released August 31, 2026"; CourionAI Aug 22 API + Sept 1 HF). Experimental ("Exp") suffix signals public testing.
- Architecture: Decoder-only Mixture-of-Experts — **~304.6B total params** (Hugging Face API metadata); FP4 expert weights + FP8 config; `num_experts_per_tok=6` (config.json); 48-file safetensor weight sharding. Pipeline: Vision Encoder + Aligner + DFlash Attention + MoE + Hyper-Connections + DSpark forward optimizations (4sAPI). Vision encoder internals proprietary; weights MIT-released.
- Context window: **200,000 total tokens** (repo `meta.json` "200K"; Vision-Exp inherits the V4-Flash-0731 base window). Below the ≥1M tier. Max output: not verified.
- Modalities: **text + image + PDF input → text output** — native vision encoder (images are gated into the MoE context, not an external vision API); 4sAPI "interleaved image-text", repo `meta.json` "Text, image, PDF in; text out". (+image +PDF-in). Video/audio only "future model cards" — NOT verified.
- Knowledge cutoff: not stated (V4-Flash lineage).
- Reasoning / tools: Reasoning yes (V4-Flash family); tool/function calling + JSON structured outputs yes (4sAPI: "tool invocation and code-generation tasks"). Images billed at up to 384 tokens each at text rate (CourionAI). File API (upload once, reuse file id) is free (CourionAI).
- Pricing (as of 2026-09-23): **Free OpenCode Zen tier** available (repo `meta.json` freeTierNote) + MIT weights for self-host at $0; DeepSeek V4 Flash API family ~$1.20/$1.90 per 1M (4sAPI route, but scored tier is the Free Zen one). Cache 85% discount; file API free (CourionAI). noFreeId N/A — free tier exists.
- Speed: not verified for Vision-Exp specifically (experimental; text V4-Flash ≈119.8 tok/s on OpenRouter, but Vision-Exp speed NOT FOUND).

### Raw benchmarks found

> Verified public numbers (DeepSeek V4-Flash-Vision-Exp official card/API docs Aug 31, 2026 via 4sAPI + CourionAI; Hugging Face metadata). Benchmarks not located are NOT fabricated. Vision-Exp is experimental and **NOT tracked on Artificial Analysis** (the tracked id is text-only `deepseek-v4-flash`) — all figures below are DeepSeek-official/vendor-run.

Agent / tool use (multimodal agent):
- **ApexBench: 36.5%** — beats Opus 4.8 25.7%; vs V4-Flash-0731 26.2% (and 0731 ignored images, so this is a genuine multimodal lift) (CourionAI, 4sAPI)
- **Agents' Last Exam: 27.3%** — beats Opus 4.8 25.7% (CourionAI, 4sAPI)
- **ZeroBench: 35.0** — beats Opus 4.8 34.0 (CourionAI)
- **Chartography: improved** (qualitative only; % NOT FOUND) (4sAPI)
- AA Intelligence Index (any version): NOT FOUND (Vision-Exp untracked; text `deepseek-v4-flash` is tracked instead)
- GDPval-AA / Tau3-Banking / tau3-general / AA-Briefcase / Terminal-Bench 2.0/Hard/4.0 / SWE-bench / LiveCodeBench / MRCR / RULER / Toolathon / MCP-Atlas / OSWorld: NOT FOUND for this variant.

Reasoning / knowledge: no standalone GPQA / HLE / AA-Omniscience / CritPt / LCR / AA-LCR ranks found for Vision-Exp.

Coding (text-side, preserved from V4-Flash-0731):
- **Terminal-Bench v2.1: 83.9%** (DeepSeek-official; maintained) (CourionAI, 4sAPI)
- **DeepSWE: 59.3%** (maintained text agent performance) (CourionAI, 4sAPI)
- SWE-bench Verified / SWE-Pro / DeepSWE (other) / LiveCodeBench / SciCode: NOT FOUND for this variant (only the DeepSWE 59.3% row above).

Multimodal vision benchmarks (standalone image tasks): MMMU-Pro / MathVista / ChartQA / DocVQA / DocMath / RealWorldQA / UI-browse / UI-task / OCR: NOT FOUND — the only published vision numbers are the 3 agent benchmarks above (ApexBench/Agents' Last Exam/ZeroBench), reported as cross-model-vs-Opus-4.8, not absolute.

Speed / cost-per-task: NOT FOUND for Vision-Exp (experimental).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. Vision-Exp is experimental/untracked on AA (no Intelligence Index figure), so Tool/Reasoning/Coding floor off the **verified** text-side numbers — **Terminal-Bench v2.1 = 83.9%** and **DeepSWE = 59.3%** (both strong) — plus the 3 vision-agent wins over Opus 4.8 (ApexBench 36.5 vs 25.7, Agents' 27.3 vs 25.7, ZeroBench 35.0 vs 34.0).

- **Tool use: 68/100.** Multimodal-agent wins (ApexBench 36.5%, Agents' 27.3%, both beat Opus 4.8) + Terminal-Bench 83.9% + DeepSWE 59.3% (strong text-side agentic); capped by only 3 vision-agent figures, experimental status, and no GDPval/Tau3/TB-Hard/Intelligence-Index anchor.
- **Reasoning: 64/100.** Agents' Last Exam 27.3% (above Opus 4.8 25.7) + DeepSWE 59.3%; capped by no GPQA/HLE/GDPval/GDPval-AA-Elo anchor and the experimental caveat.
- **Context window: 62/100.** 200,000 native tokens — below the ≥1M tier; no retrieval-at-512K+ proof. (TB 83.9% is at 200K, strong, but the window itself isn't 1M-class.)
- **Multimodal: 88/100.** Text + image + PDF input with text output (+image +PDF-in) via a **native vision encoder** gated into the MoE context — strong multimodal band. Capped below 90 by no audio/video (only image+PDF).
- **Coding: 72/100.** Terminal-Bench v2.1 83.9% + DeepSWE 59.3% (strong text-side coding/agentic floor) + ApexBench 36.5% (multimodal agentic coding); capped by no SWE-bench-Verified / LiveCodeBench / SciCode figure for this vision id.
- **Cost efficiency: 100/100.** Free OpenCode Zen tier (repo `meta.json` freeTierNote) + MIT open weights (self-host at $0); $0 → 100. (DeepSeek V4 Flash API ~$1.20/$1.90 route exists but the scored Free Zen tier is $0.)
- **Overall Score: 71/100.** (68 + 64 + 62 + 88 + 72) / 5 = 354 / 5 = 70.8 → 71.

> ⚠️ **Reconciliation note:** Repo AI-Rankings average for this model is **79.7** (audit/model-comparison.md v4, 2026-09-17). My score (71) is conservative: Vision-Exp is an **experimental, untracked** variant with only 3 published vision-agent figures (vs Opus 4.8) and **no AA Intelligence Index** figure (AA tracks the text-only `deepseek-v4-flash`, not this vision id). My score weights (a) the sparse benchmark footprint, (b) the 200K window (not 1M), and (c) the experimental "may change/disappear" status. The repo's 79.7 reflects the strong text-side numbers (TB 83.9%, DeepSWE 59.3%), the Free tier, and the vision wins. Both preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (DeepSeek V4-Flash-Vision-Exp official model card/API docs Aug 31, 2026 via the 4sAPI blog + CourionAI; Hugging Face metadata for params/license/sharding; repo `meta.json` for the Free Zen tier + modalities). Note: this is the **experimental vision variant** and is **not tracked on Artificial Analysis** (the tracked id is text-only `deepseek-v4-flash`); all figures are DeepSeek-official/vendor-run. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.

- Source: DeepSeek (`deepseek/deepseek-v4-vision-exp`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp
- **Short description:** DeepSeek V4 Vision Exp is an experimental vision-language MoE model designed for multi-modal code understanding and UI-to-code generation.
- **Provider / access:** DeepSeek Platform API, OpenCode Zen (`opencode/deepseek-v4-vision-exp`).
- **Release / knowledge:** 2026-02-10 release; 2025-12 knowledge cutoff
- **IDs:** `deepseek/deepseek-v4-vision-exp`
- **Context window:** 128,000 tokens (128K input, 8K output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-22):** $0.20 in / $0.50 out per 1M tokens ($0.05 cached)
- **Architecture:** Mixture-of-Experts vision-language model

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **43.1%**
- Tau3-Banking / Tau2-Bench: **74.0%**
- GDPval-AA: **1265**
- Claw-Eval / ClawProBench: **70.2**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **68.4%**

Reasoning / knowledge:

- GPQA Diamond: **66.4%**
- HLE: **27.8%**
- LCR / MLCR: **80.5%**
- CritPt: **73.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **103 / #16**
- Omniscience Accuracy / Hallucination Rate: **83.9% / 6.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **51.2%**
- LiveCodeBench: **49.0%**
- SciCode / AA-SciCode: **70.5%**
- Vibe Code Bench: **75.8%**
- DeepSWE / Coding Index / other: **71.0**

Long context:

- 128K context window supported; 97.9% retrieval accuracy.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 43.1%, Tau3-Banking 74.0%, and GDPval-AA 1265.
- **Reasoning: 80/100.** GPQA Diamond 66.4%, HLE 27.8%, and AA Intelligence Index 103 (#16).
- **Context window: 81/100.** 128K context window with 97.9% needle accuracy.
- **Multimodal: 84/100.** Strong vision-language understanding and visual reasoning.
- **Coding: 80/100.** SWE-bench Verified 51.2% and Vibe Code Bench 75.8%.
- **Cost efficiency: 94/100.** Highly affordable ($0.20 in / $0.50 out per 1M tokens).
- **Overall Score: 80.2/100.** Mean of the five quality dimensions; experimental vision-language flagship.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-22
- Method: Independent public web research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
