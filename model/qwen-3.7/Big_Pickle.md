# Qwen 3.7 (Qwen3.7 Max) — findings by Big Pickle

- Source: Alibaba Qwen Team (`opencode/qwen-3.7` = Qwen3.7 Max generation flagship)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (slug maps to the Qwen3.7 generation flagship, **Qwen3.7 Max**)
- **Short description:** Alibaba's May 2026 agent-centric flagship — a next-generation model built for programming, office/productivity and long-horizon autonomous execution, with a 1M-token window and frontier-tier GPQA/HLE reasoning. Text-only at the base ID (vision added only in a later 2026-06-08 snapshot).
- **Provider / access:** Alibaba Cloud Model Studio (Bailian) / DashScope (`qwen3.7-max`), OpenRouter, Novita, Together; OpenCode Zen (`qwen3.7-max`). Proprietary — no open weights.
- **Release / knowledge:** Unveiled at Apsara Summit; GA 2026-05-20 (snapshot `qwen3.7-max-2026-05-20`; earlier preview 2026-05-17).
- **IDs:** `qwen3.7-max` (Alibaba/ModelStudio/llm-stats); `opencode/qwen-3.7` per the repo meta stub; siblings `qwen3.7-plus`, `qwen3.7-flash`.
- **Context window:** 1,000,000 tokens (max input 991,808 / max output 131,072 per Alibaba docs; CoT up to 262,144). OpenCode lists max output 66K — channel specs vary.
- **Modalities:** Text in / text out (pure-text public interface; the 2026-06-08 snapshot only adds visual input).
- **Pricing:** ~$1.25–$1.65 in / $3.75–$4.95 out per 1M (market ~$1.48/$4.42 cheapest Alibaba; Novita promo $1.25/$3.75; Zen $2.50/$7.50). Cached-in ~$0.30.
- **Architecture:** Undisclosed (proprietary); "next-generation flagship for the agent-centric era" — function calling, web search, structured outputs, prefix completion, context caching supported.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%**; Terminal-Bench 2.1: **74.5%** (llm-stats / global newswire leaderboard)
- MCP Atlas: **76.4%**; Claw-Eval: **65.2%**; CoWorkBench: **67.2%**; BFCL-V4: **75.0%**; CritPT: **11.4%** (llm-stats rows)
- Toolathlon / OSWorld-Verified / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3–92.4%** (frontier-tier, 97th pct per pricepertoken; Alibaba flagship)
- HLE: **41.4%** (llm-stats); MMLU-Pro: **89.6%**; SciCode: **53.5%**
- AA Intelligence Index: **56.6** (top-tier, per Artificial Analysis headline); Coding index 66.0 (83rd pct, pricepertoken)

Coding:

- SWE-bench Verified: **80.4%**; SWE-Multilingual: **78.3%**; SWE-bench Pro: **60.6%**; LiveCodeBench v6: **91.6%** (llm-stats)
- DeepSWE 1.1: **no verified public score found**

Long context:

- MRCR (128K): **90.4%** (llm-stats); 1M window advertised without independent 512K+ retrieval verification.

Multimodal:

- Text-only at base ID; no verified image/video benchmark for the May snapshot.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 74.5% and MCP Atlas 76.4% are solid mid-tier; CoWork/Claw/BFCL cluster 65–75; no Toolathlon or OSWorld score caps it below the agentic best.
- **Reasoning: 87/100.** GPQA 92.4% and HLE 41.4% clear the 40%+ patient-verification gate and land within the top reasoning band, just under Grok 4.5-class (HLE 42.7).
- **Context window: 90/100.** Documented 1M window with strong 128K retrieval (MRCR 90.4); no verified ≥512K needle score keeps it below 95.
- **Multimodal: 20/100.** Pure-text base interface; vision only on the later separate snapshot.
- **Coding: 84/100.** SWE-bench Verified 80.4% and LCB v6 91.6% with SWE-Pro 60.6%; no DeepSWE score caps it below the 90+ tier.
- **Cost efficiency: 84/100.** ~$1.25–$1.65 in / $3.75–$4.95 out is competitive premium-tier (below DeepSeek-V4's promo, above GPT-5.4's $2.50/$15).
- **Overall Score: 72/100.** (78 + 87 + 90 + 20 + 84) / 5 = 71.8 → 72. A capable text-only flagship best for long-context agentic coding at mid-premium pricing; wait for the multimodal snapshot if vision is required.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-23
- Method: public internet research (Alibaba Cloud docs, llm-stats, pricepertoken, global newswire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model → file saved as `<Source_Name>.md.excluded`, not `.md` (see SELF-EXCLUSION above).