# DeepSeek V4 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Flash (`deepseek-v4-flash`; open weights HF `deepseek-ai/DeepSeek-V4-Flash`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; **architecture corrected: open-weights MoE 284B total / 13B active — previously "proprietary"**; price verified extremely cheap; release date and checkpoint-version caveat added)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0423/0731-line checkpoints)
- **Short description:** DeepSeek's fast V4-line reasoning model — elite competitive programming (Codeforces 3052, LiveCodeBench-CoT 91.6%) and verified 1M-context retrieval (MRCR 1M 78.7%), now also verified open-weights and very cheap. Superseded by V4.1 Flash.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`, OpenAI-compatible); **open weights HF `deepseek-ai/DeepSeek-V4-Flash`** (linked live from OpenRouter — new); OpenRouter `deepseek/deepseek-v4-flash`; still listed on OpenCode Zen as `deepseek-v4-flash` (2026-10-13 listing ✓ — first pass found no Zen ID).
- **Release / knowledge:** OpenRouter lists **released 2026-04-24** with the listing titled "V4 Flash 0423" — my first pass worked from the **0731 reasoning checkpoint** label. Caveat: the OpenRouter/HF route may serve the earlier 0423 training step while benchlm measured 0731 — version drift flagged, not resolved.
- **IDs:** `deepseek/deepseek-v4-flash` / HF `deepseek-ai/DeepSeek-V4-Flash`; `opencode` Zen route `deepseek-v4-flash`.
- **Context window:** **1M tokens** (OpenRouter + benchlm.ai agree — verified); hybrid attention is the long-context efficiency mechanism (OpenRouter blurb). MRCR-1M 78.7% measured.
- **Modalities:** text in/out; reasoning yes — **`reasoning_effort` high/xhigh supported (xhigh = max)** (OpenRouter — new); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** **$0.03843/M in / $1.152/M out on OpenRouter** — NEW (first pass had none; extraordinarily cheap input).
- **Architecture:** **open-weights MoE, 284B total / 13B active** (OpenRouter, citing weights — **corrects first-pass "proprietary"**).

### Raw benchmarks found (benchlm.ai, first-pass snapshot on the 0731 checkpoint — see version caveat)

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Vals 67.0%); TB 2.0: **56.9%**
- GDPval-AA: **1189 Elo** (46.3% normalized); MCP Atlas: **69.0%**; Toolathlon-Verified: **70.3%**; CyberGym: **76.7%**; BrowseComp: **73.2%**
- AA Agentic Index: **41.7%**; Agents' Last Exam: **25.2%**; AutomationBench: **25.1%**
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (GPQA-D; AA 90.8%; Vals 89.9%)
- HLE: **34.8%**; HLE w/ tools: **45.1%**; AA-HLE 38.6%
- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%**; AA-LCR: **79.7%**; CritPt: **16.6%**
- ARC-AGI-1: **89.0%**; ARC-AGI-2: **61.4%**; HMMT Feb 2026: **94.8%**; IMOAnswerBench: **88.4%**; Apex Shortlist: **85.7%**; MMLU-Pro: **86.2%**
- Artificial Analysis Intelligence Index: **34.3**; BenchLM unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **40.4% / 91.7%**

Coding:

- SWE-bench Verified: **79.0%**; SWE-bench (Vals): **88.8%**; SWE-bench Pro: **52.6%**; SWE Multilingual: **73.3%**
- LiveCodeBench Pass@1-CoT: **91.6%**; LiveCodeBench (Vals): **87.3%**; Codeforces: **3052**
- DeepSWE: **54.4%**; NL2Repo: **54.2%**; DSBench-FullStack: **68.7%**; VulcanBench v3: **88.4%**; AA-SciCode: **50.3%**; AA Coding Index: **69.1**

Long context:

- MRCR 1M: 78.7%; CorpusQA 1M: 60.5%; AA-LCR 79.7% — verified retrieval at the full 1M window (mechanism: hybrid attention).

Multimodal:

- Design Arena Website: **1219 Elo**; effectively text-first (vision ships in the separate V4-Flash-Vision-Exp checkpoint).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 80/100.** Unchanged — TB 2.1 82.7%, Toolathlon 70.3%, CyberGym 76.7%, MCP Atlas 69%; capped by GDPval 1189 and AutomationBench 25.1%.
- **Reasoning: 80/100.** Unchanged — GPQA ~89%, HMMT 94.8%, LCR 79.7%, ARC-AGI-2 61.4%; capped by hallucination 91.7% and HLE 34.8%.
- **Context window: 88/100.** Unchanged — 1M window with MRCR-1M 78.7% and CorpusQA-1M 60.5% measured — verified.
- **Multimodal: 15/100.** Unchanged — text-first checkpoint; near floor.
- **Coding: 85/100.** Unchanged — Codeforces 3052, LCB-CoT 91.6%, SWE-bench (Vals) 88.8%; capped by SWE-bench Pro 52.6%.
- **Cost efficiency: 92/100.** +10 — pricing now verified (was provisional 82): $0.038/$1.15 per 1M plus open weights — best-in-class for this capability band.
- **Overall Score: 70/100.** Half-up mean of the five quality dims (80+80+88+15+85)/5 = 69.6 → 70 (unchanged). Best fit: cheap 1M-context text agentic coding with strong math — now also self-hostable; multimodal needs point to V4.1 Flash / Vision-Exp.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (OpenRouter `deepseek/deepseek-v4-flash` — open weights HF `deepseek-ai/DeepSeek-V4-Flash`, 284B/13B MoE, hybrid attention, $0.03843/$1.152, listing "0423" vs my measured 0731 checkpoint (flagged), reasoning efforts high/xhigh; Zen `/zen/v1/models` 2026-10-13 — `deepseek-v4-flash` listed). First-pass benchlm.ai rows retained as that snapshot. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
