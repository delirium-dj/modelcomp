# LongCat-2.5-Preview — findings by Mimo v2.6 Flash

- Source: Meituan/LongCat-2.5-Preview (`opencode/longcat-2.5-preview-free`)
- Date: 2026-10-16 (UTC) — second pass (first pass 2026-10-02; user-approved enrichment update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's preview-generation LongCat MoE coding/agentic model (released 2026-09-25), the successor to open-weight LongCat-2.0; headline change is native image understanding on top of a 1M-token window, aimed at long-horizon terminal/browser/desktop/spreadsheet/design agent work. Proprietary preview — no weights released (unlike 2.0's MIT).
- **Provider / access:** LongCat API Platform (`https://api.longcat.chat/openai` OpenAI-compatible and `https://api.longcat.chat/anthropic` Anthropic-compatible) plus LongCat Chat UI; also served free on OpenCode Zen (`https://opencode.ai/zen/v1/chat/completions`, Chat Completions). models.dev lists NanoGPT (`nano-gpt/longcat-2.5-preview`) and OpenCode Go mirrors.
- **Release / knowledge:** 2026-09-25 (vendor changelog); predecessor LongCat-2.0 2026-06-30. Knowledge cutoff not published.
- **IDs:** `meituan/longcat-2.5-preview`; **Free ID on Zen: `opencode/longcat-2.5-preview-free`** ($0/$0, unlimited, "free for a limited time", zero data retention per OpenCode privacy table).
- **Context window:** 1,000,000–1,048,576 input / 131,072 max output (models.dev catalogue, NanoGPT, Blackbox listing) — no long-context retrieval measurement published.
- **Modalities:** text + image in; text out; **vendor docs now also document video input alongside text** (agmazon/Gardenee read of the "visual understanding" docs page, checked 2026-10-08 — not yet reflected in models.dev metadata; treated as documented-but-unconfirmed); reasoning yes (per-request `thinking` toggle, default on, interleaved `reasoning_content`); tool calls yes; JSON/structured output supported; OpenAI + Anthropic wire formats. No audio. No vision benchmark of any kind exists.
- **Pricing (as of 2026-10-16):** direct platform **$0.30 in / $1.20 out per 1M** ($0.006 cached input) — vendor table titled "Discounted Price (limited-time)", still in effect Oct 8; **5M free tokens for existing users** (new); NanoGPT $0.75/$2.95. **OpenCode Zen `longcat-2.5-preview-free` still present in the live catalogue (checked 2026-10-16)** — but agmazon describes the OpenCode offer as a "two-week free run" from launch, so the $0 window may lapse without notice; Zen free tier = zero data retention per OpenCode privacy table.
- **Architecture:** **~1.6T total / ~48B active sparse MoE — now confirmed by Meituan LongCat's official X account** (per agmazon 2026-10-08; first pass had it only from trade coverage). 1M context / 128K max output (agmazon) vs 131,072 (catalogues). Closed weights — no technical report, model card, or benchmarks published for 2.5; weights remain unreleased (unlike 2.0's MIT).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.1 / 4.0 / Tau3-Banking / GDPval-AA / Toolathon / MCP-Atlas / OSWorld: **no verified public score found** — re-confirmed 2026-10-16: BenchmarkList shows **0 benchmark rows / "Meituan published no benchmarks for this preview... no independent evaluation had been confirmed"** and Artificial Analysis still has no page (404)
- Agentic proxy — AI Coding Daily **LLM Coding Leaderboard** run: model-and-harness config scored **44.25 / 60 total points, rank #34**, evaluated 2026-09-28 with the **OpenCode** CLI agent across 24 multi-project coding prompts (aicodingdaily.com/model/longcat-2-5-preview; 16:50 avg per prompt, video review attached)
- **NEW independent (revised leaderboard scale):** same leaderboard later scored **46.65 / 80 points, rank #36** (via agmazon 2026-10-08 — the suite grew from 60 to 80 total points; standing essentially unchanged)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / BenchLM: **no verified public score found** — no Artificial Analysis page exists for this model as of 2026-10-02

Coding:

