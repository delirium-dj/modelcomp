# Kimi K2.7 Code — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.7-code`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-specialized open-weights model with strong coding focus (Kimi Code Bench v2 62%), 256K context, at $0.95/$4.00 pricing under Modified MIT license.
- **Provider / access:** Kimi Platform, OpenCode Zen (`opencode/kimi-k2.7-code` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`moonshotai/Kimi-K2.7-Code`), 12 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-04-20 release (estimated, same as K2.6); knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (Hugging Face), `opencode/kimi-k2.7-code` (OpenCode Zen). Open weights available for self-hosting (Modified MIT license).
- **Context window:** 260,000 tokens total (256K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.95/M in, $4.00/M out (Kimi Platform / AA). 83% cache discount (AA). Blended 7:2:1 ≈ $0.70/M (AA). Cost per Intelligence Index task: $0.80 (AA).
- **Architecture:** MoE (Mixture of Experts); parameter count not explicitly disclosed but likely similar to K2.6 (1T total / 32B active); open weights (Modified MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Kimi Claw 24/7: **46.9%** (Moonshot AI model card)
- MCP Atlas: **76%** (Moonshot AI model card)
- MCP Mark Verified: **81.1%** (Moonshot AI model card)
- Tau2-bench: **90.1%** (Artificial Analysis)
- GDPval-AA v2: **1114 Elo** (Artificial Analysis) / **26.9%** normalized (Artificial Analysis)
- AA Agentic Index: **22.5%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **67.0%** (Vals AI leaderboard)

Reasoning / knowledge:

- AA Intelligence Index: **25.8%** (Artificial Analysis)
- AA GPQA Diamond: **89.6%** (Artificial Analysis)
- AA HLE: **35.0%** (Artificial Analysis)
- AA LCR: **79.3%** (Artificial Analysis)
- CritPt: **10.0%** (Artificial Analysis)
- AA Omniscience Index: **-10.2%** (Artificial Analysis)
- AA Omniscience Accuracy: **39.6%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **82.4%** (Artificial Analysis)
- AA IFBench: **63.1%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **54.035%** (Epoch AI)
- FrontierMath v2 Tier 4: **12.195%** (Epoch AI)

Coding:

- Kimi Code Bench v2: **62.0%** (Moonshot AI model card)
- ProgramBench: **53.6%** (Moonshot AI model card)
- MLS-Bench Lite: **35.1%** (Moonshot AI model card)
- CursorBench 3.2: **49.7%** (Cursor evals)
- AA-SciCode: **47.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.1%** (OpenHarmony Bench leaderboard)
- AA Coding Index: **60.8%** (Artificial Analysis)
- LiveCodeBench (Vals): **82.1%** (Vals AI leaderboard)
- SWE-bench (Vals): **78.2%** (Vals AI leaderboard)

Multimodal:

- Design Arena Website: **1265** (OpenRouter)

Long context:

- AA LCR: **79.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 60/100.** MCP Atlas 76%, MCP Mark 81.1%, Tau2 90.1%, TB 2.1 Vals 67.0%, GDPval 1114 Elo (well below 1750+ frontier), AA Agentic Index 22.5%. Capped by Kimi Claw 46.9%, no TB 2.0/4.0/OSWorld/MCP Atlas direct scores.
- **Reasoning: 55/100.** GPQA Diamond 89.6% (near 90%+ frontier), AA LCR 79.3%, AA IFBench 63.1%. Capped by AA Intelligence Index 25.8% (<60 frontier), HLE 35.0% (below 40%+ frontier), CritPt 10.0%, AA Omniscience Index -10.2% (negative), Hallucination 82.4%, FrontierMath Tier 4 12.2%.
- **Context window: 55/100.** 256K native context; AA LCR 79.3%. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 60/100.** Text + image input only; Design Arena 1265. No video, audio, PDF input reported. Methodology: +image in = 60-70.
- **Coding: 75/100.** LiveCodeBench 82.1% (Vals), SWE-bench 78.2% (Vals), AA Coding Index 60.8%, Kimi Code Bench 62.0%, ProgramBench 53.6%, CursorBench 3.2 49.7%. Capped by AA-SciCode 47.8% (below 55%+), MLS-Bench 35.1%, no SWE-bench Verified/Pro/DeepSWE/FrontierCode.
- **Cost efficiency: 85/100.** $0.95/$4.00 per 1M, blended ~$0.70/M, 83% cache discount, cost/task $0.80. Methodology: ~$0.10/$0.20 = 97-99; competitive open-weights pricing → 85.
- **Overall Score: 61/100.** Half-up mean of (60 + 55 + 55 + 60 + 75) / 5 = 61.0 → 61. Best-fit: coding-specialized open-weights model with strong LiveCodeBench/SWE-bench; reasoning depth (CritPt, Omniscience, FrontierMath) and context (256K) limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model card (Moonshot AI Hugging Face), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.