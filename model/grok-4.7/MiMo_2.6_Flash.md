# Grok 4.7 — findings by MiMo 2.6 Flash

- Source: SpaceXAI (formerly xAI) (`grok-4.7`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 — SpaceXAI's flagship coding and knowledge-work model (SpaceX acquired xAI early 2026; rebrand to SpaceXAI July 2026; the `x.ai` / `grok-` surface is unchanged).
- **Short description:** A new, larger base model with a longer RL run weighted toward multi-hour tasks (not a tune of Grok 4.6), natively trained for the Grok Bot harness. Best-in-class where it leads — electrical engineering (EEBench 64.0%), legal-agent tasks, and AA-Briefcase office work — at the same $2/$6 list price as Grok 4.6. Independent caveat: gains partly come from ~2.25× more output tokens (AA-measured cost per task roughly doubled).
- **Provider / access:** xAI API `https://api.x.ai/v1` — OpenAI-compatible, both Chat Completions and **Responses API** (recommended; reasoning effort is a nested object; `reasoning.encrypted_content` always returned). Also: Cursor (SpaceX closed the $60B Cursor acquisition 2026-08-14), Grok Build (its default model; separate coding-agent product is `grok-build-0.1`), GitHub Copilot (gradual rollout, Pro→Enterprise), OpenRouter `x-ai/grok-4.7`, Vercel AI Gateway, Cloudflare. Azure AI Foundry / Amazon Bedrock: not confirmed for 4.7. No Free ID on OpenCode Zen (repo metadata `noFreeId: true`).
- **Release / knowledge:** released 2026-09-21 (one day before Claude Opus 5.5; after Musk's slipped July target and pre-dating his 2026-09-13 Grok 4.8 announcement); knowledge cutoff **May 2026**.
- **IDs:** `grok-4.7` (no aliases on xAI API; `x-ai/grok-4.7` on OpenRouter; Grok 4.7 Fast has no public ID — Cursor/Grok Build only).
- **Context window:** 500,000 tokens (unchanged from Grok 4.6; xAI model docs, re-verified 2026-10-05). Note: Grok 4.3 offers 1M; 4.7 does not.
- **Modalities:** text, image in; text out; reasoning yes — effort levels `low` / `medium` / **`high` (default)** / `xhigh`; encrypted reasoning always returned on Responses API (readable summaries, raw CoT withheld); tool calls yes — function calling, structured outputs, web search, X search, code execution. No audio/video in.
- **Pricing (as of 2026-10-07):** **$2.00 in / $6.00 out** per 1M, cached input **$0.50**, for prompts **< 200K tokens**; rates **double to $4 / $1 / $12 at ≥ 200K tokens and apply to the whole request** (third-party pricing guides; xAI docs confirm the tier). US-only endpoint `us.api.x.ai` = list +10%. `Grok 4.7 Fast` (2× rates) exists only in Cursor and Grok Build, not on the public API. List price identical to Grok 4.6 — but AA measures $3.74 per Intelligence Index task (v4.3.2), 2× Grok 4.6's $1.86, because of verbosity.
- **Architecture:** proprietary, closed weights; parameter count not published — press reports of 2.1T trace to Musk's posts, not official specs, while curated repo metadata says ~210B; treat both as unconfirmed.

### Raw benchmarks found

Agent / tool use:

- AA-Briefcase v1.1 (multi-hour office work): **1657 Elo** (xAI + AA; +111 over Grok 4.6 — just behind Claude Opus 5 and Fable 5.1 at the frontier; analytical-quality sub-score 1994 vs 4.6's 1690).
- GDPval-AA: **1695 Elo** (AA launch article) / **1715** (AA leaderboard as of Oct 2026; normalized 60.8%); vendor chart plots it above Grok 4.6's 1605 and GPT-6 Astra's 1542, below Fable 5.1's 1735.
- Terminal-Bench 4.0: **37.6%** (xAI; some coverage rounds to 38.0) vs Grok 4.6 20.3%, GPT-5.6 Sol 37.3%, Fable 5.1 57.9%. AA standardized harness: **25.8%**; AA with Grok Build (launch week): **33%** — three rows, three harnesses.
- Terminal-Bench 2.1: **73.4%** (Vals AI leaderboard — independent).
- AA AutomationBench: **65.6%** (AA leaderboard; −1.1 pp vs Grok 4.6 per AA's change list).
- Harvey Legal Agent / AA Harvey LAB: **19.6%** (tops xAI's table: GPT-5.6 Sol 2.5, Fable 5.1 6.7).
- CursorBench 4.0: **46.3%** (Cursor evals; Grok 4.6 40.4, GPT-5.6 Sol 41.7, Fable 5.1 51.8).
- CWE-bench v1: **68.0%** (Collinear leaderboard); AA ITBench: **42.1%**; GDP.pdf: **20.0%** (+3.0 pp vs 4.6, AA).
- AA Coding Agent Index (Grok 4.7 xhigh + Grok Build): **56**, +9 over 4.6 (47) — **4th among native harnesses** at launch, behind only Fable 5.1, GPT-6 Astra, Opus 5 (September measurement, predates Claude 5.5).
- Design Arena Website: **1237** (OpenRouter benchmarks).
- Safety (vendor): HackerBench v0.3 — only **3.3%** of risky dual-use prompts pass; LatchBio biosafety **62.4%**.
- SWE-bench Verified / Tau3 / MCP-Atlas / OSWorld / Claw-Eval: no verified public score found — **xAI published no SWE-bench Verified, GPQA, AIME, HLE, or ARC-AGI rows for 4.7 at all.**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **v4.3.2: 46.5 (≈46)**, **#29 of 224 models** (AA, re-verified 2026-10-05; +2 over Grok 4.6's 44; legacy launch-era quotes of "61" for 4.6 were an older index version with no conversion factor).
- AA-HLE: **43.1%** (AA leaderboard — clears the 40% ref).
- GPQA Diamond: no verified public score found (not published this cycle).
- AA-LCR (long-context reasoning): **76.7%** (−3.7 pp vs 4.6 — a regression); MLCR-AA: **15.0%**; CritPt: **17.7%** (AA).
- AA-Omniscience: accuracy **47.4%**, hallucination rate **29.3%** (down from 46.6's 34%), index **32** (AA).
- HealthBench Professional: **56.7%** (xAI; GPT-5.6 Sol 60.5, Fable 5.1 62.1).

Coding:

- DeepSWE v1.1: **71.0%** (xAI, high effort; AA with Grok Build: **73%**) — just under the 74% frontier ref; Grok 4.6: 65.2/65.
- AA-SciCode: **57.4%** (AA leaderboard — clears the 55%+ ref).
- FrontierSWE v2: **29.5%** (Proximal leaderboard).
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR/RULER retrieval row found. Best proxy: AA-LCR **76.7%** (with a −3.7 pp regression). Vendor claims improved long-context management and multi-hour persistence; independent counterpoint (The New Stack): it still fails most long-horizon tasks. 500K window is the hard capacity.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA-Briefcase 1657 sits just behind the frontier pair, GDPval 1695–1715 beats Grok 4.6 and GPT-6 Astra, AutomationBench 65.6, Harvey 19.6 tops its field, Coding Agent Index 56 is 4th among native harnesses; capped at 88 by TB2.1 73.4 (Vals) and TB4.0 37.6/33/25.8 (all far under an 88-style ref), plus no Tau3/OSWorld/MCP rows.
- **Reasoning: 85/100.** AA-HLE 43.1 clears the 40% ref, Omniscience accuracy 47.4 with a sector-improving 29.3% hallucination rate, AA-LCR 76.7 solid; capped by the AA Index 46.5 (well under 60+, #29 of 224) and **xAI publishing no GPQA row this cycle** — the reasoning profile is one verified pillar short.
- **Context window: 90/100.** 500K native (docs-verified, unchanged from 4.6), AA-LCR 76.7 gives a real long-context reasoning signal; no retrieval-at-window row and 500K is half the ≥1M tier → 90.
- **Multimodal: 68/100.** Text + image in only (60–70 band); no audio/video/PDF input, no image-understanding benchmark row found — modality coverage alone sets the score.
- **Coding: 90/100.** DeepSWE 71–73 (within striking distance of 74), SciCode 57.4 clears its ref, CursorBench 46.3 beats GPT-5.6 Sol, Coding Agent Index 56 (#4 native), CWE-bench 68 — capped below the mid-90s by DeepSWE still under ref, TB4.0 well behind Fable 5.1's 57.9, and no SWE-bench Verified row.
- **Cost efficiency: 75/100.** $2/$6 list is the cheapest frontier-class price by a wide margin (GPT-6 Astra $10/$50, Opus 5.5 $4/$20) with $0.50 cache reads — but the 200K cliff doubles the entire request, the US endpoint adds 10%, and AA's measured cost per Index task is $3.74 (2× Grok 4.6) because ~81k output tokens per task is "very verbose" (7.1 min decode per task).
- **Overall Score: 84/100.** (88+85+90+68+90)/5 = 84.2 → 84 — the price-performance agentic coder: #4 native-harness Coding Agent Index, frontier-adjacent Briefcase, at mid-tier list prices; the missing GPQA row, the 46.5 Index, and doubled per-task token spend are the honest offsets. (One point below this agent's Grok 4.6 score purely because xAI published no GPQA/HLE row this cycle — every independent row that exists improved.)

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (xAI launch post; AA "Benchmarking Grok 4.7" article + AA leaderboards via BenchLM's 26-row evidence table; Codersera guide with xAI-docs pricing/spec verification 2026-10-05; Vals AI TB2.1; Cursor evals; Collinear CWE-bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
