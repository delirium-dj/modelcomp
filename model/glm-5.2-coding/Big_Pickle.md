# Glm 5.2 Coding — findings by Big Pickle

- Source: Zhipu / Z.ai (`opencode/glm-5.2-coding`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glm 5.2 Coding (Z.ai's GLM-5.2 served via the GLM Coding Plan / coding endpoint; base weights = GLM-5.2)
- **Short description:** Zhipu's June 2026 open-weights MoE flagship (753B/40B-active, MIT) offered as a coding-plane SKU on OpenCode Zen. Top use case: long-horizon agentic coding and Claude Code–compatible drop-in at ~1/6 the cost of closed frontier coding models.
- **Provider / access:** OpenCode Zen `opencode/glm-5.2-coding`; Z.ai coding endpoint `gem-5.2[1m]` (Anthropic-compatible, Claude Code native); weights `zai-org/GLM-5.2` (MIT) on Hugging Face. Chat Completions–style / Anthropic-style API.
- **Release / knowledge:** Released 2026-06-13 (subscribers) / 2026-06-16 (open weights + API); reasoning modes `high` / `max`.
- **IDs:** `opencode/glm-5.2-coding`; base `z-ai/glm-5.2`. No dedicated free tier confirmed.
- **Context window:** 128K total on the Zen coding SKU (per repo meta); base GLM-5.2 advertises 1M with 131,072 max output — flag: evaluated tier here is the 128K gateway.
- **Modalities:** text in/out only (per meta); tool calls; JSON mode.
- **Pricing (as of 2026-09-23):** standard $1.40 in / $4.40 out per 1M; cached input ~$0.26/1M; GLM Coding Plan subscription (Lite ~$18 / Pro ~$80 / Max ~$168 per mo) — note GLM-5.2 requests now route to GLM-5.3 in plans.
- **Architecture:** 753B total / ~40B active MoE (744B reported), MIT open weights; IndexShare attention cuts per-token FLOPs ~2.9× at full context.

### Raw benchmarks found (base GLM-5.2 weights = best verified proxy for the coding SKU)

Agent / tool use (Z.ai vendor-run release notes / HF card unless noted):

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Opus 4.8 85.0; GPT-5.5 84.0; GLM-5.1 63.5)
- MCP-Atlas: **77.0%** (Opus 4.8 77.8) — near-tie with Opus on tool use
- FrontierSWE: **74.4%** (Opus 4.8 75.1; GPT-5.5 72.6) — within ~1 pt of closed frontier
- Tool-Decathlon: **48.2%** (GPT-5.5 55.6)
- PostTrainBench: **34.3%** (beats GPT-5.5 25.0; ranks 2nd only to Opus 4.8)
- Code Arena (independent): **#2 globally** for long-horizon coding (trails Opus 4.8 by ~1 pt)
- What's New: a community-run DeepSWE leaderboard (Kilo/TestingCatalog) put the model at **44% one-shot** at max thinking — top open-source entry, above several closed configs (Sonnet 4.6 30%, Opus 4.8 Low 41%).

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (up from 86.2)
- HLE: **40.5% no tools / 54.7% with tools** (GLM-5.1 31.0 / 52.3)
- AIME 2026: **99.2%**; HMMT Feb 2026 **92.5%**; CritPt **16.7** (up from 4.6 — still a weak row)

Coding:

- SWE-bench Pro: **62.1%** (#1 open-weight at launch; GPT-5.5 58.6, Opus 4.8 69.2)
- Terminal-Bench 2.1: **81.0%** (above)
- DeepSWE: **46.2%** (GLM-5.1 18.0; GPT-5.5 70.0, Opus 4.8 58.0) — the widest frontier gap
- ProgramBench: **63.7%** (GLM-5.1 50.9); NL2Repo: **48.9%**; SWE-Marathon: **13.0%**

Long context:

- Base model: 1M window, 131K out; no MRCR / RULER long-context retrieval value found in this research. Evaluated Zen tier: 128K total.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 81.0%, MCP-Atlas 76.8% (near Opus 4.8), FrontierSWE 74.4%, τ²-bench 99.1% — strong agent stack; Tool-Decathlon 48.2%, TB3.0 4.6%, APEX-Agents 33.7% and AA Agentic Index 39.4% are the caps.
- **Reasoning: 83/100.** GPQA 91.2%, HLE 54.7% with tools, AIME 2026 99.2%, CritPt 20.9 (up from 4.6 across versions); still a solid-but-not-elite AA II 33.7.
- **Context window: 57/100.** Scored on the evaluated Zen tier's 128K window (100K–200K band); the base 1M model (AA-LCR 78.3) would score far higher — flag as tier/cap discrepancy.
- **Multimodal: 15/100.** Text-only (no image/audio/video input).
- **Coding: 79/100.** SWE-bench Pro 62.1% (#1 open at launch), SWE-bench (Vals) 82.8%, TB2.1 81.0%, ProgramBench 63.7%; AA Coding Index 68.8, CursorBench 3.2 55.0% and the DeepSWE/SWE-Marathon gap cap it.
- **Cost efficiency: 88/100.** $1.40/$4.40 with $0.26 cached input plus MIT self-host option; roughly a 6–7× price advantage over closed frontier at launch (then-modern rate card).
- **Overall Score: 62/100.** (78 + 83 + 57 + 15 + 79) / 5 = 62.4 → **62** (lowered from 63 on 2026-10-08, see Re-verification). Best-fit: budget long-horizon coding and Claude Code drop-ins; reach for the 1M base endpoint when context matters — the 128K Zen tier caps the window.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run widens the proxy base-GLM-5.2 profile (BenchLM 61.56, #47/887, 43/623, updated 2026-10-07) with AA/Vals/Cursor rows and refreshed AGPQA/HLE values.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 80 | 78 | −2 |
| Reasoning | 82 | 83 | +1 |
| Context window | 57 | 57 | — |
| Multimodal | 15 | 15 | — |
| Coding | 80 | 79 | −1 |
| Cost efficiency | 88 | 88 | — |
| **Overall** | **63** | **62** | **−1** |

New and corrected data:

- **Tool-use truth-telling:** TB3.0 **4.6%** (the biggest agentic gap), APEX-Agents-AA **33.7%**, AA Agentic Index **39.4%**, AA ITBench 42.7%, ResearchClawBench **20.7%**, GDPval-AA (norm) 43.7%; confirmed positives TB2.1 81.0%, MCP Atlas 76.8%, Toolathlon 48.2%, τ²-bench **99.1%**. Tool 80 → 78.
- **Reasoning nuancing:** CritPt now **20.9** (better than the 16.7 originally recorded), AA-GPQA 89.5 (vs vendor 91.2), AA-HLE 41.1%, AA II 33.7, HLE 54.7 w/ tools / 40.5 no-tools re-confirmed; GPQA (Vals) 85.6 / MMLU-Pro (Vals) 86.7 added. Reason 82 → 83.
- **Coding made honest:** AA Coding Index **68.8%**, AA-SciCode 51.2%, CursorBench 3.2 **55.0%**, OpenHarmony 58.4%, SWE-bench (Vals) **82.8%**, LCB (Vals) 69.5%; original launch rows hold (SWE-Pro 62.1, ProgramBench 63.7, NL2Repo 48.9, PostTrainBench 31.7 vs the "34.3" earlier read).
- **Multimodal/collections:** Design Arena 1292; but the coding SKU remains text-only at the Zen tier — 15 stands.
- **Lineage:** GLM-5.3 (68.71, #20) is the current flagship and takes over GLM-5.2 requests in Coding Plans; a dedicated 128K coding-SKU row remains unevaluated in BenchLM.
- Pricing unchanged ($1.40/$4.40, cache $0.26; 1M-base endpoint 131K out).

Gaps still open after re-run: DeepSWE row above 46.2%, SWE-Marathon, MRCR/RULER at full 1M window, an independent run of the 128K coding-SKU tier.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Z.ai blog + HF model card, BenchLM, AA, Vals, Cursor, OpenHarmony, Tarsk, CodingFleet, benchr, treerouter, Kilo Code, TestingCatalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.