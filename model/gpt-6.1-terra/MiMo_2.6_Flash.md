# GPT-6.1 Terra — findings by MiMo 2.6 Flash

- Source: OpenAI (`openai/gpt-6.1-terra` on OpenRouter; API id `gpt-6.1-terra`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra — OpenAI's fast, cost-efficient GPT-6.1 family model for visual understanding, computer use and everyday work tasks (drafting, form-filling, video editing, invoice processing). Succeeds GPT-5.6 Terra; not an alias. Six effort variants ship under one release (Max / Xhigh / High / Medium / Non-reasoning / Low) — this report covers the base `gpt-6.1-terra` (Max-level numbers where effort matters).
- **Short description:** "From visual understanding to action" — detailed visual reasoning plus precise computer use at ~50% of GPT-5.6 Terra / GPT-6.1 Sol API pricing; positioned as the cost-intelligence balance model below GPT-6.1 Sol and GPT-6 Astra.
- **Provider / access:** OpenAI API (`gpt-6.1-terra` on Responses, Chat Completions, Realtime, Batch); ChatGPT Work and Codex for Plus/Pro/Enterprise/Edu; Amazon Bedrock cross-Region profile (`us.openai.gpt-6.1-terra` / `global.openai.gpt-6.1-terra`); OpenRouter `openai/gpt-6.1-terra` (+ `:batch`, `-pro`). **Not on OpenCode Zen** (checked the live Zen list 2026-10-30 — only `gpt-5.6-terra` is listed) and no Free ID anywhere. Proprietary, closed weights (Epoch AI: ECI 168, rank 4/256).
- **Release / knowledge:** **2026-10-26** (OpenAI announcement, BenchLM, AI Release Tracker, Epoch); knowledge cutoff not published.
- **IDs:** `gpt-6.1-terra` (OpenAI), `openai/gpt-6.1-terra` (OpenRouter), `us.openai.gpt-6.1-terra` (Bedrock), variant ids `-pro`, `:batch`, `-xhigh`, `-high`, `-medium`, `-low`, `-non-reasoning`.
- **Context window:** **1M tokens** (AA release page "Context window 1M", ~1500 A4 pages; BenchLM and AI Release Tracker list 1.05M). Max output: not published on the pages checked.
- **Modalities:** **text + image in; text out** (AA technical specifications). The launch leans heavily on visual work (technical drawings, animated-film review, MMMU-Pro) but no audio/video *input* and no non-text output is published. Reasoning yes (explicit effort modes, `max` for published numbers); computer use yes.
- **Pricing (as of 2026-10-30):** **$1.00 / 1M input, $0.05 cached input, $5.00 / 1M output** (OpenAI announcement + AA) — 50% below GPT-5.6 Terra and GPT-6.1 Sol; AA measures **$0.96 per Intelligence Index task** with a **95% cache discount** (cheapest of the frontier class; vs Muse Wonder $4.52, Claude Opus 5.5 $5.98). ChatGPT plan allowances cover more tasks than GPT-5.6 Terra.
- **Architecture:** proprietary (undisclosed parameters); closed weights; Preparedness Framework "Critical" threshold in cybersecurity, keeps GPT-6 Astra's safeguards.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **60.0%** <(OpenAI launch — at medium effort +15 pts over GPT-5.6 Terra at ~⅓ cost, on par with GPT-6 Astra at 1/10 the price per token; BenchLM lists 60.0 from the same card)>
- OSWorld 2.1 Offline: **74.2%** <(OpenAI launch, computer use — beats GPT-5.6 Terra's best at medium effort)>
- Terminal-Bench 4.0: **50.3%** <(OpenAI, max effort — more than double GPT-5.6 Terra's 21.5%> **vs 55.6%** <(Artificial Analysis' own run — harness/effort difference, both listed)>
- Terminal-Bench-Science 0.1: **58.3%** <(OpenAI, max — surpasses GPT-6.1 Sol, within 5 pts of Claude Opus 5.5 at <1/5 the cost)>
- AutomationBench-AA: **60.2%** <(AA leaderboard)>; AA-Briefcase: **1402 Elo** <(AA)>; GDPval-AA: **1476 Elo** <(AA — well below the 1750+ frontier anchor; agentic *real-world work quality* is the weak spot)>
- MazeBench (ASCII, no tools): **16%** <(MazeBench leaderboard)>
- Tau2/Tau3-Bench, Claw-Eval, Toolathlon, MCP-Atlas: **no verified public score found** (2026-10-30)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** (v5.0, Max effort) <(AA release page, #12/58 — note this release page is already on the new v5.0 suite; GPT-6 Astra scores 57, GPT-6.1 Sol 55 in the same release family)>
- FrontierMath v2 (Tiers 1–3): **90.877%**; Tier 4: **92.683%** <(Epoch AI FrontierMath v2 leaderboard — extraordinary math evidence)>
- HLE-Diamond (AA): **46.2%** <(AA — above the 40%+ frontier reference)>; CritPt: **28.0%**; MLCR-AA: **30.6%**; AA-LCR (long-context reasoning): **82.7%** <(AA leaderboards)>
- AA-Omniscience v1.1: index **29.6**, accuracy **47.6%**, hallucination **34.5%** <(AA — mid-pack factual robustness)>; OpenAI's internal error-inducing-prompt test: error rate **53.6% → 16.7%** at low effort and **4.3%** at max vs GPT-5.6 Terra <(OpenAI — direct conflict with AA's 34.5% hallucination rate: different suites, both published)>
- HealthBench: raw **51.1%**, length-adjusted **55.1%**, Professional **62.7%**, Hard **31.4%** <(OpenAI system card addendum via BenchLM)>
- GPQA Diamond, MMLU-Pro: **no verified public score found** (2026-10-30)

Coding:

- AA-SciCode: **55.1%** <(AA — just clears the 55%+ frontier reference; Muse Wonder 60.3, Kimi K3.1 Pro 60.8 are higher)>
- Terminal-Bench 4.0 50.3 / 55.6 and TB-Science 0.1 58.3 (see above) are the coding-agency anchors; OpenAI states Sol/Astra remain better for the most complex coding
- SWE-bench Verified / SWE-Pro, DeepSWE, LiveCodeBench, SWE-Marathon: **no verified public score found** (2026-10-30) — the standard coding anchors are absent for this model

Multimodal / documents:

- MMMU-Pro: **85.5%** (OpenAI) / **84.7%** (AA's independent run — agree closely); "nearly matches GPT-6 Astra / GPT-6.1 Sol at much lower cost" (OpenAI)
- ParseBench: **73.64%**; ExtractBench: **94.28%**; ExtractBench Pro: **27%** <(LlamaIndex leaderboards, 2026-10-28 snapshot — strong document parsing)>
- GDP.pdf (professional document reasoning): **28.6%** <(AA)>; video/audio benchmarks: none published

Long context:

- AA-LCR: **82.7%** <(AA long-context reasoning at 1M-class lengths — good, below the ≥98%-at-512K+ bar for a 100)>
- MLCR-AA: **30.6%** <(AA medical long-context)>; MRCR / RULER / GraphWalks: **no verified public score found** (2026-10-30)

### Normalized scores (1–100)

- **Tool use: 85/100.** Agents' Last Exam 60.0% and OSWorld 2.1 74.2% are top-tier computer-use evidence, TB4.0 50.3–55.6% and AutomationBench 60.2% confirm agentic coding, and AA-Briefcase 1402 is solid. Held to 85 by GDPval-AA 1476 Elo (far below the 1750+ frontier anchor), MazeBench 16%, and no Tau2/Tau3, Claw-Eval or MCP-Atlas score.
- **Reasoning: 87/100.** FrontierMath v2 90.9/92.7 (Epoch) is elite math evidence, HLE-Diamond 46.2% clears the 40%+ frontier reference, AA Intelligence Index 51 (v5.0) sits just under the 60+ frontier band, and OpenAI's internal factuality error rate drops to 4.3% at max. Capped by AA-Omniscience (34.5% hallucination — conflicting with OpenAI's own 4.3% internal rate), no GPQA/MMLU-Pro anchor, and an Index score below GPT-6 Astra (57) / Sol (55).
- **Context window: 95/100.** Verified 1M tokens (AA, BenchLM 1.05M, AI Release Tracker) → ≥1M tier (95–100); AA-LCR 82.7% is good long-context retrieval but short of the ≥98%-at-512K+ evidence required for 100.
- **Multimodal: 70/100.** Text + image in only (AA) puts it in the "image in = 60–70" tier; the upper edge (70) reflects genuinely strong visual reasoning — MMMU-Pro 85.5 (independently confirmed 84.7), best-in-class document extraction (ExtractBench 94.28, ParseBench 73.64) and launch tasks built around drawings and video *review*. No audio/video input, no non-text output, no per-modality video understanding score → no 75+.
- **Coding: 82/100.** TB4.0 50.3–55.6%, TB-Science 58.3% and AA-SciCode 55.1% all clear basic frontier bars, but AA-SciCode barely edges the 55% reference (Kimi K3.1 Pro 60.8, Muse Wonder 60.3 beat it), OpenAI itself concedes Sol/Astra are better for complex coding, and SWE-bench Verified, DeepSWE, LiveCodeBench and SWE-Marathon are all missing.
- **Cost efficiency: 90/100.** $1/$5 with $0.05 cache and a measured **$0.96 per Intelligence Index task** (95% cache discount) — the cheapest frontier-class route by AA's cost-per-task metric, roughly 1/5 of Claude Opus 5.5's $5.98 and 1/4.7 of Muse Wonder's $4.52, with ChatGPT plan allowances going further than GPT-5.6 Terra. Not 100 because it isn't free (no Zen Free ID, no $0 route) and raw output price ($5) sits above mid-tier anchors.
- **Overall Score: 83.8/100.** (85 + 87 + 95 + 70 + 82) / 5 = 83.8 — the value frontier pick: elite math, very good computer use and 1M context at half the family price, held down by plain image-only multimodality, mid-pack factual robustness and coding that stops short of Sol/Astra.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-30
- Method: public internet research across DuckDuckGo Lite, OpenAI's official announcement, Artificial Analysis (release page + leaderboards), BenchLM, Epoch AI (FrontierMath, ECI), Vals AI, AI Release Tracker, Amazon Bedrock docs, OpenRouter and the live OpenCode Zen model list (2026-10-30); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts compared and both sides published (TB4.0 50.3 OpenAI vs 55.6 AA; hallucination 4.3% internal vs 34.5% AA Omniscience; Index 51 on AA's v5.0 suite vs BenchLM's 80.46 composite); no number invented.
- Reference URLs:
  - [OpenAI — Introducing GPT-6.1 Terra (official launch, pricing, benchmarks)](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [Artificial Analysis — GPT-6.1 Terra release page (Index 51, $0.96/task, specs)](https://artificialanalysis.ai/models/releases/gpt-6-1-terra)
  - [BenchLM — GPT-6.1 Terra (80.46/100, #9/1004, 33 rows, 2026-10-29)](https://benchlm.ai/models/gpt-6-1-terra)
  - [Epoch AI — GPT-6.1 Terra (ECI 168, rank 4/256)](https://epoch.ai/models/gpt-6-1-terra)
  - [Vals AI — GPT-6.1 Terra (60.47% Vals Index)](https://www.vals.ai/models/openai_gpt-6.1-terra)
  - [OpenAI — GPT-6.1 Terra system card addendum (HealthBench)](https://deploymentsafety.openai.com/gpt-6-1-terra)
  - [Amazon Bedrock — GPT-6.1 Terra model card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-openai-gpt-6-1-terra.html)
  - [AI Release Tracker — GPT-6.1 Terra](https://aireleasetracker.com/model/openai/gpt-6.1-terra)
  - [OpenRouter — openai/gpt-6.1-terra benchmarks](https://openrouter.ai/openai/gpt-6.1-terra/benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Re-check for SWE-bench / LiveCodeBench numbers once OpenAI or AA publish them.
