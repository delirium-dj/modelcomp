# Grok 4.7 — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.7`), researched from fresh public web sources; Artificial Analysis lists the publisher as "SpaceXAI" on its 2026 model pages, but the canonical publisher of the Grok line is xAI.
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (reasoning; effort variants `low` / `medium` / `high` / `xhigh`, default `high`)
- **Short description:** xAI's frontier text model for coding, agentic tasks, and knowledge work, positioned as the most capable model they have built. The AA "Grok 4.7 (xhigh)" and "(high)" entries are reasoning-effort variants of the same release, not separate models.
- **Provider / access:** xAI first-party API (`grok-4.7`, Chat Completions-compatible) plus the Responses API (encrypted reasoning content is always returned on Responses); Artificial Analysis lists 3 API providers total. No Free ID on OpenCode Zen was found as of 2026-09-25.
- **Release / knowledge:** released 2026-09-21 (Artificial Analysis FAQ); knowledge cutoff May 2026 (docs.x.ai note).
- **IDs:** `grok-4.7` (xAI direct). No Free ID exists on Zen as of research date — paid only.
- **Context window:** 500,000 tokens (docs.x.ai model page + Artificial Analysis spec, both verified 2026-09-25). Max output not stated on the docs page — unverified.
- **Modalities:** text + image in (jpg/jpeg/png, 20 MiB max per image, unlimited count); text out; reasoning yes with selectable efforts; function calling yes; structured outputs (JSON mode) yes; logprobs/top_logprobs not supported; Batch API not supported; no realtime-events knowledge without server-side search tools enabled.
- **Pricing (as of 2026-09-25):** paid — prompts <200k tokens: $2.00 in / $0.50 cached / $6.00 out per 1M; prompts ≥200k tokens: $4.00 / $1.00 / $12.00 per 1M (whole request billed at the higher rate). AA blended price $1.35/1M (7:2:1 cache-hit/input/output); AA cost per Intelligence Index task $3.74 (xhigh) / $2.73 (high). No free tier, so no data-usage caveat applies.

### Raw benchmarks found

BenchLM coverage for this model is partial (21 of 483 rows, updated 2026-09-24) and its overall score is listed as "coming soon"; AA Intelligence Index v4.3.2 is the anchor composite.

Agent / tool use:

- AA Briefcase v1.1 (**agentic knowledge work**): Elo **1657** (BenchLM)
- GDPval-AA v2.1 (**agentic real-world work**): **1695** Elo / **59.8%** normalized (BenchLM)
- Terminal-Bench 4.0 (**agentic coding & terminal**): **38.00%** (BenchLM)
- Terminal-Bench 2.1 (Vals harness): **73.4%** (BenchLM)
- AA AutomationBench (**agentic SaaS workflows**): **65.6%** (BenchLM)
- AA Harvey LAB (legal agentic): **19.6%** (BenchLM)
- GDP.pdf (professional document reasoning, all-pass): **20.0%** (BenchLM)
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **46** (BenchLM lists 46.5%), **#21 of 211** reasoning-class models (AA; median 26)
- AA-HLE: **43.1%** (BenchLM)
- AA-LCR v1.1 (long-context reasoning): **76.7%** (BenchLM)
- CritPt (physics reasoning): **17.7%** (BenchLM)
- AA-Omniscience Index / Accuracy / Hallucination Rate: **32.0** / **47.4%** / **29.3%** (BenchLM)
- HealthBench Professional: **56.7%** (BenchLM)
- GPQA Diamond / LCR vendor numbers / MLCR: no verified public score found (AA-LCR is the closest long-context proxy)

Coding:

- DeepSWE: **71.0%** (BenchLM)
- AA-SciCode: **57.4%** (BenchLM)
- CursorBench 4.0: **46.3%** (BenchLM)
- EEBench: **64.0%** (BenchLM)
- FrontierSWE v2: **29.5%** (BenchLM)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found (swebench.com leaderboard is interactive and had no grok-4.7 row verifiable on 2026-09-25)

Long context:

- 500k window claimed; no MRCR / RULER / GraphWalks retrieval score reported. AA-LCR v1.1 at 76.7% is the only long-context signal.

### Normalized scores (1–100)

- **Tool use: 75/100.** GDPval-AA 1695 Elo and AutomationBench 65.6% sit near the frontier band, and TB2.1 (Vals) 73.4% is solid; capped by Terminal-Bench 4.0 at 38.0% (weaker on the newer agentic-terminal harness), Harvey LAB 19.6%, and missing Tau3-Banking numbers.
- **Reasoning: 80/100.** HLE 43.1% and AA-LCR 76.7% are strong, and the AA Intelligence Index of 46 (#21/211) is well above the mid band; capped by CritPt 17.7% (physics) and a mediocre 29.3% hallucination rate / 32.0 Omniscience Index.
- **Context window: 86/100.** 500k lands in the 500K–1M tier (85–94 per methodology); no measured retrieval at 512K+ (which would unlock higher) and unspecified max output cap it.
- **Multimodal: 65/100.** Image input (jpg/png, 20 MiB) + text output maps to the +image-in band (60–70); no video/PDF/audio input and no non-text output prevent a higher score.
- **Coding: 80/100.** DeepSWE 71.0% and AA-SciCode 57.4% sit at/near frontier reference bands, with EEBench 64.0% supporting; capped by FrontierSWE v2 29.5%, CursorBench 46.3%, and missing SWE-bench Verified / LiveCodeBench verification.
- **Cost efficiency: 85/100.** Paid only ($2.00/$6.00 short-context, $1.35 blended per 1M) — no free tier; slightly above the ~88 reference point ($1.25/$4.25) in price, partially offset by AA's Pareto-competitive $2.73/task at high effort. Scored independently, never counted toward Overall.
- **Overall Score: 77/100.** (75 + 80 + 86 + 65 + 80) / 5 = 77.2 → 77 (half-up). Best fit: a strong frontier reasoning/coding/agentic pick at mid-tier pricing — prefer `high` reasoning effort for latency-sensitive work since `xhigh` is notably slow (47.5 tok/s) and very verbose (240M tokens across the AA Intelligence Index).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-25
- Method: public internet research (xAI docs, Artificial Analysis model/release pages, BenchLM, SWE-bench site); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.8.md`, using the same headings.
