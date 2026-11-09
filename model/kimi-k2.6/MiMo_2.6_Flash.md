# Kimi K2.6 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k2.6` / `moonshotai/Kimi-K2.6`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 83). Fresh sources this pass: BenchLM model page (updated
> 2026-11-07, 56 rows with per-row source links) and llm-stats model page
> (pricing/providers re-checked 2026-11-09).
> Changes: Reasoning 81→84 (Epoch's current FrontierMath v2 leaderboard now
> shows Kimi K2.6 at 57.193% Tiers 1–3 / 25.641% Tier 4 vs the 38.97/14.58
> previously cited — a material upward correction on a headline reasoning
> benchmark); Tool use 84, Context 90, Multimodal 70, Coding 90, Cost
> efficiency 91 held (new TB-Hard 43.9 / Gert Labs 56.82 rows confirm the
> existing tool-use cap; pricing unchanged at Moonshot $0.95/$4.00, DeepInfra
> $0.75/$3.50).

## Model card

- **Name:** Kimi K2.6 — Moonshot AI's open-weights flagship; **not to be confused with** the separate `Kimi K2.6 Code Preview` variant or the later K2.7 Code / K3 entries.
- **Short description:** A 1T-parameter MoE (32B active) native-multimodal agentic model built for long-horizon coding and agent-swarm orchestration — the open-weight SWE-Bench Verified record holder at launch (80.2%, beating closed frontier models like GPT-5.4 and Opus 4.6 per launch comparisons) and a BrowseComp leader (83.2%, near GPT-5.5's 84.4).
- **Provider / access:** Moonshot AI API (OpenAI-compatible), OpenRouter `moonshotai/kimi-k2.6`, DeepInfra / Fireworks / Novita / Together hosts (5 providers per llm-stats); self-host from HF `moonshotai/Kimi-K2.6` (open weights). No Free ID on OpenCode Zen (repo metadata `noFreeId: true`).
- **Release / knowledge:** released **2026-04-20** (Moonshot tech blog + HF model card; llm-stats, BenchLM, evals.report agree); knowledge cutoff not confirmed → not scored.
- **IDs:** `kimi-k2.6` (Moonshot) / `moonshotai/kimi-k2.6` (OpenRouter, HF).
- **Context window:** 262,144 tokens (256K) with ~236K max output (llm-stats and BenchLM both confirm 262K, 2026-11-09).
- **Modalities:** **text, image in** (llm-stats: Text+Image+Video in); text out; reasoning yes; tool calls yes (function calling, MCP). Vision input confirmed by its MMMU-Pro / CharXiv / MathVision / V* scores. No audio in, no image/video out.
- **Pricing (as of 2026-11-08):** Moonshot list **$0.95 in / $4.00 out** per 1M, cached input **$0.16** (llm-stats provider table 2026-11-09 — unchanged); cheapest route DeepInfra **$0.750/$3.50**; Fireworks/Novita $0.95/$4.00; Together $1.20/$4.50. Paid (no free tier). License: llm-stats lists **Modified MIT** (restricts commercial use) — conflicts with Benchgen's Apache 2.0 badge; verify against the HF repo before commercial deployment.
- **Architecture:** MoE 1.0T total / 32B active; open weights.

### Raw benchmarks found

> Launch-vendor rows are Moonshot's HF model card / K2.6 tech blog unless noted;
> independent rows from AA, Vals AI, Cursor evals, Claw-Eval, Epoch, BenchLM (2026-11-07 snapshot).

Agent / tool use:

- BrowseComp: **83.2%** (Moonshot; near GPT-5.5's 84.4 — open-weight leader; +8.3 over K2.5).
- OSWorld-Verified: **73.1%** (Moonshot). OSWorld 2.0: **4.6%** (arXiv paper run — harness anomaly, flagged not averaged).
- τ²-bench: **95.9%** (AA — exceptionally high). DeepSearchQA: **92.5%**, WideResearch: **80.8%** (Moonshot).
- Claw-Eval: **62.3%** (Claw-Eval leaderboard); MCP Atlas: **55.9%** (model card); Toolathlon: **50%** (Moonshot).
- Terminal-Bench 2.0: **66.7%** (Moonshot); Terminal-Bench 2.1: **53.6%** (Vals AI); **Terminal-Bench Hard: 43.9%** (AA) — **new row this pass** (confirms the weak-hard-agent pattern).
- GDPval-AA: **1115 Elo** (normalized 27.0%) and AA Agentic Index **22.1%** (AA — weak); APEX-Agents-AA 28.5%; **Gert Labs: 56.82%** — **new row this pass**.
- ResearchClawBench: **18.0%** (leaderboard).

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot) / **91.1%** (AA) — both clear the 90+ ref; Vals: 89.1%.
- HLE: **34.7%** (Moonshot model card) / **37.5%** (AA) — all under the 40% ref.
- Artificial Analysis Intelligence Index: **27.0** (AA current scale — well under the 60+ ref; open-weight models cluster low on this basket).
- **FrontierMath v2 (Epoch leaderboard, current): 57.193% (Tiers 1–3), 25.641% (Tier 4)** — **corrected upward this pass** (previous pass cited 38.97% / 14.58% from the same Epoch leaderboard; the current BenchLM-linked Epoch rows supersede them).
- AA-LCR: **81.0%**; CritPt: **8.0%** (AA). AA-Omniscience: index 5.3, accuracy 32.6%, hallucination rate **40.5%** (AA — high).
- AIME 2026: **96.4%**, HMMT Feb 2026: **92.7%** (model card — near-perfect competition math); MMLU-Pro: 87.6% (Vals); IFBench: 76.0% (AA).

Coding (Moonshot model card/tech blog unless noted):

- SWE-bench Verified: **80.2%** — clears the 74% frontier ref; open-weight record at launch (K2.5: 76.8). Vals AI independent run: 76.2%.
- SWE-bench Pro: **58.6%**; SWE Multilingual: **76.7%**.
- LiveCodeBench v6: **89.6%** (Vals: 86.8%). SciCode: **52.2%** (AA: 51.5%) — under the 55% ref.
- AA Coding Index: **61.8%** (AA); CursorBench 3.1: **47.6%** (Cursor evals); Vibe Code Bench v1.1: **37.89%** (Vals).

Multimodal (vision):

- MMMU-Pro: **79.4%** (w/ Python: 80.1; AA run: 79.4 — strong). CharXiv: **80.4%**; MathVision: **87.4%**; V*: **96.9%** (Moonshot). **MMAnswerBench: 86.0** — **new row this pass**. Design Arena Website: 1266 (OpenRouter). No audio/video rows.

Long context:

- 262,144-token window; no MRCR/RULER retrieval row found. AA-LCR **81.0%** is the best long-context proxy (reasoning, not retrieval).

### Normalized scores (1–100)

- **Tool use: 84/100.** Held: BrowseComp 83.2 near-frontier, OSWorld-Verified 73.1, τ² 95.9, DeepSearchQA 92.5, Claw-Eval 62.3 and MCP Atlas 55.9 give a solid agentic base; capped at 84 by weak hard-agent rows — new TB-Hard 43.9 (AA) alongside TB2.1 53.6 (Vals), TB2.0 66.7, GDPval 1115 Elo, AA Agentic Index 22.1, Toolathlon 50.
- **Reasoning: 84/100.** Moved up on fresh Epoch evidence: the current FrontierMath v2 leaderboard shows **57.193% (Tiers 1–3) / 25.641% (Tier 4)** for K2.6 — an +18.2 / +11.1 point correction over the 38.97/14.58 previously cited — reinforcing GPQA 90.5/91.1 (clears the 90+ ref), AIME 96.4 and AA-LCR 81; still capped by HLE 34.7/37.5 (under 40), the AA Intelligence Index of 27 (far under 60+), CritPt 8, and a 40.5% hallucination rate.
- **Context window: 90/100.** Held: 262,144 tokens native = 256K tier (re-confirmed llm-stats/BenchLM); AA-LCR 81 shows real long-context reasoning, but no retrieval-at-window benchmark was published → 90, not higher.
- **Multimodal: 70/100.** Held: text + image in only (60–70 coverage band); pushed to the top of the band by excellent vision rows (MMMU-Pro 79.4, CharXiv 80.4, MathVision 87.4, V* 96.9, new MMAnswerBench 86.0), but no audio/video/PDF input or any output modality → hard-capped at 70.
- **Coding: 90/100.** Held: SWE-bench Verified 80.2 clears the 74% ref outright (open-weight record at launch; independent Vals 76.2 also clears), SWE-Pro 58.6, LCB 86.8–89.6, AA Coding Index 61.8 — held below the low-90s only by SciCode 52.2 missing the 55 ref and softer Vibe (37.9) / CursorBench 3.1 (47.6) rows.
- **Cost efficiency: 91/100.** Held: Moonshot list $0.95/$4.00 with $0.16 cache reads re-confirmed (llm-stats 2026-11-09), cheapest route DeepInfra $0.75/$3.50 — between the ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) anchors, plus Apache-2.0/MIT open weights = self-host at hardware cost only. A single aggregator's $0.60/$2.50 claim could not be corroborated and was not used.
- **Overall Score: 83.6/100.** (84+84+90+70+90)/5 = 83.6 — the open-weights coder's pick: SWE-V 80.2, GPQA 91, BrowseComp 83.2, and now a corrected 57.2 FrontierMath at dime-store prices; the 27 AA Index, sub-40 HLE, and weak GDPval/TB-Hard rows are why it lands under 85.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links to Moonshot's tech blog/HF card, AA leaderboards and Epoch's FrontierMath v2 leaderboard; llm-stats model page 2026-11-09 for pricing/providers; DuckDuckGo HTML sweep); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Kimi K2.6](https://benchlm.ai/models/kimi-k2-6)
  - [Moonshot AI — Kimi K2.6 tech blog](https://www.kimi.com/blog/kimi-k2-6)
  - [Hugging Face — moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Epoch AI — FrontierMath v2 (Tiers 1–3) leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [llm-stats — Kimi K2.6](https://www.llm-stats.com/models/kimi-k2.6)
  - [Artificial Analysis — Kimi K2.6](https://artificialanalysis.ai/models/kimi-k2-6)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
