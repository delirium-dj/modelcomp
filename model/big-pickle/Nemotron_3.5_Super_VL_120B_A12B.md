# Big Pickle — findings by Nemotron 3.5 Super VL 120B A12B

- Source: github.com/PhillipChaffee/big-pickle-swe-atlas (independent SWE Atlas evaluation + README), pi.dev/models/opencode/big-pickle (provider model page), alextech.ai (news coverage), lavx.hu (news coverage), models.dev big-pickle.toml (metadata), benchlm.ai (leaderboard)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (OpenCode Zen stealth model)
- **Short description:** Free stealth/reasoning model served via OpenCode Zen, positioned for coding agents and multi-step problem solving; underlying model officially unconfirmed (API signatures suggest DeepSeek infrastructure); identity may change without notice; 200K context; reasoning yes; free during stealth period.
- **Provider / access:** OpenCode Zen (`https://opencode.ai/zen/v1`, OpenAI-compatible), litellm route `openai/big-pickle`; also listed on Pi.dev and Vercel AI Gateway. Free ($0 input/output) during stealth.
- **Release / knowledge:** First documented public evaluation 2026-08-11; models.dev lists release_date 2025-10-17 (unverified); knowledge cutoff listed as 2025-01 (unverified). No official model card from a developer exists.
- **IDs:** `big-pickle` (OpenCode Zen), `openai/big-pickle` (litellm), `opencode/big-pickle` (Pi). No HF repo confirmed.
- **Context window:** 200,000 tokens (pi.dev, models.dev). Verified across provider sources.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes; tool calls yes (models.dev); structured output yes (models.dev).
- **Pricing (as of 2026-10-16):** $0.00 /M input, $0.00 /M output, $0 cache (free stealth period on OpenCode Zen).
- **Architecture:** Undisclosed; provider metadata does not state parameter count, MoE vs dense, or training recipe. open_weights = false per models.dev.

### Raw benchmarks found

Only one benchmark with a verifiable score exists. All other dimensions have no public data.

Agent / tool use:

- SWE Atlas Codebase QnA (Scale AI): **50.8%** task resolve rate (63/124), single trial 2026-08-11, mini-swe-agent 2.4.6 scaffold, Harbor 0.18.0; judge claude-opus-4-5-20251101. By category: Code Onboarding 60.7%, Architecture & system design 52.3%, Root-cause analysis 45.9%, Security 45.5%, API & library usage 25.0%. By language: TypeScript 58.1%, Python 55.2%, Go 50.0%, C 38.5%.

Reasoning / knowledge: No public scores found (no MMLU, GPQA, HLE, ARC, etc.).

Coding: SWE Atlas Codebase QnA 50.8% (above). No LiveCodeBench, HumanEval, Codeforces, or other SWE-bench variant scores found.

Multimodal & grounded: Text-only; no vision benchmarks.

Long context: Declared 200K context; no public long-context retrieval score.

Instruction following: No public IFEval/IFBench/BBH scores found.

### Conflicting results noted

- Model identity is unconfirmed: "leaked provider errors and API response signatures suggest it is currently served by DeepSeek infrastructure" (GitHub README). The score is a snapshot of whatever was behind the alias on 2026-08-11 and may not generalize.
- Single trial (vs. the official protocol's three trials), reduced sandbox resources (4 CPU / 8 GB), and prompts may be used for training during the free period — all caveat the result.
- models.dev metadata (release 2025-10-17, knowledge 2025-01) is community-entered and unverified; treat as directional only.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. **Evidence is extremely thin** (one benchmark); dimensional scores are low-confidence best estimates.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** SWE Atlas 50.8% leads the Mini-SWE-Agent scaffold class but is below Claude Opus 5 (63.2) and Opus 4.8 (57.3) on their native scaffolds; single-trial, unverified identity → low confidence.
- **Reasoning: 40/100.** No public reasoning benchmarks (MMLU/GPQA/HLE/ARC) found; low-confidence floor estimate.
- **Context window: 70/100.** Declared 200K tokens (provider sources); no public retrieval/needle score to confirm effective usable window.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 50/100.** SWE Atlas Codebase QnA 50.8% (63/124); strong within Mini-SWE-Agent class but only one data point and unverified model identity.
- **Cost efficiency: 95/100.** Free ($0) during stealth; not counted toward Overall.
- **Overall Score: 51/100.** Half-up mean of (45 + 40 + 70 + 50 + 50) / 5 = 51.0 → 51, but with very low confidence given single-benchmark sourcing; treat as directional only.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (independent GitHub SWE Atlas evaluation + README + pi.dev provider page + models.dev metadata + news coverage); scores are normalized 1–100 interpretations, not official vendor scores. Evidence base is one benchmark — treat all scores as low-confidence.
- Future sources: add a new file next to this one, using the same headings.
