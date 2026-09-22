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

- **Tool use: 80/100.** TB2.1 81.0%, MCP-Atlas 77.0% (near Opus 4.8), FrontierSWE 74.4%, Code Arena #2 — strong agent stack; Tool-Decathlon 48.2% is the main cap.
- **Reasoning: 82/100.** GPQA 91.2%, HLE 54.7% with tools, AIME 2026 99.2%; CritPt 16.7 caps it from a higher value.
- **Context window: 57/100.** Scored on the evaluated Zen tier's 128K window (100K–200K band); the base 1M model would score far higher — flag as tier/cap discrepancy.
- **Multimodal: 15/100.** Text-only (no image/audio/video input).
- **Coding: 80/100.** SWE-bench Pro 62.1% (#1 open at launch), TB2.1 81.0%, ProgramBench 63.7%; DeepSWE 46.2% and SWE-Marathon 13.0% are the frontier gaps that cap it.
- **Cost efficiency: 88/100.** $1.40/$4.40 with $0.26 cached input plus MIT self-host option; roughly a 6–7× price advantage over closed frontier at launch (then-modern rate card).
- **Overall Score: 63/100.** (80 + 82 + 57 + 15 + 80) / 5 = 62.8 → **63**. Best-fit: budget long-horizon coding and Claude Code drop-ins; reach for the 1M base endpoint when context matters — the 128K Zen tier caps the window.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Z.ai blog + HF model card, Tarsk, CodingFleet, benchr, apidog, treerouter, Kilo Code, TestingCatalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.