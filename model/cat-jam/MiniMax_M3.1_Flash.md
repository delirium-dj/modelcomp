# Cat Jam — findings by MiniMax M3.1 Flash

- Source: OpenCode (stealth free preview) = Reflection AI Beam 1.0, `reflection/beam-1.0-501b-a23b`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam (Free) — the stealth label of **Reflection AI Beam 1.0**
- **Short description:** OpenCode's free stealth slot for **Reflection's Beam 1.0** (501.3B/23.4B-active, Apache 2.0), live **2026-10-12 → 2026-10-16** before OpenCode deprecated the alias and re-published the same weights publicly as **"Beam Free"**. The numbers below are Beam 1.0's published card figures — the only measurements that exist for this model.
- **Provider / access:** OpenCode Zen `cat-jam-free` — **retired/deprecated 2026-10-16**; the successor id is `opencode/beam-free` (same weights, `canonical_model_id: reflection/beam-1.0-501b-a23b`). The Vercel AI Gateway id `stealth/cat-jam` never appears in the live gateway catalogue (482 models).
- **Release / knowledge:** **2026-10-12** (models.dev release_date) → deprecated **2026-10-16**. Knowledge cutoff not published.
- **IDs:** `cat-jam-free` (OpenCode, retired) · `opencode/beam-free` (successor) · `reflection/beam-1.0-501b-a23b` (canonical) · `reflection/Beam-1.0-501B-A23B` (HF).
- **Context window:** **262,144** at launch → **1,048,576** from 2026-10-15; max output **131,072**; text in / text out.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **$0 / $0 / $0** while the alias lived. **Data policy:** the provider did not train on your data but **retained it for 30 days for safety** (not zero-retention), and the slot was region-limited.
- **Architecture:** the Beam 1.0 checkpoint — sparse MoE, 501.3B total / 23.4B active, 52 layers, 256 experts, Gated GQA + sliding-window attention, BF16/FP8/NVFP4.

### Raw benchmarks found

> No benchmark was ever published **under the `cat-jam` name**; the rows below are
> Reflection's Beam 1.0 card figures (BF16 / FP8 / NVFP4), which is the same model.

Coding:

- SWE-bench Verified: **81.6% / 80.2% / 80.7%** (Beam card) · SWE-bench Pro v1: **66.1% / 65.9% / 65.6%** · SWE-bench Pro v2-Hard: **76.5% / 78.4% / 78.6%** · SWE-bench Multilingual: **78.3% / 78.1% / 77.5%**
- LiveCodeBench: **88.3% / 88.1% / 87.4%** · DeepSWE v1.1: **43.3% / 43.0% / 42.7%** · Terminal-Bench v2.1: **80.1% / 78.9% / 78.4%**
- BenchLM composite for Beam 1.0: **51.5/100, #94 of 227** — Coding 65.3, Reasoning 78.7, Knowledge 55.5 (#58/187), Agentic #49 of 131, median speed 349 tok/s, first token 6.53 s

Agent / tool use:

- MCP Atlas: **80.8% / 81.5% / 80.5%** · τ³-bench (Banking): **36.1% / 36.8% / 35.4%** · AutomationBench: **39.3% / 38.2% / 39.8%** · LongBench v2: **67.5%** · GDPval-AA: **1177 Elo / 33.9% normalized** (AA, for Beam) · GDP.pdf all-pass: **11.6%** (AA)
- Terminal-Bench 4.0: **3.0%** (AA) — the newest agentic harness is where Beam falls away
- OpenRouter Design Arena: gamedev ELO **1222**, website ELO **1253**

Reasoning / knowledge:

- GPQA Diamond: **90.6% / 90.3% / 89.3%** · AIME 2026: **97.7% / 98.0% / 97.5%** · HLE: **36.0%** no tools / **51.1%** with tools · AA-LCR: **78.2% / 79.3% / 78.7%** · IFBench: **79.6% / 80.7% / 79.2%**
- Artificial Analysis: Intelligence Index **30.33** (#20/121) · SciCode **48.5%** · CritPt **13.1%** · Omniscience Index / Accuracy / Hallucination Rate: **1.5 / 33.1% / 47.2%** (a good honesty profile) · output speed 345.4 tok/s, TTFT 0.79s

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 80.1%, MCP Atlas 80.8%, BrowseComp 77.4% and AutomationBench 39.3% are frontier-adjacent, capped by τ³-Banking 36.1%, GDP.pdf 11.6% and Terminal-Bench 4.0 at 3.0%.
- **Reasoning: 80/100.** GPQA 90.6%, AIME 2026 97.7%, HLE 36.0% (51.1% with tools), AA-LCR 78.2% and a 47.2% hallucination rate are high-band; the cap is HLE-without-tools and the AA Intelligence Index of 30.3.
- **Context window: 92/100.** A 1,048,576-token window with 131,072 max output, discounted because no long-context retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 84/100.** SWE-bench Verified 81.6%, SWE-bench Pro v1 66.1% / v2-Hard 76.5%, LiveCodeBench 88.3% and Terminal-Bench 2.1 80.1% are near the frontier, with DeepSWE 43.3% the soft spot.
- **Cost efficiency: 100/100.** The evaluated tier was **free** ($0/$0/$0), and the same weights are now served as Beam Free.
- **Overall Score: 69/100.** Mean of the five quality dims = (72 + 80 + 92 + 15 + 84) / 5 = 68.6 → **69**. Best fit: the free tier of one of the strongest open coding models — but the alias is gone; use **Beam Free** (or the paid `reflection/beam-1.0-501b-a23b`).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (models.dev PRs #9509/#9740/#9798/#10051/#10099, OpenCode PRs #55188/#55224/#55466/#56025, Reflection's Hugging Face model card, Artificial Analysis, BenchLM, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Beam_1.0.md`, using the same headings.
