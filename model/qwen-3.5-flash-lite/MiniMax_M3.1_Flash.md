# Qwen 3.5 Flash Lite — findings by MiniMax M3.1 Flash

- Source: Alibaba (hosted Qwen3.5-Flash tier, weights from Qwen3.5-35B-A3B), `qwen3.5-flash`
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite — **no vendor ships a "Flash Lite" tier in the Qwen3.5 family.** The label in this folder's `meta.json` (`opencode/qwen-3.5-flash-lite`) does not exist in any vendor or gateway catalogue; the folder's own specs (1,000,000-token context, 65,536 max output, text/image/video in, text out, ~$0.10/$0.40 per 1M) are an exact match for Alibaba's hosted **Qwen3.5-Flash**, whose own open-weights card states: "**Qwen3.5-Flash is the hosted version corresponding to Qwen3.5-35B-A3B** with more production features, e.g., 1M context length by default and official built-in tools."
- **Short description:** The entry is a serving-profile duplicate of `qwen-3.5-flash` — a 3B-active multimodal MoE served at 1M context for very low per-token cost. It is **not** a lighter checkpoint, **not** a separate weight set, and **not** a distinct Alibaba SKU. This report scores the only product the entry can denote (hosted Qwen3.5-Flash, whose measurements are also those of the underlying Qwen3.5-35B-A3B weights) and leaves the merge/park decision on the slug to the maintainer.
- **Provider / access:** Alibaba Cloud Model Studio (model id `qwen3.5-flash`, snapshot `qwen3.5-flash-2026-02-23`), OpenRouter `qwen/qwen3.5-flash-02-23`, models.dev canonical `alibaba/qwen3.5-flash`, plus Vercel / Novita / SiliconFlow routes. **Not on OpenCode Zen** — the live Zen catalogue (fetched 2026-10-31) lists `qwen3.5-plus`, `qwen3.6-plus`, `qwen3.8-flash` and `qwen3.8-max` and **no** `qwen3.5-flash-lite` route; the only "flash-lite" strings on the Zen docs page belong to Google's `gemini-3.5-flash-lite`.
- **Release / knowledge:** 2026-02-23 (snapshot `qwen3.5-flash-2026-02-23`); the open Qwen3.5-35B-A3B weights followed on 2026-02-24. Knowledge cutoff not published.
- **IDs (real):** `qwen3.5-flash` (Model Studio), `qwen3.5-flash-2026-02-23` (Model Studio snapshot), `qwen/qwen3.5-flash-02-23` (OpenRouter), `alibaba/qwen3.5-flash` (models.dev). **ID (phantom):** `opencode/qwen-3.5-flash-lite` — no OpenCode Zen route, no Model Studio route, no OpenRouter route, no models.dev entry.
- **Context window:** **1,000,000** tokens (first-party Model Studio doc: 上下文长度 1,000,000; 最大输入 991,808; 最大输出 65,536; thinking mode 最大输入 983,616, 最大输出 65,536, 最大思维链长度 81,920). The open weights are 262,144 native (≈1,010,000 via YaRN); the 1M default is a hosted-profile feature.
- **Modalities:** text, image and **video** in; text out; structured output, web search, prefix caching and prefix continuation supported. Reasoning and tool calling supported.
- **Pricing (as of 2026-10-31):** **$0.065/M in, $0.26/M out** (OpenRouter snapshot); **$0.10/$0.40** (Model Studio international, which is the figure this folder's `meta.json` quotes); China region with context tiers: **¥0.2 in / ¥2 out** per 1M for ≤128K input (≈$0.028/$0.287), ¥0.8/¥8 for 128K–256K, ¥1.2/¥12 for 256K–1M; Batch File ¥0.1/¥1 (half price); explicit cache create ¥0.25, cache hit ¥0.02.
- **Architecture:** open **Qwen3.5-35B-A3B** (Apache-2.0; ~35–36B total / 3B activated; 40 layers; 256 experts with 8 routed + 1 shared; hybrid **Gated DeltaNet + Gated Attention**; vision encoder, early-fusion native VLM) served through the Alibaba production profile.

### Raw benchmarks found

> No Artificial Analysis page exists for the hosted tier as a separate SKU (the AA row belongs to the open 35B-A3B, which the Model Studio doc and the HF card identify as the same model). Vals AI's independent run, the vendor's own model card and third-party aggregators are the usable evidence.

Agent / tool use:

- **Terminal-Bench 2.0: 24.72% ±4.60** (Vals AI, independent run of the hosted tier) — weak; the vendor card claims **40.5%** for the same weights (see Agreement notes)
- **τ²-bench: 89.2%** (Artificial Analysis, open 35B-A3B row) and **TAU2-Bench 81.2%** (vendor card) — strong on customer-service-style tool chains
- **BFCL-V4: 67.3%** (vendor card) · **BrowseComp 61.0%** (vendor card) · **OSWorld-Verified 54.5%** (vendor card) · **WideSearch 57.1%** (vendor card)
- **Terminal Bench Hard: 26.50** with thinking + tools, **10.60** normal + tools; **τ³-Banking 4.90**; **ECI 52.86** (142/167); **Claw Bench 91.40**; **Pinch Bench 78.40** (DataLearner independent evaluation of the 35B-A3B weights)
- **HLE with tool use 47.4%**, **Seal-0 41.4%** (vendor card)
- Toolathlon / Tau3 / MCP-Atlas / GDPval-AA / Agents' Last Exam: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 82.83% ±1.90** (Vals AI, hosted tier) · **84.2%** (vendor card) · **84.5%** (Artificial Analysis) · **MMLU-Pro: 84.06% ±0.36** (Vals AI) · **85.3%** (vendor card)
- **MMLU-ProX 81.0%** · **AA Global-MMLU-Lite 86.4%** · **C-Eval 90.2%** · **SuperGPQA 63.4%** · **HLE with CoT 22.4%** (vendor card)
- **AA-HLE 21.0%** · **AA-LCR 72.0%** · **AA-IFBench 72.5%** · **AA-Omniscience Index −48.1%** (hallucination rate 85.4%) · **CritPt 0.9%** (Artificial Analysis, open 35B-A3B row)
- **FrontierMath v2 Tiers 1–3: 18.25%** (Epoch AI leaderboard) — a weak front-tier number
- **Vals Index: 49.6%** (#22 overall, #7 among open-weight models) · LegalBench 84.28% · TaxEval v2 72.16% · Corp Fin (v2) 64.2% · Case Law (v2) 55.9%

Coding:

- **SWE-bench Verified: 69.2%** (vendor card) · **64.40% ±2.14** (Vals AI, current evaluation) · **54.9%** (Vals AI, 2026-03-02 evaluation) — three numbers in circulation
- **LiveCodeBench v6: 74.6%** (vendor card) · **83.28% ±1.04** (Vals AI, hosted tier) · **CodeForces 2028** · **OJBench 36.0** · **FullStackBench en 58.1 / zh 55.0** (vendor card)
- **Terminal-Bench 2.0: 40.5%** (vendor card) vs **24.7%** (Vals AI) · **SWE-Rebench 53.7%** (leaderboard, open 35B-A3B)
- SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Multimodal:

- **MMMU 81.4%** · **MMMU-Pro 75.1%** (vendor card) / **81.91% ±0.93** (Vals AI) · **AA-MMMU-Pro 72.7%** · **MMVU 72.3%** · **CharXiv 77.5%** · **MathVision 83.9%** · **MathVista (mini) 86.2%** · **DynaMath 85.0%** · **ExtractBench 88.0%** · **MMMLU 85.2%**

Long context:

- 1M-token window is first-party documented (Model Studio doc), but **no ≥98% retrieval-at-512K+ measurement exists**; the closest published figure is **AA-LCR 72.0%** on the same weights.

### Normalized scores (1–100)

- **Tool use: 50/100.** Genuinely split evidence: **Terminal-Bench 2.0 24.72%** measured independently by Vals AI (and DataLearner's 26.50 on Terminal Bench Hard with thinking + tools, with τ³-Banking only 4.90 and ECI 52.86) pulls hard downward, while **τ²-bench 89.2%**, **TAU2-Bench 81.2%**, **BFCL-V4 67.3%**, **BrowseComp 61.0%** and **OSWorld-Verified 54.5%** pull upward. Scored at the bottom of the mid band because the frontier anchor is a Terminal-Bench-2.1 figure and the only *independent* terminal-agent measurement is 24.7%, while the strong τ²-family scores are vendor- and aggregator-sourced.
- **Reasoning: 62/100.** **GPQA Diamond 82.8–84.5%** and **MMLU-Pro 84.1–85.3%** are solid mid-band knowledge/reasoning results, reinforced by **MMLU-ProX 81.0%**, **Global-MMLU-Lite 86.4%** and **AA-LCR 72.0%**; but the hard-math/knowledge-frontier numbers are weak — **AA-HLE 21.0%**, **FrontierMath v2 Tiers 1–3 18.2%**, **CritPt 0.9%** and an **AA-Omniscience Index of −48.1%** (85.4% hallucination rate) — and there is no AA index for the hosted tier itself.
- **Context window: 92/100.** A **1,000,000-token** first-party window (max input 991,808; 65,536 max output; 983,616 max input in thinking mode) sits in the ≥1M tier (95–100), discounted because no long-context retrieval benchmark was published at 512K+ (best available: AA-LCR 72.0% on the same weights).
- **Multimodal: 80/100.** Text, **image and video** in with text out places it in the "+video" band (75–90); held mid-band rather than at the top because there is no audio path, no non-text output and no published Video-MMMU or MMMU-Pro-at-1M measurement, despite a strong vision suite (MMMU 81.4, MathVista 86.2, ExtractBench 88.0).
- **Coding: 68/100.** **LiveCodeBench v6 74.6%** (card) / **83.28%** (Vals AI) and **SWE-bench Verified 69.2%** (card) / **64.4%** (Vals AI) are mid-band (65–75); the drag is **Terminal-Bench 2.0 at 24.7%** (independent) against the card's 40.5%, plus **FullStackBench 55–58%** and **OJBench 36.0%**.
- **Cost efficiency: 97/100.** **$0.065/$0.26** on OpenRouter, **$0.10/$0.40** on Model Studio international and **¥0.2/¥2 (≈$0.028/$0.287)** in the China region for ≤128K input make this one of the cheapest 1M-context multimodal routes available; cache-hit pricing (¥0.02/M) is near-free.
- **Overall Score: 70.4/100.** Half-up mean of the five quality dims (50 + 62 + 92 + 80 + 68) / 5 = 70.4. Best fit: cheap, very long-context multimodal reading/summarisation and high-volume tool pipelines where τ²-style customer-service agents matter more than frontier terminal work. Weakest fit: hard math, hallucination-sensitive research, and any job where Terminal-Bench-grade software-engineering agents are the point.

### Agreement notes (conflicting readings)

- **The identity in this folder's `meta.json` does not exist.** `opencode/qwen-3.5-flash-lite` was searched across six independent catalogues: OpenCode Zen's live model list (no `qwen3.5-flash-lite` route; only `qwen3.5-plus`, `qwen3.6-plus`, `qwen3.8-flash`, `qwen3.8-max` among the Qwen3.5+ tier; the only "flash-lite" strings on the Zen docs page are Google's `gemini-3.5-flash-lite`), models.dev (45 `qwen3.5*` ids, none "lite"), OpenRouter (23 `qwen3.5*` ids, none "lite"), Alibaba Model Studio's model list and pricing page (no `flash-lite` entry at all), and the Hugging Face Qwen organisation (no Lite release). The `~$0.10/$0.40` price in `meta.json` is in fact Google's Gemini Flash-Lite list price, and the "~35B total/3B active, 1M ctx" spec is verbatim the hosted Qwen3.5-Flash profile — so the entry appears to be a scaffolded copy with a Google-style "Lite" suffix grafted on.
- **This is a duplicate of `qwen-3.5-flash`, and of `qwen-3.5-35b-a3b`.** Alibaba's own Qwen3.5-35B-A3B model card states "Qwen3.5-Flash is the hosted version corresponding to Qwen3.5-35B-A3B with more production features, e.g., 1M context length by default and official built-in tools", and BenchLM tracks the two as separate rows with different context windows (hosted Flash "Proprietary, 1M"; 35B-A3B "Open Weight, 262K"). Per the standing decision to score serving-tier duplicates in place, this report is written against the hosted Qwen3.5-Flash product; **the merge/park decision on the `qwen-3.5-flash-lite` slug is left to the maintainer** rather than being taken unilaterally.
- **Hosted tier vs open weights — genuinely different measured rows.** BenchLM publishes two rows: *Qwen3.5 Flash* (proprietary, 1M context, 42.51/100 composite, 5 of 724 benchmarks covered) and *Qwen3.5-35B-A3B* (open weights, 262K context, 45.15/100, 33 benchmarks covered). The AA, DataLearner and vendor-card rows below the Vals run belong to the open checkpoint. Because the HF card defines the hosted tier as the same model in a different serving profile, both rows are reported here and labelled; they are not merged into a single score.
- **Terminal-Bench 2.0: 40.5% (vendor) vs 24.72% ±4.60 (Vals AI, independent).** This is the single largest conflict in the dataset and it drives the Coding and Tool-use scores. Vals AI's number is an independent run of the hosted tier and is used for scoring; the card's 40.5% is reported alongside. DataLearner's independent Terminal Bench Hard numbers (26.50 with thinking + tools, 10.60 without) are consistent with Vals rather than with the card.
- **SWE-bench Verified: three values.** 69.2% (vendor card), 64.40% ±2.14 (Vals AI current evaluation) and 54.9% (Vals AI, 2026-03-02 evaluation) — the two Vals figures are the same harness at different times. Both Vals numbers are cited; the card number is the outlier.
- **MMMU-Pro: 75.1% (card) vs 81.91% ±0.93 (Vals AI).** Vals measures the hosted configuration with its own harness; the card measures the open weights. The gap is harness-level, not a contradiction about the model, and both fall inside the "+video" multimodal band, so it does not change the score.
- **HLE evidence is thin and split.** The vendor card lists "HLE w/ CoT 22.4%" while Artificial Analysis reports **AA-HLE 21.0%** for the open weights — these agree closely and both are far below the 40%+ reasoning-frontier anchor, which is why Reasoning is held at 62 rather than in the 70s despite the 84%+ GPQA Diamond.
- **Currency of the data.** The Vals AI page is dated 2026-03-02 and the Model Studio snapshot is 2026-02-23; the vendor card and the DataLearner evaluation are from the Qwen3.5 launch window (February–March 2026). Alibaba has since shipped Qwen3.6 / Qwen3.7 / Qwen3.8 generations, so this tier is a superseded production profile and its measured numbers should be read as a snapshot of February–March 2026.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-31
- Method: public internet research (Alibaba Cloud Model Studio model doc and pricing doc for `qwen3.5-flash`, Hugging Face Qwen/Qwen3.5-35B-A3B model card for the hosted-tier relationship and vendor benchmark tables, Vals AI model page for the hosted tier, Artificial Analysis rows via BenchLM, Epoch AI FrontierMath v2 leaderboard, DataLearner independent evaluation of the 35B-A3B, OpenCode Zen catalogue, models.dev and OpenRouter catalogues); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio — Qwen3.5-Flash model info (context limits, pricing)](https://help.aliyun.com/zh/model-studio/qwen3-5-flash)
  - [Hugging Face — Qwen/Qwen3.5-35B-A3B model card](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Vals AI — Qwen 3.5 Flash](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [BenchLM — Qwen3.5 Flash](https://benchlm.ai/models/qwen3-5-flash)
  - [BenchLM — Qwen3.5-35B-A3B](https://benchlm.ai/models/qwen3-5-35b-a3b)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md`, using the same headings.
