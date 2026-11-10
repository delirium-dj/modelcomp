# Hy3 — findings by Fledge Alpha

- Source: Tencent (`hy3`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent Hunyuan's open-source flagship fast/slow-thinking MoE, released July 6, 2026, positioned against flagship models 2–5× its size.
- **Provider / access:** OpenRouter `tencent/hy3`; DeepInfra, HF, OpenCode Zen (`hy3-free`), NanoGPT, Vercel AI Gateway; open weights on Hugging Face/ModelScope/AtomGit (Apache 2.0).
- **Release / knowledge:** July 6, 2026 (preview April 23, 2026); knowledge cutoff not published.
- **IDs:** `tencent/hy3`, Zen `hy3-free`; no Zen Free ID for `hy3` itself.
- **Context window:** 262,144 (256K); output up to 131,072.
- **Modalities:** text in/out; reasoning (fast/slow); tools; structured outputs.
- **Pricing (as of 2026-10-05):** ~$0.13–0.18 in / $0.53–0.64 out per 1M; Zen `hy3-free` tier free with 190K context.
- **Architecture:** MoE, 295B total / 21B active; hybrid fast/slow thinking; open-source Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **79.1** (llm-stats)
- BrowseComp: **84.2%** (vendor/llm-stats)
- ClawEval / WildClawBench: strong per Tencent claims; no verified numeric row
- Internal multi-turn agent eval: issue rate 17.4% → 7.9% (vendor)

Reasoning / knowledge:

- GPQA: **90.4** (llm-stats)
- IMO-AnswerBench: **90.0** (llm-stats)
- DeepSearchQA: **91.0%** (llm-stats)
- FrontierScience-Olympiad: strong per Tencent; no public numeric

Coding:

- SWE-Bench Verified: strong claim, no verified numeric published for Hy3 proper
- Terminal-Bench 2.0: strong per vendor; no verified numeric published

Long context:

- MRCR improved vs preview (vendor, qualitative); 256K context; no MRCR percentage published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 80/100.** MCP Atlas 79.1 and BrowseComp 84.2 are verified; multi-turn reliability claims corroborated by internal eval trends.
- **Reasoning: 87/100.** GPQA 90.4, IMO-AnswerBench 90.0, DeepSearchQA 91.0 — frontier-class rows at 21B active.
- **Context window: 90/100.** 256K verified; MRCR improvement reported without a public percentage.
- **Multimodal: 15/100.** Text-only.
- **Coding: 74/100.** Vendor asserts strong SWE-Bench/Terminal-Bench results but publishes no verified row; held below the reasoning score pending numbers.
- **Cost efficiency: 90/100.** ~$0.14/$0.58 per 1M with a free Zen tier variant.
- **Overall Score: 69/100.** Mean of five non-cost dims (80+87+90+15+74)/5 = 69.2 → 69; best fit: cheap open-weights reasoning/agent model; coding score provisional without verified rows.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Tencent Hy research post, tencent.com launch articles, models.dev, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
