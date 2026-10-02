# Claude Sonnet 4.6 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Sonnet 4.6 (`anthropic/claude-sonnet-4.6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (base)
- **Short description:** Anthropic's efficiency-tuned Sonnet refresh (between 4.5 and Sonnet 5). BenchLM places it mid-pack (38/618 rows; 56.86/100, #57 of 645, **Non-Reasoning**): genuinely good at real-world coding (SWE-bench Verified 79.6%, LiveCodeBench Vals 82.1%, React Native Evals 80.6%) and computer-use (OSWorld-Verified 72.1%), but with a big vendor-vs-independent reasoning gap — Anthropic cites GPQA 89.9% / HLE 49%, while Artificial Analysis's independent AA-GPQA is 79.9% and AA-HLE only 13.3%, alongside a low Intelligence Index (24.7) and 68.5% hallucination rate. 200K window.
- **Provider / access:** Anthropic API (`claude-sonnet-4-6`), OpenRouter, Bedrock, Vertex. Tool calls; image input; `noFreeId`.
- **Release / knowledge:** 2026 (Sonnet 4.6); cutoff not disclosed.
- **IDs:** `anthropic/claude-sonnet-4.6`.
- **Context window:** BenchLM and curated `meta.json` agree at **200K**.
- **Modalities:** Text + image in; text out (BenchLM and curated meta agree).
- **Pricing (as of 2026-10-02):** Paid tier (Anthropic Sonnet band; exact per-1M not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (38 of 618 rows; 56.86/100, #57 of 645, Non-Reasoning), citing the Anthropic Sonnet 4.6 system card, Artificial Analysis, Vals AI, OSWorld, Claw-Eval, CyberGym, Gert Labs, Cursor, Cognition, React Native Evals, SWE-Rebench, Epoch AI and OpenRouter (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- OSWorld-Verified **72.1%** (strong computer use); τ²-bench **79.5%**; Claw-Eval 67.8%; CyberGym 65.2%; Gert Labs 62.92%
- Terminal-Bench 2.0 59.1% (Vals 2.1 57.3); weak newest-GUI tiers: OSWorld 2.0 8.3%, ApprenticeBench 2.0%, JobBench 36.9%

Coding:

- SWE-bench Verified **79.6%** (Vals 77.4); LiveCodeBench (Vals) **82.1%**; React Native Evals 80.6%; SWE-Rebench 60.7%; Vibe Code 51.48%; CursorBench 3.1 48.8%; FrontierCode 1.1 24.3%

Reasoning / knowledge (vendor vs independent gap flagged):

- Anthropic system card: GPQA **89.9%** / HLE **49%** (both clear bars); Artificial Analysis independent: AA-GPQA Diamond **79.9%** (under 90) / AA-HLE **13.3%** (well under 40); SuperGPQA 95; MMLU-Pro 79.2 (Vals 87.3)
- AA Intelligence Index **24.7** (low); CritPt 0.9%; AA-LCR 68.3; FrontierMath v2 Tiers 1-3 32.4% / Tier 4 8.3%
- AA-Omniscience Index -3.5 / Accuracy 38.6% / **Hallucination 68.5%** (severe)

Multimodal / long context:

- CharXiv 77.4; AA-MMMU-Pro 70.6; Design Arena Website 1293
- 200K window; AA-LCR 68.3 (no ≥98% MRCR at 512K+ reported)

Instruction:

- AA-IFBench 41.2%

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Where Anthropic's system-card figure and Artificial Analysis's independent run disagree (GPQA/HLE), the verified AA read anchors the score.

- **Tool use: 72/100.** OSWorld-Verified 72.1%, τ²-bench 79.5%, Claw-Eval 67.8% and CyberGym 65.2% are solid broad tool/computer-use signals, but Terminal-Bench 2.0 (59.1%) is only middling and the hardest new GUI tiers collapse (OSWorld 2.0 8.3%, ApprenticeBench 2%).
- **Reasoning: 55/100.** The verified independent read governs: AA-GPQA 79.9% is under the 90 bar and AA-HLE 13.3% is far under the 40 bar (vs Anthropic's own 89.9/49), with a low Intelligence Index (24.7), CritPt 0.9% and a severe 68.5% hallucination rate all dragging unaided reliability down.
- **Context window: 63/100.** A 200K window sits at the top of the 100–200K (50–64) band; AA-LCR 68.3 offers moderate long-context support and no ≥98% MRCR is demonstrated (both sources agree at 200K), so an upper-band placement.
- **Multimodal: 68/100.** Text+image in with competent document/chart reads (CharXiv 77.4, AA-MMMU-Pro 70.6, Design Arena 1293) — a +image band (60–70); no audio/video rows and text-only output keep it out of the higher tiers.
- **Coding: 78/100.** SWE-bench Verified 79.6%, LiveCodeBench Vals 82.1% and React Native Evals 80.6% clear the ~74 bar and read strongly, tempered by weaker hard/long-horizon code (SWE-Rebench 60.7%, CursorBench 48.8%, FrontierCode 24.3%, Vibe Code 51.5%).
- **Cost efficiency: 60/100.** Paid-tier Sonnet pricing (no free ID; exact per-1M not published in curated meta) — provisionally the ~$3/$15 mid band. Cost is excluded from Overall.
- **Overall Score: 67/100.** Mean of Tool 72, Reasoning 55, Context 63, Multimodal 68, Coding 78 = 67.2 → 67. Best fit: an efficient, cost-conscious coding and computer-use assistant (SWE/LCB/OSWorld strength) with solid image understanding; its headline vendor reasoning numbers are not corroborated by Artificial Analysis, and it is weak on unaided hard reasoning (low HLE/Intelligence Index, high hallucination) and on the newest GUI-agent tiers — step up to Opus/Sonnet 5+ for frontier reasoning or autonomy.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Sonnet 4.6 system card, Artificial Analysis, Vals AI, OSWorld, Claw-Eval, CyberGym, Gert Labs, Cursor, Cognition, React Native Evals, SWE-Rebench, Epoch AI and OpenRouter); partial coverage (38/618, Non-Reasoning). Reasoning scored from the independently-verified AA reads (vendor system-card figures noted where they disagree). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
