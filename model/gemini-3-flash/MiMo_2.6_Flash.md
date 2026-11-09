# Gemini 3 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3-flash-preview`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 83). Fresh sources this pass: BenchLM snapshot 2026-11-07
> (with Claw-Eval leaderboard, AA and Vals AI rows) and BenchLeader 2026-11-06
> pricing/index. Changes: Tool use 72→73 (first Claw-Eval 49.2% and τ²-bench
> 43.3% rows land above the previous N/A penalty); Coding 76→80 (Vals SWE-bench
> 75.0% and LiveCodeBench 85.6% — both previously "no number found"); Overall
> 83→83.8. Reasoning 81, Context 95, Multimodal 90, Cost efficiency 93 held.

## Model card

- **Name:** Gemini 3 Flash (API `gemini-3-flash-preview` at launch; model card published December 2025)
- **Short description:** The first Flash built off the Gemini 3 **Pro** reasoning foundation (released 2025-12-17, a month after Gemini 3 Pro) — Pro-grade reasoning at Flash latency: GPQA 90.4, MMMU-Pro 81.2 (SOTA at release), SWE-bench Verified 78 (beating 3 Pro itself), 30% fewer tokens than 2.5 Pro, ~3× faster (AA-measured), and <¼ the cost of 3 Pro. Became the default model in the Gemini app and AI Mode in Search. Now legacy: superseded by 3.5 Flash (2026-05); AA benchmarking deprecated (BenchLM flags it **Non-Reasoning / legacy** coverage).
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI / Gemini Enterprise, Google Antigravity, Gemini CLI, Android Studio; small free tier; OpenRouter and other gateways.
- **Release / knowledge:** released 2025-12-17 (preview); knowledge cutoff **January 2025**.
- **IDs:** `google/gemini-3-flash-preview` (gateway routes) / `gemini-3-flash-preview` (native; model card: "Gemini 3 Flash").
- **Context window:** 1,000,000 tokens (1M class, confirmed by BenchLM/AA 2026-11); max output 65,536.
- **Modalities:** text, images, audio, video in; text out; reasoning yes (thinking levels, modulates effort; even the lowest level beat prior models' high); tool calls yes (function calling, structured outputs, **code execution incl. zoom/count/edit on visual inputs**, context caching, Batch API).
- **Pricing (as of 2026-11-08):** **$0.50 in / $3.00 out** per 1M (BenchLeader list price 2026-11-06; blended $1.13/M at 3:1; audio input $1.00/M); 90% context-cache discount, 50% Batch discount; free tier available. Paid.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use (Google-run unless noted):

- GDPval-AA: **1204** Elo (row from the 3.5 Flash comparison table — far under the 1750+ frontier ref).
- Terminal-Bench 2.1: **58.0** (3.5 Flash model-card table, Google) / **53.9%** (Vals AI independent, via BenchLM 2026-11-07) — both far under the 88% ref.
- **Claw-Eval: 49.2%** (Claw-Eval leaderboard via BenchLM — NEW this pass; fills the previously missing Claw row).
- **τ²-bench: 43.3%** (Artificial Analysis via BenchLM — NEW this pass; was "Tau3: no verified public score found"; between the 10–25% mid band and the 50%+ frontier ref).
- MCP-Atlas: **62.0**; Toolathlon: **49.4**; OSWorld-Verified: **65.1**; Finance Agent v2: **42.6** (3.5 Flash model-card table).
- **JobBench: 11.4%** (paper/Board via BenchLM — NEW, a weak row), Gert Labs 56.63% (NEW). AutomationBench / Agents' Last Exam: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **90.4** (Google — grazes the 90%+ ref); **Epoch AI independent: 89**; **Vals AI: 87.9%** and **AA: 81.2%** (both NEW independent readings this pass — the true GPQA level sits ~81–90 depending on harness). MMLU-Pro (Vals): **88.6%** (NEW).
- HLE (no tools): **33.7** (Google) — misses the 40%+ ref; **AA-HLE: 15.0%** (NEW, AA's own harness — considerably lower). With-tools HLE: no separate row found.
- FrontierMath v2 (Epoch): **51.228% T1–3 / 17.073% T4** (strong T1–3, mid T4). ARC-AGI-2: **33.6–34** (well behind GPT-5.2 Pro's 54). **CritPt: 1.4%** (AA — NEW, near floor).
- **AA-Omniscience: accuracy 45.8%, hallucination rate 92.4%, net −4.3** (AA via BenchLM — NEW; a severe hallucination flag).
- AA Intelligence Index: **26** (AA's deprecated page; BenchLM's no-reasoning reading 17.9) — deep under the 60+ ref. LLM Stats Score 37.0. SimpleQA Verified 67 (Epoch). AA Global-MMLU-Lite 92.7 (NEW). AA-IFBench 55.1 (NEW).

Coding:

- SWE-bench Verified: **78** (Google — beats Gemini 3 Pro; **Epoch: 75**) — **and now Vals AI: 75.0%** (NEW, independent corroboration).
- **LiveCodeBench (Vals): 85.6%** (NEW this pass — was "no number found"; a genuinely strong row).
- SWE-bench Pro (Public): **49.6** (3.5 Flash model-card table — under the 54–64 crowd). DeepSWE: no row found. **Vibe Code Bench (Vals): 20.20%** (NEW — weak).
- Strong vibe-coding posture: JetBrains/Warp report Pro-close quality at lower latency; Warp +8% fix accuracy (customer quotes).

Long context:

- GDM-MRCR v2 (8-needle): **67.2% at 128K**, **22.1% at 1M pointwise** (3.5 Flash table) — retrieval is the weak face; 3 Pro beat it. **AA-LCR: 55.3%** (AA via BenchLM — first long-context row for this ID; mid-level). Window 1M.

Multimodal (Google-run unless noted):

- MMMU-Pro: **81.2** (SOTA at release) / **78.6%** (AA independent via BenchLM — NEW independent confirmation), ParseBench 74.07% (NEW), Design Arena Website 1194 (NEW). VideoMMMU / CharXiv-R / ScreenSpot Pro: 3 Pro wins the shared pair (no 3 Flash numbers). Code execution over visual inputs (zoom/count/edit) is a distinguishing feature.

### Normalized scores (1–100)

- **Tool use: 73/100.** Moved 72→73 because two previously missing anchor rows now verify at decent levels — Claw-Eval **49.2%** and τ²-bench **43.3%** (was "no verified public score found" for both; the methodology's Claw N/A penalty no longer applies) — alongside the existing mid rows (MCP 62.0, OSWorld 65.1, Toolathlon 49.4); still capped by GDPval 1204, TB2.1 58.0/53.9 far under the 88 ref, and the new weak JobBench 11.4%.
- **Reasoning: 81/100.** Held: GPQA 90.4 (Google) is corroborated lower by Epoch 89 / Vals 87.9 / AA 81.2 (so the 90+ ref is at best grazed), AIME 99.7 and FrontierMath T1-3 51.2% are strong, but HLE 33.7 (Google) / **15.0 (AA)** both miss the 40+ ref, ARC-AGI-2 34 is far back, CritPt 1.4 is near floor, AA-Omniscience hallucination 92.4% is severe, and the AA Index (26) is deep under 60+.
- **Context window: 95/100.** 1M capacity = ≥1M tier floor; MRCR 67.2/22.1 is the retrieval floor of the floor and the new AA-LCR 55.3% is mid-level — capacity-only score (held).
- **Multimodal: 90/100.** Text + image + **audio + video** in (top input band), text out; MMMU-Pro 81.2 vendor / **78.6 AA independent** (NEW) and visual code-execution are distinguishing; held at 90 by 3 Pro winning most shared vision pairs and no audio/non-text output.
- **Coding: 80/100.** Moved 76→80 on two new verified rows — Vals AI SWE-bench **75.0%** (independent, matching Google's 78 / Epoch's 75) and Vals LiveCodeBench **85.6%** (both previously "no number found") — which put the SWE/LCB pair in frontier-adjacent territory; capped well below 90 by TB2.1 58.0/53.9 (under the 85 ref by 27+ points), SWE-Pro 49.6, Vibe Code Bench 20.20%, and no DeepSWE row.
- **Cost efficiency: 93/100.** $0.50/$3.00 (list price re-confirmed 2026-11-06) with 90% cache, half-price batch, blended $1.13/M and a free tier sits just past the $0.60/$2.20 ≈ 92 anchor (audio input at $1/M is the small negative), and Google's "<¼ of 3 Pro" framing holds — unchanged → held at 93.
- **Overall Score: 83.8/100.** (73+81+95+90+80)/5 = 83.8 → a December-2025 speed/price frontier release that still wins on input breadth and unit economics, with agentic rows, HLE, CritPt and 1M retrieval showing how quickly the frontier moved in 2026.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM 2026-11-07 snapshot, Claw-Eval leaderboard, Vals AI model rows, AA model benchmarks, BenchLeader 2026-11-06 pricing/index); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 3 Flash (updated 2026-11-07)](https://benchlm.ai/models/gemini-3-flash)
  - [Vals AI — Gemini 3 Flash Preview](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [BenchLeader — Gemini 3 Flash (2026-11-06)](https://www.benchleader.com/models/gemini-3-flash)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block). Preserved verbatim during the 2026-11-08 second-pass enrichment (archive not re-scored).

# Gemini 3 Flash — findings by Mimo V2.6 Flash

- Source: Google/`gemini-3-flash`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google DeepMind's December 2025 thinking-native Flash workhorse — 1M context at $0.50/$3, tuned for high-volume agentic coding and multimodal work (SWE-V 78, MMMU-Pro 81.2/87.6) while undercutting Pro-class pricing by ~2–4×. Sits under Gemini 3 Pro as the default "smart enough, cheap enough" tier.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI (`gemini-3-flash`), AI Mode / Gemini app surfaces; OpenRouter and major gateways. Chat Completions-compatible via Gemini API.
- **Release / knowledge:** 2025-12-17 (Google blog); knowledge cutoff not isolated in rows reviewed.
- **IDs:** `gemini-3-flash` (Gemini API); `google/gemini-3-flash` on gateways.
- **Context window:** 1,000,000 tokens input; max output 64,000 tokens (Google / models.dev).
- **Modalities:** text, image, audio, video, PDF in; text out; thinking mode; tool calls / function calling; structured output.
- **Pricing (as of 2026-09-23):** $0.50 / $3.00 per 1M in/out (≤200K prompt tier); cached input discounted. Paid; free tier in AI Studio.
- **Architecture:** proprietary Google multimodal MoE (params undisclosed).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench (Google launch harness): **78%** SWE-V proxy-adjacent coding row below; MCP Atlas: **57.4%** (Google launch)
- Toolathlon: **49.4%** (Google launch / BenchmarkList)
- τ-bench: **71.5%** (Google launch)
- OSWorld / GDPval-AA / Claw-Eval: **no verified public score found** in rows reviewed

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Google launch)
- HLE: **33.7%** no tools / **43.5%** with tools (Google launch)
- MATH: **97.5%** (Google launch)
- AA Intelligence Index (v4.3.2): **26.3 (#139)** not-stated config / **17.9 (#240)** no-reasoning (Artificial Analysis via BenchLeader 2026-10-06 — **fills the former AA Index gap**; pre-rescale launch-era indexes are not comparable)
- BenchLeader composite index: **59.3 (#120 of 750, thinking)**; categories Instruction-following 76 / Knowledge 66 / Long-context 64 / Multimodal 63 / Reasoning 56 / Agents&tools 55; Epoch Capabilities Index 151.8 (#47); IFBench **78.0% (#14, not-stated)** / 55.1% (#145, no-reasoning)

Coding:

- SWE-bench Verified: **78%** (Google launch / vendor harness)
- LiveCodeBench / SciCode / DeepSWE: **no verified public score found** in rows reviewed

Long context:

- 1M window documented; MRCR / RULER retrieval % at depth: **no verified public score found** in this pass. AA-LCR: **78.0% (#111, not-stated config) / 55.3% (#278, no-reasoning)** (Artificial Analysis via BenchLeader 2026-10-06 — first measured long-context row for Gemini 3 Flash)

Multimodal:

- MMMU-Pro: **81.2%** no tools / **87.6%** with tools (Google launch); **78.5–79.9%** (AA via BenchLeader 2026-10-06) / **87.6% (#13, Vals)**; GeoBench **88.0% (#1)**; Chatbot Arena text-vision: **1467** Elo (Google / LMArena row) — LMArena now 1458–1473 text / 1266–1285 vision by config (BenchLeader 2026-10-06)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 57.4, Toolathlon 49.4, τ-bench 71.5 — solid mid-upper agentic stack for a Flash-tier model; capped by missing public TB2.1/GDPval/OSWorld rows and Toolathlon still mid-pack vs Pro/Max-class 70+.
- **Reasoning: 89/100.** GPQA 90.4, HLE 43.5-tools, MATH 97.5 — near-frontier science/math; capped by HLE no-tools 33.7 still behind top Pro/Sol-class 47–53.
- **Context window: 95/100.** Full 1M (≥1M tier → 95–100); no public ≥98% retrieval at 512K+ to claim 100.
- **Multimodal: 88/100.** Text/image/audio/video/PDF in (video+audio → 75–90 band); MMMU-Pro 81.2/87.6 and Arena 1467 strong; text-only out keeps it shy of 90+.
- **Coding: 85/100.** SWE-V 78 is strong Flash-class coding; capped by missing LCB/DeepSWE rows and still below Fable/Opus/Sol 80–90+ multi-bench consensus.
- **Cost efficiency: 91/100.** $0.50/$3 sits just under the ~$0.60/$2.20≈92 anchor with near-Pro benchmarks — exceptional value; no free-tier API beyond AI Studio sandbox noted as caveat.
- **Overall Score: 86/100.** Mean of Tool 72 + Reasoning 89 + Context 95 + Multimodal 88 + Coding 85 = 429/5 = 85.8 → **86** (best-fit: high-volume multimodal/agentic coding worker at $0.50/$3 when 1M context and image/audio/video-in suffice; step up to 3 Pro / Fable / Sol for top HLE depth or 80+ multi-harness SWE consensus).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Google DeepMind launch blog, BenchmarkList, models.dev); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 59.3 #120/750 thinking, AA 26.3 #139 filling the AA-Index gap, AA-LCR 78.0/55.3 filling the long-context gap, MMMU-Pro/GeoBench/LMArena rows, IFBench 78.0) — scores unchanged: (72+89+95+88+85)/5 = 85.8 → 86. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
