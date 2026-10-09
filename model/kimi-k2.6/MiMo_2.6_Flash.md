# Kimi K2.6 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k2.6` / `moonshotai/Kimi-K2.6`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 — Moonshot AI's open-weights flagship; **not to be confused with** the separate `Kimi K2.6 Code Preview` variant or the later K2.7 Code / K3 entries.
- **Short description:** A 1T-parameter MoE (32B active) native-multimodal agentic model built for long-horizon coding and agent-swarm orchestration — the open-weight SWE-Bench Verified record holder at launch (80.2%, beating closed frontier models like GPT-5.4 and Opus 4.6 per launch comparisons) and a BrowseComp leader (83.2%, near GPT-5.5's 84.4).
- **Provider / access:** Moonshot AI API (OpenAI-compatible), OpenRouter `moonshotai/kimi-k2.6` (list $0.80/$3.40), DeepInfra and other hosts; self-host from HF `moonshotai/Kimi-K2.6` (open weights). No Free ID on OpenCode Zen (repo metadata `noFreeId: true`).
- **Release / knowledge:** released **2026-04-20** (Moonshot tech blog + HF model card; evals.report, BenchLM, tokenmix, DeepInfra all agree — Benchgen's "July 2025" badge conflicts and matches Kimi K2's original date, treated as a catalog bug); knowledge cutoff not confirmed → not scored.
- **IDs:** `kimi-k2.6` (Moonshot) / `moonshotai/kimi-k2.6` (OpenRouter, HF).
- **Context window:** 262,144 tokens (256K) with ~236K max output (repo metadata; catalog agrees).
- **Modalities:** **text, image in**; text out; reasoning yes; tool calls yes (function calling, MCP). Vision input is confirmed by its MMMU-Pro / CharXiv / MathVision / V* scores — Benchgen's "text only" spec field is wrong (flagged conflict). No audio/video in, no image/video out.
- **Pricing (as of 2026-10-07):** Moonshot list **$0.95 in / $4.00 out** per 1M, cached input **$0.16** (repo metadata); OpenRouter $0.80/$3.40; llm-stats has seen $0.750/$3.50 (cached $0.150). Paid (no free tier).
- **Architecture:** MoE 1.0T total / 32B active; open weights — **Apache 2.0** badge on Benchgen's spec sheet; one catalog reports a modified-MIT license (theairankings) → verify against the HF repo before commercial deployment.

### Raw benchmarks found

> Launch-vendor rows are Moonshot's HF model card / K2.6 tech blog unless noted;
> independent rows from AA, Vals AI, Cursor evals, Claw-Eval, Epoch, BenchLM.

Agent / tool use:

- BrowseComp: **83.2%** (Moonshot; near GPT-5.5's 84.4 — open-weight leader; +8.3 over K2.5).
- OSWorld-Verified: **73.1%** (Moonshot — clears the 72%+ band). OSWorld 2.0: **4.6%** (arXiv paper run — harness anomaly, flagged not averaged).
- τ²-bench: **95.9%** (AA — exceptionally high). DeepSearchQA: **92.5%**, WideResearch: **80.8%** (Moonshot).
- Claw-Eval: **62.3%** (Claw-Eval leaderboard); MCP Atlas: **55.9%** (model card); Toolathlon: **50%** (Moonshot).
- Terminal-Bench 2.0: **66.7%** (Moonshot); Terminal-Bench 2.1: **53.6%** (Vals AI) — both well under frontier refs.
- GDPval-AA: **1115 Elo** (normalized 27.0%) and AA Agentic Index **22.1%** (AA — weak); APEX-Agents-AA 28.5%.
- ResearchClawBench: **18.0%** (leaderboard).

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot) / **91.1%** (AA) — both clear the 90+ ref; Vals: 89.1%.
- HLE: **34.7%** (Moonshot model card) / **37.5%** (AA) / 36.4% (Benchgen) — all under the 40% ref.
- Artificial Analysis Intelligence Index: **27.0** (AA-run, current scale — well under the 60+ ref; open-weight models cluster low on this basket).
- AA-LCR: **81.0%**; CritPt: **8.0%** (AA). AA-Omniscience: accuracy 32.6%, hallucination rate **40.5%** (AA — high).
- AIME 2026: **96.4%**, HMMT Feb 2026: **92.7%** (model card — near-perfect competition math); FrontierMath v2: 38.97% (Tiers 1–3), 14.58% (Tier 4) (Epoch). MMLU-Pro: 87.6% (Vals); IFBench: 76.0% (AA); Global MMLU-Lite 88.4%, SimpleQA 38.7% (Benchgen).

Coding (Moonshot model card/tech blog unless noted):

- SWE-bench Verified: **80.2%** — clears the 74% frontier ref; open-weight record at launch (K2.5: 76.8). Vals AI independent run: 76.2%.
- SWE-bench Pro: **58.6%** (launch comparisons put it above GPT-5.4 and Opus 4.6); SWE Multilingual: **76.7%**.
- LiveCodeBench v6: **89.6%** (Vals: 86.8%). SciCode: **52.2%** (AA: 51.5%) — under the 55% ref.
- AA Coding Index: **61.8%** (AA); CursorBench 3.1: **47.6%** (Cursor evals); Vibe Code Bench v1.1: **37.89%** (Vals).

Multimodal (vision):

- MMMU-Pro: **79.4%** (w/ Python: 80.1; AA run: 79.4 — strong). CharXiv: **80.4%**; MathVision: **87.4%**; V*: **96.9%** (Moonshot). Design Arena Website: 1274 (OpenRouter). No audio/video rows (no audio/video input).

Long context:

- 262,144-token window; no MRCR/RULER retrieval row found. AA-LCR **81.0%** is the best long-context proxy (reasoning, not retrieval).

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 83.2 near-frontier, OSWorld-Verified 73.1, τ² 95.9, DeepSearchQA 92.5, Claw-Eval 62.3 and MCP Atlas 55.9 all give a solid agentic base; capped at 84 by weak hard-agent rows — TB2.1 53.6 (Vals), TB2.0 66.7, GDPval 1115 Elo, AA Agentic Index 22.1, Toolathlon 50.
- **Reasoning: 81/100.** GPQA 90.5/91.1 clears the 90+ ref and math is near-perfect (AIME 96.4, HMMT 92.7), AA-LCR 81 strong; capped by HLE 34.7/37.5 (under 40), the AA Intelligence Index of 27 (far under 60+), CritPt 8, and a 40.5% hallucination rate.
- **Context window: 90/100.** 262,144 tokens native = 256K tier; AA-LCR 81 shows real long-context reasoning, but no retrieval-at-window benchmark was published → 90, not higher.
- **Multimodal: 70/100.** Text + image in only (60–70 coverage band); pushed to the top of the band by excellent vision rows (MMMU-Pro 79.4, CharXiv 80.4, MathVision 87.4, V* 96.9), but no audio/video/PDF input or any output modality → hard-capped at 70.
- **Coding: 90/100.** SWE-bench Verified 80.2 clears the 74% ref outright (open-weight record at launch; independent Vals 76.2 also clears), SWE-Pro 58.6, LCB 86.8–89.6, AA Coding Index 61.8 — held below the low-90s only by SciCode 52.2 missing the 55 ref and softer Vibe (37.9) / CursorBench 3.1 (47.6) rows.
- **Cost efficiency: 91/100.** $0.95/$4.00 with $0.16 cache reads (cheaper than the $1.25/$4.25 ≈ 88 anchor), OpenRouter $0.80/$3.40 cheaper still, plus Apache 2.0 open weights = self-host at hardware cost only.
- **Overall Score: 83/100.** (84+81+90+70+90)/5 = 83.0 → 83 — the open-weights coder's pick: SWE-V 80.2, GPQA 91, BrowseComp 83.2 at dime-store prices; the 27 AA Index, sub-40 HLE, and weak GDPval/TB2.1 rows are why it lands under 85.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Moonshot K2.6 tech blog references via BenchLM's 55-row evidence table; Benchgen model card; evals.report; Vals AI; Cursor evals; AA model benchmarks; Epoch FrontierMath; tokenmix/DeepInfra/theairankings release coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Kimi K2.6 — findings by Mimo v2.6 Flash

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE agentic flagship released April 2026, built for long-horizon coding and multi-agent ("Agent Swarm", up to 300 sub-agents) workflows. Not a variant of another entry here — K2.5 is its predecessor and Kimi K2.7 Code is a separate coding-tuned sibling.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (Chat Completions API); Moonshot AI / Kimi API (`platform.kimi.ai`, `kimi.com`); third-party hosts DeepInfra, Fireworks, Novita, Together (llm-stats provider table). Open weights downloadable for self-hosting.
- **Release / knowledge:** 2026-04-20 (Kimi tech blog) / 2026-04-21 (AI Release Tracker); knowledge cutoff 2024-10 (models.dev `kimi-k2.6.toml`).
- **IDs:** `opencode/kimi-k2.6` on Zen — **no Free ID exists** (Zen's public `/zen/v1/models` list, checked 2026-09-29, contains `kimi-k2.6` but no `kimi-k2.6-free`); Moonshot API id `kimi-k2.6`.
- **Context window:** 262,144 tokens total, 65,536 max output (models.dev `kimi-k2.6.toml` limits; official blog footnote states all runs used 262,144-token context). AI Release Tracker lists "256k" — treat 262,144 as the verified figure.
- **Modalities:** text, image, video in; text out; reasoning yes (toggleable, `reasoning_content` field); tool calls yes; JSON mode not listed in the models.dev capability flags — no verified public confirmation found.
- **Pricing (as of 2026-09-29):** $0.95 / $4.00 per 1M input / output, $0.16 cached input (models.dev Zen entry; same rates verified against Moonshot's pricing page on 2026-08-18 by AI Release Tracker). Cheapest tracked host DeepInfra $0.75 / $3.50 (llm-stats). Paid only — no free tier, so no free-tier privacy caveat applies.
- **Architecture:** 1T total parameters, MoE, open weights (Modified MIT License per llm-stats; AI Release Tracker labels it open-weight). Training data / code not fully released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Kimi official blog benchmark table; evals.report marks it Verified, 2026-04-20)
- Terminal-Bench 2.1: no verified public score found
- τ²-bench (Telecom): **95.9% pass^1** (evals.report, Official, 2026-04-20)
- Tau3-Banking / Tau2-Bench: no verified public score found (the τ² Telecom figure above is the only tau-variant number located)
- GDPval: **1481 Elo** (evals.report, Official, 2026-04-20)
- OSWorld-Verified: **73.1% task success** (BenchLM via AI Release Tracker; evals.report lists OSWorld 73.1% as Unverified)
- BrowseComp: **83.2%** (BenchLM via AI Release Tracker) — web-research agent task with search/code-interpreter/browsing tools (Kimi blog footnote 3)
- CursorBench: **47.6%** (evals.report, Official)
- FrontierSWE: **27% dominance score** (evals.report, Official)
- Claw-Eval / ClawProBench: no verified public score found (Kimi ran an internal "Claw Bench v1.1"; no public numbers)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (AI Release Tracker, lab-sourced); evals.report tracks **90.8%** Official, while Kimi's own benchmark table shows **88.4%** — three published variants, harness-dependent
- HLE: **29.9%** full set (evals.report, Official); Kimi blog footnote 2 reports **36.4%** text-only without tools and **55.5%** text-only with tools; BenchLM reports 34.7% with tools (via AI Release Tracker)
- AIME 2026: **95.83%** (evals.report, Official); Kimi's own table shows 93.3%
- AIME (OTIS Mock): **96.1%** (evals.report, Official)
- LiveBench: **72.17** score (evals.report, Official)
- FrontierMath: **38.97%** accuracy; FrontierMath Tier 4: **14.6%** (evals.report, Official)
- IFBench: **76.0%** (evals.report, Official)
- SimpleQA Verified: **38.7%** (evals.report, Official)
- Artificial Analysis Intelligence Index: **53.9** (evals.report, Unverified)
- Epoch Capabilities Index: **151.6** (evals.report, Official)
- AA-Omniscience index: **6** (evals.report, Official)
- Vectara Hallucination Leaderboard: **10.8% hallucination rate** (evals.report, Official)
- BullshitBench v2: **65%** (AI Release Tracker)
- LCR / MLCR, CritPt: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (AI Release Tracker, lab-sourced); evals.report tracks **76.7%** Official (2026-04-20) — both published, harness differs (Kimi used an in-house SWE-agent adaptation, 10-run average, per blog footnote 4)
- SWE-bench Pro: **58.6%** (Kimi official blog benchmark table; +7.9 over K2.5's 50.7)
- LiveCodeBench: **89.6%** (BenchLM via AI Release Tracker)
- DeepSWE: **23.89% resolved** (evals.report, Official) — far below its SWE-bench numbers, single-harness outlier
- SciCode: **53.5%** (evals.report, Unverified)
- Vibe Code Bench: **37.89% overall accuracy** (evals.report, Verified)
- WebDev Arena: **1518 Elo** (evals.report, Verified); 1513 Elo per AI Release Tracker
- Next.js Evals (Vercel): **52%** (AI Release Tracker)
- WeirdML: **55.9%**, GBA Eval: **0.9%** (evals.report, Official)
- SWE-Multilingual: listed in the Kimi blog table but no number captured — no verified public score found

Long context:

- No long-context retrieval metric (MRCR / RULER / GraphWalks) published for K2.6 — no verified public score found. Window itself is verified at 262,144 tokens; the official blog claims "significant leap in long-context tasks" in enterprise tests without publishing a retrieval number.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 95.9% and GDPval 1481 are near-frontier, but Terminal-Bench 2.0 at 66.7% sits well below the ~88% frontier reference and no TB 2.1 or Claw-Eval number exists, which caps the score.
- **Reasoning: 88/100.** GPQA 90.5% clears the frontier reference and AIME 2026 95.8% / LiveBench 72 are elite, but HLE full-set 29.9% and AA Intelligence Index 53.9 both fall short of the 40% / 60+ frontier refs.
- **Context window: 75/100.** 262,144 tokens lands in the 200K–500K tier (65–84, 200K = 70); no published retrieval accuracy at that length to justify the top of the tier, and 65,536 max output is healthy.
- **Multimodal: 78/100.** Text + image + video input with text output (models.dev modalities) puts it in the 75–90 "+video/PDF in" band; no audio input and no audio/non-text output keeps it below 90. CharXiv 86.7% (evals.report, Unverified) supports solid vision comprehension.
- **Coding: 90/100.** SWE-bench Verified 80.2%, SWE-bench Pro 58.6%, LiveCodeBench 89.6% and WebDev Arena 1518 are all frontier-class for open weights; DeepSWE 23.89% and Vibe Code Bench 37.89% are the figures that keep it from the mid-90s.
- **Cost efficiency: 89/100.** Paid-only at $0.95/$4.00 (cache $0.16) per 1M on Zen — between the ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) methodology anchors; $0.75/$3.50 at DeepInfra is the cheapest tracked route. No Free ID, so it cannot score 100.
- **Overall Score: 83/100.** Mean of the five quality dims (85 + 88 + 75 + 78 + 90) / 5 = 83.2 → 83. Best fit: the strongest paid open-weight pick for long-horizon agentic coding and multi-step tool work, when a free tier isn't required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-29
- Method: public internet research (Kimi official tech blog, evals.report, AI Release Tracker, llm-stats, models.dev/OpenCode Zen registry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

