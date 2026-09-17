# Big Pickle — findings by GLM 5.3 Flash

- Source: OpenCode Zen (`opencode/big-pickle`, anonymous stealth alias)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (Free) — anonymous stealth alias on OpenCode Zen; no vendor has claimed it
- **Short description:** OpenCode Zen's free experimental model, described in its config as a "Reasoning model for deliberate analysis, multi-step problem solving, and tool use", positioned for coding agents. Community consensus ties the alias to Zhipu AI's GLM-4.6 (OpenCode issue #4276, "Is zen/big-pickle glm 4.6?"), while a self-reported SWE-Atlas write-up notes leaked provider errors and API response signatures pointing toward DeepSeek infrastructure instead. Treat it as an alias, not a model: whatever answers to `big-pickle` can change without notice.
- **Provider / access:** OpenCode Zen — Chat Completions at `https://opencode.ai/zen/v1/chat/completions`, ID `opencode/big-pickle`; integrates via the `@ai-sdk/openai-compatible` SDK; catalogued by models.dev as `providers/opencode/models/big-pickle.toml`.
- **Release / knowledge:** models.dev lists release date 2025-10-17 and knowledge cutoff 2025-01; the alias was still served free on Zen as of this research (2026-09-17) with no announced end date for the free period.
- **IDs:** `opencode/big-pickle` (models.dev / Zen). **This IS the Free ID** — served at $0 during the stealth period; no separate paid `big-pickle` route exists.
- **Context window:** 200,000 tokens total; 160,000 input / 32,000 output — verified against the models.dev `big-pickle.toml` config ([limit] block) fetched 2026-09-17, corroborated by a third-party directory (ayautomate: 200K, tier "S+", last verified June 2026).
- **Modalities:** text in, text out (`modalities: text/text`); reasoning yes (`reasoning = true`, interleaved via a `reasoning_content` field); tool calls yes (`tool_call = true`); structured output yes; attachments no; temperature adjustable. No image/audio/video/PDF input.
- **Pricing (as of 2026-09-17):** Free — $0.00 input / $0.00 output / $0.00 cached (models.dev `cost` block: all zeros; no credit card required). Caveats: per OpenCode Zen's stated terms, free-period prompts may be used to improve the model; commercial terms not clearly documented ("verify before shipping" per ayautomate); no announced end date or post-promo price.
- **Architecture:** closed weights (`open_weights = false`), parameters undisclosed. Believed (unconfirmed) GLM-4.6: 357B-param MoE with 200K context per ApX; competing unconfirmed signal: DeepSeek infrastructure (leaked error signatures reported by Glonce, 2026-08-16). Both identity claims are community inference, not vendor-confirmed.

### Raw benchmarks found

> Only one direct alias-specific benchmark exists (self-reported, fully logged). Suite numbers flagged as "identity proxy" come from the presumed GLM-4.6 lineage and are valid only if that consensus is correct — they are never presented as Big Pickle's own scores.

Agent / tool use:

- SWE-Atlas Codebase QnA (mini-swe-agent scaffold): **50.8%** (63/124 tasks; self-reported run of 2026-08-11: Harbor 0.18.0 + Modal sandboxes, mini-swe-agent 2.4.6, Scale's shipped config and 250-step limit, judge claude-opus-4-5-20251101 via Anthropic's OpenAI-compatible endpoint; the alias consumed 674M input + 4.3M output tokens at $0 model cost, ~$70 Modal + ~$25 judging infrastructure) — **best result in the Mini-SWE-Agent scaffold class** on the official leaderboard snapshot as of 2026-07-28, and above the GPT models run on the Codex scaffold; only two Claude models on their native Claude Code scaffold score higher overall. Caveats from the write-up itself: single trial per task (≈±4.5 pts), sandboxes cut to 4 CPU/8 GB below the declared 16 CPU/16 GB spec (a trajectory scan found no timeouts or memory kills), and a stricter lower bound of **49.2%** (61/124) if two judge-unparseable rubric tasks count as failures. Not run or verified by Scale AI; per-task verifier logs are public for audit. (glonce.com, 2026-08-16)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas (other scaffolds): no verified public score found under the big-pickle alias
- Identity proxy (GLM-4.6 public suite — valid only under the GLM-4.6 consensus): SWE-bench Verified ~68.0%, Terminal-Bench 2.1 49.4%, Tau3 10.5%, GDPval 934 Elo, GPQA Diamond 63.2%, HLE 5.5%, LCR 28.3%, BenchLM overall 53.94 #107/411, τ² 76.9% (primary URLs catalogued in `../../model-comparison.md`: benchmarklist.com `z-ai-glm-4.6`, benchlm.ai `glm-4-6`, apxml.com `glm-46`, Together AI GLM-4.6 page)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Intelligence Index / BenchLM overall (alias): no verified public score found — trackers such as BenchLM and Artificial Analysis do not carry anonymous stealth aliases
- Identity proxy (GLM-4.6): GPQA Diamond 63.2%, HLE 5.5%, LCR 28.3%, BenchLM 53.94 #107/411 (sources as above)

Coding:

- SWE-Atlas Codebase QnA: **50.8%** — the one direct datapoint (details above)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE (alias): no verified public score found
- Third-party directory claim: "SWE-bench ~72%" (ayautomate free-model directory, last verified June 2026, tier "S+") — unverified, likely inherited from the presumed GLM-4.6 identity; recorded as provisional only, not evidence
- Identity proxy (GLM-4.6): SWE-bench Verified 68.0%, LiveCodeBench 81.0%, SciCode 38.4%, Vibe Code Bench 3.1% (sources as above)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported — 200K window, and no public retrieval tests exist under the alias

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 58/100.** The one direct datapoint is genuinely strong — SWE-Atlas Codebase QnA 50.8% tops the Mini-SWE-Agent scaffold class — and the alias natively supports tool calls and structured output. Capped by weak identity-proxy orchestration (GLM-4.6 TB 2.1 49.4%, Tau3 10.5%) and zero alias-verified tool-suite scores.
- **Reasoning: 58/100.** Proxy GPQA Diamond 63.2% is mid-pack; HLE 5.5% and LCR 28.3% are weak; no alias-verified reasoning numbers exist. The "reasoning model" positioning rests on the config description, not published results.
- **Context window: 70/100.** 200,000 tokens verified (160K in / 32K out) — a mid tier; no long-context retrieval evidence under the alias.
- **Multimodal: 15/100.** Text-only input and output (models.dev modalities); no attachments — methodology floor for text-only.
- **Coding: 70/100.** SWE-Atlas QnA 50.8% (class-leading) plus proxy LiveCodeBench 81.0% and SWE-bench Verified 68.0% imply a solid mid-pack coder for its generation; capped below the frontier (Claude Fable 5 SWE-V 95.0, Opus 4.8 88.1 per the prompt20 code leaderboard) and by zero alias-verified classic-suite runs.
- **Cost efficiency: 100/100.** $0 in / $0 out / $0 cache during the stealth period, no card required — the defining trait of the alias. Risks to the score: data may be used for training, commercial terms unclear, and the $0 (or the model itself) can end without notice because it is an alias.
- **Overall Score: 62/100.** Mean: (58 + 58 + 70 + 15 + 70 + 100) / 6 = 371/6 = 61.8 → **62**. Best fit: zero-cost daily driver for coding agents and multi-step tool work; verify outputs and keep a paid, identity-confirmed fallback for production, since the alias can change or disappear without notice.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-17
- Method: fresh public internet research from zero (models.dev `big-pickle.toml` config, glonce.com SWE-Atlas write-up summary, Grokipedia, ayautomate free-model directory, prompt20 code leaderboard for frontier context; identity-proxy suite numbers cited to the sources catalogued in `../../model-comparison.md`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.