# Doubao Seed 2.1 Pro (260915) — findings by Ernie 5.5 Flash

- Source: ByteDance / Volcano Engine Ark (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915) — ByteDance's flagship Seed 2.1 "deep-thinking" agent model, 15 Sep 2026 checkpoint of the Pro tier
- **Short description:** ByteDance's production flagship for agentic and end-to-end coding work on Volcano Engine Ark, with a 1M-token context window, 256K max output / thinking chain, native GUI task execution, and deep platform tool integrations. The 260915 refresh lifts the context window from the June 260628 checkpoint's 256K to 1024K and adds the full Ark tool suite. Not a variant of another tracked folder: `doubao-seed-2-1-pro-260628` is the separate earlier checkpoint on the same Ark model page.
- **Provider / access:** Volcano Engine Ark (China, `cn-beijing`) and BytePlus ModelArk (international, `ap-southeast-1`). Chat API, Responses API, and Messages API. Also exposed through the Doubao app. No OpenCode Zen / OpenRouter Free ID.
- **Release / knowledge:** Seed 2.1 family announced 2026-06-23; `260915` checkpoint dated 2026-09-15 (ModelDial test date). Knowledge cutoff not published by ByteDance.
- **IDs:** `doubao-seed-2-1-pro-260915` (Ark model ID; the Ark console detail page resolves the `doubao-seed-2-1-pro` alias). Sibling IDs: `doubao-seed-2-1-pro-260628` (256K), `doubao-seed-2-1-lite-260915`, `doubao-seed-2-1-turbo-260628`, `doubao-seed-evolving` (weekly-iterating coding/agent model).
- **Context window:** **1,024 K (1,048,576) total; max input 1024K; max answer 256K; max thinking chain 256K.** Verified from the Volcano Engine Ark model table (`volcengine.com/docs/82379/1330310`), which lists `doubao-seed-2-1-pro-260915` at 1024K context / 256K answer / 256K thinking. Note the older `260628` row on the same page is 256K — do not conflate the two checkpoints.
- **Modalities:** Text, image, video in; text out. Deep thinking (on by default), text generation, multimodal understanding, GUI task processing, function calling, structured output (`json_schema` recommended on 260628; native on 260915), knowledge-base retrieval, MCP, web-search content plugin, image processing, Doubao Assistant. Implicit + explicit context caching (prefix cache + session cache). No audio input on the Pro tier (audio understanding is listed only for `2-1-lite` and the 2.0 LTS models), no image/audio generation.
- **Pricing (as of 2026-11-13, Ark list price):** ¥6.00 / M input, ¥30.00 / M output (≈ **$0.83 / $4.14** at ~7.2 CNY/USD) for standard online inference at any input length ≤1024K; cache-hit input ¥1.20 / M (≈ $0.17); cache storage ¥0.017 / M/hour. Low-priority inference ¥3.00 / ¥15.00 (≈ $0.42 / $2.08); batch inference ¥3.00 / ¥15.00. No free tier. Rate limit 500 RPM / 1M TPM on the Pro endpoint (vs 30,000 RPM on Lite).
- **Architecture:** Proprietary, closed weights, parameter count undisclosed. Seed 2.1 family (Pro / Turbo / Lite) is a "deep thinking" reasoning-first design with RL-tuned GUI/computer-use action selection; ByteDance reports a 16% reduction in average GUI task steps from that RL pass.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0%** (vendor-reported, Seed2.1 Pro vs Claude Opus 4.7 71.7%, GPT-5.5 73.8%, Gemini 3.1 Pro 70.7%) — mid-pack of that comparison set
- Long-Horizon Terminal-Bench 1.0 (mean reward): **0.29** across 21 models (30th percentile), **$5.16** mean cost per task (BenchmarkList / LHTB leaderboard, sampled 2026-08-27)
- Long-Horizon Terminal-Bench 2.0 (mean reward, thinking): **46.4 / 100**, rank 10/12; strict pass (reward = 1.0) **10.4%**, rank 6/12 (LHTB 2.0 README leaderboard, 2026-10-09)
- Long-Horizon Terminal-Bench 1.0 (solved ≥0.95): **4.3%**, rank 13/22; strict pass **0.0%**, rank 14/22
- ClawTrack: **61.1** overall process score (avg process 61.1%, avg task 58.3%, Pass@3 77.3%, Pass³ 61.1%) — rank 9/17, 50th percentile
- $OneMillion-Bench: **47.8%** expert score (pass rate 23.7%, economic value $225,591, tools off) — rank 6/13, 58th percentile
- Agents' Last Exam v1 (full-spectrum): pass rate **24.1** (#12/30), full-spectrum score **40.1** (#17/30); unlicensed pass rate **22.0**, score **39.0**
- Workspace Bench (high-economic-value): **53.0** (vs Claude Opus 4.7 55.1, GPT-5.5 58.7, Gemini 3.1 Pro 32.8)
- Agent Startup Bench (high-economic-value): **68.8** (vs Opus 4.7 62.3, GPT-5.5 68.1, Gemini 3.1 Pro 45.7)
- MobileWorld: **highest score** among participating models (vendor claim, no number published)
- OSWorld: "remains competitive" (vendor, no number published)
- CreativeWork (Notion / Canva / Figma): "standout results" (vendor, no number published)
- GDPval: **highest score** among participating models (vendor claim, no number published)
- Claw-Eval (MM) visual agent: "strong overall competitiveness" (vendor, no number published)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Terminal-Bench-Science: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.3%** (Epoch AI benchmark hub, high effort, snapshot 2026-11-09; rank 76/407) — the strongest verified reasoning number for this model
- SimpleQA Verified (Epoch anti-abstention): **44.7%** (rank 40/79)
- SuperGPQA: **70.8** (vs Opus 4.7 68.5, GPT-5.5 72.7, Gemini 3.1 Pro 76.6)
- KINA (knowledge): **48.3** (vs Opus 4.7 46.7, GPT-5.5 52.6, Gemini 3.1 Pro 53.2)
- BeyondAIME: **87.0** (vs Opus 4.7 79.0, GPT-5.5 91.0, Gemini 3.1 Pro 90.0)
- OTIS Mock AIME 2024–2025: **95.6%** (Epoch, high, rank 43/139)
- ExplorationBench (scientific exploration): AlienCode Best@3 M4 accuracy **40.0%** (rank 11/11), AlienLogic **69.0%**; Mean@3 24.8% / 59.8%; worst-trajectory 4.8% / 53.3% — field leader Claude Opus 5 at 89.0%, a **−49.0 pt** deficit
- xbench-ScienceQA: **71.0** (thinking, rank 14/28); BoN (N=5) **77.0** (rank 24/28)
- Dual Exam Agent Index: **12.7 / 100** (rank 8/10)
- Chess Puzzles v2.0: **21.0 / 100** (Epoch, high, rank 61/88)
- HLE / Humanity's Last Exam: no verified public score found for this checkpoint
- Artificial Analysis Intelligence Index: no verified public score found (no AA model page for this ID)
- BenchLM: no page found for this model
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-Atlas (debugging): **35.2** (vs Opus 4.7 38.7, GPT-5.5 44.7, Gemini 3.1 Pro 23.6) — third of four
- NL2Repo-Bench (long-horizon end-to-end code): **47.0** (vs Opus 4.7 58.2, GPT-5.5 45.1, Gemini 3.1 Pro 33.4)
- ProgramBench (long-horizon end-to-end code): **0 / 1 / 50.3** (vs Opus 4.7 0/2.5/52.1, GPT-5.5 0.5/5.5/65.9, Gemini 3.1 Pro 0/1/40.7)
- ModelDial coding (private dataset): **overall 59.0** (best-effort row; the model page reports 60.4 at default) — backend engineering **64**, frontend interaction **61**, knowledge & reasoning **55**, visual aesthetics **68**, maintainability **49**; rank 40–45 of 52 models; $1.38–1.44 per full evaluation; 104 m 54 s eval time
- ModelDial backend subscores: contracts & boundaries 11/20, retries & failures 15/20, CI & adversarial review 11/20, transactions & consistency 15/20, caching & regression 12/20
- Code Arena: Frontend (human preference): **1539, rank 8th**, top-10 in 5 of 7 frontend subcategories — measured on **Seed2.1 Preview**, not the 260915 Pro checkpoint (lineage data, labelled as such)
- SWE-bench Verified: **no verified public score found for the 2.1 Pro checkpoint**. Predecessor lineage only: Seed 2.0 Pro scored 76.5 on SWE-bench Verified (nAIvigate, citing vendor) — that is a different model, never merged into this score.
- LiveCodeBench / SciCode / AA-SciCode: no verified public score found (SciCode and FrontierScience-Olympiad mentioned qualitatively in the vendor blog, no numbers published)

