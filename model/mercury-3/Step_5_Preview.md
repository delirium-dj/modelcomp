# Mercury 3 — findings by Step 5 Preview

- Source: Inception Labs (`inception/mercury-3`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship **diffusion-based LLM (dLLM)** and its fourth Mercury release — it drafts a whole answer as a coarse block of text and refines every position in parallel over several passes instead of writing one token at a time. Positioned for latency-sensitive production work: browser-use agents, real-time tutoring, live search agents, customer support. Not a variant/alias of any other entry; it is the current flagship (Mercury 2 and 2.5 were retired for new users after 2026-10-19).
- **Provider / access:** Inception API Platform at `https://api.inceptionlabs.ai/v1` (OpenAI API compatible — Chat Completions style, drop-in replacement), plus third-party gateways: **OpenRouter** (`inception/mercury-3`), **Vercel AI Gateway** (`inception/mercury-3`), Baseten, Venice AI (`mercury-3`), NanoGPT, Kilo Gateway. Supports AISuite, LiteLLM and LangChain. New API keys get 100M free tokens.
- **Release / knowledge:** released **2026-10-19**. Knowledge cutoff **not disclosed** by Inception.
- **IDs:** `inception/mercury-3` (Inception native, OpenRouter, Vercel, NanoGPT, Kilo); `mercury-3` on Venice AI. **No OpenCode Zen Free ID found** — no `$0` tier on Zen; scored on paid pricing.
- **Context window:** **1,000,000 tokens** total (up from 260,000 on Mercury 2.5) — verified across the vendor launch post, Vercel AI Gateway model card, You.com Inference Router, OpenRouter and BenchGecko. **Max output 131,072 tokens** per Vercel AI Gateway, llmboard.ai and BenchGecko. *Conflict:* the independent HackerNoon run observed a **32,768-token output cap** being hit, and Mercury 3 at `medium`/`high` sometimes reasons silently until it exhausts that cap and returns nothing. Treat 131,072 as the documented limit and 32,768 as the empirically observed practical limit on higher reasoning settings.
- **Modalities:** text in / text out. **No image, audio, video or PDF input** (You.com Inference Router lists Input Modality: Text, Output Modality: Text). Reasoning supported with **tunable effort** — `instant`, `low`, `medium`, `high`. Tool calling: supported. Structured outputs (JSON mode): supported. Web-search grounding: **not supported**. Zero-data-retention and no-training-on-customer-data supported on the enterprise route.
- **Pricing (as of 2026-11-03):** list **$0.20 / $0.70** per 1M input / output; cached input $0.02. A **50% launch promotion** is still live on 2026-11-03 at **$0.10 / $0.35** per 1M, cached input $0.01 (90% off input). Kilo Gateway still quotes the undiscounted $0.20/$0.70; OpenRouter, Vercel, Inception and NanoGPT quote the promo rate. Inception has not published an end date for the promo — prices double when it ends.
- **Architecture:** proprietary diffusion LLM; **weights not released**. Parameter count **not disclosed** — Inception states only that Mercury 3 is **more than 40× the total parameters of Mercury 1** and that intelligence rose ~3× from Mercury 1 (mini) to Mercury 3. No MoE/active-param split published.

### Raw benchmarks found

> Inception ran its launch comparison **itself** and published no harness or sampling details, and Artificial Analysis has **not** independently benchmarked Mercury 3 (its Inception page still carries only Mercury 2 and 2.5). Every vendor-table number below is therefore a **vendor claim**. Independent corroboration exists only from one paid third-party study (Bruce Li / HackerNoon, ~$34 and 48,000+ API calls) and from Design Arena / Vals AI.

**Coding**

- SWE-Bench Atlas: **51.08%** (vendor table, medium effort; GPT-6 Luna 33.33%, Claude Haiku 5.5 32.26%) — Mercury 3's widest lead
- DeepSWE v1.0: **46.31%** (vendor table; Claude Haiku 5.5 **51.62%** — Mercury trails by 5.3pp)
- HumanEval+ / MBPP+ / LiveCodeBench blend, 637 problems × 5 tries, run independently: **86.0%** pass at `low`; **82.3%** at `medium`; **81.4%** at `high` (Bruce Li / HackerNoon, 2026-10-23) — accuracy *falls* as reasoning effort rises
- Vendor-reported extras (secondary aggregator, AI Brief): MBPP **82.5**, HumanEval **92.4**, LiveCodeBench **91.4**
- Vibe Code Bench v1.1 (Vals AI): **60.9%**; Code Migration v1.1 (Vals AI): **39.3%**
- Design Arena (independent community Elo, via OpenRouter): Code Categories **1229** (top 34%), UI Component **1232** (top 32%), Website **1230**, Game Development **1218**, Data Visualization **1207**, SVG **1177**
- Estimated proxies (benchgap, model-based not measured): SWE-bench Verified **80.6%** ±4.6, AA Coding Index **68.9%** ±2.5, CursorBench 3.2 **53.4%** ±6.4

**Reasoning / knowledge**

- GPQA Diamond: **89.23%** (vendor table; GPT-6 Luna 86.36%, Claude Haiku 5.5 84.51%); 89th percentile, rank 54/478 on BenchmarkList
- HLE: **35.9%** estimated ±7.3 (benchgap); HLE w/o tools 32.8% ±4.3
- CritPt: **9.9%** estimated ±4.6 (benchgap) — weak
- AIIQ Composite IQ: **98**, 22nd percentile, rank 131/168 (BenchmarkList)
- AA-Omniscience Accuracy: 46.44% (llmboard) / 32.5% estimated ±8.7 (benchgap)
- MMLU-Pro: 87.1% est ±5.5; SuperGPQA 75.1% est ±13.9; MMMLU 89.5% est
- ARC-AGI-2: 52.7% est ±10.1

**Agent / tool use**

- τ³-Bench Banking: **30.24%** (vendor table; GPT-6 Luna 23.0%, Claude Haiku 5.5 13.1%)
- GDPval-AA: **1,237.20 Elo** (llmboard; rank 14/18, 23.53th percentile)
- MultiChallenge: **60.35%** (vendor table)
- IFBench (instruction following): **76.84%** (vendor table; GPT-6 Luna 61.8%, Claude Haiku 5.5 54.7%)
- BrowseComp-Plus: **55.18%**; DeepSearchQA: **71.33%**
- MRCR v2 (long context): **75.5%** rank 2/4; AA-LCR v1.1: **77.67%** (GPT-6 Luna edges ahead at 78.3); Claude Haiku 5.5 led on long-context retrieval
- Vals AI agentic/domain set: Finance Agent v2.1 **54.7%**, EMB v1.1 **57.9%**, Vals Legal Index **63.0%**, Legal Research Bench **28.8%**, Tax Agent Bench **18.2%**, Terminal-Bench 4.0 **3.0%**, Vals Index **43.7%**, HLAB-Vals-1.1 **5.0%**
- Mind2Web, 50 live navigation tasks inside **Inception's own** web-agent harness (TinyFish AI partner test): **50%** completed — claimed above GPT-6.1 Sol at equal tokens/steps
- Independent BIRD text-to-SQL agent, 150 questions × 3 tries (HackerNoon): all five contenders landed **47.6%–59.1%** correct, within ±7–8pp error bars; Mercury 3 `low` solved a task in a median **2.06 s** (Haiku 3.86 s, Gemini 3.5 Flash-Lite 4.43 s, GPT-6 Luna 5.95 s) but needed **5.1 turns** vs Haiku's 3.2
- Estimated proxies: AA Agentic Index **4.9%** ±5.9, APEX-Agents-AA 25.2% ±11.5, Toolathon/SWE-Atlas Codebase QnA 39.8% ±5.4

**Speed / efficiency**

- Vendor: **1,068 tokens/s** on NVIDIA GPUs (vs Claude Haiku 5.5 ~240, GPT-6 Luna ~130 in the same comparison)
- Independent measurement (HackerNoon, client-side over the network): **~850–900 visible tokens/s** — ~6× GPT-6 Luna, ~2.8× Claude Haiku 5.5, ~2× Gemini 3.5 Flash-Lite
- Control result: **gpt-oss-120b on Cerebras** wrote **2,400–2,500 tokens/s** (~2.7× Mercury) and still passed 84.9% of the coding set at a 0.34 s median — diffusion's speed is a constant factor, not unique, and does not grow with output length
- Cost per 1,000 *correct* answers (independent): Mercury 3 `low` **$0.59** at promo / **$1.19** at list, vs GPT-6 Luna reasoning-off **$0.07** and Claude Haiku thinking-off **$0.14**
- Runaway-reasoning defect: at `medium`/`high`, 7.5% / 8.6% of calls hit the output cap and returned nothing; those calls burned **61% of all output tokens** Mercury 3 used in the code test and pushed p95 past 50 s
- Strict-JSON reliability: Mercury 3 broke the format on **6 of 150** SQL tasks (leaking internal tool-call markup after valid JSON) — every other model in that test: zero

**Long context**

- MRCR v2 75.5% (rank 2/4, 66.67th pct), AA-LCR v1.1 77.67%, RULER / GraphWalks: **no verified public score found**

**Not found**

- Artificial Analysis Intelligence Index: **not published for Mercury 3** (only Mercury 2 / 2.5 on AA) — AA's Inception page shows "No data available"
- Terminal-Bench 2.1: **no verified public score found** (Vals AI Terminal-Bench 4.0 shows 3.0%, an outlier that likely reflects harness mismatch — treat as provisional)
- Tau2-Bench: no verified public score found; SciCode: no verified public score found
- Multimodal benchmarks: none applicable (text-only)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ³-Bench Banking 30.24% sits just above the mid band (10–25% → 50–70) and GDPval-AA 1,237 Elo likewise, with real agent-loop strength (median 2.06 s per SQL task, 1.9–2.9× faster than the frontier labs' fast models). Capped by a poor turn count (5.1 turns vs Haiku's 3.2), DeepSearchQA at 71.33% (rank 13/16, 20th pct), and the estimated AA Agentic Index of 4.9%.
- **Reasoning: 68/100.** GPQA Diamond 89.23% is genuinely strong (89th pct) and MMLU-Pro ~87%, but HLE 35.9%, CritPt 9.9% and AIIQ IQ 98 at only the 22nd percentile pull it to mid-tier. Accuracy dropping as reasoning effort rises (86.0 → 81.4%) caps it further — the reasoning controls are inverted.
- **Context window: 93/100.** 1,000,000 tokens nominal, verified on five independent routers/docs, which lands in the ≥1M = 95–100 tier — but long-context *retrieval* is not verified at the 512K+ standard (MRCR v2 75.5%, AA-LCR 77.67%, and Haiku 5.5 led on long-context retrieval), so it sits at the bottom of that tier.
- **Multimodal: 15/100.** Text-in / text-out only; no image, audio, video or PDF input and no non-text output. Reasoning and tool-calling do not compensate — text-only maps to 10–20.
- **Coding: 78/100.** SWE-Bench Atlas 51.08% is a large lead over GPT-6 Luna and Haiku 5.5 and the independent 86.0% pass rate on HumanEval+/MBPP+/LiveCodeBench is solid, but DeepSWE 46.31% trails Haiku 5.5 by 5.3pp and the leader by 26.7pp, Vibe Code Bench 60.9% and Code Migration 39.3% are mid-band, and Vals Terminal-Bench 4.0 at 3.0% is near-floor (provisional).
- **Cost efficiency: 88/100.** $0.10/$0.35 per 1M is inside the ~$0.10/$0.20 = 97–99 band and cheaper than 83% of 321 tracked priced models, but the promo is time-limited, prices double to $0.20/$0.70 at list, and the independent cost-per-correct-answer test shows $0.59–$1.19 per 1,000 passing code answers against GPT-6 Luna's $0.07 — 8–17× worse per right answer. The runaway-reasoning defect (61% of output tokens burned on calls that returned nothing) burns the per-token advantage.
- **Overall Score: 63/100.** (62 + 68 + 93 + 15 + 78) / 5 = 63.2. Best fit: latency-critical agent loops and interactive products where sub-second answers matter and you can pin reasoning to `low`/`instant` — not the choice for maximum quality per dollar or for long-document retrieval.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-03
- Method: public internet research — vendor launch post and docs, two independent paid benchmark studies (HackerNoon 48,000-call run; Design Arena / Vals AI), and five aggregator cross-checks (llmboard, BenchmarkList, benchgap, OpenRouter, Vercel). Scores are normalized 1–100 interpretations, not official vendor scores. Vendor-table numbers are Inception's own runs with no published harness detail and are flagged as such; Artificial Analysis has not yet benchmarked Mercury 3.
- Reference URLs:
  - [Inception — Diffusion at Scale: Introducing Mercury 3 (official launch post)](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Inception — Mercury model lineup, pricing and API docs](https://www.inceptionlabs.ai/models)
  - [Business Wire — Inception Launches Mercury 3, Setting a New Pareto Frontier](https://www.businesswire.com/news/home/20261019090400/en/Inception-Launches-Mercury-3-Setting-a-New-Pareto-Frontier-in-Speed-and-Intelligence)
  - [HackerNoon — The AI Model That Promised to Crush GPT-6 Has a Surprising Weakness (independent 48,000-call study)](https://hackernoon.com/the-ai-model-that-promised-to-crush-gpt-6-has-a-surprising-weakness)
  - [Vercel AI Gateway — Mercury 3 model card (context, max output, pricing)](https://vercel.com/ai-gateway/models/mercury-3)
  - [You.com Inference Router — Mercury 3 (modality, capabilities, zero-retention)](https://you.com/product/inference-router/models/mercury-3)
  - [llmboard — Mercury 3 Benchmarks, Pricing and Specs](https://www.llmboard.ai/models/mercury-3)
  - [BenchmarkList — Mercury 3 benchmark scores and ranks](https://benchmarklist.com/models/inception-mercury-3/)
  - [benchgap — Mercury 3 measured vs estimated scores](https://benchgap.net/model/mercury-3)
  - [OpenRouter — Mercury 3 (Design Arena + Vals AI benchmark set)](https://openrouter.ai/inception/mercury-3)
  - [SiliconANGLE — Inception says Mercury 3 beats GPT-6 Luna and Claude Haiku 5.5](https://siliconangle.com/2026/10/20/inception-says-mercury-3-beats-gpt-6-luna-and-claude-haiku-5-5-at-up-to-8x-the-speed/)
  - [The Decoder — Mercury 3 diffusion model claims (with counterpoint on the lead being narrower)](https://the-decoder.com/inceptions-mercury-3-diffusion-model-claims-to-beat-gpt-6-luna-and-claude-haiku-5-5-at-a-fraction-of-the-wait/)
  - [Artificial Analysis — Inception provider page (Mercury 3 absent; only Mercury 2 / 2.5)](https://artificialanalysis.ai/providers/inception)
  - [Bruce Li — Mercury 3 raw benchmark data and scripts](https://github.com/zbruceli/mercury3)
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_2.md`, using the same headings.
