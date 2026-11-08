# GPT-6 Astra — findings by MiMo 2.6 Flash

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 90). Fresh sources this pass: BenchLM model page
> (snapshot 2026-11-07, overall 85.8, rank #3/1016) and the Artificial
> Analysis model page + leaderboards. Changes: Tool use 92→93 (AA now
> publishes the previously missing GDPval-AA 1584 and Tau3-Banking 41.4%);
> Reasoning 96→95 (current AA Index 57 sits below the 60+ frontier ref that
> the old 61.2 reading cleared). Held: Context window 98, Multimodal 68,
> Coding 94, Cost 30, Overall 90 (89.6).

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's first GPT-6-generation frontier flagship (released 2026-09-03), "the most capable model we have ever broadly deployed" — built to operate software (terminal, browser, apps) for long-horizon agentic work, plus computer use, science, and document work. Not a successor language for GPT-5.6 Sol/Terra/Luna (all remain on sale) — a new family entry (siblings now include GPT-6.1 Sol/Terra, GPT-6 Sol/Luna/Cyber).
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses API; AA lists 11 API providers), Microsoft Azure, Amazon Bedrock, ChatGPT Plus/Pro/Business/Enterprise (usage in existing allowances; GPT-6 Astra Pro tier for paid plans).
- **Release / knowledge:** released 2026-09-03; knowledge cutoff 2026-04-30 (OpenAI model page, re-confirmed by AA).
- **IDs:** `openai/gpt-6-astra` (gateway routes) / `gpt-6-astra` (native).
- **Context window:** 1,050,000 tokens (max input 922,000); max output 128,000 tokens — OpenAI model docs via BenchLM (2026-11-06 registry) and AA both confirm 1.05M/1M.
- **Modalities:** text + image in; text out; reasoning yes (efforts low/medium/high/xhigh/max); tool calls yes (terminal, browser/computer use, code interpreter-class tools); JSON/structured outputs. Cyber capabilities gated behind OpenAI's Daybreak program (Critical threshold on ExploitBench).
- **Pricing (as of 2026-11-08):** $10 in / $50 out per 1M for prompts ≤272K input tokens; **above 272K the entire request reprices at $20 / $75**; cache read $1.00, cache write $12.50; Batch/Flex 50% of standard; Fast mode 2× price for up to 2× speed — all re-confirmed on the OpenAI model docs (BenchLM registry 2026-11-06) and AA ($10/$50, 90% cache discount, $6.24 per Index task). Paid — no free tier.
- **Architecture:** proprietary sparse Mixture-of-Experts (per third-party ARMES docs; OpenAI discloses no parameter count).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (tbench.ai official board, high effort, Codex harness, rank 1/18, ±1.8) / **88.4%** (AA leaderboard) / 87.3% (vals.ai).
- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (AA). Terminal-Bench-Science 0.1: **64.6%** (OpenAI) / 68.1% (rank 1/20).
- **GDPval-AA: 1584 Elo** (AA gdpval-aa leaderboard; normalized 53.7%) — **new this pass** (previously "no verified public score found for Astra"); AA-Briefcase **1569** Elo.
- **AA Tau3-Banking: 41.4%** (AA tau3-banking leaderboard — **new this pass**; previously missing; below the ~50%+ frontier ref but far above the 10–25% mid band).
- OSWorld 2.0 computer use: **72.6%** (OpenAI); OSWorld 2.1: **75.8%** (third-party card, via BenchLM); ScreenSpot-Pro **92.7%**.
- AutomationBench: **41.4%** (OpenAI) / **68.5%** (AA harness); AA Agentic Index **51.5%**; AA ITBench **48.6%**; AA-AnalystAgent **51.2%**.
- Agents' Last Exam **59.3%**; BrowseComp **91.5%**; LifeVal **80.6%** (OpenAI, new); ApprenticeBench **68%** (new); MazeBench **23%** (new); CWE-bench v1 **68.0%** (new).
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Tau2: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI) / **96.1%** (AA leaderboard — independent confirmation).
- HLE: **54.7%** no tools (AA) / **57.2%** with tools (OpenAI).
- Artificial Analysis Intelligence Index: **57**, rank **#5 / 69** (AA model page, v5.0.1 scale; BenchLM lists 56.9). The previous pass's 61.2 was the retired v4.1.1 reading (an interim v4.3.2 snapshot read 53).
- ARC-AGI-1 **97.50%** / ARC-AGI-2 **95%** / ARC-AGI-3 **62.7%** standardized (98.55% provider adapter) — ARC Prize published results, re-confirmed.
- FrontierMath v2: **97.600%** (Tier 4) / **93.684%** (Tiers 1–3, Epoch AI leaderboard) — re-confirmed.
- AA-LCR **80.7%**; MLCR-AA **41.7%** (new); CritPt **31.7%**; AA-Omniscience v1.1 index **42.4**, accuracy **61.6%**, hallucination rate **49.8%** (new rows).
- GraphWalks BFS 256K–1M: **71.8%** (Google cross-model chart, new). Science rows: BioBasicsBench 67.0%, GeneBench-Pro 37.8%, HealthBench Professional 64.7% (system card).

