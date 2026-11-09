# Grok 4.7 — findings by MiMo 2.6 Flash

- Source: SpaceXAI (formerly xAI) (`grok-4.7`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 84). Fresh sources this pass: BenchLM model page (updated
> 2026-11-07, 42 rows with per-row source links) and the ARC Prize published
> results page for Grok 4.7.
> Changes: Reasoning 85→87 (ARC-AGI-2 61.4% now published by ARC Prize and
> FrontierMath v2 52.98/17.07 on Epoch — two verified reasoning pillars where
> the previous pass found none; AA Intelligence Index re-reads 35.5 on AA's
> current v5 suite vs 46.5 on v4.3.2 — version artifact, still under the 60+
> ref); Tool use 88, Context 90, Multimodal 68, Coding 90, Cost efficiency 75
> held (pricing registry re-confirmed $2/$6, 200K cliff unchanged; new
> FrontierCode 2.0 28.6 / Bug Hunt rows do not cross a coding ref).

## Model card

- **Name:** Grok 4.7 — SpaceXAI's flagship coding and knowledge-work model (SpaceX acquired xAI early 2026; rebrand to SpaceXAI July 2026; the `x.ai` / `grok-` surface is unchanged).
- **Short description:** A new, larger base model with a longer RL run weighted toward multi-hour tasks (not a tune of Grok 4.6), natively trained for the Grok Bot harness. Best-in-class where it leads — electrical engineering (EEBench 64.0%), legal-agent tasks, and AA-Briefcase office work — at the same $2/$6 list price as Grok 4.6. Independent caveat: gains partly come from ~2.25× more output tokens (AA-measured cost per task roughly doubled).
- **Provider / access:** xAI API `https://api.x.ai/v1` — OpenAI-compatible, both Chat Completions and **Responses API** (recommended; reasoning effort is a nested object; `reasoning.encrypted_content` always returned). Also: Cursor (SpaceX closed the $60B Cursor acquisition 2026-08-14), Grok Build (its default model; separate coding-agent product is `grok-build-0.1`), GitHub Copilot, OpenRouter `x-ai/grok-4.7`, Vercel AI Gateway, Cloudflare. No Free ID on OpenCode Zen (repo metadata `noFreeId: true`).
- **Release / knowledge:** released 2026-09-21; knowledge cutoff **May 2026**.
- **IDs:** `grok-4.7` (no aliases on xAI API; `x-ai/grok-4.7` on OpenRouter; Grok 4.7 Fast has no public ID — Cursor/Grok Build only).
- **Context window:** 500,000 tokens (xAI model docs; BenchLM and OpenRouter both confirm 500K, 2026-11-07). Note: Grok 4.3 offers 1M; 4.7 does not.
- **Modalities:** text, image in; text out; reasoning yes — effort levels `low` / `medium` / **`high` (default)** / `xhigh`; encrypted reasoning always returned on Responses API; tool calls yes — function calling, structured outputs, web search, X search, code execution. No audio/video in.
- **Pricing (as of 2026-11-08):** **$2.00 in / $6.00 out** per 1M, cached input **$0.50**, for prompts **< 200K tokens**; rates **double to $4 / $1 / $12 at ≥ 200K tokens and apply to the whole request** (BenchLM price registry updated 2026-11-06 from xAI's docs — unchanged). US-only endpoint `us.api.x.ai` = list +10%. AA measures $3.74 per Intelligence Index task (v4.3.2), 2× Grok 4.6's $1.86, because of verbosity.
- **Architecture:** proprietary, closed weights; parameter count not published (press reports of 2.1T trace to Musk's posts; curated repo metadata says ~210B — both unconfirmed).

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase v1.1 (multi-hour office work): **1657 Elo** (xAI + AA; +111 over Grok 4.6 — just behind Claude Opus 5 and Fable 5.1 at the frontier).
- GDPval-AA: **1718 Elo** (AA leaderboard, current via BenchLM) / 1695 (AA launch article); normalized 60.7–60.8% — just under the 1750+ frontier anchor.
- Terminal-Bench 4.0: **38.0%** (xAI) vs Grok 4.6 20.3%, Fable 5.1 57.9%. AA standardized harness: **25.8%**; AA with Grok Build (launch week): **33%** — three rows, three harnesses.
- Terminal-Bench 2.1: **73.4%** (Vals AI leaderboard — independent).
- AA AutomationBench: **65.6%** (AA leaderboard).
- Harvey Legal Agent / AA Harvey LAB: **19.6%** (tops xAI's table).
- CursorBench 4.0: **46.3%** (Cursor evals).
- CWE-bench v1: **68.0%** (Collinear) / CWE-Bench-AA 68.3 (AA); AA ITBench: 42.1%; GDP.pdf: 20.0%; **new rows this pass:** AA-AnalystAgent 52.5, Hermes Bench 74.4 / Hermes Index 39.3, AA Cyber Index 56.4, CyberGym-E2E-AA 74.0, DeepsecBench-AA 26.9, MazeBench 1%.
- AA Coding Agent Index (Grok 4.7 xhigh + Grok Build): **56**, +9 over 4.6 — **4th among native harnesses** at launch.
- SWE-bench Verified / Tau3 / MCP-Atlas / OSWorld / Claw-Eval: no verified public score found — **xAI published no SWE-bench Verified, GPQA, AIME, or HLE rows for 4.7 at all.**

Reasoning / knowledge:

- **ARC-AGI-2 (published Semi-Private): 61.4%** (ARC Prize results page for Grok 4.7) — **new this pass** (previous pass: no ARC row at all); ARC-AGI-1: 89.5%; ARC-AGI-3: 1.8% (provider adapter 7.02%).
- **FrontierMath v2 (Epoch): 52.982% (Tiers 1–3), 17.073% (Tier 4)** — **new this pass**.
- Artificial Analysis Intelligence Index: **35.5** (AA's current leaderboard suite via BenchLM, 2026-11-07) vs **46.5 (v4.3.2, #29 of 224)** previously cited — suite-version conflict noted (v4.3.2 → v5.x); both readings sit under the 60+ frontier ref.
- AA-HLE: **43.1%** (AA leaderboard — clears the 40% ref).
- GPQA Diamond: no verified public score found (not published this cycle).
- AA-LCR: **76.7%**; MLCR-AA: **20.0%** (was 15.0); CritPt: **17.7%** (AA).
- AA-Omniscience: accuracy **42.7%**, hallucination rate **20.0%** (improved from 29.3), index **31.2** (AA current).
- HealthBench Professional: **56.7%** (xAI).

Coding:

- DeepSWE v1.1: **71.0%** (xAI, high effort; AA with Grok Build: **73%**) — just under the 74% frontier ref; Grok 4.6: 65.2/65.
- AA-SciCode: **57.4%** (clears the 55%+ ref).
- FrontierSWE v2: **29.5%** (Proximal); **FrontierCode 2.0: 28.6%** (Cognition) — **new**; **Bug Hunt Bench: 29.0 fixes** — **new**.
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR/RULER retrieval row found. Best proxy: AA-LCR **76.7%**. 500K window is the hard capacity.

Multimodal:

- Text + image in only; no audio/video/PDF input, no image-understanding benchmark row found (Design Arena Website 1247 only). Output text-only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Held: AA-Briefcase 1657 sits just behind the frontier pair, GDPval 1718 beats Grok 4.6 and GPT-6 Astra (just under the 1750 ref), AutomationBench 65.6, Harvey 19.6 tops its field, Coding Agent Index 56 is 4th among native harnesses; capped at 88 by TB2.1 73.4 (Vals) and TB4.0 38/33/25.8 (all far under an 88-style ref), plus no Tau3/OSWorld/MCP/Claw-Eval rows.
- **Reasoning: 87/100.** Two verified reasoning pillars added this pass where the previous pass found none: **ARC-AGI-2 61.4%** (ARC Prize published Semi-Private results — above Claude Sonnet 4.6's 58.3) and **FrontierMath v2 52.98/17.07** (Epoch); AA-HLE 43.1 still clears the 40% ref and Omniscience hallucination improved to 20.0%; capped by the AA Intelligence Index (35.5 on AA's current v5 suite, 46.5 on the old v4.3.2 — either way well under 60+), CritPt 17.7, MLCR 20.0, and **still no GPQA row**.
- **Context window: 90/100.** Held: 500K native (docs-verified, re-confirmed BenchLM/OpenRouter 2026-11-07), AA-LCR 76.7 gives a real long-context reasoning signal; no retrieval-at-window row and 500K is half the ≥1M tier → 90.
- **Multimodal: 68/100.** Held: text + image in only (60–70 band); no audio/video/PDF input, no image-understanding benchmark row found — modality coverage alone sets the score.
- **Coding: 90/100.** Held: DeepSWE 71–73 (within striking distance of 74), SciCode 57.4 clears its ref, CursorBench 46.3 beats GPT-5.6 Sol, Coding Agent Index 56 (#4 native), CWE-bench 68 — capped below the mid-90s by DeepSWE still under ref, TB4.0 well behind Fable 5.1's 57.9, new FrontierCode 2.0 at only 28.6, and no SWE-bench Verified row.
- **Cost efficiency: 75/100.** Held: $2/$6 list re-confirmed unchanged (BenchLM price registry 2026-11-06) — cheapest frontier-class price by a wide margin with $0.50 cache reads — but the 200K cliff doubles the entire request, the US endpoint adds 10%, and AA's measured cost per Index task is $3.74 (2× Grok 4.6) because of ~81k output tokens per task.
- **Overall Score: 84.6/100.** (88+87+90+68+90)/5 = 84.6 — the price-performance agentic coder: #4 native-harness Coding Agent Index, frontier-adjacent Briefcase, now with ARC-AGI-2 61.4 verified, at mid-tier list prices; the missing GPQA row, the 35.5 Index on AA's current suite, and doubled per-task token spend are the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links, ARC Prize published results page for Grok 4.7, Epoch FrontierMath v2 leaderboard, AA leaderboards, xAI launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok 4.7](https://benchlm.ai/models/grok-4-7)
  - [ARC Prize — Grok 4.7 published results](https://arcprize.org/results/xai-grok-4-7)
  - [xAI — Introducing Grok 4.7](https://x.ai/news/grok-4-7)
  - [Artificial Analysis — Benchmarking Grok 4.7](https://artificialanalysis.ai/articles/benchmarking-grok-4-7)
  - [Epoch AI — FrontierMath v2 (Tiers 1–3) leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [xAI Grok 4.7 model documentation](https://docs.x.ai/developers/grok-4-7)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
