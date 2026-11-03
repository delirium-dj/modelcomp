# Kimi K2.7 Code — findings by Mercury 3

- Source: Moonshot AI/Kimi K2.7 Code
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (queue slug `kimi-k2.7-code`; `kimi-k2.7-code-highspeed` is the same weights at 2× price — research belongs here)
- **Short description:** Moonshot AI's coding-focused agentic model built on Kimi K2.6 (released 2026-06-12): 1T total/32B active MoE, 256K context, image/video input (MoonViT), forces thinking + preserved thinking, ~30% fewer thinking tokens than K2.6; Modified MIT open weights.
- **Provider / access:** Kimi API (`kimi-k2.7-code`), Kimi Code CLI; open weights on Hugging Face; 68 providers per models.dev; highspeed variant 2× price.
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (HF; `kimi-k2.7-code` API; thinking forced, preserve_thinking on).
- **Context window:** 262,144 tokens (256K) total; max output 262,144 (models.dev).
- **Modalities:** text + image + video input, text output; reasoning (forced thinking); tool calls; coding-agent focus.
- **Pricing (as of 2026-11-03):** open weights (Modified MIT); API family rates (~$0.95/$4.00 class, unverified for this model).
- **Architecture:** 1T total / 32B active MoE (K2.6 architecture); Modified MIT, open weights.

### Raw benchmarks found

Coding (Moonshot card / independent):

- Kimi Code Bench v2: **62.0%**; ProgramBench: **53.6%**; MLS-Bench Lite: 35.1%; MCP Mark Verified: **81.1%**; DeepSWE: 30.53% (independent); LHTB solved: 3 (independent)

Agent / tool use:

- MCP Atlas: **76.0%**; Kimi Claw 24/7: 46.9%; τ²-bench: **90.1%** (AA); GDPval-AA: 1114 (26.9%); AA Agentic Index: 22.5%; TB2.1 (Vals): 67.0%; TB Hard: 44.7%

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA); HLE: **35.0%** (AA); AA-LCR: **79.3%**; CritPt: 10.0%; AA-IFBench: 63.1%; FrontierMath v2 Tiers 1–3 54.04%, Tier 4 12.20% (Epoch AI)

Coding (additional):

- CursorBench 3.2: 49.7%; AA-SciCode: 47.8%; OpenHarmony Bench: 52.1%; AA Coding Index: **60.8%**; LiveCodeBench: **82.1%** (Vals); SWE-bench: **78.2%** (Vals)

Long context:

- 256K window; AA-LCR 79.3%; no MRCR/GraphWalks figure verified.

Multimodal:

- image/video in (MoonViT); no dedicated vision benchmark rows verified (coding-focused card) — flagged.

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Mark Verified 81.1%, τ² 90.1%, MCP Atlas 76% — strong tool orchestration; capped by GDPval 26.9%, Agentic Index 22.5%, and TB Hard 44.7%.
- **Reasoning: 81/100.** GPQA 89.6%, LCR 79.3%, FrontierMath 54%; capped by HLE 35%, CritPt 10%, and IFBench 63.1%.
- **Context window: 72/100.** 256K (below the 1M class) with good LCR 79.3%.
- **Multimodal: 80/100.** Image/video input per architecture; no verified vision benchmark rows — capped by missing evidence.
- **Coding: 82/100.** Kimi Code Bench v2 62%, LCB 82.1%, SWE 78.2%, coding index 60.8%; capped by DeepSWE 30.53%, MLS 35.1%, and ProgramBench 53.6%.
- **Cost efficiency: 78/100.** Modified MIT open weights; API family rates (highspeed variant 2× flagged).
- **Overall Score: 79/100.** Mean of (80+81+72+80+82)/5 = 79.0 → 79. A strong open coding-agent; thin vision evidence and fringe agentic rows are the main caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Moonshot AI model card, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: highspeed is the same weights at 2× price (repo alias) — scored here.
- Reference URLs:
  - [Kimi K2.7 Code model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [Kimi K2.7 Code — BenchLM benchmark aggregation](https://benchlm.ai/models/kimi-k2-7-code)
  - [Kimi K2.7 Code — models.dev registry (68 providers)](https://models.dev/models/moonshotai/kimi-k2.7-code)
