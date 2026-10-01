# Gemini 3.8 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.8 Flash (`google/gemini-3.8-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's latest 3.8-tier Flash model, optimizing speed/efficiency with frontier reasoning-lite and native audio+vision input. Sibling of Gemini 3.8 Flash Cyber; not the Live/TTS speech variants (those route to `models_voice/`).
- **Provider / access:** Google AI Studio / Vertex AI Gemini API (`gemini-3.8-flash`) and OpenCode Zen. Free tier available (rate-limited) plus paid tier. Generate-content (Chat) endpoint with tool calls.
- **Release / knowledge:** 2026 (Gemini 3.8 family); knowledge cutoff not disclosed in the model card index.
- **IDs:** `google/gemini-3.8-flash`.
- **Context window:** 1,048,576 (1M) (per curated model meta / DeepMind model card).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls; JSON mode. No non-text output (TTS/Live are separate models).
- **Pricing (as of 2026-10-02):** Free tier on AI Studio / Zen (standard rate limits) plus low-cost paid Flash pricing. Scored on the paid Flash tier with free-tier note.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM rows citing the Google DeepMind Gemini 3.8 Flash model card, Artificial Analysis, Vals AI, ARC Prize and Cursor/DeepSWE leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (DeepMind; AA 87.6%, Vals 81.3%) — but Terminal-Bench 4.0 **19.1%** (AA 19.7%)
- GDPval-AA: **1545** Elo (DeepMind; AA-normalized 45.6%)
- OSWorld 2.0: **59.0%** (DeepMind)
- AA Tau3 Banking: **44.9%**; AA AutomationBench 59.9%; AA ITBench 52.5%
- AA Agentic Index: **41.1%**; AA Briefcase 1202 Elo; Finance Agent v2 61.4%
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- AA-GPQA Diamond: **95.3%** (Vals 94.4%); MMLU-Pro (Vals) 90.2%
- HLE-Verified: **54.9%** (DeepMind); AA-HLE 47.8%
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **98.5% / 89.2% / 10.4%** (ARC Prize verified)
- AA-LCR: **81.3%**; MLCR-AA 21.7%
- CritPt: **18.3%**; Artificial Analysis Intelligence Index **40.9**
- Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **89.5%**; SWE-bench (Vals) **80.0%**
- DeepSWE: **73.8%** (DeepSWE v1.1 leaderboard)
- AA-SciCode: **56.6%**; AA Coding Index **76.3%**
- CursorBench 3.2: 69.2% (CursorBench 4.0: 39.6%); FrontierSWE v2: 19.6%

Long context / multimodal:

- LVBench: **87.1%**; CharXiv (no tools) 86.2%; AA-MMMU-Pro 85.6% (1M window; AA-LCR 81.3, but no ≥98% MRCR at 512K+).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 85/100.** Terminal-Bench 2.1 89.4% is frontier-tier, but GDPval-AA 1545, AA Agentic Index 41.1, OSWorld 59.0% and Tau3 44.9% sit mid-band and TB 4.0 collapses to 19.1% — strong executor, lighter planner.
- **Reasoning: 88/100.** GPQA Diamond 95.3%, ARC-AGI-1 98.5% / ARC-AGI-2 89.2% and HLE-Verified 54.9% are elite; capped by a low Intelligence Index (40.9), MLCR 21.7%, CritPt 18.3% and weak Omniscience accuracy (54.6% / 55.2% hallucination).
- **Context window: 96/100.** 1M-token window meets the ≥1M tier, but long-context retrieval evidence is moderate (AA-LCR 81.3%, no ≥98% MRCR at 512K+), so short of 100.
- **Multimodal: 90/100.** Native audio + image + PDF (and long-video LVBench 87.1%) input with text out — the +audio-in band (90–100); held at the floor of that band because there is no non-text output.
- **Coding: 88/100.** LiveCodeBench 89.5%, SWE-bench 80.0%, AA Coding Index 76.3% and DeepSWE 73.8% clear most frontier refs; dragged by FrontierSWE v2 19.6%, CursorBench 4.0 39.6% and borderline DeepSWE/SciCode.
- **Cost efficiency: 88/100.** Low-cost paid Flash pricing plus a rate-limited free tier on AI Studio / Zen; not a $0 unlimited tier, so below the 100 reserved for fully-free evaluated tiers. Cost is excluded from Overall.
- **Overall Score: 89/100.** Mean of Tool 85, Reasoning 88, Context 96, Multimodal 90, Coding 88 = 89.4 → 89. Best fit: high-throughput multimodal (incl. audio) coding/agent pick where latency and cost matter; escalate to a flagship Opus/Muse-class model for deep long-horizon planning.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google DeepMind model card, plus Artificial Analysis, Vals AI, ARC Prize, Cursor and DeepSWE leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
