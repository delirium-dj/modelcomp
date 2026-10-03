# Pixel Canary — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Pixel Canary
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** Pixel Canary is an **anonymous** model — Vercel AI Gateway lists it as `stealth/pixel-canary` with no disclosed developer. Identity is unverified; the strongest public evidence is forensic (reasoning-habit similarity points to a possible Qwen4 Flash variant, with MiniMax and GLM as alternatives). Scores below reflect only what was measured.

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous coding model on Vercel AI Gateway, strong at web and mobile app development (building applications, refactoring, responsive layouts), with adjustable reasoning effort.
- **Provider / access:** Vercel AI Gateway (`stealth/pixel-canary`); usable from OpenCode, Cline, and model pickers; free for a limited time while in stealth (no end date announced). Not in OpenRouter's public catalog (checked 2026-09-27); not callable via BeatAPI.
- **Release / knowledge:** 2026-09-25 (stealth launch). Knowledge cutoff not captured.
- **IDs:** `stealth/pixel-canary`; folder `pixel_canary`.
- **Context window:** 262,144 tokens; max output 131,072 (including reasoning tokens).
- **Modalities:** Text and image in, text out (per Vercel catalog).
- **Pricing (as of 2026-10):** $0.00 / $0.00 per 1M (free during stealth); "free for a limited time" is not a durable price commitment.
- **Data terms:** No zero-data-retention option; prompts and outputs may be retained for training by the provider.
- **Reasoning effort:** provider-default, none, minimal, low, medium, high, xhigh.
- **Architecture:** Not disclosed (anonymous).

### Raw benchmarks found

**Vercel Next.js Agent Evals (Vercel's own benchmark; 31 real Next.js tasks — App Router migrations, data fetching, image/font optimization, caching, view transitions; pass@4 with early exit; 40-min timeout per attempt; snapshot 2026-09-25):**
- Pixel Canary (OpenCode): baseline **90.3% (28/31)**; with Next.js docs via `AGENTS.md`: **96.8% (30/31)** — ties the leaderboard's top score in that setting.
- Comparison table (baseline / with AGENTS.md): Claude Opus 5.5 (high, Claude Code) 97%/30 → 97%/30; GPT 6 Astra (high, Codex) 90%/28 → 97%/30; Gemini 3.8 Flash (OpenCode) 90%/28 → 97%/30; Grok 4.7 (OpenCode) 94%/29 → 94%/29; Kimi K3 (OpenCode) 84%/26 → 97%/30; Claude Sonnet 5 81%; Claude Fable 5.1 (high) 97%.
- Average evaluation duration: **1,015.80 s (16.9 min)** per task vs GPT 6 Astra 251.89 s (4.2 min) and Kimi K3 352.34 s (5.9 min) — different agents, so this is a workflow comparison, not isolated model speed; early OpenCode users also report long generation and code-reading waits.
- Caveat: Vercel controls the gateway, the benchmark, and the leaderboard — a useful signal, not an independent verdict.

**Identity forensics (stealthmodels.com, 2026-09-29; reasoning-habit similarity, 23 Cline thinking excerpts, 16 prompts, 3 repetitions per reference):**
- Qwen3.8 Flash closest match at **63.8/100** (similarity of recorded reasoning habits — NOT a 63.8% probability of being Qwen); MiniMax M3 59.4; GLM 5.3 variants 59.2-59.3; GLM-5.4/Z.ai theory remains an alternative. A future **Qwen4 Flash variant (possibly 35B or 120B)** is the leading candidate explanation.

## Scores

- **Tool use: 56/100.** Real-agent coding tasks in OpenCode are the only agentic evidence; no Tau-bench/MCP-Atlas/Toolathlon captured.
- **Reasoning: 52/100.** No GPQA/HLE/AIME captured; reasoning effort is configurable (none-xhigh) but unbenchmarked; identity forensics is not capability evidence.
- **Context window: 70/100.** 262K tokens; no long-context retrieval benchmark captured.
- **Multimodal: 61/100.** Text and image in, text out.
- **Coding: 68/100.** Next.js Agent Evals 90.3% baseline / 96.8% with docs (tying Opus 5.5, GPT 6 Astra, Gemini 3.8 Flash in the docs setting) — strong for web coding, but a single-vendor 31-task benchmark; 16.9 min/task is very slow.
- **Cost efficiency: 100/100.** Free during stealth (caveat: temporary, no end date; no ZDR; outputs may be retained for training).
- **Overall Score: 61.4/100.** Mean of Tool use 56, Reasoning 52, Context window 70, Multimodal 61, Coding 68 = 61.4.

> **Gap vs folder average (65.2): −3.8.** The peer set appears to credit the Next.js result and the free price; this report also credits both fully, but the anonymous identity, the single-vendor benchmark, the absent standard benchmarks (GPQA/HLE/SWE-bench), and the 16.9-minute average task duration hold the score down. If the identity is confirmed (e.g., a Qwen4 Flash variant), standard-benchmark rows should be re-scored.

## Notes

- Verification trail: Vercel changelog "Pixel Canary is now available in stealth for free on AI Gateway" (Next.js eval results; pass@4 methodology), Vercel AI Gateway model page (`stealth/pixel-canary`; 262,144/131,072; text+image in), stealthmodels.com (2026-09-29 snapshot; comparison table; duration data; identity-similarity analysis), BeatAPI (2026-09-28; specs; data terms; duration comparison), Command Code ($0.00 pricing; 262K; released 2026-09-25), Hugging Face blog (2026-09-28; leaderboard table).
- Known conflicts: none material; the Next.js leaderboard's rounded values (90%/97%) vs exact fractions (90.3%/96.8%) are consistent.
- Open questions: the developer's identity; standard benchmark rows (SWE-bench, GPQA, HLE); per-token pricing after stealth ends; zero-data-retention terms.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: identity confirmation, standard benchmarks, post-stealth pricing.
