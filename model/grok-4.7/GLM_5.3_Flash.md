# Grok 4.7 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.7`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (reasoning; effort variants `low` / `medium` / `high` / `xhigh`, default `high`)
- **Short description:** xAI's frontier text model for coding, agentic tasks, and knowledge work, positioned as the most capable model they have built: beats GPT-5.6 Sol on five of seven published benchmarks and improves on Grok 4.6 on every row. The AA "Grok 4.7 (xhigh)" and "(high)" entries are reasoning-effort variants of the same release, not separate models.
- **Provider / access:** xAI first-party API (`grok-4.7`, Chat Completions-compatible) plus the Responses API (encrypted reasoning content is always returned on Responses); Artificial Analysis lists 3 API providers total. No Free ID on OpenCode Zen was found as of 2026-09-25.
- **Release / knowledge:** released 2026-09-21 (Artificial Analysis FAQ); knowledge cutoff May 2026 (docs.x.ai note).
- **IDs:** `grok-4.7` (xAI direct). No Free ID exists on Zen as of research date — paid only.
- **Context window:** 500,000 tokens (docs.x.ai model page + Artificial Analysis spec, both verified 2026-09-25). Max output not stated on the docs page — unverified.
- **Modalities:** text + image in (jpg/jpeg/png, 20 MiB max per image, unlimited count); text out; reasoning yes with selectable efforts; function calling yes; structured outputs (JSON mode) yes; logprobs/top_logprobs not supported; Batch API not supported; no realtime-events knowledge without server-side search tools enabled; trained to natively understand the Grok Bot harness.
- **Pricing (as of 2026-10-09):** paid — prompts <200k tokens: $2.00 in / $0.50 cached / $6.00 out per 1M; prompts ≥200k tokens: $4.00 / $1.00 / $12.00 per 1M (whole request billed at the higher rate). A fast variant with twice the output speed is available at twice the price (xAI, via officechai). AA blended price $1.35/1M (7:2:1 cache-hit/input/output); AA cost per Intelligence Index task $3.74 (xhigh) / $2.73 (high); xAI's price-performance chart: ~$6/task at ~46% CursorBench — at or above rivals' curves at lower spend (Opus 5 needs ~2x per task for a similar score). No free tier.
- **Architecture:** proprietary; ~2.1-trillion-parameter new, larger base model (Musk-sized, per geotoolbox/cellcog reporting) trained with a longer RL run on a harder multi-hour task mix.

### Raw benchmarks found

> AA/BenchLM rows (updated 2026-09-24/25) + xAI's published launch table (via officechai, 2026-09-21; Grok 4.7 at xHigh effort unless noted, compared with Grok 4.6 High, GPT-5.6 Sol Max, Fable 5.1 Max).

Agent / tool use:

