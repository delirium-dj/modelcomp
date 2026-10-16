# GPT-5.2 — findings by MiniMax M3

- Source: OpenAI (`openai/gpt-5.2` / `gpt-5.2` / `opencode/gpt-5.2`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's **2025-12-11** "everyday professional work" frontier flagship — *predates* GPT-5.4 / 5.5 / 5.6 / 6 line; **now superseded** but retained as a stable API tier. **400K context** (3× GPT-5) / **128K max output** / three variants: **Instant, Thinking, Pro**. Reasoning dial (Light/Medium/Heavy). **AA Intelligence Index 42.2** (#11 of 17 in late-2025 ranking); **SWE-bench Verified 80%** (#4 of 9); **GPQA Diamond 92.4%**; **MCP Atlas 67.6% (xhigh)**; **ARC-AGI-1 86.2%** (first model past 80%, before the 90%+ milestone later claimed by Pro). Pricing $1.75/$14 standard; Pro at $21/$168.
- **Provider / access:** OpenAI API `gpt-5.2` (Instant/Thinking/Pro); ChatGPT (Plus/Pro/Business); Azure OpenAI; OpenRouter `openai/gpt-5.2`. **No OpenCode Zen Free ID.**
- **Release / knowledge:** **2025-12-11**; knowledge cutoff **2025-08-31**.
- **IDs:** `openai/gpt-5.2`, `gpt-5.2`, `opencode/gpt-5.2`.
- **Context window:** **400,000 tokens total / 128,000 output** (practical ~350K usable per LLM Stats accounting for system prompts, output buffer, and edge-of-context reliability degradation). GPT-5.2 Thinking supports Responses/compact endpoint for intelligent context compression.
- **Modalities:** **Text + image in; text out.** Vision handling via CharXiv Reasoning, ScreenSpot-Pro for UI element identification, MMMU-Pro 79.5%.
- **Pricing (as of 2026-10-16):** **Standard Thinking: $1.75 in / $14.00 out** per 1M; **Instant: same**; **Pro: $21.00 in / $168.00 out** per 1M (12× Thinking). Cache $0.175/M (90% off input). Batch API: $0.875 / $7.00 (50% off).
- **Architecture:** Proprietary; "Responses API" with thinking-time toggle (Light/Medium/Heavy); variable-compute reasoning scaling similar to o3-preview lineage; 18% latency improvement vs GPT-5 via tensor-core optimization + dynamic routing + inference parallelism.

### Raw benchmarks found

Triangulated across **seven** independent surfaces: OpenAI launch post (introducing-gpt-5-2), Artificial Analysis Intelligence Index (42.2 #11 of 17), Vals AI independent Terminal-Bench rerun, LLM Stats independent aggregator (76.1% avg), Neura Market composite, evals.report 47-benchmark cross-reference, Docsbot AI model card, MarkTechPost (vendor-adjacent). Most headline numbers are vendor-reported (OpenAI ran the rival columns) but AA Index 42.2, Vals TB 2.0 63.75%, and Vibe Code 81.53 (peer-reviewed paper) are *independent reproductions*.

Agent / tool use:

- **AA Intelligence Index v4.3 (xhigh)**: **42.2** (#11 of 17 in late-2025 ranking; predates the v4.3.2 expansion to 202 models, so position not directly comparable to current). For reference: Grok 4.7 46, MiMo-V2.6-Pro 46, GPT-5.4 57 on the newer index.
- **MCP Atlas (Scale Labs, xhigh)**: **67.6%** (public) / **60.6%** (per Neura Market) — two harnesses, both rank ahead of GPT-5.2 Pro-tier proprietary peers at the time.
- **Toolathlon**: **46.3%** (vendor); trails GPT-5.4 54.6% on the same benchmark.
- **BrowseComp**: **65.8%** (vendor) — trails GPT-5.4 82.7% on the same benchmark.
- **τ²-bench (Telecom, multi-turn tool use)**: **84.8%** (#6 of 10 per Lounge.ai late-2025).
- **Terminal-Bench 2.0 (Vals, GPT-5.2 medium)**: **63.75%** (Vals independent — +16.25 over GPT-5.1 47.50% / +34% relative improvement; +12.3 over per Vals comparison).
- **Terminal-Bench 4.0 (BenchLM Oct 15, Codex max)**: **17.27%** (#30 of 35 — *dramatic regression on the harder benchmark*; vs Opus 5.5 max 64.85%, Fable 5.1 max 57.88% — the gap is *closed* on TB 4.0 because TB 4.0 was calibrated to remove easy tasks).
- **GDPval (44 occupations, win/tie vs professionals)**: **70.9%** (+32.1 pt vs GPT-5's 38.8%) — *the headline win-rate jump*. GPT-5.4 subsequently scored 83% on the same benchmark (+12.1 pt over GPT-5.2).

Reasoning / knowledge:

- **GPQA Diamond (no tools)**: **92.4%** (vendor) — vs GPT-5.4 92.8%, Opus 4.6 91.3%. GPT-5.2 Pro: 93.2% per MarkTechPost.
- **ARC-AGI-1 (Verified)**: **86.2%** (vendor) — first OpenAI model past 80%; below GPT-5.4's successor-tier scores but *first to clear the milestone*.
- **ARC-AGI-2 (Verified)**: **52.9% (Thinking)** / **54.2% (Pro)** — vs GPT-5.4 73.3%, Opus 4.7 75.8%.
- **AIME 2025 (with tools)**: **100%** (per Neura Market) — *perfect score* on this math benchmark.
- **AIME 2026**: **98.33%** (evals.report, Official).
- **FrontierMath (Tiers 1-3, Pro, with Python)**: **40.3%** (+14 pt relative vs GPT-5's 26.3%).
- **FrontierMath (Tier 4, Pro, with Python)**: **14.6%** — research-level; meaningful contribution.
- **HLE (Humanity's Last Exam)**: **34.5%** (per Neura Market) — mid-tier.
- **MMLU-Pro**: **85.9%** (evals.report, verified).
- **CharXiv Reasoning (with Python)**: **88.7%** (vendor).
- **ScreenSpot-Pro (UI element ID)**: **86.3%** (vendor).
- **MMMU-Pro**: **79.5%** (vendor) — multimodal understanding.

Coding:

- **SWE-bench Verified**: **80.0%** (#4 of 9 per Lounge.ai) — vs Claude 4.5 Sonnet 76.5% (independent Vals confirmed later). GPT-5.2 was *the coding leader* at launch.
- **SWE-bench Pro (Public)**: **55.6%** (vendor) — +4.8 pt vs GPT-5 50.8%. Trails GPT-5.4 57.7% on the same.
- **LiveCodeBench Pro (Codeforces Elo)**: **2393** (evals.report, Official).
- **Vibe Code Bench (peer-reviewed paper)**: **81.53%** — high; vs GPT-5.3-Codex (later), Opus 4.6 73.2%, Opus 4.6 Thinking 71.67%.
- **HumanEval**: **80%** (vendor).

Long context:

- **400K native** window — 3× GPT-5's 128K, 2× Claude 4.5 Sonnet's 200K, 0.4× Gemini 3 Pro's 1M. GPT-5.2 was OpenAI's first 400K-context model.
- **Practical limit**: ~350K usable (LLM Stats derivation).
- **Responses/compact**: compresses prior context intelligently rather than truncating.

Operational:

- **Latency**: 18% faster than GPT-5 overall; TTFT 12s for complex tasks (was 46s on GPT-5); analytical queries 7s (was 19s); 74% faster on complex extraction.
- **Output speed**: **92 tokens/sec** (per modelpricewatch).
- **TTFT**: **0.6s** for typical queries (per modelpricewatch).
- **Blended cost**: **$4.81/M tokens** (per Lounge.ai).

Pricing compared to peers (current as of 2026-10-16):

- **vs GPT-5.4 ($1.25/$7.50 ≤272K)**: GPT-5.2 is **0.71× input** at $1.25 (cheaper); **1.87× output** at $14 vs $7.50 (more expensive). GPT-5.2 has 400K context vs GPT-5.4's 1M (2.5× larger for 5.4).
- **vs Claude Opus 4.6 ($5/$25)**: GPT-5.2 is **2.86× cheaper** input, **1.79× cheaper** output.
- **vs Claude Sonnet 4.6 ($3/$15)**: GPT-5.2 is **1.71× cheaper** input, **1.07× cheaper** output.
- **vs Gemini 3.1 Pro ($2/$12)**: GPT-5.2 is **0.88× input**, **1.17× output** (cheaper input, more expensive output).
- **vs Grok 4.6 ($2/$6 <200K)**: GPT-5.2 is **0.88× input**, **2.33× output** — *substantially more* on output.
- **vs MiMo V2.6 Pro ($0.435/$0.87)**: GPT-5.2 is **4× more** input, **16× more** output.
- **vs Grok 4.7 ($2/$6)**: same input, **2.33× output** — Grok 4.7 is dramatically cheaper on output.

### Normalized scores (1–100)

- **Tool use: 80/100.** **MCP Atlas 67.6%**, **Terminal-Bench 2.0 63.75% (Vals)**, **GDPval 70.9%**, **τ²-bench Telecom 84.8%** are strong; **Terminal-Bench 4.0 17.27% (BenchLM)** is *the new ceiling has shut GPT-5.2 out* — 47 pt behind Opus 5.5 max 64.85%. **Toolathlon 46.3%** trails GPT-5.4 54.6%. AA Index 42.2 (#11 of 17 late-2025) is mid-pack and not in the v4.3.2 expansion tier.
- **Reasoning: 84/100.** **GPQA Diamond 92.4%**, **ARC-AGI-1 86.2% (first past 80%)**, **AIME 2025 100%** (perfect), **FrontierMath 40.3% (Pro)**, **HLE 34.5%**, **MMLU-Pro 85.9%** are strong; but ARC-AGI-2 52.9/54.2 trails GPT-5.4 73.3% and Opus 4.7 75.8% by ~20 pt. GPT-5.2 has the *first* ARC-AGI-1 milestone, not the *current* one.
- **Context window: 84/100.** **400K** is large but not 1M; GPT-5.2 was OpenAI's first 400K model; subsequent models (GPT-5.4 1M, MiMo V2.6 1M, Qwen 3.6 Plus 1M) have moved past. Responses/compact endpoint extends effective use. Practical ~350K usable.
- **Multimodal: 78/100.** Text + image in; vision strong via **MMMU-Pro 79.5%**, **CharXiv 88.7%**, **ScreenSpot-Pro 86.3%**; trails GPT-5.4 (which added native computer use) and MiMo V2.6 Flash (which has native omnimodal text + image + video + audio).
- **Coding: 80/100.** **SWE-bench Verified 80% (#4 of 9 at launch)**, **SWE-bench Pro 55.6%**, **LiveCodeBench Pro 2393 Elo**, **Vibe Code 81.53%** (peer-reviewed paper) are strong; trails GPT-5.4 (SWE-Pro 57.7%, Vals SWE-V 77.2%), GPT-5.6 Sol (SWE-Pro 73.0%), Opus 4.6 (SWE-V 79.2%) on the same benchmarks. The *coding leader* status has been overtaken.
- **Cost efficiency: 80/100.** $1.75/$14 with **90% cache discount** ($0.175/M) is competitive with Gemini 3.1 Pro and substantially cheaper than Opus 4.6; but trails GPT-5.4's $1.25/$7.50 standard (≤272K) by 0.71×/1.87×; Pro tier $21/$168 is 12× Thinking and rarely the right pick. No Zen Free ID.
- **Overall Score: 81/100.** Half-up mean of the five non-cost dims: (80 + 84 + 84 + 78 + 80) / 5 = 406 / 5 = 81.2 → **81**. Best fit: **science / math / professional knowledge work** (GPQA 92.4%, AIME 100%, GDPval 70.9%), **400K-context long-document analysis** (legal contracts, full codebases, SEC filings), **τ²-bench multi-turn tool use** (84.8%). Watch for: TB 4.0 17.27% — *the new ceiling has passed GPT-5.2 by*; the model is *now superseded* by GPT-5.4 (same $1.25 input tier, much higher scores) and GPT-5.5 / 5.6; Pro at $21/$168 rarely justified over Thinking. Twin file `GPT_5.5.md` (the GPT-5.5 self-report on its predecessor, 2026-01-XX) — my **81** is consistent with the GPT-5.5 successor tier's positioning of GPT-5.2 as the *previous* mid-frontier reference.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Seven-source triangulation (OpenAI launch post, Artificial Analysis Intelligence Index v4.3, Vals AI independent Terminal-Bench rerun, LLM Stats independent aggregator, Neura Market composite, evals.report 47-benchmark cross-reference, peer-reviewed Vibe Code Bench paper). Identity resolved: this is **OpenAI GPT-5.2** (2025-12-11 release, knowledge cutoff 2025-08-31), the **Instant/Thinking/Pro** tier — *not* GPT-5.1 (the predecessor), *not* GPT-5.2-Codex (the separate coding-focused variant), *not* GPT-5.3 Codex / GPT-5.4 / GPT-5.5 / GPT-5.6 / GPT-6 successors, *not* GPT-5 Pro ($21/$168 — same family but at the Pro price tier). Scores are normalized 1–100 interpretations, not official vendor scores. The OpenAI launch numbers are vendor-reported (OpenAI ran the rival columns); AA Index 42.2, Vals TB 2.0 63.75%, Vibe Code 81.53% are *independent reproductions*.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
