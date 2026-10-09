# GPT-5 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (reasoning version, evaluated at "high" reasoning effort)
- **Short description:** OpenAI's unified flagship system from its August 2025 launch — a fast efficient model plus a deeper reasoning model with a real-time router, built for chat, coding, writing, health, and agentic tasks. Now superseded by newer OpenAI releases (GPT-5.1 through GPT-6 Astra); Artificial Analysis marks this model as deprecated and only benchmarks the default 10K-input workload.
- **Provider / access:** OpenAI API `openai/gpt-5` (Chat Completions and Responses API). Artificial Analysis lists 2 API providers, first-party OpenAI API benchmarked.
- **Release / knowledge:** Released 2025-08-07; knowledge cutoff September 30, 2024 (verified via Artificial Analysis technical specifications).
- **IDs:** `openai/gpt-5` — no Free ID on OpenCode Zen was verified during research (a non-reasoning variant may also exist per AA, but its exact ID was not verified).
- **Context window:** 400K total tokens with 128K max output (verified via OpenAI API card, AA technical specifications and BenchLeader's 400k listing — all agree).
- **Modalities:** Text and image input; text output; reasoning yes (extended thinking); tool calls supported (OpenAI developer page confirms long chains of tool calls and a `verbosity` API parameter); JSON mode not independently verified.
- **Pricing (as of 2026-10-09):** $1.25 in / $10.00 out per 1M tokens (blended $3.44/M per BenchLeader, ~90% cache discount, blended ~$1.34 per 1M AA 7:2:1). Paid only — no free API tier. Output speed 70 tok/s (AA-measured), first token 4.52s.
- **Architecture:** Proprietary; parameter count undisclosed by OpenAI. Trained on Microsoft Azure AI supercomputers.

### Raw benchmarks found

> BenchLeader full effort-sweep tables (data as of 2026-10-09) citing Epoch/AA/Vals/Scale boards; high effort unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **49.6%** #35 (tbench.ai, medium effort — fills the previously-missing TB row); Terminal-Bench Hard (AA): 32.6%; TB2.1 (AA): 35.2%; TB2.0 (Vals): 37.1%
- Tau2-Bench Telecom (AA): **86.5%**; GDPval: **34.8%** #6 (OpenAI via Epoch, medium — fills the previously-missing GDPval row); GDPval-AA v2.1: 21.0% (AA)
- BrowseComp-Plus: **57.6%** #1 (not-stated — fills the previously-missing agentic-search row); BrowseComp (Kaggle/OpenAI): **20.1%** #2; DeepSearchQA (Kaggle): **59.4%** #5
- Remote Labor Index: 1.7%; Poker Agent (Vals): 1103.2 #2; METR Time Horizons: **69.4%** #11; Aider Polyglot: **88.0%** #1 (not-stated — corroborates the launch 88%)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Artificial Analysis Intelligence Index: **23** (#130 of 216, default 10K workload, deprecated — corroborated; BenchLeader Index **58.1 ±2.7**, #150 of 760, high best — Instruction following 71, Reasoning 53)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** #76 (Epoch, high — fills the previously-missing GPQA; AA 85.3%, Vals 85.6%, HELM 79.1% #2)
- HLE: **25.3%** #13 (Scale AI / CAIS, high — fills the previously-missing HLE; AA 28.5% #151)
- ARC-AGI-2 (verified): **9.9%** #142 (ARC Prize, high — very weak); ARC-AGI-1: 65.7% #133; CritPt: **5.7%** #136
- FrontierMath Tiers 1–3: **55.4%** #42 (Epoch v2); Tier 4: 21.9% #45; OTIS Mock AIME: 91.4%; MATH Level 5: **98.1%** #1; IMO 2025: **38.1%** #1; AIME (Vals): 93.4%; MATH 500: 96.0% #3
- AIME 2025 (no tools): **94.6%** (OpenAI launch evaluations — SOTA at launch)
- SimpleQA Verified: **50.1%** #25 (Epoch); AA-Omniscience: accuracy 40.3%, non-hallucination **17.8%** #300 at high (severe hallucination); MultiChallenge: 63.2% #9
- MMLU-Pro (Vals): **86.5%**; HELM MMLU-Pro: **86.3%** #2; MedQA (Vals): **96.3%** #4; LegalBench (Vals): 86.0%; CaseLaw v2: 66.5% #6
- Hallucination proxies (OpenAI system card): ~45% fewer factual errors than GPT-4o with web search; ~6x fewer than o3 on LongFact-style prompts; deception rate 2.1% vs o3's 4.8%
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **73.5%** #19 (Epoch, high — fills the previously-missing independent SWE-V row); swebench.com bash-only: **65.0%** #19 (medium; any scaffold 65.0%); OpenAI launch: **74.9%** (fixed n=477 subset)
- SWE-Bench Pro: **41.8%** #10 (Scale AI SEAL — fills the previously-missing row; weak)
- LiveCodeBench: **85.9%** #27 (Vals — fills the previously-missing LCB)
- SciCode: **42.9%** (SciCode via Epoch, not-stated — fills the previously-missing SciCode; below the 55%+ frontier mark)
- Aider Polyglot: **88.0%** #1 (leaderboard-topping)
- Vibe Code Bench v1.1: **20.1%** (Vals — weak); WeirdML: 60.7%; ALE-Bench: **1162.5**; LMArena Coding: 1471
- DeepSWE / SWE-Atlas: no verified public score found

Long context:

- No long-context retrieval measurement verified for GPT-5 (AA-LCR value unpublished; BenchLeader Long context 64); 400K window

Multimodal / vision:

- MMMU-Pro (Vals): **81.5%** #39 (fills the previously-missing independent vision row); AA MMMU-Pro: 74.2%; VISTA: **49.7%** #11 (Scale SEAL); GeoBench: **81.0%** #4; VTB: 18.7%; LMArena Vision: 1232

### Normalized scores (1–100)

- **Tool use: 68/100.** Now measured: TB 49.6% (#35) and GDPval 34.8% are weak, but τ² Telecom 86.5%, BrowseComp-Plus 57.6% (#1), Aider Polyglot 88% (#1) and METR 69.4% hold mid-band; the missing Claw/Toolathon rows cap it.
- **Reasoning: 72/100.** GPQA 86.2% (filled — just under the 90% reference), AIME 2025 94.6% (SOTA at launch) and MATH Level 5 98.1% (#1) are strong; HLE 25.3%/28.5% stays under the 40% bar, ARC-AGI-2 9.9% is very weak, and AA Index 23 (deprecated model) plus the 17.8% non-hallucination rate cap it.
- **Context window: 80/100.** 400K total tokens (upper end of the 200K–500K tier; 200K = 70 reference), capped by the 128K max-output caveat and no published long-context retrieval measurement (AA-LCR unpublished).
- **Multimodal: 82/100.** Text and image input with measured MMMU-Pro (Vals) 81.5%, VISTA 49.7% (#11) and GeoBench 81.0% (#4); text-only output and no verified audio/PDF input keep it below audio-vision-tier models.
- **Coding: 75/100.** Now with filled rows: SWE-V 73.5% (#19 Epoch) / 65.0% (swebench.com), LCB 85.9% (#27), Aider 88% (#1); SWE-Pro 41.8% and SciCode 42.9% sit below frontier marks, and the 2026 cohort now sits at 95%+ SWE-bench.
- **Cost efficiency: 74/100.** $1.25/$10.00 per 1M (blended $3.44/M, ~90% cache discount) is moderately priced per AA and cheap for a former flagship, but the $10.00 output rate is well above mid-tier models and there is no free tier.
- **Overall Score: 75/100.** Mean of the five non-cost dims (68 + 72 + 80 + 82 + 75) / 5 = 75.4 → 75. Best fit as a solid general-purpose fallback for everyday chat, writing, and health questions; newer OpenAI releases are preferable for frontier coding and agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09 citing Epoch/AA/Vals/Scale/HELM boards, OpenAI launch post, Vellum cross-check); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 86.2% #76, HLE 25.3% #13, independent SWE-V 73.5% #19, LCB 85.9%, SWE-Pro 41.8%, SciCode 42.9%, TB 49.6%, GDPval 34.8%, BrowseComp-Plus 57.6% #1, MMMU-Pro 81.5% — Tool 65→68, Reasoning 78→72, Coding 72→75, Overall 75 (recalculated).
- Future sources: add a new file next to this one, e.g. `GPT_5.1.md`, using the same headings.
