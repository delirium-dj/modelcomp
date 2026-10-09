# Gemini 2.5 Pro — findings by Step 5 Preview

- Source: Google (`gemini-2.5-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's June-2025 flagship thinking model (Experimental 2025-03-25 → Preview 05-06 → GA 06-05) — the model that took #1 on LMArena and led HLE, GPQA and the long-context leaderboards of its generation, with a then-unique 1M-token multimodal window. Now a 15-month-old model: still excellent at math, vision and long-context retrieval, but its agentic coding and tool use have been superseded by three-plus Flash generations (current frontier AA Index 16 vs 41+ for Gemini 3.8 Flash). Deep Think and 2.5 Flash siblings shipped alongside.
- **Provider / access:** Gemini API / AI Studio / Vertex AI `gemini-2.5-pro`; OpenRouter, Azure, and most gateways. No OpenCode Zen Free ID found.
- **Release / knowledge:** GA 2026-06-05… (GA June 2025); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-pro` (current), `gemini-2.5-pro-preview-06-05` / `-05-06`, `gemini-2.5-pro-exp-03-25` (archives).
- **Context window:** 1,048,576 tokens; 64K max output (Cloud docs: 65,536).
- **Modalities:** Text, audio, image and video in → text out (3 hours of video); thinking; function calling, structured output, search-as-a-tool, code execution; tuning supported.
- **Pricing (as of 2026-10-09):** $1.25 / MTok input, $10.00 output (≤200K); $2.50 / $15 above 200K; 90% cache discount. Measured 129 tok/s, 19.7s to first answer token.
- **Architecture:** Sparse mixture-of-experts (undisclosed size).

### Raw benchmarks found

Reasoning / knowledge (GA model card + AA):

- HLE (no tools): **21.6%** — state of the art at release (o3 High 20.3%); AA's later run: 22.5%
- GPQA Diamond: **86.4%** single-attempt (AA: 84.4%) — led the field at release
- AIME 2025: **88.0%**; Aider Polyglot: **82.2%**; MATH-500: 96.7%
- SimpleQA: **54.0%**; FACTS Grounding: **87.8%**; Global MMLU (Lite): 89.2%; MMLU-Pro: 86.2%
- ARC-AGI-2: **4.9%** (later Epoch run — the generation's known weak spot)
- Artificial Analysis Intelligence Index: **16** (rebased scale — the model's current standing; deprecated by AA)

Coding:

- SWE-bench Verified: **59.6% single-attempt / 67.2% multiple-attempts / 63.8% with Google's custom agent setup** (Vals' independent run: 54.4%)
- LiveCodeBench: **69.0%** single (74.2% in the tech report); Aider Polyglot 82.2%
- SciCode: **46.3%** (AA); AA Coding Index: **33.3**
- Terminal-Bench Hard: **26.5%** (AA); Vibe Code Bench v1.1: **0.40%** (Vals — effectively fails end-to-end app building)
- LMArena WebDev Arena: +500 Elo over Gemini 1.5 Pro

Agentic / tool use:

- τ²-Bench: **54.1%** (AA); Terminal-Bench Hard 26.5%
- GDPval-AA: **Elo 459** (AA — far below current leaders); AutomationBench-AA: **2%**; Terminal-Bench 4.0: **0%** (AA)
- Claw-Eval / ClawProBench / MCP-Atlas: **no verified public score found**

Multimodal:

- MMMU: **82.0%** (AA 79.6%); Video-MMMU: **83.6%**; Video-MME: 84.8%; Vibe-Eval (Reka): 67.2%
- 3-hour video comprehension in a 1M window; emergent multimodal coding (video → interactive app)

Long context (its standout legacy strength):

- MRCR v2 8-needle: **58.0% @128K average** (SOTA at release) / **16.4% @1M pointwise**; LOFT (hard): **87.0% ≤128K / 69.8% @1M** — the only model of its cohort supporting 1M+
- AA-LCR: **69%** (AA's current run)

### Normalized scores (1–100)

- **Tool use: 48/100.** τ²-Bench 54.1% and GDPval-AA Elo 459 place it in the low-mid band, and the new-generation agentic suites are effectively failed: AutomationBench-AA 2%, Terminal-Bench 4.0 0%, Terminal-Bench Hard 26.5%. Fifteen months of agentic-tooling progress have passed this model by.
- **Reasoning: 70/100.** GPQA 86.4%/84.4% (AA), AIME 88.0% and MMLU-Pro 86.2% are still strong on the classic suites, and HLE 21.6% was SOTA in mid-2025; capped by the current AA Intelligence Index of 16, ARC-AGI-2 4.9% and an AA-Omniscience index of −16.3 (90.9% hallucination rate) — knowledge depth is a generation behind.
- **Context window: 88/100.** 1,048,576 tokens with 64K output is the ≥1M tier, and it backs it with the best 128K retrieval of its cohort (MRCR 58.0%, LOFT 87.0%); the 16.4% pointwise MRCR at exactly 1M and the current AA-LCR of 69% keep it below the top of the band.
- **Multimodal: 90/100.** Text + audio + image + video in → text out is the top modality band (audio input), anchored by MMMU 82.0%, Video-MMMU 83.6%, Video-MME 84.8% and 3-hour video comprehension with multimodal coding; no non-text output.
- **Coding: 66/100.** SWE-bench Verified 59.6–67.2%, LiveCodeBench 69–74.2% and Aider Polyglot 82.2% were frontier-adjacent in mid-2025; capped by Vals' 54.4% SWE-bench run, SciCode 46.3%, AA Coding Index 33.3 and Vibe Code Bench 0.40% — competitive-programming and editing strength did not carry into end-to-end agentic coding.
- **Cost efficiency: 78/100.** $1.25/$10 per MTok ($2.50/$15 above 200K) sits between the methodology's ~$1.25/$4.25 ≈ 88 and ~$3/$15 ≈ 60 tiers, with a 90% cache discount and 129 tok/s throughput; measured $0.33 per AA Index task is competitive, but current models deliver far more per task.
- **Overall Score: 72/100.** Best-fit recommendation: a legacy flagship still worth running for math, vision and long-document retrieval at $1.25/$10 — pick Gemini 3.x or another current frontier model for agentic coding and tool use.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Google DeepMind Gemini 2.5 Pro model card + technical report + archived model page, Artificial Analysis, Vals AI, BenchLM, Dataconomy/TechBriefly AA tables, The Known Good); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.
