# Claude Opus 4.5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-opus-4.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 (Non-reasoning)
- **Short description:** Anthropic's Opus-tier non-reasoning model with strong coding (SWE-bench Verified 80.9%), solid knowledge (MMLU-Pro 89.5%, GPQA 87%), and 200K context at $5/$25 premium pricing. Deprecated in favor of Opus 4.6.
- **Provider / access:** Anthropic API (`claude-opus-4.5`), OpenCode Zen (`opencode/claude-opus-4.5`), AWS Bedrock, Google Vertex AI (4 providers). Messages API.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff Aug 1, 2025.
- **IDs:** `claude-opus-4.5` (Anthropic API), `opencode/claude-opus-4.5` (OpenCode Zen). No Free tier.
- **Context window:** 200,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning no; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** $5.00/M in, $0.50/M cache read, $25.00/M out (Anthropic API & OpenCode Zen). Blended 7:2:1 ≈ $3.85/M (AA). Cost per Intelligence Index task: N/A (AA).
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Anthropic System Card)
- OSWorld-Verified: **66.3%** (Anthropic System Card)
- OSWorld: **66.3%** (Anthropic System Card)
- Claw-Eval: **59.6%** (Qwen3.6-Plus table)
- QwenClawBench: **52.3%** (Qwen3.6-Plus table)
- Tau3-bench: **70.2%** (Qwen3.6-Plus table)
- VITA-Bench: **23.3%** (VitaBench)
- DeepPlanning: **26.4%** (Qwen3.6-Plus table)
- Toolathlon: **43.5%** (Qwen3.6-Plus table)
- MCP Atlas: **42.3%** (Qwen3.6-Plus table)
- MCP-Tasks: **71.8%** (Qwen3.6-Plus table)
- WideResearch: **76.4%** (Qwen3.6-Plus table)
- CyberGym: **50.6%** (CyberGym leaderboard)
- Tau2-bench: **86.3%** (Artificial Analysis)
- Gert Labs: **64.23%** (Gert Labs)
- JobBench: **32.3%** (JobBench paper)

Reasoning / knowledge:

- GPQA: **87%** (Anthropic System Card)
- SuperGPQA: **70.6%** (Qwen3.6-Plus table)
- MMLU-Pro: **89.5%** (Qwen3.6-Plus) / **88.9%** (AA)
- MMLU-Redux: **96.6%** (Qwen3.6-Plus)
- C-Eval: **92.2%** (Qwen3.6-Plus)
- HLE: **30.8%** (Qwen3.6-Plus)
- AA Intelligence Index: **23.7%** est. (AA)
- AA GPQA Diamond: **81.0%** (AA)
- AA HLE: **13.2%** (AA)
- AA Omniscience Index: **-4.1%** (AA)
- AA Omniscience Accuracy: **40.9%** (AA)
- AA Omniscience Hallucination Rate: **76.2%** (AA)
- AIME26: **95.1%** (Qwen3.6-Plus)
- HMMT Feb 2025: **92.9%** (Qwen3.6-Plus)
- HMMT Nov 2025: **93.3%** (Qwen3.6-Plus)
- HMMT Feb 2026: **85.3%** (Qwen3.6-Plus)
- FrontierMath v2 Tiers 1-3: **34.386%** (Epoch AI)
- FrontierMath v2 Tier 4: **4.878%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.9%** (Anthropic System Card)
- LiveCodeBench v6: **84.8%** (Qwen3.6-Plus table)
- SWE-bench Pro: **57.1%** (Qwen3.6-Plus table)
- SWE Multilingual: **77.5%** (Qwen3.6-Plus table)
- NL2Repo: **43.2%** (Qwen3.6-Plus table)
- Terminal-Bench 2.0: **59.3%** (Anthropic System Card)

Multimodal:

