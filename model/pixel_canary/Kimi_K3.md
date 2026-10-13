# Pixel Canary — findings by Kimi K3

- Source: stealth model on Vercel AI Gateway (`stealth/pixel-canary`; creator undisclosed)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-27; **identity still unconfirmed as of 2026-10-13 in my reachable sources**; no new benchmark suites have published this stealth ID; scores hold, temporary-$0 caveat sharpened (~3 weeks into preview))
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (stealth preview)
- **Short description:** Anonymous coding-focused model launched in stealth on Vercel AI Gateway on 2026-09-25, free during preview. Strongest published result: Vercel's Next.js Agent Evals 28/31 baseline → 30/31 with AGENTS.md — tying Claude Opus 5.5 and GPT-6 Astra. Identity unconfirmed; stealthmodels.com fingerprinting points at Z.ai's GLM family (speculative "GLM-5.4").
- **Provider / access:** Vercel AI Gateway (OpenAI-compatible, ID `stealth/pixel-canary`; payment method required even at $0); Cline Desktop; AI SDK Playground; Command Code (Go plan+). Still absent from OpenRouter's public catalog in all checks.
- **Release / knowledge:** Stealth since 2026-09-25 (Vercel changelog). Cutoff undisclosed.
- **IDs:** `stealth/pixel-canary`. No Zen ID (verified in the 2026-10-13 listing).
- **Context window:** 262,144 tokens / 131,072 max output (Vercel catalog).
- **Modalities:** text + image in; text out; reasoning levels none/low/medium/xhigh; tool calls; implicit caching.
- **Pricing (as of 2026-10-13):** $0/$0 during the stealth preview (first-pass figure — could not re-verify the listing live from my fetch path today; treat as possibly-ended. **Preview has now run ~18 days**). Data caveat unchanged: provider may retain prompts/outputs for training.
- **Architecture:** undisclosed (stealth). Community fingerprint: closest to GLM/MiniMax/Kimi/Qwen style, least like Gemini; GLM (Z.ai) leading hypothesis — **no official reveal found in reachable sources as of today**.

### Raw benchmarks found (first-pass snapshot; nothing new published)

Agent / tool use:

- Vercel Next.js Agent Evals (2026-09-25 snapshot, OpenCode harness, pass@4 with early exit, 40-min timeout): **28/31 (90%) → 30/31 (97%) with AGENTS.md** — ties Opus 5.5(high)/Claude Code 97%, GPT-6 Astra(high)/Codex 97%, Gemini 3.8 Flash/OpenCode 97%
- Average evaluation duration: **16.9 min** per task — slow
- Terminal-Bench / Tau / GDPval / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / LCR / CritPt / Indices: no verified public score found (stealth)

Coding:

- Next.js Agent Evals (above) — the only verified coding number; same-harness peers: Grok 4.7 94%/94%, Kimi K3 84%→97%
- SVG generation: qualitative gallery (unscored)
- SWE-bench / LiveCodeBench / SciCode / Vibe: no verified public score found

Long context: 262K verified by catalog; no retrieval benchmark.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All quality dims unchanged — no new evidence.**

- **Tool use: 70/100.** 31-task real-repo agent harness passed under OpenCode; capped by zero standard agentic rows and slow 16.9-min average.
- **Reasoning: 75/100.** Provisional — tying Astra/Opus 5.5 on a multi-step agent suite; no GPQA/HLE-class data.
- **Context window: 72/100.** 262,144/131,072 verified.
- **Multimodal: 62/100.** Text + image in, text out.
- **Coding: 88/100.** 30/31 with docs against a current-frontier peer set; capped by single-benchmark evidence and pass@4 leniency.
- **Cost efficiency: 95/100.** −5 vs the first-pass 100 — preview age (~18 days) makes the $0 assumption fragile; training-data-retention caveat stands.
- **Overall Score: 73/100.** (70+75+72+62+88)/5 = 73.4 → 73 (unchanged). Best fit: free-tier coding workhorse for Next.js/front-end tasks while the preview lasts — assume anything sent is training data.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (availability re-checks 2026-10-13: not on OpenRouter's public catalog, not on Zen; no official identity reveal found in my reachable sources; benchmark landscape re-checked — nothing new published for this stealth ID since the 2026-09-25 evals snapshot). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
