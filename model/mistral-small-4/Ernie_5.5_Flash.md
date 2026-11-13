# Mistral Small 4 — findings by Ernie 5.5 Flash

- Source: Mistral AI/Mistral Small 4 (`mistral-small-4`, API id `mistral-small-2603`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's unified hybrid model (released 2026-03-16) that folds Magistral-style reasoning, Pixtral-style multimodality and Devstral-style agentic coding into one efficient Apache 2.0 MoE — 119B total / 6.5B active, 256K context, configurable reasoning effort.
- **Provider / access:** Mistral API / AI Studio (`mistral-small-2603`), open weights `mistralai/Mistral-Small-4-119B-2603` on Hugging Face (Apache 2.0), NVIDIA NIM / build.nvidia.com, vLLM / SGLang / llama.cpp / transformers; ~14 gateway routes.
- **Release / knowledge:** 2026-03-16; knowledge cutoff 2025-06.
- **IDs:** `mistral-small-4` (dataset), `mistral-small-2603` (API), `mistralai/Mistral-Small-4-119B-2603` (HF).
- **Context window:** 262,144 tokens (256K); max output 256,000.
- **Modalities:** text and image in; text out; function calling, structured outputs, document QnA, predicted outputs, batching; reasoning (`reasoning_effort` none/high).
- **Pricing (as of 2026-11-13):** $0.15 in / $0.60 out per 1M; cache read $0.015 (90% discount).
- **Architecture:** MoE, 128 experts with 4 active + shared (119B total / 6.5B active per token, 8B incl. embeddings), 256K context; Apache 2.0.

### Raw benchmarks found

> Independent tracker rows (BenchmarkList / Artificial Analysis leaderboards, sampled Jul–Nov 2026) — first per-benchmark evidence for this ID. Vendor launch claims: 40% lower completion time and 3× throughput vs Mistral Small 3, AA-LCR 0.72 at 1.6K chars (vs Qwen 5.8–6.1K).

Agent / tool use:

- GDPval-AA: **862 Elo** (rank 145/359, 60th pct)
- Terminal-Bench Hard: **10.6%** (154/326, 53rd pct); Terminal-Bench 2.1: **21.0%** (134/198, 32nd pct); TB 2.0: **16.9%**
- Tau2-Bench Telecom: **18.4%** (271/337, 20th pct); Tau3-Banking: **5.2%** (153/185, 17th pct)
- PinchBench: **76.8%** (55/76, 28th pct); ClawProBench: **45.26** (43/48, 11th pct); AA-Briefcase: **241 Elo** (21st pct); AutoBench: **2.69** (19th pct); CorpBench Work 1.3: **74.8** (33rd pct)
- ContractBench: **42.4%** (13/21, 40th pct)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **19.56** (rank 163/325, 50th pct; reasoning-mode AA page shows 4 with the v5.0.1 rescale — the 19.56 row is the older index)
- GPQA Diamond: **76.9%** (167/481, 65th pct)
- Humanity's Last Exam: **9.9%** (216/491, 56th pct); CritPt: **0.3%**
- AA-Omniscience: **−29.9 points**; ObviousBench pass³: **37.5%** (4th pct); Altered Riddles: **0.3487**
- Context Arena (MRCR v2): **25.4%** avg (9th pct) / 14.0% (6th pct)

Coding:

- SciCode: **38.8%** (142/312, 55th pct); BLXBench: **75.2%** (67th pct); SAKE: **92.5%** zero-shot (30th pct)
- ALE-Bench: **497.63** (24th pct); Vibe Code Bench v1.1: **0.0%** (76/76 — last place); Terminal-Bench rows above

Long context:

- AA-LCR: **49.7%** (218/425, 49th pct); Context Arena AUC 128K 16.1%, AUC 1M 2.3%

### Normalized scores (1–100)

- **Tool use: 45/100.** Terminal-Bench Hard 10.6%, Tau2-Telecom 18.4%, Tau3-Banking 5.2%, AA-Briefcase 241 Elo — the agentic rows are bottom-quartile across the board. CorpBench 74.8 and PinchBench 76.8% are the only mid-pack results. This is the model's weakest dimension.
- **Reasoning: 55/100.** GPQA 76.9% is respectable for an open 6.5B-active model, but HLE 9.9%, CritPt 0.3%, ObviousBench 37.5% and AA-Omniscience −29.9 show the efficiency trade-off. Mid-band.
- **Context window: 88/100.** 256K with AA-LCR 49.7% — tier 200K–500K high band; the MRCR numbers (25.4% avg) are weak, which keeps it from the top of the band.
- **Multimodal: 60/100.** Native image in (Pixtral-lineage) with IDP Leaderboard 71.5 (52nd pct: OmniDocBench 76.4, IDP VQA 77.9); no MMMU/MathVista row published.
- **Coding: 40/100.** SciCode 38.8%, TB 2.1 21.0%, ALE-Bench 497.6 and a 0.0% Vibe Code Bench (dead last of 76) — the "Devstral-style agentic coding" claim is not borne out by the independent rows. Capped by Vibe Code Bench.
- **Cost efficiency: 98/100.** $0.15/$0.60 per 1M with Apache 2.0 weights and $0.0399 per AA Index task — extremely cheap.
- **Overall Score: 57.6/100.** Best fit for high-volume, latency-sensitive, self-hosted chat/extraction/document work where cost per token dominates; the agentic and coding rows show it is not a frontier agent despite the unified-capability marketing.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (BenchmarkList model record with 27 benchmark rows, Artificial Analysis model page, Mistral launch post and model card, Mistral docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral: Mistral Small 4 — BenchmarkList (27 benchmark rows)](https://benchmarklist.com/models/mistralai-mistral-small-2603/)
  - [Mistral Small 4 (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/mistral-small-4)
  - [Introducing Mistral Small 4 — Mistral AI](https://mistral.ai/news/mistral-small-4)
  - [Mistral Small 4 — Mistral docs model card](https://docs.mistral.ai/models/model-cards/mistral-small-4-0-26-03)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.