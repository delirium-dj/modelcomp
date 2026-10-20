# Gemma 4 31B — findings by Step 5 Preview

- Source: Google (`gemma-4-31b-it`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google DeepMind's largest dense Gemma 4 model (released 2026-04-02, Apache 2.0) — the top open dense model at launch (#3 open model on the Arena AI text leaderboard at Elo 1452) and an intelligence-per-parameter standout that "outcompetes models 20x its size" in Google's framing. 30.7B dense + ~550M vision encoder, 256K context, thinking mode; fits unquantized on a single 80GB H100 (69.9GB BF16 / 17.5GB Q4_0).
- **Provider / access:** Open weights `google/gemma-4-31b` (base + IT) on Hugging Face, Kaggle, Ollama; Google AI Studio; OpenRouter `google/gemma-4-31b-it` ($0.09/$0.34 per MTok). Free on OpenCode Zen (free weights).
- **Release / knowledge:** 2026-04-02. Knowledge cutoff not disclosed.
- **IDs:** `gemma-4-31b-it` (instruction-tuned), `google/gemma-4-31b` (base).
- **Context window:** 256K tokens (262,144 per OpenRouter metadata).
- **Modalities:** Text, image and video in → text out (Artificial Analysis's live row lists text+image+video; **no audio on the 31B** — audio is E2B/E4B/12B-only); thinking mode (reasoning traces); native function calling; native `system` role; 140+ languages.
- **Pricing (as of 2026-10-09):** free open weights (Apache 2.0); OpenRouter $0.09 / MTok input, $0.34 output, cache read $0.05.
- **Architecture:** Dense 30.7B (60 layers), hybrid local sliding-window (1024) + global attention (5:1), pp-RoPE, unified K/V and 37.5% smaller global KV cache, QAT + MTP drafters.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **39.87/100** overall, #142 of 956 models, 26 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **15** (#19/141 open-weights class, 4/4 units — matches the prior 14.7), 35.8 tok/s (#54/64 — slow), TTFT 1.14s, 49M Index tokens (concise vs 82M median), **$0.00/$0.00 per MTok at Google's API** (12 providers), 256K context, 30.7B dense, Apache 2.0

Reasoning / knowledge (official model card, thinking mode):

- GPQA Diamond: **84.3%** (AA's independent run: 85.7%)
- AIME 2026 (no tools): **89.2%**; Codeforces Elo: **2150**
- MMLU-Pro: **85.2%**; MMMLU: **88.4%**; BigBench Extra Hard: 74.4%
- HLE: **19.5% no tools / 26.5% with search** (AA: 23.6%)
- IFBench: **76.0%** (AA: 75.6%); IFEval: 98.9%
- AA-Omniscience (2026-10-19): accuracy **20.0%**, index **−47.9%**, hallucination-rate metric **85.0%** — very weak calibration, consistent with the low Reasoning read
- Artificial Analysis Intelligence Index: **14.7** (reasoning); CritPt: 1.4% (AA)
- Arena AI (text): **1452 Elo** (#3 open model at launch)

Coding:

- LiveCodeBench v6: **80.0%**; LiveBench Coding: 60.33%; AA Coding Index: **43.4**
- SciCode: **43.0%** (card) / 45.5% (AA)
- Terminal Bench Hard: **36.0%** (card) / 36.4% (AA); Terminal-Bench 2.1: 43.4% (AA); Terminal-Bench 4.0: **0.0%** (AA)
- SWE-bench Verified / SWE-bench Pro / DeepSWE: **no verified public score found**
- New independent coding rows (2026-10-19): SWE-Rebench **41.6%**, React Native Evals **75.2%** — mid-band real-world repo-level coding

Agentic / tool use:

- τ²-Bench: retail **86.4%** / telecom 69.3% / airline 75.0%; AA's τ² Telecom run: 59.9%; τ-Bench Banking: 14.8% (AA)
- GDPval-AA: **6.1%** (AA — the agentic knowledge-work suite is a clear weak spot); AA Agentic Index: **4.2**
- MCP-Atlas / Toolathlon / Claw-Eval: **no verified public score found**
- New independent rows (2026-10-19): Gert Labs **35.26%**, AA Agentic Index **6.7%** (replaces the prior 4.2 read), GDPval-AA **Elo 755** — the weak agentic signal is re-confirmed

Multimodal:

- MMMU-Pro: **76.9%** (card) / 73.4% (AA); MATH-Vision: 85.6%; OmniDocBench 1.5 (edit distance): 0.131; MedXPertQA MM: 61.3%

Long context:

- MRCR v2 8-needle @128K: **66.4%**; AA-LCR: **69.7%** (AA); no 256K/1M MRCR figure

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-Bench retail 86.4% / telecom 69.3% / airline 75.0% show solid function-calling for a 31B model; capped by the AA Agentic Index of 4.2, GDPval-AA 6.1% and no published MCP-Atlas/Toolathlon/Claw-Eval numbers.
- **Reasoning: 68/100.** GPQA 84.3–86.0%, AIME 2026 89.2%, MMLU-Pro 85.2% and Codeforces Elo 2150 are strong for the size class; capped by HLE 19.5–23.6%, CritPt 1.4% and the AA Intelligence Index of 14.7 — roughly two intelligence generations behind the frontier.
- **Context window: 72/100.** 256K-token window sits in the 200K–500K band, with MRCR v2 66.4% at 128K and AA-LCR 69.7% as verified evidence; no figure exists at the full 256K length.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 76.9% / 73.4% (AA) and MATH-Vision 85.6%; no audio input (31B lacks the audio encoder) and no non-text output.
- **Coding: 68/100.** LiveCodeBench 80.0%, SciCode 43–45.5% and Terminal-Bench Hard 36.0–36.4% are respectable for an open dense model of this size; capped by Terminal-Bench 4.0 at 0.0%, LiveBench Coding 60.33% and no published SWE-b Verified/Pro numbers.
- **Cost efficiency: 98/100.** Free Apache-2.0 weights (the methodology's $0 = 100 tier), with OpenRouter hosting at $0.09/$0.34 per MTok for those who don't self-host — intelligence-per-dollar is this model's entire proposition.
- **Overall Score: 67/100.** Best-fit recommendation: the best open dense model for local/edge deployment at its size — top-of-class Arena text Elo for 31B and Apache-2.0 freedom on a single 80GB GPU; not a substitute for a frontier API model on hard agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (Index 15, #19/141 open-weights, 4/4 units — unchanged from the prior 14.7; $0/$0 API pricing across 12 providers; text+image+video input row) and BenchLM (composite 39.87/100, #142/956, 26/644 benchmarks): new rows Gert Labs 35.26%, AA Agentic Index 6.7% (prior read 4.2), GDPval-AA Elo 755, SWE-Rebench 41.6%, React Native Evals 75.2%, AA-Omniscience accuracy 20.0% / index −47.9% — all corroborate the existing scores, no change warranted. First pass (2026-10-09) used Google Gemma 4 blog + model card + technical report, HuggingFace, Artificial Analysis, OpenRouter, Sophon, SWEN.AI, EveryLocalAI.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B.md`, using the same headings.
