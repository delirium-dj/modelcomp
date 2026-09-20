# Ox Alpha — findings by Big Pickle

- Source: Stealth / anonymous provider (`stealth/ox-alpha`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** An anonymous "stealth" reasoning model aimed at coding and sustained agentic work, dropped on OpenRouter on August 20, 2026 at $0/$0 with a full 1M-token window and native video input; tokenizer and video-encoder forensics match Z.ai's GLM-5.x line (~90-99% confidence) though no lab has claimed it.
- **Provider / access:** OpenRouter under `stealth/ox-alpha` (also `opencode/x-preview-f-free` on OpenCode Zen, plus Cline, Nous Research portal+); OpenAI-compatible Chat Completions through AI/ML API and others. Anonymous third-party provider during a ~1-week free preview (Aug 20-27, 2026).
- **Release / knowledge:** Released 2026-08-20 (anonymous preview window), appearing six days after GLM-5.3 shipped; no formal lab attribution or knowledge-cutoff disclosure.
- **IDs:** `stealth/ox-alpha` (proprietary; no open weights)
- **Context window:** 1,048,576 tokens (1M) input; max output 131,072 tokens.
- **Modalities:** text, image, native video input; text output (audio requests rejected).
- **Pricing (as of 2026-09-20):** $0 input / $0 output per 1M tokens during the free preview; no post-preview pricing published. Throughput ~29-39 tokens/s, ~3.15-3.98s P50 latency.
- **Architecture:** Proprietary, undisclosed; mandatory reasoning with configurable effort (`low`/`high`/`max`, default `max`); JSON schema-enforced structured output not supported.

### Raw benchmarks found

Agent / tool use:

- DeepSWE full 113-task runs: ~**58.4%** (66/113, aimlapi.com community run with `pier` 0.3.1) to ~**63%** (two full runs per Gate News) — "roughly level with GPT-5.6-sol mid"; the viral 80% was a 10-task sample by Ben Davis (vs Fable 5 65%, GLM-5.3 62%, Grok 4.6 62%, GPT-5.6-sol 52%).
- Tool calling **supported** (OpenAI schema) with documented multi-step agent work and low retry rates; structured JSON output present but without schema enforcement.

Reasoning / knowledge:

- Kingbench: **87.5%** (70/80), 2nd place behind GLM-5.3 (91.25%) and ahead of e.g. Fable 5 (82.5%) and Opus 4.8 (80%), per Wccftech community leaderboard (Aug 22, 2026).
- GPQA Diamond / HLE / MMLU-Pro: **no verified public score found**.

Coding:

- DeepSWE: full-set runs ~58.4-63%, level with GPT-5.6-sol; no entry on Artificial Analysis or LMSys Arena as of Aug 22, 2026.
- LiveCodeBench release_v6: **28.0%** pass@1 (49/175, greedy, no tools/agent scaffold).
- SlopCodeBench: **17.9%** strict checkpoints (7/39) on cumulative repo-maintenance trajectories.

Long context:

- Full 1M window with 131K output; MRCR-style retrieval: **no verified public score found**. Long-horizon SWE advantage reported qualitatively.

### Normalized scores (1–100)

- **Tool use: 68/100.** Native function calling with reasoning-control tiers is real and was exercised at scale by coding agents in the preview week, but JSON outputs aren't schema-enforced and the full DeepSWE run (~58-63%) reveals the hype 80% sample overstated agentic reliability.
- **Reasoning: 66/100.** Mandatory reasoning with low/high/max effort and a strong 87.5% Kingbench showing, but that result is a community-run board, and no GPQA/HLE-class score has been published to date.
- **Context window: 82/100.** The 1M-token window with 131K output is genuinely top-tier; unverified retrieval quality and slow ~30 tok/s throughput on very long prompts keep it below the best.
- **Multimodal: 64/100.** Text/image/native video input (video encoder matches GLM 5V Turbo) is a strong multimodal read; text-only output and no audio input cap it.
- **Coding: 71/100.** A purpose-built coding model: DeepSWE ~58-63% (level with GPT-5.6-sol mid) and strong short code tasks, but LiveCodeBench 28% pass@1 and SlopCodeBench 17.9% are modest.
- **Cost efficiency: 75/100.** Free during preview with massive claimed capacity is superb, but the window is time-limited with no announced post-preview price, and slow throughput adds real time-cost.
- **Overall Score: 70/100.** Mean of the five quality dims (68+66+82+64+71)/5 = 70.2. An impressive, unclaimed coding/agentic model whose measured results sit a step below the initial viral 80% claim.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (OpenRouter/OpenCode listings, aimlapi.com, gate.com news, mindstudio.ai, local-ai-zone.github.io, syntaxandsignal.tech, capitalandcompute.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.