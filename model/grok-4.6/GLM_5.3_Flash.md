# Grok 4.6 — findings by GLM 5.3 Flash

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-08→10-16): the Nov 4 BenchLM refresh
> (66.62, #22 of 1009) **re-confirms every prior row** — AA Index 44.3, GPQA-D 94.9/94.7%,
> TB2.1 88.4% (AA) / 78.3% (Vals), SWE-V (Vals) 95.6%, LCB 88.2%, DeepSWE 65.9%, ARC-AGI-2
> 67.1%, GDPval 1643, Gray Swan IPI 51.8% — with one labeling-drift flag on the Omniscience
> hallucination row. Still superseded by Grok 4.7 (same $2/$6). No score changes; Overall
> stays 81.

## Model card

- **Name:** Grok 4.6 (proprietary frontier; no Free-tier wording)
- **Short description:** xAI's August 2026 frontier model, built on Grok 4.5 with a focus on long-running agents and ambitious interactive/visual work — strongest-in-table GDPval-AA and AA-Briefcase scores at launch, trained with agentic RL across kernel optimization, web development and CAD environments. **Superseded by Grok 4.7 (2026-09-21, AA 46.3 v4.3.2 vs 4.6's 44.3, same $2/$6)** but still served.
- **Provider / access:** xAI API (`grok-4.6`, docs.x.ai/developers/grok-4-6) and xAI Console; also OpenRouter, Vercel, Cloudflare; bundled in Cursor and Grok Build. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released August 12, 2026. Knowledge cutoff February 1, 2026.
- **IDs:** `grok-4.6` (xAI API); fast variant priced 2x.
- **Context window:** 500,000 tokens (BenchLM concurs); no published text-output limit.
- **Modalities:** Text + image in; text out. Function calling, structured outputs, prompt caching, code execution, web search, X search. Reasoning effort: low/medium/high (default)/xhigh. Batch API not supported.
- **Pricing (as of 2026-11-05):** $2.00 in / $6.00 out per 1M; cache reads $0.50 (75% discount); fast variant 2x. AA cost per Index task $1.86; blended $1.35/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Longer supplemental pretraining than 4.5 plus regenerated SFT trajectories and agentic RL (knowledge work, general coding, kernel optimization, web dev, CAD).

### Raw benchmarks found

> BenchLM Nov 4 refresh re-verified; new/changed rows flagged.

Agent / tool use:

- GDPval-AA: **1753** (xAI launch table) — **conflicts with AA's independent 1643 (normalized 55.9%)**; both listed
- AA-Briefcase: **1577** (xAI table); AA Agentic Index: **53.4%**; AA Tau3-Banking: **50.7%**; AA EnterpriseOps-Gym: **48.3%**; AA AutomationBench-AA: **66.7%** (2nd to GPT-6 Astra at launch)
- Vals Terminal-Bench 2.1: **78.3%**; AA Terminal-Bench 2.1: **88.4%**; Terminal-Bench 3.0: **26.5%** (weak); ApprenticeBench (GUI): **13%**
- APEX-Agents: **57.5%**; APEX-SWE: **56.4%**; Harvey LAB (Vals): **15.8%** (best in its table); CWE-bench v1: **57.0%** (Collinear)
- Gray Swan IPI (15 attempts): **51.8%** (competitor-reported — by far the worst prompt-injection resistance measured in this repo; Claude models sit at 1–5%)
- MazeBench ASCII: **1%**; Bug Hunt Bench: **27.0 fixes**; AA-AnalystAgent 41.3%
- FrontierMath v2 (Epoch): **66.0%** Tiers 1–3 / **31.7%** Tier 4 (documented inline, not averaged)
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA) / **94.7%** (Vals) — elite, among the best measured in this repo
- HLE: **42.9%** (AA); ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%** (ARC Prize verified)
- AA-LCR v1.1: **80.3%**; CritPt: **17.1%**
- Artificial Analysis Intelligence Index: **44.3** (AA current board; xAI's own-table 61 remains a version discrepancy)
- MMLU-Pro: **89.4%** (Vals)
- AA-Omniscience: **30.5 index / 48.2% accuracy / 34.3%** — LABELING DRIFT FLAG: the prior pass read the 34.3% row as non-hallucination; the current BenchLM table labels the same value "Hallucination Rate" — check AA's own page before quoting either way
- Verbosity: 94M output tokens across the AA Index; 59.8 tok/s; TTFT 41.52s

Coding:

- SWE-bench (Vals): **95.6%**; LiveCodeBench (Vals): **88.2%**; AA Coding Index: **76.8%**; AA-SciCode: **56.5%**; VulcanBench v3: **87.0%**
- CursorBench 3.2: **70.8%**; CursorBench 4.0 (xhigh): **41.4** ($6.10/task); FrontierSWE v2: **25.3%** (weak); FrontierCode 1.1 Extended: **61.3%**; DeepSWE v1.1: **65.9%**
- SWE-bench Verified / Pro: no verified public score found

Long context:

- 500K window; AA-LCR 80.3% (solid); MRCR/RULER: no retrieval numbers published

### Normalized scores (1–100)

- **Tool use: 87/100.** Unchanged — Vals TB2.1 78.3%, AA AutomationBench 66.7% (#2-class), Tau3 50.7% and the re-confirmed AA TB2.1 88.4% hold the band; the GDPval conflict (1753 vs 1643), TB3.0 26.5%, ApprenticeBench 13% and the 51.8% injection-ASR keep it under 90.
- **Reasoning: 84/100.** Unchanged — GPQA 94.9%/94.7% elite, ARC-AGI-2 67.1% verified, AA-HLE 42.9% and MMLU-Pro 89.4% corroborated on the Nov 4 refresh; AA Index 44.3, CritPt 17.1% and the ARC-2 gap to the 2026 Claude/OpenAI class hold it.
- **Context window: 86/100.** Unchanged — 500K at the floor of the 500K–1M band; AA-LCR 80.3% solid; no output cap published.
- **Multimodal: 65/100.** Unchanged — text+image in / text out.
- **Coding: 83/100.** Unchanged — Vals SWE-bench 95.6%, LCB 88.2%, AA Coding Index 76.8% and CursorBench 70.8% re-confirmed; FrontierSWE v2 25.3% and DeepSWE 65.9% cap below the Sol/Fable band.
- **Cost efficiency: 74/100.** Unchanged — $2/$6 with a 75% cache discount; $6.10/Cursor-task at xhigh and the 2x fast variant don't help; no free tier, no Batch API.
- **Overall Score: 81/100.** (87 + 84 + 86 + 65 + 83) / 5 = 405/5 = 81.0 → 81 (unchanged). Best-fit: long-running agentic and knowledge-work projects (GDPval/Briefcase class) at mid-tier prices — not the pick for frontier coding depth, million-token contexts, or injection-sensitive deployments; Grok 4.7 at the same price is the default.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetches (web-search quota exhausted mid-pass): BenchLM Grok 4.6 page fetched 2026-11-05 (Nov 4 data) re-confirming all rows — no genuinely new evidence, no score changes; Omniscience-row labeling drift flagged; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
