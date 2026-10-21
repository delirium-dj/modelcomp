# Cat Jam — findings by LongCat 2.5 Preview

- Source: OpenCode Zen/stealth (`cat-jam-free`) = Reflection Beam 1.0
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam
- **Short description:** The stealth label under which Reflection's Beam 1.0 (501B total / 23B active Apache-2.0 MoE) was served free on OpenCode Zen from 2026-10-12 to 2026-10-16, before being renamed to `beam-free`. Same weights as the tracked `model/beam/` entry; the benchmark figures below are Reflection's Beam 1.0 measurements.
- **Provider / access:** OpenCode Zen `opencode/cat-jam-free` (now deprecated, replaced by `opencode/beam-free`); also Vercel AI Gateway `stealth/cat-jam`; OpenRouter `stealth/cat-jam:free`. OpenAI-compatible Chat Completions + Responses, Anthropic-compatible Messages.
- **Release / knowledge:** Stealth window 2026-10-12 → 2026-10-16 (Beam 1.0 announced 2026-10-05, weights 2026-10-16); knowledge cutoff June 30, 2026.
- **IDs:** `cat-jam-free` (Zen, retired); `stealth/cat-jam` (Vercel/OpenRouter).
- **Context window:** 1,048,576 (1M); 131,072 max output.
- **Modalities:** text in / text out only. Reasoning (low→max efforts), function calling, structured outputs.
- **Pricing (as of 2026-10-21):** Free ($0/$0/$0) during the stealth window; successor `opencode/beam-free` still free. Weights Apache 2.0 (self-host $0). Note: ZDR not available — prompts may be retained for safety.
- **Architecture:** sparse MoE, 501.3B total / 23.4B active, 52 layers (3 dense + 49 MoE), Gated GQA + sliding-window attention, 256 experts, 152k vocab; Apache 2.0.

### Raw benchmarks found

> Measured for Beam 1.0 (BF16) by Reflection — the same weights Cat Jam served.
> No independent benchmarks exist under the `cat-jam` name (Artificial Analysis:
> "not yet scored").

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (Beam 1.0 model card, BF16)
- Tau3-Bench banking: **38.0%**; MCP Atlas: **78.7%**
- BrowseComp (context mgmt): **77.4%**; DeepSearchQA (context mgmt): **80.1%**
- AutomationBench (public): **37.0%**
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (Beam 1.0 model card)
- HLE (no tools): **36.0%** / HLE (with tools): **51.1%**
- AIME 2026: **97.7%**; SciCode: **49.2%**; CritPt (AA): **16.3%**
- AA-LCR: **79.3%**; LongBench v2: **65.5%**; IFBench: **79.7%**
- AA Omniscience index (public split): **13.0**

Coding:

- SWE-bench Verified: **81.6%** (Beam 1.0 BF16; FP8 80.2, NVFP4 80.7)
- SWE-bench Multilingual: **78.3%**; SWE-bench Pro v1: **66.1%**; SWE-bench Pro v2-Hard: **76.5%**
- DeepSWE v1.1: **43.3%**; SWE Atlas Codebase QnA: **31.8%**

Multimodal:

- None — text-in / text-out model.

Long context:

- AA-LCR: **79.3%**; LongBench v2: **65.5%**; 1M-token context window.

### Normalized scores (1–100)

- **Tool use: 83/100.** Terminal-Bench 2.1 80.1% is near the 85%+ frontier reference, with MCP Atlas 78.7%, BrowseComp 77.4% and DeepSearchQA 80.1%; capped by AutomationBench 37.0% and τ³-banking 38.0%.
- **Reasoning: 82/100.** GPQA 90.6% clears the 90% frontier anchor, AIME 2026 97.7% is top-tier, and HLE 36.0% (51.1% with tools) is strong; SciCode 49.2% and CritPt 16.3% hold it just below the leaders.
- **Context window: 88/100.** 1M-token window qualifies for the ≥1M tier (95–100); no measured RULER/MRCR retrieval at full window, so it stays below the top of the band (AA-LCR 79.3% is the proxy).
- **Multimodal: 15/100.** Text-only input and output — fixed at 15 per the methodology's text-only band (10–20).
- **Coding: 83/100.** SWE-bench Verified 81.6%, SWE-bench Multilingual 78.3% and SWE-bench Pro v2-Hard 76.5% are near-frontier; capped by DeepSWE v1.1 43.3% and SWE Atlas Codebase QnA 31.8%.
- **Cost efficiency: 100/100.** Free $0/$0/$0 during the stealth window (and still free as `beam-free`), with Apache-2.0 weights for self-hosting — the methodology's $0 = 100 anchor (free tier flagged as limited-time, non-ZDR).
- **Overall Score: 70/100.** Half-up mean of Tool use (83), Reasoning (82), Context window (88), Multimodal (15), Coding (83) = 351/5 = 70.2 → 70. Best fit: a frontier-class open agentic coder available free; the text-only multimodal floor caps its Overall.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (OpenCode Zen docs + X announcements, Vercel AI Gateway model/changelog, Command Code model page, Hugging Face `reflection/Beam-1.0-501B-A23B` card, ReflectionBeam/beammodel benchmark pages, NeoTeo, Sesame Disk); scores are normalized 1–100 interpretations, not official vendor scores. Cat Jam is the same weights as Beam 1.0 — figures are labelled as Beam 1.0 measurements.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
