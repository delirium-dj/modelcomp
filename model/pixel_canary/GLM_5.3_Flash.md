# Pixel Canary — findings by GLM 5.3 Flash

- Source: Anonymous / Vercel AI Gateway stealth (`stealth/pixel-canary`)
- Date: 2026-10-01 (UTC)
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
- **Pricing (as of 2026-10-01):** Free while the stealth/preview lasts (Vercel AI Gateway + Cline). Caveats: no zero-data-retention option — prompts and outputs may be retained for training and model improvement by the provider; do not route confidential code through it.
- **Architecture:** anonymous; parameters undisclosed; tokenizer analysis points to a possible Qwen derivative (unconfirmed).

### Raw benchmarks found

Agent / tool use:

- Next.js Agent Evals (Vercel, real Next.js dev tasks — App Router migrations, data fetching, image/font optimization, caching, view transitions): **90.3%** baseline (28/31 tasks), exactly tying GPT-6 Astra; **96.8%** with Next.js docs fed via AGENTS.md (30/31), tying the top of Vercel's leaderboard and beating Kimi K3 (source: Cline announcement on X reported by StartupFortune, 2026-09-26; caveat — Vercel built and controls this benchmark).
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Proxy: "adjustable reasoning effort" (Vercel listing) — vendor claim only, no measured reasoning numbers.

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
- Next.js Agent Evals: **90.3% / 96.8%** (see above — the only verified coding-specific number).

Long context:

- No long-context retrieval reported (262K window stated; no MRCR/RULER measurement found).

### Normalized scores (1–100)

- **Tool use: 90/100.** Next.js Agent Evals 90.3% baseline / 96.8% with docs context on an agentic benchmark (multi-step Next.js dev tasks via Cline) maps to the frontier band (TB2.1 ~88%+ → 90–100). Capped by a single benchmark from the gateway owner itself and no independent harness replication.
- **Reasoning: 70/100.** No verified public reasoning benchmarks (GPQA/HLE/Index all missing); provisional estimate from the frontier-level agentic-coding tie with GPT-6 Astra and "adjustable reasoning effort" — marked provisional, capped by zero measured reasoning numbers.
- **Context window: 70/100.** 262,144-token verified window → 200K–500K tier (65–84; 200K ≈ 70); max output 131K noted as adequate. No measured retrieval at length reported.
- **Multimodal: 15/100.** Chat text-only verified; no image/audio/video input verified → text-only band (10–20).
- **Coding: 90/100.** Next.js Agent Evals 96.8% ties the top of Vercel's leaderboard and beats Kimi K3 — frontier-band coding; capped because Vercel controls both benchmark and gateway and no SWE-bench/LiveCodeBench numbers exist.
- **Cost efficiency: 100/100.** Free stealth tier ($0 in/out on Vercel/Cline while the preview lasts). Flagged: time-limited free period, no zero-data-retention option, prompts/outputs may be used for training. Excluded from Overall.
- **Overall Score: 67/100.** (90 + 70 + 70 + 15 + 90) / 5 = 65.0 → 65. Best-fit recommendation: an outstanding free coding-agent pick for Next.js/web work while the stealth window lasts — but treat Vercel-controlled benchmark claims with caution, never send confidential code (no data-retention guarantee, unknown owner).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (Vercel AI Gateway model page + changelog, Cline/StartupFortune coverage, fetched 2026-10-01; no new verified evidence found in the 2026-10-09 re-check - stealth still anonymous, Vercel-controlled eval remains the only measurement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
