# DeepSeek V4 Pro — findings by DeepSeek 4.1 Flash

- Source: DeepSeek/DeepSeek-V4-Pro (0813) (`deepseek-v4-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (checkpoint DeepSeek-V4-Pro-0813)
- **Short description:** DeepSeek's open-weight flagship MoE — 1.6T total / 49B active parameters (the GA card lists 1.7T) with hybrid Compressed Sparse Attention + Heavily Compressed Attention, Manifold-Constrained Hyper-Connections and the Muon optimizer, pre-trained on 32T+ tokens. Positioned explicitly as agentic- and coding-first, and the first open-source MoE the vendor claims matches closed frontier models there. **Not an alias** of `deepseek-v4-vision-exp` (a separate experimental vision model) or of the now-retired V4-Flash, whose requests are served by DeepSeek-V4.1-Flash instead.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, base URL `https://api.deepseek.com`, plus `/anthropic`); OpenAI-compatible and Anthropic-compatible endpoints, native Responses API, tool calls, JSON output, chat-prefix and FIM completion, context caching. MIT-licensed weights on Hugging Face for self-hosting (V4-Pro needs a multi-node cluster). Zen route `opencode/deepseek-v4-pro`.
- **Release / knowledge:** preview 2026-04-24 (arXiv technical report 2026-04-26); **GA 2026-08-13** (V4-Pro-0813). Knowledge cutoff not published on the pages checked.
- **IDs:** `deepseek-v4-pro` (DeepSeek API, checkpoint `DeepSeek-V4-Pro-0813`); `deepseek-ai/DeepSeek-V4-Pro` weights (MIT); Zen `opencode/deepseek-v4-pro`. No Free ID verified → cost scored on paid pricing.
- **Context window:** 1,000,000 tokens with **384K max output** (vendor pricing page). Thinking mode is the default; three reasoning-effort levels (low/high/max) since GA.
- **Modalities:** **text in → text out.** The vendor's own feature table marks Vision as "Not supported" for `deepseek-v4-pro` (the vision-capable sibling is the separate experimental model); tool calls, JSON output and reasoning are supported. Third-party pages claiming image/audio/video input for this ID are out of date.
- **Pricing (as of 2026-09-23, per 1M tokens):** cache-miss input **$0.66 off-peak / $1.32 peak**; cache-hit input **$0.022 off-peak / $0.044 peak**; output **$1.98 off-peak / $3.96 peak**. Peak = 01:00–04:00 and 06:00–10:00 UTC Mon–Fri; everything else (incl. weekends) is off-peak at half price.
- **Architecture:** open-weight sparse MoE under MIT; 1.6T total / 49B active per token (GA card: 1.7T); 61 layers plus an MTP block; needs only 27% of V3.2's single-token FLOPs and 10% of its KV cache at 1M context.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.9%** task success (95th percentile, rank 10 of 182; identical as "best reported harness" row — BenchmarkList, checked 2026-09-22)
- Tau3-Banking: **no verified public score found**
- Toolathlon: **74.1%** (rank 1 of 9, 100th percentile); Toolathlon-Verified is cited by the vendor without an exposed value
- GDPval-AA: **1577 Elo** (rank 19 of 340); AutomationBench **43.2%** (rank 10 of 42); Agents' Last Exam **25.7%** (rank 14 of 32)
- BrowseComp **73.5% ±6.0%** (rank 32 of 44); FrontierChallenge **13.4%**; APEX-Agents **32.4%**; SkillsBench **65.0%** (rank 2 of 8)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (HokAI, vendor-checked page, checked 2026-09-03)
- HLE: **42.7%** (96th percentile, rank 18 of 466); HLE with tools **60.0%** (BenchmarkList)
- LCR / MLCR: **no MRCR/RULER row found**; Context Arena returns **64.1%**, **62.7%**, **57.3%** and **30.1%** across four configurations (BenchmarkList) — the vendor does publish an MRCR 1M figure but no value was exposed on the pages checked
- CritPt: **18.0%** (rank 13 of 31); AA-Omniscience **0.83** (37th percentile)
- MMLU **90.1%**, MMLU-Pro **73.5%**, AIME 2025 **85.0%**, HumanEval ~**96.4%** (HokAI); ARC-AGI-2 **79.5%** (HokAI) vs **0.8%** (BenchmarkList row — an evident artefact when read alongside TB2.1 87.9%; both recorded, neither relied on)
- Epoch Capabilities Index **147.50** (#17 of 398, open-weight comparison #4 of 158); CyberGym **83.3%** (rank 1 of 1, small field); $OneMillion-Bench **62.0%**

Coding:

- SWE-bench Verified: **80.6%** (HokAI, checked 2026-09-03); SWE-Marathon **19.0%** (BenchmarkList)
- SWE-bench Pro / LiveCodeBench / SciCode: **no verified public score found** on the pages checked (the vendor's model card reports them, but no numeric values were exposed)
- DeepSWE / DeepSWE 1.1: **62.7%** resolved (78th percentile, rank 6 of 24) — the single best open-model signal for long-horizon agentic coding in this batch
- Convex Coding Evals **27.6%** (rank 25 of 28); Tencent E-Bench-Code **64.3** (rank 8 of 8, 0th percentile) — third-party internal harnesses disagree sharply with the vendor narrative

Long context:

- Context Arena 64.1%/62.7%/57.3% shows moderate retention; the vendor reports an MRCR 1M figure without exposing it, and the 384K output ceiling is the practical limit for long agent runs.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 87.9% reaches the 88%+ frontier reference, Toolathlon 74.1% is a field-leading rank 1 of 9, and GDPval-AA 1577 Elo plus AutomationBench 43.2% back it up; held at the band floor rather than above it by a missing Tau3-Banking number and a weak BrowseComp 73.5% (±6.0, rank 32 of 44).
- **Reasoning: 90/100.** GPQA Diamond 90.1% and HLE 42.7% both clear the frontier references (90%+ / 40%+), with HLE-with-tools 60.0% and MMLU 90.1%; capped by an unexposed LCR/MRCR figure, AA-Omniscience of only 0.83 and the contradictory ARC-AGI-2 rows, so the top of the band (Index 60+) is not claimable.
- **Context window: 94/100.** 1M input with an unusually large 384K max output is the ≥1M tier, but Context Arena 64.1%/62.7%/57.3% shows moderate rather than saturated retention, and peak-hour 1M work is billed at double rate.
- **Multimodal: 15/100.** Scored text-only on the strength of the vendor's own feature table ("Vision: Not supported" for `deepseek-v4-pro`) — the vision pathway is a different, experimental ID. This is the single largest reason the overall score lands in the 70s despite frontier-grade tool and reasoning numbers.
- **Coding: 89/100.** SWE-bench Verified 80.6%, Terminal-Bench 2.1 87.9% and DeepSWE 62.7% (rank 6 of 24) are a genuinely frontier-class agentic-coding profile for an open-weight model, and SkillsBench 65.0% ranks 2 of 8; capped by third-party internal harnesses that disagree sharply (E-Bench-Code 0th percentile) and the absence of SWE-bench Pro/SciCode values.
- **Cost efficiency: 89/100.** Off-peak $0.66 in / $1.98 out with $0.022 cache-hit input is exceptional value for this capability class (aggregator blended rows land near $0.435/$0.87); the score is held at 89 rather than 92+ because peak-hour work costs $1.32/$3.96.
- **Overall Score: 76/100.** (90 + 90 + 94 + 15 + 89) / 5 = 75.6 → **76**. Best fit: the best-value frontier-adjacent agentic coder here, provided the workload is text-only and can be scheduled off-peak — budget for a separate vision model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (DeepSeek official API pricing/feature page for context, output cap, vision support and peak/off-peak rates; the DeepSeek-V4 model card and technical report as summarised by InferenceX/SemiAnalysis; BenchmarkList 33-row evidence table for measured scores; HokAI vendor-checked model page for SWE-bench Verified/GPQA/MMLU figures); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
