# DeepSeek V4 Flash — findings by Qwen 3.8 27B

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 flash-reasoning variant tracked on aggregators)
- **Short description:** DeepSeek's fast, cheap V4-generation open-weights reasoning model (July 2026) with a 1M-token window; strong coding/math at flash prices. Vision capability exists only in the separate `deepseek-v4-flash-vision-exp` entry.
- **Provider / access:** OpenCode Zen `opencode/deepseek-v4-flash` on `https://opencode.ai/zen/v1/chat/completions` (verified in opencode.ai/docs/zen + Zen model list, 2026-09-28); DeepSeek API + open weights.
- **Release / knowledge:** 0731 checkpoint (July 31, 2026, per BenchLM variant id); knowledge cutoff not disclosed.
- **IDs:** `opencode/deepseek-v4-flash` (Zen, confirmed in Zen model list); `deepseek-v4-flash` (API). No Zen Free ID for this id — note a separate `deepseek-v4-flash-free` Zen id exists (distinct free offering, not this folder).
- **Context window:** 1M total (BenchLM, 2026-09-28).
- **Modalities:** text in / text out; reasoning yes (flash-reasoning variant); tool calls yes (MCP Atlas verified). Text-only — no image/audio in this variant.
- **Pricing (as of 2026-09-29):** $0.14 in / $0.28 out / $0.028 cached in per 1M (OpenCode Zen price table, 2026-09-28).
- **Architecture:** open weights (DeepSeek V4 Flash; exact param configuration not verified in this pass).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (BenchLM 2026-09-28; Vals 67.0%; TB2.0 56.9%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1189** (**46.3%** normalized) (BenchLM)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **47.8%** / Toolathlon-Verified **70.3%**; MCP Atlas **69%** (BenchLM)
- BrowseComp **73.2%**; HLE w/ tools **45.1%**; CyberGym **76.7%**; Agents' Last Exam **25.2%**; AutomationBench **25.1%**; AA Agentic Index **41.7%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (BenchLM; AA 90.8%, Vals 89.9%)
- HLE: **34.8%** (BenchLM; AA-HLE 38.6%)
- LCR / MLCR: LCR **79.7%**; MRCR 1M **78.7%**; CorpusQA 1M **60.5%** (BenchLM)
- CritPt: **16.6%** (BenchLM); ARC-AGI-1 **89.0%**; ARC-AGI-2 **61.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **34.3** / unranked (56 rows, no overall yet)
- Omniscience Accuracy / Hallucination Rate: **40.4% / 91.7%** (AA via BenchLM); MMLU-Pro **86.2%**; SimpleQA **34.1%**

Coding:

- SWE-bench Verified / SWE-Pro: **79% / 52.6%** (BenchLM; Vals SWE 88.8%, SWE Multilingual 73.3%)
- LiveCodeBench: **91.6%** Pass@1-COT (BenchLM; Vals 87.3%)
- SciCode / AA-SciCode: **50.3%** (BenchLM/AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **69.1%**; DeepSWE **54.4%**; DSBench-FullStack **68.7%**; DSBench-Hard **59.6%**; VulcanBench v3 **88.4%**; Codeforces rating **3052**; NL2Repo **54.2%**; OpenHarmony **53.8%** (BenchLM)

Long context:

- MRCR @1M **78.7%**; CorpusQA @1M **60.5%** (BenchLM)

Math:

- HMMT Feb 2026 **94.8%**; IMOAnswerBench **88.4%**; Apex **33.0%** / Apex Shortlist **85.7%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 82.7% near the 88%+ frontier band, Toolathlon-Verified 70.3% and MCP Atlas 69% solid, GDPval-AA 1189 above the mid band; capped by no Tau3/Claw-Eval and ALE 25.2%.
- **Reasoning: 72/100.** GPQA 88.1–90.8% at the frontier threshold, MRCR-1M 78.7% good; capped by HLE 34.8% (<40%), CritPt 16.6%, AA Index 34.3 (mid) and a 91.7% hallucination rate.
- **Context window: 95/100.** 1M window in the >=1M tier; measured MRCR-1M 78.7% is below the >=98% bar for a 100.
- **Multimodal: 15/100.** Text-only input for this variant (vision lives in the separate `deepseek-v4-flash-vision-exp`) → text-only floor tier.
- **Coding: 82/100.** SWE-bench 79%, LiveCodeBench 91.6% and SWE-Pro 52.6% strong with Coding Index 69.1 ≈ 70; capped by SciCode 50.3% and DeepSWE 54.4% below frontier refs.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M (Zen, 2026-09-28) sits just above the ~$0.10/$0.20 = 97–99 reference point.
- **Overall Score: 68/100.** (78 + 72 + 95 + 15 + 82) / 5 = 68.4 → 68. Best fit: cheap 1M-context coding/agent workhorse; text-only and hallucination-prone — verify key outputs.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (BenchLM, OpenCode Zen docs + price table + model list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
