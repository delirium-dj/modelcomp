# Claude Sonnet 5.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`anthropic/claude-sonnet-5.5`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-28 day-0 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class model for well-scoped everyday work, released 2026-09-28 as a direct upgrade/successor to Claude Sonnet 5 — tuned for building features, fixing bugs and producing polished documents, slides and spreadsheets. Benchmarks were unpublished on day-0; by 2026-10-05/06 the system card, AA page and llm-stats rows carry 46 results on 38 benchmarks (TB4.0 70.6%, OSWorld 2.1 80%, Toolathlon 77.8%, AA Index 56 #2/225).
- **Provider / access:** Anthropic API (Messages), plus Google Vertex, Amazon Bedrock, Azure and Claude Platform on AWS (identical pricing, per OpenRouter provider table); aggregated on OpenRouter as `anthropic/claude-sonnet-5.5` (OpenAI-compatible route). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-28 (OpenRouter release date; BenchLM release timeline; Artificial Analysis page live same day). Knowledge cutoff **June 2026** (llm-stats official-source FAQ, 2026-10-06). System card: anthropic.com/claude-sonnet-5-5-system-card.
- **IDs:** `anthropic/claude-sonnet-5.5`; no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input / **128K max output** (llm-stats provider table 1.0M/128.0K, 2026-10-06 — output cap now verified); AA/OpenRouter confirm 1.0M.
- **Modalities:** text, image in; text out (AA: text+image); reasoning **yes** — thinking is always on, with effort as the depth/latency/cost lever (OpenRouter description; AA lists low/medium/high/xhigh/max API ids); tool calls yes; structured outputs yes (OpenRouter); JSON mode not confirmed in sources found. Speed: **127 tok/s** output, TTFT p95 **0.40 s** (AA/llm-stats live, 2026-10-06).
- **Pricing (as of 2026-09-28):** **$2.00 / 1M input, $10.00 / 1M output, $0.20 cached input (90% cache discount)** — identical across Anthropic, Vertex, Bedrock, Azure (OpenRouter); AA cost per Intelligence-Index task **$7.60** (#98/216). No free tier found.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found"; day-0 coverage is thin by nature.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (llm-stats via VectorWire, 2026-10-05 — the launch claim "beats Claude Opus 5.5 on Terminal-Bench 4.0" now has a number; vs Opus 5.5's 66.4%)
- Terminal-Bench-Science 0.1: **59.9%** (llm-stats via VectorWire, 2026-10-05; field leader G-6 Astra 68.1%)
- Toolathlon Verified: **77.8%** (llm-stats via VectorWire, 2026-10-05)
- OSWorld 2.1: **80.0%** (Anthropic system card, 2026-09-28) / **80.1% partial** (llm-stats) / **43.5% strict** (system card)
- Program Bench: **79.7%** (llm-stats via VectorWire, 2026-10-05)
- Terminal-Bench 2.1 / Tau3 / Tau2 / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found** (re-checked 2026-10-06 — VectorWire tracks 46 results / 38 benchmarks but none of these rows yet)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56, #2 of 225** <(AA v4.3.2, max with default fallback; AA model page 2026-10-06 — behind only Claude Opus 5.5's 58, ahead of Fable 5.1/GPT-6 Astra 53; cost per index task $7.67, 127 tok/s, very verbose 420M output tokens per run)>
- MILU: **91.60%**; OfficeQA **76.90%** / OfficeQA Pro **65.60%** (llm-stats via VectorWire, 2026-10-05)
- GPQA Diamond / HLE / LCR / MLCR / CritPt / MMLU-Pro: **no verified public score found** (component values still not broken out publicly, 2026-10-06)

Coding:

- SWE-bench Multimodal: **54.3%** (llm-stats via VectorWire, 2026-10-05)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** (re-checked 2026-10-06)

Long context:

- 1,048,576-token window documented (AA/OpenRouter); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image in (AA); MMMU / MMMU-Pro / MathVision / CharXiv: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 91/100.** Numbered rows now exist: TB4.0 **70.6%** (above Opus 5.5's 66.4), OSWorld 2.1 80.0% partial / 43.5% strict, Toolathlon Verified 77.8%, Program Bench 79.7%; capped by missing Tau3/GDPval/Claw/MCP rows and no TB2.1 figure.
- **Reasoning: 88/100.** AA Intelligence Index **56 (#2/225)** near-frontier and now double-sourced (AA page 2026-10-06); capped by absent GPQA/HLE/CritPt component values (index embeds them but no row is public).
- **Context window: 95/100.** 1,048,576 in / 128K out lands in the ≥1M tier (95–100); not 100 because no long-context retrieval measurement (MRCR/RULER) has been published.
- **Multimodal: 65/100.** Text + image in only (60–70 band); no multimodal benchmark value published (AA/llm-stats 2026-10-06 still show none).
- **Coding: 86/100.** TB-Science 59.9% (near Opus 5.5's 63.3), SWE-bench Multimodal 54.3%, Program Bench 79.7%, plus day-0 feature/bug-fix positioning — capped because SWE-bench Verified/LiveCodeBench/DeepSWE numbers still do not exist.
- **Cost efficiency: 74/100.** $2/$10 with a 90% cache discount ($0.20) sits between the methodology's ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; paid only (no Zen Free ID).
- **Overall Score: 84.8/100.** Mean of the five quality dims (91 + 88 + 95 + 65 + 86) / 5 = 425/5 = 84.8; best fit: affordable Sonnet-class daily driver for everyday agentic coding and documents — filled-gap re-rate 2026-10-06 (day-0 provisional was 81.6).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic release page + product page + pricing edits, ApIDog benchmarks explainer, o-mega cost breakdown, Anthropic comparison charts via Gemini 3.6 table); re-run 2026-10-06 (user-approved enrichment): AA model page (Index 56 #2/225, 127 tok/s, $7.67/task), VectorWire record (46 results / 38 benchmarks; llm-stats rows TB4.0 70.6, TB-Science 59.9, Toolathlon-V 77.8, OSWorld 2.1 80.0/43.5 strict, Program Bench 79.7, SWE-MM 54.3, MILU 91.6), llm-stats (128K out, cutoff June 2026) — day-0 gaps largely filled; Tool 78→91, Coding 82→86, Overall 81.6→84.8. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

