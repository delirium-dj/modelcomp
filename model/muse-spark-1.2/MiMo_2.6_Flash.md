# Muse Spark 1.2 — findings by MiMo 2.6 Flash

- Source: Meta Superintelligence Labs (`muse-spark-1.2`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's multimodal reasoning model (released 2026-08-05 alongside the beta terminal agent **Muse Code**), billed as a coding release but with the bigger independent move in agentic knowledge work (GDPval-AA +260 Elo, Agentic Index +9.6). Two IDs: standard (no training on traffic) and **Contributor** (16× cheaper, traffic used to improve Meta products). Open-weight version promised 2026-08-10, not yet shipped; sibling Muse Glimmer 30B shipped Apache 2.0.
- **Provider / access:** Meta Model API (`muse-spark-1.2`, `muse-spark-1.2-contributor`), OpenRouter, Vercel AI Gateway, NanoGPT, Abacus, +6 more; Muse Code (beta terminal agent, co-trained with 1.2); Meta AI apps. Public preview expanded beyond the US.
- **Release / knowledge:** released 2026-08-05; knowledge cutoff not prominently published → not scored.
- **IDs:** `meta/muse-spark-1.2` (gateway routes) / `muse-spark-1.2` (native; `-contributor` variant).
- **Context window:** 1,048,576 tokens (listed 1.05M); max output ~131,100 tokens.
- **Modalities:** text, images, video, audio, PDF in; text out; reasoning yes (`effort` up to xhigh); tool calls yes (function calling, structured outputs, tool use 40/40 on capability boards).
- **Pricing (as of 2026-10-07):** **Standard $1.25 in / $4.25 out** per 1M, cached input $0.15 (unchanged from 1.1 — a free upgrade); **Contributor $0.10 / $0.20**, cached $0.002 (~16× cheaper, data used for training, rate-limited, select countries). Zero data retention available via sales on Standard. `dev.meta.ai` pricing page returned 500 on 2026-08-29 — rates carried via three corroborating outlets quoting the card verbatim. Paid.
- **Architecture:** proprietary (parameters undisclosed; closed weights).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **90.3%** (Meta/Scale AI — highest score Meta reports, above Opus 5 xhigh 85.8%; 1.1 was 88.1%).
- Terminal-Bench 2.1: **82.9%** (Meta, Muse Code harness, max reasoning, 5 attempts) / **80.1–80.2%** (Artificial Analysis independent, xhigh; 1.1 was 77.9).
- Terminal-Bench 4.0 (AA, xhigh): **7.07%** — very weak on the newest terminal generation.
- GDPval-AA v2: **1631** Elo (Meta/AA — #5 among AA-benchmarked models at release, ahead of Opus 4.8; 1.1 was 1371/1374).
- τ³/tau-3 Banking: **34.9%** (Meta figure) / 27% (AA) — low. AA Agentic Index: **49.3** (1.1: 39.7).
- OSWorld / Tau2 / Claw-Eval / AutomationBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA, xhigh — clears the 90%+ ref; 1.1: 89.8).
- HLE: **45.5%** (AA, xhigh — clears the 40%+ ref; 1.1: 46.2).
- AA Intelligence Index: **54** (AA official launch post, xhigh) — eesel reports 56.8; aggregator boards show 39.6–39.8 on other versions/efforts (flagged as version variance). Either way below the 60+ ref.
- LiveBench (official board, 2026-06-25): global 78.0, Math 91.2, Reasoning 90.0, Language 78.6, IF 74.3.
- CritPt: 17.7 (AA). AA-Omniscience: 27.2 (abstention-driven; hallucination down 38%→28%). ARC-AGI: no verified public score found.

Coding:

- DeepSWE 1.1: **59.3%** (Meta, Daytona sandbox, 5 attempts; Opus 5 65.0 — under the 74% frontier ref; 1.1 was 53.0).
- AA Coding Index: **72.2** (Command Code #18/52). Meta Internal Coding Bench: **70.6%** (440 tasks — Opus 5 79.4, GPT-5.6 Terra 65.4, Gemini 3.6 Flash 63.9).
- SciCode: **56.4–57.4%** (AA, xhigh — clears the 55%+ ref; slightly down vs 1.1).
- LiveBench Coding: 77.5; Agentic Coding: 57.6 (official board).
- Harness caveat: Meta benchmarks 1.2 in Muse Code (co-trained) but 1.1 in `mini-swe-agent` — the launch delta mixes model and harness.
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench / LiveCodeBench: no verified public score found.

Long context:

- AA-LCR: **83.3%** (1.1: 81.3). Command Code "long-context reasoning": 79. MRCR/RULER needle rows: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 90.3% is #1-of-its-set and TB2.1 ~80–83 is solid, but GDPval-AA 1631 is well under the 1750 frontier ref, τ³-Banking ~27–35 and TB4.0 7.07% are weak, and no OSWorld/Tau2/Claw row exists.
- **Reasoning: 87/100.** GPQA 90.4 and HLE 45.5 both clear their frontier refs, LiveBench Reasoning 90.0/Math 91.2 are strong; capped below 90 by AA Index 54–56.8 (below the 60+ ref), weak CritPt, and flagged version variance on the Index.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor; AA-LCR 83.3% is decent but no ≥98% needle result at 512K+ → floor.
- **Multimodal: 92/100.** Text, image, video, audio, and PDF all in — audio-in band (90–100); text-only output holds it below the very top.
- **Coding: 82/100.** DeepSWE 59.3% (under 74% ref), TB2.1 80–83 (under 88% ref), Coding Index 72.2 mid-board, TB4.0 near-zero; SciCode 57.4% clears its ref and the internal bench is respectable — mid-80s capability, frontier-adjacent only on select boards.
- **Cost efficiency: 90/100.** Standard $1.25/$4.25 is exactly the ≈88 anchor with $0.15 cache reads and effective ~$0.48/M input in agent loops; the Contributor tier ($0.10/$0.20) is a 16× cheaper option that would push higher, discounted because it requires giving Meta your traffic for training.
- **Overall Score: 88/100.** (84+87+95+92+82)/5 = 88.0 → 88 — same Overall tier as 1.3's big jump context: strong multimodal floor and price/performance, with agentic-reasoning and hard-coding benchmarks the gap to true frontier.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Capital & Compute, AI Atlas, eesel AI, llmboard.ai, Command Code, modelcompare.dev, LLM Stats, AA LinkedIn launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Muse Spark 1.2 Contributor Free — findings by Mimo v2.6 Flash

- Source: Meta/`muse-spark-1.2-contributor-free` (OpenCode Zen free contributor tier)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Contributor Free
- **Short description:** Meta's coding-focused Muse Spark update (released 2026-08-05) co-trained with Muse Code terminal agent; same weights as standard `muse-spark-1.2`, free on OpenCode Zen as Contributor tier (training-data consent + lower rate limits). Prior-gen free coding driver below 1.3 Free.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Chat Completions); Meta Model API `muse-spark-1.2` / `muse-spark-1.2-contributor`; Muse Code CLI.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` on Zen (Free ID exists); native `muse-spark-1.2-contributor`.
- **Context window:** 1,048,576 tokens; max output ~131K reported.
- **Modalities:** text/image/video/PDF in; text out; reasoning yes (xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** Zen Free tier $0 during free period (Cost=100 on free evaluation); Meta Contributor $0.10 in / $0.002 cached / $0.20 out per 1M (training on prompts, 60 RPM); Standard $1.25 / $0.15 / $4.25. Free-tier caveat: Contributor consent + time-limited Zen free window.
- **Architecture:** proprietary (closed weights; co-trained with Muse Code harness).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta harness, Muse Code, xhigh — vendor-run; NOT on official verified tbench.ai board as of 2026-08-26; Vals Terminus 2 = 14th/50)
- MCP Atlas: **90.3%** (Scale AI harness via Meta release; highest in Meta comparison set, above Opus 5 85.8%)
- GDPval-AA v2: **1631 Elo** (Artificial Analysis via Meta; also cited 1628)
- Meta Internal Coding Bench: **70.6%** (private 440-task Meta harness — not independently verifiable)
- OSWorld 2.0: no verified public score found for 1.2
- Tau3-Banking / Claw-Eval: no verified public score found
- Vals Index v1.2: **71.88%** rank 5/45 (independent composite; $0.69/test, lowest cost in top-5)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (independent AA)
- GPQA Diamond / HLE / CritPt: no verified public score found for 1.2 specifically
- Vals Index composite covers coding + finance tasks (71.88%)

Coding:

- DeepSWE v1.1: **59.3%** (Meta Muse-Code harness; official Datacurve board did not list 1.2 as of 2026-08-26; Muse 1.1 listed at 53%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for 1.2
- Generational gains vs 1.1: TB2.1 +6.7, DeepSWE +6.3 (partly harness — 1.1 was mini-swe-agent)

Long context:

- 1M window documented; no MRCR/RULER row for 1.2 — long-context retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 91/100.** MCP Atlas 90.3% #1 in Meta's set, TB2.1 82.9% (vendor), GDPval 1631, Vals rank-5 composite; capped because TB/DeepSWE lack official verified leaderboard entries and OSWorld/Tau3 rows are missing.
- **Reasoning: 88/100.** AA Index 57 independent (above class median), solid Vals composite; capped by missing GPQA/HLE/CritPt rows for this exact model.
- **Context window: 95/100.** 1M documented; no measured ≥98% retrieval at 512K+ for 1.2 → 95.
- **Multimodal: 90/100.** Text/image/video/PDF in (video + PDF push 75–90; PDF+video together → top of band, 90); text-only out.
- **Coding: 87/100.** DeepSWE 59.3% (behind Opus 5 65 / Terra 64.8), TB2.1 82.9% vendor, Vals 71.88% rank 5; capped by DeepSWE gap and unverified leaderboard status.
- **Cost efficiency: 100/100.** Zen Free contributor tier = $0 during free period (Meta Contributor $0.10/$0.20 with training consent).
- **Overall Score: 90/100.** Mean of five quality dims (91+88+95+90+87)/5 = 90.2 → 90. Best-fit: near-free coding agent via Muse Code when free tier is on; prefer 1.3 Free when available; not for confidential code on Contributor terms.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Meta methodology/blog, VentureBeat, Kingy verified-board analysis, AiCybr, Benchgen, GLBGPT, TensorFeed, AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

