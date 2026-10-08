# GLM-5.3 Free — findings by Big Pickle

- Source: Zhipu AI / Z.ai (`glm-5.3-free`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (free-access tier)
- **Short description:** The free-access tier of Zhipu's GLM-5.3 coding flagship — a post-training-only upgrade of GLM-5.2 (same 743B base) that reached open-source SOTA on Terminal-Bench 2.1/3.0 and gained emergent cybersecurity capability. Free routes: ZCode CLI free token quota, GLM Coding Plan promotional/off-peak quota, and free-gateway/referral credits.
- **Provider / access:** Z.ai — ZCode CLI free quota, GLM Coding Plan (points quota, 50% off-peak), free-gateway promotions (e.g. OpenCode Go referral credits). Paying API: `glm-5.3` / `glm-5.3[1m]`.
- **Release / knowledge:** 2026-08-14 (flagship); weights published Aug 28, 2026 (GLM-5.3 License); knowledge cutoff ~March 2026.
- **IDs:** `glm-5.3` (Z.ai; open weights since Aug 28 under the GLM-5.3 License)
- **Context window:** 1M tokens (1,048,576); max output 128K.
- **Modalities:** **text only** — no vision; thinking always enabled (`reasoning_effort` low/high/max, default max); MCP tool use, function calling, structured output, context caching.
- **Pricing (as of 2026-09-20):** free tier via ZCode/Coding-Plan quota and gateways; metered API $1.40 in / $0.26 cached / $4.40 out per 1M (identical to GLM-5.2) — no per-token cost on the free tier, but rate-limited.
- **Architecture:** MoE, same 743B-total / 40B-active base as GLM-5.2 (78 layers, 256 routed + 1 shared experts, top-8); all gains from scaled post-training.

### Raw benchmarks found

Coding:

- Terminal-Bench 2.1: **88.2%** (Z.ai launch table); Terminal-Bench 3.0: **28.3%** (open-source SOTA; GLM-5.2 was 4.6)
- DeepSWE v1.1: **66.9%** (Z.ai; vs GLM-5.2 46.2, Opus 4.8 58.0)
- SWE-Marathon v1.1: **42.5%**; FrontierSWE: **78.1%**; NL2Repo: **58.0%** (Z.ai)
- Z.ai in-house Code Bench: **31.4%** at high effort vs Opus 4.8's 29.5% (Z.ai)

Agent / tool use:

- Toolathlon Verified: **73.0%** (Z.ai); AutomationBench v1.0.6: **48.2%** (Z.ai)
- Agents' Last Exam (ALE-CLI): **28.5%** (Z.ai)
- CyclicGym induced: **no verified public score found**; CyberGym 84.5% is the flagship variant's figure — free-tier routing identical (Z.ai)

Reasoning / knowledge:

- HLE w/ tools: **62.5%** (Z.ai; vs 57.9 Opus 4.8, 64.5 GPT-5.6 Sol)
- GDPval-AA v2: **1769 Elo** (Z.ai; AA independent 1770)
- Artificial Analysis Intelligence Index: **60** (#9/186, ties Kimi K3; behind Opus 5 63) — token cost per index task ~$0.68 (more verbose than GLM-5.2; tokencost.app)
- GPQA Diamond: **no verified public score found** in this session's sources

Long context:

- 1M window / 128K output (Z.ai model page); no free-tier-specific retrieval figure published

Multimodal:

- None — text-only model (benchgen.com; ofox.ai)

### Normalized scores (1–100)

- **Tool use: 80/100.** Toolathlon 73% and AutomationBench 48.2% (AA 62.2%) and TB2.1 88.2% (AA 83.9%) show a top-tier agentic stack; AA Agentic Index 53.4 confirmed independently; ALE 28.5% mid-pack, Vals TB2.1 71.5% (different harness).
- **Reasoning: 86/100.** AA-GPQA Diamond 91.7% (Vals 88.1), MMLU-Pro (Vals) 86.8, HLE w/tools 62.5% (AA-HLE 42.3) — frontier-class on every knowledge row; CritPt 19.1%.
- **Context window: 85/100.** Full 1M window with 128K output confirmed; AA-LCR 79.7% is a strong long-context-reasoning figure; MLCR-AA 48.3%.
- **Multimodal: 68/100.** Text-only — no vision at all, the main structural gap versus GLM-5.3-Flash's native image/video input (Design Arena row is web-design/HTML, not parametric vision).
- **Coding: 80/100.** SWE-bench (Vals) 95.4%, AA Coding Index 74.8, LCB (Vals) 80.5, AA-SciCode 59.0, DeepSWE 66.9%, TB3.0 28.3% (OSS SOTA), TB4.0 41.9% — a flagship-grade coder available for free on quota tiers.
- **Cost efficiency: 100/100.** The free tier reduces per-token cost to zero (rate-limited); even the metered API at $1.40/$4.40 is capped by the codable budget-tier rivals to contend with.
- **Overall Score: 80/100.** Mean of the five quality dims (80+86+85+68+80)/5 = 79.8 → 80 (raised from 76 on 2026-10-08, see Re-verification). Same top-tier GLM-5.3 cortex at zero marginal token cost — the ideal entry point for testing frontier-class open-weights coding, with text-only and quota caveats.

---

## Re-verification — 2026-10-08 (18 days after original)

Re-run grounds every previously open dimension (GPQA, long-context, coding bars) on independent rows (BenchLM profile, updated 2026-10-07, 49/623 covered; AA; Vals; HF `zai-org/GLM-5.3` model card). Weights identical to paid `glm-5.3` — free-tier routing unchanged.

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 76 | 80 | +4 |
| Reasoning | 81 | 86 | +5 |
| Context window | 82 | 85 | +3 |
| Multimodal | 68 | 68 | — |
| Coding | 73 | 80 | +7 |
| Cost efficiency | 100 | 100 | — |
| **Overall** | **76** | **80** | **+4** |

New and corrected data:

- **GPQA gap filled:** AA-GPQA Diamond **91.7%** (Vals 88.1%), MMLU-Pro (Vals) 86.8 — the flagship was under-scored on knowledge; clearly frontier-class.
- **Every original Z.ai figure independently confirmed** on its HF card via BenchLM: TB2.1 88.2%, TB3.0 28.3%, DeepSWE 66.9%, FrontierSWE 78.1/30.2 (v2), NL2Repo 58.0, SWE-Marathon 42.5, Toolathlon-Verified 73.0, AutomationBench 48.2, ALE 28.5, HLE w/tools 62.5, GDPval-AA 1769 (57.6% normalized).
- **New coding bars (this was the big gap):** SWE-bench (Vals) **95.4%**, LiveCodeBench (Vals) 80.5%, AA Coding Index 74.8%, AA-SciCode 59.0%, TB4.0 41.9%, ProgramBench 19.0%.
- **Agentic corroboration:** AA Agentic Index 53.4%, AA AutomationBench 62.2%, AA τ³-Banking 50.3%, AA EnterpriseOps-Gym 36.4%, AA Briefcase 1510 Elo, AA ITBench 46.1%.
- **Long context now measured:** AA-LCR **79.7%**, MLCR-AA 48.3% — strong for a 1M open-weights MoE.
- **Frontier corners:** CritPt 19.1% (healthy), AA-Omniscience Index 14.3 (accuracy 33.9, hallucination 29.6 — far cleaner than the 2.5-era Google models), Gray Swan IPI 31.5%, AA II 44.8% (BenchLM-normalized; the tokencost.app "60 / #9/186" figure reflects the same AA index on its native scale).
- **Positioning:** BenchLM **68.71, #20/887** — above GLM-5.2 (61.56) and GLM-5.3-Flash (57.37), confirming the free tier delivers the family flagship, not the Flash.
- **Free-tier status unchanged:** ZCode CLI / GLM Coding Plan quota / gateway credits still live; metered twinned price $1.40/$4.40 (cached $0.26) — no price change found.

Gaps still open after re-run: free-tier-specific rate/quota ceilings (unevidenced, points-quota only), parameters discrepancy (743B vs 753B on various trackers), official Chinese-motor ARC-AGI-2 row, video-input absence recheck if a 5V-merge is announced.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (z.ai, developersdigest.tech, benchgen.com, tokencost.app, ai-tldr.dev, cheapestinference.com, ofox.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.