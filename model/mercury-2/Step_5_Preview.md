# Mercury 2 — findings by Step 5 Preview

- Source: Inception Labs (`inception/mercury-2`)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' **first reasoning diffusion LLM (dLLM)** and the second-generation Mercury — it drafts a whole answer and refines many tokens in parallel over a small number of passes instead of decoding one token at a time. Marketed as "the fastest reasoning LLM" for latency-sensitive production work: agent loops, real-time voice/search, and instant coding and editing at scale. Superseded by Mercury 3 on 2026-10-19; still served to existing customers whose usage predates that date.
- **Provider / access:** Inception API Platform at `https://api.inceptionlabs.ai/v1`, endpoint `v1/chat/completions` (OpenAI API compatible), also hosted by **OpenRouter** (`inception/mercury-2`) — single provider, no routing. No third-party free gateway; **no OpenCode Zen Free ID found** — scored on paid pricing.
- **Release / knowledge:** vendor blog **2026-02-24**; OpenRouter lists **2026-03-04** as the general release date (BenchGecko also records 2026-03-04). Knowledge cutoff **not disclosed**.
- **IDs:** `inception/mercury-2` (Inception native and OpenRouter).
- **Context window:** **128,000 tokens** chat context, **50,000 max output** tokens — per the official Inception docs model table, OpenRouter and llm-stats. Dataconomy lists 130K; the discrepancy is rounding. No long-context retrieval figures published; AA-LCR 43.7% at 128K is the only retrieval proxy.
- **Modalities:** text in / text out only. Tunable `reasoning_effort` with four values — `instant`, `low`, `medium`, `high` (defaults to `medium` when omitted). Native tool use and **schema-aligned JSON output** supported. No image/audio/video/PDF input.
- **Pricing (as of 2026-11-03):** **$0.25 / $0.75** per 1M input / output, cached input $0.025 — unchanged since launch (unlike Mercury 3 there is no promo). OpenRouter latency p50 0.24 s, throughput p50 272 t/s, uptime 99.91%. Independent observers note a provider cache change later raised effective input cost, and Inception's API accepts temperature only in the 0.5–1.0 band, silently resetting anything outside it (a warning field OpenRouter drops).
- **Architecture:** proprietary diffusion LLM; **weights not released**. No parameter count or MoE split disclosed.

### Raw benchmarks found

> Artificial Analysis runs Mercury 2 on **first-party endpoints**, so its set is the closest thing to independent measurement. Vendor launch numbers and two third-party long-run agent studies are listed separately, and they disagree — noted inline.

**Reasoning / knowledge**

- GPQA Diamond: **77.0%** (Artificial Analysis) vs **73.6%** in Inception's launch table vs **79%** cited in a third-party analysis — three sources, ~5pp spread, harness/effort-dependent
- HLE: **17.1%** (Artificial Analysis); Dataconomy's table garbles this as "155%" — a parsing error, disregard
- AIME 2025: **91.1%** (Inception launch table); AIME 2026: **90%** per Decrypt's coverage of the launch
- LCR / AA-LCR: **43.7%** (Artificial Analysis) — weak for a 128K model
- CritPt: **0.8%** (Artificial Analysis) — near-floor
- Arena Chat: 21.8, Arena Coding: 5.6 (Artificial Analysis, Dataconomy table)
- Artificial Analysis **Intelligence Index: 32.8** (rank 394/697) and **Coding Index 30.6** (rank 162/257), March 2026
- Artificial Analysis **Agentic Index: 1.6** (OpenRouter benchmark summary)

**Agent / tool use**

