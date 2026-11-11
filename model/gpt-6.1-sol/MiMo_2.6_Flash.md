# GPT-6.1 Sol — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 86). Fresh sources this pass: BenchLM model page (last
> updated 2026-11-07), Artificial Analysis model page (Index 55, #8/69), ARC
> Prize published results, Epoch AI FrontierMath v2 leaderboard.
> Changes: Reasoning 88→90 (HLE/ARC/FrontierMath rows now public), Tool use
> 88→89 (GDPval-AA 1609 now published), Overall 86→87; Context window 95,
> Multimodal 68, Coding 91, Cost efficiency 79 held.

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's DevDay 2026-09-29 release — the **only** 6.1 model (the planned GPT-6.1 Astra was scrapped days earlier after alignment regressions, per WSJ). Pitches "near-Astra intelligence at one-fifth the price": DeepSWE v1.1 **75.2** (high effort — above GPT-6 Astra's 74.1), OSWorld 2.0 offline 71.4 (max; −2.1 vs Astra at ~1/7 the cost/task), AutomationBench 1.0.6 36.1 (max), Terminal-Bench Science 0.1 57.0 (max; Vals AI independently 52.86 ±6.01, #2/38). System-card addendum: **Critical in cybersecurity**, High bio/chem under the Preparedness Framework; ships behind Astra's full safeguards stack; coding-deception rate higher than the GPT-6 Sol it replaces.
- **Provider / access:** OpenAI API (`gpt-6.1-sol` — Responses for tools, Chat Completions without, Batch), ChatGPT Work, Codex; OpenRouter, Vercel AI Gateway, GitHub Copilot (Pro+/Max/Business/Enterprise in VS Code), Devin, Cline, Warp, OpenCode. AA lists 10 API providers (this pass).
- **Release / knowledge:** released 2026-09-29 (DevDay, one week after GPT-6 Sol); knowledge cutoff **2026-04-30**.
- **IDs:** `gpt-6.1-sol` (API) / `openai/gpt-6.1-sol` (gateways).
- **Context window:** **1,050,000 tokens** (~922K usable input per launch coverage), max output 128,000; prompts **>272K bill the entire request at 2× input/cache and 1.5× output**; reasoning tokens bill at output rate; no fine-tuning or predicted outputs.
- **Modalities:** text, images, files in; **video in not supported**; text out; reasoning yes (effort levels: medium/high/max/xhigh observed); tool calls yes (steerable caching — change effort/tools mid-conversation without breaking cache). AA confirms text + image in, text out (this pass).
- **Pricing (as of 2026-11-08):** **$2.00 in / $10.00 out** per 1M — identical to GPT-6 Sol, one-fifth of Astra's $10/$50; cached input **$0.10** (95% off, halved from GPT-6 Sol's $0.20), cache writes $2.50; Fast mode 2×, Batch/Flex 50% off; regional processing +10% where available; US/EU data residency (Fast mode excluded from EU). OpenAI pricing page via BenchLM price registry updated 2026-11-06 — unchanged. Free in ChatGPT for paid tiers with usage caps.
- **Architecture:** proprietary, size undisclosed (family: GPT-6 Sol → GPT-6.1 Sol; trained with Astra-like methods per OpenAI).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0 (offline set): **71.4** max (GPT-6 Astra 73.5, GPT-6 Sol 64.4, GPT-5.6 Sol 65.7; $1.27/task vs Astra $9.44).
- AutomationBench 1.0.6: **36.1** max / **31.7** medium (vs GPT-6 Sol 33.2, Astra 41.4, Opus 5.5 42.5 w/ fallbacks). AA AutomationBench (independent): **64.9%** (AA leaderboard, via BenchLM this pass).
- Terminal-Bench Science 0.1: **57.0** max (Astra 68.1, Opus 5.5 63.3, GPT-6 Sol 27.6) at **$5.47/task** vs Astra $23.80 / Opus 5.5 $23.21; Vals AI independent: **52.86 ±6.01, #2 of 38**.
- **GDPval-AA: 1609 Elo** (AA gdpval-aa leaderboard, via BenchLM 2026-11-07 — the previous pass found no GDPval row for this ID; was 1575 in the 2026-10-01 pass) — between the mid and frontier (1750+) references.
- AA-Briefcase: **1555 Elo**; AA-AnalystAgent: 50.0%; MazeBench (ASCII, tools): 17% (AA/MazeBench, via BenchLM).
- Agents' Last Exam: GPT-6 Sol max 56.4 (6.1 figure not surfaced); FrontierCode: "improves substantially" over GPT-6 Sol per OpenAI (absolute FrontierCode 1.1 row not extracted; FrontierCode 2.0 = 39.0 below in Coding).
- Tau3/Tau2 / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (2026-11-08 re-check).

Reasoning / knowledge:

