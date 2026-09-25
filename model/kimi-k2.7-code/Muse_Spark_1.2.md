# Kimi K2.7 Code — findings by Muse Spark 1.2

- Source: Moonshot AI / Kimi K2.7 Code (moonshotai/Kimi-K2.7-Code, opencode/kimi-k2.7-code)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI open-weight coding-specialist MoE (1T total / 32B active, 384 experts) — fine-tune of Kimi K2.6 optimized for long-horizon agentic coding with ~30% fewer thinking tokens per task; mandatory thinking mode.
- **Provider / access:** Moonshot AI Kimi API / Hugging Face `moonshotai/Kimi-K2.7-Code` — API IDs `kimi-k2.7-code` and `kimi-k2.7-code-highspeed` (Chat Completions via platform.kimi.ai). No confirmed OpenCode Zen Free tier; evaluated as paid.
- **Release / knowledge:** Released 2026-06-12 (kimi.ai announcement, Hugging Face) under Modified MIT license; knowledge cutoff not disclosed.
- **IDs:** `moonshotai/Kimi-K2.7-Code` (`platform.kimi.ai: kimi-k2.7-code`); `opencode/kimi-k2.7-code` (paid, no Free ID verified)
- **Context window:** 262,144 tokens total (262K) with up to 256K max output — verified via platform.kimi.ai pricing table and vals.ai eval (262,144 context, temperature 1.0/top-p 0.95).
- **Modalities:** Text in/out only; reasoning yes (thinking mandatory, cannot disable); tool calls via function calling / MCP; JSON mode supported; no image/audio/video/PDF input.
- **Pricing (as of 2026-09-25):** $0.95 / $4.00 per 1M input (cache miss) / output; $0.19 cache-hit input; highspeed variant $1.90 / $8.00 per 1M. Source: platform.kimi.ai/docs/pricing, kimi.com pricing page, aicost.tools. Paid only; no verified free tier.
- **Architecture:** 1-trillion total / 32B active Mixture-of-Experts, 384 experts (awesomeagents.ai, sdd.sh); open weights (Modified MIT), ~595GB disk; thinking mode locked server-side.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Self-reported vendor suites noted as proprietary; independent third-party noted where present.

Agent / tool use:

- MCP Atlas (multi-step MCP workflows): **76.0%** (Moonshot vendor table, Kimi-K2.7-Code column; huggingface model card; method: Kimi Code CLI thinking enabled)
- MCP Mark Verified: **81.1%** (Moonshot vendor table, huggingface model card)
- Kimi Claw 24/7 Bench (in-house agentic): **46.9%** (Moonshot vendor table)
- Terminal-Bench 2.1 (independent, vals.ai, official Kimi API default settings): **67.04%** (vals.ai 2026-06-13 — #1 open-weight, next closest 60.67%)
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this ID (no published Tau2/Tau3 banking run)
- GDPval-AA: **no verified public score found** (not reported by vendor nor independent leaderboard)
- Toolathon / MCP-Atlas (see above) / SWE Atlas Codebase QnA: MCP Atlas above; Toolathon no verified public score found
- Vending-Bench, BrowseComp: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** for Kimi K2.7 Code (not submitted as of 2026-06-15 reviews; check vals.ai/moonshot announcements)
- HLE (Humanity's Last Exam): **no verified public score found**
- LCR / MLCR / MRCR / RULER: **no verified public score found** (vals.ai notes 262K context, but no long-context retrieval score published)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA index not published for this ID)
- Program Bench (Moonshot proprietary, behavior-from-binary, 200 tasks, 248k fuzz tests): **53.6% (vendor) / 49.44% raw pass (vals.ai #2 open-weight)** (huggingface card 53.6% with Kimi Code CLI; vals.ai independent 49.44% raw pass)
- MLS Bench Lite (ML method invention, 30 tasks, 5h): **35.1%** (Moonshot vendor table, huggingface)
- Kimi Code Bench v2 (in-house 10+ languages, production stack): **62.0%** (vendor, +21.8% over K2.6 50.9%; independent verification pending — VentureBeat noted practitioners could not replicate gains consistently)

Coding:

- SWE-bench Verified (independent vals.ai, open-weight leaderboard): **78.20%** (vals.ai 2026-06-13 — #1 open-weight, matching Claude Opus 4.6 Thinking / GPT 5.4 xhigh, edging GPT 5.3 Codex)
- SWE-bench Pro: **no verified public score found** for K2.7 Code (sdd.sh/BuildFastWithAI confirm none at launch; pending community re-runs; K2.6 had 58.6% Pro as reference)
- LiveCodeBench (independent vals.ai): **82.05%** (vals.ai #8 open-weight)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench (full-stack app building, browser eval): **47.21%** (vals.ai, up from 37.89% for K2.6, #3 open-weight)
- DeepSWE: **no verified public score found** (not submitted; sdd.sh notes pending)
- Program Bench / MLS Lite above duplicate coding-adjacent

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** for this ID (only window size 262,144 verified; no MRCR v2/RULER point score found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 84/100.** MCP Atlas 76.0% + MCP Mark 81.1% are strong vs GPT-5.5 79.4/92.9 and Opus 4.8 81.3/76.4, and vals.ai Terminal-Bench 2.1 67.04% is #1 open-weight (frontier 88%+ =90-100), but caps below frontier because Tau2/GDPval missing and Claw 46.9% trails GPT-5.5 52.8%.
- **Reasoning: 68/100.** No verified GPQA/HLE/Index to anchor frontier; proprietary Program Bench 53.6% trails GPT-5.5 69.1% and MLS 35.1% par with GPT-5.5 35.5% suggest mid-tier reasoning; capped heavily pending independent GPQA/HLE — slight penalty per methodology for missing core indices.
- **Context window: 72/100.** 262,144 tokens (262K) falls in 200K-500K tier (65-84); 262K ≈72 at tier midpoint; max output 256K noted but no MRCR/RULER retrieval to earn 95-100 1M-tier bonus.
- **Multimodal: 15/100.** Text in/out only; no image/audio/video/PDF input, no non-text output — per methodology text-only =10-20.
- **Coding: 86/100.** vals.ai independent SWE-bench Verified 78.2% (#1 open-weight, matching Opus 4.6/GPT 5.4) and Terminal-Bench 2.1 67.04% (#1 open-weight) plus LiveCodeBench 82.05% and Vibe 47.21% are strong; caps below 90 because no SWE-Pro/DeepSWE/SciCode verification and proprietary Kimi Code Bench not independently audited.
- **Cost efficiency: 88/100.** $0.95/$4.00 per 1M (cache hit $0.19) is cheap vs $3/$15 ~60 and near $0.60/$2.20 ~92 tier; scored as paid (no free tier), but would be 100 at $0 free equivalent; highspeed $1.90/$8.00 variant higher cost noted.
- **Overall Score: 65/100.** Mean of five quality dims (84+68+72+15+86)/5=65.0 → 65. Best-fit: open-weight long-horizon coding specialist — choose when SWE-bench/Terminal cost-efficiency and MCP tool-use matter at 262K, pending independent SWE-Pro confirmation.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-25
- Method: public internet research (moonshotai kimi.ai docs, huggingface model card, vals.ai independent coding benchmarks, sdd.sh/buildfastwithai/awesomeagents reviews, platform.kimi.ai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

