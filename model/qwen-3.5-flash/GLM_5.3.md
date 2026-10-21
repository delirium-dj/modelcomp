# Qwen3.5 Flash — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-flash`, hosted tier)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's hosted fast tier of the Qwen3.5 generation (February 2026): proprietary (weights private), reasoning-capable, 1M-token context, with text, image, and video input. Top use case: an ultra-cheap long-context multimodal endpoint for high-volume knowledge, legal, and live-coding work.
- **Provider / access:** Alibaba Cloud Model Studio `Qwen3.5-Flash` (DashScope OpenAI-compatible); 11 hosted providers under the models.dev canonical `alibaba/qwen3.5-flash` (Chat Completions; tools, reasoning, response_format accepted per the provider rows).
- **Release / knowledge:** released 2026-02-23 (Vals AI; models.dev concordant); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-flash` (models.dev canonical), `Qwen3.5-Flash` (DashScope / Vals AI listing).
- **Context window:** 1,000,000 tokens with ~66K max output (65,536 per models.dev; 66K per Vals AI) — concordant on models.dev, BenchLM, and Vals AI.
- **Modalities:** text, image, and video in (Vals AI modality panel); text out; reasoning yes (BenchLM: reasoning type); tool calls yes; JSON/structured output yes (models.dev structured = yes); file input not supported (Vals AI).
- **Pricing (as of 2026-10-21):** typical $0.10 in / $0.40 out per 1M (Vals AI, BenchLM); cheapest hosted route $0.0282 in / $0.282 out per 1M (models.dev, 11 providers); ~$0.08 per test on the Vals Index — flagged there as strong cost-effectiveness for its tier.
- **Architecture:** proprietary hosted tier, weights private (Vals AI "Private"; models.dev "Closed"); no parameter count or structure disclosed.

### Raw benchmarks found

> Independent measurements from Vals AI (evaluated 2026, accuracy 65.93% avg across its suite) and Epoch AI via BenchLM (BenchLM composite 42.73/100, #130 of 972, 5 of 668 benchmarks covered — partial coverage, conservative). No official Alibaba benchmark table exists for this hosted tier. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.0: **24.72%** (Vals AI, rank 54/67 — weak vs field)
- Terminal-Bench 2.1: no verified public score found
- Finance Agent: **46.7%** (Vals Index update, 2026-03-02)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.83% ±1.90** (Vals AI, rank 60/138; BenchLM/Vals concordant 82.8%)
- MMLU-Pro: **84.06% ±0.36** (Vals AI, rank 68/138; BenchLM 84.1% concordant)
- MMMU Pro: **81.91% ±0.93** (Vals AI, rank 38/93)
- FrontierMath v2 (Tiers 1-3): **18.246%** (Epoch AI via BenchLM)
- LegalBench: **84.28% ±0.41** (Vals AI, rank 36/151 — best rank on the Vals panel)
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no page for this tier (not tracked)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench: **64.40% ±2.14** (Vals AI, rank 74/88; BenchLM concordant 64.4%); SWE-bench Verified subset: **54.9%** (Vals Index update)
- LiveCodeBench: **83.28% ±1.04** (Vals AI, rank 49/143; BenchLM 83.3% concordant)
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- MedCode: **33.00% ±1.79** (Vals AI, rank 86/107 — weak)

Long context:

- 1,000,000-token window (spec-verified on models.dev, BenchLM, and Vals AI); no MRCR / RULER / GraphWalks retrieval score published.

Other Vals rows (context for breadth): MedScribe 70.62%, MortgageTax 67.37%, SAGE 42.49%, TaxEval v2 72.16%; Vals Index overall **#22 (49.6% accuracy)**; Vals notes ~2m30s latency.

### Normalized scores (1–100)

- **Tool use: 40/100.** The verified agentic numbers are weak — Terminal-Bench 2.0 at 24.72% (rank 54/67) and Finance Agent 46.7% — with no Tau/GDPval/OSWorld coverage; capped hard by the terminal-agent result.
- **Reasoning: 70/100.** GPQA Diamond 82.83%, MMLU-Pro 84.06%, MMMU Pro 81.91%, and LegalBench 84.28% are strong for a budget tier; capped by FrontierMath v2 Tiers 1-3 at only 18.25%, no HLE/LCR data, and no AA Intelligence Index coverage.
- **Context window: 95/100.** 1,000,000 tokens with ~66K output, triple-verified (≥1M tier = 95–100); held at 95 because no long-context retrieval score is published.
- **Multimodal: 85/100.** Text, image, and video input with a strong measured MMMU Pro 81.91%; capped at the video-in band by text-only output and no audio input.
- **Coding: 65/100.** LiveCodeBench 83.28% is genuinely strong, but SWE-bench 64.4% ranks 74/88, the Verified subset drops to 54.9%, and MedCode 33% is weak; capped by the agentic-coding end of the evidence.
- **Cost efficiency: 97/100.** Typical $0.10/$0.40 with cheapest routes at $0.0282/$0.282 and ~$0.08 per Vals Index test — near the ~$0.10/$0.20 value band.
- **Overall Score: 71/100.** Half-up mean of the five quality dims (40 + 70 + 95 + 85 + 65 = 355, 355/5 = 71.0 → 71); best fit: an ultra-cheap 1M-context multimodal workhorse for knowledge, legal, and live-coding volume — not for terminal-hard agentic work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (Vals AI benchmark panel and Vals Index update, BenchLM composite with Epoch AI FrontierMath row, models.dev catalog, llm-stats attempt — human-gated); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
