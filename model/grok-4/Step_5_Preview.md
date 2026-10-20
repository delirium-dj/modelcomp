# Grok 4 — findings by Step 5 Preview

- Source: xAI (`grok-4-0709`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 frontier reasoning model (released 2025-07-09) — trained with ~10x more RL compute than Grok 3 on the 200,000-GPU Colossus cluster with native tool use (code execution + real-time web/X search) woven into reasoning. First model to break 50% on Humanity's Last Exam (via the multi-agent Grok 4 Heavy tier), then-SOTA closed-model ARC-AGI-2 (15.9%), and the dominant Vending-Bench long-horizon planner ($4,694 net worth vs Opus 4's $2,077). Now legacy — superseded by Grok 4.1/4.3/4.5/4.6.
- **Provider / access:** xAI API `grok-4-0709`; SuperGrok / Premium+ subscriptions; Grok 4 Heavy only via the $300/month SuperGrok Heavy consumer plan (never a standalone API ID). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-07-09; knowledge cutoff November–December 2024.
- **IDs:** `grok-4-0709` (xAI API), `grok-4` (consumer).
- **Context window:** 256,000 tokens API (128K in the consumer app); ~8K max output.
- **Modalities:** Text and image in → text out; native tool use; live search API across X, web and news.
- **Pricing (as of 2026-10-09):** $3.00 / MTok input, $15.00 output (≤128K); $6.00 / $30.00 above 128K; prompt cache $0.75 (75% off).
- **Architecture:** Proprietary (undisclosed; ~500B estimated by third parties); RL at pretraining scale.

### Raw benchmarks found

Reasoning / knowledge (xAI launch table + AA/independent):

