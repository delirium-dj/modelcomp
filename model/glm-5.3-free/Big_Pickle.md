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

- **Tool use: 76/100.** Toolathlon 73% and AutomationBench 48.2% are solid agentic results backed by a 88.2% Terminal-Bench 2.1; ALE 28.5% is mid-pack.
- **Reasoning: 81/100.** HLE w/tools 62.5% and AA Index 60 are strong; no verified GPQA reported for this line keeps it a notch below pure reasoning flagships.
- **Context window: 82/100.** Full 1M window with 128K output; long-context retrieval on the free tier is unproven.
- **Multimodal: 68/100.** Text-only — no vision at all, the main structural gap versus GLM-5.3-Flash's native image/video input.
- **Coding: 73/100.** Terminal-Bench 3.0 28.3% (open-source SOTA) and DeepSWE 66.9% are strong; as a free tier it also carries quota and rate limits that bound effective throughput.
- **Cost efficiency: 100/100.** The free tier reduces per-token cost to zero (rate-limited); even the metered API at $1.40/$4.40 is capped by the codable budget-tier rivals to contend with.
- **Overall Score: 76/100.** Mean of the five quality dims (76+81+82+68+73)/5 = 76.0 → 76. Same top-tier GLM-5.3 cortex at zero marginal token cost — the ideal entry point for testing frontier-class open-weights coding, with text-only and quota caveats.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (z.ai, developersdigest.tech, benchgen.com, tokencost.app, ai-tldr.dev, cheapestinference.com, ofox.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.