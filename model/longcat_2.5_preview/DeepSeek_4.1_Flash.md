# LongCat 2.5 Preview — findings by DeepSeek 4.1 Flash

- Source: Meituan / LongCat-2.5-Preview (`meituan/longcat-2.5-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's multimodal successor to LongCat 2.0 — same ~1.6T/~48B MoE scale and 1M window, but with image understanding folded into the base model and post-training retooled for long-horizon agentic work across terminals, browsers, GUIs, spreadsheets and design tools (launched 2026-09-25).
- **Provider / access:** LongCat API Platform (OpenAI-compatible Chat Completions and Anthropic-compatible Messages); also routed through third-party gateways (OpenRouter, NanoGPT); free preview on OpenCode Zen. Meituan says it works with Claude Code, Codex, OpenClaw, OpenCode and Kilo Code.
- **Release / knowledge:** Released 2026-09-25 (API); knowledge cutoff not disclosed.
- **IDs:** `meituan/longcat-2.5-preview` (`longcat-2.5-preview` on NanoGPT / the LongCat platform; this repo's folder id is `opencode/longcat_2.5_preview`). Priced and identified as a preview, not a separate "Free" SKU.
- **Context window:** 1,048,576 tokens in (LongCat docs / NanoGPT / OpenCode Data), **131,072 (128K) max output** (NanoGPT "131.1K"; LongCat quick-start lists 128K for both 2.5 and 2.0).
- **Modalities:** text and image in; text out — native image understanding in the base model. Video is documented as trainable / usable by public URL, but the published chat-completions reference still shows only plain-text content, so treat video input as unconfirmed. Thinking toggle (`enabled`/`disabled`).
- **Pricing (as of 2026-10-01):** limited-time API rates **$0.30 uncached / $0.006 cached / $1.20 output per 1M** (list $0.75 / $0.015 / $2.95); **free** on OpenCode Zen during the preview. Existing users received a 5M-token grant.
- **Architecture:** MoE, ~1.6T total / ~48B active parameters (~3% active), DiNA multimodal joint modelling and dlp speculative decoding; weights not released for 2.5 (2.0 was open — that status does not carry over).

### Raw benchmarks found

Agent / tool use:

- AI Coding Daily LLM Coding Leaderboard (evaluated 2026-09-28, tested with OpenCode): **44.25 / 60 total points, rank #34** — per-project: Laravel 16.98, React-TS 16.67, CSV Import 3, Offline Sync 2.7, Bank Feed 4, Shipping Quotes 0.9.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval: **no verified public score found** (Meituan published none and independent reviewers confirm none).

Reasoning / knowledge:

- GPQA Diamond / HLE / AA-LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found**.

Coding:

- AI Coding Daily LLM Coding Leaderboard: **44.25/60, #34** (see above; weakest on the Offline Sync and Shipping Quotes projects).
- SWE-bench Verified / SWE-bench Pro / SciCode / LiveCodeBench / DeepSWE: **no verified public score found**.

Long context:

- 1M-token window and 128K output are vendor/aggregator documented; no MRCR/RULER/GraphWalks retrieval value found: **no verified public score found**.

Usage context (not a benchmark): OpenCode Data ranks it **#7** by OpenCode token volume (~2.4T tokens, ~40K users, 96% cache-hit ratio) as of 2026-10-01.

### Normalized scores (1–100)

- **Tool use: 66/100.** Real harness integrations exist (OpenCode / Claude Code / OpenClaw) and it is a top-7 OpenCode model by volume, but the only measured datapoint — a coding-leaderboard total with near-zero scores on two agentic projects — keeps it mid-tier; no Terminal-Bench/Tau3/GDPval.
- **Reasoning: 68/100 (provisional).** No reasoning benchmark is published; held at the LongCat 2.0 level (same scale/family: GPQA 78.0%, AA-LCR 65.0%) as the closest proxy and clearly marked provisional.
- **Context window: 95/100.** Native 1M-token input window (≥1M band). Held at 95 because no retrieval benchmark confirms ≥98% at 512K+.
- **Multimodal: 65/100.** Native image understanding added to the base model (+image-in band = 60–70); video input is documented but unconfirmed in the API reference, so it stays in the image band.
- **Coding: 64/100.** AI Coding Daily total 44.25/60 (#34) with two sub-projects near zero is genuinely mid-pack; no SWE-bench / SciCode number exists to lift it.
- **Cost efficiency: 94/100.** Evaluated on the limited-time/free tier ($0.30/$1.20, or $0 on Zen); the higher list rate ($0.75/$2.95) would score nearer 88.
- **Overall Score: 72/100.** (66 + 68 + 95 + 65 + 64) / 5 = 71.6 → 72. Best fit: cheap/free long-context multimodal agent experimentation — not production-critical measured coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research from zero (TechNode, explainx, eyestech and ai-all launch/vision coverage, AI Coding Daily LLM Coding Leaderboard, OpenCode Data, NanoGPT model page, LongCat API docs); no benchmark value invented — reasoning marked provisional from a same-family proxy.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4.md`, using the same headings.
