# Gemini 2.5 — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemini 2.5 Pro (curated id `google/gemini-2.5-pro`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 (served as `google/gemini-2.5-pro`)
- **Short description:** The 2025-generation Gemini flagship with "thinking" mode, 1M context and native text/image/audio/video input; now a legacy, access-limited endpoint that is still tracked for cross-generation comparison. **Variant flag:** this folder duplicates the identity of `model/gemini-2.5-pro/` — same served weights (`gemini-2.5-pro`); flagged rather than merged because folder moves are prohibited.
- **Provider / access:** Google Gemini API (`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent`, generateContent / Chat-style) and `google/gemini-2.5-pro` on OpenRouter; also Vertex AI. Thinking is on by default (`thinkingConfig.thinkingBudget = -1`).
- **Release / knowledge:** preview 2025-03-25, GA 2025-06; knowledge cutoff reported as January 2025 (vendor docs).
- **IDs:** `google/gemini-2.5-pro` (Gemini API / OpenRouter), `gemini-2.5-pro-preview-05-06` / `-06-17` (dated snapshots). No free tier ID.
- **Context window:** 1,048,576 input tokens; 65,536 max output — vendor product page plus aggregator cards agree.
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning (thinking) yes; tool calls/function calling yes; structured JSON output yes. No image or audio generation on this ID (Nano / TTS / Live are separate endpoints, incl. `models_voice/gemini-3.8-live`).
- **Pricing (as of 2026-10-07):** $1.25 in / $10.00 out per 1M up to 200K prompts, $2.50 / $15.00 above 200K (Google pricing page, mirrored on OpenRouter); cached input discounted. Availability is now limited as Google points users at the 3.x/4 generations.
- **Architecture:** proprietary dense/MoE hybrid (params undisclosed); `Source Type: Proprietary`, `Reasoning Type: Non-Reasoning` on BenchLM's base variant card (the thinking variant is a separate configuration).

### Raw benchmarks found

Aggregator numbers are from BenchLM `gemini-2-5-pro` (overall **50.98/100, #90 of 783**, coverage explicitly flagged as partial/conservative), Artificial Analysis `models/gemini-2-5-pro`, Vals AI and the Google launch post.

Agent / tool use:

- τ²-bench: **54.1 %** (Artificial Analysis, via BenchLM)
- GDPval-AA: **616 Elo** (normalized 0.0 %) and AA Agentic Index **3.5 %** — both bottom-of-table on the 2026 harnesses
- Gert Labs: **42.01 %**
- Terminal-Bench 2.1 / Claw-Eval: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA Diamond: **84.4 %** (AA) / 83 % (DeepMind product card)
- HLE: **22.5 %** (AA) / 18.8 % (vendor, no tools)
- AA-LCR (long-context reasoning): **69.0 %**; CritPt: **2.6 %**
- Artificial Analysis Intelligence Index: **16.1** (legacy band)
- AA-Omniscience: accuracy **39.1 %**, hallucination rate **90.9 %**, index −16.3 — the standout weakness
- FrontierMath v2 (Tiers 1–3): **14.1 %** (Tier 4: 4.2 %) — Epoch AI

Coding:

- SWE-bench Verified: **63.8 %** (vendor, custom agent harness) / **54.4 %** (Vals AI, standardized harness)
- AA-SciCode: **46.3 %**; AA Coding Index: **33.3 %**
- Vibe Code Bench: **0.40 %** (Vals AI)
- LiveCodeBench: **no current same-harness number found in this scan** (2025-era ~70 % vendor claims not re-verified)

Long context:

- 1M window with AA-LCR 69.0 %; no MRCR/RULER figure retrievable for this ID in this scan (2025 vendor MRCR pass at 256K/1M reported ≥90 % but not independently reproduced on the pages found)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 54.1 % is respectable and function calling is mature, but GDPval-AA 616 / AA Agentic Index 3.5 % show it does not compete on 2026 agentic work; no Terminal-Bench number exists for the ID. Capped by the collapse on real-world cowork tasks.
- **Reasoning: 72/100.** GPQA 84.4 % and HLE 22.5 % sit in the methodology's mid-to-upper band, but the 90.9 % Omniscience hallucination rate, CritPt 2.6 % and Index 16.1 cap it well below frontier.
- **Context window: 90/100.** A real 1,048,576-token window with 69 % AA-LCR qualifies for the ≥1M tier; it misses 95+ because no ≥98 % retrieval measurement at 512K+ could be verified.
- **Multimodal: 90/100.** Text + image + audio + video + PDF input with thinking and tool use is the methodology's "audio in" band (90–100); capped by text-only output (AA-MMMU-Pro 74.9 % is mid-tier by 2026 standards).
- **Coding: 62/100.** Vendor SWE-bench Verified 63.8 % (custom harness) versus 54.4 % standardized, with AA Coding Index 33.3 % and Vibe Code 0.4 % — genuinely capable at 2025 level, clearly behind on 2026 long-horizon sets.
- **Cost efficiency: 70/100.** $1.25 in / $10.00 out (rising to $2.50/$15 above 200K) is priced like a current flagship while scoring like a legacy one; no $0 tier exists. Between the $1.25/$4.25 (~88) and $3/$15 (~60) anchors.
- **Overall Score: 74/100.** Mean of the five quality dimensions (58 + 72 + 90 + 90 + 62) / 5 = 74.4 → 74; Cost excluded per `RULES.md`. Best fit: multimodal long-context reading on a legacy integration; migrate to `gemini-3.x`/`gemini-4` for agentic or coding work.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog/product card, BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Re-issue note: this file was first drafted 2026-10-04 but never reached disk (a harness/file-View discrepancy made it appear present); rewritten verbatim 2026-10-07 after a direct `Test-Path -LiteralPath` audit.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
