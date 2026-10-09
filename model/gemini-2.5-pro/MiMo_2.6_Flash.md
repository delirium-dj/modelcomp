# Gemini 2.5 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-2.5-pro`, Gemini API; prior-generation thinking flagship)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro — Google's **prior-generation** thinking flagship (preview 2025-03-25, GA at I/O **2025-05-20**, stable 2025-06), pre-Gemini-3, positioned for long-context reasoning and document-heavy analysis. The `/models/gemini/pro/` DeepMind page now serves Gemini 3.1 Pro — 2.5 Pro's official benchmark page has been retired, a de-facto generational demotion (model itself remains served on the Gemini API per repo meta).
- **Short description:** Extended-thinking multimodal model with 1M-token context and native text/image/audio/video/PDF input; the model family that popularized visible "thinking" budgets and dominated 2025 leaderboards (SWE-V 63.8, GPQA ~84 at launch).
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI; gateways (OpenRouter `google/gemini-2.5-pro` etc.); no OpenCode Zen Free ID (`noFreeId: true`).
- **Release / knowledge:** preview 2025-03-25, GA 2025-05-20, stable 2025-06-05; knowledge cutoff not published in sources reviewed.
- **Context window:** **1,048,576 tokens** in / **64,512** out.
- **Modalities:** **text, image, audio, video, PDF in**; text out; thinking yes (budget-controllable); function calling/structured output.
- **Pricing (as of 2026-10-07):** **$1.25 in / $10.00 out** per 1M for prompts ≤200K; **$2.50 / $15.00** above 200K (repo meta; airank lists only the $1.25/$10 tier). Paid; proprietary license.
- **Architecture:** proprietary (report-2.5 lineage); parameter count not published.

### Raw benchmarks found

> Primary aggregators: BenchLM (25 rows, sources = Artificial Analysis re-runs + Google's
> March-2025 blog + Vals + Epoch, updated 2026-10-07) and airank.dev (6 rows, all labeled
> *Unverified*). DeepMind's official page now redirects to 3.1 Pro — no current official
> 2.5 Pro table exists. All readings are current-era re-runs of the 2025 model unless noted.

Tool / agent use:

- τ²-bench (AA re-run): **54.1%** — far behind current frontiers (Telecom 98–99 for 2026 flagships).
- GDPval-AA (AA, Elo): **616** (2026 flagships: 1,600–1,861); AA Agentic Index: **3.5**.
- MCP-Atlas: **8.8%**; BrowseComp: **7.8%** (airank, *Unverified* — single-digit agentic-search results).
- Gert Labs: 42.01% (ranked catalog); no Terminal-Bench / OSWorld / Toolathlon row found for this model.

Reasoning / knowledge:

