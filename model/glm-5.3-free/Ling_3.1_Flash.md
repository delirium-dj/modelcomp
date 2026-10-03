# GLM 5.3 Free — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GLM 5.3 Free
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE:** No model named "GLM 5.3 Free" exists as a distinct checkpoint. Z.ai ships **GLM 5.3** (the model); "GLM 5.3 Free" is the **free-tier deployment** of those same weights on OpenCode Zen (model id `glm-5.3` at `https://opencode.ai/zen/v1`) and on TokenRouter (`z-ai/glm-5.3-free`, $0.00/$0.00). Same weights, same benchmarks as GLM 5.3 — the only difference is access and price. Full benchmark table and evidence trail: my `model/glm-5.3/Ling_3.1_Flash.md` report.

## Model card

- **Name:** GLM 5.3 Free (free-tier GLM 5.3)
- **Short description:** Z.ai's 744B-total/40B-active open-weights MoE flagship (same base as GLM-5.2, all gains from post-training), served free on OpenCode Zen's free-model catalog and TokenRouter.
- **Provider / access:** OpenCode Zen (free tier; OpenAI-compatible Chat Completions at `https://opencode.ai/zen/v1`; supports reasoning, tool calling, structured output, temperature control); TokenRouter (`z-ai/glm-5.3-free`). Zen's own caveat: free offers "can expire and may have different data terms… not a promise of unlimited or permanent free inference." Free tiers are quota-capped (a March 2026 Zen user hit a rate limit after 11 prompts on the earlier glm-5-free listing — illustrative of free-tier throttling, not a measured limit for this model).
- **Release / knowledge:** GLM 5.3 released 2026-08-14 (weights 2026-08-25); free Zen listing since 2026-08-18 (freellm.net). Knowledge cutoff not captured.
- **IDs:** `glm-5.3` (Zen); `z-ai/glm-5.3-free` (TokenRouter); repo folder `glm-5.3-free`.
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** Text in, text out only. Reasoning effort low/high/max (default max); clear_thinking default false.
- **Pricing (as of 2026-10):** Free on OpenCode Zen and TokenRouter ($0.00/$0.00); the underlying paid model is $1.40 input / $4.40 output per 1M (Z.ai Zen paid row), cached read $0.26. Custom "glm-5.3" license (near-MIT; MaaS providers exceeding $10B aggregate revenue in 12 consecutive months trigger Z.AI security review — not OSI-approved).
- **Architecture:** Sparse MoE, 744B total / 40B active (official README; meta.json says 753B/40B — discrepancy flagged), FP8 + BF16; reasoning_effort low/high/max.

### Raw benchmarks found

Identical to GLM 5.3 (same weights) — vendor-reported (Z.ai, 2026-08):
- Terminal-Bench 2.1 **88.2**; Terminal-Bench 3.0 **28.3** (open-weights SOTA); DeepSWE v1.1 **66.9**; NL2Repo **58.0**; ProgramBench Almost Solved **19.0**; FrontierSWE **78.1**; SWE-Marathon v1.1 **42.5**; PostTrainBench **39.8**; Toolathlon Verified **73.0**; AutomationBench v1.0.6 **48.2** (best); ALE-CLI **28.5**; GDPval-AA v2 **1769** (best); HLE w/ tools **62.5**; HLE no tools (not captured for 5.3); CyberGym **84.5** (SOTA); ExploitGym 2h/6h **105/130**; ExploitBench **54.4**; AIME 2026 and GPQA Diamond values as in the GLM-5.3 report; Z.ai Code Bench +50% vs GLM-5.2.
- NIST CAISI (2026-09-17): SEC-Bench Pro **40.4%** (74/183), ExploitBench **61.1%** (9.8/16 best-of-3), ExploitGym Userspace **9.4%** (47/498) — "most cyber-capable open-weight model released to date," lags US frontier ~4 months.
- Anthropic (2026-09-29): ExploitBench V8 end-to-end exploits **50/410** (Mythos Preview 56/410); internal Binary Exploitation full control-flow hijacks **4%** of 100 tasks; safeguards bypassed 64–100% with simple techniques; abliteration cut refusal >90% with no GPQA-Diamond capability loss.

## Scores

- **Tool use: 75/100.** Toolathlon Verified 73.0, AutomationBench 48.2 (best in class), ALE-CLI 28.5 — same weights as GLM 5.3.
- **Reasoning: 72/100.** HLE w/ tools 62.5, GDPval-AA v2 1769 (best), AA-class reasoning evidence as in the GLM-5.3 report.
- **Context window: 95/100.** 1M tokens exercised at full length in ALE, FrontierSWE, PostTrainBench, SWE-Marathon, and NL2Repo.
- **Multimodal: 15/100.** Text-only model.
- **Coding: 75/100.** TB 2.1 88.2, TB 3.0 28.3 (open-weights SOTA), DeepSWE 66.9, FrontierSWE 78.1, SWE-Marathon 42.5, PostTrainBench 39.8, NL2Repo 58.0.
- **Cost efficiency: 100/100.** Free on OpenCode Zen and TokenRouter (quota-capped, limited-time offer).
- **Overall Score: 66.4/100.** Mean of Tool use 75, Reasoning 72, Context window 95, Multimodal 15, Coding 75 = 66.4 (Cost efficiency excluded per methodology).

> **Gap vs folder average (72.0): −5.6.** Same gap as my GLM-5.3 report — driven by the text-only Multimodal score (15). Quality is identical to GLM 5.3 because the weights are identical; only Cost efficiency differs (100 vs 88).

## Notes

- Verification trail: OpenCode Zen docs (free-model catalog, `glm-5.3` id, OpenAI-compatible endpoint, free-offer caveats), TokenRouter listing (`z-ai/glm-5.3-free`, $0.00/$0.00, 1M/131,072), freellm.net (free listing since 2026-08-18, 1M context, reasoning/tool-calling/JSON-mode capabilities), Z.ai GLM-5.3 blog and benchmark table, models.dev catalogue.
- Known issues: free-tier quotas and data terms differ from paid (Zen caveat); the underlying model's vendor-disclosed reward-hacking mitigation and KV-cache-bound 1M context carry over (see the GLM-5.3 report).
- Open questions: how long the free offer lasts; whether free-tier rate limits are documented anywhere official.
- Future sources: Zen catalog updates, Z.ai free-tier policy pages.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash GLM 5.3 Free Overall=66.4 (Tool=75 Reasoning=72 Context=95 Multimodal=15 Coding=75 Cost=100; identity note: free Zen/TokenRouter deployment of GLM-5.3 weights)`
