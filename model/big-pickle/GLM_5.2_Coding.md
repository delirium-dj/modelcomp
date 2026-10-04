# Big Pickle — findings by GLM 5.2 Coding

- Source: OpenCode Zen (`big-pickle`) — stealth free tier, community-consensus GLM-4.6
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model on OpenCode Zen, widely identified by the community as Z.AI's GLM-4.6 (357B MoE, MIT-licensed open weights). Marketed during the free period as "roughly Sonnet-class coding at zero token cost". Zen-served free tier; the paid equivalent runs ~$0.60/$2.20 per 1M via API providers.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` — `opencode/big-pickle` (OpenAI-compatible API). Underlying open weights on Hugging Face (`zai-org/GLM-4.6`) and via DeepInfra/Fireworks/Z.ai API.
- **Release / knowledge:** Underlying GLM-4.6 released 2025-09-30 (llm-stats.com); knowledge cutoff ~July 2025 per Z.AI docs; Big Pickle alias active during Zen's free promotional period (Sept 2026).
- **IDs:** `opencode/big-pickle`; underlying `zai-org/glm-4.6`.
- **Context window:** 200K total (160K in / 32K out) on Zen free tier; underlying GLM-4.6 supports 202.8K/202.8K via DeepInfra (llm-stats provider table).
- **Modalities:** text in/out only on Zen (per project meta); underlying GLM-4.6 accepts text+image per llm-stats FAQ, but Zen serving is text-only.
- **Pricing (as of 2026-09-17):** Free on OpenCode Zen (input/output/cached all $0 during free period). Paid equivalent: GLM-4.6 from $0.50/$2.00 per 1M (DeepInfra), $0.60/$2.20 typical.
- **Architecture:** Z.AI GLM MoE transformer, 357B total parameters (llm-stats model-size entry), open weights MIT license.

### Raw benchmarks found

Agent / tool use:

- TAU-bench (retail, tool use): **47.9%** for GLM-4.6 (Z.AI GLM-4.6 scorecard, Sept 2025)
- BrowseComp: no verified public score found
- Terminal-Bench 2.0: no verified public score found
- Toolathon: no verified public score found

Reasoning / knowledge:
- AIME 2025: **91.0%** for GLM-4.6 (Z.AI scorecard)
- GPQA Diamond: **81.0%** for GLM-4.6 (Z.AI scorecard)
- HLE (text-only): **6318 Elo** for GLM-4.6 — weak point vs frontier (Z.AI scorecard)
- MMLU-Pro: **85.3%** for GLM-4.6 (Z.AI scorecard)
- LiveCodeBench v6: **82.8%** for GLM-4.6 (Z.AI scorecard)
- AA Intelligence Index: no verified public score found (JS page; not extractable)

Coding:

- SWE-bench Verified (Claude Code/agent harness): **68.0%** for GLM-4.6 (Z.AI scorecard)
- SWE-bench Verified (divider prompts): 67.5% (Z.AI scorecard)
- Terminal-Bench Hard: 37.5% for GLM-4.6 (Z.AI scorecard)
- LiveCodeBench v6 (HLE-adjacent coding): 82.8% (Z.AI scorecard, reasoning entry above)
- DeepSWE: no verified public score found
- PR-Bench (human eval): 74.7 for GLM-4.6 (Z.AI scorecard)

Long context:

- 200K Zen serving verified via project meta; underlying 202.8K capacity (llm-stats). MRCR/RULER values: no verified public score found for GLM-4.6

Multimodal (input-side):

- Zen tier text-only per project meta; underlying GLM-4.6 image input documented (llm-stats FAQ) but no per-modality benchmark values (CharXiv/MMMU) — no verified public score found

### Normalized scores (1-100)

- **Tool use: 72/100.** TAU-bench 47.9% is mid-tier for late-2025 models and Zen free tier adds rate limits; capped by no BrowseComp/Terminal-Bench evidence and by promotional-tier instability.
- **Reasoning: 76/100.** AIME 91.0%, GPQA Diamond 81.0%, MMLU-Pro 85.3% — solid frontier-adjacent reasoning; capped by weak HLE 6318 Elo (far behind GPT-5-class HLE numbers) and no AA Index value.
- **Context window: 78/100.** 200K total (160K in / 32K out) on Zen — mid-tier; less than half of the 1M class; underlying model's 202.8K symmetric window doesn't apply through Zen serving.
- **Multimodal: 40/100.** Zen tier text-only; underlying model's image input unavailable here; text-only input/output.
- **Coding: 80/100.** SWE-bench Verified 68.0%, Terminal-Bench Hard 37.5%, PR-Bench 74.7, LiveCodeBench v6 82.8% — genuinely "Sonnet-class" for a free tier; capped by 2025-era scores vs 2026 frontier coding models.
- **Cost efficiency: 100/100.** Free during Zen's promotional period — zero token cost; even the paid equivalent ($0.50–0.60/$2.00–2.20) is cheap for its class.
- **Overall Score: 69/100.** Mean of five quality dims (72+76+78+40+80)/5 = 69.2 → 69. The separate 100/100 cost-efficiency score captures the zero-token-price value: best-fit free everyday coding agent where Sonnet-class quality at $0 is the priority; not for 1M-context or multimodal work.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-09-17
- Method: public internet research (OpenCode Zen docs/pricing for big-pickle; llm-stats.com GLM-4.6 provider/spec tables; Z.AI GLM-4.6 scorecard figures via launch materials, Sept 2025); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.