# Muse Spark 1.3 Free — findings by Grok 4.6

- Source: Meta (`muse-spark-1.3-contributor-free` on OpenCode Zen; same weights as `muse-spark-1.3`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free (Contributor Free)
- **Short description:** Meta Superintelligence Labs’ Muse Spark 1.3 weights on OpenCode Zen’s $0 Contributor Free ID. Same checkpoint as paid 1.3 / Contributor; difference is pricing, rate limits, and training-data consent. Long-horizon agentic coding + multimodal perception.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1`, OpenAI **Responses** API (`api: openai-responses`), model `muse-spark-1.3-contributor-free`. Meta Model API paid twins: `muse-spark-1.3-contributor` and `muse-spark-1.3`. Reasoning: minimal–xhigh (`max` is partner preview, not this Free ID).
- **Release / knowledge:** Muse Spark 1.3 announced **2026-09-02**; knowledge cutoff not published. Zen Free listing verified on Pi models catalog (cost $0).
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (Zen Free). Paid: `muse-spark-1.3-contributor`, `muse-spark-1.3`.
- **Context window:** 1,048,576 total / 131,072 max output (Pi / Zen calculator). Meta card states 1M context.
- **Modalities:** Text, image, video, PDF in; text out. Audio in is advertised on some catalogs but Meta/OpenRouter note **audio understanding is not fully supported** (quality may degrade). Tools, structured output, temperature.
- **Pricing (as of 2026-09-19):** Zen Free: **$0 / $0 / $0 cache**. Meta Contributor: **$0.10 / $0.20** (prompts/completions may train Meta). Standard: **$1.25 / $0.15 cached / $4.25**. Free tier is time/rate-limited; do not send confidential code.
- **Architecture:** Proprietary closed weights (Meta). Param count not disclosed. Free ID is a pricing/consent SKU, not a smaller model.

### Raw benchmarks found

> Benchmarks are for Muse Spark 1.3 weights (max / xhigh). Free SKU is not separately scored.

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (Meta max / BenchLM / BenchmarkList); AA **85%** xhigh / **86%** max.
- Tau3-Banking: **47%** xhigh / **52%** max (AA; max #1); BenchLM AA Tau3 **50.5%**.
- GDPval-AA v2: **1709 Elo** xhigh / **1754 Elo** max (AA / Meta / BenchLM).
- OSWorld 2.0: **66.9%** (BenchLM).
- AutomationBench: Meta Job/Automation **49.4–64.9%** (table mixed); AA AutomationBench **57.9%**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas: **no verified public score found**.
- SWE Atlas Codebase QnA: **59.4%** (Meta / BenchLM).

Reasoning / knowledge:

- GPQA Diamond: **94%** (AA +4 vs 1.2); LLMLearner **94.1%**; AA-GPQA **93.5%** (BenchLM).
- HLE: **47%** xhigh / ~**49%** max (AA +2); BenchLM AA-HLE **48.7%**.
- LCR / MLCR: AA-LCR **79%** (AA, −4 vs 1.2) vs BenchLM **83.0%**; MLCR-AA **41.1%**.
- CritPt: **26%** xhigh / ~**25%** max (AA); BenchLM **24.9%**.
- Artificial Analysis Intelligence Index: **61** xhigh / **62** max (AA article).
- Omniscience Accuracy / Hallucination Rate: AA Accuracy **42%** xhigh / **44%** max (article); BenchLM **43.6% / 32.9%** hallu.

Coding:

- SWE-bench Verified: **no verified public score found** (HokAI notes Meta does not publish it).
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **59%** xhigh (AA); **59.7%** (LLMLearner); **58.8%** (BenchLM).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE v1.1: **75.4%** (Meta max / BenchmarkList / BenchLM).
- AA Coding Index: **75.8%**; CursorBench 4.0 **41.6%**.

Long context:

- MRCR v2 8-needle: **98.5%** at 256K–512K; **98.1%** at 512K–1M (Meta / BenchmarkList / BenchLM). 1M window.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality dimensions; Cost excluded.

- **Tool use: 95/100.** TB2.1 85–88.8%, Tau3 47–52%, GDPval 1709–1754 sit on frontier TB ~88%+ / Tau3 ~50%+ / GDPval ~1750+. Caps: OSWorld 66.9%, missing Claw-Eval, AA vs Meta TB spread.
- **Reasoning: 92/100.** GPQA ~94% and HLE ~47–49% plus Index 61–62 meet frontier refs. Caps: CritPt ~25%, Omniscience accuracy ~42–44%, AA-LCR regression to 79% on the AA article.
- **Context window: 100/100.** 1M tokens and MRCR **98.1%** at 512K–1M meet ≥1M and ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Image + video + PDF in, text out maps to 75–90. Audio is catalogued but **not fully supported**, so not the 90–100 audio-in band.
- **Coding: 95/100.** DeepSWE 75.4% and SciCode ~59% exceed frontier DeepSWE 74%+ / SciCode 55%+; TB 88.8% and Coding Index 75.8% agree. Caps: no public SWE-Verified/LiveCode; CursorBench 41.6%.
- **Cost efficiency: 100/100.** Evaluated Zen Free ID is **$0** in/out/cache. Contributor $0.10/$0.20 and Standard $1.25/$4.25 are fallbacks after the promo; training-data caveat on Free/Contributor.
- **Overall Score: 93/100.** Mean of (95 + 92 + 100 + 85 + 95) / 5 = 93.4 → **93**. Best-fit: default free long-horizon coding/agent pick while the Zen $0 window lasts; do not use the Free ID for confidential code.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (Meta developer card, Artificial Analysis, BenchLM, BenchmarkList, Pi/Zen catalogs, OpenRouter Contributor notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
