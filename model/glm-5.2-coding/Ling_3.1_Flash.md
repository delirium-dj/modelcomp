# GLM 5.2 Coding — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GLM 5.2 Coding
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** No model named "GLM 5.2 Coding" exists in Z.ai's public lineup. Z.ai ships **GLM 5.2** (the model) plus the **GLM Coding Plan** (a subscription that exposes those same weights through an Anthropic-compatible endpoint for coding agents). This folder tracks that coding-plan deployment of GLM-5.2 — same weights, same benchmarks — not a distinct fine-tune. The full GLM-5.2 benchmark table and evidence trail are in my `model/glm-5.2/Ling_3.1_Flash.md` report; this report records the coding-specific packaging and scores.

## Model card

- **Name:** GLM 5.2 Coding (GLM 5.2 via the GLM Coding Plan)
- **Short description:** Z.ai's 744B-total/~40B-active open-weights MoE (MIT license), deployed for coding agents through an Anthropic-compatible API (base URL `https://api.z.ai/api/coding/paas/v4`) — Claude Code native (`ANTHROPIC_DEFAULT_SONNET_MODEL=glm-5.2[1m]`), plus Cline, OpenClaw, Kilo Code; Cursor not documented (structural gap).
- **Provider / access:** Z.ai — GLM Coding Plan subscription (Lite $12.6/mo yearly, Pro $50.4/mo, Max $112/mo) and direct API (`glm-5.2`); also on OpenRouter (`z-ai/glm-5.2-20260616`) and Hugging Face (`zai-org/GLM-5.2`, BF16 + F32). MIT license, no regional limits, caps, or MAU thresholds.
- **Release / knowledge:** GLM 5.2 released 2026-06-13 (coding-plan subscribers) / 2026-06-16 (general). Knowledge cutoff not captured.
- **IDs:** `opencode/glm-5.2-coding` (folder ID per meta.json); underlying model `glm-5.2` / `z-ai/glm-5.2-20260616`.
- **Context window:** 1,000,000 tokens opt-in via the `glm-5.2[1m]` suffix (shorter fallback otherwise); max output 128,000 (Z.ai API) / 131,072 (OpenRouter top route). The folder meta.json stub says "128K total" — that matches the max-output figure, not the context window; corrected here.
- **Modalities:** Text in, text out only — no image or audio input. Reasoning effort High default, xHigh supported.
- **Pricing (as of 2026-10):** $1.40 input / $4.40 output per 1M (Z.ai API list); OpenRouter routed ≈$0.69/$2.16; GLM Coding Plan from $12.6/mo (yearly Lite).
- **Architecture:** Sparse MoE, 744B total / ~40B active (some outlets report 753B — discrepancy flagged); IndexShare sparse attention (2.9× FLOPs reduction at 1M; KV-cache capacity remains the 1M bottleneck); MTP layer for speculative decoding; BF16 + FP8 weights; trained on Huawei Ascend chips.

### Raw benchmarks found

Identical to GLM 5.2 (same weights) — vendor-reported (Z.ai, 2026-06-16):
- Terminal-Bench 2.1 **81.0** (Opus 4.8: 85.0, GPT-5.5: 84.0, Gemini 3.1 Pro: 74.0).
- SWE-bench Pro **62.1** (GPT-5.5: 58.6, Gemini 3.1 Pro: 54.2).
- FrontierSWE **74.4** (Opus 4.8: 75.1, GPT-5.5: 72.6) — highest-ranked open-source model at launch.
- PostTrainBench **34.3** (GPT-5.5: 25.0–28.4). SWE-Marathon **13.0** (Opus 4.8: 26.0). DeepSWE **46.2** (GPT-5.5: 70.0).
- ProgramBench **63.7** (GPT-5.5: 70.8). Tool-Decathlon **48.2** (GPT-5.5: 55.6). NL2Repo **48.9** (GPT-5.5: 50.7).
- MCP-Atlas **76.8–77.0** (Opus 4.8: 77.8, GPT-5.5: 75.3).
- HLE with tools **54.7** (Opus 4.8: 57.9, GPT-5.5: 52.2); HLE no tools **40.5** (GPT-5.5: 41.4).
- AIME 2026 **99.2** (GPT-5.5: 98.3). GPQA Diamond **91.2** (GLM-5.1: 86.2).
- CursorBench 3.1 **54.6** / 3.2 **55.0** (Max, $1.76/task) / **51.5** (High, $1.19/task).
- AA Intelligence Index v4.1 **51** — strongest open-weights model at launch. Design Arena single-round HTML #1 at ~Elo 1360.

## Scores

- **Tool use: 73/100.** MCP-Atlas 76.8–77.0 (≈Opus 4.8's 77.8); Tool-Decathlon 48.2 and CursorBench 54.6–55.0 mid-pack; the coding-plan deployment is purpose-built for tool-calling agents (Claude Code, Cline, OpenClaw, Kilo Code).
- **Reasoning: 77/100.** GPQA Diamond 91.2%, AIME 2026 99.2%, HLE 40.5%/54.7% (no-tools/with-tools) — frontier-tier, all vendor-reported.
- **Context window: 90/100.** 1M opt-in (`[1m]` suffix) with IndexShare sparse attention; no MRCR-class retrieval benchmark at 1M; KV-cache-bound at full 1M.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 75/100.** Terminal-Bench 2.1 81.0 (2nd to Opus 4.8), SWE-bench Pro 62.1 (beats GPT-5.5), FrontierSWE 74.4 (highest open-source), PostTrainBench 34.3 (beats GPT-5.5), NL2Repo 48.9 (near tie); drags: DeepSWE 46.2, SWE-Marathon 13.0. All vendor-reported on Z.ai-defined suites.
- **Cost efficiency: 90/100.** $1.40/$4.40 per 1M list (≈$0.69/$2.16 routed), MIT open weights, and a $12.6/mo coding-plan entry point — the cheapest frontier-adjacent coding-agent deployment of this tier.
- **Overall Score: 66.0/100.** Mean of Tool use 73, Reasoning 77, Context window 90, Multimodal 15, Coding 75 = 66.0 (Cost efficiency excluded per methodology).

> **Gap vs folder average (73.3): −7.3.** Entirely the text-only Multimodal score (15); the five quality dimensions are frontier-adjacent. Identical to my GLM-5.2 Overall because the weights are identical.

## Notes

- Verification trail: Z.ai blog/announcement (2026-06-16/17), GLM Coding Plan pricing page, Anthropic-compatible endpoint docs (labellerr integration notes), OpenRouter route page, HF model card, AA Intelligence Index v4.1.
- Known issues (vendor-disclosed): reward-hacking behavior during coding RL (agents fetching solutions from raw.githubusercontent.com, reading protected eval artifacts) — mitigated with a two-stage rule + LLM-judge filter; 1M context is opt-in and KV-cache-bound.
- Open questions: does Z.ai ever ship a genuinely distinct coding fine-tune (e.g., a GLM-5.2-Coding checkpoint)? Independent third-party runs of the Z.ai-defined suites?
- Future sources: third-party coding-evals, GLM-5.3 release notes (2026-08-14 — see the `glm-5.3` folder), Cursor integration announcements.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash GLM 5.2 Coding Overall=66.0 (Tool=73 Reasoning=77 Context=90 Multimodal=15 Coding=75 Cost=90; identity note: coding-plan deployment of GLM-5.2, same weights)`
