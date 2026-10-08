# Gemini 2.5 — findings by MiMo 2.6 Flash

- Source: Google DeepMind Gemini 2.5 family (flagship served as `gemini-2.5-pro`); scores cross-checked against this agent's own Gemini 2.5 Pro report
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 — **Google's 2025 Gemini 2.5 family flagship**, served to the public as **`gemini-2.5-pro`** (repo meta id `google/gemini-2.5-pro`; "the family flagship, deep-reasoning and coding model with 1M context, thinking, and text/image/audio/video input"). Family: **2.5 Pro** (preview 2025-03-25, GA at I/O 2025-05-20, stable 2025-06-05), **2.5 Flash** (Jun 2025) and **2.5 Flash-Lite** — the generation that popularized visible thinking budgets and owned 2025 leaderboards. This queue entry scores **the flagship tier** (evidence identical to my `gemini-2.5-pro` report — same model id, same rows).
- **Short description:** Extended-thinking multimodal model with **1M-token context**, budget-controllable thinking, native text/image/audio/video/PDF input, function calling and structured output. The official DeepMind benchmark page now serves Gemini 3.1 Pro — a de-facto generational demotion — while the model itself remains served (Gemini API; "legacy access-limited model" per Gemini API docs).
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI; OpenRouter `google/gemini-2.5-pro` (pricing verified 2026-10-04). No free Zen id (meta).
- **Release / knowledge:** preview 2025-03-25 → GA 2025-05-20 → stable 2025-06-05.
- **Context window:** **1,048,576 (1M)** in / 64,512 out.
- **Modalities:** **text, image, audio, video in; text out** (thinking on).
- **Pricing:** **$1.25 / $10.00 per 1M** (≤200K prompts); **$2.50 / $15.00** above 200K (Google API; OpenRouter verified 2026-10-04).
- **Architecture:** proprietary; parameter count unpublished.

### Raw benchmarks found

> Evidence base: this agent's own 2026-10-07 research cycle for `gemini-2.5-pro`
> (BenchLM 25 rows = AA re-runs + Google March-2025 blog + Vals + Epoch; airank.dev
> 6 rows all labeled Unverified; official DeepMind page recycled to 3.1 Pro).
> All readings are current-era re-runs of the 2025 model unless noted.

Tool / agent use:

- τ²-bench (AA): **54.1%**; GDPval-AA Elo **616**; AA Agentic Index **3.5**; MCP-Atlas 8.8%; BrowseComp 7.8% (airank, Unverified); no TB/OSWorld/Toolathlon row.

Reasoning / knowledge:

- GPQA Diamond **84.4** (AA) — under the 90 ref; **HLE 18.8–22.5** — far under 40; **AA Intelligence Index 16.1** — far under 60 (2026 leaders ≈ 65.7); FrontierMath v2 T1–3 14.14 / T4 4.17; Omniscience hallucination 90.9%.

Coding:

- **SWE-bench Verified 63.8** (Google, Mar-2025 launch row); Vals re-run 54.4; SciCode 46.3 (<55); AA Coding Index 33.3; Vibe v1.1 0.40.

Long context:

- 1M native; **AA-LCR 69.0** — usable but ~20 points behind current leaders; no MRCR row.

Multimodal:

- AA-MMMU-Pro **74.9**; full input suite incl. **audio + PDF**; no audio-understanding row.

### Normalized scores (1–100)

- **Tool use: 61/100.** τ² 54.1 is mid-tier by 2026 standards, GDPval-AA 616 / Agentic 3.5 bottom-quartile, MCP-Atlas/BrowseComp single-digit — no modern agentic tuning, no TB/OSWorld evidence.
- **Reasoning: 67/100.** GPQA 84.4 near-mid; HLE 22.5 and AA Index 16.1 miss refs badly — best-in-class for March 2025, absolute-mid now.
- **Context window: 95/100.** 1M native → tier floor; LCR 69.0 proves usable retrieval but trails current leaders (79–88.7).
- **Multimodal: 90/100.** Text+image+**audio+video** in — audio-class band floor; MMMU-Pro 74.9 mid, no audio-understanding row.
- **Coding: 70/100.** Launch-era SWE-V 63.8 remains respectable; SciCode 46.3 / Coding Index 33.3 / Vibe 0.40 and no TB/DeepSWE/SWE-Pro rows mark it clearly pre-2026.
- **Cost efficiency: 69/100** (excluded from Overall). $1.25/$10 (≤200K) interpolates between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; >200K tier $2.50/$15 sits at the $3/$15 anchor — 2026-adjacent money for 2025 intelligence, no free tier.
- **Overall Score: 76.6/100.** (61+67+95+90+69)/5 = 76.4 → 76 — the family that defined 2025 still delivers 1M context and the full audio/PDF input suite at mid-tier prices, while every reasoning/agent reference it once missed narrowly now misses by a lot (queue 77.3 for this family entry; my `gemini-2.5-pro` flagship report independently lands on the same 76).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: research already performed for this agent's own `model/gemini-2.5-pro/MiMo_2.6_Flash.md` (BenchLM 25 rows incl. AA re-runs/Google Mar-2025 blog/Vals/Epoch, airank.dev Unverified rows, DeepMind page-recycled check, repo meta) plus repo-meta verification of this entry's identity (`google/gemini-2.5-pro`, pricing verified 2026-10-04, family framing). Zero-influence preserved: no other agents' reports or `average.md` consulted; scores are this agent's own normalized 1–100 interpretations; flagship aliasing documented because the queue carries `gemini-2.5`, `gemini-2.5-pro`, `gemini-2.5-flash` and `gemini-2.5-flash-lite` as separate lines.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
