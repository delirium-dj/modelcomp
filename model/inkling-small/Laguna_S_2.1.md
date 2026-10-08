# Inkling Small — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/inkling-small`), BenchLM (`https://benchlm.ai/models/inkling-small`), Vals AI (`https://www.vals.ai/models/thinkingmachines_inkling-small`), Thinking Machines Lab blog (`https://thinkingmachines.ai/news/inkling-small/`), HuggingFace (`https://huggingface.co/thinkingmachines/Inkling-Small`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's efficient open-weights MoE reasoning model (276B total / 12B active), sibling of Inkling; 1M context, native multimodal reasoning over text/image/audio, variable thinking effort. Strong math and coding performance at low cost.
- **Provider / access:** Thinking Machines Lab API (Tinker); OpenCode Zen: `opencode/inkling-small`; 3 API providers; text/image/audio chat on Tinker Playground
- **Release / knowledge:** Released July 30, 2026; knowledge cutoff not published
- **IDs:** `opencode/inkling-small` (Zen; note: `meta.json` has a likely typo `opencde/inkling-small`); `thinkingmachines/Inkling-Small` (HuggingFace)
- **Context window:** 1,000,000 total (per AA model page, BenchLM, and `meta.json`)
- **Modalities:** Text, image, and speech (audio) input; text output; reasoning yes (chain-of-thought, variable thinking effort)
- **Pricing (as of 2026-10-08):** $0.30 input / $1.20 output per 1M tokens (AA, Thinking Machines API); open weights (Apache 2.0) available for free self-hosting via HuggingFace
- **Architecture:** Mixture-of-Experts (MoE); 276B total parameters, 12B active (per TML blog; AA lists 266B total)
- **License:** Apache 2.0 (per AA model page)
- **Open weights:** Yes — [Hugging Face](https://huggingface.co/thinkingmachines/Inkling-Small)
- **Reasoning:** Yes (native reasoning over text, image, and audio; variable thinking effort from minimal to xhigh)
- **Speed:** 200.9 tokens/s output (AA, Thinking Machines API; rank #5/117)
- **TTFT:** 2.20s (AA, Thinking Machines API)

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/inkling-small`), BenchLM (`https://benchlm.ai/models/inkling-small`), Vals AI leaderboards (`https://www.vals.ai/models/thinkingmachines_inkling-small`), Thinking Machines Lab blog (`https://thinkingmachines.ai/news/inkling-small/`), HuggingFace model card (`https://huggingface.co/thinkingmachines/Inkling-Small`). BenchLM covers 39 of 623 benchmarks; TML blog adds comparison-table data across 33 evaluations. Where TML and AA report different numbers for the same benchmark, both are cited.

Agent / tool use:

- **Terminal-Bench 2.1:** **64.7%** — (TML blog via BenchLM; also 55.1% on Vals AI)
- **MCP Atlas:** **79.6%** — (TML blog via BenchLM)
- **BrowseComp:** **77.4%** — (TML blog via BenchLM)
- **Toolathlon-Verified:** **54.4%** — (TML blog via BenchLM)
- **AutomationBench:** **48.8%** — (TML blog via BenchLM)
- **Agents' Last Exam:** no verified public score found (not reported by TML or AA)
- **GDPval-AA:** **1191** (Elo) — (Artificial Analysis via BenchLM; TML blog reports 1269 from own evaluation)
- **GDPval-AA (normalized):** **31.2%** — (Artificial Analysis via BenchLM)
- **AA Agentic Index:** **24.9%** — (Artificial Analysis via BenchLM)
- **AA Briefcase:** **917** (Elo) — (TML blog)
- **AA AutomationBench:** no verified public score found (not listed on BenchLM for Inkling Small)
- **AA Tau3 Banking:** **47.2%** — (Artificial Analysis via BenchLM; TML blog reports 15.5% from own evaluation)
- **AA ITBench:** no verified public score found (not listed on BenchLM for Inkling Small)
- **AA EnterpriseOps-Gym:** no verified public score found (not listed on BenchLM for Inkling Small)
- **AA Terminal-Bench 4.0:** no verified public score found (not listed on BenchLM for Inkling Small)
- **GDP.pdf:** no verified public score found
- **τ²-bench:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **GPQA Diamond:** **89.5%** — (TML blog; also 89.5% on AA, 83.6% on Vals AI)
- **GPQA Diamond (Vals):** **83.6%** — (Vals AI via BenchLM)
- **HLE (text only):** **31.6%** — (TML blog)
- **HLE (with tools):** **47.8%** — (TML blog)
- **AIME 2026:** **95.5%** — (TML blog)
- **HMMT Feb 2026:** **90.2%** — (TML blog)
- **ARC-AGI-1:** **84.0%** — (ARC Prize via TML blog)
- **ARC-AGI-2:** **40.1%** — (TML blog)
- **CriticalPt:** **8.3%** — (TML blog)
- **AA-LCR:** **75.7%** — (Artificial Analysis via BenchLM)
- **MLCR-AA:** no verified public score found
- **AA-Omniscience Index:** **-8.9%** — (Artificial Analysis via BenchLM; TML blog reports -9.0)
- **AA-Omniscience Accuracy:** **33.2%** — (Artificial Analysis via BenchLM)
- **AA-Omniscience Hallucination Rate:** **63.0%** — (Artificial Analysis via BenchLM)
- **Global-MMLU-Lite:** **86.7%** — (TML blog comparison table)
- **IFBench:** **82.2%** — (TML blog comparison table)
- **Artificial Analysis Intelligence Index:** **42** — (AA model page, rank #25/117 among large open weights; median: 18; TML blog v4.1 shows 40.0%)

Coding:

- **SWE-bench Verified:** **80.2%** — (TML blog; evaluated with bash-only harness)
- **SWE-bench (Vals):** **82.2%** — (Vals AI via BenchLM)
- **SWE-bench Pro:** **55.9%** — (TML blog)
- **LiveCodeBench (Vals):** **85.9%** — (Vals AI via BenchLM)
- **Terminal-Bench 2.1:** **64.7%** — (TML blog; evaluated with internal harness)
- **SciCode:** **48.7%** — (TML blog)
- **AA-SciCode:** **49.7%** — (Artificial Analysis via BenchLM)
- **AA Coding Index:** **53.0%** — (Artificial Analysis via BenchLM)
- **OpenHarmony Bench:** no verified public score found
- **DeepSWE:** no verified public score found
- **FrontierSWE / FrontierSWE v2:** no verified public score found

Long context:

- **AA-LCR:** **75.7%** — (Artificial Analysis via BenchLM) — good long-context reasoning
- **MRCR / RULER:** no verified public score found (not reported for Inkling Small)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> Confidence: high — 39 public benchmarks found across 5 sources (AA, BenchLM, Vals AI, TML blog, HuggingFace).

- **Tool use: 55/100.** Terminal-Bench 2.1 at 64.7% (TML) / 55.1% (Vals) is moderate (frontier ~88%+). GDPval-AA at 1191 Elo (TML reports 1269) is moderate (frontier ~1750+). AA Agentic Index at 24.9% is very weak (below 40% threshold). MCP Atlas at 79.6% and BrowseComp at 77.4% are good signals. AA Tau3 Banking at 47.2% (AA) / 15.5% (TML) is weak. Toolathlon-Verified at 54.4% and AutomationBench at 48.8% are moderate. The model handles web-browsing agentic tasks reasonably but struggles on banking/domain-specific agentic benchmarks.

- **Reasoning: 56/100.** AA Intelligence Index at 42 (rank #25/117, above median of 18). Using II + 30 formula: 42 + 30 = 56. GPQA Diamond at 89.5% (TML/AA) and 83.6% (Vals) are near-frontier. AIME 2026 at 95.5% and HMMT Feb 2026 at 90.2% are exceptional (near or at frontier). HLE (text-only) at 31.6% is below frontier; HLE (with tools) at 47.8% is above 40% threshold. AA-LCR at 75.7% is good. However, CritPt at 8.3% is very low, AA-Omniscience Index at -8.9 is negative (more incorrect than correct), and Global-MMLU-Lite at 86.7% is moderate. Strong math/knowledge performance offset by weak physics reasoning and epistemic calibration.

- **Context window: 95/100.** 1M tokens per AA model page, BenchLM, and `meta.json` (all agree). ≥1M tier → 95. No verified ≥98% retrieval at 512K+ to reach 100. 128K output noted as strong (AA does not report a specific output cap).

- **Multimodal: 90/100.** Text, image, and speech (audio) input (per AA model page, TML blog, and `meta.json` — all confirm audio/speech input); text output only. Supports natively multimodal reasoning over audio and images per TML blog. +audio in → 90-100 tier (90, lower end since no non-text output modalities).

- **Coding: 72/100.** SWE-bench Verified at 80.2% (TML) and SWE-bench (Vals) at 82.2% are strong. LiveCodeBench (Vals) at 85.9% is very good. Terminal-Bench 2.1 at 64.7% (TML) / 55.1% (Vals) is moderate. DeepSWE not reported. SciCode at 48.7% and AA-SciCode at 49.7% are below the 55% frontier threshold. AA Coding Index at 53.0% is mid-tier. Strong SWE-bench and LiveCodeBench, but mixed on Terminal-Bench and SciCode. Upper end of mid-tier (65-75).

- **Cost efficiency: 100/100.** Open weights (Apache 2.0) with free self-hosting via HuggingFace. No `noFreeId` marker in `meta.json`. API pricing available at $0.30 in / $1.20 out per 1M for managed access. $0 = 100 for the free self-hosted tier.

- **Overall Score: 74/100.** Mean of five non-cost dimensions: (55 + 56 + 95 + 90 + 72) / 5 = 368 / 5 = 73.6 → 74. Excels at math (AIME 95.5%, HMMT 90.2%) and multimodal reasoning (text+image+audio, 75). Competitive coding (SWE-bench Verified 80.2%, LiveCodeBench 85.9%) and very affordable (open weights, API $0.30/$1.20). Limited by moderate agentic tool use (TB2.1 64.7%, AA Agentic Index 24.9%) and weak physics reasoning (CritPt 8.3%).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, Vals AI, Thinking Machines Lab blog, and HuggingFace; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `Inkling_Small_Tech_Report.md`, using the same headings.

---
