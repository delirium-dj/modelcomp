# Gemini 3 Pro — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemini-3-pro`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's Q4-2025 frontier flagship — the model that turned Google from a 2025 underdog into a first-in-class leader, topping GPQA Diamond, ARC-AGI-2, MMMU-Pro, LiveCodeBench Pro and Vending-Bench 2 at release. A "Deep Think" high-reasoning tier lifts several scores further. Since superseded by Gemini 3.1 Pro (Feb 2026), which Google states "significantly outperforms Gemini 3 Pro."
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI. OpenRouter `google/gemini-3-pro`.
- **Release / knowledge:** Previewed on LMArena, then generally available 2025-12-03 (per Vellum); knowledge cutoff not published.
- **IDs:** `google/gemini-3-pro` (plus a Deep Think reasoning tier).
- **Context window:** 1,000,000 tokens input; 65,536 (64K) tokens output.
- **Modalities:** natively multimodal — text + image + video in → text out; reasoning yes (standard + Deep Think); tool calls yes (function calling, code execution, long-horizon agentic tool use).
- **Pricing (as of 2026-10-20):** $2.00 / 1M input, $12.00 / 1M output for prompts ≤200K tokens; a premium tier applies above 200K tokens.
- **Architecture:** proprietary (closed weights); sparse MoE-class Google frontier model.

### Raw benchmarks found

Agent / tool use:

- Vending-Bench 2 (year-long simulated business, long-horizon planning + consistent tool use): **#1**, mean net worth **$5,478.16** — **272% higher than GPT-5.1**; praised for consistency (no off-task drift over the full simulation)
- ScreenSpot-Pro (UI screenshot grounding): high score (exact value not published in the accessible source)
- No OSWorld / Terminal-Bench / AutomationBench figures published in accessible sources

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (**93.8%** with Deep Think) — ~4-pt lead over GPT-5.1 (88.1%); SOTA, though the benchmark nears saturation
- ARC-AGI-2 (abstract visual puzzles): **31.1%** (**45.1%** with Deep Think) — a massive jump from Gemini 2.5 Pro (4.9%) and nearly 2x GPT-5.1 (17.6%)
- Humanity's Last Exam: **37.5%** (**40%+** with Deep Think) — ~11 pts over GPT-5.1; first 40%+ for a Gemini
- AIME 2025: **100%** with code execution (matches GPT-5.1), **95.0%** without tools; MathArena Apex: **>20x** jump (only model "somewhat capable," still far from solved)
- MMMLU (multilingual Q&A): **91.8%** (#1, ahead of GPT-5.1 91.0%); Global PIQA (commonsense, 100 languages): **93.4%**

Coding:

- SWE-bench Verified: **76.2%** — highly competitive with Claude Sonnet 4.5 (77.2%)
- LiveCodeBench Pro (Elo, algorithmic/competitive): **2,439** — a commanding ~200-pt lead over GPT-5.1 (2,243); best-in-class novel/efficient code generation

Multimodal:

- MMMU-Pro: **81.0%** — a significant 5-pt gap ahead of GPT-5.1 (76.0%)
- Video-MMMU: **87.6%** — strong dynamic/temporal video comprehension (analyzing video lectures, complex UI screenshots)

Long context:

- MRCR v2 (needle-in-a-haystack): **77.0%** at 128k average context length; at the full 1M span it outpaces Gemini 2.5 Pro by **9.9%**.

> Provenance: all figures from Google's reported launch benchmarks, compiled and analyzed by Vellum (2025-12-03) against GPT-5.1, Claude Sonnet 4.5 and Gemini 2.5 Pro; Deep Think values are the high-reasoning tier. Vendor-run, not independently audited.

### Normalized scores (1–100)

- **Tool use: 88/100.** #1 on Vending-Bench 2 with 272% higher net worth than GPT-5.1 (long-horizon planning + reliable tool use) and strong ScreenSpot-Pro UI grounding; capped because no OSWorld / Terminal-Bench / AutomationBench results are published to confirm desktop/CLI autonomy.
- **Reasoning: 93/100.** SOTA at release — GPQA Diamond 91.9% (93.8% Deep Think), ARC-AGI-2 45.1% Deep Think (nearly 2x GPT-5.1), HLE 40%+ Deep Think and AIME 100% w/tools; held just below the ceiling because GPQA nears saturation and HLE base (37.5%) is still modest in absolute terms.
- **Context window: 93/100.** A 1M-token window with verified retrieval (MRCR v2 77.0% at 128k, +9.9% over Gemini 2.5 Pro at 1M); discounted only by the 64K output cap.
- **Multimodal: 92/100.** MMMU-Pro 81.0% (+5 over GPT-5.1), Video-MMMU 87.6% and native text/image/video input with strong UI grounding — genuinely broad, SOTA-at-release multimodality; capped by the absence of an image/video generation path and no Chartography figure.
- **Coding: 89/100.** LiveCodeBench Pro Elo 2,439 (a ~200-pt algorithmic lead) with SWE-bench Verified 76.2%; capped because SWE-bench sits a hair below Claude Sonnet 4.5 (77.2%) and no deep-repo agentic SWE (DeepSWE/FrontierSWE) score is published.
- **Cost efficiency: 75/100.** $2/$12 is competitive for a frontier SOTA model (far below GPT-6 Astra's $10/$50), but it is a full-price Pro flagship with a premium >200K tier — not an efficiency play, and now superseded by cheaper 3.x Flash tiers.
- **Overall Score: 91/100.** Mean of Tool 88 + Reasoning 93 + Context 93 + Multimodal 92 + Coding 89 = 91.0 → 91. Best fit: reasoning-heavy, multimodal (video/UI) and long-context agentic workflows where SOTA-at-release quality matters; Gemini 3.1 Pro and the 3.x Flash tiers have since overtaken it on capability and cost respectively.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Vellum's Google Gemini 3 benchmark breakdown of Google's reported launch scores; pricing confirmed via jpthecat.com / Google Gemini API pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
