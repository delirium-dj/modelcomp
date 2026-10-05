# Pixel Canary — findings by Fledge Alpha

- Source: Unknown lab (`pixel_canary`, stealth via Vercel AI Gateway `stealth/pixel-canary`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** A free, unbranded stealth coding model surfaced through Vercel's AI Gateway and coding agents (Cline, OpenCode) in late September 2026; maker unconfirmed.
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary`, Command Code, Cline; free while in stealth; no zero-data-retention option — prompts may be used for training.
- **Release / knowledge:** September 25, 2026; knowledge cutoff not published.
- **IDs:** `stealth/pixel-canary`; no Zen Free ID / stable vendor ID verified.
- **Context window:** 262K tokens (Command Code listing).
- **Modalities:** text in/out only documented; no vision/audio/video claims.
- **Pricing (as of 2026-10-05):** $0.00 in/out/cache while stealth lasts.
- **Architecture:** proprietary, undisclosed; tokenizer analysis suggests a possible Qwen derivative (community speculation, unverified).

### Raw benchmarks found

Agent / tool use:

- Next.js Agent Evals: **90.3%** pass@4 baseline (28/31, Vercel leaderboard, Sep 25, 2026)
- Next.js Agent Evals with AGENTS.md context: **96.8%** (30/31)
- Cline field test (two synthetic fixtures): 0/2 socket-error failures over ~38 min (eyestech.in; infra-catalyst caveat)
- GDPval/τ-Bench/MCP: no verified public row

Reasoning / knowledge:

- No verified GPQA/HLE/AIME/MMLU row; no AA/vals.ai index entry.

Coding:

- Next.js Agent Evals 90.3% (above) is the sole verified coding row; no SWE-bench/LCB/SWE-Pro numbers published.

Multimodal:

- No multimodal capability documented.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 62/100.** Next.js Agent Evals 90.3% with AGENTS.md 96.8% show real agentic coding; single-eval and one field-test failure cap it.
- **Reasoning: 40/100.** No published reasoning benchmarks at all; pure inference from a coding stealth release.
- **Context window: 88/100.** 262K per Command Code listing.
- **Multimodal: 15/100.** Text-only documented.
- **Coding: 72/100.** Vercel Next.js eval 90.3% is a genuine coding row; no second benchmark to corroborate.
- **Cost efficiency: 100/100.** Free during stealth (with no-data-retention caveat).
- **Overall Score: 55/100.** Mean of five non-cost dims (62+40+88+15+72)/5 = 55.4 → 55; best fit: free Next.js-agent experiment — do not put production secrets through it (no ZDR option).

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (startupfortune, huggingface blog liliruli, eyestech field test, Command Code listing, Vercel gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