- MMMU: **80.7%** (Qwen3.5-397B-A17B table)
- MMMU-Pro: **70.6%** (Qwen3.6-Plus) / **71.2%** (AA)
- RealWorldQA: **77.0%** (Qwen3.5-397B-A17B)
- OmniDocBench 1.5: **87.7%** (Qwen3.5-397B-A17B)
- Video-MME (w/ sub): **77.6%** / (w/o sub): **81.4%** (Qwen3.5-397B-A17B)
- MathVision: **74.3%** (Qwen3.6-Plus)
- We-Math: **70.0%** (Qwen3.5-397B-A17B)
- DynaMath: **79.7%** (Qwen3.5-397B-A17B)
- SimpleVQA: **65.7%** (Qwen3.5-397B-A17B)
- CharXiv: **68.5%** (Qwen3.6-Plus)
- CountBench: **90.6%** (Qwen3.5-397B-A17B)
- AI2D_TEST: **87.7%** (Qwen3.5-397B-A17B)
- ERQA: **46.8%** (Qwen3.5-397B-A17B)
- VideoMMMU: **84.4%** (Qwen3.6-Plus)
- MLVU (M-Avg): **81.7%** (Qwen3.5-397B-A17B)
- ScreenSpot Pro: **45.7%** (Qwen3.6-Plus)
- V*: **67.0%** (Qwen3.6-Plus)
- Design Arena Website: **1248 Elo** (OpenRouter)

Long context:

- LongBench v2: **64.4%** (Qwen3.6-Plus)
- AI-Needle: **74%** (Qwen3.6-Plus)
- AA LCR: **70.7%** (AA)
- CritPt: **0.3%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 62/100.** TB 2.0 59.3%, OSWorld 66.3%, Tau2 86.3%, Tau3 70.2%, MCP-Tasks 71.8%, WideResearch 76.4%. Capped by TB 2.0 (vs TB 2.1 frontier), Toolathlon 43.5%, MCP Atlas 42.3%, JobBench 32.3%, VITA-Bench 23.3%.
- **Reasoning: 65/100.** GPQA 87%, MMLU-Pro 89.5%, HMMT 92-95%, AIME26 95.1%, AA LCR 70.7%. Capped by HLE 30.8% (<40%+), FrontierMath Tiers 1-3 34.4%, Tier 4 4.9%, AA Intelligence Index 24 (<60), CritPt 0.3%, AA Omniscience Index -4.1%.
- **Context window: 70/100.** 200K native; AA LCR 70.7%. Methodology: 200K = 65-75.
- **Multimodal: 75/100.** Text + image; MMMU-Pro 70-71%, Video-MME 77-81%, VideoMMMU 84.4%, MLVU 81.7%, OmniDocBench 87.7%, RealWorldQA 77.0%. Strong video/document. No audio/PDF native.
- **Coding: 78/100.** SWE-bench Verified 80.9% (exceeds 80%+ frontier), LiveCodeBench v6 84.8%, SWE Multilingual 77.5%. Capped by SWE-bench Pro 57.1%, NL2Repo 43.2%, TB 2.0 59.3%.
- **Cost efficiency: 35/100.** $5/$25 per 1M, blended ~$3.85/M, 90% cache discount. Methodology: $5/$25 ≈ 35 (premium Opus tier).
- **Overall Score: 70/100.** Half-up mean of (62 + 65 + 70 + 75 + 78) / 5 = 70 → 70. Using six incl. cost: (62+65+70+75+78+35)/6 = 385/6 = 64.2 → 64. Model-queue says 82.8; discrepancy suggests queue weights coding/knowledge higher. Best-fit: strong knowledge/coding non-reasoning Opus at premium pricing; SWE-bench Verified 80.9% and MMLU-Pro 89.5% stand out; 200K context limits long-horizon.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Anthropic System Card), independent benchmark aggregators (BenchLM, Artificial Analysis, Epoch AI, OpenRouter, Qwen comparison tables, CyberGym, Gert Labs, JobBench, VitaBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.md`, using the same headings.