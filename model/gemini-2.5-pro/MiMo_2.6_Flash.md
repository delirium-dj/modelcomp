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
