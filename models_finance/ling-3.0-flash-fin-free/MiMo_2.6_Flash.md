# Ling 3.0 Flash Fin Free — findings by Mimo v2.6 Flash

- Source: Ant Group / InclusionAI /`opencode/ling-3-0-flash-fin-free` (Ling-3.0-flash-Fin)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free (Zen free tier of Ling-3.0-flash-Fin)
- **Short description:** First finance-enhanced Ant Ling model (HF 2026-09-03, MIT) — Ling-3.0-flash continued-trained on institutional financial data; 124B/5.1B-active MoE, 256K, source-grounded research + spreadsheets; **OpenCode Zen Free promo tier** (limited-time) plus paid DeepInfra ~$0.06/$0.18.
- **Provider / access:** OpenCode Zen `opencode/ling-3-0-flash-fin-free` (**Free** — limited-time Vercel/Zen promo, meta); HF `inclusionAI/Ling-3.0-flash-Fin` (+fp8/fp4); DeepInfra/InclusionAI API; SGLang/vLLM.
- **Release / knowledge:** Ling-3.0-flash-Fin **2026-09-03** (HF/AI TLDR); AA writeup 2026-09-16; announced late Aug 2026 (Oppper). Knowledge cutoff not published.
- **IDs:** `opencode/ling-3-0-flash-fin-free` (Zen free); base weights `inclusionAI/Ling-3.0-flash-Fin`.
- **Context window:** **262,144** (256K marketed) / **32K** out (meta; DeepInfra 262.1K).
- **Modalities:** **text only** in/out (meta); thinking on by default; tool calls yes; structured spreadsheet/report workflows.
- **Pricing (as of 2026-09-22):** **Free** Zen tier (meta promo); DeepInfra **$0.06 in / $0.01 cache / $0.18 out per 1M** (LLM Stats/Opper).
- **Architecture:** MoE **124B total / 5.1B active** (same shape as Ling-3.0-flash); finance continued-pretraining; MIT open weights.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). AA article + HF quant tables + Oppper/LLM Stats composites + inclusionAI qualitative chart (FinFIRST etc. — chart image, not transcribed).

Agent / tool use:

- GDPval-AA v2: **1171 Elo** (AA — ~50 behind Ling-3.0-flash-VL 1225; above MiniMax-M2.7's 1087 on AA's panel)
- AA-Briefcase: **967 Elo** (AA; VL 986)
- AutomationBench-AA: **7%** (AA; VL 16%)
- Terminal-Bench v4.0: **0%** (AA — terminal agentic tasks fail hard)
- τ³-Banking / FinFIRST / FinSearchComp / Finance Agent / APEX-Agents: evaluated by inclusionAI (chart only — **exact % not transcribed** in extracts); SpreadsheetBench via allthemodels **SpreadSheetBench-v1: 0.86** (86%)
- MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23** (AA — matches MiniMax-M2.7 at ~half active params)
- AA Finance & Accounting Index: **24** (AA — ties Ling-3.0-flash-VL)
- GPQA-Diamond: **86.30** BF16 (HF fp quant table; 85.26 FP8)
- Humanity's Last Exam: **23%** (Oppper/AA composite)
- Long-context reasoning (AA-LCR proxy): **74%** / non-hallucination row **42%** (Oppper panel — cite as AA composite rows)
- Business knowledge accuracy **17%** / non-hallucination **67%** (AA — vs VL 11%/81%; more accurate but more hallucinating)

Coding:

- AA Coding Index: **55.6** (Oppper)
- SciCode: **41.84** BF16 (HF; 42.70 FP8)
- FSC-verified: **78.28** BF16 (HF)
- FinCRAFT: **54.23** BF16 (HF; finance valuation)
- SWE-Verified / LiveCodeBench / DeepSWE: no verified public score found for Fin

Long context:

- **256K/262K** window; AA-LCR **74%** (Oppper/AA panel) — decent mid long-context quality

Multimodal:

- **Text-only** (AA: "This text-only model"; meta) — sibling VL model has image/video; **Fin does not** — template: 15

### Normalized scores (1–100)

- **Tool use: 65/100.** SpreadsheetBench 0.86 and GDPval 1171 are strong **office/finance** tool rows; AutomationBench 7% and **TB v4.0 0%** show terminal/workflow guardrail work is weak — finance tools strong, general agents weak.
- **Reasoning: 70/100.** GPQA 86.3 solid; AA Intelligence Index **23** and HLE 23% place it mid-low on 2026 general boards; Finance Index 24 is the differentiator (domain reasoning up, breadth capped).
- **Context window: 74/100.** 256K in the 200–500K tier (~74); 32K out a mild cap; LCR ~74% is healthy for the price class.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 65/100.** AA Coding Index 55.6 and SciCode ~42 are respectable mid coding; no SWE-Verified/DeepSWE rows; finance valuation (FinCRAFT 54) is the real specialty, not general SWE.
- **Cost efficiency: 100/100.** **Free Zen tier** (meta) + MIT weights + $0.06/$0.18 paid floor + 5.1B active → maximum cost score.
- **Overall Score: 58/100.** Mean of five quality dims (65+70+74+15+65)/5 = 57.8 → 58. Best-fit: **free** finance research, filings reconciliation, and spreadsheet pipelines on Zen — not a terminal/OSWorld agent and not multimodal (use Ling-3.0-flash-VL for vision).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (HF inclusionAI/Ling-3.0-flash-Fin + quant cards, artificialanalysis.ai Fin release article, opper.ai/llm-stats pricing & composites, ai-tldr.dev release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