Long context:

- **1,024 K-token unified context verified** (Ark model table). Max output 256K, max thinking chain 256K.
- MMLongBench-128K (multimodal long context): **78.3** (vs Gemini 3.1 Pro 70.7; Opus 4.7 and GPT-5.5 not reported)
- Long-context retrieval (MRCR / RULER / GraphWalks) at 512K+: no verified public score found. nAIvigate flags that the previous generation's English long-context quality degraded past ~150K tokens — a lineage caveat, not a measurement of this checkpoint.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 at 71.0% sits mid-pack (Opus 4.7 71.7%, GPT-5.5 73.8%), but the long-horizon agentic results are weak: LHTB mean reward 0.29 (30th percentile, 2 of 46 tasks fully solved), LHTB 2.0 strict pass 10.4%, ExplorationBench AlienCode 40.0% (last of 11), ALE full-spectrum pass rate 24.1%. ClawTrack 61.1 and $OneMillion-Bench 47.8% are respectable but not frontier — capped below 75.
- **Reasoning: 77/100.** GPQA Diamond 89.3% is genuinely near-frontier and BeyondAIME 87.0 / SuperGPQA 70.8 / OTIS AIME 95.6 hold up well, but SimpleQA Verified 44.7%, Dual Exam Agent Index 12.7/100, Chess Puzzles 21.0/100 and the −49 pt ExplorationBench gap show the reasoning is exam-shaped rather than exploratory; that spread caps it in the high-70s.
- **Context window: 95/100.** Verified 1,024 K unified context (≥1M tier → 95–100 per methodology), with MMLongBench-128K 78.3 confirming usable long-document quality. The 100 is withheld because no ≥98%-retrieval-at-512K figure is published and no MRCR/RULER/GraphWalks score exists for this checkpoint.
- **Multimodal: 85/100.** Native image + video in with strong measured results (VideoMME 89.2, TOMATO 79.5, Minerva 70.7, OVBench 80.7, CharXiv-RQ 85.4, MMMU-Pro 81.6, ERQA 72.0, MathVision 92.6) but text-only output and no audio input on the Pro tier (audio understanding is Lite-only), which keeps it out of the 90+ band.
- **Coding: 66/100.** Terminal-Bench 2.1 71.0 and ModelDial backend 64 / frontend 61 are mid-tier, SWE-Atlas 35.2 trails Opus 4.7 and GPT-5.5, NL2Repo 47.0 is behind Opus 4.7's 58.2, and the LHTB long-horizon results are bottom-quartile. ByteDance's "Claude Opus 4.6–4.7 class" positioning is not supported by the public numbers for this checkpoint.
- **Cost efficiency: 88/100.** ≈$0.83 / $4.14 per 1M at a full 1M context is aggressive for a flagship, and ¥3/¥15 low-priority and batch tiers halve it again; not 95+ because there is no free tier and the 500 RPM / 1M TPM Pro limit throttles high-volume use (Lite exists at 30,000 RPM for that).
- **Overall Score: 79/100.** (70 + 77 + 95 + 85 + 66) / 5 = 78.6 → 79. Best fit: cost-sensitive, China-region, high-volume multimodal and long-document agent work with GUI/computer-use needs — not a frontier coding substitute for Claude Opus or GPT-5.5-class models, and a compliance problem for EU/US data-residency requirements.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13 UTC
- Method: public internet research (web search tool returned HTTP 402 on both attempts; fell back to direct `webfetch` of primary vendor, leaderboard and aggregator URLs per `RULES.md` § Web-research fallback — Volcano Engine Ark docs and pricing, ByteDance Seed blog and model page, ModelDial, BenchmarkList, Benchmark Atlas, Epoch AI hub, nAIvigate). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ark model list (context/answer/thinking limits, capabilities, rate limits) — Volcano Engine](https://www.volcengine.com/docs/82379/1330310)
  - [Ark model pricing (doubao-seed-2.1-pro ¥6/¥30) — Volcano Engine](https://www.volcengine.com/docs/82379/1099320)
  - [Seed2.1 Officially Released: Advancing AI Productivity — ByteDance Seed](https://seed.bytedance.com/en/blog/seed2-1-officially-released-advancing-ai-productivity)
  - [Seed2.1 model page (benchmark tables) — ByteDance Seed](https://seed.bytedance.com/en/seed2_1)
  - [Doubao Seed 2.1 Pro (260915) results — ModelDial](https://modeldial.com/en/models/doubao-seed-2-1-pro-260915)
  - [ModelDial coding leaderboard (rank 45/52, all dimension scores) — ModelDial](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [Doubao Seed 2.1 Pro benchmark results (LHTB, $OneMillion-Bench, ExplorationBench, ClawTrack, PerceptionBench) — BenchmarkList](https://benchmarklist.com/models/bytedance-doubao-seed-2.1-pro/)
  - [Doubao Seed 2.1 Pro (260628) scored on 56 benchmarks — Benchmark Atlas](https://atlas.kevinhu.io/models/doubao-seed-2-1-pro-260628)
  - [GPQA Diamond leaderboard (89.3%) — Epoch AI](https://epoch.ai/benchmarks/gpqa-diamond)
  - [SimpleQA Verified leaderboard (44.7%) — Epoch AI](https://epoch.ai/benchmarks/simple-qa-verified)
  - [Doubao Seed 2.1 Pro model card — nAIvigate (pricing, 256K context caveat, SWE-bench lineage)](https://naivigate.com/en/model/seed-2-1-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.