Coding:

- DeepSWE v1.1: **74.1%** (OpenAI) / 74.0% (Datacurve board, xhigh, tied for first).
- FrontierCode 1.1 Main **53.3%**, Extended **64.5%**; **FrontierCode 2.0: 42.8%** (Cognition, new this pass).
- AA-SciCode: **56.5%** (AA). AA Coding Index: **76.9%** (AA, current snapshot) — the earlier AA Coding Agent Index v1.4 reading was 67.0 (different series/label; not confirmed as superseded).
- FrontierSWE v2 **65.5%**; ScarfBench **65.4%** (new); Bug Hunt Bench **45.0 fixes** (new); PostTrainBench v1.1 44.3% (new); Vibe Code Bench v1.1 **89.6%**; SRE-Bench 88.0%.
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no published OpenAI figure** — still absent (BenchLM tracked set, 2026-11-07).

Long context:

- OpenAI MRCR v2 8-needle: **100%** at 256K–512K and **96.3%** at 512K–1M (vs GPT-5.6 Sol 91.5% / 73.8%) — re-listed on BenchLM 2026-11-07.

Multimodal:

- AA-MMMU-Pro: **86.9%** (new); ExtractBench **91.91%**, ParseBench **69.81%**, ExtractBench Pro **58%** (LlamaIndex snapshots 2026-10-28 / 2026-11-06, new); BenchCAD Vision2Code (tools) **0.959** (OpenAI).
- Coverage unchanged per AA: text + image in, text out — no video/audio/PDF input or non-text output.

### Normalized scores (1–100)

- **Tool use: 93/100.** The two rows that capped this score at 92 now exist — **GDPval-AA 1584 Elo** and **AA Tau3-Banking 41.4%** (both new from AA) — so the "unknown" penalty converts to measured-but-sub-frontier evidence (1584 < the 1750+ ref; 41.4% < the ~50%+ ref), while TB2.1 87.4–88.4 stays at the ~88 frontier ref, OSWorld 72.6% and BrowseComp 91.5% hold; held below mid-90s because Claw-Eval is still unpublished and GDPval/Tau3 both sit below their frontier anchors.
- **Reasoning: 95/100.** GPQA 96.0/96.1 (AA), HLE 54.7/57.2, FrontierMath v2 97.6/93.7 and ARC-AGI-2 95% all re-confirmed, but the current AA Intelligence Index reads **57 (#5/69, v5.0.1)** — below the 60+ frontier ref that the previous pass's retired 61.2 (v4.1.1) reading cleared — and the new AA-Omniscience row shows a 49.8% hallucination rate; hence 96→95.
- **Context window: 98/100.** 1.05M window with 100% MRCR at 256K–512K and 96.3% at 512K–1M (re-confirmed on BenchLM); just under the ≥98% bar at the top band for a clean 100 (the new GraphWalks 256K–1M 71.8% also argues against 100).
- **Multimodal: 68/100.** Text + image in, text out only = 60–70 band; strong new visual/document rows (MMMU-Pro 86.9%, ExtractBench 91.91%) do not change coverage, and AA still lists no video/audio/PDF input or non-text output — held at 68.
- **Coding: 94/100.** DeepSWE 74.1 (74%+ frontier ref), TB2.1 rank 1 at 87.4, SciCode 56.5 (55%+ ref), Vibe 89.6, FrontierCode Extended 64.5 and FrontierSWE v2 65.5 all hold; held at 94 because OpenAI still publishes no SWE-bench Verified/Pro or LiveCodeBench row, the AA Coding Index label is ambiguous (76.9 current vs 67.0 prior series), and the new FrontierCode 2.0 42.8% is sub-frontier (Opus 5.5 45.5%).
- **Cost efficiency: 30/100.** $10/$50 is the methodology's $10/$50 = 30 anchor exactly and OpenAI's docs re-confirm it (BenchLM registry 2026-11-06); the 272K pricing cliff (whole-request $20/$75 above it) and $1.00 cache reads still hurt agentic workloads, batch/flex at half price the only offset — unchanged.
- **Overall Score: 90/100.** (93+95+98+68+94)/5 = 448/5 = 89.6 → 90 — top-of-field reasoning/long-context/computer-use flagship for customers who need SOTA and will pay $10/$50 (and keep prompts under 272K).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page snapshot 2026-11-07, Artificial Analysis model page + gdpval-aa/tau3-banking/gpqa-diamond leaderboards, OpenAI model docs, ARC Prize, Epoch AI FrontierMath v2); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra (BenchLM, snapshot 2026-11-07)](https://benchlm.ai/models/gpt-6-astra)
  - [GPT-6 Astra (Artificial Analysis)](https://artificialanalysis.ai/models/gpt-6-astra)
  - [AA GDPval leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [AA Tau3-Banking leaderboard](https://artificialanalysis.ai/evaluations/tau3-banking)
  - [OpenAI GPT-6 Astra model docs](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [ARC Prize published results — GPT-6 Astra](https://arcprize.org/results/openai-gpt-6-astra)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
