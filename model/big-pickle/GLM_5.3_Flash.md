# Big Pickle — findings by GLM 5.3 Flash

- Source: OpenCode Zen (`opencode/big-pickle`, anonymous stealth alias)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (Free) — anonymous stealth alias on OpenCode Zen; no vendor has claimed it
- **Short description:** OpenCode Zen's free experimental model, described in its config as a "Reasoning model for deliberate analysis, multi-step problem solving, and tool use", positioned for coding agents. Community consensus ties the alias to Zhipu AI's GLM-4.6 (OpenCode issue #4276, "Is zen/big-pickle glm 4.6?"), while a self-reported SWE-Atlas write-up notes leaked provider errors and API response signatures pointing toward DeepSeek infrastructure instead. Treat it as an alias, not a model: whatever answers to `big-pickle` can change without notice.
- **Provider / access:** OpenCode Zen — Chat Completions at `https://opencode.ai/zen/v1/chat/completions`, ID `opencode/big-pickle`; integrates via the `@ai-sdk/openai-compatible` SDK; catalogued by models.dev as `providers/opencode/models/big-pickle.toml`.
- **Release / knowledge:** models.dev lists release date 2025-10-17 and knowledge cutoff 2025-01; the alias was still served free on Zen as of the prior research (2026-09-17) with no announced end date for the free period. Re-verified 2026-10-16: `big-pickle` remains on the live Zen roster (`/zen/v1/models`, fetched 2026-10-16) — the free route persists.
- **IDs:** `opencode/big-pickle` (models.dev / Zen). **This IS the Free ID** — served at $0 during the stealth period; no separate paid `big-pickle` route exists.
- **Context window:** 200,000 tokens total; 160,000 input / 32,000 output — verified against the models.dev `big-pickle.toml` config, corroborated by a third-party directory (ayautomate: 200K, tier "S+", last verified June 2026).
- **Modalities:** text in, text out (`modalities: text/text`); reasoning yes (`reasoning = true`, interleaved via a `reasoning_content` field); tool calls yes (`tool_call = true`); structured output yes; attachments no.
- **Pricing (as of 2026-10-11):** Free — $0.00 input / $0.00 output / $0.00 cached (models.dev `cost` block: all zeros). Caveats: free-period prompts may be used to improve the model; commercial terms unclear; no announced end date or post-promo price.
- **Architecture:** closed weights (`open_weights = false`), parameters undisclosed. Believed (unconfirmed) GLM-4.6; competing unconfirmed signal: DeepSeek infrastructure. Both identity claims are community inference, not vendor-confirmed.

### Raw benchmarks found

> Second-pass verification (2026-10-11): BenchLM has no page for this anonymous stealth alias (404 on the canonical slug) — no new aggregator evidence has surfaced since the 2026-09-17/10-09 passes; the glonce.com SWE-Atlas run remains the sole direct measurement. GitHub issue #50202 (degraded/corrupted output) remains an operational caveat. Scores are carried, not moved.

Agent / tool use:

- SWE-Atlas Codebase QnA (mini-swe-agent scaffold): **50.8%** (63/124 tasks; self-reported run of 2026-08-11: Harbor 0.18.0 + Modal sandboxes, mini-swe-agent 2.4.6, Scale's shipped config and 250-step limit, judge claude-opus-4-5-20251101; the alias consumed 674M input + 4.3M output tokens at $0 model cost) — **best result in the Mini-SWE-Agent scaffold class** on the official leaderboard snapshot as of 2026-07-28. Caveats: single trial per task (≈±4.5 pts), sandboxes cut to 4 CPU/8 GB, and a stricter lower bound of **49.2%** (61/124) if two judge-unparseable rubric tasks count as failures. (glonce.com, 2026-08-16)
- Terminal-Bench / Tau3 / Tau2 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found under the big-pickle alias
- Identity proxy (GLM-4.6 public suite — valid only under the GLM-4.6 consensus): SWE-bench Verified ~68.0%, Terminal-Bench 2.1 49.4%, Tau3 10.5%, GDPval 934 Elo, τ² 76.9%

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / BenchLM overall (alias): no verified public score found — trackers do not carry anonymous stealth aliases (BenchLM 404 confirmed 2026-10-11)
- Identity proxy (GLM-4.6): GPQA Diamond 63.2%, HLE 5.5%, LCR 28.3%, BenchLM 53.94 #107/411

Coding:

- SWE-Atlas Codebase QnA: **50.8%** — the one direct datapoint (details above)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE (alias): no verified public score found
- Third-party directory claim: "SWE-bench ~72%" (ayautomate) — unverified, likely inherited from the presumed GLM-4.6 identity; recorded as provisional only
- Identity proxy (GLM-4.6): SWE-bench Verified 68.0%, LiveCodeBench 81.0%, SciCode 38.4%

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported — 200K window, no public retrieval tests under the alias

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: no aggregator page exists (BenchLM 404) and no new alias-specific measurements surfaced; the single SWE-Atlas run stands.

- **Tool use: 58/100.** The one direct datapoint is genuinely strong — SWE-Atlas Codebase QnA 50.8% tops the Mini-SWE-Agent scaffold class — and the alias natively supports tool calls and structured output. Capped by weak identity-proxy orchestration (GLM-4.6 TB 2.1 49.4%, Tau3 10.5%) and zero alias-verified tool-suite scores.
- **Reasoning: 58/100.** Proxy GPQA Diamond 63.2% is mid-pack; HLE 5.5% and LCR 28.3% are weak; no alias-verified reasoning numbers exist. The "reasoning model" positioning rests on the config description, not published results.
- **Context window: 70/100.** 200,000 tokens verified (160K in / 32K out) — a mid tier; no long-context retrieval evidence under the alias.
- **Multimodal: 15/100.** Text-only input and output (models.dev modalities); no attachments — methodology floor for text-only.
- **Coding: 70/100.** SWE-Atlas QnA 50.8% (class-leading) plus proxy LiveCodeBench 81.0% and SWE-bench Verified 68.0% imply a solid mid-pack coder for its generation; capped below the frontier and by zero alias-verified classic-suite runs.
- **Cost efficiency: 100/100.** $0 in / $0 out / $0 cache during the stealth period, no card required — the defining trait of the alias. Risks: data may be used for training, commercial terms unclear, and the $0 (or the model itself) can end without notice.
- **Overall Score: 54.2/100.** Mean: (58 + 58 + 70 + 15 + 70) / 5 = 271/5 = 54.2 — unchanged. Best fit: zero-cost daily driver for coding agents and multi-step tool work; verify outputs and keep a paid, identity-confirmed fallback for production, since the alias can change or disappear without notice.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: BenchLM 404 on the canonical slug — no aggregator page exists for the anonymous stealth alias; the prior 2026-09-17/10-09 passes on models.dev/glonce.com/ayautomate remain the evidence base; GitHub issue #50202 degraded-output caveat stands); 2026-10-16 re-check: BenchLM still 404s the alias, the live Zen roster still lists it free, search engines rate-limited the identity-reveal check — no new evidence, scores unchanged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