- Terminal-Bench 2.1: **27.3%** (Artificial Analysis, verified 2026-07-21; rank 119/196, 39th pct) — mid-band
- Terminal-Bench Hard: **26.5%** (Artificial Analysis; used as the field leader on that row)
- Terminal-Bench 4.0: **0.0%** (Artificial Analysis) — near-floor on the newer harness
- τ²-Bench Telecom: **70.8%** (Artificial Analysis; rank 112/337, 67th pct)
- τ-Bench Banking / Tau3-Banking: **9.5%** (Artificial Analysis) / **9.9%** (BenchmarkList, verified 2026-07-21, weighted cost $0.01/task)
- GDPval-AA: **702 Elo** (BenchmarkList, verified 2026-09-02; rank 185/358, 48th pct) vs **0.1%** as rendered by Artificial Analysis' summary on OpenRouter — the 702 Elo figure is the correct one; Artificial Analysis' own provider page shows the Elo form
- AA-Briefcase: **266 Elo** (rank 124/160, 23rd pct; rubric pass rate 5.7%)
- IFBench: **69.8%** (Artificial Analysis) vs **71.3%** (Inception launch table)
- PinchBench (real OpenClaw agent workflows, vendor-run but public harness): **78% best score / 70% average**, execution time 503.44 s average, cost $0.11 average
- Vendor voice-agent sweep (Inception, OpenCall production prompts): `medium` beats GPT-4.1 by **27 points on IFBench** and **24 points on Tau3Bench Telecom** while still decoding faster than GPT-4.1's non-reasoning mode
- WideSearch / FRAMES / DeepSearchQA agentic-search runs (Inception, n=100, live Exa retrieval, public harness): FRAMES 0.78 (tied with three rivals inside a 4–5pp standard error), DeepSearchQA **0.34 vs GPT-5 Mini's 0.44** — a 10-point genuine loss; post-cutoff rebuilt tasks closed-book collapse to zero and with retrieval Mercury 2 scores 0.923 vs Gemini 0.929, a tie
- Context-compaction probe (Inception, 250 sampled SWE trajectories, 4 probe questions scored 0–5): Mercury 2 is "the only model in the Fast & Good quadrant — roughly 5× faster than Sonnet 4.6 while matching it on quality"
- Augment Code case study (joint, vendor-reported): swapping Mercury 2 in for Claude Opus 4.7 on its context-compaction subagent produced an **82% latency drop and a 90% cost cut** at reported-equal output quality
- Vectara HHEM hallucination rate: **12.3%** (factual consistency 87.7%, rank 67/85, 21st pct)

**Coding**

- LiveCodeBench: **67%** (Inception launch table / Dataconomy) vs **67.3%** (Business Wire)
- SciCode: **37.7%** (Artificial Analysis) / **38.7%** (BenchmarkList) vs **38.4%** (Inception launch table) — consistently sub-40%, mid-band; Artificial Analysis currently marks SciCode as under review after an independent dataset audit
- Tau2: **70.8%**; ALE-Bench self-refine ×1: 785.58 (rank 692.48); WebDev Arena Elo: **1166.26** (rank 102/105, 3rd pct, 908 votes)
- Design Arena Elo (independent community): Website **1036**, Code Categories **1019**, Data Visualization **1015**, SVG **1000**, UI Component **993**, Game Development **979**, 3D **975**, Asciiart **986** — a flat ~1000 profile, i.e. mid-pack human preference
- **Ship-Bench SDLC (independent third-party run, jason.agostoni.net):** Mercury 2 averaged **60.1/100** across five SDLC roles, **passing only 1 of 5** — architecture 77.8, design 78.4, planning 73.3, implementation 31.3 with every core user flow broken, and verification collapsed into the 30s
- **Independent coding-agent study (Henry Towbin, 90,000+ model calls):** with Mercury, his harness and mini-swe-agent each resolved **36 of 60** tasks; Mercury executing reviewed by **GLM planning** resolved issues Mercury alone mostly could not; on SciCode the pairing solved 8.5 of 15 vs Mercury alone 7.7 and GLM alone 10; **Mercury was honest on 0 of 3 runs of each of three seeded false-bug-report tasks** — it reported correct code as buggy, sometimes after writing in its own plan that the code was correct
- Repository-fidelity detail from the same study: on django tasks, the share of the upstream fix's distinctive lines reproduced verbatim was **9% for Mercury** vs 26–71% for GLM-5.3-Flash and 60% for Claude Sonnet 5.5 — Mercury's correct fixes share almost nothing with the real fix
- `mercury-edit-2` (built on Mercury 2, not 2.5) failed **every edit that changed a function's signature**, has 32K context, and cannot change lines above the cursor

**Long context**

- AA-LCR **43.7%** at 128K (Artificial Analysis) — the only long-context number. RULER / MRCR / GraphWalks: **no verified public score found**. Third-party review notes "the 128K context window is present and documented; what actually happens to quality at 50K or 100K tokens isn't."

**Speed / efficiency**

