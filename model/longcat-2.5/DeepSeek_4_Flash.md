# LongCat 2.5 Preview — findings by DeepSeek 4 Flash

- Source: Meituan / LongCat-2.5-Preview
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's ~1.6T-parameter MoE preview pitched for autonomous agents, long-horizon execution and coding, with multimodal text+image input and a 1M-token context.
- **Provider / access:** Meituan / OpenCode (`meituan/longcat-2-5-preview`), Vercel AI Gateway and third-party routers; no Zen Free ID.
- **Release / knowledge:** preview listed ~September 2026; cutoff not disclosed.
- **IDs:** `meituan/longcat-2-5-preview`
- **Context window:** 1,048,576 (1M) tokens — gateway/router listings.
- **Modalities:** text + image in; text out; reasoning and tool use.
- **Pricing (as of 2026-10-02):** ~$0.30 per 1M input (cloudprice.net); reseller flat ~$0.20/1M. No first-party price published.
- **Architecture:** MoE, ~1.6T total / ~48B active (preview; license not confirmed).

### Raw benchmarks found

Coding (LLM Coding Leaderboard, aicodingdaily.com):

- Overall: **46.65/80** points, rank **#36**, harness OpenCode, avg 16:50 per prompt
- Per-project points: 16.98, 16.67, 2.4, 3, 2.7, 4, 0.9 (seven projects)

Agent / tool use:

- Ranked #36 on the OpenCode-harness coding leaderboard; no Terminal-Bench/Tau2 published
- Meituan has not released an independently verifiable 2.5 benchmark table (explainx.ai); reseller SWE-bench Lite claims are uncorroborated

Reasoning / knowledge / multimodal / long context:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 58/100.** Completed a multi-project OpenCode-harness run at rank #36; no Terminal-Bench/Tau2.
- **Reasoning: 55/100.** No GPQA/HLE; inferred from mid-table agentic coding.
- **Context window: 88/100.** 1M-token window claimed across gateways; no retrieval benchmark.
- **Multimodal: 60/100.** Text+image input listed; no vision benchmark.
- **Coding: 62/100.** 46.65/80 (≈58%) on the LLM Coding Leaderboard (OpenCode harness).
- **Cost efficiency: 82/100.** ~$0.30/1M input (reseller ~$0.20) is cheap for the class; no first-party rate.
- **Overall Score: 65/100.** Mean of (58 + 55 + 88 + 60 + 62) / 5 = 64.6 → 65. Best-fit: cheap 1M-context agentic/coding runs on OpenCode; single independent coding source and vendor table withheld.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (aicodingdaily.com leaderboard, cloudprice.net, Vercel AI Gateway, blackbox.ai, explainx.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