- AA Briefcase v1.1 (**agentic knowledge work**): Elo **1657** (BenchLM; xAI table: vs Grok 4.6 1546, Sol 1487, Fable 5.1 1678)
- GDPval-AA: **1695 Elo** / **59.8%** normalized (BenchLM; xAI table: up from Grok 4.6's 1605, behind Fable 5.1's 1735, ahead of GPT-6 Astra's 1542)
- AutomationBench (AA, **agentic SaaS workflows**): **65.6%** (BenchLM)
- Terminal-Bench 4.0 (**multi-hour terminal work**): **38.0%** (BenchLM; xAI table: vs Grok 4.6 20.3%, Sol 37.3%, Fable 5.1 57.9% — ~20-pt gap to Fable 5.1, nearly double Grok 4.6)
- Terminal-Bench 2.1 (Vals harness): **73.4%** (BenchLM)
- AA Harvey LAB (legal agentic): **19.6%** (BenchLM; xAI table: beats Sol 2.5% and Fable 5.1 6.7%)
- GDP.pdf (professional document reasoning, all-pass): **20.0%** (BenchLM)
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Added 2026-10-16 (BenchLM refresh): GDPval-AA **Elo 1711** / 60.6% normalized (AA board — vs the 1695/59.8% earlier reading, both cited); AA Terminal-Bench 4.0 **25.8%** — CONFLICT with xAI's own 38.0% (harness difference, both cited); AA ITBench **42.1%**; CWE-bench v1 **68.0%**; AA-AnalystAgent **52.5%**; Hermes Bench **74.4%** / Hermes Index **39.3%**; MazeBench ASCII **1%**; MLCR-AA **15.0%**; Bug Hunt Bench **28.8 fixes**
- FrontierMath v2: Tiers 1–3 **53.0%**, Tier 4 **17.1%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured)
- Added 2026-11-05 (BenchLM Nov 5 refresh, now 42 rows and **unranked** — BenchLM no longer computes a composite for it): **ARC-AGI-1 89.50% / ARC-AGI-2 61.4% / ARC-AGI-3 1.8% / provider-adapter 7.02%** (ARC Prize published semi-private results — first ARC rows for this model); **AA Cyber Index 56.4%, CWE-Bench-AA 68.3%, DeepsecBench-AA 26.9%, CyberGym-E2E-AA 74.0%** (AA cyber suite); **FrontierCode 2.0: 28.6%** (Cognition — weak); drift: GDPval-AA 1711→**1718** / 60.6→**60.7%**, MLCR-AA 15.0→**20.0%**, Bug Hunt 28.8→**29.0** fixes, Design Arena Website **1248** (new)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **46** (BenchLM lists 46.5%, AA article "Benchmarking Grok 4.7" confirms 46 — brings xAI into the top-4 labs; **#21 of 211** reasoning-class models; median 26); Nov 5 refresh reads **35.5%** — an AA Index **version rebase** (v4.3.2→v5.0-class scale), documented per RULES, never averaged across scales
- AA-HLE: **43.1%** (BenchLM)
- AA-LCR v1.1 (long-context reasoning): **76.7%** (BenchLM)
- CritPt (physics reasoning): **17.7%** (BenchLM)
- AA-Omniscience Index / Accuracy / Hallucination Rate: **32.0** / **47.4%** / **29.3%** (BenchLM, Oct reading); Nov 5 refresh re-reads **31.2 / 42.7% / 20.0%** — hallucination-rate improved on re-measurement, accuracy down; both cited
- HealthBench Professional (clinical reasoning): **56.7%** (BenchLM; xAI table: trails Sol 60.5% and Fable 5.1 62.1%)
- LatchBio biosafety: **62.4%** — tops the benchmark (xAI, via officechai — new safety row)
- GPQA Diamond / MLCR: no verified public score found (AA-LCR is the closest long-context proxy)

Coding:

- DeepSWE: **71.0%** (BenchLM; xAI table at high effort: beats Fable 5.1 70.0%, trails Sol 72.7%; Grok 4.6 65.2%)
- AA-SciCode: **57.4%** (BenchLM — clears the 55%+ frontier mark)
- CursorBench 4.0: **46.3%** (BenchLM; xAI table: vs Grok 4.6 40.4%, Sol 41.7%, Fable 5.1 51.8%)
- EEBench: **64.0%** (BenchLM; xAI table: beats Sol 39.4%, Fable 5.1 56.4%)
- FrontierSWE v2: **29.5%** (BenchLM)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found (swebench.com leaderboard is interactive and had no grok-4.7 row verifiable on 2026-09-25)
- Coding Agent Index: improved, overtaking GPT-5.6 Sol (AA article)

Long context:

- 500k window claimed; no MRCR / RULER / GraphWalks retrieval score reported. AA-LCR v1.1 at 76.7% is the only long-context signal; xAI says the model is better at managing long contexts (vendor claim)

Safety:

- HackerBench v0.3 (xAI's own risky-cyber benchmark): passes through only **3.3%** of risky dual-use prompts while rarely blocking legitimate security work (xAI, via officechai — new)
- Strongest model xAI has tested on refusals and jailbreak resistance; invite-only red-team access for select cybersecurity partners (vendor claims)

### Normalized scores (1–100)

- **Tool use: 75/100.** GDPval-AA 1695 Elo (confirmed with Fable 5.1's 1735 and GPT-6 Astra's 1542) and AutomationBench 65.6% sit near the frontier band, and TB2.1 (Vals) 73.4% is solid; capped by Terminal-Bench 4.0 at 38.0% (Fable 5.1 57.9% — ~20 pts), Harvey LAB 19.6%, and missing Tau3-Banking numbers.
- **Reasoning: 80/100.** HLE 43.1% and AA-LCR 76.7% are strong, the AA Intelligence Index of 46 (#21/211, v4.3.2 scale) is well above the mid band, and the new ARC-AGI-2 61.4% (ARC Prize semi-private, added Nov 5) is a solid abstract-reasoning pillar — capped by CritPt 17.7% (physics), the near-floor ARC-AGI-3 1.8%, and a mediocre Omniscience profile (acc 42.7%/halluc 20.0% on the Nov re-read).
- **Context window: 86/100.** 500k lands in the 500K–1M tier (85–94 per methodology); no measured retrieval at 512K+ (which would unlock higher) and unspecified max output cap it.
- **Multimodal: 65/100.** Image input (jpg/png, 20 MiB) + text output maps to the +image-in band (60–70); no video/PDF/audio input and no non-text output prevent a higher score.
- **Coding: 80/100.** DeepSWE 71.0% (at high effort; beats Fable 5.1) and AA-SciCode 57.4% sit at/near frontier reference bands, with EEBench 64.0% supporting; capped by FrontierSWE v2 29.5%, CursorBench 46.3%, and missing SWE-bench Verified / LiveCodeBench verification.
- **Cost efficiency: 85/100.** Paid only ($2.00/$6.00 short-context, $1.35 blended per 1M) — no free tier; slightly above the ~88 reference point ($1.25/$4.25) in price, partially offset by AA's Pareto-competitive $2.73/task at high effort and xAI's ~$6/task at ~46% CursorBench frontier claim. Scored independently, never counted toward Overall.
- **Overall Score: 77/100.** (75 + 80 + 86 + 65 + 80) / 5 = 77.2 → 77 (half-up). Best fit: a strong frontier reasoning/coding/agentic pick at mid-tier pricing — prefer `high` reasoning effort for latency-sensitive work since `xhigh` is notably slow (47.5 tok/s) and very verbose (240M tokens across the AA Intelligence Index).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM Grok 4.7 page fetched 2026-11-05 (Nov 5 data, 42 rows, now unranked/no composite) — ARC-AGI 1/2/3 rows, four AA cyber rows and FrontierCode 2.0 added; drift re-reads cited (GDPval 1718/60.7%, MLCR 20.0%, Omniscience 31.2/42.7/20.0, AA Index 35.5 = v5.0-class rebase of the v4.3.2 46, documented not averaged) — no score changes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
