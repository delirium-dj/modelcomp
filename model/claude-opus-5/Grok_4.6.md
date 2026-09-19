# Claude Opus 5 — findings by Grok 4.6

- Source: Anthropic (`claude-opus-5`; OpenCode Zen `opencode/claude-opus-5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic’s July 2026 Opus flagship for deep reasoning, long-horizon agents, computer use, and professional analysis. Successor to Opus 4.8; below Fable 5.1 on price, not a Free SKU.
- **Provider / access:** Anthropic Messages API `claude-opus-5` (thinking on by default; effort `low`–`max`, default `high`). Also Vertex/Bedrock/OpenRouter. Zen uses Anthropic Messages (`https://opencode.ai/zen/v1/messages`, GitHub issue confirms the ID).
- **Release / knowledge:** GA **2026-07-24** (DeepSWE issue / Tosea); knowledge cutoff **May 2026** (Anthropic docs).
- **IDs:** `anthropic/claude-opus-5`; Zen `claude-opus-5`. No Zen Free ID.
- **Context window:** 1M tokens / 128K max output (300K max output on Batch API beta). Docs table.
- **Modalities:** Text and images in → text out. Tools, structured outputs, prompt caching, computer use. No native audio/video in on the model page.
- **Pricing (as of 2026-09-19):** **$5 / $25** per 1M in/out; cache read **$0.50**; 5m/1h cache write **$6.25 / $10**; Batch 50% off. Fast mode **$10 / $50** (Claude API only). Paid.
- **Architecture:** Proprietary closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (NeuralCoreTech third-party Terminus 2, max); Vals **84.64%** high effort (81.27% if fallbacks counted as fail). BenchmarkList rank implies **89.1%** vs Gemini 3.8 Flash 89.4%.
- Tau3-Banking: **44.7%** (BenchmarkList); older AA snapshot **30.3%** (BenchLM July 2026).
- GDPval-AA v2: **1861 Elo** (Tosea / BenchmarkList rank 1/340).
- OSWorld 2.0: **70.6%**; OSWorld-Verified **83.4%** (Tosea / BenchmarkList).
- Toolathlon: **80.6%** Pass@1 (BenchmarkList); MCP Atlas **85.8%** (BenchLM).
- Claw-Eval / ClawProBench: **no verified public score found**.
- AutomationBench: **50.3%** (BenchmarkList).

Reasoning / knowledge:

- GPQA Diamond: **93.4%** (Vals / BenchmarkList); AA-GPQA **93.2%** (BenchLM).
- HLE: **56.3%** no tools / **64.7%** with tools (Tosea); HLE-Verified **54.4%**; AA-HLE **54.9%**.
- LCR / MLCR: Context Arena GDM-MRCRv2 average **77.3%**, AUC 128K **97.5%**, AUC 1M **45.7%** (BenchmarkList). OpenAI-style MRCR 512K–1M: **no verified public score found**.
- CritPt: **no verified public score found**.
- Artificial Analysis Intelligence Index: **61** max (Tosea); BenchmarkList **63.1**; BenchLM percent row **50.7%** — prefer 61/63.1 index points.
- Omniscience Accuracy / Hallucination Rate: **60.9% / 60.8%** (BenchLM).

Coding:

- SWE-bench Verified: **96.0%** (Anthropic system card, 5-trial avg, LLM Reference); Vals **97.0%**. SWE-bench Pro **79.2%**.
- LiveCodeBench: **89.0%** (Vals).
- SciCode / AA-SciCode: **56.4%** (BenchLM) / **55.7%** (BenchmarkList).
- Vibe Code Bench: **88.40%** (Vals).
- DeepSWE v1.1: **68.8%** (Anthropic, 5-trial max effort).
- AA Coding Index: **78.0%** (BenchLM).

Long context:

- 1M window; Context Arena 1M AUC **45.7%** / cumulative avg **74.7%** — **not** ≥98% at 512K+.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 84.6–89.1% and GDPval 1861 meet/exceed frontier TB ~88%+ and GDPval ~1750+. Caps: Tau3 30–45% vs ~50%+, missing Claw-Eval, Vals fallback caveat.
- **Reasoning: 94/100.** GPQA ~93% and HLE 54–65% plus Index ~61 meet frontier refs. Caps: Omniscience hallucination 60.8%, CritPt unpublished.
- **Context window: 95/100.** 1M is the ≥1M tier; 100 requires ≥98% retrieval at 512K+, which Context Arena 1M AUC 45.7% does not show.
- **Multimodal: 65/100.** Image in, text out maps to +image in = 60–70. No native audio/video in.
- **Coding: 88/100.** SWE-Verified 96–97%, LiveCode 89%, SciCode ~56%, Vibe 88% are frontier-adjacent; DeepSWE 68.8% under 74%+ caps a 90–100.
- **Cost efficiency: 48/100.** **$5 / $25** sits between methodology ~$3/$15 ≈60 and ~$10/$50 ≈30.
- **Overall Score: 87/100.** Mean of (92 + 94 + 95 + 65 + 88) / 5 = 86.8 → **87**. Best-fit: paid Opus default for SWE/knowledge-work Elo; Flash-class models are cheaper for omni input.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (Anthropic Opus 5 docs, BenchLM, BenchmarkList, Vals, Tosea, DeepSWE GitHub issue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
