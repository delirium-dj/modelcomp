# Gemini 3.6 Flash — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** The "workhorse" Flash refresh (released 2026-07-21 alongside Gemini 3.5 Flash-Lite and the pilot-only 3.5 Flash Cyber) — beats 3.5 Flash on **every** published benchmark while using ~17% fewer output tokens on the AA index (up to 65% fewer on DeepSWE) and cutting the output price. Big leaps: MLE-Bench 49.7→63.9, DeepSWE 37→49, OSWorld 78.4→83.0, MRCR-v2 1M 26.6→54.0. Computer use became a built-in client-side Gemini API tool. Knowledge cutoff moved to March 2026.
- **Provider / access:** Gemini API / AI Studio / Vertex AI, Gemini app, Antigravity, Android Studio, GitHub Copilot, OpenRouter (Google AI Studio + Vertex providers).
- **Release / knowledge:** released 2026-07-21 (GA stable); knowledge cutoff **March 2026**.
- **IDs:** `google/gemini-3.6-flash` (gateway routes) / `gemini-3.6-flash` (native).
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, images, video, audio, PDF in; text out; reasoning yes (fewer reasoning steps/tool calls per task than 3.5 Flash); tool calls yes (function calling, structured outputs, code execution, search grounding, **Computer Use built-in**); no image/audio generation.
- **Pricing (as of 2026-10-07):** launch was $1.50/$7.50; Google's 2026-08-24 price cut makes standard **$0.75 in / $3.75 out** per 1M (cached input **$0.075**), Batch/Flex $0.375/$1.875, Priority $1.35/$6.75 — promotional, **returns to $1.50/$7.50 on 2027-01-01**. AA blended ≈ $0.63/M (3:1). Free tier. Paid.
- **Architecture:** proprietary (dense-vs-MoE and parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.0** (Google — beats Sonnet 5's 81.2; 3.5 Flash 78.4). MLE-Bench: **63.9** (Google — near Sonnet 5's 66.9, roughly best-in-class per release trackers).
- GDPval-AA v2: **1421** Elo (Google; 3.5 Flash 1349, GPT-5.6 Luna 1584, Sonnet 5 1607 — mid-pack; v2 scale, not the v1 1750 ref).
- Terminal-Bench 2.1: **78.0** (Google) / **77.5** (AA, high effort) / **73.8** (Vals AI) — all below the 88% ref. Terminal-Bench 4.0 (AA): **7.1** (next-gen harness crushes it; frontier-tier models land in the 40s–70s on that board).
- τ-Bench Banking (AA): 29.9. Finance Agent v2 (Vals): 56.3. Design Arena Agents-arena Elos: 1146–1217.
- Claw-Eval / AutomationBench / ExploitBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.8** (AA, high effort) and **93.4** (Vals AI) — both clear the 90%+ ref (not in Google's own table).
- HLE: **40.8** (AA, high effort) — clears the 40%+ ref by a thread. CritPt: 10.6.
- AA Intelligence Index: **50** at launch (press/Google-cited) vs **34.0** on AA's current methodology (high effort, OpenRouter — the index was re-based) — either reading is under the 60+ ref. Vals Index: 64.9 (their own scale).
- MMLU-Pro (Vals): 89.3. AA-Omniscience: 50.0 accuracy / 44.4 non-hallucination.

Coding:

- SWE-bench Pro (Public): **58.7** (Google; 3.1 Pro 54.2 — but GPT-5.6 Luna 62.7, Grok 4.5 64.7, Sonnet 5 63.2 above). DeepSWE v1.1: **49** (Google — big jump from 37, still under the 74 ref; Luna 67, Sonnet 5 54).
- LiveCodeBench (Vals): **88.1**. SWE-bench (Vals): 79.6. Vibe Code Bench: 64.0. AA Coding Index (high): **69.2** (just under the 70+ ref). SciCode (AA): 53.4 (just under the 55+ ref). IOI (Vals): 35.1.
- Terminal-Bench 2.1/4.0 as above. Code Migration (Vals): 30.9.

Long context:

- GDM-MRCR v2 (8-needle): **91.8% at 128K**, **54.0% at 1M pointwise** (Google) — roughly double 3.5 Flash and every peer's 1M row (3.1 Pro 26.3, GPT-5.6 Luna 74.8@128K only).
- AA-LCR (high effort): **80.0**. Still short of the ≥98%-at-512K+ condition, but clearly the strongest 1M retrieval among Flash-class peers.

Multimodal (Google-run unless noted):

- CharXiv Reasoning: **85.2** no tools / **89.4** with tools (top of Google's table). MMMU-Pro (Vals): **88.4**. Vals Multimodal Index: 65.1.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 83.0 is board-topping, MLE-Bench 63.9 near-best, and TB2.1 ~78 solid; GDPval-AA v2 1421 is mid-pack, TB4.0 7.1 exposes a next-gen-terminal weakness, and τ-bank/DATA rows are mid.
- **Reasoning: 86/100.** Both hard refs cleared — GPQA 92.8/93.4 (90+) and HLE 40.8 (40+) — with MMLU-Pro 89.3; the AA Index (50 launch / 34 current) stays well under 60+ and CritPt is weak.
- **Context window: 96/100.** 1M capacity plus MRCR-v2 91.8/54.0 and AA-LCR 80 — the best long-context evidence in this tier, one notch above the 95 floor, still not the ≥98% condition.
- **Multimodal: 89/100.** Text + image + video + audio + PDF in (upper band); CharXiv 85.2/89.4 and MMMU-Pro 88.4 lead their tables; text-only out keeps it just under 90.
- **Coding: 80/100.** LiveCodeBench 88.1 and Vals SWE 79.6 are strong, SWE-Pro 58.7 and DeepSWE 49 are clear generational gains but trail frontier refs (…/74), AA Coding Index 69.2 and SciCode 53.4 each sit a hair under their refs, and TB4.0 7.1 is a hard miss.
- **Cost efficiency: 91/100.** Current $0.75/$3.75 promo sits just under the $0.60/$2.20 ≈ 92 anchor, with $0.075 cache reads, half-price Batch/Flex, free tier, and 17% fewer output tokens per task; the scheduled 2027-01-01 return to $1.50/$7.50 is the only reason it isn't higher.
- **Overall Score: 87/100.** (85+86+96+89+80)/5 = 87.2 → 87 — the efficiency sweet spot of the batch: every generational benchmark improved while price and token usage fell, with real 1M retrieval; mid-pack GDPval and the sub-ref long-horizon coding rows are the offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog, DeepMind model card, benchr, DataNorth, HokAI, OpenRouter, AI Release Tracker, Kie.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
