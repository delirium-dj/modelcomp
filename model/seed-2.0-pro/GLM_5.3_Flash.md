# ByteDance Seed 2.0 Pro — findings by GLM 5.3 Flash

- Source: ByteDance (`doubao-seed-2.0-pro` via Volcano Engine)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.0 Pro
- **Short description:** ByteDance's February 2026 frontier flagship for long-chain reasoning — the Pro tier of the Doubao Seed 2.0 family (Pro/Lite/Mini/Code) with frontier math, competition-grade coding and native long-video understanding at 5–10x below international frontier pricing. Doubao is China's #1 AI app (155M weekly active users); ByteDance faces Western procurement scrutiny.
- **Provider / access:** Volcano Engine API (`doubao-seed-2.0-pro`, OpenAI-compatible Chat Completions, English UI, non-China billing supported); gateways: TokenMix (`bytedance/doubao-seed-2.0-pro`), OpenRouter, DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`), NovAI gateway. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff reportedly Q1 2026 (NovAI contamination note); not officially verified.
- **IDs:** `doubao-seed-2.0-pro` (Volcano Engine; version `doubao-seed-2.0-pro-250428` tested by NovAI); `Seed-2.0-pro` (DeepInfra / OpenRouter). No Free ID on Zen.
- **Context window:** 256,000 total tokens; 65,536 max output (verified via llm-stats and the repo meta).
- **Modalities:** text, image and video input (native vision); text output; reasoning yes (long-chain reasoning); tool calls (native function calling, works with the OpenAI SDK `tools` parameter); JSON mode.
- **Pricing (as of 2026-10-09):** $0.47 / $2.37 per 1M in/out (Volcano Engine, blended 80/20 $0.85); $0.50 / $3.00 per llm-stats/opper (cached input $0.100); 3–10x cheaper than international frontier. Proprietary; paid only — no free API tier.
- **Architecture:** Proprietary — parameter count not disclosed.

### Raw benchmarks found

> ByteDance benchmark report + independent NovAI testing (May 5–10, 2026, Tencent Cloud Hong Kong, 200 prompts/category × 5 runs, median) + RankLLMs/Neura composites.

Agent / tool use:

- Function calling: native and "strong at function calling benchmarks" (vendor claim; no specific verified number found)
- Code review (independent, 30 real PRs with injected bugs): **24/30 caught** (NovAI; GPT-5.5 26/30, DeepSeek V4 Pro 28/30 — misses subtle race conditions more often, matches on logic/security review)
- No verified public Terminal-Bench, Tau3-Banking/Tau2-Bench, GDPval-AA, MCPAtlas, Claw-Eval or Toolathon score found

Reasoning / knowledge:

- AIME 2025: **98.3** (ByteDance benchmark report; roughly top 5% of human math competitors)
- HMMT: **97.3** (opper.ai — fills the previously-missing HMMT row)
- MMLU-Pro: **86.4** (independent NovAI EvalPlus-adjacent harness; vendor-era llmreference listed 87.0)
- GSM8K: **96.4** (NovAI — essentially saturated)
- Long-chain logic puzzles (8+ hops, independent): **23/30** (NovAI; GPT-5.5 25/30 — drops mid-chain constraints occasionally)
- FLORES-200 translation (NovAI, SacreBLEU): EN→ZH **47.3 BLEU** (best-in-class — training-corpus advantage), ZH→EN 38.2, JA→EN 33.4
- GPQA Diamond: **88.9%** (ByteDance benchmark report)
- Latency (independent, HK, 3,000 requests): first-token P50 **312 ms** (P95 540ms), 72 tok/s output, E2E P50 3.1s — ~2.6× faster first-token than OpenAI from the same region
- RankLLMs composite: **39.5/100** #56 (RankLLMs leaderboard — new third-party composite); Neura Intelligence Index: **80.1** #34 (Neura Market, 4 benchmarks)
- Artificial Analysis Intelligence Index: no verified public score found
- LCR / MLCR, CritPt, Omniscience: no verified public score found

Coding:

- SWE-Bench Verified: **76.5%** (ByteDance benchmark report; frontier-class — behind Opus 4.7's 87.6%; airank.dev corroborates 76.5%)
- HumanEval+ (EvalPlus, independent): **89.5** pass@1 (vs GPT-5.5 92.1, DeepSeek V4 Pro 93.4, at $0.42/1k tasks)
- LeetCode-Hard (independent, 50 post-cutoff problems): **31/50 solved** (NovAI — weakest at advanced graph algorithms; DeepSeek 38, GPT-5.5 34)
- LiveCodeBench v6: **87.8** (ByteDance benchmark report)
- Codeforces rating: **3020** (grandmaster tier, ~top 0.1% of competitive programmers)
- SWE-Bench Pro: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified (256K window claimed; no MRCR/RULER value found)
- VideoMME: **89.5** (multimodal eval — hour-long video understanding)

### Normalized scores (1–100)

- **Tool use: 68/100.** Native function calling documented as a strength plus the independent 24/30 code-review catch rate; still zero verified public agentic benchmark numbers (no Terminal-Bench, Tau3, GDPval, MCPAtlas) — thin evidence, upper-mid band.
- **Reasoning: 88/100.** AIME 2025 98.3%, HMMT 97.3% (filled), GPQA Diamond 88.9% (near the 90% frontier reference), MMLU-Pro 86.4% (independently corroborated) and a grandmaster-tier 3020 Codeforces rating are elite; no independent index run caps it under 90.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); no measured retrieval at 512K+.
- **Multimodal: 85/100.** Native text, image and video input with VideoMME 89.5% (hour-long video understanding); text-only output — the +video-in band is 75–90.
- **Coding: 85/100.** SWE-Bench Verified 76.5% is frontier-class, HumanEval+ 89.5 (independent) and LiveCodeBench 87.8% are strong; trailing Opus 4.7 by ~11 points and the missing SWE-Bench Pro/SciCode numbers prevent 90+.
- **Cost efficiency: 92/100.** $0.47/$2.37 per 1M (blended $0.85, $0.42/1k HumanEval+ tasks) sits at the ~$0.60/$2.20 = ~92 methodology reference with a better blended rate; 5–10x cheaper than international frontier.
- **Overall Score: 80/100.** Mean of the five quality dims (68 + 88 + 76 + 85 + 85) / 5 = 80.4 → 80. Best-fit: the cost-optimized frontier pick for math, reasoning and long-video workloads — with the caveat of ByteDance procurement scrutiny for US/EU enterprise adoption.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (independent NovAI testing May 2026, ByteDance benchmark report, Volcano Engine pricing via TokenMix/opper, llm-stats, RankLLMs, Neura Market cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds the independent NovAI harness rows (HumanEval+ 89.5, LeetCode-Hard 31/50, code review 24/30, MMLU-Pro 86.4, GSM8K 96.4, FLORES-200, HK latency 312ms), HMMT 97.3 and RankLLMs/Neura composites — Tool 65→68, Overall 80 (evidence now independent).
- Future sources: add a new file next to this one, e.g. `Seed_2.md`, using the same headings.
