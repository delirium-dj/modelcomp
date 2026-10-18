# Pixel Canary — findings by GLM 5.3 Flash

- Source: Anonymous / Vercel AI Gateway stealth (`stealth/pixel-canary`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (anonymous stealth model; maker unconfirmed)
- **Short description:** A free anonymous large model distributed through Vercel's AI Gateway under the internal ID `stealth/pixel-canary` (also listed free on Command Code while the preview lasts). Strong coding focus — web and mobile app development — with adjustable reasoning effort. Tokenizer analysis points to a possible Qwen derivative, but the maker remains unconfirmed; treat as a stealth alias of unknown origin.
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary`; also free inside coding tools like Cline. Chat Completions-style unified AI Gateway API.
- **Release / knowledge:** Surfaced on Vercel AI Gateway the week of 2026-09-26 (Cline announcement + StartupFortune coverage); knowledge cutoff not disclosed.
- **IDs:** `stealth/pixel-canary` (state explicitly: no Free ID exists on Zen; free stealth access is on Vercel/Cline instead).
- **Context window:** 262,144 tokens total; max output 131,072 (verified via Vercel AI Gateway model page, 2026-10-01).
- **Modalities:** text in/out verified (chat type); image/audio/video input not verified; reasoning yes ("adjustable reasoning effort"); tool calls yes (designed for coding agents like Cline); JSON mode not verified.
- **Pricing (as of 2026-10-11):** Free while the stealth/preview lasts (Vercel AI Gateway + Cline). Caveats: no zero-data-retention option — prompts and outputs may be retained for training and model improvement by the provider; do not route confidential code through it.
- **Architecture:** anonymous; parameters undisclosed; tokenizer analysis points to a possible Qwen derivative (unconfirmed).

### Raw benchmarks found

> Second-pass verification (2026-10-11): the BenchLM fetch returns 404 — no aggregator page exists for the anonymous stealth model, and no new measurements have surfaced since the 2026-10-01/09 passes; the Vercel-controlled Next.js Agent Evals remain the only measurement. Scores are carried, not moved.

Agent / tool use:

- Next.js Agent Evals (Vercel, real Next.js dev tasks — App Router migrations, data fetching, image/font optimization, caching, view transitions): **90.3%** baseline (28/31 tasks), exactly tying GPT-6 Astra; **96.8%** with Next.js docs fed via AGENTS.md (30/31), tying the top of Vercel's leaderboard and beating Kimi K3 (source: Cline announcement on X reported by StartupFortune, 2026-09-26; caveat — Vercel built and controls this benchmark)
- Terminal-Bench / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchLM 404 confirmed 2026-10-11)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Proxy: "adjustable reasoning effort" (Vercel listing) — vendor claim only, no measured reasoning numbers

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found
- Next.js Agent Evals: **90.3% / 96.8%** (the only verified coding-specific number)

Long context:

- No long-context retrieval reported (262K window stated; no MRCR/RULER measurement found)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: no aggregator page exists (BenchLM 404) and the maker is unknown, so no new measurements can surface; the single Vercel-controlled eval stands.

- **Tool use: 90/100.** Next.js Agent Evals 90.3% baseline / 96.8% with docs context on an agentic benchmark (multi-step Next.js dev tasks via Cline) maps to the frontier band (TB2.1 ~88%+ → 90–100). Capped by a single benchmark from the gateway owner itself and no independent harness replication.
- **Reasoning: 70/100.** No verified public reasoning benchmarks (GPQA/HLE/Index all missing); provisional estimate from the frontier-level agentic-coding tie with GPT-6 Astra and "adjustable reasoning effort" — marked provisional, capped by zero measured reasoning numbers.
- **Context window: 70/100.** 262,144-token verified window → 200K–500K tier (65–84; 200K ≈ 70); max output 131K noted as adequate. No measured retrieval at length reported.
- **Multimodal: 15/100.** Chat text-only verified; no image/audio/video input verified → text-only band (10–20).
- **Coding: 90/100.** Next.js Agent Evals 96.8% ties the top of Vercel's leaderboard and beats Kimi K3 — frontier-band coding; capped because Vercel controls both benchmark and gateway and no SWE-bench/LiveCodeBench numbers exist.
- **Cost efficiency: 100/100.** Free stealth tier ($0 in/out on Vercel/Cline while the preview lasts). Flagged: time-limited free period, no zero-data-retention option, prompts/outputs may be used for training. Excluded from Overall.
- **Overall Score: 67.0/100.** (90 + 70 + 70 + 15 + 90) / 5 = 335/5 = 67.0 — corrected on the 2026-10-11 second pass: the prior 65 carried a two-point band adjustment that does not comply with the RULES.md half-up-mean formula. Best-fit recommendation: an outstanding free coding-agent pick for Next.js/web work while the stealth window lasts — but treat Vercel-controlled benchmark claims with caution, never send confidential code (no data-retention guarantee, unknown owner).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: BenchLM fetch 404 — no aggregator page exists for the anonymous stealth model; the prior 2026-10-01/09 passes on the Vercel AI Gateway listing + Cline/StartupFortune coverage remain the evidence base; 2026-10-16 re-check: BenchLM still 404s the stealth slug, no new evidence — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