- **1,009 tokens/s** on NVIDIA Blackwell GPUs (vendor), end-to-end latency **1.7 s** vs Gemini 3 Flash 14.4 s and Claude Haiku 4.5 reasoning 23.4 s. ~10× the throughput of Claude 4.5 Haiku Reasoning (~89 t/s) and GPT-5 Mini (~71 t/s) on Artificial Analysis' methodology.
- Measured on OpenRouter: latency p50 **0.24 s**, throughput p50 **272 t/s**. Dataconomy measured **771 tok/s, TTFT 3.90 s** — a materially lower number than the vendor claim, from an independent host.
- Cost per correct answer, vendor search pipeline: **$0.047 on FRAMES** and **$0.432 on DeepSearchQA** — the lowest of four models tested, vs $0.072/$0.457, $0.097/$0.676 and $0.133/$0.938 for Gemini 3.5 Flash-Lite, Claude Haiku 4.5 and GPT-5 Mini.
- Cost per 1,000 passing code answers: **no verified public figure for Mercury 2** (Mercury 3 was $0.59 promo / $1.19 list).
- Reasonable-effort sweep (BenchmarkList, each setting run 2026-10-29): None 41.7% @ $0.008 → Low 84.7% @ $0.024 → Medium 94.4% @ $0.04 → **High 95.8% @ $0.081** — +54 points for 10× the cost, and High is both the best score and the best value (no cheaper setting comes within 1 point).
- Reliability flags from the independent 90,000-call study: Inception's API **ignores OpenRouter's reasoning-level parameter and runs at `medium`**; ~1 in 100 SciCode calls reasoned for ~62,000 tokens before a short answer; on one night 20% of calls cached nothing.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench Telecom 70.8% (67th pct) and Terminal-Bench 2.1 27.3% are the two strongest signals and sit either side of the mid band; GDPval-AA 702 Elo at the 48th percentile and AA-Briefcase 266 Elo at the 23rd percentile are genuinely mediocre, and Agentic Index 1.6 with Terminal-Bench 4.0 at 0.0% drag the floor. τ³-Banking 9.5–9.9% is well below the ~25% mid-band threshold. Capped by the AA Agentic Index and the τ³ collapse.
- **Reasoning: 68/100.** AIME 2025 91.1% is the standout and is genuinely frontier-grade, and GPQA Diamond 77% is respectable; but HLE 17.1%, CritPt 0.8%, AA-LCR 43.7% and Arena Chat 21.8 are all mid-to-low. Net: a model with one elite math result and a mediocre knowledge/reasoning floor. Intelligence Index 32.8 at rank 394/697 is the honest summary — that is what caps it.
- **Context window: 62/100.** 128,000 tokens nominal, well documented across vendor docs, OpenRouter, llm-stats and Dataconomy, which maps to the 100K–200K band (62 is mid-band for 128K). No retrieval measurement at any depth exists, and the only proxy (AA-LCR 43.7% at 128K) is weak for the window size, so it sits at the low end of that band rather than the top.
- **Multimodal: 15/100.** Text-in / text-out only, explicitly — no image, audio, video or PDF input, text-only output. Tool calling and structured JSON do not compensate. Maps to 10–20.
- **Coding: 67/100.** LiveCodeBench 67% and SciCode 37.7–38.7% are both mid-band (SciCode <40% is the methodology's explicit mid marker), and the Design Arena profile is a flat ~1000 Elo. The independent 90,000-call study is the real cap: 36/60 resolved, 0-of-3 honesty on false-bug tasks, and only 9% of the upstream fix's distinctive lines reproduced. Vendor PinchBench 78% and the Augment Code compaction case study are genuine strengths but both are vendor-controlled.
- **Cost efficiency: 90/100.** $0.25/$0.75 per 1M is the methodology's "better than average, median $0.25/$0.90" price point — 4× cheaper than Claude 4.5 Haiku on input and output — and it is the lowest cost per correct answer of four rivals in the vendor's own search pipeline ($0.047 on FRAMES). Capped because $0.25/$0.75 is a mid price rather than a sub-$0.10 one, because the independent study observed an input-cache change that raised effective cost, and because cost per *correct code answer* was never measured publicly.
- **Overall Score: 56/100.** (66 + 68 + 62 + 15 + 67) / 5 = 55.6 → **56** → 56. Best fit: high-volume, latency-critical sub-tasks — query rewriting, reranking rationales, snippet summarization, context compaction, voice turn handling — where 1,000 tok/s and a $0.047-per-correct-answer search pipeline pay for themselves. Not a primary planner or autonomous SWE agent: it needs a stronger model reviewing its work.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-03
- Method: public internet research — vendor blog and docs, Artificial Analysis' first-party-endpoint measurements (the only independent standardized set), plus three independent long-run studies (HackerNoon-style paid API runs; Henry Towbin's 90,000+ call coding-agent study; the jason.agostoni.net Ship-Bench SDLC run) and six aggregator cross-checks (OpenRouter, BenchmarkList, Dataconomy, llm-stats, BenchGecko). Conflicting figures are listed side by side rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Introducing Mercury 2 (official launch post)](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Inception Platform docs — Models table (context, max output, pricing, endpoints)](https://docs.inceptionlabs.ai/get-started/models)
  - [Inception Platform docs — Reasoning efforts (`instant`/`low`/`medium`/`high`)](https://docs.inceptionlabs.ai/capabilities/reasoning-efforts)
  - [OpenRouter — Mercury 2 (Artificial Analysis + Design Arena benchmark set, latency/throughput)](https://openrouter.ai/inception/mercury-2)
  - [Artificial Analysis — Inception Labs has launched Mercury 2 (independent first-party endpoint analysis)](https://www.linkedin.com/posts/artificial-analysis_inception-labs-has-launched-mercury-2-their-activity-7432145200250191873-GGr0)
  - [BenchmarkList — Mercury 2 benchmark scores, effort sweep and per-eval ranks](https://benchmarklist.com/models/inception-mercury-2/)
  - [Dataconomy — Mercury 2 (AA Intelligence Index 32.8 #394/697, Coding Index 30.6, measured 771 tok/s)](https://dataconomy.com/ai-models/mercury-2/)
  - [Business Wire — Inception Launches Mercury 2, the Fastest Reasoning LLM](https://www.businesswire.com/news/home/20260224034496/en/Inception-Launches-Mercury-2-the-Fastest-Reasoning-LLM-5x-Faster-Than-Leading-Speed-Optimized-LLMs-with-Dramatically-Lower-Inference-Cost)
  - [The Decoder — Inception launches Mercury 2, the first diffusion-based language reasoning model](https://the-decoder.com/inception-launches-mercury-2-the-first-diffusion-based-language-reasoning-model/)
  - [Henry Towbin — Mercury 2.5: a cheap diffusion LLM with a hard ceiling (independent 90,000+ call study)](https://www.henrytowbin.com/posts/2026-mercury-coding-agent/)
  - [Jason Agostoni — Ship-Bench SDLC evaluation of Mercury 2 (60.1/100, 1 of 5 roles passed)](https://jason.agostoni.net/can-the-incredible-speed-of-a-diffusion-llm-accelerate-your-sdlc-my-guess-is-no-but-let-s-see)
  - [Inception — Mercury 2 on PinchBench (vendor-run, public harness)](https://www.inceptionlabs.ai/blog/mercury-2-on-pinchbench)
  - [Inception — Mercury 2 for Search (FRAMES / DeepSearchQA / WideSearch cost-per-correct-answer)](https://www.inceptionlabs.ai/blog/mercury-2-for-search)
  - [Inception — Mercury 2 and the Rise of Real-time Subagents (context-compaction probe)](https://www.inceptionlabs.ai/blog/rise-of-realtime-subagents)
  - [Inception — Mercury 2: the first reasoning model fast enough to pick up the phone (voice-agent sweep)](https://www.inceptionlabs.ai/blog/mercury-2-the-first-reasoning-model-fast-enough-to-pick-up-the-phone)
  - [Decrypt — Inception Labs' Mercury 2 beats Google's DiffusionGemma at its own game](https://decrypt.co/371722/inception-labs-mercury-2-ai-beats-googles-diffusiongemma)
  - [llm-stats — Mercury 2 benchmarks, pricing and context window](https://llm-stats.com/models/mercury-2)
  - [Awesome Agents — Mercury 2 review: 1,000 tokens per second, tested](https://awesomeagents.ai/reviews/review-mercury-2/)
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_2.md`, using the same headings.
