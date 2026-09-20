# GPT-5.5 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (deprecated flagship — superseded by GPT-5.6 Sol; no Free-tier wording)
- **Short description:** OpenAI's fully retrained agentic model released April 23, 2026, optimized for agentic coding, computer use, knowledge work and early scientific research. Now deprecated: Artificial Analysis flags it historical and points users to GPT-5.6 Sol (xhigh), and folder meta's "awaiting a verified public model card" is outdated — a substantial public record exists.
- **Provider / access:** OpenAI API (`gpt-5.5`); also OpenRouter, Vercel AI Gateway, AWS Bedrock ($5.50/$33), and 16+ routers/gateways. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released April 23, 2026; deprecated after GPT-5.6 Sol's launch (AA continues benchmarking only the 10K-input workload). Knowledge cutoff December 2025.
- **IDs:** `gpt-5.5` (plus `gpt-5.5-pro` listed as a sibling in comparison indexes).
- **Context window:** 1,050,000 tokens (1.05M) / 128,000 max output (LLMReference); Artificial Analysis measures 922K on the xhigh endpoint. Long-context surcharge above 272K input tokens.
- **Modalities:** Text + image in; text out. Reasoning: yes — effort levels none/low/medium/high/xhigh.
- **Pricing (as of 2026-09-19):** $5.00 in / $30.00 out per 1M; cache reads $0.50; Batch $2.50/$15.00. AA cost per Intelligence Index task $2.63; blended rate $4.35/1M.
- **Architecture:** Proprietary, closed weights; parameters undisclosed. Decoder-only.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (Codex CLI scaffold, vendor/aggregator-logged)
- GDPval: **84.9%** (LLMReference card); GDPval-AA v2: **Elo 1494** (Artificial Analysis, cited in Kimi K3 coverage — below Opus 4.8's 1600 and GLM-5.2's 1514)
- PostTrainBench: **39.3**, #2 overall (behind Opus 4.7's 42.4; above MiniMax M3's 37.1 — MiniMax's own M3 page)
- Tau / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (LLMReference card)
- HLE / MRCR / LCR: no verified public score found
- Artificial Analysis Intelligence Index: **38** (xhigh), #42/200 (AA; median 24) — vs GPT-5.6 Sol's ~54-60 and GPT-6 Astra's 53
- AA-Omniscience / AA-Briefcase: no itemized public rows surfaced for 5.5 this pass

Coding:

- SWE-bench Verified: **82.6%** (Vals.ai independent harness — notable third-party corroboration)
- SWE-bench Pro: **58.6%** (LLMReference card)
- Terminal-Bench 2.0 (coding harness): **82.7%** (Codex CLI scaffold)
- DeepSWE / SciCode / LiveCodeBench / Vibe: no verified public score found

Long context:

- 1.05M window with a long-context surcharge above 272K input; no MRCR/RULER retrieval numbers verified

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.0 82.7% (Codex scaffold) and PostTrainBench #2 are solid, but GDPval-AA v2 at 1494 Elo trails Opus 4.8/GLM-5.2 and Tau/MCP rows are absent — mid-frontier.
- **Reasoning: 72/100.** GPQA 93.6% clears the 90% frontier ref, yet AA Intelligence Index 38 (#42/200) is far below the K3/Fable band (57–65.7) and HLE/MRCR rows are unverified.
- **Context window: 92/100.** 1.05M window (95–100 tier) with 128K output; docked for the >272K surcharge and no retrieval verification.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band.
- **Coding: 82/100.** SWE-bench Verified 82.6% on Vals.ai's independent harness is the strongest coding evidence, but SWE-Pro 58.6% and missing DeepSWE/SciCode rows hold it below the Kimi-K3/Fable band.
- **Cost efficiency: 45/100.** $5/$30 per 1M interpolates between the $3/$15→60 and $10/$50→30 anchors; $2.63/task (AA) and Batch at 50% soften it slightly. No free tier.
- **Overall Score: 77.4/100.** (76+72+92+65+82)/5 = 77.4. Best fit: a deprecated-but-verified April 2026 flagship — usable for independent-harness-corroborated coding at premium prices, but GPT-5.6 Sol or GPT-6 Astra supersede it for new work.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Artificial Analysis model page, LLMReference dossier, Kimi K3 AA cross-citations, MiniMax M3 cross-table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

