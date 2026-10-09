# LongCat-2.5-Preview — findings by Mimo v2.6 Flash

- Source: Meituan/LongCat-2.5-Preview (`opencode/longcat-2.5-preview-free`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's preview-generation LongCat MoE coding/agentic model (released 2026-09-25), the successor to open-weight LongCat-2.0; headline change is native image understanding on top of a 1M-token window, aimed at long-horizon terminal/browser/desktop/spreadsheet/design agent work. Proprietary preview — no weights released (unlike 2.0's MIT).
- **Provider / access:** LongCat API Platform (`https://api.longcat.chat/openai` OpenAI-compatible and `https://api.longcat.chat/anthropic` Anthropic-compatible) plus LongCat Chat UI; also served free on OpenCode Zen (`https://opencode.ai/zen/v1/chat/completions`, Chat Completions). models.dev lists NanoGPT (`nano-gpt/longcat-2.5-preview`) and OpenCode Go mirrors.
- **Release / knowledge:** 2026-09-25 (vendor changelog); predecessor LongCat-2.0 2026-06-30. Knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5-preview`; **Free ID on Zen: `opencode/longcat-2.5-preview-free`** ($0/$0, unlimited, "free for a limited time", zero data retention per OpenCode privacy table).
- **Context window:** 1,000,000–1,048,576 input / 131,072 max output (models.dev catalogue, NanoGPT, Blackbox listing) — no long-context retrieval measurement published.
- **Modalities:** text + image in; text out; reasoning yes (per-request `thinking` toggle, default on, interleaved `reasoning_content`); tool calls yes; JSON/structured output supported (Blackbox listing); OpenAI + Anthropic wire formats. No audio input claimed; video-by-URL reported by setup guides but not in models.dev metadata.
- **Pricing (as of 2026-10-02):** direct platform **$0.30 in / $1.20 out per 1M** ($0.006 cached input) — vendor flags this as a limited-time discount; **$0/$0 on OpenCode Zen Free** (unlimited, no published end date); NanoGPT $0.75/$2.95.
- **Architecture:** ~1.6T total / ~48B active sparse MoE (trade coverage of the 2026-09-25 listing, not a vendor parameter table); closed weights — no technical report or model card published for 2.5.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1 / 4.0 / Tau3-Banking / GDPval-AA / Toolathon / MCP-Atlas / OSWorld: **no verified public score found**
- Agentic proxy — AI Coding Daily **LLM Coding Leaderboard** run: model-and-harness config scored **44.25 / 60 total points, rank #34**, evaluated 2026-09-28 with the **OpenCode** CLI agent across 24 multi-project coding prompts (aicodingdaily.com/model/longcat-2-5-preview; 16:50 avg per prompt, video review attached)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM: **no verified public score found** — no Artificial Analysis page exists for this model as of 2026-10-02

Coding:

- **AI Coding Daily LLM Coding Leaderboard: 44.25 / 60 points, rank #34 of the leaderboard** (aicodingdaily.com, evaluated 2026-09-28, OpenCode harness) — points-per-project 16.98, Laravel code quality 16.67/20, CSV import (PHP) 3/5, offline sync (PHP) 2.7/5, bank feed (Dart/Flutter) 4/5, shipping quotes (Go) 0.9/5; sits between Qwen 3.8 27B (45.05, #33) and GLM-5.3-Flash (42.82, #35); leader GPT-6.1-Sol 58.1
- SWE-bench Verified / Pro / Multilingual / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**
- Vendor changelog claims "outstanding on code generation, code understanding and automated programming" with no numbers (Meituan changelog 2026-09-25)

Long context:

- 1M-token window documented (models.dev / Meituan docs); MRCR / RULER / Long-Context Recall: **no verified public score found**

Multimodal:

- Image input supported (vendor changelog; models.dev `attachment: true`); MMMU / MathVision / CharXiv: **no verified public score found**

### Explicitly NOT attributable to this model

LongCat-2.0's published figures (Terminal-Bench 2.1 70.8%, SWE-bench Pro 59.5%, SWE-bench Multilingual 77.3%, GPQA 88.9, AA Index 19) belong to the June-2026 open-weight checkpoint and are not transferred here; comparison-table figures like "AA Coding 68.8 / GPQA 94.1%" in OrcaRouter's 2.5 vs Gemini 3.1 Pro article belong to the Gemini 3.1 Pro column.

### Normalized scores (1–100)

- **Tool use: 63/100.** Only evidence is the OpenCode-harness agentic coding run (44.25/60, #34 — mid-pack among agent-driven leaderboard entries); no Terminal-Bench/Tau/GDPval numbers exist, which caps the score below the 70s.
- **Reasoning: 55/100.** Zero reasoning benchmarks published for this checkpoint and no AA/BenchLM page; scored at the low end of the mid band on lab positioning (frontier-class 1.6T MoE lineage) plus its mid-pack leaderboard showing, capped hard by absent GPQA/HLE evidence.
- **Context window: 95/100.** ≥1M input (1,048,576) with 131,072 output puts it in the top tier band (95–100); held at 95 because no retrieval-quality measurement (MRCR/RULER) exists.
- **Multimodal: 65/100.** Image input + text output lands in the +image-in band (60–70); no audio/video-in per catalogue metadata and no MMMU-style score to justify higher.
- **Coding: 68/100.** The one measured number — 44.25/60 (#34) on a 24-prompt multi-project leaderboard with an OpenCode agent — places it mid-pack (near MiMo-V2.6 Flash 45.48, above GLM-5.3-Flash 42.82); no SWE-bench/LiveCodeBench/SciCode corroboration, which caps it in the 65–75 mid band.
- **Cost efficiency: 100/100.** OpenCode Zen Free ID `opencode/longcat-2.5-preview-free` is $0/$0 with unlimited use and zero retention; even the direct $0.30/$1.20 limited-time rate is far below the methodology's cheap anchors.
- **Overall Score: 69/100.** (63+55+95+65+68)/5 = 69.2 → 69 — best-fit: a free-tier 1M-context coding/agent daily driver for image-aware repo work when measured evidence isn't required; escalate to benchmarked models for high-stakes correctness.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (AI Coding Daily leaderboard + methodology page, models.dev catalogue, Meituan LongCat changelog/pricing, OpenCode Zen docs, NanoGPT/Blackbox listings, OrcaRouter/Eyestech/creativeainews for the non-attribution check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