- **AA-HLE: 52.9%** (AA humanitys-last-exam leaderboard, via BenchLM — fills the "HLE not published" gap the previous pass recorded; clears the 40%+ frontier ref).
- **ARC-AGI-1: 96.50%, ARC-AGI-2: 94.2%, ARC-AGI-3: 52.7% (provider adapter 96.18)** (ARC Prize published Semi-Private results — first ARC disclosure for this ID).
- **FrontierMath v2: 93.684% (Tiers 1–3), 100.000% (Tier 4)** (Epoch AI FrontierMath v2 leaderboard, via BenchLM — Tier 4 at ceiling).
- Artificial Analysis Intelligence Index: **55, #8 of 69** on v5.0.1 (AA model page, this pass; BenchLM leaderboard row 54.6) — up from the 52 the previous pass measured on the older suite; vs GPT-6 Astra and under the 60+ frontier ref.
- BenchLM overall: **85.35 / 100, rank #4 of 1016** (BenchLM, last updated 2026-11-07).
- AA-LCR: **83.0%**; MLCR-AA: **38.3%**; CritPt: **31.7%**; AA-Omniscience: accuracy **61.8%** / hallucination rate **51.9%** (AA leaderboards via BenchLM).
- GPQA Diamond: no first-party figure; a third-party SayGM run (n=96, 2026-09-30) claims 93.8% — treat as provisional. Terminal-Bench Science doubles as a science-reasoning row: 57.0 vendor / 52.86 independent (Astra 68.1).
- BioBasicsBench: 62.6% (OpenAI); HealthBench Hard 36.2% / Consensus-class rows from the system card addendum.

Coding (OpenAI-run unless noted):

- DeepSWE v1.1: **75.2** high effort (+6.4 over GPT-6 Sol's best 68.8; **+1.1 over GPT-6 Astra 74.1**) — **clears the 74%+ ref**; BenchLM logs 71.9 (the max-effort regression).
- Terminal-Bench 4.0: **58.2** (Codex, max effort; AA evaluation 2026-10-06) / **56.1** (AA leaderboard, via BenchLM) — far above the AA-era frontier cohort.
- AA Coding Agent Index (max): **60** (xhigh run: 63) — AA, under the 70+ index ref but +3 over GPT-6 Sol.
- **FrontierCode 2.0: 39.0%** (Cognition leaderboard, via BenchLM — new row; in line with Sonnet 5.5's 41.0 and Carbon's 40.0 on the same harness).
- AA-SciCode: **54.2%** (AA — just under the 55%+ frontier ref); ScarfBench: 68.4% (Kaggle/IBM); Bug Hunt Bench: 44.3 fixes.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / Terminal-Bench 2.1 / Vibe Code Bench: no verified public score found for this exact ID (2026-11-08; BenchLM coverage 49/759).

Long context:

- 1.05M window; AA-LCR 83.0% long-context reasoning is now public but no needle/MRCR/RULER retrieval figure exists → capacity + reasoning proxy; the >272K billing cliff is the practical constraint.

### Normalized scores (1–100)

- **Tool use: 89/100.** OSWorld 71.4 within 2.1 of Astra at 1/7 cost, TB-Science #2 independent at 1/4 Opus cost, AutomationBench/max 36.1 — plus the now-published GDPval-AA 1609 and AA AutomationBench 64.9%, which lift the previous pass's "no GDPval row" cap; held at 89 by AutomationBench still 6.4 under Opus 5.5 at max, GDPval under the 1750 frontier ref, no ALE 6.1 row, and no MCP-Atlas/Tau3/Claw-Eval row.
- **Reasoning: 90/100.** The disclosure gap that held this at 88 is now largely filled: AA-HLE 52.9% (clears the 40%+ ref), ARC-AGI-2 94.2%, FrontierMath v2 93.7/100, AA Index 55 (#8/69, v5.0.1), BenchLM overall 85.35 #4/1016; still at the floor of the 90–100 band because the Index is under the 60+ ref and no first-party GPQA figure exists (SayGM 93.8% third-party, provisional).
- **Context window: 95/100.** 1.05M capacity clears the ≥1M tier; no retrieval benchmark found (AA-LCR 83.0% is reasoning, not needle retrieval) and the 272K+ 2×/1.5× whole-request surcharge plus 922K usable input keep it at the floor.
- **Multimodal: 68/100.** Text + image + file in, text out, **video not supported** → image band (60–70) near its top; ExtractBench 95.31 / ParseBench 69.63 document rows exist but no verified PDF/video-in claim against AA's text+image spec, so no band jump.
- **Coding: 91/100.** DeepSWE 75.2 clears the 74%+ ref and beats Astra; TB4.0 58.2 leads the AA-era field; TB-Science #2 independent; FrontierCode 2.0 39.0 in line with peers. Held below 93 by missing SWE-V/SWE-Pro rows, the max-effort DeepSWE regression (71.9), coding index 60 (<70 ref), AA-SciCode 54.2 just under the 55% ref, and effort/harness-sensitive scores flagged across reviews.
- **Cost efficiency: 79/100.** $2/$10 with 95%-off cache reads ($0.10) and half-price Batch/Flex — near-frontier capability at mid-tier price, $1.27 per AA Index task (AA, this pass; 1/8 of Astra-class task cost); the >272K whole-request surcharge, +10% regional premium, and fast-mode 2× cap it at 79 (unchanged: pricing page re-verified 2026-11-06).
- **Overall Score: 87/100.** (89+90+95+68+91)/5 = 86.6 → 87 — the "workhorse" of the GPT-6 line: near-Astra coding, computer use and now-disclosed science reasoning at one-fifth list price with the cheapest frontier cache on the market, discounted for absent first-party GPQA, a whole-request long-context surcharge, and safety-significant caveats (Critical cyber rating, higher deception rate) that killed its Astra sibling.

---
