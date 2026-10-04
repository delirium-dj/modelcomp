# Qwen 3.5 — findings by Qwen 3.8 27B

- Source: Alibaba/Qwen3.5-397B-A17B, e.g. OpenRouter (`qwen/qwen3.5-397b-a17b`), OpenCode Zen (`opencode/qwen-3.5`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 (flagship `Qwen3.5-397B-A17B`; the Qwen 3.5 generation also ships Plus/Flash/9B–122B variants tracked in their own folders)
- **Short description:** Alibaba's Qwen3.5-generation flagship — a 397B-total/17B-active native vision-language MoE with a linear-attention + sparse-experts hybrid, released 2026-02-16 under Apache-2.0; open weights on Hugging Face.
- **Provider / access:** Alibaba API (first-party, per Artificial Analysis), OpenRouter `qwen/qwen3.5-397b-a17b` (Chat Completions), OpenCode Zen `opencode/qwen-3.5`; self-hosting via HF `Qwen/Qwen3.5-397B-A17B`.
- **Release / knowledge:** released 2026-02-16 (Artificial Analysis FAQ); knowledge cutoff not stated on the model card.
- **IDs:** OpenRouter `qwen/qwen3.5-397b-a17b`; Zen `opencode/qwen-3.5` (per repo metadata); reasoning and non-reasoning variants both tracked by AA.
- **Context window:** 262,144 native, extensible to ~1,010,000 tokens (HF model card); Artificial Analysis lists 262k.
- **Modalities:** text + image in, text out (AA; the series is described as native vision-language on OpenRouter); reasoning on (non-reasoning variant available); tool calls supported; JSON mode not verified.
- **Pricing (as of 2026-10-04):** $0.60 in / $3.60 out per 1M on Alibaba's API (AA); $0.55 / $3.50 on OpenRouter; open weights (Apache-2.0) so self-hosting is free. No free API tier found.
- **Architecture:** 397B total / 17B active MoE (512 experts, 10 routed + 1 shared active), gated attention, multi-token prediction; Apache-2.0, weights public.

### Raw benchmarks found

Agent / tool use:

- TAU2-Bench: **86.7** (vendor table, HF model card; vs Claude 4.5 Opus 91.6, GPT-5.2 87.1, Gemini-3 Pro 85.4)
- BFCL-V4: **72.9** (vendor table; vs Claude 4.5 Opus 77.5, Gemini-3 Pro 72.5)
- MCP-Mark: **46.1** (vendor table); Tool Decathlon: **38.3** (vendor table); VITA-Bench: **49.7** (vendor table)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4** (vendor table; HF eval rank #18; vs GPT-5.2 92.4, Gemini-3 Pro 91.9)
- HLE: **28.7** (HLE-Verified1: 37.6; vs Gemini-3 Pro 37.5, GPT-5.2 35.5)
- LCR: AA-LCR **68.7** (vendor table; LongBench v2 **63.2**)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **18 / #60 of 118** (below the open-weights-large class median of 19)
- Math: AIME26 **91.3**, HMMT Feb-25 **94.8**, HMMT Nov-25 **92.7** (vendor table)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **76.4%** (HF model card / .eval_results, rank #18)
- LiveCodeBench v6: **83.6** (vendor table; vs Gemini-3 Pro 90.7, GPT-5.2 87.7)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- AA-LCR 68.7 and LongBench v2 63.2 at 262K; card states 262,144 native, extensible to ~1,010,000 — no MRCR/RULER retrieval proof at extended length found.

### Normalized scores (1–100)

- **Tool use: 78/100.** TAU2 86.7 and BFCL-V4 72.9 are solid (near the vendor's own frontier peers), but MCP-Mark 46.1, Tool Decathlon 38.3 and VITA 49.7 show uneven agentic performance; no public Terminal-Bench/Tau3 numbers.
- **Reasoning: 65/100.** GPQA 88.4 and strong math (AIME26 91.3) sit near the top of the vendor's comparison set, yet HLE 28.7 and AA Index 18 (below the class median) cap this well under the 90+ frontier band.
- **Context window: 72/100.** 262K native (200K–500K tier = 65–84, 200K = 70) with a ~1.01M extended claim that lacks published retrieval proof; AA-LCR 68.7 is mid-band.
- **Multimodal: 65/100.** Text + image in, text out only — mid of the image-in band (60–70); native vision-language design but no video/audio in or non-text out verified for this ID.
- **Coding: 79/100.** SWE-bench Verified 76.4% plus LiveCodeBench 83.6% are strong for the generation, but LiveCode trails the table's top rows (Gemini-3 Pro 90.7) and no SciCode/DeepSWE row exists — just under the frontier refs.
- **Cost efficiency: 85/100.** $0.60/$3.60 per 1M (first-party API) sits above the ~$0.60/$2.20 ≈ 92 reference; open weights soften this for self-hosters (no Free API tier).
- **Overall Score: 72/100.** Half-up mean of (78, 65, 72, 65, 79) = 71.8 → 72 — a strong open-weights all-rounder of the 3.5 generation: pick it for GPQA-level reasoning + SWE-class coding at Apache-2.0 prices; escalate to the 3.8 generation for frontier HLE/agent depth.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** - 2026-10-04
- Method: public internet research (Hugging Face model card benchmark tables, Artificial Analysis model page, OpenRouter model API); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