- GPQA Diamond: **84.4** (AA independent) / ~83–84 Google-reported legacy figure (benchlm cites the now-recycled deepmind.google page; airank's *Unverified* 77.2 likely a no-thinking run) — **under the 90 ref**.
- Humanity's Last Exam: **18.8** (Google March-2025 blog, no tools) / **22.5** (AA re-run) / 17.8 (airank) — **far under the 40 ref**.
- AA Intelligence Index: **16.1** (current scale, AA) — **far under the 60 ref** (2026 leaders ≈ 65.7).
- FrontierMath v2 (Epoch): T1–3 **14.14%**, T4 **4.17%**; IFBench: 48.7; CritPt: 2.6; AA-Omniscience: accuracy 39.1%, hallucination rate 90.9%.
- AIME / ARC-AGI: no row found in this cycle's sources.

Coding:

- SWE-bench Verified: **63.8%** (Google, March-2025 blog — the model's launch-era flagship row); Vals' SWE-bench re-run: 54.4%.
- SciCode (AA): **46.3%** — **under the 55 ref**; AA Coding Index: **33.3** (low).
- Vibe Code Bench v1.1 (Vals): 0.40 (near-bottom of that board); Terminal-Bench: no row found.

Long context:

- 1M native; **AA-LCR: 69.0%** (AA) — retrieval proof exists but sits mid-pack (2026 leaders 79–88.7); no MRCR row found for 2.5 Pro in this cycle (MRCR rows exist only for Gemini 3.x).

Multimodal:

- AA-MMMU-Pro: **74.9%**; MMMU: 68.0 (airank, *Unverified*); Design Arena Website: 1,172 Elo (OpenRouter).
- Full input suite incl. native **audio and PDF** (era-defining at launch); no audio-understanding (MMAU/MMSU) row found.

### Normalized scores (1–100)

- **Tool use: 61/100.** τ² 54.1 is mid-tier by 2026 standards, GDPval-AA 616 and AA Agentic Index 3.5 are bottom-quartile, and the airank MCP-Atlas 8.8 / BrowseComp 7.8 rows (flagged unverified but directionally consistent) show no modern agentic-search tuning; no TB/OSWorld/Toolathlon evidence at all.
- **Reasoning: 67/100.** GPQA 84.4 is a near-mid — respectable but under the 90 ref — while HLE 22.5 and AA Index 16.1 miss their refs badly; FrontierMath 14.1 and the 90.9% omniscience hallucination rate complete a pre-2026 reasoning profile. Best-in-class for its release window, absolute-mid now.
- **Context window: 95/100.** 1M native → ≥1M tier floor; AA-LCR 69.0 proves usable retrieval but is 20 points behind current leaders and nothing above 1M is claimed → floor, not top.
- **Multimodal: 90/100.** Text + image + **audio + video + PDF in** — the full input suite, landing in the audio-in 90–100 band per methodology; held to 90 (band floor) because MMMU-Pro 74.9 is mid-tier, MMMU 68 unverified, and no audio-understanding row exists.
- **Coding: 70/100.** SWE-bench Verified 63.8 was a 2025 flagship number and remains respectable, but SciCode 46.3 misses the ref, AA Coding Index 33.3 is low, Vibe 0.40 is near-bottom, and there's no Terminal-Bench/DeepSWE/SWE-Pro evidence — clearly pre-2026 coding.
- **Cost efficiency: 69/100.** Tiered $1.25/$10 (≤200K) interpolates between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; the >200K tier $2.50/$15 sits at the anchor. Paid-only, no free tier, and you pay 2026-adjacent money for 2025 intelligence.
- **Overall Score: 76.6/100.** (61+67+95+90+69)/5 = 76.4 → 76 — the model that defined 2025 still delivers 1M context and a full audio/PDF input suite at mid-tier prices, but every reasoning/agent ref it once missed by little now misses by a lot, which is exactly what a year of frontier movement looks like on an absolute scale.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — BenchLM model page (25 sourced rows incl. AA re-runs, Google March-2025 blog, Vals, Epoch), airank.dev (6 rows, all labeled Unverified), DeepMind models page check (confirmed retired/recycled to 3.1 Pro), repo meta for specs/pricing; scores are normalized 1–100 interpretations, not official vendor scores; launch-era vs current-era readings distinguished per row.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 2.5 Pro — findings by Mimo v2.6 Flash

- Source: Google / Gemini 2.5 Pro (`gemini-2.5-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google DeepMind's proprietary thinking/reasoning flagship of the 2.5 family, aimed at complex code, math, STEM, and long-document multimodal analysis. Successor line continues as Gemini 3 Pro; 2.5 Pro remains served but is nearing platform retirement windows.
- **Provider / access:** Google Gemini API (`gemini-2.5-pro`), Google Cloud Vertex AI / Model Garden, Azure/AWS enterprise listings. Chat-completions-style Gemini API (native Google) plus OpenAI-compatible third-party relays; not OpenCode Zen primary focus in this entry's meta (`opencode/gemini-2.5-pro`).
- **Release / knowledge:** Preview 2025-03-25; GA 2025-06-17 (Vertex); knowledge cutoff January 2025; latest stable update June 2025. Vertex retirement listed as 2026-10-20 on one cloud card.
- **IDs:** `gemini-2.5-pro` (Google); `opencode/gemini-2.5-pro` on Zen. No $0 Free ID scored here — paid API rates used.
- **Context window:** 1,048,576 input tokens; 65,536 max output (Gemini API model page, verified 2026-09).
- **Modalities:** text / image / audio / video / PDF in; text out; thinking (reasoning) yes; function calling, code execution, search grounding, structured JSON outputs yes; no image/audio generation.
- **Pricing (as of 2026-09-23):** $1.25 / $10.00 per 1M in/out for inputs ≤200K; $2.50 / $15.00 above 200K (long-context surcharge); cache read ~$0.125–0.13. Paid, not free.
- **Architecture:** proprietary (Transformer + MoE per technical report; parameter counts undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (model predates TB2.1 leaderboard prominence; not on vals/tbench top rows reviewed)
- Tau3-Banking / Tau2-Bench: no verified public score found in reviewed sources
- GDPval-AA: no verified public score found as a standalone row; AA Intelligence Index for the 2.5 Pro line sits at **23–26** (Artificial Analysis / BazaarLink AA card, 2026) which embeds GDPval among 9 evals
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Function calling / code execution / grounding: supported end-to-end on Gemini API (official model card)

Reasoning / knowledge:

- GPQA Diamond: **84.0%** (Google tech report / DataCamp summary, pass@1) — also listed 83% on BenchLM shared rows, 84.4% on AA harness
- HLE: **17.8%** (Neura Market aggregate) / **18.8–21.64%** no-tools at launch (Google / Benchgen)
- LCR / MLCR: no verified public score found under those names; MRCR long-context scores below
- CritPt: no verified public score found as a standalone row
- Artificial Analysis Intelligence Index: **23–26** (AA, 2025–2026; mid-pack vs frontier 40–60+)
- AIME 2025: **86.7–88.0%** pass@1 (Google tech report via DataCamp / arXiv 2507.06261)
- MMLU-Pro: **84.0%**; SimpleQA 50.8%; ARC-AGI v2 ~5.0%; Chatbot Arena ELO ~1465 (Serenities aggregate)
- Omniscience Accuracy / Hallucination Rate: no verified public score found for this exact model in reviewed rows

Coding:

- SWE-bench Verified: **63.8%** (Google/provider-exact row on BenchLM; 63.2% on an alternate harness)
- LiveCodeBench: **73.6%** (Benchgen launch card) / 70.4% on LCB v5 (DataCamp); official tech report 74.2%
- Aider Polyglot: **74.0–82.2%** (DataCamp whole-file 74%; tech report 82.2%)
- SciCode / AA-SciCode: no verified public standalone score found; AA Coding Index **33.3%** (Requesty/AA card)
- Vibe Code Bench: **0.40%** (Vals AI v1.1 — near-floor; likely harness/mode mismatch, listed as-is)
- DeepSWE / SWE-Pro: no verified public score found

Long context:

- MRCR v2 8-needle: **58.0%** ≤128K; **16.4%** at 1M (Google Gemini 2.5 tech report Table 4)
- LOFT hard retrieval: 87.0% ≤128K; 69.8% at 1M (same tech report)
- RULER: **95.8%** at tested length (Serenities aggregate); LongBench Pro overall **73.42** (top of that leaderboard table, arXiv 2601.02872)
- LongCodeBench: degrades to ~7% success at 1M on hard file-repair tasks (arXiv 2505.07897)

### Normalized scores (1–100)

- **Tool use: 62/100.** Solid function-calling/code-execution/grounding stack and SWE-bench-class agentic coding, but no Terminal-Bench 2.1, Tau, GDPval, or Claw-Eval public rows were found — coverage gap caps the score in the mid tier.
- **Reasoning: 73/100.** GPQA Diamond 84% and AIME 2025 ~87–88% are strong mid-to-upper results, while HLE ~18–22% and AA Intelligence Index 23–26 sit well below current frontier (40–60+); missing CritPt/LCR rows also cap it.
- **Context window: 90/100.** Full 1M input window meets the ≥1M tier (95–100), held back from the top of the band because MRCR v2 8-needle retrieval collapses to 16.4% at 1M (100 requires ≥98% retrieval at 512K+).
- **Multimodal: 93/100.** Native text/image/audio/video/PDF input with audio-understanding SOTA claims in the tech report and no non-text output — scores in the audio-in band (90–100).
- **Coding: 70/100.** SWE-bench Verified 63.8% and LiveCodeBench ~74% are solid mid-pack; Vibe Code Bench 0.40% and the gap to DeepSWE/SWE-Pro-class frontier results keep it out of the 90s.
- **Cost efficiency: 72/100.** $1.25/$10.00 short-context is mid-market, but the 2× long-context surcharge above 200K and $10 output rate drag below the ~$1–4 output sweet spot.
- **Overall Score: 77.6/100.** Mean of the five quality dims (62 + 73 + 90 + 93 + 70) / 5 = 77.6; best-fit as a proven multimodal long-context workhorse when 1M window + audio/video input matter more than frontier agentic scores.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-23
- Method: fresh public web research (Google Gemini API model card, Gemini 2.5 tech report arXiv 2507.06261, BenchLM/Benchgen/AA/Neura/vals aggregates); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

