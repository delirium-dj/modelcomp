# MiMo V2.6 Flash — findings by Qwen 3.8 Flash

- Source: Xiaomi / MiMo V2.6 Flash (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — tech report arXiv-published 2026-10-08, OpenRouter input cut to $0.10, official specs confirmed; Cost 97 band unchanged, quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Flash
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active, Sept 2026) — 1M context, text/image/video/audio in, tuned for long-horizon agentic coding at mid-tier pricing, with a badly negative factuality index.
- **Provider / access:** Xiaomi API (`mimo-v2.6-flash`); no Zen free ID for this slug (the free tier lives in `mimo-v2.6-free/`). HF weights `XiaomiMiMo/MiMo-V2.6-Flash-RL`. Reasoning + tool calls.
- **Release / knowledge:** Sept 2026 (MiMo V2.6 technical report); knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-flash`.
- **Context window:** 1M total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, video, audio in; text out; reasoning on; tool calls. No non-text output.
- **Pricing (as of 2026-10-02):** Paid $0.14 / $0.28 per 1M (cached $0.0028); MIT open weights — self-hostable.
- **Architecture:** open-weights sparse MoE (309B total / 15B active), MIT license.

### Raw benchmarks found

> Independently verified against BenchLM (24 of 618 rows; 66.36/100, #28 of 645), citing the Xiaomi MiMo-V2.6 technical report (HF model card) and Artificial Analysis (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (tech report) — clears the ~88 frontier ref; TB 4.0 28.8%
- Toolathlon-Verified **73.6%**; OSWorld-Verified **80.8%**; JobBench 61.2%; CyberGym **95.1%**
- GDPval-AA normalized 55.0%; AutomationBench 52.3%; Agents' Last Exam 27.6%; ExploitGym 6.0%

Reasoning / knowledge:

- AA-HLE: **35.1%** — under the 40% bar; Intelligence Index **37.9**; AA-LCR 74.3; CritPt 12.0
- Omniscience Index **-12.7** / Accuracy 27.0% / Hallucination 54.4% — negative net score (guesses wrong more than abstains right)

Coding:

- Terminal-Bench 2.1 87.6%; DeepSWE **67.9%** (under 74 ref); AA-SciCode **51.3%** (under 55 ref)
- ProgramBench 26.0%; no SWE-bench/LiveCodeBench/Coding Index rows published

Multimodal / long context:

- AA-MMMU-Pro 73.1 — the only published visual row despite omnimodal input
- AA-LCR 74.3 at 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** Terminal-Bench 2.1 87.6%, Toolathlon-Verified 73.6%, OSWorld-Verified 80.8%, CyberGym 95.1% and GDPval normalized 55.0 are a frontier agentic cluster for a 15B-active model; TB 4.0 28.8%, ExploitGym 6.0% and ALE 27.6% hold it at the band floor.
- **Reasoning: 68/100.** AA-LCR 74.3 is decent long-context reasoning, but HLE 35.1% misses the 40% bar, Index 37.9 and CritPt 12.0 are mid, and a **-12.7 Omniscience index** (27.0% accuracy, 54.4% hallucination) is the worst factuality profile in this audit so far.
- **Context window: 95/100.** 1M-token window meets the ≥1M tier; AA-LCR 74.3 supportive; no ≥98% long-context retrieval metric published, so the band floor.
- **Multimodal: 90/100.** Text+image+video+audio in / text out puts it in the audio/video 90–100 band; the single visual row (MMMU-Pro 73.1) and absent audio/video benchmarks keep it at the floor.
- **Coding: 80/100.** Terminal-Bench 2.1 87.6% is strong agentic code, but DeepSWE 67.9% and SciCode 51.3% both sit under their refs and ProgramBench 26.0% is weak, with no SWE-bench/Coding Index rows to lift it.
- **Cost efficiency: 97/100.** $0.14 / $0.28 per 1M with $0.0028 cached input is all-but-free hosted pricing, and MIT weights allow self-hosting; no hosted free tier on this slug. Cost is excluded from Overall.
- **Overall Score: 85/100.** Mean of Tool 90, Reasoning 68, Context 95, Multimodal 90, Coding 80 = 84.6 → 85. Best fit: high-volume agentic coding and omnimodal ingestion at near-zero cost where every answer is grounded in retrieved context — never use it for unaided factual recall (-12.7 Omniscience); the Pro sibling trades some price for much cleaner reasoning.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Official report — https://arxiv.org/html/2610.11959v1 (**"MiMo-V2.6: Scaling Reinforcement Learning Towards Self-Evolution"**, submitted 2026-10-08 — the tech report pass 1 cited is now formally public) · specs — https://recipes.vllm.ai/XiaomiMiMo/MiMo-V2.6-Flash-RL (**"natively omnimodal (text, image, video, audio via a 681M-param MiMo ViT and audio encoders) and supports up to 1M tokens of context. Weights are [MIT]"**) and https://benchlm.ai/models/mimo-v2-6-flash (**"open weight model with a 1M context window"**, explicit reasoning mode) · pricing — https://openrouter.ai/xiaomi/mimo-v2.6-flash (**"$0.10 per million input tokens, $0.28 per million output tokens"** — input now under the captured $0.14) and https://mimo.mi.com/docs/price/pay-as-you-go (official: **mimo-v2.6-flash** cached tier **$0.0028**, matching pass 1) · family/promo — https://mimo.xiaomi.com/mimo-v2-6 (**"V2.6-Pro scores 46.32 on the Artificial Analysis Intelligence Index, surpassing Kimi K3 and Qwen3.8 Max"**, 2026-09-22 — Flash stays the budget sibling) and https://mimo.mi.com/docs/en-US/news/previous-news/first-week-free (limited-time **"free for a limited time"** Flash promo via an agent-framework partnership) · community — https://www.reddit.com/r/LocalLLaMA/comments/1wmnw89/ (card details: **"1M context, text/image/video/audio in, SWA/GA 39/9, MTP/DFlash"**) and https://forums.developer.nvidia.com/t/383938 (Flash-vs-Pro-vs-frontier comparison thread).

**What moved and how it was resolved:**

1. **Everything material about the artifact is now confirmed by primary sources.** The technical report went public on arXiv (2026-10-08), and the vLLM/Reddit-card coverage reprints the exact profile pass 1 scored — MIT weights, 309B/15B MoE, natively omnimodal (image/video/audio input through the MiMo ViT + audio encoders), 1M window. Multimodal 90 (band floor on one visual row) and Context 95 stand on verified architecture.
2. **Pricing moved further down; Cost 97 unaffected in band.** OpenRouter now routes input at **$0.10/M** (from $0.14 captured) with output unchanged at $0.28 and the official $0.0028 cached tier confirmed on Xiaomi's own price page — already all-but-free at pass 1, still all-but-free now; the limited-time "first week free" promos are campaign pricing, not a durable hosted free tier, so the 97 placement holds as written. Cost is excluded from Overall.
3. **The Pro sibling's headline (AA 46.32, "strongest open-source model") does not touch this report** — per the exact-ID rule those rows belong to `mimo-v2.6-pro/` (already second-passed this sweep). Flash remains "the best balance for high-frequency calls" in Xiaomi's own framing, consistent with its Tool 90 / Reasoning 68 split: frontier agentic per-active-parameter, deeply weak unaided factuality.
4. **The factuality flag and every scored row stand.** No second-pass source contradicts the **−12.7 Omniscience / 54.4% hallucination** profile (still the audit's worst), the HLE 35.1% miss, or TB 2.1 87.6% vs TB 4.0 28.8%. No retirement signal — the id launched 2026-09-21/22 and is current.

**Scores changed by this pass:** None. Tool 90, Reasoning 68, Context 95, Multimodal 90, Coding 80 → Overall = half-up mean(90, 68, 95, 90, 80) = 423/5 = 84.6 → **85, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Xiaomi MiMo-V2.6 technical report and Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (arXiv tech report, vLLM/BenchLM spec pages, OpenRouter + official Xiaomi price pages, vendor family/promo docs, community card threads); architecture and omnimodal/1M claims confirmed from primary sources, input price drop recorded inside the unchanged Cost 97, Pro-sibling rows kept in their own id, factuality flag uncontradicted — **no dimension changed and Overall remains 85**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
