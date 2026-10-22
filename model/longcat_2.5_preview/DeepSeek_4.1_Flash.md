# LongCat 2.5 Preview — findings by DeepSeek 4.1 Flash

- Source: Meituan / LongCat-2.5-Preview (`meituan/longcat-2.5-preview`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `longcat-2.5-preview` (404; Meituan coverage limited to `longcat-flash-lite-sparse`); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-checked the launch claims against Meituan's official LongCat API docs (pricing + tools pages — https://longcat.ai/platform/docs/pricing/longcat-2.5), the Hugging Face `meituan-longcat` org (https://huggingface.co/meituan-longcat), BenchmarkList (https://benchmarklist.com/models/meituan-longcat-2.5-preview/), AI Coding Daily (https://aicodingdaily.com/model/longcat-2-5-preview), OpenCode Data (https://opencode.ai/data/meituan/longcat-2-5-preview), explainx.ai and Enera. Specs (~1.6T total / ~48B active MoE, 1M-token input, 128K/131,072 max output, text+image in / text out) and the limited-time rate ($0.30 uncached / $0.006 cached / $1.20 output per 1M) are corroborated by Meituan's own docs and ≥3 aggregators. **Still zero published or independently reproduced benchmark for the 2.5 model**: BenchmarkList reports "0 score rows" and "no independent evaluation had been confirmed"; explainx and Enera both state Meituan published no benchmark scores. The sole measured datapoint remains AI Coding Daily, whose leaderboard has since widened from /60 to /80 (a Bug-Finding project, max 20, was added) and now reports **46.65/80, rank #38, evaluated 2026-10-02** — the same evaluation the prior report logged as 44.25/60, rank #34. No dimension clears the bar for a change; scores are held with refreshed evidence. Not found / dead ends: benchlm.ai/models/longcat-2-5-preview → 404; llm-stats.com/models/longcat-2.5-preview → human-verification gate, no data; openrouter.ai/meituan/longcat-2.5-preview → 404.

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's multimodal successor to LongCat 2.0 — same ~1.6T/~48B MoE scale and 1M window, but with image understanding folded into the base model and post-training retooled for long-horizon agentic work across terminals, browsers, GUIs, spreadsheets and design tools (launched 2026-09-25).
- **Provider / access:** LongCat API Platform (OpenAI-compatible Chat Completions and Anthropic-compatible Messages); also routed through third-party gateways (Vercel AI Gateway per CloudPrice; OpenRouter/NanoGPT routes were cited earlier but the OpenRouter page now 404s). Free/preview on OpenCode Zen–Go. Meituan's tools docs list Claude Code, Codex, OpenCode, Cline, Kilo Code, Cherry Studio, Chatbox, CodeBuddy, OpenClaw, Hermes Agent, CC Switch and WorkBuddy.
- **Release / knowledge:** Released 2026-09-25 (API; Meituan X thread) — some aggregators (CloudPrice) list 2026-09-26; knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview` (`longcat-2.5-preview` on NanoGPT / the LongCat platform / Vercel AI Gateway; canonical aggregator id `meituan-longcat-2-5-preview`; this repo's folder id is `opencode/longcat_2.5_preview`). Priced and identified as a preview, not a separate "Free" SKU.
- **Context window:** 1,048,576 tokens in (LongCat docs / OpenCode Data / CloudPrice), **131,072 (128K) max output** (OpenCode Data "131K"; CloudPrice "131K"; Enera "131,072"; LongCat quick-start lists 128K for both 2.5 and 2.0).
- **Modalities:** text and image in; text out — native image understanding in the base model (OpenCode Data, CloudPrice). Video is a **conflict**: Enera lists "text, image, video (URL)", but CloudPrice's capability table marks Video unsupported and Meituan's chat-completions reference still shows only plain-text content — treat video input as unconfirmed. Thinking toggle (enabled/disabled; Enera: thinking on by default).
- **Pricing (as of 2026-10-11):** limited-time API rates **$0.30 uncached / $0.006 cached / $1.20 output per 1M** per Meituan's own pricing page (¥2 / ¥0.04 / ¥8); list $0.75 / $0.015 / $2.95 (explainx, not shown on the official discounted page). Free on OpenCode Zen–Go during the preview (OpenCode Data: $0 total spend through 2026-10-12). Existing users received a 5M-token grant.
- **Architecture:** MoE, ~1.6T total / ~48B active parameters (~3% active), DiNA multimodal joint modelling and dlp speculative decoding; weights not released for 2.5 (2.0 was open — confirmed: the `meituan-longcat` HF org hosts LongCat-2.0/INT8/FP8 but no 2.5 repo; that status does not carry over).

### Raw benchmarks found

Agent / tool use:

- AI Coding Daily LLM Coding Leaderboard (last evaluated 2026-10-02, tested with OpenCode — https://aicodingdaily.com/model/longcat-2-5-preview): **46.65 / 80 total points, rank #38** — per-project: Laravel Code Quality 16.98/20, React-TS Code Quality 16.67/20, Bug Finding Test 2.4/20, CSV Import (PHP) 3, Offline Sync (PHP) 2.7, Bank Feed (Dart/Flutter) 4, Shipping Quotes (Go) 0.9; avg 16:50 per prompt, cost N/A (subscription harness). The /80 ceiling replaces the prior /60 (a Bug-Finding project worth 20 was added); the six original sub-scores are unchanged, so this is a scale expansion, not a re-measured improvement.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval: **no verified public score found** — BenchmarkList lists 0 benchmark rows and states Meituan published none and no independent eval was confirmed; explainx and Enera concur.

Reasoning / knowledge:

- GPQA Diamond / HLE / AA-LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** (BenchmarkList has no rows; benchlm.ai model page 404s; llm-stats model page was behind a human-verification gate). Closest family datum: LongCat-2.0 (not 2.5).

Coding:

- AI Coding Daily: **46.65/80, #38** (see above; weakest on the new Bug-Finding project at 2.4/20, plus near-zero Offline Sync 2.7 and Shipping Quotes 0.9).
- SWE-bench Verified / SWE-bench Pro / SciCode / LiveCodeBench / DeepSWE: **no verified public score found** for 2.5. Family reference only: Enera reports LongCat-**2.0** scored **59.5 SWE-bench Pro** at its July open-source release — a 2.0 number, not carried over here.

Long context:

- 1M-token input and 128K/131,072 output are vendor/aggregator documented (LongCat docs, OpenCode Data, CloudPrice, Enera); no MRCR/RULER/GraphWalks retrieval value found: **no verified public score found**.

Multimodal:

- Text + image in, text out (OpenCode Data, CloudPrice; Meituan base model "image understanding"). Video unconfirmed (conflict above). No MMMU/vision benchmark found: **no verified public score found**.

Usage context (not a benchmark): OpenCode Data ranks it **#9** by OpenCode token volume (~2.3T tokens last week, ~160K unique users, 94.6% cache-hit, $0 total spend) as of 2026-10-12.

### Normalized scores (1–100)

- **Tool use: 66/100.** Real harness integrations exist (Meituan lists Claude Code, Codex, OpenCode, OpenClaw, Hermes, Kilo Code and more) and it is a top-9 OpenCode model by volume, but the only measured datapoint — a coding-leaderboard total with near-zero scores on two agentic projects — keeps it mid-tier; no Terminal-Bench/Tau3/GDPval was published or independently reproduced (BenchmarkList: 0 rows).
- **Reasoning: 68/100 (provisional).** No reasoning benchmark is published or independently reproduced for 2.5; held at the LongCat 2.0 family level (same scale/family) as the closest proxy and clearly marked provisional.
- **Context window: 95/100.** Native 1M-token input window (≥1M band) per Meituan docs and every aggregator checked; held at 95 because no retrieval benchmark confirms ≥98% at 512K+.
- **Multimodal: 65/100.** Native image understanding added to the base model (+image-in band = 60–70); video input is documented by one outlet (Enera) but contradicted by CloudPrice and unconfirmed in Meituan's API reference, so it stays in the image band.
- **Coding: 64/100.** AI Coding Daily 46.65/80 at rank #38 (2026-10-02) with Bug-Finding 2.4/20 and two original sub-projects near zero is genuinely mid-pack; no SWE-bench / SciCode number exists for 2.5 to lift it.
- **Cost efficiency: 94/100.** Evaluated on the limited-time/free tier ($0.30/$1.20, or $0 on Zen — OpenCode Data shows $0 spend through 2026-10-12); the higher list rate ($0.75/$2.95, explainx) would score nearer 88.
- **Overall Score: 72/100.** (66 + 68 + 95 + 65 + 64) / 5 = 71.6 → 72. Best fit: cheap/free long-context multimodal agent experimentation — not production-critical measured coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: live public-internet re-research (Bing + DuckDuckGo HTML sweeps; Meituan LongCat API docs pricing/tools pages; HF `meituan-longcat`; BenchmarkList; AI Coding Daily; OpenCode Data; explainx.ai; Enera; CloudPrice). No benchmark value invented — reasoning marked provisional from the same-family LongCat 2.0 proxy, and the AI Coding Daily change is labelled as a scale expansion rather than a re-measurement. Conflicts surfaced: release date (2026-09-25 official vs 2026-09-26 CloudPrice), video input (Enera video-URL vs CloudPrice unsupported), and the coding-leaderboard scale (/60→/80).
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4.md`, using the same headings.
