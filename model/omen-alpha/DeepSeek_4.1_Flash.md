# Omen Alpha — findings by DeepSeek 4.1 Flash

- Source: unannounced vendor model shipped by OpenCode Go (`omen-alpha`, data path `zhipu/omen-alpha`) and resold by the TokenRa gateway / listed on Pi
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-27)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Three independent media outlets (explainx.ai, Startup Fortune, kie.ai) plus the aggregator AI Coding Daily now agree on the shape of this model: an OpenCode Go-exclusive stealth coding model shipped **2026-09-04**, a **500K-token context with 128K max output**, text+image input with reasoning and tool calling, reference pricing **$0.20 in / $0.66 out per 1M**, and **no confirmed vendor**. The prior file's $0.13/$0.50 rate is superseded by the $0.20/$0.66 figure that OpenCode Go, Pi and all three media sources now quote.
> **Conflicts surfaced:** (1) **Identity** — OpenCode's own data path reads `zhipu/omen-alpha` (→ Zhipu / Z.ai, the lab behind Ox Alpha → GLM-5.3-Flash), while explainx.ai/OrcaRouter float Xiaomi **MiMo-V3-Flash** and the fan site omenalpha.io calls it "**Ox Alpha 2.0**"; all unconfirmed. (2) **Context** — documented 500K/128K vs the prior file's unaudited community "969K–1M" probe. (3) **Retention** — OpenCode advertises **zero data retention, not used for training**, contradicting the prior file's "prompts retained". (4) **No benchmark exists** — benchlm.ai returns 404, llm-stats has no row, and AI Coding Daily states the model is "not yet scored"; every speed/quality figure is crowd-sourced.
> Sources: https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026 · https://startupfortune.com/opencodes-mystery-omen-alpha-model-has-developers-guessing-who-built-it/ · https://kie.ai/blog/what-is-glm-omen-alpha · https://aicodingdaily.com/model/omen-alpha · https://llm-stats.com/models/omen-alpha

## Model card

- **Name:** Omen Alpha (aggregator/fan aliases: "Omen Alpha 2.0", "GLM Omen-Alpha", "Ox Alpha 2.0")
- **Short description:** An unannounced, API-only stealth coding/reasoning model introduced by OpenCode on 2026-09-04 and exclusive to the $10/mo OpenCode Go plan ($100 of bundled usage). No model card, no named lab, no benchmark sheet; the developer is inferred only from OpenCode's own `zhipu/omen-alpha` data path and community fingerprinting.
- **Provider / access:** OpenCode Go endpoint (OpenAI-compatible), model id `omen-alpha`; also resold by the TokenRa gateway (`POST /zen/go/v1/chat/completions`) and listed on Pi. **Not** on OpenRouter. Paid-only from day one. Reasoner with an interleaved `reasoning_content` field.
- **Release / knowledge:** released 2026-09-04 (OpenCode Go); knowledge cutoff **not disclosed**.
- **IDs:** `omen-alpha` (OpenCode / TokenRa / Pi); data path `zhipu/omen-alpha`. No free ID on any route found.
- **Context window:** **500,000 tokens input / 128,000 max output** — now the most-documented figure (OpenCode Go docs, Pi, explainx.ai, Startup Fortune). An unaudited community probe of "969K or more" (prior TokenRa note) is **not** vendor-confirmed.
- **Modalities:** text and image input, text output; reasoning and tool calling supported (OpenCode Go docs / Pi / explainx.ai). Video is **not** independently confirmed this pass.
- **Pricing (as of 2026-10-11):** reference **$0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cached** (OpenCode Go, Pi, explainx.ai, Startup Fortune); TokenRa quotes a lower promo. OpenCode states **zero data retention, not used for training**.
- **Architecture:** undisclosed; no open weights. Fingerprint chatter points to a GLM-5.3 lineage (320B total / 18B active MoE, per the Ox Alpha reveal) but nothing is confirmed.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, Terminal-Bench, Tau3 / Tau2-Bench, GDPval-AA, OSWorld: **no verified public score found** — no harness has published tool-calling or agentic results for this model.
- OpenCode usage data (proxy, not a benchmark): community reports cite **~189 tokens/second** and heavy agent traffic, but there is still no formal leaderboard entry (explainx.ai).

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found**.
- The only public reasoning evidence is architectural: OpenCode Go documents reasoning support, and third-party fingerprinting matched the model most closely to **GLM**, with Kimi one place behind, on **infrastructure identity only** — explicitly not a capability score (kie.ai).

Coding:

- AI Coding Daily: explicitly **"not yet scored on the LLM Coding Leaderboard"** (https://aicodingdaily.com/model/omen-alpha).
- SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE, SWE-Atlas, Terminal-Bench: **no verified public score found**.
- Prior pass carried an OpenCode leaderboard snapshot (2026-09-04, "Omen Alpha (High)": coding 23.14/40, rank #15, code-quality 9.94/20, $0.03/prompt, 01:51/prompt) which **could not be re-located independently this pass** and is retained as unverified.

Long context:

- No MRCR/RULER/GraphWalks value exists; the documented window is 500K with a 128K max output, and the only larger figure is the unaudited "969K or more" community probe (no verified public score found).

Multimodal:

- Text + image input is documented (OpenCode Go / Pi / explainx.ai); **no vision benchmark exists** and video is unconfirmed this pass.

### Normalized scores (1–100)

- **Tool use: 62/100.** Agent-shaped and reportedly fast (~189 tok/s), but there is still **no** function-calling, MCP or τ-bench evidence, so this remains a conservative floor. https://aicodingdaily.com/model/omen-alpha (not yet scored) — no verified public score found.
- **Reasoning: 60/100.** No reasoning benchmark is published; the only facts are documented reasoning support and an identity match to GLM (https://kie.ai/blog/what-is-glm-omen-alpha) — a low-confidence proxy, deliberately not guessed upward.
- **Context window: 88/100.** The now-consistent 500K input / 128K output documentation lands in the 85–94 band (https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026); it stays below the official 1M/2M tiers because the far end is only an unaudited community probe.
- **Multimodal: 60/100.** Text + image input is documented, but the modality set is unconfirmed and no vision benchmark exists (https://startupfortune.com/opencodes-mystery-omen-alpha-model-has-developers-guessing-who-built-it/) — mid-range, not high.
- **Coding: 74/100.** No independently verifiable coding-harness score was found this pass (https://aicodingdaily.com/model/omen-alpha — not yet scored); retained at the prior multi-language repo-task level pending a public harness.
- **Cost efficiency: 90/100.** $0.20 / $0.66 per 1M with $0.04 cached reads (https://www.explainx.ai/blog/opencode-omen-alpha-mystery-model-cheap-2026) is cheap for long agentic runs; the undisclosed upstream data terms cost it the last points.
- **Overall Score: 69/100.** (62 + 60 + 88 + 60 + 74) / 5 = 68.8 → 69. Best fit: cheap long-context repository coding and bulk agent runs, with the explicit caveat that this is still the least verified model in the comparison set.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (explainx.ai, Startup Fortune, kie.ai, AI Coding Daily, LLM Stats, plus Bing/DuckDuckGo sweeps that surfaced omenalpha.io and developermemos.com). Independent media rows were promoted and unverified prior rows flagged rather than carried forward; no benchmark number was invented. Scores are normalized 1–100 interpretations, not official vendor scores, and remain the lowest-confidence set in this report.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
