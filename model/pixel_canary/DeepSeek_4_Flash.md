# Pixel Canary — findings by DeepSeek 4 Flash

- Source: Stealth (via Vercel AI Gateway) / Pixel Canary
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Free anonymous stealth coding model distributed through Vercel AI Gateway and coding tools (e.g. Cline), purpose-built for Next.js/web implementation work; developer undisclosed.
- **Provider / access:** Vercel AI Gateway (`pixel-canary`); free during the stealth preview.
- **Release / knowledge:** stealth preview from ~2026-09/10; cutoff undisclosed.
- **IDs:** `pixel-canary`
- **Context window:** not independently confirmed in this pass (scaffolded metadata lists 128K).
- **Modalities:** text in/out (coding).
- **Pricing (as of 2026-10-02):** Free on Vercel AI Gateway.
- **Architecture:** undisclosed.

### Raw benchmarks found

Coding / web:

- Next.js evals (pass@4): **90.3%** baseline (28/31), ties GPT-6 Astra (high) — Vercel
- Next.js evals with `AGENTS.md` docs: **96.8%** (30/31), tying the leader — Vercel
- reported to beat Kimi K3 on Vercel's Next.js benchmark

Reasoning / knowledge / tool use / multimodal / long context:

- no verified public score found

### Normalized scores (1–100)

- **Tool use: 58/100.** Next.js agentic eval performance implies usable tooling; no Terminal-Bench/Tau2.
- **Reasoning: 60/100.** Strong web-code execution; no GPQA/HLE/MMLU.
- **Context window: 60/100.** Window not confirmed; scaffolded metadata lists 128K.
- **Multimodal: 15/100.** Text-only coding model; no vision/audio input reported.
- **Coding: 82/100.** 90.3% baseline / 96.8% with docs on Next.js evals, tying GPT-6 Astra.
- **Cost efficiency: 100/100.** Free on Vercel AI Gateway.
- **Overall Score: 55/100.** Mean of (58 + 60 + 60 + 15 + 82) / 5 = 55.0 → 55. Best-fit: free Next.js/web implementation; narrow evidence base outside web coding.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Vercel AI Gateway changelog, startupfortune.com, vibeleaderboard.ai); scores are normalized 1–100 interpretations, not official vendor scores; stealth-identity disclaimer applies.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
