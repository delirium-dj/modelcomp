# Kimi K2.7 Code — findings by Big Pickle

- Source: Moonshot AI (`moonshotai/kimi-k2.7-code`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (open-source agentic coding model, no "Free" tier)
- **Short description:** Moonshot AI's dedicated long-horizon software-engineering model, released 2026-06-12 as the coding-specialised cut of the Kimi K2 line. It replaces K2.6 as the default engine inside Kimi Code / Kimi For Coding and is a general coding-agent workhorse rather than a chat model — Moonshot explicitly recommends K2.6 for writing, analysis and conversation. Not an alias of another entry: same MoE base family as K2.6 but a separately released, separately benchmarked checkpoint.
- **Provider / access:** Moonshot Kimi Open Platform `https://api.kimi.ai/v1` (OpenAI-compatible Chat Completions, ID `kimi-k2.7-code`, plus `kimi-k2.7-code-highspeed`); OpenCode Zen `moonshotai/kimi-k2.7-code` and OpenCode Go subscription; also Cloudflare Workers AI `@cf/moonshotai/kimi-k2.7-code` (REST `/ai/run` or OpenAI-compatible `/v1/chat/completions`). Chat Completions throughout — no Responses API documented.
- **Release / knowledge:** 2026-06-12 (AA and Moonshot both confirm June 2026); knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k2.7-code` (Moonshot API, OpenCode Zen, models.dev); `kimi-k2.7-code` / `kimi-k2.7-code-highspeed` (platform.kimi.ai); `tencent/kimi-k2.7-code` (Tencent Cloud route); `@cf/moonshotai/kimi-k2.7-code` (Workers AI). No Zen Free ID — paid on every route found.
- **Context window:** 262,144 tokens (256K) — Moonshot pricing page and models.dev both list 262,144; models.dev lists max output 262,144 as well. AA rounds to 256k. Note this is the *API* limit; Kimi Code membership tiers gate which models you may use, and the newer K2.8 Preview / K3 raised Kimi Code to 1M.
- **Modalities:** text, image and video in; text out; reasoning (thinking) always on — there is no non-thinking mode, and Kimi Code silently routes thinking-off requests to K2.6; tool calls (multi-turn) and JSON mode supported; automatic context caching. Vision is native via a 400M-parameter MoonViT encoder.
- **Pricing (as of 2026-09-25):** Kimi API $0.19 cache-hit in / $0.95 cache-miss in / $4.00 out per 1M tokens (80% cache discount; Kimi's own docs). HighSpeed tier doubles all three: $0.38 / $1.90 / $8.00. OpenCode Zen mirrors $0.95 / $4.00; AA blended rate (7:2:1 cache:input:output) $0.72 per 1M. Kimi Code plans run $15–$159/month with weekly quotas. Paid everywhere — no free tier, so no training-data-usage caveat, but also no $0 escape hatch.
- **Architecture:** open weights, Modified MIT licence. MoE, 1T total / 32B active parameters; 61 layers (1 dense), 384 experts with 8 selected per token plus 1 shared expert; MLA attention (64 heads, 7168 hidden), SwiGLU, 160K vocab; MoonViT 400M vision encoder; ~595 GB of weights on HF.

### Raw benchmarks found

Agent / tool use:

- Kimi Code Bench v2 (Moonshot in-house, Kimi Code CLI, thinking on): **62.0** (vs K2.6 50.9, GPT-5.5 69.0, Opus 4.8 67.4)
- Program Bench: **53.6** (vs K2.6 48.3, GPT-5.5 69.1, Opus 4.8 63.8)
- MLS Bench Lite: **35.1** (vs K2.6 26.7, GPT-5.5 35.5, Opus 4.8 42.8)
- Kimi Claw 24/7 Bench (Moonshot in-house agentic): **46.9** (vs K2.6 42.9, GPT-5.5 52.8, Opus 4.8 50.4)
- MCP Atlas: **76.0** (vs K2.6 69.4, GPT-5.5 79.4, Opus 4.8 81.3)
- MCP Mark Verified: **81.1** (vs K2.6 72.8, GPT-5.5 92.9, Opus 4.8 76.4)
- Terminal-Bench 2.1: **67.0%** (Vals harness, per BenchLM)
- Tau2-Bench: **90.1%** (per BenchLM)
- GDPval-AA: **1114 Elo**; normalised 26.3% (BenchLM)
- AA Agentic Index: **22.5%** (BenchLM)
- Claw-Eval / ClawProBench / Toolathon: no verified public score found (the "Kimi Claw 24/7 Bench" above is a different, Moonshot in-house benchmark)
- SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.6%** (AA harness, per BenchLM)
- HLE: **35.0%** (AA harness, per BenchLM)
- AA-LCR v1.1: **79.3%** (AA, per BenchLM)
- CritPt: **10.0%** (AA, per BenchLM)
- Artificial Analysis Intelligence Index: **25.8** (AA v4.3.2; AA page rounds to **26**, #25 of 115 in its open-weight >150B class, #28 of 673 models overall)
- AA-Omniscience Index / Hallucination Rate: **-10.2 / 82.4%** — i.e. accuracy 39.6% and a very high hallucination rate, the weakest part of the AA profile
- AA-IFBench: **63.1%** (instruction following)

Coding:

- SWE-bench (Vals harness): **78.2%** (per BenchLM; this is the Vals/LM-comparison leaderboard number, not a Moonshot-claimed SWE-bench Verified figure)
- LiveCodeBench: **82.1%** (Vals harness, per BenchLM)
- AA-SciCode: **47.8%** (per BenchLM)
- AA Coding Index: **60.8%** (per BenchLM)
- CursorBench 3.2: **49.7%** (per BenchLM)
- OpenHarmony Bench: **52.1%** (per BenchLM)
- Design Arena Website: **1277** Elo (per BenchLM)
- DeepSWE: no verified public score found
- Vibe Code Bench: no verified public score found
- SWE-bench Pro: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval number reported at the 256K limit by any source I found. The closest measured long-context signal is AA-LCR v1.1 at 79.3% (AA's long-context reasoning eval), which is reasoning over long context rather than pure needle-in-haystack retrieval — treated here as a provisional proxy.

Other measured facts:

- Output speed **64.1 tok/s** on Moonshot's API; TTFT 2.88s; $0.54 per AA Intelligence Index task; 120M output tokens across the Index run (concise vs 140M class median). HighSpeed edition ~180 tok/s, up to 260 tok/s in short-context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 67.0%, τ²-bench 90.1%, MCP Mark Verified 81.1% and MCP Atlas 76.0% put real agentic/tool competence well past the mid band, and 30% lower thinking-token use than K2.6 makes it cheaper per task than its own predecessor; capped below the 90s because GDPval-AA 1114 is only mid-tier, the in-house Claw 24/7 Bench is a self-reported 46.9, and no Terminal-Bench 4.0 or Toolathon number is published.
- **Reasoning: 72/100.** GPQA Diamond 89.6% and HLE 35.0% are near-frontier, AA-LCR 79.3% is strong, and 30% less overthinking is a real efficiency win; capped by an AA Intelligence Index of only 25.8 (mid-range) and an Omniscience Index of -10.2 with an 82.4% hallucination rate — it knows less than it sounds like it knows.
- **Context window: 76/100.** 262,144 tokens (256K) total sits in the 200K–500K tier (200K = 70), and 79.3% AA-LCR supports genuine long-context use; capped because no MRCR/RULER/GraphWalks retrieval at full window is reported and Moonshot's own newer K2.8 Preview / K3 already ship 1M.
- **Multimodal: 80/100.** Native text + image + video in (MoonViT 400M encoder) and text out, plus reasoning, tool calls and JSON mode; scored in the 75–90 "+video/PDF in" band and capped there because nothing but text is emitted and no audio/video output or PDF-parsing benchmark is reported.
- **Coding: 78/100.** SWE-bench 78.2% and LiveCodeBench 82.1% are strong, with AA-SciCode 47.8% and AA Coding Index 60.8% short of the 55%/70% frontier thresholds; capped by no verified DeepSWE, no Vibe Code Bench, and a Kimi Code Bench v2 of 62.0 that still trails GPT-5.5 (69.0) and Opus 4.8 (67.4) on Moonshot's own table.
- **Cost efficiency: 89/100.** Paid everywhere: $0.95 in / $4.00 out with an 80% cache discount ($0.19 cache-hit) and a $0.72 blended rate — slightly better than the ~$1.25/$4.25 ≈ 88 reference point, so 89; no free tier, so it can never reach 100.
- **Overall Score: 77/100.** (78 + 72 + 76 + 80 + 78) / 5 = 76.8 → 77. Best fit: open-weights, 256K-context coding/agent work at ~$1/$4 with 80% cache discount — the best value Moonshot has shipped for long-horizon repo-scale agentic work, provided you route it to a cache-heavy workload and do not lean on it for factual recall.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (Moonshot's own K2.7 Code resource page and Kimi Code docs, Artificial Analysis model page, BenchLM model page, Cloudflare Workers AI docs, models.dev, platform.kimi.ai pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_3.0.md`, using the same headings.
