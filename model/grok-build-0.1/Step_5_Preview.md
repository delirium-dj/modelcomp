# Grok Build 0.1 — findings by Step 5 Preview

- Source: xAI / Grok Build 0.1 (`x-ai/grok-build-0.1-20260520`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (endpoint `x-ai/grok-build-0.1-20260520`)
- **Short description:** xAI's May 2026 fast coding beta — a 256K-context, agentic-software-engineering-tuned model with tool/structured-output support at $1.00/$2.00 per 1M (cache $0.20); benched at 95.0% coding (90th pct) and 96.0% reasoning, deprecated for Grok 4.5 and later.
- **Provider / access:** xAI API (versioned endpoint `x-ai/grok-build-0.1-20260520`), OpenRouter, OpenCode Zen (`opencode/grok-build-0.1`); Chat Completions API; tools, structured outputs, reasoning, response format, logprobs.
- **Release / knowledge:** released 2026-05-20 (benchable endpoint record, ULTRABENCH OpenRouter listing date); knowledge cutoff not published; superseded/deprecated for Grok 4.5+ (folder meta).
- **IDs:** `x-ai/grok-build-0.1-20260520` (versioned xAI route), `opencode/grok-build-0.1` (Zen).
- **Context window:** 256,000 total (benchable, ULTRABENCH); 230,400 max output (folder meta).
- **Modalities:** text, image, file in; text out (benchable); reasoning; tool calling.
- **Pricing (as of 2026-10-21):** $1.00/$2.00 per 1M in/out with $0.20 cache read (benchable, ULTRABENCH); a $2/$4 xAI route also exists on benchable's endpoint list; web-search tool calls billed separately.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

Benchable benchmark battery + ULTRABENCH index (both checked 2026-10-20/21):

Agent / tool use:

- Tool calling / structured outputs / reasoning: supported per benchable's parameter list
- Terminal-Bench 2.1: the folder's curated record carries **52.06%** (Artificial Analysis) — **not re-verified in this pass**; no Terminal-Bench row found in my sources, so no verified public score found here
- Tau2 / Tau3 / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Reasoning: **96.0%** (benchable battery — unnamed harness)
- General Knowledge: **99.5%** (benchable battery)
- Mathematics: **93.0%** (benchable battery)
- Hallucinations: **100%** ("most accurate model at its price point and speed") and Ethics: **100%** (benchable battery — self-reported category ratings)
- ULTRABENCH intelligence index: **69.5** (ULTRABENCH; sources cited: OpenRouter listing, GPQA Diamond via Artificial Analysis, LiveBench — values for those two not shown)
- GPQA Diamond / HLE / MMLU-Pro / AA Intelligence Index: no verified public score found in this pass

Coding:

- Coding: **95.0%** accuracy, 90th percentile (benchable battery — unnamed harness)
- Reliability: **100%** success rate across all benchmarks (benchable)
- Instruction Following: **60.0%**, 53rd percentile (benchable battery — a named weakness)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 256K window with 230,400 max output; no MRCR/RULER/GraphWalks/LCR retrieval-at-length figure published.

Speed (context): benchable's speed percentile is 33rd — "moderate speed performance"; the folder's "100+ tok/s" claim is not re-verified here.

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling, structured outputs and reasoning parameters are fully supported and the benchable battery's 100% reliability (no failed/invalid responses) is a genuine agentic-quality signal; capped by no Terminal-Bench/Tau/GDPval/OSWorld numbers in any harness — the folder's TB 2.1 52.06% is the only agentic-terminal hint and could not be re-verified.
- **Reasoning: 84/100.** The benchable battery puts Reasoning at 96.0% and General Knowledge at 99.5% with Mathematics 93.0%, and ULTRABENCH's composite intelligence index reads 69.5; capped by the unnamed-harness provenance, the low 60.0% Instruction Following and no published GPQA/HLE/Index values from named evaluations.
- **Context window: 78/100.** 256K with a very generous 230,400 max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); no retrieval-at-length measurement exists.
- **Multimodal: 68/100.** Text + image (and file) in with text out (image-in tier 60–70); no MMMU-class score published and no video/audio input or non-text output.
- **Coding: 82/100.** Benchable's 95.0% coding accuracy at the 90th percentile — the model's designed purpose (agentic SE workflows) with full tool/structured-output support; capped by the unnamed benchmark provenance, the 60.0% instruction-following weak spot and zero SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 85/100.** $1.00/$2.00 with $0.20 cache sits near the ~$1.25/$4.25 ≈ 88 reference band on the cheaper side for output; the separate $2/$4 route is materially worse value.
- **Overall Score: 77/100.** Mean of (72 + 84 + 78 + 68 + 82) / 5 = 76.8 → 77. Best fit: cheap interactive agentic coding at the $1/$2 rate with a huge output budget — a deprecated beta, so new work belongs on Grok 4.5+.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Benchable model record with its benchmark battery and endpoint price history, ULTRABENCH index, ai-toolbox lineup record); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
