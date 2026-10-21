# GPT-5-Codex — findings by MiMo 2.6 Flash

- Source: OpenAI (`openai/gpt-5-codex`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5-Codex
- **Short description:** OpenAI's original Codex-optimized GPT-5 variant (2025-09-15), trained with reinforcement learning on real-world coding tasks to mirror human PR style and iterate until tests pass; the launch-era terminal/SWE leader, since superseded by GPT-5.1-Codex / GPT-5.1-Codex-Max / GPT-5.2-Codex but still served.
- **Provider / access:** OpenAI — Codex CLI, IDE extension (VS Code, Cursor, Windsurf), Codex web, GitHub code review, ChatGPT (Plus/Pro/Business/Edu/Enterprise); API `gpt-5-codex` (Vals AI default provider OpenAI; Chat Completions/Responses era endpoints).
- **Release / knowledge:** released 2025-09-15 (OpenAI system-card addendum; Gigazine coverage of the launch); Vals lists 2025-09-23. Knowledge cutoff not restated on the addendum (GPT-5 family lineage).
- **IDs:** `openai/gpt-5-codex` (API id `gpt-5-codex`). Available via ChatGPT plan entitlements as well as API; no $0 API tier.
- **Context window:** 400,000 tokens input; 128,000 max output tokens (Vals AI model page).
- **Modalities:** text and image in (file input supported per Vals); text out; reasoning (adaptive: fast replies for simple tasks, longer thinking for hard ones — OpenAI launch coverage).
- **Pricing (as of 2026-10-21):** $1.25 in / $10.00 out per 1M tokens (Vals AI; matches the Codex-family list price). ChatGPT plan usage is quota-limited rather than per-token.
- **Architecture:** proprietary (GPT-5 family, coding RL post-training).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench (Vals harness, launch-era eval 2025-09-24): **58.8%** — 1st place at launch, +10 pts over GPT-5 (Vals AI)
- Terminal-Bench 2.0: **43.4%** (airank.dev)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found for this exact ID (base GPT-5 numbers are lineage only, never merged)

Coding:

- SWE-bench Verified: **74.5%** (airank.dev; llm-stats) — 1st place at launch, narrowly ahead of GPT-5 (Vals)
- LiveCodeBench: **84.72%** (Vals AI; #37/143)
- SWE-Rebench: **44.0%** (airank.dev)
- IOI v1: **9.8%** (Vals — first model observed to earn full credit on a single IOI problem)
- Refactoring slice (launch post): **51.3%** vs GPT-5's 33.9% (OpenAI launch coverage via Gigazine)

Long context:

- No MRCR/RULER-style public retrieval figure found (no compaction mechanism — that arrived with GPT-5.1-Codex-Max)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 58.8% (Vals launch harness) tops the mid band and the model is purpose-built for Codex agent loops, but the TB2.0 re-score (43.4%) and missing Tau3/GDPval rows hold it below 70.
- **Reasoning: 70/100.** Adaptive thinking and strong SWE performance imply solid engineering reasoning, yet no public GPQA/HLE/Index figure exists for this exact ID — scored conservatively on coding-adjacent evidence only.
- **Context window: 80/100.** 400K input sits at the top of the 200K–500K tier (200K = 70 reference); no compaction, no measured retrieval at window length.
- **Multimodal: 65/100.** Image + file input, text output (no video/audio, no non-text out) — standard image-in tier for a coding model.
- **Coding: 84/100.** SWE-bench Verified 74.5% cleared the DeepSWE frontier reference (74%+) at launch, LiveCodeBench 84.7% is strong, refactoring +17 pts over base GPT-5; SWE-Rebench 44% and TB2.0 43.4% cap it below 90.
- **Cost efficiency: 70/100.** $1.25/$10.00 output-expensive list pricing; no free API lane (ChatGPT plan quotas only).
- **Overall Score: 73/100.** Mean of (68 + 70 + 80 + 65 + 84) / 5 = 73.4 → 73. Best fit: legacy Codex workhorse still fine for SWE fixes at 400K; prefer GPT-5.1-Codex-Max/5.2-Codex for new long-horizon agentic work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (OpenAI system-card addendum + launch coverage, Vals AI leaderboards, airank.dev, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
