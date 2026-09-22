# Kimi K2.8 Preview — findings by Big Pickle

- Source: Moonshot AI (`kimi-for-coding`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's mainstream coding checkpoint in the K2 series, positioned between flagship Kimi K3 and K2.7 Code; launched quietly inside Kimi Code on Sept 11, 2026 under the unchanged `kimi-for-coding` identifier, with a 1M context open to every membership tier and near-K3 capability claims.
- **Provider / access:** Moonshot AI — Kimi Code membership surface (secondarily Kimi Work); reuses the `kimi-for-coding` model ID; NOT on the open platform API model list (intelligentliving.co).
- **Release / knowledge:** 2026-09-11 (Kimi Code changelog, full rollout); knowledge cutoff not published.
- **IDs:** `kimi-for-coding` (Moonshot AI; proprietary, no open weights for K2.8 Preview)
- **Context window:** 1,048,576 tokens (1M), on all membership tiers (vs 262,144 for K2.7 Code).
- **Modalities:** text, image, video input; text output; thinking effort low/high/max (default max).
- **Pricing (as of 2026-09-20):** no public per-token price (membership-gated); independent tests show ~30% lower cost per task than K3 (~$10 vs ~$14); family context: K2.6 list $0.95/$4, K3 $3/$15 per 1M.
- **Architecture:** Undisclosed. Predecessor K2.6 was a 1T-parameter MoE with 32B active; online claims that K2.8 is 2.8T borrow K3's figure and are speculation.

### Raw benchmarks found

Reasoning / knowledge:

- GPQA Diamond for K2.8 Preview: **no verified public score found** (family context: K2.6 90.5%, flagship K3 93.5%; Moonshot positions K2.8 "comprehensive capability close to K3").
- BrowseComp: sibling K2.6 **83.2%**; K2.8-specific: no verified public score found.

Coding:

- Official benchmark table for K2.8 Preview: **no verified public score found** — Moonshot published no comparison table, unlike the K2.7 Code release (which cited Program-Bench +10.4%, MCP Mark Verified +11.4%, SWE Marathon +76.2%, reasoning-token usage −30% vs K2.6).
- Sibling K2.6 (verified, Moonshot model card): SWE-bench Verified **80.2%**, SWE-bench Pro **58.6%**, Terminal-Bench 2.0 **66.7%**, LiveCodeBench v6 **89.6%**, SciCode **52.2%**.
- Flagship K3 (positioning target): Terminal-Bench 2.1 **88.3%**, DeepSWE **67.5%**, GPQA Diamond **93.5%** (benchr.org, July 2026).

Agent / tool use:

- Independent developer comparison (kimi-for-coding, Sept 11, 2026, n=1): finished a complex task in ~80 min vs K3's ~120 min (~33% faster) at ~$10 vs ~$14; but one-pass completion and multi-turn self-repair lagged K3 (directional only).
- Official agentic evals (Terminal-Bench / MCP) for K2.8 Preview: **no verified public score found**.

Long context:

- GDM-MRCR / needle-in-haystack for K2.8 Preview: **no verified public score found**; window spec 1,048,576 tokens on all tiers.

Multimodal:

- Image and video input enabled (matching K3's 1M path); dedicated multimodal leaderboard scores: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 73/100.** Near-K3 agentic positioning and strong K2.7 MCP-Mark deltas, but no verified Terminal-Bench / MCP outcome for this checkpoint; the K2.6 line ran Terminal-Bench 2.0 ~66.7%.
- **Reasoning: 82/100.** Positioned close to K3 (GPQA ~93.5% class) and K2.6 verified 90.5% GPQA Diamond; the Preview label and absent benchmark table keep it below flagship.
- **Context window: 88/100.** Full 1M window democratized to all tiers is a step change over K2.7 Code's 256K, but no verified retrieval-depth score.
- **Multimodal: 68/100.** Image/video input added, but this is a text-first coding/agent line with no multimodal benchmark evidence.
- **Coding: 76/100.** Coding is the model's core: sibling K2.6 hit 80.2% SWE-bench Verified; K2.8 Preview improves thinking efficiency but early tests show weaker one-pass completion and self-repair vs K3.
- **Cost efficiency: 72/100.** No public per-token price; membership-gated. Developer data suggests ~30% cheaper than K3, but economics are opaque vs open-weight K2.x predecessors.
- **Overall Score: 77/100.** Mean of the five quality dims (73+82+88+68+76)/5 = 77.4 → 77. A fast, cheaper, near-flagship coding checkpoint with unverified benchmark claims — capable but still Preview, so numbers are directional.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (kimi.ai, huggingface.co, intelligentliving.co, benchr.org, blog.4sapi.com, vellum.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.