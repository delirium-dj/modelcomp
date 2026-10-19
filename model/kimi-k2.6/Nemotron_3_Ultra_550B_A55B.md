# Kimi K2.6 — findings by Nemotron 3 Ultra 550B A55B

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (Reasoning)
- **Short description:** Moonshot AI's open-weights MoE model (1T total / 32B active) with native video input, 256K context, strong coding (SWE-bench Verified 80.2%), and excellent math (AIME 96.4%), at $0.95/$4.00 pricing under Modified MIT license.
- **Provider / access:** Kimi Platform, OpenCode Zen (`opencode/kimi-k2.6` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`moonshotai/Kimi-K2.6`), 12 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-04-20 release; knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/Kimi-K2.6` (Hugging Face), `opencode/kimi-k2.6` (OpenCode Zen). Open weights available for self-hosting (Modified MIT license).
- **Context window:** 260,000 tokens total (256K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.95/M in, $4.00/M out (Kimi Platform / AA). 83% cache discount (AA). Blended 7:2:1 ≈ $0.70/M (AA). Cost per Intelligence Index task: $0.80 (AA).
- **Architecture:** MoE (Mixture of Experts), 1 trillion total parameters, 32 billion active parameters per token; open weights (Modified MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Moonshot AI tech blog)
- BrowseComp: **83.2%** (Moonshot AI tech blog)
- OSWorld-Verified: **73.1%** (Moonshot AI tech blog)
- Toolathlon: **50%** (Moonshot AI tech blog)
- MCP Atlas: **55.9%** (Moonshot AI model card)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard)
- DeepSearchQA: **92.5%** (Moonshot AI tech blog)
- WideResearch: **80.8%** (Moonshot AI model card)
- Tau2-bench: **95.9%** (Artificial Analysis)
- GDPval-AA v2: **1115 Elo** (Artificial Analysis) / **26.9%** normalized (Artificial Analysis)
- APEX-Agents: **28.5%** (Artificial Analysis)
- Gert Labs: **56.82%** (Gert Labs rankings)
- ResearchClawBench: **18.0%** (ResearchClawBench leaderboard)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- Terminal-Bench 2.1 (Vals): **53.6%** (Vals AI leaderboard)
- AA Agentic Index: **22.1%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot AI model card) / **89.1%** (Vals AI) / **91.1%** (Artificial Analysis)
- HLE: **34.7%** (Moonshot AI model card) / **37.5%** (Artificial Analysis)
- AA Intelligence Index: **27** (rank #26/121 open weights) (Artificial Analysis)
- AA LCR: **81.0%** (Artificial Analysis)
- CritPt: **8.0%** (Artificial Analysis)
- AA HLE: **37.5%** (Artificial Analysis)
- AA Omniscience Index: **5.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **32.6%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **40.5%** (Artificial Analysis)
- MMLU-Pro (Vals): **87.6%** (Vals AI)
- AIME 2026: **96.4%** (Moonshot AI model card)
- HMMT Feb 2026: **92.7%** (Moonshot AI model card)
- MMAnswerBench: **86.0%** (Moonshot AI model card)
- FrontierMath v2 Tiers 1-3: **57.193%** (Epoch AI)
- FrontierMath v2 Tier 4: **25.641%** (Epoch AI)
- AA IFBench: **76.0%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **80.2%** (Moonshot AI model card)
- LiveCodeBench v6: **89.6%** (Moonshot AI model card)
- LiveCodeBench (Vals): **86.8%** (Vals AI leaderboard)
- SWE-bench Pro: **58.6%** (Moonshot AI model card)
- SWE Multilingual: **76.7%** (Moonshot AI tech blog)
- SciCode: **52.2%** (Moonshot AI model card)
- Terminal-Bench 2.0: **66.7%** (Moonshot AI tech blog)
- Vibe Code Bench: **37.89%** (Vals AI)
- CursorBench 3.1: **47.6%** (Cursor evals)
- AA-SciCode: **51.5%** (Artificial Analysis)
- SWE-bench (Vals): **76.2%** (Vals AI leaderboard)
- AA Coding Index: **61.8%** (Artificial Analysis)

Multimodal:

- MMMU-Pro: **79.4%** (Moonshot AI model card) / **80.1%** with Python / **79.4%** (Artificial Analysis)
- CharXiv: **80.4%** (Moonshot AI model card)
- MathVision: **87.4%** (Moonshot AI model card)
- V*: **96.9%** (Moonshot AI tech blog)
- Design Arena Website: **1269** (OpenRouter)

Long context:

- AA LCR: **81.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** BrowseComp 83.2%, OSWorld-Verified 73.1%, Tau2 95.9%, DeepSearchQA 92.5%, WideResearch 80.8%, MCP Atlas 55.9%, Claw-Eval 62.3%, Toolathlon 50%. Capped by GDPval 1115 Elo (well below 1750+ frontier), OSWorld 2.0 4.6%, TB 2.1 Vals 53.6%, TB 2.0 66.7%, no TB 2.1/4.0 direct scores.
- **Reasoning: 60/100.** GPQA Diamond 90.5% (exceeds 90%+ frontier), AIME 96.4%, HMMT 92.7%, MMAnswerBench 86.0%, AA LCR 81.0%, AA IFBench 76.0%. Capped by HLE 34.7% (below 40%+ frontier), AA Intelligence Index 27 (<60 frontier), CritPt 8.0%, AA Omniscience Index 5.3%, FrontierMath Tier 4 25.6%.
- **Context window: 55/100.** 256K native context; AA LCR 81.0%. Methodology: 200K-500K = 65-84 (but 256K is at the lower end).
- **Multimodal: 75/100.** Text + image + video input; MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4%, V* 96.9%. Video input present → 75-90 band. No audio, PDF input. Methodology: +video/PDF in = 75-90.
- **Coding: 80/100.** SWE-bench Verified 80.2% (meets 80%+ frontier), LiveCodeBench 89.6% (Moonshot) / 86.8% (Vals), SWE Multilingual 76.7%, SWE-bench Pro 58.6%, SciCode 52.2% (near 55%+). Capped by no DeepSWE/LiveCodeBench/FrontierCode/CursorBench, Vibe Code 37.9%, AA Coding Index 61.8% (below 70%+).
- **Cost efficiency: 85/100.** $0.95/$4.00 per 1M, blended ~$0.70/M, 83% cache discount, cost/task $0.80. Methodology: ~$0.10/$0.20 = 97-99; $0.95/$4 is competitive for open weights → 85.
- **Overall Score: 67/100.** Half-up mean of (65 + 60 + 55 + 75 + 80) / 5 = 67.0 → 67. Best-fit: strong open-weights MoE for math and coding with native video; AIME 96.4% and SWE-bench Verified 80.2% are standout; limited context (256K) and weak HLE/GDPval hold it back.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Moonshot AI Kimi K2.6 blog, model card), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.