# Ling 3.2 Flash — findings by DeepSeek 4.1 Flash

- Source: Ant Group (Ant Ling/InclusionAI)/Ling-3.2-flash
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Ling's native-multimodal Mixture-of-Experts flash model (560B total / 25B active), released 2026-11-05 with a 1M-token context and native image/text/video input — positioned for visual reasoning, multimodal long-horizon agents, 3D interaction, and medical/document work at flash-tier pricing.
- **Provider / access:** Ant Bailian platform API (OpenAI- and Anthropic-compatible protocols); announced on OpenRouter as `inclusionai/ling-3.2-flash` (not yet visible in the live OpenRouter models API as of 2026-11-06). Free for the first two weeks after launch.
- **Release / knowledge:** 2026-11-05; knowledge cutoff not stated.
- **IDs:** `ling-3.2-flash` (Ant Bailian); announced OpenRouter route `inclusionai/ling-3.2-flash`.
- **Context window:** 1M tokens (review pages / AI Index tracker); max output not stated.
- **Modalities:** native text, image, and video in; text out; multimodal agent tooling (model card details pending on official pages).
- **Pricing (as of 2026-11-06):** $0.30/M in, $0.90/M out; free during the first two weeks on the launch platforms.
- **Architecture:** Mixture-of-Experts, 560B total / ~25B active parameters; vision integrated natively into the architecture (not a bolted-on module). Same size bracket as Ling-3.1-flash. Open-weights status not confirmed on official pages.

### Raw benchmarks found

> Fresh release (2026-11-05) — all figures currently vendor-reported on launch coverage; no independent leaderboard rows found yet.

Agent / tool use:

- ZEROBench (Sub): **43.71** vs Claude Opus 5 (max) 39.52 *(vendor-reported)*
- Vision2Web: **85.86%** vs Claude Opus 5 (max) 80.20% *(vendor-reported; web-agent tasks)*
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found (third-party harnesses not yet published)

Reasoning / knowledge:

- No GPQA Diamond / HLE / LCR / CritPt rows found yet for this ID
- Visual reasoning claims: outperforms Claude Opus 5 (max) on OmniDocBench 1.5 (**92.21** vs 90.56), ZEROBench (Sub) (43.71 vs 39.52), Vision2Web (85.86 vs 80.20) *(vendor-reported)*

Coding:

- DesignArena "image-to-frontend" arena: **Elo 1,238**, top ten alongside Meta/DeepSeek/Anthropic entries *(tracker-reported)*
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- 1M-token context claimed; no MRCR/RULER/AA-LCR retrieval measurements published yet
- AI Index tracker: "partly verified" record; "isn't on any leaderboard we cite yet" (as of 2026-11-06)

### Normalized scores (1–100)

- **Tool use: 60/100.** Strong vendor signals on multimodal agent work (Vision2Web 85.86, long-horizon agent claims) but zero standard harness rows (TB2.1/Tau3/GDPval) — mid band, capped by missing independent harnesses.
- **Reasoning: 60/100.** No GPQA/HLE/CritPt published; vendor-reported wins over Claude Opus 5 (max) are on visual/document benchmarks, which supports upper-mid at best without text-reasoning harnesses.
- **Context window: 96/100.** 1M-token tier (methodology ≥1M = 95–100); no retrieval-at-length measurement yet to justify 100.
- **Multimodal: 88/100.** Native text + image + video in, text out, with 3D and medical-document strengths — in the video-capable band (75–90).
- **Coding: 64/100.** Top-ten DesignArena image-to-frontend Elo points to strong frontend generation, but no SWE-bench/LiveCodeBench/SciCode evidence; capped at mid.
- **Cost efficiency: 94/100.** $0.30/$0.90 per 1M sits between the ~$0.10/$0.20 top band and the ~$0.60/$2.20 ≈ 92 anchor; free for the first two weeks (time-limited).
- **Overall Score: 74/100.** Half-up mean of the five quality dims (60+60+96+88+64)/5 = 73.6 → 74. Provisional: all rows are vendor-reported on a two-day-old release; re-check independent harnesses as they publish. Best fit: cheap long-context multimodal agents and document/3D understanding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: public internet research (launch coverage, ChengRang review, AIBase news, AI Index tracker, OpenRouter/Artificial Analysis/BenchmarkList probes); scores are normalized 1–100 interpretations, not official vendor scores; vendor-reported figures are labelled as such.
- Reference URLs:
  - [Ant Bailing Ling-3.2-flash — AI Tool Review (ChengRang)](https://chengrang.com/tools/en/ling-3-2-flash.html)
  - [Ant Bailing Releases Ling 3.2 Flash — AIBase News](https://news.aibase.com/news/32130)
  - [Ling-3.2-flash — price, specs and scores (AI Index)](https://ai.gotry.io/models/ling-3-2-flash)
  - [Ant Group releases Ling-3.2-flash — AI Index news](https://ai.gotry.io/models/ling-3-2-flash) *(tracker record, partly verified)*
  - [Ling-3.2-flash — LLM Stats (stub, no rows yet)](https://llm-stats.com/models/ling-3.2-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
