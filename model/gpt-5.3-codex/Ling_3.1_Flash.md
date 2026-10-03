# GPT 5.3 Codex — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.3-codex`; Codex line, API `gpt-5.3-codex`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex
- **Short description:** OpenAI's February-2026 coding-specialized frontier (launched 2026-02-05; OpenRouter lists 2026-02-24) — at launch: SWE-bench Pro 56.8%, Terminal-Bench 2.0 77.3%, OSWorld-Verified 64.7% and SWE-Lancer 81.4% industry highs; AA runs put GPQA Diamond at 91.5% (xhigh); the first OpenAI model used in its own training run and the first rated "High" for cybersecurity under the Preparedness Framework.
- **Provider / access:** OpenAI API (Responses/Chat Completions; reasoning low/medium/high/xhigh; streaming, function calling, structured outputs; mid-task steering), Codex app, Azure AI Foundry, Databricks, Vercel AI Gateway, Aihubmix; Fast tier 2× ($3.50/$28.00); deprecated as a user-selectable Codex model for ChatGPT sign-in (still in the API); deprecation listed 2027-08-24 (CloudPrice).
- **Release / knowledge:** 2026-02-05; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.3-codex` / `gpt-5.3-codex`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 400K window and text/image/PDF input.
- **Context window:** 400,000 tokens; 128,000 max output.
- **Modalities:** text, image, PDF in; text out.
- **Pricing (as of 2026-10-02):** $1.75/$14.00 per 1M input/output; cached input $0.175/M; blended (3:1) $4.81/M; ~55–69 tok/s.
- **Architecture:** proprietary (merges GPT-5.2-Codex coding with GPT-5.2 reasoning/knowledge); ~25% faster than GPT-5.2-Codex; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI launch, 2026-02-05; AA runs at xhigh unless noted):

- Terminal-Bench 2.0: **77.3%** — SOTA at launch (now under the 85% frontier bar)
- OSWorld-Verified: **64.7%** — SOTA at launch (current leaders run 78–86%)
- GDPval (win-or-tie rate): **70.9%**
- τ²-Bench Telecom (AA, xhigh): **86.0%**
- Terminal-Bench Hard (AA, xhigh): **53.0%**
- AA Intelligence Index: **54** (#49 of 597 per Dataconomy)
- Cybersecurity CTF: **77.6%** — first OpenAI model classified "High" capability for cybersecurity (Preparedness Framework)
- SWE-Lancer (IC Diamond subset): **81.4%** — SOTA at launch
- BrowseComp / MCP Atlas / Toolathlon / TB2.1: no verified public score found

Reasoning / knowledge (AA, xhigh):

- GPQA Diamond: **91.5%** — clears the 90%+ frontier band
- Humanity's Last Exam: **42.5%** (Dataconomy: 39.9%) — clears the 40%+ bar
- IFBench: **75.4%**; CritPt: **16.9%**
- AA-Omniscience: accuracy **52.9%**, non-hallucination rate **10.8%** — a hallucination weakness
- AA-LCR: **83.3%** (Dataconomy: 78.3%)

Coding:

- SWE-bench Pro: **56.8%** — industry high at launch (now mid-tier; frontier runs 67–80%)
- Terminal-Bench 2.0: **77.3%** — see above
- SciCode: **53.2%** (AA) — under the 55% reference
- AA Coding Index: **53.1** — under the 70% reference
- SWE-Lancer (IC Diamond): **81.4%** — see above
- DeepSWE / SWE-bench Verified / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context / multimodal:

- 400K window; AA-LCR 83.3% (xhigh); no MRCR/RULER/GraphWalks score published
- No MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 79/100.** τ²-Bench Telecom 86.0% (AA, xhigh) is at the frontier bar and Terminal-Bench 2.0 77.3% was a launch SOTA, with OSWorld-Verified 64.7%, GDPval 70.9% win-or-tie and the AA Intelligence Index of 54 supporting; the February-2026 SOTA figures are superseded (TB2.0 now trails the 82–88% leaders) and Terminal-Bench Hard 53.0% caps the score.
- **Reasoning: 83/100.** GPQA Diamond 91.5% (AA, xhigh) clears the 90%+ frontier band and HLE 42.5% clears the 40%+ bar, with IFBench 75.4% and AA-LCR 83.3% supporting; CritPt 16.9%, AA-Omniscience (52.9% accuracy, 10.8% non-hallucination) and the AA Intelligence Index of 54 cap the score.
- **Context window: 76/100.** 400K-token window — double the 200K=70 reference, well under the 1M frontier; AA-LCR 83.3% (xhigh) supports, no ≥98%-at-512K+ figure.
- **Multimodal: 68/100.** text/image/PDF in with text out — the +image/PDF band (60–70); no MMMU or vision-suite figure captured.
- **Coding: 74/100.** SWE-Lancer 81.4% and Terminal-Bench 2.0 77.3% were launch SOTAs, but SWE-bench Pro 56.8% is now mid-tier, SciCode 53.2% is under the 55% reference, the AA Coding Index of 53.1 is under the 70% bar, and Terminal-Bench Hard 53.0% is weak; DeepSWE and SWE-bench Verified are unpublished.
- **Cost efficiency: 70/100.** $1.75/$14.00 per 1M (blended $4.81/M) interpolates to ~70 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — the $14 output half is the drag; cached reads at $0.175/M and the Fast tier (2×) are the offsets.
- **Overall Score: 76/100.** (79+83+76+68+74)/5 = 76.0 → 76 — a strong February-2026 coding frontier (launch SOTAs across SWE-bench Pro, TB2.0, OSWorld, SWE-Lancer; AA GPQA 91.5%) whose launch-era coding leads are superseded and whose AA Coding Index (53.1), SciCode (53.2%) and omniscience hallucination rate (89.2%) are the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI API docs, AI/TLDR, Artificial Analysis via OpenRouter, Dataconomy, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_3_Codex.md`, using the same headings.
