# Hy3 — findings by DeepSeek 4.1 Flash 1017

- Source: Tencent (`hy3`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan 3)
- **Short description:** Tencent's open-weights mixture-of-experts reasoning model, aimed at long-document text reasoning and cheap high-throughput serving rather than multimodal work.
- **Provider / access:** Served by DeepInfra, GMI, Novita and SiliconFlow (Artificial Analysis provider list); weights on Hugging Face as `tencent/Hy3`.
- **Release / knowledge:** Released 6 July 2026 (Artificial Analysis FAQ); knowledge cutoff not stated on the fetched page.
- **IDs:** `tencent/Hy3`
- **Context window:** 256K tokens (Artificial Analysis technical specifications table).
- **Modalities:** text in → text out; reasoning yes (extended thinking); no image/audio/video input; tool-call support not stated on the fetched page.
- **Pricing (as of 2026-11-14):** $0.14 per 1M input, $0.55 per 1M output, 75% cache discount; blended (7:2:1 cache hit/input/output) $0.11 per 1M (median across 4 providers).
- **Architecture:** 299B total parameters, 21B active (MoE), Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **not published (N/A)** — the AA model page lists no Intelligence Index value for Hy3 and states "No publicly available API" over the index chart (AA Intelligence Index v5.0.1 harness)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: no verified public score found

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: no verified public score found
- HLE-Diamond: no verified public score found
- CritPt v2 (Hard Subset): no verified public score found

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: no verified public score found
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- 256K token context window; no long-context retrieval figure reported on the fetched page.

### Normalized scores (1–100)

- **Tool use: 52/100.** No published Intelligence Index for Hy3, so only the weaker family datapoint on the same page applies (Tencent Hy4 tops out at index 35, i.e. the mid band) — an unbenchmarked 299B/21B MoE generation below that is scored into the weak-to-low-mid band.
- **Reasoning: 55/100.** No HLE-Diamond, CritPt v2 or Omniscience result exists for Hy3; the score is capped by the absence of any measured reasoning benchmark and by the family's own index ceiling of ~35.
- **Context window: 72/100.** 256K tokens lands in the 200K–500K tier (65–84), slightly above the 200K = 70 anchor.
- **Multimodal: 15/100.** Text-only input and text-only output per the AA technical specifications; AA's FAQ explicitly states the model is not multimodal.
- **Coding: 48/100.** No FrontierCode-AA 2.0, Terminal-Bench 4.0 or SWE-bench figure is published, so the dimension is capped in the "no coding evidence" band rather than credited with vendor claims.
- **Cost efficiency: 95/100.** $0.14 in / $0.55 out (blended $0.11) sits between the ~$0.10/$0.20 and ~$0.60/$2.20 anchors — very cheap for a 299B MoE, with the caveat that 44.55s time-to-first-answer-token makes it latency-heavy.
- **Overall Score: 48/100.** Mean of 52, 55, 72, 15, 48 = 48.4 → 48; best fit is high-volume, budget text processing and long-document summarisation where multimodality is not needed.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` of the Artificial Analysis model page (web search returned HTTP 402, so the direct-fetch fallback was used); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Hy3: Intelligence, Performance & Price Analysis — Artificial Analysis](https://artificialanalysis.ai/models/hy3)
