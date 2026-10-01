# LongCat 2.5 Preview — findings by GLM 5.3

- Source: Meituan / LongCat (`meituan/longcat-2.5-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview (Free Zen tier: "LongCat 2.5 Preview Free")
- **Short description:** Meituan's trillion-scale-family multimodal reasoning model for coding and agentic workflows, adding image understanding on top of the LongCat 2.0 coding line. Top use case: long-context coding with image/document input; preview quality, expect churn.
- **Provider / access:** OpenCode Zen free tier `opencode/longcat-2.5-preview-free` (Chat Completions; reasoning toggle via `thinking.type = enabled|disabled`, interleaved `reasoning_content`); paid host `meituan/longcat-2.5-preview` on Vercel AI Gateway; also listed on Blackbox and nano-gpt.
- **Release / knowledge:** released 2026-09-26 (CloudPrice; free Zen relist same day); knowledge cutoff not stated publicly
- **IDs:** `opencode/longcat-2.5-preview-free` (Free, $0) / `meituan/longcat-2.5-preview` (paid)
- **Context window:** 1,048,576 tokens total; max output 131,072 (verified via Vercel AI Gateway model listing + CloudPrice)
- **Modalities:** text + image in; text out; reasoning optional thinking; function calling; prompt caching; structured outputs not listed
- **Pricing (as of 2026-10-01):** Free Zen tier $0 in / $0 out / $0 cached read (limited-time preview; zero-retention provider per Zen docs). Paid: $0.30 / 1M in, $1.20 / 1M out, $0.006 cached read (Vercel AI Gateway); nano-gpt relist $0.75/$2.95.
- **Architecture:** not officially disclosed for 2.5 Preview; family context — LongCat-2.0 is a 1.6T-param MoE (48B active, MIT license) per vendor/search-reported figures; 2.5 Preview is presumed trillion-scale MoE but unverified.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Closest proxy (provisional): AI Coding Daily agentic-coding projects with OpenCode harness — CSV Import (PHP) **3/5**, Offline Sync (PHP) **2.7/5**, Bank Feed (Dart) **4/5**, Shipping Quotes (Go) **0.9/5** (evaluated 2026-09-28)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA/BenchLM page for this ID as of 2026-10-01)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (predecessor LongCat-2.0 in-house: SWE-bench Pro 59.5, TB 2.1 70.8, SWE Multilingual 77.3 — different checkpoint, not usable for this ID)
- LiveCodeBench: **no verified public score found**
- SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- AI Coding Daily LLM Coding Leaderboard (OpenCode harness, evaluated 2026-09-28): **44.25 / 60 total (#34)** — Laravel Code Quality **16.98/20**, React-TS Code Quality **16.67/20**; avg time 16:50/prompt (slow), cost N/A (subscription)

Long context:

- no long-context retrieval reported (1.05M window verified via Vercel AI Gateway; no RULER / MRCR / GraphWalks score)

Multimodal:

- no verified public vision benchmark (no MMMU / MMMU-Pro score); image input capability verified via Vercel AI Gateway + CloudPrice listings.

### Normalized scores (1–100)

- **Tool use: 55/100.** No verified agentic benchmark (TB/Tau/GDPval/OSWorld all absent); native tool calling is verified, and the OpenCode-harness coding test shows usable but weak agentic project completion (Go task 0.9/5, Offline Sync 2.7/5) — provisional mid score, capped by zero direct evidence.
- **Reasoning: 55/100.** Reasoning ("optional thinking", interleaved reasoning content) is verified as a capability but completely unmeasured publicly (no GPQA/HLE/LCR/Index numbers) — provisional mid score pending official benchmarks.
- **Context window: 95/100.** 1,048,576-token window with 131K max output verified via Vercel AI Gateway — ≥1M tier; no published retrieval-quality measurement, so not 100.
- **Multimodal: 62/100.** Text + image input (verified listings: cross-modal Q&A, image content summarization), text-only output; image-in tier score, capped near the bottom of that band by zero published vision benchmarks.
- **Coding: 70/100.** The one verified benchmark (AI Coding Daily, OpenCode harness) shows strong code quality (Laravel 16.98/20, React-TS 16.67/20 — comparable to Muse Spark 1.3's 15.9/16.67 on the same harness) but weak agentic projects (44.25/60 overall, #34) and 16:50 avg time; capped by missing SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 100/100.** Evaluated tier is the Zen Free preview ($0 in / $0 out / $0 cached) — time-limited and zero-retention; paid fallback $0.30/$1.20 per 1M would score ~90.
- **Overall Score: 67/100.** (55 + 55 + 95 + 62 + 70) / 5 = 67.4 → 67. Best fit: free-tier long-context coding with image input while the Zen preview lasts; verify quality per-task — this is a preview checkpoint with almost no official benchmarks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01 UTC
- Method: public internet research (AI Coding Daily leaderboard, Vercel AI Gateway, CloudPrice, models.dev TOML, Blackbox); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
