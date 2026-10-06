# Gemini 2.5 Flash Lite — findings by Qwen 3.8 27B

- Source: Google/Gemini 2.5 Flash-Lite (`opencode/google-gemini-2.5-flash-lite`) (same weights as google/gemini-2.5-flash-lite)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash-Lite
- **Short description:** Google DeepMind's lightweight, ultra-low-latency Gemini 2.5 model (released June 2025), optimized for cheap high-volume work — simple reasoning, extraction, summarization and classification — with a strong price-per-token position; the frontier of its 2025 "lite" tier, now well below the 2026 models this site tracks.
- **Provider / access:** OpenCode Zen `opencode/google-gemini-2.5-flash-lite` (evaluated entry; standard pricing, text in/out, 128K total per repo meta.json); native: Gemini API / Vertex AI `gemini-2.5-flash-lite` (1M context, text/image/audio/video in), OpenRouter `google/gemini-2.5-flash-lite` (Vertex providers, OpenAI/Anthropic-compatible endpoints; tools + response_format supported).
- **Release / knowledge:** released 2025-06-17 (BenchLeader, 6 versions under this name incl. 2506/09-2025 snapshots); knowledge cutoff not disclosed in sources fetched this pass.
- **IDs:** `opencode/google-gemini-2.5-flash-lite` (Zen, evaluated entry); `google/gemini-2.5-flash-lite` (OpenRouter); `gemini-2.5-flash-lite` (Gemini API/Vertex). No Free ID — standard paid tier.
- **Context window:** native 1,048,576 tokens (1M; OpenRouter/Vertex), max output 65,535; the evaluated Zen entry is curated at 128K total (repo meta.json — use the native endpoint for 1M work, same pattern as MiMo V2.5 Free)
- **Modalities:** evaluated Zen route: text in, text out. Native model: text/image/audio/video in, text out (multimodal per llm-stats + LMArena vision 1187). Reasoning: yes (thinking budget supported; "no reasoning" vs "thinking" configs measured). Tool calls: yes (OpenRouter accepts tools/tool_choice; BFCL measured).
- **Pricing (as of 2026-09-29, paid):** $0.10 in / $0.40 out per 1M; cached read $0.01/1M (prompt cache ~90% input discount) — Vertex/OpenRouter; blended $0.175/1M (BenchLeader). Chat reply ~$0.0002, agentic coding session ~$0.0076 (BenchLeader cost model).
- **Architecture:** Proprietary (Google DeepMind); parameters undisclosed. Speed: ~92 t/s sustained on OpenRouter traffic (267 t/s no-reasoning, 343 t/s thinking per BenchLeader), TTFT ~0.5s.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **2.3%** (no reasoning) / **4.5%** (thinking) — AA, via BenchLeader 2026-09-29; very weak
- Tau2-Bench Telecom: **19.0%** (no reasoning) / **18.4%** (thinking) — AA, via BenchLeader
- BFCL Overall: **36.9%** (rank 40 — Berkeley Function Calling Leaderboard)
- Tau3-Banking / GDPval-AA: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **47.4%** (thinking, AA) / **62.5%** (not stated, AA) / 30.9% (HELM) — harness spread
- HLE: **3.7%** (thinking, AA) / **6.8%** (not stated, AA)
- LCR: AA-LCR **32.0%** (no reasoning) / **55.7%** (thinking) — AA, via BenchLeader
- CritPt: **0.0%** (both AA configs)
- Artificial Analysis Intelligence Index: **6.7** (no reasoning) / **8.6** (thinking) — AA (2025-era index scale)
- BenchLeader composite: **48.3 / #402 of 740** (best "not stated" config, ±6.1; no-reasoning 41.3 #595, thinking 46.3 #456)
- Kagi LLM Benchmark: **40.5%** (#103); MMLU-Pro (HELM): **53.7%**; Omni-MATH (HELM): **48.0%** (#20)
- Omniscience: AA-Omniscience Index **−58.8** (no reasoning) / **−45.6** (thinking); accuracy 15.4%/17.9%, non-hallucination 12.2%/22.6% — heavy hallucination penalty

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- WeirdML: **35.2%** (#126 — WeirdML via Epoch); ALE-Bench **325.9** (#105 — Epoch); LMArena Coding **1382** (#204 — weak for the arena)
- SciCode / Vibe Code Bench: no verified public score found

Multimodal / instruction (supplementary):

- MMMU-Pro: **54.0%** (no reasoning) / **58.2%** (thinking) — AA, via BenchLeader; LMArena Vision 1187 (#88)
- IFBench: **31.5%** (no reasoning) / **49.9%** (thinking) — AA; IFEval (HELM) **81.0%**; WildBench (HELM) **81.8%**

Long context:

- 1M native window; retrieval evidence is weak: AA-LCR 32.0–55.7% (above) and Fiction.LiveBench 120K **21.9%** (#33 — fiction.live via Epoch); no MRCR at 512K+ found

### Normalized scores (1–100)

- **Tool use: 35/100.** TB Hard 2.3–4.5%, Tau2-Telecom ~19% and BFCL 36.9% are far below the 50–70 mid band (TB2.1 45–60%, Tau3 10–25%, GDPval 900–1200) — this lite model is not an agent; the 18–19% telecom score is its best tool-call evidence.
- **Reasoning: 42/100.** GPQA 47.4–62.5% straddles the 60–80% mid band, HLE 3.7–6.8% and CritPt 0.0% are at the floor, AA Index 6.7–8.6 (2025-era scale) and BenchLeader 48.3/740 confirm below-mid; a clean 2025 lite-tier model by 2026 standards.
- **Context window: 58/100.** The evaluated Zen entry is curated at 128K total (100K–200K band, 50–64; scored per the MiMo-V2.5-Free precedent that uses the Zen cap) — the native 1M window would score 95, so use the native endpoint for long-context work; weak AA-LCR/LiveBench retrieval caps even that.
- **Multimodal: 15/100.** The evaluated route is text in/out (repo meta.json) — 10–20 text-only band. Note: the native `gemini-2.5-flash-lite` endpoint accepts text/image/audio/video and would score in the 90–100 band; MMMU-Pro 54–58% shows its vision is basic even there.
- **Coding: 40/100.** No SWE-bench/LiveCodeBench data; WeirdML 35.2%, ALE-Bench 325.9 (#105) and a weak LMArena Coding rank (#204) put it in the low-40s — fine for single-function edits, not for repo-scale work.
- **Cost efficiency: 95/100.** $0.10/$0.40 with $0.01 cache reads is just shy of the ~$0.10/$0.20 (97–99) reference and among the cheapest fifth of tracked models; $0.0002 per chat reply makes it the right default for high-volume classification/extraction.
- **Overall Score: 38/100.** Mean of (35 + 42 + 58 + 15 + 40)/5 = 38.0. Best fit: a near-free workhorse for bulk text tasks (routing, extraction, summarization, simple math) on the Zen route; for agentic, long-context or multimodal work, use its native 1M omni endpoint or a stronger tracked model instead.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (BenchLeader model page data as of 2026-09-29 with per-benchmark sources — AA, HELM, Epoch, Vals, LMArena, fiction.live, WeirdML, Kagi; OpenRouter model docs; llm-stats; repo meta.json for the evaluated Zen entry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.md`, using the same headings.
