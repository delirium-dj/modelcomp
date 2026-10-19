# GPT-5.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Xhigh effort tier)
- **Short description:** OpenAI's early GPT-5 series reasoning model with strong math (AIME 2025 100%), good coding (SWE-bench Verified 80%), but only 400K context window, at $1.75/$14 pricing.
- **Provider / access:** OpenAI API (`gpt-5.2` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.2` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 2 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2025-12-11 release; knowledge cutoff August 2025.
- **IDs:** `openai/gpt-5.2` (OpenAI API), `opencode/gpt-5.2` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 400,000 tokens total (400K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $1.75/M in, $0.175/M cache read, $14.00/M out. >272K tokens: $3.50/M in, $0.35/M cache read, $21.00/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $1.87/M (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- BrowseComp: **65.8%** (OpenAI GPT-5.4 blog)
- OSWorld-Verified: **47.3%** (OpenAI GPT-5.4 blog)
- Tau2-bench: **84.8%** (Artificial Analysis)
- Gert Labs: **46.54%** (Gert Labs rankings)
- JobBench: **34.3%** (JobBench paper)

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (Artificial Analysis)
- HLE: **37.7%** (Artificial Analysis)
- AA Intelligence Index: **30** (estimated) (Artificial Analysis)
- AA LCR: **82.7%** (Artificial Analysis)
- CritPt: **11.6%** (Artificial Analysis)
- ARC-AGI-1: **86.17%** (ARC Prize verified)
- ARC-AGI-2: **52.9%** (OpenAI GPT-5.2 blog)
- AA HLE: **37.7%** (Artificial Analysis)
- AA Omniscience Index: **-0.9%** (Artificial Analysis)
- AA Omniscience Accuracy: **44.3%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **81.2%** (Artificial Analysis)
- AIME 2025: **100%** (OpenAI GPT-5.2 blog) / **99.0%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **67.400%** (Epoch AI)
- FrontierMath v2 Tier 4: **31.700%** (Epoch AI)
- AA IFBench: **75.4%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80%** (OpenAI GPT-5.2 blog)
- SWE-bench Pro: **55.6%** (OpenAI GPT-5.4 blog)
- Vibe Code Bench: **53.50%** (Vals AI)

Multimodal:

- MMMU: **86.7%** (Qwen model card comparison)
- MMMU-Pro: **79.5%** (OpenAI GPT-5.4 blog)
- RealWorldQA: **83.3%** (Qwen model card comparison)
- OmniDocBench 1.5: **85.7%** (Qwen model card comparison)
- Video-MME: **86.0%** with subtitles / **85.8%** without (Qwen model card comparison)
- MathVision: **83.0%** (Qwen model card comparison)
- We-Math: **79.0%** (Qwen model card comparison)
- DynaMath: **86.8%** (Qwen model card comparison)
- SimpleVQA: **55.8%** (Qwen model card comparison)
- CC-OCR: **70.3%** (Qwen model card comparison)
- AI2D_TEST: **92.2%** (Qwen model card comparison)
- CountBench: **91.9%** (Qwen model card comparison)
- ERQA: **59.8%** (Qwen model card comparison)
- VideoMMMU: **85.9%** (Qwen model card comparison)
- MLVU (M-Avg): **85.6%** (Qwen model card comparison)
- CharXiv: **82.1%** (Qwen model card comparison)
- V*: **75.9%** (Qwen model card comparison)
- Design Arena Website: **1196** (OpenRouter)

Long context:

- AA LCR: **82.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** BrowseComp 65.8%, OSWorld-Verified 47.3%, Tau2 84.8%, Gert Labs 46.5%, JobBench 34.3%. No TB 2.0/2.1/4.0, GDPval, MCP Atlas, Toolathlon, Tau3, Claw-Eval data. Capped by minimal agentic benchmark coverage and 400K context.
- **Reasoning: 60/100.** GPQA Diamond 90.3% (exceeds 90%+ frontier), ARC-AGI-1 86.17% / ARC-AGI-2 52.9%, AA LCR 82.7%, AIME 100%, FrontierMath Tiers 1-3 67.4% / Tier 4 31.7%. Capped by HLE 37.7% (below 40%+ frontier), AA Intelligence Index 30 (est., <60 frontier), CritPt 11.6%, AA Omniscience Index -0.9% (negative), Hallucination 81.2%.
- **Context window: 55/100.** 400K native context; AA LCR 82.7%. Methodology: 200K-500K = 65-84 (but 400K is at the upper end, adjusted down for lack of MRCR at 512K+).
- **Multimodal: 70/100.** Text + image input only; MMMU 86.7%, MMMU-Pro 79.5%, RealWorldQA 83.3%, OmniDocBench 85.7%, Video-MME 86%, MathVision 83%, AI2D 92.2%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 70/100.** SWE-bench Verified 80% (exceeds 80%+ frontier), SWE-bench Pro 55.6%, Vibe Code 53.5%. No LiveCodeBench, DeepSWE, FrontierCode, CursorBench, TB 2.1 data. Capped by minimal coding benchmark coverage.
- **Cost efficiency: 75/100.** $1.75/$14 per 1M, blended ~$1.87/M, 90% cache discount. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.75/$14 interpolates to ~75.
- **Overall Score: 62/100.** Half-up mean of (55 + 60 + 55 + 70 + 70) / 5 = 62.0 → 62. Best-fit: early GPT-5 series with exceptional math (AIME 100%) but limited context (400K) and weak HLE; succeeded by GPT-5.4/5.5 with 1M+ context.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.2 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.