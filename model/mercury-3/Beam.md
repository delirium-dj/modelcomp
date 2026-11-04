# Mercury 3 — findings by Beam

- Source: Inception Labs (`mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship diffusion LLM (dLLM) — the most capable text-diffusion model released to date. It drafts and refines a whole block of tokens in parallel instead of decoding one token at a time, delivering 1,068 tok/s on NVIDIA GPUs while matching or beating GPT-6 Luna and Claude Haiku 5.5 on a 12-row launch chart. Text-only, proprietary, 1M context, near-budget pricing; aimed at latency-sensitive agents, search, support, and tutoring.
- **Provider / access:** Inception API Platform (`mercury-3`, OpenAI-compatible Chat Completions at `https://api.inceptionlabs.ai/v1`); also OpenRouter (`inception/mercury-3`), Baseten, Vercel AI Gateway, Venice, NanoGPT, Kilo Gateway. No open weights; no OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-10-19 (blog published 2026-10-19/2026-10-29 depending on mirror). Knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-3` (Inception, OpenRouter, Vercel, NanoGPT, Kilo); `mercury-3` (Venice). No free Zen ID; new Inception API keys get 100M free tokens.
- **Context window:** 1,000,000 total tokens; up to 131,072 max output (Inception, OpenRouter, Vals AI, Vercel). Up from 260K on Mercury 2.5. An independent HackerNoon run observed a practical 32,768-token output cap on `medium`/`high` reasoning settings.
- **Modalities:** Text in / text out only (no image, audio, video, or PDF input; Vals AI confirms "Image input not supported"). Reasoning yes (`reasoning_effort`: instant/low/medium/high, default low native / medium on OpenRouter). Tool calls yes (parallel). Structured outputs/JSON mode yes. No web-search grounding, no embeddings, no fine-tuning, no seed; temperature capped 0.5–1.0.
- **Pricing (as of 2026-11-04):** List $0.20 / $0.70 per 1M in/out; cached input $0.02 (90% off). Launch promo (50% off, no announced end date) = $0.10 / $0.35 per 1M; cached $0.01. 100M free tokens for new API keys. OpenRouter telemetry shows 86.5% cache-hit rate.
- **Architecture:** Proprietary diffusion LLM (block-parallel denoising; KV-style prefix caching per third-party analysis). >40x total parameters vs Mercury 1 (mini); exact count undisclosed, no technical report. No MoE/active split published. Vendor-reported 1,068 tok/s on NVIDIA GPUs; OpenRouter live traffic median ~221–325 tok/s (P90 ~79 t/s).

### Raw benchmarks found

All launch-table numbers are Inception's own runs at medium effort (no harness/sampling details published); Artificial Analysis has no Mercury 3 page as of 2026-11-04. Independent corroboration: Vals AI, Design Arena, BenchmarkList, and a paid 48,000-call HackerNoon study.
Agent / tool use:

- GDPval-AA v2 (Elo): **1,237.2** (Inception launch chart; vs GPT-6 Luna 1,204.0 / Claude Haiku 5.5 1,225.0)
- Tau3-Banking: **30.24%** (Inception chart; BenchmarkList rank 38/183, 80th percentile; Luna 23.00 / Haiku 13.06)
- Mind2Web (50 live tasks, TinyFish production harness): **50%** completion (vendor-quoted partner testimonial)
- BrowseComp+: **55.18%** (Inception chart; Luna 50.50 / Haiku 5.5 45.78)
- DeepSearchQA: **71.33%** (Inception chart; BenchmarkList rank 13/16, 20th percentile)
- MultiChallenge: **60.35%** (Inception chart; BenchmarkList rank 22/44, 51st percentile)
- IFBench: **76.84%** (Inception chart; BenchmarkList rank 14/49, 73rd percentile)
- OpenRouter live telemetry: **0.58%** tool-call error rate, **2.51%** structured-output error rate
- Vals Index (independent): **43.66% ±1.23** (#28/32); Vals Finance Index **47.22%** (#31/35); Vals Legal Index **62.96%** (#27/33)
- Terminal-Bench 4.0 (Vals AI, independent): **3.03%** (#51/59)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (Inception chart; BenchmarkList rank 54/478, 89th percentile; Luna 86.36 / Haiku 84.51)
- AA-Omniscience-Public (accuracy): **46.44%** (Inception chart; Luna 46.94 / Haiku 37.22)
- AA-LCR v1.1: **77.67%** (Inception chart; BenchmarkList rank 79/423, 82nd percentile; Luna 78.30)
- MRCR v2 (8-needle): **75.50%** (Inception chart; Haiku 5.5 78.40)
- AIIQ Composite IQ: **98** (BenchmarkList; rank 131/168, 22nd percentile)
- HLE / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no Mercury 3 page (AA tracks only Mercury 2/2.5); BenchLM overall not computed (unranked, 9 rows)

Coding:

- SWE-Bench Atlas: **51.08%** (Inception chart; ~18 pts over Luna 33.33 / Haiku 32.26)
- DeepSWE v1: **46.31%** (Inception chart; BenchmarkList rank 14/27, 50th percentile; Haiku 51.62)
- Vibe Code Bench v1.1: **60.93% ±5.38** (#58/123 on Vals AI)
- Code Migration v1.1: **39.26% ±3.17** (#21/29 on Vals AI)
- EMB v1.1: **57.88% ±2.91** (#34/37 on Vals AI)
- HLAB-Vals-1.1: **5.00% ±1.61** (#26/33 on Vals AI)
- Terminal-Bench 4.0: **3.03%** (#51/59 on Vals AI)
- Design Arena Website (Elo): **~1,230–1,231** (OpenRouter-linked row)
- Independent (Henry Towbin): django/SWE-bench-derived **25/29** runs resolved (vs Haiku 5.5 20/30), SciCode **10.3/15** per round, mini-swe-agent **22/30**; contamination caveat (model found benchmark answers via web search)
- Independent (Bruce Li, 48,000+ calls): HumanEval+/MBPP+/LiveCodeBench **86.0%** pass; cost **$0.59–$1.19** per 1,000 passing code answers vs GPT-6 Luna **$0.07** (8–17x worse per correct answer); 61% of output tokens burned on calls that returned nothing at medium/high
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode (official rows): no verified public score found

Long context:

- MRCR v2 (8-needle): **75.50%** (Inception chart; Haiku 5.5 78.40 / Luna 62.72)
- AA-LCR v1.1: **77.67%** at the 1M-capable window (Inception chart; Luna 78.30)
- RULER / GraphWalks: no published numbers; no full-length 1M retrieval curve

### Normalized scores (1–100)

- **Tool use: 70/100.** Vendor agentic table is genuinely strong (GDPval 1,237 Elo, Tau3-Banking 30.24%, BrowseComp+ 55.18%, DeepSearchQA 71.33%, Mind2Web 50%), but the independent Terminal-Bench 4.0 collapse (3.03%) and mid-pack Vals Index (43.66%, #28/32) cap it well below frontier-agent baselines; live telemetry also shows 0.58% tool-call / 2.51% structured-output error rates.
- **Reasoning: 78/100.** GPQA Diamond 89.23% (89th percentile) and IFBench 76.84 are solid, with MRCR 75.5 and AA-LCR 77.67; but AIIQ 98 sits at the 22nd percentile, Omniscience accuracy trails GPT-6 Luna, and HLE/CritPt/AA Intelligence Index are unpublished — no evidence it reaches the frontier reasoning class.
- **Context window: 92/100.** 1M total / 131,072 max out (up from 260K) with MRCR v2 75.50% and AA-LCR 77.67% (82nd percentile) proving usable, not class-leading, long-context retrieval; nudged down because no full 1M retrieval curve exists and an independent run hit a 32,768 practical output cap at higher reasoning settings.
- **Multimodal: 15/100.** Strictly text-in/text-out (Vals AI confirms no image input); Design Arena Website Elo reflects code/markup generation, not multimodal input.
- **Coding: 68/100.** SWE-Bench Atlas 51.08% and independent HumanEval+/MBPP+/LCB 86.0% are respectable for the speed tier, and Vibe Code Bench 60.93% is a genuine strength; but DeepSWE 46.31% trails Haiku 5.5, SWE-bench Verified is 38.5%, Terminal-Bench 4.0 is 3.03%, and no official LiveCodeBench/SciCode row exists.
- **Cost efficiency: 92/100.** $0.10/$0.35 per 1M at launch (list $0.20/$0.70) with $0.01 cached input and 100M trial tokens — among the cheapest capable 1M-context routes; capped because the discount has no announced end date and the independent cost-per-correct-answer test is 8–17x worse than GPT-6 Luna due to runaway reasoning.
- **Overall Score: 65/100.** Half-up mean of the five quality dims (70 + 78 + 92 + 15 + 68) / 5 = 64.6 → 65. Best fit: high-volume, latency-sensitive text agent loops — browser/search steps, support, tutoring, extraction — where 1,000+ tok/s at $0.10/$0.35 wins; avoid for terminal-agent workloads, multimodal work, and maximum quality-per-dollar coding.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-11-04
- Method: public internet research (Inception launch post and models page, OpenRouter listing, Vals AI independent runs, BenchmarkList, BenchLM, The Decoder, eesel AI, Henry Towbin hands-on eval, Bruce Li 48,000-call study, CellCog/OnTheWire/SiliconANGLE/TNW coverage); scores are normalized 1–100 interpretations, not official vendor scores. Vendor-table rows are Inception's own runs (medium effort) pending independent replication and are flagged throughout.
- Reference URLs:
  - [Inception: Diffusion at Scale — Introducing Mercury 3 (official launch post)](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Inception: Models & pricing](https://www.inceptionlabs.ai/models)
  - [Business Wire: Inception Launches Mercury 3](https://www.businesswire.com/news/home/20261019090400/en/Inception-Launches-Mercury-3-Setting-a-New-Pareto-Frontier-in-Speed-and-Intelligence)
  - [OpenRouter: inception/mercury-3 (pricing, telemetry, Design Arena, Vals)](https://openrouter.ai/inception/mercury-3)
  - [Vals AI: Mercury 3 benchmarks, cost and capabilities](https://www.vals.ai/models/inception_mercury-3)
  - [BenchmarkList: Mercury 3 scores and evals](https://benchmarklist.com/models/inception-mercury-3/)
  - [BenchLM: Mercury 3 benchmark coverage](https://benchlm.ai/models/mercury-3)
  - [The Decoder: Inception's Mercury 3 diffusion model claims](https://the-decoder.com/inceptions-mercury-3-diffusion-model-claims-to-beat-gpt-6-luna-and-claude-haiku-5-5-at-a-fraction-of-the-wait)
  - [eesel AI: independent Mercury 3 review (speed tail, error rates, text-only)](https://www.eesel.ai/blog/inception-mercury-3-review)
  - [Henry Towbin: independent hands-on eval (django/SciCode, contamination caveat)](https://www.henrytowbin.com/posts/2026-testing-mercury-3/)
  - [Bruce Li: Mercury 3 raw benchmark data and scripts](https://github.com/zbruceli/mercury3)
  - [HackerNoon: independent 48,000-call Mercury 3 study](https://hackernoon.com/the-ai-model-that-promised-to-crush-gpt-6-has-a-surprising-weakness)
  - [Vercel AI Gateway: Mercury 3 model card](https://vercel.com/ai-gateway/models/mercury-3)
  - [You.com Inference Router: Mercury 3](https://you.com/product/inference-router/models/mercury-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

