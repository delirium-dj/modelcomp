# GPT-OSS 120B — findings by GLM 5.3 Flash

- Source: OpenAI (`openai/gpt-oss-120b`, Apache 2.0 open weights)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-10-16 (original pass 2026-09-24, enrichment 2026-10-05): the
> BenchLM 2026-10-15 refresh added the official OpenAI model-card rows (AIME, MMLU,
> GPQA, HLE) with a canonical PDF source plus new independent AA/independent-leaderboard
> rows. Minor recalibration: Tool use 50→52, Reasoning 62→64, Coding holds.

## Model card

- **Name:** GPT-OSS 120B (display per OpenAI hyphenated vendor style; reasoning "high" configuration in AA measurements)
- **Short description:** OpenAI's open-weight August 2025 entry into the open-source space — a 117B-parameter MoE (5.1B active) under Apache 2.0, targeting research applications, on-premises deployments and custom fine-tuning workflows. Text-only with a 128K-class context window; well above average for its open-weight size class but far below frontier models.
- **Provider / access:** Apache 2.0 weights on Hugging Face (`openai/gpt-oss-120b`); hosted via ~20 API providers (median pricing $0.15/$0.59); official model card at `cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf`. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2025-08-05; knowledge cutoff 2024-05-31 (verified via Artificial Analysis).
- **IDs:** `openai/gpt-oss-120b` (open weights); hosted `gpt-oss-120b` per provider catalogs.
- **Context window:** 131,072 tokens ≈ 128K (AA lists 131K; BenchLM lists 128K — same 131,072 value, rounding difference only).
- **Modalities:** text input only; text output; reasoning yes (low/medium/high effort levels); tool calls (function calling); no image, audio or video input.
- **Pricing (as of 2026-10-16):** $0.15 / $0.59 per 1M in/out (median across providers; cache discount ~17%); weights free under Apache 2.0 (self-hosting requires your own GPUs).
- **Architecture:** 117B total / 5.1B active parameters (Mixture-of-Experts); Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **65.8%** (Artificial Analysis — new since 2026-10-05; solid)
- GDPval-AA: **Elo 745** / 5.4% normalized (Artificial Analysis)
- AA Agentic Index: **6.2%** / APEX-Agents-AA: **3.1%** (Artificial Analysis — weak unattended-agent behavior)
- Gert Labs: **29.61%** (gertlabs.com)
- BrowseComp: **1.6%** (airank.dev, unverified harness)
- Terminal-Bench / MCPAtlas: no verified public score found

Reasoning / knowledge:

- AIME 2024: **95.8%** / AIME 2025: **92.5%** (official OpenAI model card — new since 2026-10-05; strong math)
- MMLU: **90%** (official OpenAI model card)
- GPQA Diamond: **80.1%** (official model card) / **78.2%** (AA) — consistent with the 78.3% airank reading from 2026-09-24
- HLE: **14.9%** (official model card) / **19.6%** (AA-HLE) — conflict resolved by citing both; very weak either way
- Artificial Analysis Intelligence Index: **11.6** (current composite; consistent with the 12 recorded 2026-09-24)
- AA-LCR: **52.0%**; CritPt: **1.1%**; AA-IFBench: **69.0%**; AA-Omniscience: accuracy 21.8% / hallucination rate 90.8% (poor calibration)
- LCR (MLCR): covered by AA-LCR above; no separate MLCR found

Coding:

- SWE-bench Verified: **62.4%** (official OpenAI model card; companion gpt-oss-20b 60.7) — canonical PDF source now cited
- React Native Evals: **71.6%** (rn-evals.vercel.app, independent)
- AA-SciCode: **34.0%** / AA Coding Index: **30.4%** (Artificial Analysis — weak)
- SWE-bench Verified (Bash-only variant): **26.0%** (BenchGecko/llmrun.dev) — heavy scaffold dependence
- SWE-Pro, LiveCodeBench, Vibe Code Bench, DeepSWE: no verified public score found

Long context:

- No long-context retrieval reported beyond AA-LCR 52.0% (modest, consistent with the 128K window)

### Normalized scores (1–100)

- **Tool use: 52/100.** CHANGED from 50 — Tau2 65.8% adds a real positive, but AA Agentic Index 6.2%, APEX 3.1% and GDPval-AA 745 keep it low-mid.
- **Reasoning: 64/100.** CHANGED from 62 — official AIME 2025 92.5% and MMLU 90% strengthen the math/knowledge floor; HLE 14.9–19.6%, CritPt 1.1% and AA Index 11.6 cap it in the low-mid band.
- **Context window: 55/100.** 131K tokens maps to the 100K–200K tier (50–64); AA-LCR 52% is the only measured retrieval, unremarkable.
- **Multimodal: 15/100.** Text-only in/out (Design Arena 969 Elo is website-design output, not vision input).
- **Coding: 65/100.** Unchanged — official SWE-V 62.4% and RN Evals 71.6% anchor mid-band; AA Coding Index 30.4% and the 26.0% Bash-only variant offset the gains.
- **Cost efficiency: 96/100.** Unchanged — $0.15/$0.59 median plus free Apache 2.0 weights.
- **Overall Score: 50/100.** Five-dim mean per `RULES.md` (Cost excluded): (52 + 64 + 55 + 15 + 65) / 5 = 251/5 = 50.2 → 50 (was 49.4). Best-fit: a cheap open-weight base for self-hosted fine-tuning, math-flavored research and simple tool loops — not a competitor for frontier agentic, coding or multimodal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research (re-run of the 2026-09-24 + 2026-10-05 passes; BenchLM profile refreshed 2026-10-15 aggregating the official OpenAI model-card PDF, Artificial Analysis, Gert Labs, React Native Evals; GPQA/AA-Index readings consistent across three passes, HLE conflict 14.9 vs 19.6 documented); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_OSS.md`, using the same headings.
