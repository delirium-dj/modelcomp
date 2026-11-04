# Mercury 3 — findings by MiMo 2.6 Flash

- Source: Inception (`mercury-3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception's third-generation diffusion language model (dLLM) flagship (2026-10-19) that drafts and refines tokens in parallel instead of autoregressively — 1,068 tok/s self-reported on NVIDIA GPUs, 1M context, and near-frontier quality at deep-discount pricing; positioned for latency-critical agents, voice-adjacent chat, and browser/search agents.
- **Provider / access:** Inception API (OpenAI-compatible Chat Completions `v1/chat/completions`, model id `mercury-3`); OpenRouter `inception/mercury-3`; Baseten; Vercel AI Gateway; also Venice, AssemblyAI, WaveSpeedAI (5+ routes, endpoints.run 2026-11-03). Chat Completions API — not a Responses API. No open weights.
- **Release / knowledge:** Released 2026-10-19 (Inception launch post; SiliconANGLE/TNW 2026-10-20). Knowledge cutoff not published.
- **IDs:** `inception/mercury-3` (OpenRouter), `mercury-3` (Inception native). No Free ID on OpenCode Zen found; new Inception API keys get 100M free tokens (TechPilot) — a trial credit, not a standing free tier.
- **Context window:** 1,000,000 (1M) total; 131,072 max output (Inception models page, OpenRouter, Vals AI — consistent). Up from 260K on Mercury 2.5. Full-window quality is not independently verified (computeprices caveat).
- **Modalities:** Text in; text out only — **no image input** (Vals AI model card: "Image input not supported"); reasoning yes (effort `instant`/`low`/`medium`/`high`, native default low, OpenRouter default medium; temperature 0.5–1.0); tool calls yes; structured outputs yes; prompt caching yes.
- **Pricing (as of 2026-11-04):** **50% launch discount, no announced end date:** $0.10 in / $0.35 out / $0.01 cached per 1M — list price $0.20 / $0.70 / $0.02 (Inception docs, OpenRouter, TechPilot). Paid; training-policy unknown on most routes (endpoints.run); ZDR yes on Inception route (vertical tabs).
- **Architecture:** Proprietary diffusion LLM; parameter count undisclosed — "more than 40× the size of Mercury 1 (mini)" and ~3× its benchmark intelligence, at unchanged 1,000+ tok/s (Inception). Training used Mercury 3 agent swarms for recursive self-improvement (+~16% speed, Ermon via TNW).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2 (Elo): **1,237.2** (Inception launch chart, medium effort — vs GPT-6 Luna 1,204.0, Claude Haiku 5.5 1,225.0; no independent AA run of Mercury 3 exists)
- Tau3-Banking: **30.24%** (launch chart; BenchmarkList rank 38/183, 80th percentile)
- BrowseComp+: **55.18%** (launch chart; Luna 50.50, Haiku 5.5 45.78)
- DeepSearchQA: **71.33%** (launch chart; BenchmarkList rank 13/16, 20th percentile)
- MultiChallenge: **60.35%** (launch chart; BenchmarkList rank 22/44, 51st percentile)
- Vals Index (independent, Vals AI run 2026-10-24): **43.66% ±1.23 — rank 28/32**; cost/test $0.478; refusal 0.14%; fallback 0%
- Terminal-Bench 4.0 (Vals AI, independent): **3.03%** — rank 51/59 (GILD: 3% via mini-swe-agent harness)
- Toolathon / MCP-Atlas: no verified public score found
- Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.23%** (launch chart; BenchmarkList rank 54/478, 89th percentile)
- IFBench: **76.84%** (launch chart; rank 14/49, 73rd percentile)
- AA-Omniscience (Accuracy): **46.44%** (launch chart — narrowly loses to Luna 46.94; non-hallucination rate not published)
- AIIQ Composite IQ: **98** (BenchmarkList — rank 131/168, 22nd percentile)
- HLE: no verified public score found (in the Inception quality-average list but no published row)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **not measured** — Inception's X post "Intelligence Index" is their own weighted average of 11 benchmarks (GDPval, SciCode, Tau3, Omniscience, IFBench, SO Quality, AA-LCR, GPQA, TB2.1, BrowseComp+, DeepSearchQA @30), NOT the AA composite; CtrlAltDebrief and GILD both show AA Index = n/a for Mercury 3
- Omniscience Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Atlas: **51.08%** (launch chart — vs Luna 33.33, Haiku 5.5 32.26; widest lead of the table)
- DeepSWE v1: **46.31%** (launch chart — **loses** to Haiku 5.5 51.62; BenchmarkList rank 14/27, 50th percentile)
- Vibe Code Bench v1.1 (Vals AI, independent): **60.93% ±5.38** — rank 58/123
- Code Migration v1.1 (Vals AI): **39.26%** — rank 21/29
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench: no verified public score found (only Kimi K2.5 measured in the head-to-head)
- SciCode: no verified public score found (Inception lists it in its internal quality average but publishes no row)
- Terminal-Bench 2.1: no verified public score found (same — referenced in the internal average only)

Long context:

- MRCR v2: **75.50%** (launch chart — **loses** to Haiku 5.5 78.40; beats Luna 62.72)
- AA-LCR v1.1: **77.67%** (launch chart; BenchmarkList rank 79/423, 82nd percentile — **loses** to Luna 78.30)
- No MRCR/RULER at the full 1M window reported; 1M window is spec-sheet only for retrieval quality

Multimodal (context):

- Text-only model (no image/video/audio input): MMMU / CharXiv / OSWorld: no verified public score found — modality row is capped by design, not by missing data
- Design Arena Website: **1,230** (OpenRouter model benchmarks via BenchLM — site-generation arena)

Other independent rows (Vals AI):

- Finance Agent v2.1 **54.71%** (30/35) · Tax Agent Bench **18.17%** (54/80) · Legal Research Bench **28.85%** (56/89) · HLAB **5.00%** (26/33) · EMB v1.1 **57.88%** (34/37) — Vals Finance Index 47.22 (31/35), Vals Legal Index 62.96 (27/33)

Conflicting-source notes (compared across sites):

1. **Pricing** — BenchmarkList/LLMReference show list price $0.20/$0.70; Inception docs/OpenRouter/techpilot/endpoints.run show the live 50%-off launch price $0.10/$0.35 (cached $0.01). Discount has no announced end date; WaveSpeed already routes at full list.
2. **Win-count claim** — SiliconANGLE and On The Wire say "highest on 8 of 12" rows; eesel reads "10 of 12"; Codeify "beats Luna 10/12, Haiku 9/12". Reconciled: Mercury 3 is outright winner on 8/12 rows; per-opponent tallies differ. DeepSWE and both long-context rows are losses.
3. **First-party vs independent** — Inception's table (medium effort) shows near-frontier results; Vals AI's independent run (high effort, 2026-10-24) ranks it 28/32 overall with Terminal-Bench 4.0 at 3% and HLAB at 5%. TNW/SiliconANGLE both note "no outside group had published results at launch" — Vals's numbers arrived a week later.
4. **"Intelligence Index" ambiguity** — Inception's X clarification defines it as a self-weighted 11-benchmark average; Artificial Analysis has not measured Mercury 3 (GILD/CtrlAltDebrief: not published). PublicAI Index: "not ranked" (single-publisher evidence, ~56.3 if ranked); BenchLM: 9 rows, unranked overall.
5. **Speed claims** — 1,068 tok/s and 4–8× are Inception's own measurements; Curiosity's single-container reproduction says 1–2 s per chat turn with tool calls ("not a benchmark"), and no independent throughput test exists.

### Normalized scores (1–100)

- **Tool use: 72/100.** First-party agentic rows are strong (GDPval-AA Elo 1,237.2 above Haiku 5.5, Tau3 30.24%, BrowseComp+ 55.18%, DeepSearchQA 71.33%), but the independent Vals Index run is 28/32 and Terminal-Bench 4.0 is 3.03% (51/59); Toolathon/Tau2/Claw unverified — the gap between vendor chart and independent reality caps it hard.
- **Reasoning: 78/100.** GPQA Diamond 89.23% (89th pct) and IFBench 76.84% are solid, but AIIQ 98 sits at the 22nd percentile, Omniscience accuracy trails GPT-6 Luna, and HLE/CritPt/AA-Intelligence-Index have no published number — no evidence it reaches the frontier reasoning class.
- **Context window: 88/100.** 1M total / 131,072 max out is a top-tier spec (3.8× Mercury 2.5), with MRCR v2 75.50% and AA-LCR 77.67% (82nd pct) proving solid but not leading retrieval — both long-context rows are losses to Luna/Haiku, and no measurement exists at the full 1M window.
- **Multimodal: 15/100.** Text-only input and output (Vals confirms no image input) — the template's text-only floor; Design Arena 1,230 shows HTML generation works but does not change the modality coverage.
- **Coding: 70/100.** SWE-Bench Atlas 51.08% (~18 pts ahead of Luna/Haiku at medium effort) and Vibe Code Bench 60.93% (58/123) are genuine strengths, but DeepSWE 46.31% loses to Haiku 5.5, Terminal-Bench 4.0 is 3.03% (51/59), and SWE-bench Verified/Pro, LiveCodeBench, SciCode and Terminal-Bench 2.1 have no published row for this model.
- **Cost efficiency: 90/100.** $0.10/$0.35 per 1M at launch (list $0.20/$0.70) with $0.01 cached input and 100M trial tokens — roughly 1/10th to 1/20th of flagship autoregressive pricing for a 1M-context flagship tier, and Vals measured $0.478 per test run; capped only because the discount's end date is unknown and the list price doubles it.
- **Overall Score: 64.6/100.** Mean of the five non-cost dims (72+78+88+15+70)/5 = 64.6 — best fit: ultra-low-latency agents and high-volume pipelines where 1,000+ tok/s at $0.10/$0.35 beats frontier quality; not a frontier-reasoning or multimodal workhorse (independent Vals rank 28/32, Terminal-Bench 4.0 3%).

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-11-04
- Method: public internet research (official Inception launch post + models docs, OpenRouter/provider listings, cross-checked against independent benchmark aggregators, Vals AI runs, and hands-on reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception — Diffusion at Scale: Introducing Mercury 3 (official launch post)](https://inceptionlabs.ai/news/diffusion-at-scale-introducing-mercury-3)
  - [Inception docs — Models & pricing (Mercury 3 spec table)](https://docs.inceptionlabs.ai/get-started/models)
  - [OpenRouter — inception/mercury-3 (pricing/API)](https://openrouter.ai/inception/mercury-3)
  - [BenchmarkList — Mercury 3 benchmark scores](https://benchmarklist.com/models/inception-mercury-3)
  - [Vals AI — Mercury 3 independent benchmark results](https://www.vals.ai/models/inception_mercury-3)
  - [BenchLM — Mercury 3 benchmark coverage](https://benchlm.ai/models/mercury-3)
  - [SiliconANGLE — Inception says Mercury 3 beats GPT-6 Luna and Claude Haiku 5.5](https://siliconangle.com/2026/10/20/inception-says-mercury-3-beats-gpt-6-luna-and-claude-haiku-5-5-at-up-to-8x-the-speed/)
  - [The Next Web — Inception's Mercury 3 benchmarks are its own](https://thenextweb.com/news/inception-mercury-3-diffusion-llm)
  - [On The Wire — Inception's 12-row benchmark table, row by row](https://onthewire.ai/article/inception-says-its-mercury-3-diffusion-model-runs-at-1-068-tokens-a-second-and-l)
  - [eesel AI — Inception Mercury 3 explained: speed, benchmarks, price](https://www.eesel.ai/blog/inception-mercury-3)
  - [GILD Intelligence — Mercury 3 measures & sources](https://gildhq.com/models/mercury-3)
  - [PublicAI Index — Mercury 3](https://publicai.io/model-index/m/mercury-3)
