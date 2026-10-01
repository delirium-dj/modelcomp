# Qwen 3.6 Plus — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** The Plus-tier Qwen3.6 API model from Alibaba (Apr 2026) — a closed reasoning model with a 1M context window, text/image/video/PDF input, and above-average intelligence at a very competitive price. Deprecated by Qwen3.7 Plus.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.6-plus` via `https://opencode.ai/zen/v1/messages` (Anthropic-compatible Messages API, paid); Alibaba Cloud/Qwen API (AA-tracked provider), OpenRouter `qwen/qwen3.6-plus`, Together AI `together_ai/Qwen/Qwen3.6-Plus`, Fireworks.
- **Release / knowledge:** Released 2026-04-02 (CloudPrice + AA); knowledge cutoff: no verified public data found.
- **IDs:** `opencode/qwen-3.6-plus` (Zen); `qwen3.6-plus` / `qwen3.6-plus-2026-04-02` (Alibaba); `qwen/qwen3.6-plus` (OpenRouter)
- **Context window:** 1,000,000 tokens (1M) total, max output 65,536 (64K) — verified via CloudPrice API + AA (2026-10-01)
- **Modalities:** Text, image, video, PDF in; text out; reasoning supported (default effort); function calling; native structured outputs; prompt caching; Qwen3 tokenizer
- **Pricing (as of 2026-10-01):** Paid — $0.50 / 1M input, $3.00 / 1M output (Alibaba standard; batch $0.25/$1.50; OpenRouter $0.325/$1.95 ≤256K; Zen $0.50/$3.00, cache read $0.05). AA blended rate $0.43/1M.
- **Architecture:** Proprietary closed API tier; the open Qwen3.6 generation prioritizes stability/real-world utility on the Qwen3.5 foundation (Gated Delta Networks + sparse MoE). Parameter count for Plus: not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **27** — #107/224, above the class median of 26 (estimate; independent evaluation forthcoming)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA breakdowns "not publicly available")
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **27** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `qwen3.6-plus`
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (1M window documented by CloudPrice + AA; no measured retrieval published)

Performance:

- Output speed: **56.0 tokens/sec** (slower than average); TTFT: **2.13s** (fast) — Artificial Analysis, Alibaba API

## Normalized scores (1–100)

- **Tool use: 52/100.** AA Index 27 — above average on the agentic composite (Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA), but no standalone Terminal-Bench/Tau2 numbers for this ID; enters the mid band (50–70) at its floor.
- **Reasoning: 60/100.** AA Index 27 sits mid-way in the Index 20–35 band (→ 55–65); no GPQA/HLE text evidence; reasoning confirmed by AA spec.
- **Context window: 93/100.** 1M tokens enters the ≥1M = 95–100 band; the "100" requires ≥98% retrieval at 512K+, which no published retrieval run confirms — lands just under the ceiling.
- **Multimodal: 80/100.** Text + image + video (+PDF) input, text output only → +video/PDF-in 75–90 band.
- **Coding: 58/100.** No verified standalone SWE-bench/LiveCodeBench/SciCode numbers for this exact ID; AA Index 27 (weighting SciCode + Terminal-Bench 4.0) is above average but not frontier.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M tokens on the evaluated tier (OpenRouter as low as $0.325/$1.95) — between the ~$0.60/$2.20 = ~92 and ~$0.10/$0.20 = 97–99 references.
- **Overall Score: 69/100.** Mean of the five quality dims (52+60+93+80+58)/5 = 68.6 → 69. Best fit: cost-effective 1M-context multimodal work and mid-tier reasoning/coding — a strong price/performance pick, now superseded by Qwen3.7 Plus.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, CloudPrice page + REST API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
