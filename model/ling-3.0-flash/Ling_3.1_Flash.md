# Ling 3.0 Flash — findings by Ling 3.1 Flash

- Source: Ant Group / InclusionAI (`ling-3.0-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's next-generation native hybrid reasoning flash model — 124B total / 5.1B active parameters (~12.4% / ~8.1% of the Ring-2.6-1T flagship), matching or outperforming its predecessor across key benchmarks. Works with Claude Code, Kilo Code, Qwen Code, Hermes Agent, and OpenClaw. Deprecated on Artificial Analysis after the Ling 3.1 Flash launch.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash` (MIT open weights); InclusionAI API; Artificial Analysis model page.
- **Release / knowledge:** Released 2026-08-04; knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF); `inclusionai/ling-3-0-flash` (AA). No OpenCode Zen Free ID found in this research.
- **Context window:** 262,144 tokens (262K) — verified on the AA page, BenchLM, and the model card's harness configs.
- **Modalities:** text in; text out; reasoning yes (native hybrid reasoning); tool calls yes (BFCL v4, MCP-Atlas, agent frameworks); JSON mode per BFCL support.
- **Pricing (as of 2026-10-10):** $0.07 / 1M input, $0.22 / 1M output (InclusionAI API, AA); blended 7:2:1 ≈ $0.05 / 1M; 355.8 tok/s; TTFT 2.52s; very verbose (260M tokens on the Index eval vs 100M median).
- **Architecture:** MoE, 124B total / 5.1B active per token; native hybrid reasoning; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (InclusionAI model card, AA protocol, Terminus 2 harness, 3 runs/task; the TB leaderboard lists 50.2%)
- AA τ³-Banking: **28.0%** (InclusionAI model card, GPT-5.4-mini user simulator + judge)
- MCP-Atlas: **65.5%** (InclusionAI model card, 500-task public set, official v1 harness, 20-turn limit)
- BFCL v4: **73.0%** (InclusionAI model card)
- SkillsBench: **44.8%** (InclusionAI model card, kilo-code, 87 tasks, 3-run average)
- GDPval-AA: **1107** (InclusionAI model card, Stirrup harness, 220 tasks, 250-turn limit)
- BrowseComp: **72.2%** (single-agent, pass@1; multi-agent variant also evaluated)
- WideResearch / WideSearch: **73.6%** (InclusionAI model card, GPT-4.1 judge)
- Toolathon / Claw-Eval / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (InclusionAI model card; AA-GPQA Diamond 85.5%; Vals AI 84.8%)
- HLE: **22.7%** (InclusionAI model card; AA-HLE 23.7%)
- AIME 2026: **93.2%** (HF evaluation results); HMMT Feb 2026: **~87%**; IMOAnswerBench: **~83%** (HF evaluation results, truncated in aggregation)
- MMLU-Pro: **82.0%** (Vals AI leaderboard)
- Artificial Analysis Intelligence Index: **20** (AA — #3/65 among comparable open weights, median 8)
- AA-Omniscience Accuracy: **18.2%**; AA-Omniscience Hallucination Rate: **44.1%**; AA-Omniscience Index: -17.9
- LCR / MLCR / CritPt: no verified public score found

Coding:

- LiveCodeBench v5: **82.8%** (InclusionAI model card; Vals AI LiveCodeBench: 84.0%)
- SWE-bench Pro: **56.6%** (InclusionAI model card, OpenHands harness, temp 0.6)
- SWE-bench Multilingual: **72.4%** (InclusionAI model card)
- SWE-bench (Vals AI): **65.2%**
- SciCode: **41.2%** (InclusionAI model card); AA-SciCode: **42.0%**
- AA Coding Index: **50.6%**
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks value reported (262K window; long-context understanding claimed strong in the card) — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 65/100.** BFCL v4 73.0%, BrowseComp 72.2%, and WideResearch 73.6% are solidly mid, MCP-Atlas 65.5% and τ³-Banking 28.0% are mid, and TB 2.1 57.0% with GDPval-AA 1107 sit in the mid band (50–70); SkillsBench 44.8% holds it back from 70+.
- **Reasoning: 70/100.** GPQA 85.0% is above the mid band and AIME 2026 93.2% / HMMT ~87% are strong, but HLE 22.7% is weak and the AA Intelligence Index of 20 is low — the composite and the effort-level benchmarks disagree.
- **Context window: 71/100.** 262,144 tokens — the 200K–500K band just above the 200K = 70 anchor; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band; the VL sibling covers vision.
- **Coding: 74/100.** LiveCodeBench v5 82.8% and SWE-bench Multilingual 72.4% are strong, SWE-bench Pro 56.6% and AA Coding Index 50.6% are mid, and SciCode 41.2% is weak — a good-but-uneven coding profile.
- **Cost efficiency: 97/100.** $0.07/$0.22 per 1M (blended ≈ $0.05) is at the top of the pricing scale; MIT open weights allow free self-hosting. Verbosity (260M Index tokens) inflates real bills.
- **Overall Score: 59/100.** Mean of Tool 65, Reasoning 70, Context 71, Multimodal 15, Coding 74 = 59.0. Best-fit: dirt-cheap open-weight hybrid-reasoning flash model for agentic daily workflows and coding; weak HLE/Omniscience evidence argues against frontier-reasoning reliance.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (inclusionAI/Ling-3.0-flash Hugging Face card, Artificial Analysis model page, BenchLM aggregation, Vals AI leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. HMMT and IMOAnswerBench values were truncated in the aggregation source and are marked approximate.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
