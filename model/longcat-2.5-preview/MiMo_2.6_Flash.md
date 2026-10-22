# LongCat 2.5 Preview — findings by MiMo 2.6 Flash

- Source: Meituan (`meituan/longcat-2.5-preview`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's API-only preview (2026-09-25) of its next LongCat model — a natively multimodal MoE (~1.6T total / ~48B active) aimed at long-horizon agent work across terminals, browsers, GUIs and spreadsheets, adding image understanding on top of LongCat 2.0's coding focus. Closed weights (unlike the open LongCat 2.0); not a variant of another tracked entry — a distinct preview checkpoint in the LongCat family.
- **Provider / access:** OpenAI-compatible Chat Completions via OpenCode (`meituan/longcat-2.5-preview`), NanoGPT (`longcat-2.5-preview`), Vercel AI Gateway (`meituan/longcat-2.5-preview`); also Blackbox AI (`blackboxai/meituan/longcat-2.5-preview`) and the official LongCat API platform. Anthropic-compatible endpoints and Claude Code / Hermes / OpenClaw / OpenCode / Kilo Code harness compatibility announced in the official change log.
- **Release / knowledge:** 2026-09-25 (official LongCat API change log + Meituan LongCat X post, both 2026-09-25); knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5-preview` (paid); models.dev lists a free slot `longcat-2.5-preview-free` on OpenCode / OpenCode Go ($0.00/$0.00) — treat as time-limited and not independently re-verified today (folder meta marks no verified Free ID on Zen). Closed weights — no open-weights release.
- **Context window:** 1,000,000 tokens (1,048,576 on Vercel AI Gateway); max output 131,072 tokens (models.dev TOML, opencode.ai data catalog — two independent registries agree). No long-context retrieval measurement published.
- **Modalities:** text and image in; text out; reasoning yes; tool calling yes; temperature yes; structured output listed unsupported on models.dev (Blackbox spec sheet claims response_format support — conflicting, unverified); no audio/video/PDF input documented.
- **Pricing (as of 2026-10-22):** $0.30 in / $1.20 out per 1M, cached input $0.006 — official LongCat platform and Vercel AI Gateway limited-time price (BenchmarkList flags it promotional); NanoGPT differs at $0.75/$2.95 (host-dependent); models.dev lists the OpenCode free slot at $0/$0. Free-tier prompts may be used for provider data — verify current Zen terms before sending sensitive code.
- **Architecture:** proprietary closed-weight MoE, ~1.6T total / ~48B active parameters (BenchmarkList model summary, Vercel AI Gateway coverage, There's An AI For That — three sources agree).

### Raw benchmarks found

Agent / tool use:

- AI Coding Daily LLM Coding Leaderboard agentic run (OpenCode harness, 7 real projects): **46.65/80 total points**, **#43**, avg 16:50 per prompt (aicodingdaily.com, evaluated 2026-10-02)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval: no verified public score found
- Adoption (not a benchmark): OpenCode #8 by tokens last week, 8.4T tokens over past 2 months, 252K unique users, 63.8% weekly retention (opencode.ai/data, updated 2026-10-19)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (llmperks: "not on the Artificial Analysis leaderboard yet"; BenchmarkList 0 score rows)

Coding:

- AI Coding Daily LLM Coding Leaderboard total: **46.65/80** (#43; ahead of GPT-6-Luna Medium 43.74 and Gemini-3.1-Pro 42.36, behind GLM-5.3-Flash 47.51 and Qwen 3.8 27B 47.76): Laravel Code Quality **16.98/20**, React-TS Code Quality **16.67/20**, Bug Finding **2.4/20**, CSV Import (PHP) **3/5**, Offline Sync (PHP) **2.7/5**, Bank Feed (Dart/Flutter) **4/5**, Shipping Quotes (Go) **0.9/5** (aicodingdaily.com/model/longcat-2-5-preview, eval 2026-10-02, harness OpenCode)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found (BenchmarkList: 0 score rows; Meituan published no benchmarks for the preview)
- Conflicting coverage: BenchmarkList says "no independent evaluation had been confirmed" while AI Coding Daily carries a full 2026-10-02 evaluation — the measured harness row wins; BenchmarkList simply had not imported it.

Long context:

- No long-context retrieval figure published (1M window unmeasured; MRCR/RULER/GraphWalks absent)

### Normalized scores (1–100)

- **Tool use: 60/100.** Completed multi-project agentic runs inside the OpenCode CLI harness (7/7 projects attempted, AI Coding Daily 46.65/80) plus official Claude Code / Hermes / Kilo Code compatibility, but no Terminal-Tau3/GDPval data exists to confirm frontier agentic reliability; slow 16:50 avg/prompt and weak bug-finding cap it.
- **Reasoning: 58/100.** Model is flagged reasoning-capable with official multi-step-reasoning positioning, but zero public GPQA/HLE/LCR/Index scores exist (absent from AA and BenchLM), so it is scored at the conservative mid floor.
- **Context window: 95/100.** Native 1,048,576-token window (models.dev + Vercel agree) hits the ≥1M tier; no ≥98% retrieval figure at 512K+, so it stays at the tier floor rather than 100.
- **Multimodal: 65/100.** Image input with cross-modal QA/summarization/visual reasoning confirmed by the official change log (+image in = 60–70 band); text-only output and no video/audio/PDF input keep it out of the 75+ bands.
- **Coding: 60/100.** Independent AI Coding Daily harness: 46.65/80 (#43, 58% of max, mid-pack between Gemini-3.1-Pro and GLM-5.3-Flash) with excellent code-quality subscores (16.98/16.67 of 20) but near-zero bug finding (2.4/20) and Go shipping-quotes (0.9/5); no SWE-bench/LiveCodeBench figures exist to justify the 65+ band.
- **Cost efficiency: 95/100.** Even paid, $0.30/$1.20 with $0.006 cached sits below the methodology's ~$0.60/$2.20 ≈ 92 anchor, and models.dev lists a $0 OpenCode free slot (time-limited, not re-verified) — promotional pricing is the only caveat.
- **Overall Score: 67.6/100.** Mean of the five non-cost dims (60+58+95+65+60)/5 = 67.6 — a cheap 1M-context multimodal agent preview; unmeasured reasoning is the main drag.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-22
- Method: fresh public web research (official LongCat change log + X announcement, models.dev TOML, opencode.ai data catalog, BenchmarkList, AI Coding Daily leaderboard, Vercel AI Gateway coverage, llmperks, There's An AI For That); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
