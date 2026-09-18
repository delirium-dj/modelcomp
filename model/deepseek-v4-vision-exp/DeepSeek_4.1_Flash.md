# DeepSeek V4-Flash-Vision-Exp — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-flash-vision-exp`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp (experimental multimodal checkpoint of the V4-Flash line)
- **Short description:** DeepSeek's experimental multimodal V4-Flash variant, released 2026-08-21. DeepSeek states it matches V4-Flash on text capabilities (agents, reasoning, world knowledge) and makes a "major leap" over V4-Flash on multimodal agent benchmarks, bringing multimodal agent performance close to Claude Opus 4.8. It was a preview checkpoint, not a long-lived SKU.
- **Provider / access:** DeepSeek API — `model=deepseek-v4-flash-vision-exp`, supporting Chat Completions, Messages and Responses wire formats, with images by base64, external URL or the Files API. **Retired:** as of 2026-09-10 (with the V4.1-Flash launch) `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` still resolve for compatibility but are served by DeepSeek-V4.1-Flash at Flash prices.
- **Release / knowledge:** Released 2026-08-21; retired/aliased 2026-09-10. Knowledge cutoff not disclosed.
- **IDs:** `deepseek-v4-flash-vision-exp` (legacy, now routed). Current equivalent is `deepseek-flash` = DeepSeek-V4.1-Flash; open weights live at `huggingface.co/deepseek-ai/DeepSeek-V4-Flash`.
- **Context window:** 1,048,576 tokens for the V4-Flash base line (the experimental checkpoint inherits it); max output up to 384,000 tokens on the base model. Images are tokenized for billing at up to 384 tokens each.
- **Modalities:** text and image in, text out; tool calls yes; reasoning yes (thinking and non-thinking modes on the same ID); JSON output yes.
- **Pricing (as of 2026-09-18):** billed at V4-Flash rates — $0.14 / 1M in and $0.28 / 1M out on DeepSeek's native API (cheapest credible third-party listing $0.07/$0.17), cached input $0.0028 / 1M (98% off). New accounts get 5M free tokens per 30-day period without a credit card. Vision tokens bill at the same per-token rate.
- **Architecture:** V4-Flash base is an open-weight MIT-licensed Mixture-of-Experts model, 284B total parameters with 13B activated per token; V4 adds Hybrid Attention (Compressed Sparse Attention + Heavily Compressed Attention). The vision tower is DeepSeek's own; the checkpoint's exact vision-encoder details were not published.

### Raw benchmarks found

> DeepSeek published no benchmark table for the experimental checkpoint; the numbers
> below are vendor statements or measurements of the V4-Flash base it is built on, and
> are labelled as such.

Agent / tool use:

- Multimodal agent benchmarks: **vendor statement only** — "major leap over V4-Flash, close to Opus-4.8"; no numeric value published
- Terminal-Bench 2.1 (base V4-Flash): **82.7%** (press coverage of the V4-Flash release: "hits 82.7 on Terminal Bench to Beat Pro")
- Tau3-Banking / Tau2-Bench (base τ²-bench): **95.6%** (Epoch AI via Model Beat)
- APEX multi-step agentic (base): **35.0%** (Epoch AI via Model Beat)
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (base V4-Flash): **88.1%** (DeepSeek vendor card via HokAI; a second tracker lists 86.7%)
- HLE (base): **30.3%** (Epoch AI via Model Beat; earlier readings 34.8%)
- SimpleBench (base) **46.3%**; WeirdML (base) **45.6%** (Epoch AI via Model Beat)
- LCR / MLCR / CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index (base): **47** on the AA methodology, **50** on a second tracker's composite
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified (base V4-Flash): **79%** (DeepSeek vendor card via HokAI)
- SciCode (base): **40.2%** (revised down from 45.3% in a September tracker update)
- HumanEval (base, non-agentic): **96.4%** (vendor)
- WebDev Arena (base): **1431 Elo** (revised down from 1576.54)
- LiveCodeBench / Vibe Code Bench / DeepSWE / Coding Index: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value published for the checkpoint or the V4-Flash base; the 1M window is vendor-claimed only.

### Normalized scores (1–100)

- **Tool use: 88/100.** The base line's τ²-bench 95.6%, APEX 35% and 82.7 Terminal-Bench result plus the vendor's "close to Opus 4.8" multimodal-agent claim support a high score; capped by the complete absence of published numbers for the vision checkpoint itself.
- **Reasoning: 82/100.** GPQA Diamond 88.1% is strong for the price class, but HLE 30.3% and an Intelligence Index of 47–50 show the Flash line trades knowledge depth for cost.
- **Context window: 95/100.** 1.05M tokens with up to 384K output is top-tier and per-image billing caps at 384 tokens; no recall-at-depth evidence keeps it below the maximum.
- **Multimodal: 85/100.** Native image input via base64/URL/Files-API with a vendor claim of near-Opus-4.8 multimodal agent behaviour; capped by the experimental, now-retired status and the absence of any published vision benchmark.
- **Coding: 82/100.** SWE-bench Verified 79% and HumanEval 96.4% on the base model are strong value, but SciCode 40.2% and a falling WebDev Arena Elo show agentic coding is not the strength.
- **Cost efficiency: 92/100.** $0.14/$0.28 per 1M with a 98%-off cache hit, $0.07/$0.17 third-party listings and 5M free tokens monthly is among the cheapest capable multimodal options; capped only by not being literally free.
- **Overall Score: 87/100.** (88 + 82 + 95 + 85 + 82 + 92) / 6 = 87.3 → **87**. Best fit: cost-sensitive multimodal agent workloads that accept an experimental, now-aliased checkpoint in exchange for near-flagship tool behaviour at a fraction of the price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (DeepSeek API release notes, DeepSeek pricing pages, HokAI V4-Flash review, Epoch AI figures via Model Beat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.