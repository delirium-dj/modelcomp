# Qwen 3.7 — findings by DeepSeek 4.1 Flash

- Source: Alibaba Qwen/Qwen 3.7 (`Qwen3.7-Max`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (published as Qwen3.7-Max)
- **Short description:** Alibaba's proprietary previous-generation Qwen flagship for agent-driven workflows — coding agents, office automation, MCP/multi-agent orchestration and long-horizon autonomous execution — released 2026-05-19. **Variant/alias flag:** slug `qwen-3.7` maps to the Qwen3.7-Max flagship (no separate Max folder here); Qwen3.7-Plus and Qwen3.7 Flash are cheaper, different tiers, and it is distinct from Qwen 3.8 / 3.8 Max.
- **Provider / access:** Alibaba Cloud / Qwen (`qwen3.7-max`, chat.qwen.ai, Novita / DeepInfra / Together); Zen route `opencode/qwen-3.7`. Tool calling; MCP support claimed by the vendor; no open weights (proprietary licence).
- **Release / knowledge:** 2026-05-19 (llm-stats tracker; qwen.ai launch post is primary). Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.7-max`; Zen `opencode/qwen-3.7`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1M input / 256K output (llm-stats); provider routes disagree — Novita and Together 1.0M in / 65.5K out, DeepInfra 256K/256K — so pin the route before relying on the window.
- **Modalities:** text in → text out for the listed API tooling; LVBench 76.2% and CharXiv-with-python 85.9% imply image/video understanding, but no provider page checked stated modality rows explicitly.
- **Pricing (as of 2026-09-23):** $1.25 in / $3.75 out per 1M, cached input $0.25 (Novita, cheapest route); DeepInfra and Together $2.50 / $7.50.
- **Architecture:** proprietary; no parameter disclosure.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Qwen's own published figure, quoted in the Yotta Labs survey); Terminal-Bench 2.1 **74.5%** (RankLLMs aggregator, checked 2026-09-23)
- Tau3-Banking / Tau2: **no verified public score found**
- GDPval-AA **1538 Elo** (RankLLMs, labelled ambiguously beside a "React Frontend Elo" of the same value — provisional)
- OSWorld-Verified **73.3%**, CoWorkBench **64.6%**, QwenReactBench **1538 Elo** (RankLLMs); OSWorld (other variant) **38.0%** and BrowseComp **35.0%** (RankLLMs, lower confidence)
- Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Qwen's published figure via Yotta Labs). RankLLMs prints **50.2%** for the same benchmark — a direct contradiction whose row also duplicates its MATH-500 value, so it is recorded as unreliable, never averaged.
- HLE, CritPt, LCR/MLCR/MRCR and any Artificial Analysis Intelligence Index: **no verified public score found** for this ID
- MATH-500 **50.2%** (RankLLMs, provisional — see contradiction note); LVBench **76.2%** and CharXiv with python **85.9%** (RankLLMs multimodality proxies)

Coding:

- SWE-bench Verified: **80.4%** (Qwen's published figure via Yotta Labs); SWE-bench Pro **60.6%** (RankLLMs)
- LiveCodeBench and SciCode: **no verified public score found**
- Family context: the Yotta survey treats Qwen3.7-Max's numbers as the verified floor Qwen 3.8 was expected to clear — trend reading only, not a score for this ID.

Long context:

- No long-context retrieval evaluation (MRCR/RULER/AA-LCR) was found; the 1M window is a documented capability without a measured retention figure.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 74.5% and 2.0 69.7% are solidly above the 45–60% mid band without reaching the 88%+ frontier band, and OSWorld-Verified 73.3% / CoWorkBench 64.6% back the agentic positioning; capped by the absence of any Tau3-Banking, Toolathon or MCP-Atlas number and by two low-confidence aggregator rows (OSWorld 38.0%, BrowseComp 35.0%).
- **Reasoning: 80/100.** GPQA Diamond 92.4% is frontier-grade and CharXiv 85.9% supports chart reasoning, but HLE, CritPt and any AA index are unverified for this ID and the contradictory GPQA 50.2% row had to be discarded — missing evidence caps it below the 90+ band.
- **Context window: 94/100.** 1M input is the ≥1M tier but at its floor: no retention figure exists and provider routes disagree (1.0M vs 256K) about what the API serves.
- **Multimodal: 85/100.** LVBench 76.2% (long video) and CharXiv 85.9% (charts) demonstrate image/video understanding in the "+video/PDF in = 75–90" band; not 90+ because no audio input is documented and no provider modality row confirms video ingestion.
- **Coding: 85/100.** SWE-bench Verified 80.4% plus SWE-bench Pro 60.6% and QwenReactBench 1538 Elo are credible; capped because LiveCodeBench, SciCode and DeepSWE were all unverified, so the 90+ band cannot be claimed.
- **Cost efficiency: 88/100.** $1.25 in / $3.75 out per 1M with $0.25 cached matches the ~$1.25/$4.25 ≈ 88 anchor; cheaper on output, slightly above it on cached input.
- **Overall Score: 84/100.** (78 + 80 + 94 + 85 + 85) / 5 = 84.4 → **84**. Best fit: long-horizon coding and office-automation agents on proprietary weights — strong published engineering numbers, thin third-party verification.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (Yotta Labs 2026-08-04 benchmark survey quoting Qwen's figures, llm-stats model page for release/pricing/context/licence, RankLLMs aggregator table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