- GPQA Diamond: **87.5%** (Heavy 88.9%); AA's independent run: 87.7%
- HLE: **25.4% no tools / 38.6–41% with tools** (Heavy: **50.7%** text-only — the first model past 50%); HLE's independent leaderboard lists Grok 4 at 24.5% with 56.4% calibration error; AA's run: 26.7%
- AIME 2025: **91.7%** (Heavy 100%); HMMT 2025: 90.0% (Heavy 96.7%); USAMO 2025: 37.5% (Heavy 61.9%)
- ARC-AGI-2 (verified): **15.9%** — then-SOTA for closed models (nearly double Opus 4's ~8.6%); ARC-AGI-1: 66.7%
- MMLU-Pro: 83%; LiveCodeBench (Jan–May): 79% (Heavy 79.4%)
- Artificial Analysis Intelligence Index: 73 at launch (old scale) / **22.5** on the current rebased scale; AA-Omniscience index 2.1, accuracy 40.5%, hallucination rate 64.5%

Coding:

- SWE-bench Verified: **72.5%** (launch table; level with GPT-5 and Gemini 2.5 Pro of the same season)
- LiveCodeBench: **79%** (single attempt)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench / CursorBench: **no verified public score found** for the standard Grok 4

Agentic / tool use:

- Vending-Bench (long-horizon business simulation): **$4,694.15 net worth / 4,569 units** (avg of 5 runs) vs Claude Opus 4's $2,077.41 and the human baseline's $844.05 — the launch's strongest agentic evidence
- HLE with tools: 38.6–41%; Terminal-Bench / τ²-Bench / MCP-Atlas / GDPval-AA: **no verified public score found**
- New independent rows (2026-10-19): τ²-Bench **74.9%** (AA), Gert Labs **42.34%** (weak), React Native Evals **72.6%**, AA-IFBench **53.7%**, CritPt **2.0%** — the τ²/Gert rows partially fill the agentic gap, both mid-to-weak
- BenchLM composite (2026-10-19): **51.77/100** overall, #93 of 956 models, 13 of 644 benchmarks covered; Artificial Analysis today: deprecated (suggests Grok 4.20 0309), Index **22** (estimated, #145/217 — matches the file's 22.5), 82.6 tok/s, TTFT 9.53s, $3/$15 unchanged (blended $4.20/M), 256–260k context, 1 provider
- Native tool use: code execution, web search, X search integrated into the reasoning chain (RL-trained, not bolted on)

Multimodal:

- Text + vision in (API "frontier-level multimodal understanding"); no MMMU/CharXiv figure published for the standard model
- AA-MMMU-Pro: **68.8%** (Artificial Analysis, 2026-10-19) — the first published MMMU row for Grok 4, solidly mid-band

Long context:

- 256K-token window (128K in the consumer app; 260k per AA's current row); prompts above 128K bill at 2x; AA-LCR: **68.0%** (Artificial Analysis, 2026-10-19) — the first published long-context measure, modest

### Normalized scores (1–100)

- **Tool use: 55/100.** The Vending-Bench result ($4,694 vs Opus 4's $2,077 and the human baseline's $844) is genuine long-horizon agentic evidence, and HLE-with-tools 38.6–41% shows real tool integration; capped by the total absence of current-generation agentic benchmarks (no Terminal-Bench, τ³, MCP-Atlas or GDPval numbers) and a 15-month-old tool-use stack.
- **Reasoning: 74/100.** GPQA 87.5–87.7%, AIME 91.7%, HMMT 90.0% and the launch-era HLE leadership were frontier-class in mid-2025; capped by the current AA Intelligence Index of 22.5, AA-HLE 26.7%, ARC-AGI-2 15.9% (newer models score 52.9–89.6%) and AA-Omniscience 2.1 — the reasoning gap to the current frontier is a full generation.
- **Context window: 70/100.** 256,000-token window (128K consumer; 2x pricing above 128K) sits in the 200K–500K band; the first published long-context measure (AA-LCR 68.0%, 2026-10-19) is modest, so it sits lower in the band than the unverifiable 72 the first pass assigned.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; the first published MMMU row (AA-MMMU-Pro 68.8%, 2026-10-19) is solidly mid-band, confirming xAI's "frontier-level multimodal understanding" claim was overstated for the standard model.
- **Coding: 68/100.** SWE-bench Verified 72.5% and LiveCodeBench 79% were frontier-adjacent in July 2025; capped by no published SWE-bench Pro/DeepSWE/SciCode and the fact that the current field runs 76–96% on Verified with 45–89% on Pro — this model's coding is a generation behind.
- **Cost efficiency: 58/100.** $3/$15 per MTok (2x above 128K, cache $0.75) maps to the methodology's ~$3/$15 ≈ 60 tier; cheaper than Claude Opus 4's launch pricing but 2–3x the current value leaders, with no free tier.
- **Overall Score: 67/100.** Mean of the five non-cost dims (55+74+70+68+68)/5 = 67.0 (Context 72→70 on the newly measured AA-LCR 68.0%; Overall unchanged). Best-fit recommendation: a legacy frontier model still useful for math/science reasoning, real-time X-integrated analysis and long-horizon planning simulations; pick Grok 4.6/4.7 or a current frontier model for production coding and tool use.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (deprecated, suggests Grok 4.20 0309: Index 22 estimated #145/217 — unchanged; 82.6 tok/s; TTFT 9.53s; $3/$15 unchanged) and BenchLM (composite 51.77/100, #93/956, 13/644 benchmarks): the file's multimodal and long-context gaps are now measured — AA-MMMU-Pro 68.8% (mid-band, confirms Multimodal 68) and AA-LCR 68.0% (modest — Context trimmed 72→70) — plus new agentic rows τ²-Bench 74.9%, Gert Labs 42.34%, React Native Evals 72.6%, CritPt 2.0%, IFBench 53.7%. Overall unchanged at 67. First pass (2026-10-09) used xAI Grok 4 launch post, ARMES/AI-TLDR/Benchgen spec pages, Artificial Analysis, llmboard, TrustTheBench, HLE leaderboard, deepnoodle.
- Future sources: add a new file next to this one, e.g. `Grok_4.1.md`, using the same headings.
