# DeepSeek V4 Flash — findings by Fledge Alpha

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (now routed to V4.1-Flash)
- **Short description:** DeepSeek's efficiency member of the V4 family — 284B/13B-active MoE with 1M context; the `deepseek-v4-flash` API alias now serves V4.1-Flash (Sep 10, 2026).
- **Provider / access:** DeepSeek API (`deepseek-flash`, aliases `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`); OpenRouter `deepseek/deepseek-v4-flash`; local weights via Hugging Face/GGUF.
- **Release / knowledge:** V4 Flash April 2026; 0731 build July 2026; V4.1-Flash September 10, 2026; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4-flash`, HF `deepseek-ai/DeepSeek-V4.1-Flash`; no Zen Free ID verified.
- **Context window:** 1,048,576 tokens; 384K max output.
- **Modalities:** V4.1-Flash adds native text+image input; text out; thinking/non-thinking modes; tool calling; JSON.
- **Pricing (as of 2026-10-05):** V4.1-Flash off-peak $0.15 in / $0.60 out per 1M (peak $0.30/$1.20); V4-Flash 0731 was $0.09/$0.18 via third-party gateways.
- **Architecture:** 284B total / 13B active (V4 Flash); V4.1-Flash is a 552B asymmetric Causal Encoder–Decoder (8B active input, 16B output).

### Raw benchmarks found

Agent / tool use:

- Terminal Bench 2.1: **82.7** (DeepSeek V4-Flash-0731, vendor)
- Toolathlon Verified: **70.3** (vendor; V4.1-Flash 73.5)
- Cybergym: **76.7** (vendor)
- Long-horizon harness: DeepSWE 54.4, NL2Repo 54.2 (vs Flash-Next)

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (0731, vendor)
- HLE: no verified public score found for Flash (V4 Pro had different card)
- AA Intelligence Index: Flash ~39.8 #45 (aggregator)

Coding:

- LiveCodeBench v6: **91.6** (flash-max, vendor)
- SWE-bench Pro: **56.0** (0731, vendor)
- DeepSWE 1.1: **54.4** (vendor)
- Codeforces rating: **3052** (flash-max, vendor)

Long context:

- 1M context; no MRCR/RULER numeric published.

Multimodal:

- V4.1-Flash: native image input (vendor); vision benchmark numbers (AndroidWorld etc.) not published for Flash proper.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 82/100.** Terminal-Bench 82.7 and Toolathlon 70.3 are strong verified rows at this price point.
- **Reasoning: 85/100.** GPQA 90.8 and flash-max competitive scores; capped by missing HLE row.
- **Context window: 97/100.** 1M spec-verified; 384K max output.
- **Multimodal: 62/100.** Image input added in V4.1-Flash but no published vision evals for this tier.
- **Coding: 82/100.** LCB 91.6 and Codeforces 3052 are elite for a 13–16B-active model; SWE-bench Pro 56 mid-tier.
- **Cost efficiency: 95/100.** $0.15/$0.60 off-peak is near the floor for a 1M-context API.
- **Overall Score: 82/100.** Mean of five non-cost dims (82+85+97+62+82)/5 = 81.6 → 82; best fit: cheapest 1M-context coding/agent workhorse; note 0731 benchmark lineage maps to current alias.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (DeepSeek V4.1-Flash news post, deepseekv4.tech spec page, OpenRouter, aipricecompare.org, Qwen comparison tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