- **AI Coding Daily LLM Coding Leaderboard: 44.25 / 60 points, rank #34 of the leaderboard** (aicodingdaily.com, evaluated 2026-09-28, OpenCode harness) — points-per-project 16.98, Laravel code quality 16.67/20, CSV import (PHP) 3/5, offline sync (PHP) 2.7/5, bank feed (Dart/Flutter) 4/5, shipping quotes (Go) 0.9/5; sits between Qwen 3.8 27B (45.05, #33) and GLM-5.3-Flash (42.82, #35); leader GPT-6.1-Sol 58.1
- SWE-bench Verified / Pro / Multilingual / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** (BenchmarkList 0 rows, re-confirmed 2026-10-16)
- **NEW independent:** OpenVibeEval frontend suite (8 runs, 2026-09-27, OpenCode harness): **Avg. Accessibility 65/100** — run spread 28–100 (Dashboard 49, Landing 35, Trading Terminal 48, Digital Garden 100, Arcade 93, Storytelling 28, Canvas 70, Synth 100); labeled "Pre-release" (https://openvibeeval.com/models/longcat-v2-5-preview/)
- Vendor changelog claims "outstanding on code generation, code understanding and automated programming" with no numbers (Meituan changelog 2026-09-25); agmazon's Oct 8 verdict: "no official benchmarks, weights, or list price — treat as unmeasured"

Long context:

- 1M-token window documented (models.dev / Meituan docs); MRCR / RULER / Long-Context Recall: **no verified public score found**

Multimodal:

- Image input supported (vendor changelog; models.dev `attachment: true`); MMMU / MathVision / CharXiv: **no verified public score found**

### Explicitly NOT attributable to this model

LongCat-2.0's published figures (Terminal-Bench 2.1 70.8%, SWE-bench Pro 59.5%, SWE-bench Multilingual 77.3%, GPQA 88.9, AA Index 19) belong to the June-2026 open-weight checkpoint and are not transferred here; comparison-table figures like "AA Coding 68.8 / GPQA 94.1%" in OrcaRouter's 2.5 vs Gemini 3.1 Pro article belong to the Gemini 3.1 Pro column.

### Normalized scores (1–100)

- **Tool use: 63/100.** Unchanged — the only agentic evidence remains the OpenCode-harness leaderboard runs (44.25/60 #34, revised 46.65/80 #36 — mid-pack both ways); zero Terminal-Bench/Tau/GDPval/OSWorld rows (BenchmarkList "0 benchmarks", AA 404) keeps the cap below 70.
- **Reasoning: 55/100.** Unchanged — still zero reasoning benchmarks for this checkpoint (no GPQA/HLE/LCR/Index anywhere; AA page absent as of 2026-10-16); low-mid band on lab positioning (official 1.6T MoE lineage) plus mid-pack leaderboard showing.
- **Context window: 95/100.** Unchanged — ≥1M input / 128K–131K output re-confirmed (agmazon + catalogues) keeps it in the ≥1M tier floor; no MRCR/RULER retrieval measurement exists to go higher.
- **Multimodal: 70/100.** (Was 65.) Image input was already band-correct (60–70); vendor docs now additionally document **video input** alongside text (agmazon's Oct 8 read of the visual-understanding docs) — moved to the top of the image band, but deliberately held below the +video/PDF band (75–90) because the video path is unconfirmed in catalogue metadata and there is zero vision benchmark (no MMMU/MathVision/Video-MME) to anchor it.
- **Coding: 68/100.** Unchanged — two independent proxies now tell the same mid-pack story (AI Coding Daily 46.65/80 #36; OpenVibeEval accessibility 65/100 with 28–100 run variance), but with no SWE-bench/LiveCodeBench/SciCode row the 65–75 mid band still fits.
- **Cost efficiency: 100/100.** Unchanged — the evaluated Zen free ID is still in the live catalogue (2026-10-16) at $0/$0 with zero retention; caveats added: agmazon calls the OpenCode offer a "two-week free run" (may lapse), direct $0.30/$1.20 is a labeled limited-time discount, plus 5M free direct tokens. Not counted in Overall.
- **Overall Score: 70/100.** (Was 69 on 2026-10-02.) Mean of the five non-cost dims (63 + 55 + 95 + 70 + 68) / 5 = 70.2 → 70 — only Multimodal moved (+5, documented video input); every other dim re-confirmed by a three-source audit that found **still-zero official benchmarks** (BenchmarkList, agmazon, AA-404). Best-fit: free-tier 1M-context coding/agent daily driver for image-aware repo work when measured evidence isn't required; escalate to benchmarked models for high-stakes correctness.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research, second pass (first pass 2026-10-02) across independent sources — BenchmarkList profile (https://benchmarklist.com/models/meituan-longcat-2.5-preview/ — 0 benchmark rows), agmazon/Gardenee deep-dive checked 2026-10-08 (https://agmazon.com/blog/articles/technology/202610/longcat-2-5-preview-complete-guide-en.html — official-X 1.6T/48B, video docs, 46.65/80 leaderboard, "no official benchmarks"), OpenVibeEval model page (https://openvibeeval.com/models/longcat-v2-5-preview/ — a11y 65/100 × 8 runs), Artificial Analysis 404 re-check, live OpenCode Zen catalogue re-check 2026-10-16. Conflicts compared (128K vs 131,072 output; leaderboard 44.25/60 vs 46.65/80 scale change; video documented vs catalogue metadata). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
